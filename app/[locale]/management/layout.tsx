import { ReactNode } from 'react';
import { CustomProvider } from '@/app/provider';

import { useSession, signIn, signOut } from 'next-auth/react';
type Props = {
  children: ReactNode;
};

const Management = ({ children }: Props) => {
  return <CustomProvider>{children}</CustomProvider>;
};

export default Management;
