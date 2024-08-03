import React from "react";
import ModalFormTransaction from "../components/ModalForm";

const Header = ({ Headertitle, subtitle }) => {
  return (
    <div className=" flex flex-col justify-center shadow-md col-span-5 row-span-2 bg-white rounded-xl ">
      <div className="flex flex-col ml-10 gap-4">
        <p className="font-bold text-xl ">Dashboard {Headertitle}</p>
        <p className="text-[#0b5345] font-bold text-sm">{subtitle}</p>
        <div className="">
          <ModalFormTransaction title={Headertitle} />
        </div>
      </div>
    </div>
  );
};
export default Header;
