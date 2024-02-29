const PackageComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.188rem_0rem] max-w-full text-left text-[0.725rem] text-black font-kanit">
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
        <div className="relative z-[1]">นิติบุคคล</div>
        <div className="w-[13rem] relative whitespace-pre-wrap text-right inline-block shrink-0 z-[1]">
          โปรโมชัน 1/02/2024 - 31/02/2024
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start bg-[url('/images/package/Event-01.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-seconday-white-ffffff">
        <div className="w-[15.688rem] flex flex-col items-start justify-start pt-[0.938rem] pb-[0.813rem] pr-[3.875rem] pl-[1.875rem] box-border relative gap-[0.75rem_0rem] mq450:pr-[1.25rem] mq450:box-border">
          <img
            className="w-full h-full absolute my-0 mx-[!important] top-[0rem] right-[-0.025rem] bottom-[0.038rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/images/package/Rectangle-01.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem_0rem]">
            <div className="self-stretch relative leading-[1.084rem] font-medium [text-shadow:0px_2.3px_2.31px_rgba(0,_0,_0,_0.25)] z-[2]">
              <p className="m-0">Happy Group</p>
              <p className="m-0">PACKAGE 12 คัน</p>
            </div>
            <div className="relative text-[1.25rem] leading-[1.084rem] font-medium text-yellowgreen [text-shadow:0px_2.3px_2.31px_rgba(0,_0,_0,_0.25)] z-[2] mq450:text-[1rem] mq450:leading-[0.875rem]">
              10,500.-/เดือน
            </div>
          </div>
          <div className="h-[1.188rem] rounded-[2.89px] bg-primary-green-7fbc00 flex flex-row items-center justify-center py-[0.125rem] pr-[1.125rem] pl-[1.313rem] box-border z-[2] text-center text-[0.581rem]">
            <div className="relative font-semibold">สมัครแพคเกจ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageComponent;
