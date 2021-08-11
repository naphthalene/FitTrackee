import { ActionContext, ActionTree } from 'vuex'
import { ROOT_STORE, USER_STORE } from '@/store/constants'
import {
  ILoginOrRegisterData,
  IUserActions,
  IUserState,
} from '@/store/modules/user/interfaces'
import { IRootState } from '@/store/modules/root/interfaces'
import { handleError } from '@/utils'
import api from '@/api/defaultApi'
import authApi from '@/api/authApi'
import router from '@/router'

export const actions: ActionTree<IUserState, IRootState> & IUserActions = {
  [USER_STORE.ACTIONS.GET_USER_PROFILE](
    context: ActionContext<IUserState, IRootState>
  ): void {
    context.commit(ROOT_STORE.MUTATIONS.EMPTY_ERROR_MESSAGE)
    authApi
      .get('auth/profile')
      .then((res) => {
        if (res.data.status === 'success') {
          context.commit(
            USER_STORE.MUTATIONS.UPDATE_AUTH_USER_PROFILE,
            res.data.data
          )
        } else {
          handleError(context, null)
        }
      })
      .catch((error) => handleError(context, error))
  },
  [USER_STORE.ACTIONS.LOGIN_OR_REGISTER](
    context: ActionContext<IUserState, IRootState>,
    data: ILoginOrRegisterData
  ): void {
    context.commit(ROOT_STORE.MUTATIONS.EMPTY_ERROR_MESSAGE)
    api
      .post(`/auth/${data.actionType}`, data.formData)
      .then((res) => {
        if (res.data.status === 'success') {
          const token = res.data.auth_token
          window.localStorage.setItem('authToken', token)
          context.commit(USER_STORE.MUTATIONS.UPDATE_AUTH_TOKEN, token)
          context
            .dispatch(USER_STORE.ACTIONS.GET_USER_PROFILE)
            .then(() => router.push('/'))
        } else {
          handleError(context, null)
        }
      })
      .catch((error) => handleError(context, error))
  },
}
