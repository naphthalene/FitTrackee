class FollowRequestAlreadyProcessedError(Exception):
    ...


class FollowRequestAlreadyRejectedError(Exception):
    ...


class InvalidEmailException(Exception):
    ...


class InvalidNotificationTypeException(Exception):
    ...


class UserControlsException(Exception):
    ...


class UserCreationException(Exception):
    ...


class NotExistingFollowRequestError(Exception):
    ...


class UserNotFoundException(Exception):
    ...
