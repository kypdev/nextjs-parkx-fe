'use client';
import { useTranslations } from 'next-intl';
import AuthForm from '@/components/auth/auth-form';
import useLoadingModal from '@/hooks/useLoadingModal';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const Login = () => {
  const router = useRouter();
  const t = useTranslations('formAuth');
  const { loading, setLoading } = useLoadingModal();
  

  // Assuming you have a function to handle form submission
  const handleSubmit = async (data: any) => {
    setLoading(true); // Start loading indicator

    try {
    var result =  await signIn("credentials", { 
        username: data.email, 
        password: data.password, 
        callbackUrl: '/package' });
  

      if (result?.error) {
        console.error('Login error:', result.error);
        // Handle login errors (e.g., display error message to user)
      } else {
        // Successful login, redirect or perform other actions
        console.log('Login successful!');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle unexpected errors
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <>
    <AuthForm
      isLoading={loading}
      title={t('title_signin')}
      omSunbumit={handleSubmit}
      register={false}
      btnTextAuth={t('signin')}
    />
   
    </>
  );
};

export default Login;
