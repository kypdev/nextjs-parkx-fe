'use client';
import { useTranslations } from 'next-intl';
import AuthForm from '@/components/auth/auth-form';
import useLoadingModal from '@/hooks/useLoadingModal';
const Login = () => {
  const t = useTranslations('formAuth');
  const { loading, setLoading } = useLoadingModal();
  return (
    <AuthForm
      isLoading={loading}
      title={t('title_signin')}
      omSunbumit={(data: any) => {
        console.log(data);
      }}
      register={false}
      btnTextAuth={t('signin')}
    />
  );
};

export default Login;
