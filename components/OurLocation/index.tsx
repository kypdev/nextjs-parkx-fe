import React from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

const OurLocation = () => {
  const onClickLeft = () => {
    console.log("left");
  };
  const onClickRight = () => {
    console.log("right");
  };
  return (
    <>
      <div className="relative grid grid-cols-2 ">
        {/* px-10 py-10 mt-10 mb-8  */}
        <div className="col-span-2 md:col-span-1">
          {/* <div className="h-[40%] w-[100%] "></div> */}
          <div className="flex flex-row pl-2 py-2 bg-primary-blue">
            <MapPin color="white" size={48} />
            <h2 className="text-white text-xl md:text-[2rem] text-bold flex items-center">
              OUR LOCATIONS
            </h2>
          </div>
          <div className="grid grid-cols-2 flex-row mt-2">
            <div className="col-span-1 w-[50%] h-[50%] md:w-[100%] md:h-[100%] pl-4 md:pl-16">
              <Image
                src={"/images/parkx-logo.png"}
                alt="Picture of the author"
                // sizes='100vw'
                // style={{
                //   width: '100%',
                //   height: 'auto',
                // }}
                width={219}
                height={65}
              />
            </div>
            <div className="col-span-1 flex justify-center text-center bg-primary-green px:0 md:px-16 my:0 md:my-3 mr-4 text-white">
              <p className="flex items-center	text-lg">อุดมสุข</p>
            </div>
          </div>
          <p className="flex items-center	text-lg pl-16 mt-4">
            2784 Sukhumvit 66/1 Khwaeng
            <br /> Banmg Na, Bang Na
            <br /> Bangkok 10260 PENTA 591
          </p>
          <p className="flex text-primary-green items-center	text-lg pl-16 mt-4 mb-4 md:mb-0">
            อ่านรายละเอียดเพิ่มเติม
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col ">
          <div className="relative md:absolute top-0 ">
            <Image
              src={"/images/home/content-slide.png"}
              alt="Picture of the author"
              width={554}
              height={420}
            />
          </div>
          <ChevronLeft
            onClick={onClickLeft}
            className="hidden absolute top-48"
          />
          <ChevronRight
            onClick={onClickRight}
            className="hidden absolute top-48 right-0"
          />
        </div>
      </div>
    </>
  );
};

export default OurLocation;
