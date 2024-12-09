import React from "react";
import "./globals.css";

import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { RiSeedlingLine } from "react-icons/ri";
import { AiOutlineCreditCard } from "react-icons/ai";
import { IoLogoSkype, IoMdMenu } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import Ceramics from "../../components/ceramics"
import Feature from "../../components/feature";
import Join from "../../components/join"
import Footer from "../../components/footer"

import { IoSearchOutline, IoCartOutline} from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";



export default function Home() {
  return (
    <>
    <nav className="h-auto md:h-[132px] w-full bg-white">
    
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
    <div className=" justify-center text-center hidden md:flex gap-11 text-[#726E8D] mt-4">
      <p>Plant pots</p>
      <p>Ceramics</p>
      <p>Table</p>
      <p>Chairs</p>
      <p>Crockery</p>
      <p>Tableware</p>
      <p>Cutlery</p>
    </div>

  </nav>

  <section className=" h-[420px] md:h-[704px] w-full bg-white align-middle py-0 md:py-10 ">
<center>
  <div className="flex h[400px] md:h-[584px] w-full lg:w-[1280px]  " >
    <div className="w-full lg:w-[760px]  h-full bg-[#2A254B] text-left  pt-[60px] pl-4 md:pl-[80px] font-sans font-extralight">
    <div className="bannertext h-[300px]  ">
      <h1 className="text-white pb-5 text-[27px] md:text-[32px] text-left ">The furniture brand for the <br /> future, with timeless designs</h1>
      <button className="bg-[#4E4D93] relative top-16 md:top-0 mt-10 px-8 py-4  text-white text-[15px] font-extralight">view collection</button>

    </div>
    <p className="text-white w-[530px] h-auto overflow-hidden hidden md:block top-[120px] relative">A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</p>
    </div>
    <div className="w-[520px] hidden lg:flex h-full banner "> </div>
  </div>
  </center>
  </section >
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


   
  <center>
  <section className="flex flex-wrap w-full justify-center ceramic h-auto bg-white">
    <div className="w-[90%] md:w-full justify-center overflow-x-hidden">
        <div className="container p-0">
            <div className="flex flex-wrap gap-5">
                <div className="md:h-[462px] md:w-[305px] h-[288px] w-[163px] bg-white">
                    <img src="./images/chair.jpg" alt="The Dandy chair" className="w-full md:h-[375px] h-[201px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-thin text-gray-800">The Dandy chair</h2>
                        <p className="text-gray-600">£250</p>
                    </div>
                </div>
                <div className="md:h-[462px] md:w-[305px] h-[288px] w-[163px] bg-white">
                    <img src="./images/vase1.jpg" alt="Rustic Vase Set" className="w-full md:h-[375px] h-[201px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-thin text-gray-800">Rustic Vase Set</h2>
                        <p className="text-gray-600">£155</p>
                    </div>
                </div>
                <div className="md:h-[462px] md:w-[305px] h-[288px] w-[163px] bg-white">
                    <img src="./images/vase2.jpg" alt="The Silky Vase" className="w-full md:h-[375px] h-[201px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-thin text-gray-800">The Silky Vase</h2>
                        <p className="text-gray-600">£125</p>
                    </div>
                </div>
                <div className="md:h-[462px] md:w-[305px] h-[288px] w-[163px] bg-white">
                    <img src="./images/lamp.jpg" alt="The Lucy Lamp" className="w-full md:h-[375px] h-[201px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-thin text-gray-800">The Lucy Lamp</h2>
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
  <hr className="w-[1280px] font-thin" />
</center>

   
  <center>
  <section className="flex md:hidden flex-wrap w-full justify-center ceramic h-auto bg-white">
    <div className="w-[90%] md:w-full justify-center overflow-x-hidden">
        <div className="container p-0">
            <div className="flex flex-wrap gap-5">
                <div className="md:h-[462px] md:w-[305px] h-[288px] w-[163px] bg-white">
                    <img src="./images/chair.jpg" alt="The Dandy chair" className="w-full md:h-[375px] h-[201px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-thin text-gray-800">The Dandy chair</h2>
                        <p className="text-gray-600">£250</p>
                    </div>
                </div>
                <div className="md:h-[462px] md:w-[305px] h-[288px] w-[163px] bg-white">
                    <img src="./images/vase1.jpg" alt="Rustic Vase Set" className="w-full md:h-[375px] h-[201px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-thin text-gray-800">Rustic Vase Set</h2>
                        <p className="text-gray-600">£155</p>
                    </div>
                </div>
                </div>
        </div>
        <button className="text-black w-[170px] h-[56px] bg-[#F9F9F9] mt-4">
            View Collection
        </button>
    </div>
</section>
  <hr className="w-[1280px] font-thin" />
</center>

 
  <section className=" hidden lg:flex  justify-center popularproduct  h-[761px] bg-white">
    <center>
    <div className=" w-[1280px] ">
  <div className="container mx-auto  ">
  <h1 className="text-3xl  mb-4 text-start font-thin text-gray-800">Our popular products</h1>
  <div className="flex w-[1280px] gap-5" >
    <div className="h-[462px] w-[630px] hidden lg:block  bg-white">
      <img src="./images/sofa.jpg" alt="The Sofa" className="w-full h-[375px] object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-thin text-gray-800">The Popular Suedo Sofa</h2>
        <p className="text-gray-600">£250</p>
      </div>
    </div>
    
    <div className="h-[462px] w-[305px] bg-white">
      <img src="./images/chair.jpg" alt="The Silky Vase" className="w-full h-[375px] object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-thin text-gray-800">The Silky Vase</h2>
        <p className="text-gray-600">£250</p>
      </div>
    </div>
    <div className="h-[462px] w-[305px]  bg-white">
      <img src="./images/chair.png" alt="The Lucy Lamp" className="w-full h-[375px] object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-thin text-gray-800">The Lucy Lamp</h2>
        <p className ="text-gray-600">£250</p>
      </div>
    </div>
  </div>
</div>

</div>
<button className="text-black w-[170px] h-[56px] bg-[#F9F9F9]">
 View Collection

</button>
</center>
  </section>
 
  <section className="email bg-[#EBE8F4] overflow-hidden">
  <div className="max-w-full flex justify-center py-16">
    <div className="bg-white flex flex-col items-center p-6 md:p-10 text-center w-full max-w-[1200px]">
      <div className="mb-6 md:mb-8 w-full max-w-[571px]">
        <h1 className="text-2xl md:text-3xl font-thin text-gray-800 mb-4">
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

         
            

 <center>
      <section className="h-[700px] w-full overflow-hidden text-start flex">
        <div className="w-[50%] h-full ">
          <div className="mx-[84px] my-[72px] w-[536px] h-[225px] ">
            <h1 className="text-[24px] ">From a studio in London to a global brand with
            over 400 outlets</h1>
            <p className="text-[16px] my-[25px]">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market <br /><br /> .Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            <button className="text-black w-[170px] h-[56px] mt-[193px] bg-[#F9F9F9]">
     Get In Touch
    
    </button>
          </div>
        </div>
        <div className="banner2 w-[50%]"></div>
      </section>
    </center>


    <footer>
            <div className='px-6 md:px-12 py-8 bg-[#2A254B] '>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
      
          <div className=" text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-thin">Menu</h1>
            <div className='space-y-2'>
              <h1>New Arrivals</h1>
              <h1>Best sellers</h1>
              <h1>Recently viewed</h1>
              <h1>Popular this week</h1>
              <h1>All Products</h1>
            </div>
          </div>

          <div className=" text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-thin">Categories</h1>
            <div className='space-y-2'>
              <h1>Crockery</h1>
              <h1>Furniture</h1>
              <h1>Homeware</h1>
              <h1>Plant pots</h1>
              <h1>Chairs</h1>
            </div>
          </div>

          
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-thin">Our Company</h1>
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
}
