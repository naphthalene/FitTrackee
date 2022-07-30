from datetime import datetime
from typing import Dict
from unittest.mock import Mock, patch

import pytest
from flask import Flask

from fittrackee.federation.exceptions import FederationDisabledException
from fittrackee.users.exceptions import (
    FollowRequestAlreadyProcessedError,
    NotExistingFollowRequestError,
)
from fittrackee.users.models import FollowRequest, User, UserSportPreference
from fittrackee.workouts.models import Sport, Workout


class TestUserModel:
    def test_it_returns_username_in_string_value(
        self, app: Flask, user_1: User
    ) -> None:
        assert '<User \'test\'>' == str(user_1)


class UserModelAssertMixin:
    @staticmethod
    def assert_user_account(serialized_user: Dict, user: User) -> None:
        assert serialized_user['admin'] == user.admin
        assert serialized_user['is_active'] == user.is_active
        assert serialized_user['username'] == user.username

    @staticmethod
    def assert_user_follow_infos(
        serialized_user: Dict, user: User, follows: bool, is_followed_by: bool
    ) -> None:
        assert serialized_user['followers'] == user.followers
        assert serialized_user['following'] == user.following
        assert serialized_user['follows'] == follows
        assert serialized_user['is_followed_by'] == is_followed_by

    @staticmethod
    def assert_user_profile(serialized_user: Dict, user: User) -> None:
        assert serialized_user['bio'] == user.bio
        assert serialized_user['birth_date'] == user.birth_date
        assert serialized_user['first_name'] == user.first_name
        assert serialized_user['last_name'] == user.last_name
        assert serialized_user['location'] == user.location
        assert serialized_user['picture'] is False

    @staticmethod
    def assert_workouts_keys_are_present(serialized_user: Dict) -> None:
        assert 'nb_sports' in serialized_user
        assert 'nb_workouts' in serialized_user
        assert 'records' in serialized_user
        assert 'sports_list' in serialized_user
        assert 'total_ascent' in serialized_user
        assert 'total_distance' in serialized_user
        assert 'total_duration' in serialized_user


class TestUserSerializeAsAuthUser(UserModelAssertMixin):
    def test_it_returns_user_account_infos(
        self, app: Flask, user_1: User
    ) -> None:
        serialized_user = user_1.serialize(user_1)

        self.assert_user_account(serialized_user, user_1)
        assert serialized_user['email_to_confirm'] == user_1.email_to_confirm

    def test_it_returns_user_profile_infos(
        self, app: Flask, user_1: User
    ) -> None:
        serialized_user = user_1.serialize(user_1)

        self.assert_user_profile(serialized_user, user_1)

    def test_it_returns_user_preferences(
        self, app: Flask, user_1: User
    ) -> None:
        serialized_user = user_1.serialize(user_1)

        assert serialized_user['imperial_units'] == user_1.imperial_units
        assert serialized_user['language'] == user_1.language
        assert serialized_user['timezone'] == user_1.timezone
        assert serialized_user['weekm'] == user_1.weekm
        assert serialized_user['display_ascent'] == user_1.display_ascent

    def test_it_returns_workouts_infos(self, app: Flask, user_1: User) -> None:
        serialized_user = user_1.serialize(user_1)

        self.assert_workouts_keys_are_present(serialized_user)

    def test_it_does_not_return_confirmation_token(
        self, app: Flask, user_1_admin: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1_admin)

        assert 'confirmation_token' not in serialized_user


class TestUserSerializeAsAdmin(UserModelAssertMixin):
    def test_it_returns_user_account_infos(
        self, app: Flask, user_1_admin: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1_admin)

        self.assert_user_account(serialized_user, user_2)
        assert serialized_user['email_to_confirm'] == user_2.email_to_confirm

    def test_it_returns_user_profile_infos(
        self, app: Flask, user_1_admin: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1_admin)

        self.assert_user_profile(serialized_user, user_1_admin)

    def test_it_does_return_user_preferences(
        self, app: Flask, user_1_admin: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1_admin)

        assert 'imperial_units' not in serialized_user
        assert 'language' not in serialized_user
        assert 'timezone' not in serialized_user
        assert 'weekm' not in serialized_user

    def test_it_returns_workouts_infos(
        self, app: Flask, user_1_admin: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1_admin)

        self.assert_workouts_keys_are_present(serialized_user)

    def test_it_does_not_return_confirmation_token(
        self, app: Flask, user_1_admin: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1_admin)

        assert 'confirmation_token' not in serialized_user


class TestUserSerializeAsUser(UserModelAssertMixin):
    def test_it_returns_user_account_infos(
        self, app: Flask, user_1: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1)

        self.assert_user_account(serialized_user, user_2)
        assert 'email_to_confirm' not in serialized_user

    def test_it_returns_user_profile_infos(
        self, app: Flask, user_1: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1)

        self.assert_user_profile(serialized_user, user_1)

    def test_it_does_return_user_preferences(
        self, app: Flask, user_1: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1)

        assert 'imperial_units' not in serialized_user
        assert 'language' not in serialized_user
        assert 'timezone' not in serialized_user
        assert 'weekm' not in serialized_user

    def test_it_returns_workouts_infos(
        self, app: Flask, user_1_admin: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1_admin)

        self.assert_workouts_keys_are_present(serialized_user)

    def test_it_does_not_return_confirmation_token(
        self, app: Flask, user_1_admin: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1_admin)

        assert 'confirmation_token' not in serialized_user


class TestUserSerializeAsUnauthenticatedUser(UserModelAssertMixin):
    def test_it_returns_user_account_infos(
        self, app: Flask, user_1: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1)

        self.assert_user_account(serialized_user, user_2)
        assert 'email_to_confirm' not in serialized_user

    def test_it_returns_user_profile_infos(
        self, app: Flask, user_1: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1)

        self.assert_user_profile(serialized_user, user_1)

    def test_it_does_return_user_preferences(
        self, app: Flask, user_1: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1)

        assert 'imperial_units' not in serialized_user
        assert 'language' not in serialized_user
        assert 'timezone' not in serialized_user
        assert 'weekm' not in serialized_user

    def test_it_returns_workouts_infos(
        self, app: Flask, user_1_admin: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1_admin)

        self.assert_workouts_keys_are_present(serialized_user)

    def test_it_does_not_return_confirmation_token(
        self, app: Flask, user_1_admin: User, user_2: User
    ) -> None:
        serialized_user = user_2.serialize(user_1_admin)

        assert 'confirmation_token' not in serialized_user


class TestInactiveUserSerialize(UserModelAssertMixin):
    def test_it_returns_is_active_to_false_for_inactive_user(
        self,
        app: Flask,
        inactive_user: User,
    ) -> None:
        serialized_user = inactive_user.serialize(inactive_user)

        assert serialized_user['is_active'] is False


class TestUserRecords(UserModelAssertMixin):
    def test_it_returns_empty_list_when_no_workouts(
        self,
        app: Flask,
        user_1: User,
    ) -> None:
        serialized_user = user_1.serialize(user_1)

        assert serialized_user['records'] == []

    def test_it_returns_user_records(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
        sport_1_cycling: Sport,
        workout_cycling_user_1: Workout,
    ) -> None:
        serialized_user = user_1.serialize(user_1)
        assert len(serialized_user['records']) == 4
        records = sorted(
            serialized_user['records'], key=lambda r: r['record_type']
        )
        assert records[0]['record_type'] == 'AS'
        assert records[0]['sport_id'] == sport_1_cycling.id
        assert records[0]['user'] == user_1.username
        assert records[0]['value'] > 0
        assert records[0]['workout_id'] == workout_cycling_user_1.short_id
        assert records[0]['workout_date']

    def test_it_returns_user_1_and_user_2_dont_not_follow_each_other(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
    ) -> None:
        serialized_user = user_2.serialize(user_1)
        assert serialized_user['followers'] == 0
        assert serialized_user['following'] == 0
        assert serialized_user['follows'] == 'false'
        assert serialized_user['is_followed_by'] == 'false'

    def test_it_returns_totals_when_user_has_workout_without_ascent(
        self,
        app: Flask,
        user_1: User,
        sport_1_cycling: Sport,
        workout_cycling_user_1: Workout,
    ) -> None:
        serialized_user = user_1.serialize(user_1)
        assert serialized_user['total_ascent'] == 0
        assert serialized_user['total_distance'] == 10
        assert serialized_user['total_duration'] == '1:00:00'

    def test_it_returns_totals_when_user_has_workout_with_ascent(
        self,
        app: Flask,
        user_1: User,
        sport_1_cycling: Sport,
        workout_cycling_user_1: Workout,
    ) -> None:
        workout_cycling_user_1.ascent = 100
        serialized_user = user_1.serialize(user_1)
        assert serialized_user['total_ascent'] == 100
        assert serialized_user['total_distance'] == 10
        assert serialized_user['total_duration'] == '1:00:00'

    def test_it_returns_totals_when_user_has_mutiple_workouts(
        self,
        app: Flask,
        user_1: User,
        sport_1_cycling: Sport,
        sport_2_running: Sport,
        workout_cycling_user_1: Workout,
        workout_running_user_1: Workout,
    ) -> None:
        workout_cycling_user_1.ascent = 100
        serialized_user = user_1.serialize(user_1)
        assert serialized_user['total_ascent'] == 100
        assert serialized_user['total_distance'] == 22
        assert serialized_user['total_duration'] == '2:40:00'


class TestUserWorkouts(UserModelAssertMixin):
    def test_it_returns_infos_when_no_workouts(
        self,
        app: Flask,
        user_1: User,
    ) -> None:
        serialized_user = user_1.serialize(user_1)

        assert serialized_user['nb_sports'] == 0
        assert serialized_user['nb_workouts'] == 0
        assert serialized_user['sports_list'] == []
        assert serialized_user['total_distance'] == 0
        assert serialized_user['total_duration'] == '0:00:00'

    def test_it_returns_infos_when_only_one_workout_exists(
        self,
        app: Flask,
        user_1: User,
        sport_1_cycling: Sport,
        workout_cycling_user_1: Workout,
    ) -> None:
        serialized_user = user_1.serialize(user_1)

        assert serialized_user['nb_sports'] == 1
        assert serialized_user['nb_workouts'] == 1
        assert serialized_user['sports_list'] == [sport_1_cycling.id]
        assert (
            serialized_user['total_distance']
            == workout_cycling_user_1.distance
        )
        assert serialized_user['total_duration'] == str(
            workout_cycling_user_1.duration
        )

    def test_it_returns_infos_when_several_sports(
        self,
        app: Flask,
        user_1: User,
        sport_1_cycling: Sport,
        sport_2_running: Sport,
        workout_cycling_user_1: Workout,
        workout_running_user_1: Workout,
    ) -> None:
        serialized_user = user_1.serialize(user_1)

        assert serialized_user['nb_sports'] == 2
        assert serialized_user['nb_workouts'] == 2
        assert serialized_user['sports_list'] == [
            sport_1_cycling.id,
            sport_2_running.id,
        ]
        assert serialized_user['total_distance'] == (
            workout_cycling_user_1.distance + workout_running_user_1.distance
        )
        assert serialized_user['total_duration'] == str(
            workout_cycling_user_1.duration + workout_running_user_1.duration
        )


class TestUserModelToken:
    def test_encode_auth_token(self, app: Flask, user_1: User) -> None:
        auth_token = user_1.encode_auth_token(user_1.id)
        assert isinstance(auth_token, str)

    def test_encode_password_token(self, app: Flask, user_1: User) -> None:
        password_token = user_1.encode_password_reset_token(user_1.id)
        assert isinstance(password_token, str)

    def test_decode_auth_token(self, app: Flask, user_1: User) -> None:
        auth_token = user_1.encode_auth_token(user_1.id)
        assert isinstance(auth_token, str)
        assert User.decode_auth_token(auth_token) == user_1.id


class TestUserSportModel:
    def test_user_model(
        self,
        app: Flask,
        user_1: User,
        sport_1_cycling: Sport,
        user_sport_1_preference: UserSportPreference,
    ) -> None:
        serialized_user_sport = user_sport_1_preference.serialize()
        assert serialized_user_sport['user_id'] == user_1.id
        assert serialized_user_sport['sport_id'] == sport_1_cycling.id
        assert serialized_user_sport['color'] is None
        assert serialized_user_sport['is_active']
        assert serialized_user_sport['stopped_speed_threshold'] == 1


class TestFollowRequestModel:
    def test_follow_request_model(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        assert '<FollowRequest from user \'1\' to user \'2\'>' == str(
            follow_request_from_user_1_to_user_2
        )

        serialized_follow_request = (
            follow_request_from_user_1_to_user_2.serialize()
        )
        assert serialized_follow_request['from_user'] == user_1.serialize()
        assert serialized_follow_request['to_user'] == user_2.serialize()

    def test_it_raises_error_if_getting_activity_object_when_federation_is_disabled(  # noqa
        self,
        app: Flask,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        with pytest.raises(
            FederationDisabledException,
            match='Federation is disabled.',
        ):
            follow_request_from_user_1_to_user_2.get_activity()


class TestUserFollowingModel:
    def test_user_2_sends_follow_requests_to_user_1(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
    ) -> None:
        follow_request = user_2.send_follow_request_to(user_1)

        assert follow_request in user_2.sent_follow_requests.all()

    @patch('fittrackee.users.models.send_to_remote_inbox')
    def test_it_does_not_call_send_to_user_inbox_when_federation_is_disabled(
        self,
        send_to_remote_inbox_mock: Mock,
        app: Flask,
        user_1: User,
        user_2: User,
    ) -> None:
        user_2.send_follow_request_to(user_1)

        send_to_remote_inbox_mock.send.assert_not_called()

    def test_user_1_receives_follow_requests_from_user_2(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
    ) -> None:
        follow_request = user_2.send_follow_request_to(user_1)

        assert follow_request in user_1.received_follow_requests.all()

    def test_user_has_pending_follow_request(
        self,
        app: Flask,
        user_1: User,
        follow_request_from_user_2_to_user_1: FollowRequest,
    ) -> None:
        assert (
            follow_request_from_user_2_to_user_1
            in user_1.pending_follow_requests
        )

    def test_user_has_no_pending_follow_request(
        self,
        app: Flask,
        user_1: User,
        follow_request_from_user_2_to_user_1: FollowRequest,
    ) -> None:
        follow_request_from_user_2_to_user_1.updated_at = datetime.now()
        assert user_1.pending_follow_requests == []

    def test_user_approves_follow_request(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_2_to_user_1: FollowRequest,
        follow_request_from_user_3_to_user_1: FollowRequest,
    ) -> None:
        follow_request = user_1.approves_follow_request_from(user_2)

        assert follow_request.is_approved
        assert user_1.pending_follow_requests == [
            follow_request_from_user_3_to_user_1
        ]

    def test_user_refuses_follow_request(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_2_to_user_1: FollowRequest,
    ) -> None:
        follow_request = user_1.rejects_follow_request_from(user_2)

        assert not follow_request.is_approved
        assert user_1.pending_follow_requests == []

    def test_it_raises_error_if_follow_request_does_not_exist(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
    ) -> None:
        with pytest.raises(NotExistingFollowRequestError):
            user_1.approves_follow_request_from(user_2)

    def test_it_raises_error_if_user_approves_follow_request_already_processed(  # noqa
        self,
        app: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_2_to_user_1: FollowRequest,
    ) -> None:
        follow_request_from_user_2_to_user_1.updated_at = datetime.now()

        with pytest.raises(FollowRequestAlreadyProcessedError):
            user_1.approves_follow_request_from(user_2)

    def test_follow_request_is_automatically_accepted_if_manually_approved_if_false(  # noqa
        self,
        app: Flask,
        user_1: User,
        user_2: User,
    ) -> None:
        user_1.manually_approves_followers = False
        follow_request = user_2.send_follow_request_to(user_1)

        assert follow_request in user_2.sent_follow_requests.all()
        assert follow_request.is_approved is True
        assert follow_request.updated_at is not None


class TestUserUnfollowModel:
    def test_it_raises_error_if_follow_request_does_not_exist(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
    ) -> None:

        with pytest.raises(NotExistingFollowRequestError):
            user_1.unfollows(user_2)

    def test_user_1_unfollows_user_2(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        follow_request_from_user_1_to_user_2.is_approved = True
        follow_request_from_user_1_to_user_2.updated_at = datetime.utcnow()

        user_1.unfollows(user_2)

        assert user_1.following.count() == 0
        assert user_2.followers.count() == 0

    def test_it_removes_pending_follow_request(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        user_1.unfollows(user_2)

        assert user_1.sent_follow_requests.all() == []

    @patch('fittrackee.users.models.send_to_remote_inbox')
    def test_it_does_not_call_send_to_user_inbox_when_federation_is_disabled(
        self,
        send_to_remote_inbox_mock: Mock,
        app: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        follow_request_from_user_1_to_user_2.is_approved = True
        follow_request_from_user_1_to_user_2.updated_at = datetime.utcnow()

        user_1.unfollows(user_2)

        send_to_remote_inbox_mock.send.assert_not_called()


class TestUserFollowers:
    def test_it_returns_empty_list_if_no_followers(
        self,
        app: Flask,
        user_1: User,
    ) -> None:
        assert user_1.followers.all() == []

    def test_it_returns_empty_list_if_follow_request_is_not_approved(
        self,
        app: Flask,
        user_1: User,
        follow_request_from_user_2_to_user_1: FollowRequest,
    ) -> None:
        assert user_1.followers.all() == []

    def test_it_returns_follower_if_follow_request_is_approved(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_2_to_user_1: FollowRequest,
    ) -> None:
        follow_request_from_user_2_to_user_1.is_approved = True
        follow_request_from_user_2_to_user_1.updated_at = datetime.now()

        assert user_1.followers.all() == [user_2]


class TestUserFollowing:
    def test_it_returns_empty_list_if_no_followers(
        self,
        app: Flask,
        user_1: User,
    ) -> None:
        assert user_1.following.all() == []

    def test_it_returns_empty_list_if_follow_request_is_not_approved(
        self,
        app: Flask,
        user_1: User,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        assert user_1.following.all() == []

    def test_it_returns_follower_if_follow_request_is_approved(
        self,
        app: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        follow_request_from_user_1_to_user_2.is_approved = True
        follow_request_from_user_1_to_user_2.updated_at = datetime.now()

        assert user_1.following.all() == [user_2]


class TestUserGetRecipientsSharedInbox:
    def test_it_raises_exception_if_federation_disabled(
        self, app: Flask, user_1: User
    ) -> None:
        with pytest.raises(FederationDisabledException):
            user_1.get_followers_shared_inboxes()
