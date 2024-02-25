'use client';

import { useTranslations } from 'next-intl';
import AuthForm from '@/components/auth/auth-form';
import { signIn } from 'next-auth/react';
import AuthAction from '@/actions/Auth';
import toast from 'react-hot-toast';
import useLoadingModal from '@/hooks/useLoadingModal';
import useMessagesModel from '@/hooks/useMessagesModel';
import { RegisterModel } from '@/dto/authModel/RegisterModel';

const Register = () => {
  const t = useTranslations('formAuth');
  const alertText = useTranslations('alert');
  const { registerSubmit } = AuthAction();
  const { loading, setLoading } = useLoadingModal();
  const { setMessage, setShowModalMessage } = useMessagesModel();
  return (
    <>
      <AuthForm
        isLoading={loading}
        title={t('register')}
        omSunbumit={(data: RegisterModel) => {
          console.log(data);
          if (
            data.agreeCompanyPolicy === false ||
            data.agreeCompanyPolicy === undefined
          ) {
            setShowModalMessage(true);
            setMessage(alertText('please_conferm_terms_of_use'));
            return;
          }
          if (
            data.agreeTermOfUse === false ||
            data.agreeTermOfUse === undefined
          ) {
            setShowModalMessage(true);
            setMessage(alertText('please_conferm_company_policy'));
            return;
          }
          setLoading(true);
          registerSubmit(data)
            .then((res) => {
              
              signIn('credentials', {
                email: data.email,
                password: data.password,
                //redirect: false,
                callbackUrl: '/',
              });
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              toast.error('error');
            });
        }}
        register={true}
        btnTextAuth={t('register')}
      />
    </>
  );
};

export default Register;
