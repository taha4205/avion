import React from "react";
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Image from 'next/image';
import { IoSearchOutline, IoCartOutline} from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoLogoSkype,IoMdMenu } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";

export default function shippingbasket()  {
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
      
      <div>
        <div className="bg-[#F9F9F9] w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
          <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
            Your Shopping Cart
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
            <div className="border-2 border-r-0 p-4">
              <h1 className="text-lg font-semibold">Product</h1>
              <div className="flex items-start justify-between mt-8">
                <div className="flex">
                  <Image
                    src="/images/vase2.jpg"
                    alt="Product 1"
                    height={20}
                    width={20}
                    className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                  />
                  <div className="ml-6">
                    <h1 className="text-base sm:text-lg font-medium">
                      Graystone vase
                    </h1>
                    <p className="text-sm mt-2">
                      A timeless ceramic vase with a tri-color grey glaze.
                    </p>
                    <p className="mt-2 text-base font-semibold">£85</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-sm font-semibold sm:hidden lg:block">
                    Quantity
                  </h1>
                  <p className="mt-2 text-lg font-medium">1</p>
                </div>
              </div>
              <div className="flex items-start justify-between mt-8">
                <div className="flex">
                  <Image
                    src="/images/cartimg2.png"
                    height={20}
                    width={20}
                    alt="Product 2"
                    className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                  />
                  <div className="ml-6">
                    <h1 className="text-base sm:text-lg font-medium">
                      Basic white vase
                    </h1>
                    <p className="text-sm mt-2">
                      Beautiful and simple, this is one for the classics.
                    </p>
                    <p className="mt-2 text-base font-semibold">£85</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-sm font-semibold sm:hidden lg:block">
                    Quantity
                  </h1>
                  <p className="mt-2 text-lg font-medium">1</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-l-0 p-4  hidden lg:block">
              <h1 className="text-lg font-semibold">Total</h1>
              <p className="mt-10 text-lg font-medium">£85</p>
              <p className="mt-40 text-lg font-medium">£85</p>
            </div>
          </div>

          <div className="mt-10 text-center lg:text-right">
            <h1 className="inline text-lg sm:text-xl font-medium mr-4">
              Subtotal
            </h1>
            <h1 className="inline text-xl sm:text-2xl font-semibold">£210</h1>
            <p className="text-sm mt-4">
              Taxes and shipping are calculated at checkout
            </p>
            <button className="bg-[#2A254B] h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
      
    
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

