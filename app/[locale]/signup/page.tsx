'use client'

import { useTranslations } from 'next-intl'
import AuthForm from "@/components/auth/auth-form"
const register = () => {

    const t = useTranslations('formAuth');
    return (
        <AuthForm
           title={t('register')}
            omSunbumit={(data:any)=>{
                console.log(data);
            }}
            register={true}
            btnTextAuth={t('register')}
        />
    )
}

export default register
