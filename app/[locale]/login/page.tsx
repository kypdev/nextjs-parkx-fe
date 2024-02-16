/* eslint-disable @next/next/no-img-element */
'use client'
import { Input, Form, Button } from 'antd'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
const Page = () => {
  const t = useTranslations('login')
  return (
    <div className=' rounded-11xl bg-white shadow-[0px_4px_4px_rgba(174,_174,_174,_0.25)] box-border flex flex-row items-center justify-start
    py-3 pl-6 lg:py-[0rem] pr-[0.13rem] lg:pl-[4.88rem] gap-[4.69rem]  border-[1px] border-solid border-secondary-gray '>
      <div className='w-[25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.56rem] box-border min-w-[25rem] max-w-full'>
        <Form className='m-0 self-stretch flex flex-col items-start justify-start'>
          <div className='w-[13.25rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.44rem] box-border'>
            <h1 className='m-0  h-[2.81rem] flex-1 relative text-[1.5rem] font-medium font-kanit text-black text-left inline-block z-[2]'>
              {t('title')}
            </h1>
          </div>
          <div className='self-stretch flex flex-col items-start justify-start gap-[0.63rem]'>
            <div className='w-[5.56rem] relative text-[1rem] font-kanit text-black text-left inline-block z-[2]'>
              {t('email')}
            </div>
            <Form.Item
              style={{
                width: '100%',

              }}
              name='email'
              rules={[
                {
                  required: true,
                  message: t('please_enter_email'),

                },
              ]}
            >
              <Input
                placeholder={t('email')}
                className=' w-11/12 lg:w-full  self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit '
              />
            </Form.Item>
          </div>
          <div className='m-0 h-[1.69em] relative text-[1.13rem] font-normal font-kanit text-black text-left inline-block z-[2]'>
            {t('password')}
          </div>
          <div className='self-stretch flex flex-col items-end justify-start gap-[0.38rem]'>
            <Form.Item
              style={{
                width: '100%',
              }}
              name='password'
              rules={[
                {
                  required: true,
                  message: t('please_enter_password'),
                },
              ]}
            >
              <Input.Password

                placeholder={t('password')}
                className='w-11/12 lg:w-full self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit'
              />
            </Form.Item>

            <div className='relative text-[0.75rem] font-light font-kanit text-darkgray-100 text-right z-[2] mr-6 lg:mr-0'>
              {t('forgot_password')}
            </div>
          </div>

          <div className='self-stretch flex flex-col items-center justify-start gap-[1.25rem]'>
            <div className='w-11/12 lg:w-full self-stretch flex flex-col items-start justify-start gap-[0.63rem]'>
              <button
                style={{
                  width: '100%',
                  height: '100%',
                }}
                className='self-stretch rounded-8xs bg-primary-green flex flex-row items-center justify-center py-[0.69rem] pr-[1.25rem] pl-[1.56rem] z-[2] hover:bg-primary-green'
              >
                <div className='relative  text-[1rem] font-semibold font-kanit text-white text-center'>
                  {t('signin')}
                </div>
              </button>
              <div className='self-stretch flex flex-row items-center justify-center py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.88rem] '>
                <div className='h-[1.5rem] relative text-[1rem] font-medium font-kanit text-black text-center flex items-center justify-center z-[2]'>
                  {t('or')}
                </div>
              </div>
              <button className='self-stretch rounded-8xs flex flex-row items-start justify-center py-[0.69rem] pr-[1.25rem] pl-[1.56rem] gap-[0.94rem] whitespace-nowrap z-[2] border-[1px] border-solid border-secondary-gray'>
                <img
                  className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
                  alt=''
                  src='/images/icons/google-login.png'
                />
                <div className='relative text-[1rem] font-medium font-kanit text-gray text-center'>
                  {t('Signin_with_google')}
                </div>
              </button>
              <div className='self-stretch rounded-8xs flex flex-row items-center justify-center py-[0.69rem] pr-[1.25rem] pl-[1.5rem] gap-[0.88rem] whitespace-nowrap z-[2] border-[1px] border-solid border-secondary-gray'>
                <img
                  className='h-[1.25rem] w-[1.25rem] relative object-cover'
                  alt=''
                  src='/images/icons/fb-login.png'
                />
                <button className='relative text-[1rem] font-medium font-kanit text-gray text-center'>
                  {t('Signin_with_facebook')}
                </button>
              </div>
            </div>
            <div className='flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.31rem]'>
              <div className='relative text-[1rem] font-kanit text-left z-[2]'>
                <span className='text-black'>{`${t('Question_register')} `}</span>
                <span className='text-primary-green hover:underline hover:cursor-pointer'>
                  <Link href='/signup'>
                    {t('signup')}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <img
        className='hidden sm:block h-[50.75rem] flex-1 relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none max-w-full overflow-hidden object-cover min-w-[22.56rem] z-[1] '
        loading='eager'
        alt=''
        src='/images/login/imageLogin.png'
      />
    </div>
  )
}

export default Page
