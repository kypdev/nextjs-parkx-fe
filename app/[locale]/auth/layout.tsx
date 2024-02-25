import { ReactNode } from 'react';
import { CustomProvider } from '@/app/provider';
type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return <CustomProvider>{children}</CustomProvider>;
};

export default AuthLayout;
