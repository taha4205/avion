import React from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Feature from "../../../components/feature";
import Join from "../../../components/join";

export default function about() {
  return (
    <>
<Header/>
   
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
            View our products
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16">
        <div className="bg-[#2A254B] w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-white">
            View Collection
          </button>
        </div>
        <div className="w-full md:w-2/5">
          <img
            src="/images/aboutbanner1.png"
            alt="About main"
            className="w-full "
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
        <img
          src="/images/aboutbanner2.png"
          alt="Service"
          className="w-full md:w-2/5 "
        />
        <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
          <h1 className="text-xl md:text-2xl text-custom-purple">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">Get in Touch</button>
        </div>
      </div>

      <Feature/>

    

      <Join/>

    <Footer/>
    </>
  );
};
