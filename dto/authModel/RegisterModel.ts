export interface RegisterModel {
  name: string;
  email: string;
  password: string;
  confirm: string;
  agreeTermOfUse?: boolean;
  agreeCompanyPolicy?: boolean;
  agreeNews?: boolean;
}
