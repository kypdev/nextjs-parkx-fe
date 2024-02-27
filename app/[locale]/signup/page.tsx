'use client';

import { useTranslations } from 'next-intl';
import AuthForm from '@/components/auth/auth-form';
import { RedirectType, redirect } from 'next/navigation';
import AuthAction from '@/actions/Auth';
import toast from 'react-hot-toast';
import useLoadingModal from '@/hooks/useLoadingModal';
import useMessagesModel from '@/hooks/useMessagesModel';
import { RegisterModel } from '@/dto/authModel/RegisterModel';
import { useRouter } from 'next/navigation';


const Register = () => {
  const t = useTranslations('formAuth');
  const alertText = useTranslations('alert');
  const { registerSubmit } = AuthAction();
  const { loading, setLoading } = useLoadingModal();
  const { setMessage, setShowModalMessage } = useMessagesModel();
   const router = useRouter();
  return (
    <>
      <AuthForm
        isLoading={loading}
        title={t('register')}
        omSunbumit={(data: RegisterModel) => {
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
              localStorage.setItem('memberKey', res.data.memberKey);
              setLoading(false);
               router.push('/otp?memberKey=' + res.data.memberKey);
            })
            .catch((err) => {
              setLoading(false);
              setMessage(alertText('error_register'));
            });
        }}
        register={true}
        btnTextAuth={t('register')}
      />
    </>
  );
};

export default Register;
