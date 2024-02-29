interface PackageBoxProps {
  title: string;
  icon: string;
  count: string;
}
const PackageBox = ({ title, icon, count }: PackageBoxProps) => {
  return (
    
    <div className="rounded-3xs bg-primary-blue-1c355e flex flex-row items-end justify-start pt-[1rem] pb-[0.938rem] pr-[2.875rem] pl-[1.25rem] gap-[1.563rem] text-right text-[1rem] text-seconday-white-ffffff font-kanit">
      <div className="h-[5rem] w-[15.875rem] relative rounded-3xs bg-primary-blue-1c355e hidden" />
      <div className="h-[3.063rem] w-[2.9rem] relative rounded-3xs bg-gray z-[1]">
        <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-gray w-full h-full hidden" />
        <img
          className="absolute top-[0.563rem] left-[0.625rem] w-[1.875rem] h-[1.875rem] z-[2]"
          loading="lazy"
          alt=""
          src={icon}
        />
      </div>
      <div className="flex w-[7.5rem] flex-row items-start justify-end relative">
        <div className="relative font-medium z-[1] right-[-0.625rem]">{title}</div>
        <div className="absolute my-0 mx-[!important] top-[-2.187rem] right-[-0.625rem] text-[1.563rem] font-medium z-[1] ">
        {count}
        </div>
      </div>
    </div>
  );
};

export default PackageBox;
