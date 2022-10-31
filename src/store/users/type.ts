interface UserInfo {
  username?: string
  age?: Number
}

interface UserState {
  userInfo: UserInfo
  token: string
}

export type { UserState, UserInfo }
