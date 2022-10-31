import { defineStore } from 'pinia'

import { UserState, UserInfo } from '@/store/users/type'

const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userInfo: {},
    token: ''
  }),
  actions: {
    setUserInfo(userInfo: UserInfo | {}) {
      this.userInfo = userInfo
    }
  }
})

export default useUserStore
