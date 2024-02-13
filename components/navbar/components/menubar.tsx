import Image from "next/image";
import Link from "next/link";

const Menubar = () => {
  return (
    <header className="w-screen flex flex-row items-center justify-center py-[0rem] pr-0 pl-0 md:pr-[2.38rem] md:pl-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-darkslategray-200 font-kanit">
      <div className="h-[20%] mx-2 flex-1 flex flex-row items-center justify-center gap-[2rem] max-w-full mq750:gap-[1rem]">
        {/* <Link href={"/"}>
          <Image
            src={"/images/parkx-logo.png"}
            alt={""}
            width={240}
            height={72}
          />
        </Link> */}
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 md:col-span-1 w-[50%] h-[50%] md:w-[100%] md:h-[50%]">
            <Link href={"/"}>
              <Image
                src={"/images/parkx-logo.png"}
                alt={""}
                width={240}
                height={72}
              />
            </Link>
          </div>
          <div className="col-span-3 md:col-span-1 text-[70%]">
            <Link href={"/about"}>ABOUT PARK X</Link>
          </div>
          <div className="col-span-3 md:col-span-1 text-[70%]">
            <Link href={"/parking-solution"}>PARKING SOLUTIONS</Link>
          </div>
          <div className="col-span-3 md:col-span-1 text-[70%]">
            <Link href={"/#"}>NEWS & PROMOTIONS</Link>
          </div>
          <div className="col-span-3 md:col-span-1 text-[70%]">
            <Link href={"/#"}>CONTACT US</Link>
          </div>
          <div className="col-span-6 md:col-span-1 ">
            {/* <div className=" bg-primary-blue flex flex-row items-end justify-start pt-[0.69rem] pb-[0.63rem] pr-[0.44rem] pl-[1.25rem] gap-[0.81rem]"> */}
            <div className="grid grid-cols-2 divide-x-2 md:divide-y-2 md:divide-x-0 p-1 rounded-lg bg-primary-blue">
              <div className="col-span-1 md:col-span-2 text-base text-white hover:underline text-center">
                <Link href="/register">สมัครสมาชิก</Link>{" "}
              </div>
              {/* <div className="col-span-1"></div> */}
              <div className="col-span-1 md:col-span-2 text-base text-white hover:underline text-center">
                <Link href="/register">เข้าสู่ระบบ</Link>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] pb-[0.38rem] pr-[2.5rem] pl-[0rem] box-border max-w-full md:w-full ">
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.13rem] mq450:gap-[1rem] mq750:gap-[2.06rem] mq1050:hidden">
            <div className="h-[1.88rem] relative font-semibold inline-block whitespace-nowrap">
              <Link href={"/about"}>ABOUT PARK X</Link>
            </div>
            <div className="flex-[0.9412] flex flex-col items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem]">
              <div className="h-[1.88rem] relative font-semibold inline-block whitespace-nowrap">
                <Link href={"/parking-solution"}>PARKING SOLUTIONS</Link>
              </div>
            </div>
            <div className="h-[1.88rem] flex-1 relative font-semibold inline-block whitespace-nowrap">{`NEWS & PROMOTIONS`}</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.38rem]">
          <div className="h-[1.88rem] relative font-semibold inline-block whitespace-nowrap">
            CONTACT US
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.38rem]">
          <div className="h-[1.88rem] relative font-semibold inline-block whitespace-nowrap">
            {/* <Button shape="circle" className='bg-[#1da1f2]'>Signin | Signup</Button> */}
        {/* </div>
        </div> */}
      </div>

      {/* <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.38rem] text-[0.81rem] text-white mt-4">
        <div className="rounded-xl bg-primary-blue flex flex-row items-end justify-start pt-[0.69rem] pb-[0.63rem] pr-[0.44rem] pl-[1.25rem] gap-[0.81rem]">
          <div className="relative font-medium z-[1] hover:underline">
            <Link href="/register">สมัครสมาชิก</Link>{" "}
          </div>
          |
          <div className="relative font-medium z-[1] hover:underline">
            {" "}
            <Link href="/register">เข้าสู่ระบบ</Link>{" "}
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Menubar;
