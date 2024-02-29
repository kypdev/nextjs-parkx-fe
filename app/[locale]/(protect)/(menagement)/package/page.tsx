'use client';

import MenuPackage from '@/components/packages/MenuPackage'
import PreviousButton from './PreviousButton';
import PackageBox from '@/components/packages/PackageBox';
const Page = () => {
  return (
    <div>
      <div className="w-[70.063rem] flex flex-col items-start justify-start pt-[0rem] pb-[0.688rem] pr-[1.313rem] pl-[1.25rem] box-border gap-[1.25rem_0rem] max-w-full text-right text-[1.563rem] font-kanit">
        <div className="self-stretch flex flex-row items-start justify-center gap-[0rem_1.375rem] mq1000:flex-wrap">
          <PackageBox
            title="จอดรถ"
            icon="/images/icons/icon-car-01.png"
            count="10"
          />
          <PackageBox
            title="แพคเกจ"
            icon="/images/icons/car-package.png"
            count="10"
          />
          <PackageBox
            title="ใบเสร็จ/ใบแจ้งหนี้"
            icon="/images/icons/icon-monny2.png"
            count="10"
          />
          <PackageBox
            title="สถาระการจอดรถ"
            icon="/images/icons/clock-refresh.png"
            count="100.5 ชม."
          />
         
        </div>
        <div className="w-[66.313rem] flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1000:flex-wrap">
          <MenuPackage />
          <PreviousButton />
        </div>
      </div>
    </div>
  );
};

export default Page;
