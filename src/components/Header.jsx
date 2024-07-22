import React from "react";
import ModalFormTransaction from "../components/ModalForm";

const Header = () => {
  return (
    <div className=" flex flex-col justify-center shadow-md col-span-5 row-span-2 bg-white rounded-xl ">
      <div className="flex flex-col ml-10 gap-4">
        <p className="font-bold text-xl ">Dashboard Transaksi</p>
        <p className="text-[#0b5345] font-bold text-sm">
          Create Transaction and Tracking easily!
        </p>
        <div className="">
          <ModalFormTransaction />
        </div>
      </div>
    </div>
  );
};
export default Header;
