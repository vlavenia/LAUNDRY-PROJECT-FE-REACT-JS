import React from "react";
import Editicon from "../assets/Editicon.svg";
import deleteicon from "../assets/deleteicon.png";
import editing from "../assets/editing.png";
import { Button } from "@nextui-org/react";


function ActionButton() {
  return (
    <div className="flex justify-cente ">
      <Button className="rounded-md">
        <img src={editing} className="w-[25px] h-[25px]   " />
      </Button>
      <Button className=" rounded-md">
        <img src={deleteicon} className="w-[25px] h-[25px] light  " />
      </Button>
    </div>
  );
}

export default ActionButton;
