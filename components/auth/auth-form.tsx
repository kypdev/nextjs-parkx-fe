'use client';
import { Input, Form, Spin, Checkbox, Card } from 'antd';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { signIn } from 'next-auth/react';
import { FaLine } from 'react-icons/fa';

interface AuthFormProps {
  omSunbumit: (data: any) => void;
  register: boolean;
  title: string;
  btnTextAuth?: string;
  isLoading?: boolean;
}

const AuthForm = ({
  omSunbumit,
  register,
  title,
  btnTextAuth,
  isLoading,
}: AuthFormProps) => {
  const t = useTranslations('formAuth');
  return (
    <Spin spinning={isLoading}>
      <div className="rounded-11xl w-full bg-white shadow-[0px_4px_4px_rgba(174,_174,_174,_0.25)] box-border flex flex-row items-stretch justify-start py-3 pl-6 lg:py-[0rem] pr-[0.13rem] lg:pl-[4.88rem] gap-[4.69rem] border-[1px] border-solid border-secondary-gray ">
        <div className=" flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.56rem] box-border w-full lg:w-1/2 md:w-1/2  max-w-full">
          <Form
            onFinish={(e) => {
              omSunbumit(e);
            }}
            className="m-0 self-stretch flex flex-col items-start justify-start  "
          >
            <div className="w-[20.25rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.44rem] box-border">
              <h1 className="m-0  mt-4 h-[2.81rem] flex-1 relative text-[1.5rem] font-medium font-kanit text-black text-left inline-block z-[2]">
                {title}
              </h1>
            </div>
            {register === true && (
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                <div className="w-[7.56rem] relative text-[1rem] font-kanit text-black text-left inline-block z-[2]">
                  {t('name_lastname')}
                </div>
                <Form.Item
                  style={{
                    width: '100%',
                  }}
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: t('please_name_lastname'),
                    
                    },
                  ]}
                >
                  <Input
                    placeholder={t('name_lastname')}
                    className=" w-11/12 lg:w-full  self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit "
                  />
                </Form.Item>
              </div>
            )}
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
              <div className="w-[5.56rem] relative text-[1rem] font-kanit text-black text-left inline-block z-[2]">
                {t('email')}
              </div>
              <Form.Item
                style={{
                  width: '100%',
                }}
                name="email"
                rules={[
                  {
                    required: true,
                    message: t('please_enter_email'),
                  },
                ]}
              >
                <Input
                  placeholder={t('email')}
                  className=" w-11/12 lg:w-full  self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit "
                />
              </Form.Item>
            </div>

            <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
              <div className="m-0 h-[1.69rem] relative text-[1.13rem] font-normal font-kanit text-black text-left inline-block z-[2]">
                {t('password')}
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[0.63rem]">
                <Form.Item
                  style={{
                    width: '100%',
                    height: '20%',
                  }}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: t('please_enter_password'),
                    },
                  ]}
                >
                  <Input.Password
                    placeholder={t('password')}
                    className="w-11/12 lg:w-full self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit"
                  />
                </Form.Item>
                {register === false && (
                  <div className=" text-[0.75rem] font-light font-kanit text-darkgray-100 text-right mr-10 lg:mr-1  md:mr-1   ">
                    {t('forgot_password')}
                  </div>
                )}
              </div>
            </div>
            {register === true && (
              <>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                  <div className="m-0 h-[1.69rem] relative text-[1.13rem] font-normal font-kanit text-black text-left inline-block z-[2]">
                    {t('confirm_password')}
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[0.38rem]">
                    <Form.Item
                      style={{
                        width: '100%',
                      }}
                      name="confirm"
                      rules={[
                        {
                          required: true,
                          message: t('please_enter_password'),
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(t('password_not_match'))
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password
                        placeholder={t('confirm_password')}
                        className="w-11/12 lg:w-full self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit"
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.81rem] gap-[0.56rem]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.38rem]">
                    <div className="flex-1 flex flex-row items-end justify-start gap-[1rem]">
                      <div className="h-[1.7rem] w-[1.25rem] relative z-[2]">
                        <Form.Item
                          valuePropName="checked"
                          name="agreeTermOfUse"
                          style={{
                            height: '100%',
                          }}
                        >
                          <Checkbox className="checkbox-parkX absolute h-full w-full  top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        </Form.Item>
                      </div>
                      <div className="relative text-[0.88rem] font-kanit text-left z-[2] mt-5">
                        <span className="text-black">{`${t('agree')} `}</span>
                        <span className="text-primary-green hover:cursor-pointer hover:underline">
                          {t('termsOfUse')}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-end justify-start gap-[1rem]">
                      <div className="h-[1.7rem] w-[1.25rem] relative z-[2]">
                        <Form.Item
                          valuePropName="checked"
                          name={'agreeCompanyPolicy'}
                          style={{
                            height: '100%',
                          }}
                        >
                          <Checkbox className="checkbox-parkX absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        </Form.Item>
                      </div>
                      <div className="relative text-[0.88rem] font-kanit text-left z-[2]">
                        <span className="text-black">{`${t('agree')} `}</span>
                        <span className="text-primary-green hover:cursor-pointer hover:underline">
                          {t('companyPolicy')}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-end justify-start gap-[1rem]">
                      <div className="h-[1.7rem] w-[1.25rem] relative z-[2]">
                        <Form.Item
                          valuePropName="checked"
                          name={'agreeNews'}
                          style={{
                            height: '100%',
                          }}
                        >
                          <Checkbox className="checkbox-parkX absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
                        </Form.Item>
                      </div>
                      <div className="relative text-[0.88rem] font-kanit text-black text-left z-[2]">
                        {t('agreeNews')}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="self-stretch flex flex-col items-center justify-start gap-[1.25rem]">
              <div className="w-11/12 lg:w-full self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  className="self-stretch rounded-8xs bg-primary-green flex flex-row items-center justify-center py-[0.69rem] pr-[1.25rem] pl-[1.56rem] z-[2] hover:bg-primary-green"
                >
                  <div className="relative  text-[1rem] font-semibold font-kanit text-white text-center">
                    {btnTextAuth}
                  </div>
                </button>
                <div className="self-stretch flex flex-row items-center justify-center py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.88rem] ">
                  <div className="h-[1.5rem] relative text-[1rem] font-medium font-kanit text-black text-center flex items-center justify-center z-[2]">
                    {t('or')}
                  </div>
                </div>
                <button
                  type="button"
                  className="self-stretch rounded-8xs flex flex-row items-start justify-center py-[0.69rem] pr-[1.25rem] pl-[1.56rem] gap-[0.94rem] whitespace-nowrap z-[2] border-[1px] border-solid border-secondary-gray"
                >
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]"
                    alt=""
                    src="/images/icons/google-login.png"
                  />
                  <div className="relative text-[1rem] font-medium font-kanit text-gray text-center">
                    {t('Signin_with_google')}
                  </div>
                </button>
                <button
                  type="button"
                  className="self-stretch rounded-8xs flex flex-row items-center justify-center py-[0.69rem] pr-[1.25rem] pl-[1.5rem] gap-[0.88rem] whitespace-nowrap z-[2] border-[1px] border-solid border-secondary-gray"
                >
                  <img
                    className="h-[1.25rem] w-[1.25rem] relative object-cover"
                    alt=""
                    src="/images/icons/fb-login.png"
                  />
                  <div className="relative text-[1rem] font-medium font-kanit text-gray text-center">
                    {t('Signin_with_facebook')}
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    signIn('line', { callbackUrl: '/package' });
                  }}
                  className="self-stretch rounded-8xs flex flex-row items-center justify-center py-[0.69rem] pr-[1.25rem] pl-[1.5rem] gap-[0.88rem] whitespace-nowrap z-[2] border-[1px] border-solid border-secondary-gray"
                >
                  <FaLine className="h-[1.25rem] w-[1.25rem] relative object-cover  " />
                  <div className="relative text-[1rem] font-medium font-kanit text-gray text-center">
                    {t('Signin_with_line')}
                  </div>
                </button>
              </div>
              {register === true && (
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.31rem]">
                  <div className="relative text-[1rem] font-kanit text-left z-[2]">
                    <span className="text-black">{`${t(
                      'already_member'
                    )} `}</span>
                    <span className="text-primary-green hover:underline hover:cursor-pointer">
                      <Link href="/login">{t('signin')}</Link>
                    </span>
                  </div>
                </div>
              )}
              {register === false && (
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.31rem]">
                  <div className="relative text-[1rem] font-kanit text-left z-[2]">
                    <span className="text-black">{`${t(
                      'Question_register'
                    )} `}</span>
                    <span className="text-primary-green hover:underline hover:cursor-pointer">
                      <Link href="/signup">{t('signup')}</Link>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Form>
        </div>
        <div style={{ flex: '1 1 50%' }} className="hidden sm:block">
          <img
            className="w-full h-full object-cover relative rounded-tr-11xl rounded-br-11xl"
            loading="eager"
            alt=""
            src="/images/login/imageLogin.png"
          />
        </div>
      </div>
    </Spin>
  );
};
export default AuthForm;
