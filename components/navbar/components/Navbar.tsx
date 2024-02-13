import Image from "next/image";

const imagesPath = {
  email: "/images/icons/email.png",
  phone: "/images/icons/phone.png",
  langIcon: "/images/icons/engl_flag.png",
  navBg: "images/navbar-bg.png",
};

const NavbarComponent = () => {
  return (
    // <div className="self-stretch flex flex-row items-start justify-between p-2 lg:pt-[1.31rem] lg:pb-[1.06rem] lg:pr-[3.13rem] lg:pl-[2.75rem] box-border relative gap-[1.25rem] max-w-full mq750:flex-wrap mq750:pl-[1.38rem] mq750:pr-[1.56rem] mq750:box-border">
    <div className="w-screen self-stretch flex flex-row items-center justify-between p-2 lg:pt-[1.31rem] lg:pb-[1.06rem] lg:pr-[2.75rem] lg:pl-[2.75rem]  box-border relative ">
      <Image
        className="h-[100%] md:h-[100%] lg:h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/images/navbar-bg.png"
        width={1440}
        height={62}
      />
      <div className="grid grid-cols-2 w-screen">
        <div className="col-span-1 flex flex-row items-start justify-start gap-1 lg:gap-6 overflow-hidden ">
          <img
            className="h-[1.23rem] w-[1.24rem] relative"
            loading="eager"
            alt=""
            src="/images/icons/facebook.png"
          />
          <img
            className="h-[1.23rem] w-[1.24rem] relative "
            loading="eager"
            alt=""
            src="/images/icons/tel.png"
          />
          <img
            className="h-[1.23rem] w-[1.24rem] relative"
            loading="eager"
            alt=""
            src="/images/icons/twitter.png"
          />
          <img
            className="h-[1.23rem] w-[1.24rem] relative"
            loading="eager"
            alt=""
            src="/images/icons/instagram.png"
          />
          <img
            className="h-[1.23rem] w-[1.24rem] relative min-h-[1.25rem]"
            loading="eager"
            alt=""
            src="/images/icons/youtube.png"
          />
        </div>
        <div className="col-span-1 flex flex-row items-start justify-start md:items-end md:justify-end px-[0rem] pb-[0rem] box-border max-w-full">
          {/* <div className="self-stretch flex flex-row items-start justify-start gap-[3.06rem] max-w-full mq450:flex-wrap mq450:gap-[1.5rem]"> */}
          <div className="grid grid-cols-3 md:gap-8 pb-0 md:pb-2">
            {/* <div className="flex-1 flex flex-row items-start justify-start gap-[1.63rem] min-w-[14.19rem] max-w-full mq450:flex-wrap text-white"> */}
            {/* <div className="w-[9.75rem] flex flex-row items-start justify-start gap-[0.31rem]"> */}
            <div className="col-span-3 md:col-span-1 flex flex-row">
              <img
                className="h-[1rem] w-[1rem] md:h-[1.69rem] md:w-[1.69rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/images/icons/email.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.19rem] px-[0rem] pb-[0rem]">
                <div className="self-stretch relative [text-shadow:0px_1px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
                  parkx@bhirajburi.co.th
                </div>
              </div>
            </div>
            {/* <div className="flex-1 flex flex-row items-start justify-start gap-[0.31rem] min-w-[6.81rem]"> */}
            <div className="col-span-3 md:col-span-1 flex flex-row">
              <img
                className="h-[1rem] w-[1rem] md:h-[1.69rem] md:w-[1.69rem] relative z-[1]"
                loading="eager"
                alt=""
                src="/images/icons/phone.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.19rem] px-[0rem] pb-[0rem]">
                <div className="self-stretch relative [text-shadow:0px_1px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
                  +66 (0) 2726 1999 ต่อ 1921
                </div>
              </div>
            </div>
            {/* </div> */}
            <div className="col-span-3 md:col-span-1 flex flex-row">
              <img
                className="h-[1rem] w-[1rem] md:h-[1.5rem] md:w-[2.25rem] relative overflow-hidden shrink-0 object-cover z-[1] rounded-md"
                loading="eager"
                alt=""
                src="/images/icons/engl_flag.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
