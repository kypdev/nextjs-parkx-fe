import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BusinessCenterTextType = {
  rectangle1221?: string;
  rectangle1222?: string;
  pACKAGE24?: string;
  prop?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
  propPadding1?: CSSProperties["padding"];
};

const BusinessCenterText: FunctionComponent<BusinessCenterTextType> = ({
  rectangle1221,
  rectangle1222,
  pACKAGE24,
  prop,
  propPadding,
  propBackgroundImage,
  propLeft,
  propLeft1,
  propLeft2,
  propPadding1,
}) => {
  const businessCenterTextStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const happyGroupPACKAGE24ContainerStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const nextButtonStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
      padding: propPadding1,
    };
  }, [propLeft2, propPadding1]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[0.188rem_0rem] max-w-full text-left text-[0.725rem] text-black font-kanit"
      style={businessCenterTextStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
        <div className="relative z-[1]">นิติบุคคล</div>
        <div className="w-[13rem] relative whitespace-pre-wrap text-right inline-block shrink-0 z-[1]">
          โปรโมชัน 1/02/2024 - 31/02/2024
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-center justify-start bg-[url('/images/package/Event-01.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-[1rem] text-seconday-white-ffffff"
        style={groupDivStyle}
      >
        <img
          className="h-[7.15rem] w-[39.644rem] relative object-cover hidden min-h-[7.125rem] max-w-full"
          alt=""
          src={rectangle1221}
        />
        <div className="h-[7.125rem] w-[15.688rem] relative">
          <img
            className="absolute top-[-0.012rem] left-[0rem] w-full h-full z-[1]"
            alt=""
            src={rectangle1222}
          />
          <div
            className="absolute top-[0.888rem] left-[1.894rem] leading-[1.084rem] font-medium inline-block w-[9.938rem] h-[2.188rem] [text-shadow:0px_2.3px_2.31px_rgba(0,_0,_0,_0.25)] z-[2]"
            style={happyGroupPACKAGE24ContainerStyle}
          >
            <p className="m-0">Happy Group</p>
            <p className="m-0">{pACKAGE24}</p>
          </div>
          <div
            className="absolute top-[3.325rem] left-[1.875rem] text-[1.25rem] leading-[1.084rem] font-medium text-yellowgreen inline-block w-[8.125rem] h-[1.063rem] [text-shadow:0px_2.3px_2.31px_rgba(0,_0,_0,_0.25)] z-[2] mq450:text-[1rem] mq450:leading-[0.875rem]"
            style={divStyle}
          >
            {prop}
          </div>
          <div
            className="absolute top-[5.125rem] left-[1.875rem] rounded-[2.89px] bg-primary-green-7fbc00 h-[1.188rem] flex flex-row items-center justify-center py-[0.125rem] pr-[1.125rem] pl-[1.313rem] box-border z-[2] text-center text-[0.581rem]"
            style={nextButtonStyle}
          >
            <div className="relative font-semibold">สมัครแพคเกจ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCenterText;