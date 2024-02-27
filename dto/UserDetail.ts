export interface UserDetail {
  token: string
  message: string
  data: Data
  services: any[]
  memberVehicle: any[]
  memberKey: string
  isNewMember: boolean
}

export interface Data {
  lineId: string
  facebookId: string
  googleId: string
  microsoftId: string
  appleId: string
  openId: string
  phone: string
  fullName: string
  email: string
  isVerified: boolean
  appToken: string
  mobilePin: string
  createDate: string
}
