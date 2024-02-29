import PackageComponent from '@/components/packages/PackageComponent';
import { FunctionComponent } from 'react';

const PreviousButton: FunctionComponent = () => {
  return (
    <div className="flex-1 rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-seconday-white-ffffff box-border flex flex-col items-center justify-start py-[1.875rem] pr-[0.813rem] pl-[2.188rem] gap-[1.25rem_0rem] min-w-[28.125rem] max-w-full text-left text-[1rem] text-black font-kanit border-[1px] border-solid border-seconday-grey-e9e9e9 mq725:min-w-full mq1000:pt-[1.25rem] mq1000:pb-[1.25rem] mq1000:box-border">
      <div className="w-[43.25rem] h-[50.938rem] relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-seconday-white-ffffff box-border hidden max-w-full border-[1px] border-solid border-seconday-grey-e9e9e9" />
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.313rem] pl-[0rem] box-border max-w-full text-center text-red">
        <div className="relative z-[1]">
          ขณะนี้คุณมีแพกเกจที่ใกล้ถึงกำหนดต่ออายุ ในวันที่ 31 มกราคม 2567
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem_0rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center gap-[0rem_2.063rem] text-seconday-black-343434 mq725:flex-wrap mq725:gap-[0rem_2.063rem]">
          <div className="flex-1 rounded-8xs box-border flex flex-row items-center justify-center p-[0.5rem] min-w-[7.813rem] z-[1] border-[1px] border-solid border-primary-green-7fbc00">
            <div className="relative font-medium">ส่วนบุคคล</div>
          </div>
          <div className="rounded-8xs bg-primary-green-7fbc00 flex flex-row items-center justify-center py-[0.5rem] pr-[4.125rem] pl-[4.063rem] z-[1] text-seconday-white-ffffff">
            <div className="relative font-medium">นิติบุคคล</div>
          </div>
          <div className="flex-1 rounded-8xs box-border flex flex-row items-center justify-center p-[0.5rem] min-w-[7.813rem] z-[1] border-[1px] border-solid border-primary-green-7fbc00">
            <div className="relative font-medium">Event</div>
          </div>
        </div>
        <div className="relative font-medium z-[1]">แพคเกจปัจจุบัน</div>
        <div className="self-stretch flex flex-row items-start justify-start p-[1.25rem] box-border relative gap-[0rem_0.625rem] max-w-full mq725:flex-wrap">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-8xs bg-whitesmoke-200 z-[1]" />
          <div className="relative font-medium z-[2]">
            คุณยังไม่มีแพคเกจหรือการการจอง
          </div>
          <div className="relative inline-block max-w-full z-[2]">
            <span>คุณสามารถเริ่ม</span>
            <span className="text-primary-green-7fbc00"> สมัครแพคเกจ</span>
            <span>{` หรือ `}</span>
            <span className="text-primary-green-7fbc00">{`จองก่อนจอง `}</span>
            <span>ได้ที่นี่</span>
          </div>
        </div>
        <div className="relative font-medium z-[1]">สมัครแพคเกจ</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.188rem_0rem] max-w-full text-seconday-black-343434">
          <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] mq725:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[0.625rem_0rem]">
              <div className="rounded-8xs bg-whitesmoke-100 flex flex-row items-center justify-start py-[0.25rem] pr-[1.938rem] pl-[0.25rem] gap-[1.438rem] z-[1]">
                <div className="h-[2.5rem] w-[11.875rem] relative rounded-8xs bg-whitesmoke-100 hidden" />
                <div className="rounded-10xs bg-seconday-white-ffffff flex flex-row items-center justify-start py-[0.25rem] pr-[1.188rem] pl-[0.688rem] z-[1]">
                  <div className="h-[2rem] w-[5.563rem] relative rounded-10xs bg-seconday-white-ffffff hidden" />
                  <div className="relative z-[2]">รายเดือน</div>
                </div>
                <div className="relative z-[1]">รายวัน</div>
              </div>
            </div>
          </div>
        </div>

        <PackageComponent />
        <PackageComponent />
        <PackageComponent />

        
      </div>
      <div className="w-[17.375rem] flex flex-row items-center justify-start gap-[0rem_1.188rem] text-[0.725rem]">
        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-row items-start justify-start gap-[0rem_0.375rem]">
            <img
              className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 object-contain z-[1]"
              alt=""
              src="/chevrondown-1@2x.png"
            />
            <div className="relative z-[1]">ก่อนหน้า</div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[0rem_0.5rem]">
          <div className="flex-1 rounded-8xs flex flex-row items-center justify-center p-[0.25rem] z-[1]">
            <div className="relative">1</div>
          </div>
          <div className="flex-1 rounded-8xs flex flex-row items-center justify-center p-[0.25rem] z-[1] border-[1px] border-solid border-primary-green-7fbc00">
            <div className="relative">2</div>
          </div>
          <div className="flex-1 rounded-8xs flex flex-row items-center justify-center py-[0.25rem] px-[0.188rem] z-[1]">
            <div className="relative">3</div>
          </div>
          <div className="rounded-8xs flex flex-row items-center justify-center py-[0.188rem] pr-[0.563rem] pl-[0.5rem] z-[1] text-[1rem]">
            <div className="h-[1.188rem] relative inline-block">...</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-row items-start justify-start gap-[0rem_0.5rem]">
            <div className="relative z-[1]">ถัดไป</div>
            <img
              className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 object-contain z-[1]"
              alt=""
              src="/chevrondown-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousButton;
