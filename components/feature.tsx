import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { RiSeedlingLine } from "react-icons/ri";
import { AiOutlineCreditCard } from "react-icons/ai";




export default function feature(){
    return(
        <div className="h-[355px] w-full bg-white justify-center">
    
  <div className="flex justify-center items-center w-full flex-col gap-20 ">
 

  <div className="flex w-[1280px] justify-center gap-10">
    <div className=" items-center gap-2">
      <span className="text-xl"><TbTruckDelivery className="font-[24px]"/></span>
      <div>
        <h4 className="">Next day as standard</h4>
        <p>Order before 3pm and get your order the next day as standard</p>
      </div>
    </div>

    <div className=" items-center gap-2">
      <span className="text-xl"><CiCircleCheck className="font-[24px] text-black"/></span>
      <div>
        <h4 className="">Made by true artisans</h4>
        <p>Handmade crafted goods made with real passion and craftmanship</p>
      </div>
    </div>
    
    <div className=" items-center gap-2">
      <span className="text-xl"><AiOutlineCreditCard className="font-[24px]"/></span>
      <div>
        <h4 className="">Unbeatable prices</h4>
        <p>For our materials and quality you won't find better prices anywhere</p>
      </div>
    </div>

    <div className=" items-center gap-2">
      <span className="text-xl"><RiSeedlingLine className="font-[24px]"/></span>
      <div>
        <h4 className="">Recycled packaging</h4>
        <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
      </div>
    </div>
  </div>
</div>

  </div>



  
    )
}