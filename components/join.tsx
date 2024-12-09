import React from "react";

export default function Join() {
    return (
        <>
        <section className="email h-[481px] w-full bg-[#EBE8F4] overflow-hidden align-middle ">
        <center>
          <div className="bg-white flex-row my-16 h-[364px] w-[1273px] p-10 text-center justify-center align-middle">
            <div className="mx-[361px] my-[34px] text-center w-[571px] h-[114px] gap-y-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Join the club and get the benefits</h1>
        <p className="text-gray-600 mb-6">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more.</p>
        </div>
        <div className="flex text-center mx-[400px] items-center w-[472px] ">
    
          <input type="email" className="border border-gray-300 h-[56px]   px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" placeholder="your@email.com"/>
            
            <button className="bg-[#2A254B] text-white  py-2 w-[118px] h-[56px]">Sign up</button>
        </div>
    
          </div>
        </center>
      </section>
 
    </>
    );
}