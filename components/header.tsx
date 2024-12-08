import React from "react";
import { IoSearchOutline, IoCartOutline} from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function header(){
    return (
        <nav className=" h-[132px] w-full bg-white">
    
    <div className="justify-between flex h-[70px] border-b-2">
    <IoSearchOutline className="text-[#2A254B] text-base ml-7 mt-6" />
    <h1 className="mt-6">Avion</h1>
    <div className="flex">
    <IoCartOutline className="text-[#2A254B] text-base mr-4 mt-6" />
    <MdOutlineAccountCircle className="text-[#2A254B] text-base mr-7 mt-6" />
    
        <hr />
    </div>
    </div>
    <div className="justify-center text-center flex gap-11 text-[#726E8D] mt-4">
      <p>Plant pots</p>
      <p>Ceramics</p>
      <p>Table</p>
      <p>Chairs</p>
      <p>Crockery</p>
      <p>Tableware</p>
      <p>Cutlery</p>
    </div>

  </nav>
    )
}

