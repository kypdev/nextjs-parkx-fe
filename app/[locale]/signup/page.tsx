'use client';

import { useTranslations } from 'next-intl';
import AuthForm from '@/components/auth/auth-form';
import AuthAction from '@/actions/Auth';
const Register = () => {
  const t = useTranslations('formAuth');
  const { registerSubmit } = AuthAction();
  return (
    <AuthForm
      title={t('register')}
      omSunbumit={(data: any) => {
        registerSubmit(data);
      }}
      register={true}
      btnTextAuth={t('register')}
    />
  );
};

export default Register;
