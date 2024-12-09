import Image from 'next/image';
import React from 'react';
import { IoSearchOutline, IoCartOutline} from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { RiSeedlingLine } from "react-icons/ri";
import { AiOutlineCreditCard } from "react-icons/ai";
import { IoLogoSkype,IoMdMenu } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";

import Features from '../../../components/feature'
import Ceramics from '../../../components/ceramics'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Join from '../../../components/join'

export default function ProductListing(){
 
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
    
      <section className=' overflow-x-hidden p-0'>
        <div className=" md:px-8 lg:px-0 py-8 md:py-12">
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-auto">
              <Image
                src={'/images/product.png'}
                height={800}
                width={800}
                alt="product"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-2xl font-semibold">The Dandy Chair</p>
                <p className="py-2 text-lg md:text-xl">$250</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                    <div>
                      <h1>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                      <h1>Amount:</h1>
                      <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        <span>+</span> 1 <span>-</span>
                      </button>
                    </div>
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <h1 className="text-xl ml-8 md:text-2xl mt-20 text-[#505977]">You might also like</h1>
          
          <center>
  <section className="flex flex-wrap w-full justify-center ceramic h-auto bg-white">
    <div className="w-[90%] md:w-full justify-center overflow-x-hidden">
        <div className="container p-0">
            <div className="flex flex-wrap gap-5">
                <div className="md:h-[462px] md:w-[305px] h-[288px] w-[163px] bg-white">
                    <img src="./images/chair.jpg" alt="The Dandy chair" className="w-full md:h-[375px] h-[201px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800">The Dandy chair</h2>
                        <p className="text-gray-600">£250</p>
                    </div>
                </div>
                <div className="md:h-[462px] md:w-[305px] h-[288px] w-[163px] bg-white">
                    <img src="./images/vase1.jpg" alt="Rustic Vase Set" className="w-full md:h-[375px] h-[201px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800">Rustic Vase Set</h2>
                        <p className="text-gray-600">£155</p>
                    </div>
                </div>
                <div className="md:h-[462px] md:w-[305px] h-[288px] w-[163px] bg-white">
                    <img src="./images/vase2.jpg" alt="The Silky Vase" className="w-full md:h-[375px] h-[201px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800">The Silky Vase</h2>
                        <p className="text-gray-600">£125</p>
                    </div>
                </div>
                <div className="md:h-[462px] md:w-[305px] h-[288px] w-[163px] bg-white">
                    <img src="./images/lamp.jpg" alt="The Lucy Lamp" className="w-full md:h-[375px] h-[201px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-800">The Lucy Lamp</h2>
                        <p className="text-gray-600">£399</p>
                    </div>
                </div>
            </div>
        </div>
        <button className="text-black w-[170px] h-[56px] bg-[#F9F9F9] mt-4">
            View Collection
        </button>
    </div>
</section>
  <hr className="w-[1280px] font-bold" />
</center>

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


