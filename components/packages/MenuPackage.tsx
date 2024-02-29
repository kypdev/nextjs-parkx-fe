import CarPckageIcon from '@/components/icons/CarPckage';
import SubMenuComponent from '@/components/packages/SubMenuComponent';
const MenuPackage = () => {
  return (
    <div className="flex flex-col items-start justify-start pt-[1.75rem] pb-[17.438rem] pr-[4.875rem] pl-[2.5rem] box-border relative gap-[3.188rem] min-w-[23.063rem] max-w-full z-[1] text-left text-[1.25rem] text-seconday-white-ffffff font-kanit ">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[50.938rem] right-[-23.062rem] bottom-[-50.937rem] left-[23.063rem] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-primary-blue-1c355e [transform:_rotate(-180deg)] [transform-origin:0_0]" />
      <div className="flex flex-col items-start justify-start gap-[1rem_0rem]">
        <div className="flex flex-row items-center justify-start gap-[0rem_1.063rem]">
          <img
            className="h-[3.75rem] w-[3.75rem] relative rounded-41xl object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/images/package/personal.png"
          />
          <div className="relative font-medium z-[1] mq450:text-[1rem]">
            Welcome, Arkom M.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.563rem_0rem] text-right text-[1rem]">
          <div className="relative font-semibold text-left z-[1]">
            จัดการบัญชี
          </div>
          <div className="flex flex-col items-start justify-start gap-[0.25rem_0rem]">
            <SubMenuComponent
              Icon={
                <CarPckageIcon className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0" />
              }
              subMenuName="ข้อมูลสมาชิก"
            />
            <div className="rounded flex flex-row items-center justify-start py-[0.375rem] pr-[1rem] pl-[0.625rem] gap-[0rem_0.875rem] z-[1]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/images/icons/lock-01.png"
              />
              <div className="relative font-medium">เปลี่ยนรหัสผ่าน</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem] gap-[0.25rem_0rem]">
            <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.063rem] pl-[0rem] gap-[0.438rem_0rem] text-left">
              <div className="relative font-semibold z-[1]">ระบบสมาชิก</div>
              <div className="flex flex-col items-start justify-start gap-[0.25rem_0rem] text-right">
                <div className="rounded hover:stroke-[#1c355e]  hover:bg-seconday-white-ffffff  flex flex-row items-center justify-start py-[0.375rem] pr-[2.875rem] pl-[0.625rem] gap-[0rem_0.875rem] z-[1]">
                  <img
                    className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/images/icons/car-01.png"
                  />
                  <div className="relative font-medium">ข้อมูลรถ</div>
                </div>
                <div className="rounded hover:stroke-[#0c1c37]  hover:bg-seconday-white-ffffff hover:text-primary-blue-1c355e flex flex-row items-start justify-start py-[0.375rem] pr-[1.188rem] pl-[0.625rem] gap-[0rem_0.625rem] z-[1] ">
                  <CarPckageIcon className="h-[1.50rem]  w-[1.50rem] relative  shrink-0  " />
                  <div className="relative font-medium">แพคเกจ</div>
                </div>
              </div>
            </div>
            <div className="rounded flex flex-row items-center justify-start py-[0.375rem] pr-[0.875rem] pl-[0.625rem] gap-[0rem_0.875rem] z-[1]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                alt=""
                src="/images/icons/clock-refresh.png"
              />
              <div className="relative font-medium">ประวัติการใช้การงาน</div>
            </div>
            <div className="rounded flex flex-row items-center justify-start py-[0.375rem] pr-[1.063rem] pl-[0.625rem] gap-[0rem_0.875rem] z-[1]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative"
                alt=""
                src="/images/icons/icon-monny2.png"
              />
              <div className="relative font-medium">ใบเสร็จ/ใบแจ้งหนี้</div>
            </div>
            <div className="rounded flex flex-row items-center justify-start py-[0.375rem] pr-[2.313rem] pl-[0.625rem] gap-[0rem_0.875rem] z-[1]">
              <img
                className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/images/icons/calendar-plus-02.png"
              />
              <div className="relative font-medium">สถานะ/ต่ออายุ</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded flex flex-row items-center justify-start py-[0.375rem] px-[0.625rem] gap-[0rem_0.875rem] z-[1] text-right text-[1rem]">
        <img
          className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/images/icons/log-in-03.png"
        />
        <div className="relative font-medium">ออกจากระบบ</div>
      </div>
    </div>
  );
};

export default MenuPackage;
