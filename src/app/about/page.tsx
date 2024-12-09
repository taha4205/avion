import React from "react";
import { IoSearchOutline, IoCartOutline} from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoLogoSkype,IoMdMenu } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { RiSeedlingLine } from "react-icons/ri";
import { AiOutlineCreditCard } from "react-icons/ai";

export default function about() {
  return (
    <>
<nav className=" h-[132px] w-full bg-white">
    
    <div className="justify-between flex h-[70px] border-b-2">
    <IoSearchOutline className=" hidden md:flex text-[#2A254B] text-base ml-7 mt-6" />
    <h1 className="mt-6  text-left ml-10 md:ml-0 md:text-center">Avion</h1>
    <div className="flex">
      <IoSearchOutline className=" flex md:hidden text-[#2A254B] text-[16px] mr-3 mt-6" />
      <IoMdMenu className='flex md:hidden text-[#2A254B] text-[16px] mr-4 mt-6' />
    <IoCartOutline className=" hidden md:flex text-[#2A254B] text-base mr-4 mt-6" />
    <MdOutlineAccountCircle className=" hidden md:flex text-[#2A254B] text-base mr-7 mt-6" />
    
        <hr />
    </div>
    </div>
    <div className=" justify-center  text-center hidden md:flex gap-11 text-[#726E8D] mt-4">
      <p>Plant pots</p>
      <p>Ceramics</p>
      <p>Table</p>
      <p>Chairs</p>
      <p>Crockery</p>
      <p>Tableware</p>
      <p>Cutlery</p>
    </div>

  </nav>
   
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-[#2A254B]">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-[#2A254B]">
            View our products
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-[598px] items-center justify-center gap-x-4 px-4 py-16">
        <div className="bg-[#2A254B] w-[674px] h-[478px] md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-input-bg h-12 w-40 rounded-sm mt-36 text-white">
            View Collection
          </button>
        </div>
        <div className=" w-[630px] h-[478px] md:w-2/5">
          <img
            src="/images/aboutbanner1.png"
            alt="About main"
            className="w-full h-full "
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
        <img
          src="/images/aboutbanner2.png"
          alt="Service"
          className="w-full md:w-2/5 "
        />
        <div className=" bg-[F9F9F9] w-full md:w-3/5 h-[603px] p-8 md:p-20">
          <h1 className="text-xl md:text-2xl text-[#2A254B]">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-[#2A254B] mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-56 text-[#2A254B]">Get in Touch</button>
        </div>
      </div>

      <h2 className="text-2xl font-thin mt-20 text-center">What makes our brand different</h2>
        <div className="h-auto my-40 w-full bg-white justify-center">
  <div className="flex justify-center items-center w-full flex-col gap-20">
    <div className="flex flex-wrap justify-center gap-5 w-full max-w-full">
      <div className="flex md:block items-center gap-2 w-full sm:w-1/2 md:w-[20%]">
        <span className="text-xl">
          <TbTruckDelivery className="font-[24px]" />
        </span>
        <div>
          <h1 className="">Next day as standard</h1>
          <p>Order before 3pm and get your order the next day as standard</p>
        </div>
      </div>

      <div className="flex md:block items-center gap-2 w-full sm:w-1/2 md:w-[20%]">
        <span className="text-xl">
          <CiCircleCheck className="font-[24px] text-black" />
        </span>
        <div>
          <h4 className="">Made by true artisans</h4>
          <p>Handmade crafted goods made with real passion and craftsmanship</p>
        </div>
      </div>

      <div className="flex md:block items-center gap-2 w-full sm:w-1/2 md:w-[20%]">
        <span className="text-xl">
          <AiOutlineCreditCard className="font-[24px]" />
        </span>
        <div>
          <h4 className="">Unbeatable prices</h4>
          <p>For our materials and quality you won't find better prices anywhere</p>
        </div>
      </div>

      <div className="flex md:block items-center gap-2 w-full sm:w-1/2 md:w-[20%]">
        <span className="text-xl">
          <RiSeedlingLine className="font-[24px]" />
        </span>
        <div>
          <h4 className="">Recycled packaging</h4>
          <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
        </div>
      </div>
    </div>
  </div>
  </div>

    

      <section className="email bg-[#EBE8F4] overflow-hidden">
  <div className="max-w-full flex justify-center py-16">
    <div className="bg-white flex flex-col items-center p-6 md:p-10 text-center w-full max-w-[1200px]">
      <div className="mb-6 md:mb-8 w-full max-w-[571px]">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Join the club and get the benefits
        </h1>
        <p className="text-gray-600 mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores, and more.
        </p>
      </div>
<center>
      <div className="flex flex-col md:flex-row items-center w-full gap-4">
      <input
          type="email"
          className="border border-gray-300 h-[56px] w-[354px] px-4 py-2"
          placeholder="your@email.com"
        />
        <button className="w-full relative md:left-[-20px] left-0 ml-0 md:w-[118px] h-[56px] text-white bg-[#2A254B] mt-4 md:mt-0">
          Sign up
        </button>
      </div>
      </center>
    </div>
  </div>
</section>

         
            



<footer>
            <div className='px-6 md:px-12 py-8 bg-[#2A254B] '>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
      
          <div className=" text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Menu</h1>
            <div className='space-y-2'>
              <h1>New Arrivals</h1>
              <h1>Best sellers</h1>
              <h1>Recently viewed</h1>
              <h1>Popular this week</h1>
              <h1>All Products</h1>
            </div>
          </div>

          <div className=" text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className='space-y-2'>
              <h1>Crockery</h1>
              <h1>Furniture</h1>
              <h1>Homeware</h1>
              <h1>Plant pots</h1>
              <h1>Chairs</h1>
            </div>
          </div>

          
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
            <div className='space-y-2'>
              <h1>About us</h1>
              <h1>Vacancies</h1>
              <h1>Contact us</h1>
              <h1>Privacy</h1>
              <h1>Return policy</h1>
            </div>
          </div>

          
       
            

        </div>

        <hr className='bg-[#4E4D93] my-8' />

   
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className='flex gap-4'>
            <FaLinkedin size={20} />
            <FaFacebookSquare size={20} />
            <FaInstagram size={20} />
            <IoLogoSkype size={20} />
            <FaTwitter size={20} />
            <FaPinterest size={20} />
          </div>
        </div>
      </div>
        </footer>
 

    </>
  );
};
