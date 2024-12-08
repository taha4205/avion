import React from "react";

export default function ceramics(){
    return(<center>
  <section className=" justify-center ceramic h-[761px] bg-white">
    <div className="w-[1280px]  overflow-hidden">
  <div className="flex container mx-auto p-4">
  
  <div className="flex justify-between gap-10">
    <div className="h-[462px] w-[305px]  bg-white">
      <img src="./images/chair.jpg" alt="The Dandy chair" className="w-full h-[375px] object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">The Dandy chair</h2>
        <p className="text-gray-600">£250</p>
      </div>
    </div>
    <div className="h-[462px] w-[305px]  bg-white">
      <img src="./images/vase1.jpg" alt="Rustic Vase Set" className="w-full h-[375px] object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Rustic Vase Set</h2>
        <p className="text-gray-600">£155</p>
      </div>
    </div>
    <div className="h-[462px] w-[305px]  bg-white">
      <img src="./images/vase2.jpg" alt="The Silky Vase" className="w-full h-[375px] object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">The Silky Vase</h2>
        <p className="text-gray-600">£125</p>
      </div>
    </div>
    <div className="h-[462px] w-[305px]  bg-white">
      <img src="./images/lamp.jpg" alt="The Lucy Lamp" className="w-full h-[375px] object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">The Lucy Lamp</h2>
        <p className ="text-gray-600">£399</p>
      </div>
    </div>
  </div>
</div>

</div>
<button className="text-black w-[170px] h-[56px] bg-[#F9F9F9]">
 View Collection

</button>
  </section>
  <hr className="w-[1280px] font-bold" />
</center>)
}