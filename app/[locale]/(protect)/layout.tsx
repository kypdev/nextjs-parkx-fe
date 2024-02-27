'use client'
import { ReactNode } from 'react';
import { CustomProvider } from '@/app/provider';


type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {

  return <CustomProvider>{children}</CustomProvider>;
};

export default Layout;
