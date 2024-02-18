'use client'

import { useTranslations } from 'next-intl'
import AuthForm from "@/components/auth/auth-form"

const Page = () => {
  const t = useTranslations('formAuth');
    return (
        <AuthForm
           title={t('title_signin')}
            omSunbumit={(data:any)=>{
                console.log(data);
            }}
            register={false}
            btnTextAuth={t('signin')}
        />
    )
}

export default Page
