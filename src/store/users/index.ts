import { defineStore } from 'pinia'
import router from '@/router'
import { UserType } from '@/store/users/type'
import { logout as logoutApi } from '@/service/api/modules/users'
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
    async logout() {
      // 清除缓token
      this.setUserInfo({
        username: this.userInfo.username,
        password: this.userInfo.password,
        token: '',
      })
      await logoutApi({})
      // router.push('/login')
    },
  },
  persist: true, // 数据持久化存储
})

export default useUserStore
