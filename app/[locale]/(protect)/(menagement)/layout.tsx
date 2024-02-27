'use client';
import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { data: session, status } = useSession();
  if (!session?.user) {
    return null;
  }
  return (
    <>
      {children}
    </>
  );
};
export default Layout;
