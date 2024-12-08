import React from "react";

export default function Join() {
    return (
        <section className="email h-auto w-full bg-[#EBE8F4] overflow-hidden flex items-center justify-center py-12">
            <div className="bg-white flex flex-col md:flex-row my-16 h-auto max-w-[1273px] p-10 text-center">
                <div className="mx-auto my-4 text-center w-full md:w-[571px] h-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Join the club and get the benefits</h1>
                    <p className="text-gray-600 mb-6">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.</p>
                </div>
                <div className="flex flex-col md:flex-row text-center mx-auto items-center w-full md:w-auto">
                    <input
                        type="email"
                        className="border border-gray-300 h-[56px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[354px] mb-4 md:mb-0"
                        placeholder="your@email.com"
                    />
                    <button className="bg-[#2A254B] text-white py-2 w-full md:w-[118px] h-[56px]">
                        Sign up
                    </button>
                </div>
            </div>
        </section>
    );
}