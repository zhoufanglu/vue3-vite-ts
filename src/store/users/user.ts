import { defineStore } from 'pinia'

import { UserType } from '@/store/users/type'

const useUserStore = defineStore({
  id: 'userInfo',
  state: () => ({
    userInfo: { password: '', username: '', token: '' } as UserType,
    isRemember: false,
  }),
  actions: {
    setUserInfo(userInfo: UserType | {}) {
      this.userInfo = userInfo
    },
    setIsRemember(isRemember: boolean) {
      this.isRemember = isRemember
    },
  },
  persist: true, // 数据持久化存储
})

export default useUserStore
