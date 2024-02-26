'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Auth from '@/actions/Auth';
import { UserDetail } from '@/dto/UserDetail';
import { signIn } from 'next-auth/react';
const Otp = () => {
  const t = useTranslations('otp');
  const [userDetail, setUserDetail] = useState<UserDetail>();
  const [_verifyOtp, setVerifyOtp] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const memberKey = searchParams.get('memberKey');
  const { memberDetail } = Auth();
  if (!memberKey) {
    router.push('/signup');
  }
  //ckeck memberKey
  useEffect(() => {
    if (!memberKey) {
      router.push('/signup');
    }
  }, [memberKey]);

  //get member detail
  useEffect(() => {
    if (memberKey) {
      handleMemberDetail();
    }
  }, [memberKey]);

  const handleMemberDetail = () => {
    memberDetail(memberKey ?? '')
      .then((res) => {
        if (!userDetail) {
          setUserDetail(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Initial time set to 3 minutes in seconds
  const [timeInSeconds, setTimeInSeconds] = useState(3 * 60);

  useEffect(() => {
    // Exit early when we reach 0
    if (timeInSeconds === 0) return;

    // Save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      // Decrease time by 1
      setTimeInSeconds(timeInSeconds - 1);
    }, 1000);

    // Clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // Add timeInSeconds as a dependency to re-run the effect when we update it
  }, [timeInSeconds]);

  // Format the time to display as X:XX
  const formatTime = () => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${t('minutes')}`;
  };

  const resultRegister = () => {
    return (
      <div className="w-[18rem] md:w-[23rem] flex flex-row items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem] box-border max-w-full mq450:max-w-[calc(100%_-_6px)]">
        <div className="flex-1 rounded-xl bg-[#ffffff] shadow-[0px_4px_4px_rgba(174,_174,_174,_0.25)] box-border flex flex-col items-center justify-start pt-[5rem] pb-[4.938rem] pr-[1.25rem] pl-[1.375rem] gap-[1.563rem] max-w-full border-[1px] border-solid border-[#e9e9e9]">
          <div className="w-[25rem] h-[20.625rem] relative rounded-xl bg-seconday-white-ffffff shadow-[0px_4px_4px_rgba(174,_174,_174,_0.25)] box-border hidden max-w-full border-[1px] border-solid border-[#e9e9e9]" />
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.25rem]">
            <img
              className="h-[7.25rem] w-[7.25rem] relative overflow-hidden shrink-0 z-[1]"
              loading="eager"
              alt=""
              src="/images/icons/face-happy.png"
            />
          </div>
          <h2 className="m-0 relative text-inherit font-medium font-inherit z-[1] md:text-[1rem]">
            {t('register_success')}
          </h2>
          <button
            onClick={() => {
              signIn();
            }}
            className="w-[15.625rem] rounded-8xs bg-primary-green flex flex-row items-center justify-center py-[0.5rem] pr-[1.25rem] pl-[1.563rem] box-border z-[1] text-white"
          >
            <div className="relative font-semibold">
              {t('register_success_description')}
            </div>
          </button>
        </div>
      </div>
    );
  };

  const verifyOtp = () => {
    return (
      <div className="  w-[18rem] md:w-[23rem] lg:w-[23rem] rounded-xl bg-[#ffffff] shadow-[0px_4px_4px_rgba(174,_174,_174,_174)] flex flex-col items-center justify-start p-[2.5rem] box-border gap-[1.188rem] max-w-full z-[1] text-left text-[1rem] text-black font-kanit">
        <div className="w-[25rem] h-[20.063rem] relative rounded-xl bg-[#ffffff] shadow-[0px_4px_4px_rgba(174,_174,_174,_174)] hidden max-w-full" />
        <div className="w-[13.125rem] flex flex-col items-center justify-start gap-[0.625rem_0rem] font-p6-prompt-reg-12">
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem]">
            <div className="relative font-medium z-[1]">{t('title')}</div>
          </div>
          <div className="self-stretch relative font-kanit text-center z-[1]">
            <p className="m-0">{t('description')}</p>
            <p className="m-0">{userDetail?.data.email}</p>
          </div>
        </div>
        <div className="w-[13.75rem] flex flex-col items-center justify-start gap-[0.125rem_0rem] text-center text-[0.625rem] text-dimgray">
          <div className="w-[13.125rem] relative flex items-center justify-center z-[1]">
            Ref No. 450450
          </div>
          <input className="self-stretch rounded-11xl bg-gray-300 flex flex-row items-center justify-center p-[0.5rem] whitespace-nowrap z-[1] text-[1.25rem] text-black text-center" />

          <div className="w-[13.125rem] relative flex items-center justify-center z-[1]">
            {formatTime()}
          </div>
        </div>
        <button
          onClick={() => {
            setVerifyOtp(true);
          }}
          className="w-[15.625rem] rounded-8xs bg-primary-green flex flex-row items-center justify-center py-[0.5rem] pr-[1.25rem] pl-[1.563rem] box-border z-[1] text-white"
        >
          <div className="relative font-semibold">{t('btn_text')}</div>
        </button>
      </div>
    );
  };

  if (_verifyOtp) {
    return <>{resultRegister()}</>;
  }
  return <>{verifyOtp()}</>;
};

export default Otp;
