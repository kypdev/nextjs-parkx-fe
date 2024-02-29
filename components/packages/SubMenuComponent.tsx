interface SubMenuComponentProps {
  subMenuName: string,
  Icon:any
}
const SubMenuComponent = ({subMenuName,Icon}: SubMenuComponentProps) => {
  return (
    <div className="rounded flex flex-row items-center justify-start py-[0.375rem] pr-[0.938rem] pl-[0.625rem] gap-[0rem_0.875rem] z-[1]">
      {Icon}
      {/* <img
        className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/images/icons/user-01.png"
      /> */}
      <div className="relative font-medium">{subMenuName}</div>
    </div>
  );
};

export default SubMenuComponent;
