import { IoSearchOutline, IoCartOutline,  } from "react-icons/io5";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineAccountCircle } from "react-icons/md";
import "./globals.css";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { RiSeedlingLine } from "react-icons/ri";
import { AiOutlineCreditCard } from "react-icons/ai";
import { IoLogoSkype } from "react-icons/io";


export default function Home() {
  return (
    <>
<body>
  
  <nav className=" h-[132px] w-full bg-white">
    
    <div className="justify-between flex h-[70px] border-b-2">
    <IoSearchOutline className="text-[#2A254B] text-base ml-7 mt-6" />
    <h1 className="mt-6">Avion</h1>
    <div className="flex">
    <IoCartOutline className="text-[#2A254B] text-base mr-4 mt-6" />
    <MdOutlineAccountCircle className="text-[#2A254B] text-base mr-7 mt-6" />
    
        
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
  <section className="h-[704px] w-full bg-white align-middle py-10 ">
<center>
  <div className="flex h-[584px] w-[1280px]  " >
    <div className="w-[760px]  h-full bg-[#2A254B] text-left  pt-[60px] pl-[80px] font-sans font-extralight">
    <div className="bannertext h-[300px]  ">
      <h1 className="text-white pb-5 text-[32px] text-left ">The furniture brand for the <br /> future, with timeless designs</h1>
      <button className="bg-[#4E4D93] mt-10 px-8 py-4  text-white text-[15px] font-extralight">view collection</button>

    </div>
    <p className="text-white w-[530px] overflow-hidden top-[120px] relative">A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.</p>
    </div>
    <div className="w-[520px] h-full banner "> </div>
  </div>
  </center>
  </section >
  <div className="h-[355px] w-full bg-white justify-center">
    
  <div className="flex justify-center items-center w-full flex-col gap-20 ">
  <h2 className="text-2xl font-bold text-center">What makes our brand different</h2>

  <div className="flex w-[1280px] justify-center gap-10">
    <div className=" items-center gap-2">
      <span className="text-xl"><TbTruckDelivery className="font-[24px]"/></span>
      <div>
        <h4 className="font-bold">Next day as standard</h4>
        <p>Order before 3pm and get your order the next day as standard</p>
      </div>
    </div>

    <div className=" items-center gap-2">
      <span className="text-xl"><CiCircleCheck className="font-[24px] text-black"/></span>
      <div>
        <h4 className="font-bold">Made by true artisans</h4>
        <p>Handmade crafted goods made with real passion and craftmanship</p>
      </div>
    </div>
    
    <div className=" items-center gap-2">
      <span className="text-xl"><AiOutlineCreditCard className="font-[24px]"/></span>
      <div>
        <h4 className="font-bold">Unbeatable prices</h4>
        <p>For our materials and quality you won't find better prices anywhere</p>
      </div>
    </div>

    <div className=" items-center gap-2">
      <span className="text-xl"><RiSeedlingLine className="font-[24px]"/></span>
      <div>
        <h4 className="font-bold">Recycled packaging</h4>
        <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
      </div>
    </div>
  </div>
</div>

  </div>
    <center>
  <section className=" justify-center ceramic h-[761px] bg-white">
    <div className="w-[1280px]  overflow-hidden">
  <div className="container mx-auto p-4">
  <h1 className="text-3xl  mb-4 text-start font-thin text-gray-800">New ceramics</h1>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
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
</center>
  <section className=" justify-center popularproduct  h-[761px] bg-white">
    <center>
    <div className="w-[1280px] ">
  <div className="container mx-auto p-4 ">
  <h1 className="text-3xl  mb-4 text-start font-thin text-gray-800">Our popular products</h1>
  <div className="flex w-[1280px] gap-5" >
    <div className="h-[462px] w-[630px]  bg-white">
      <img src="./images/sofa.jpg" alt="The Sofa" className="w-full h-[375px] object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">The Dandy chair</h2>
        <p className="text-gray-600">£250</p>
      </div>
    </div>
    
    <div className="h-[462px] w-[305px] bg-white">
      <img src="./images/chair.jpg" alt="The Silky Vase" className="w-full h-[375px] object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">The Silky Vase</h2>
        <p className="text-gray-600">£250</p>
      </div>
    </div>
    <div className="h-[462px] w-[305px]  bg-white">
      <img src="./images/chair.png" alt="The Lucy Lamp" className="w-full h-[375px] object-cover " />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">The Lucy Lamp</h2>
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
<div className='px-6 md:px-12 py-8 bg-[#2A254B] mt-8'>
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

          
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
            <div className='mt-4'>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[509px] color text-white mx-0 h-[48px] p-2 opacity-35 bg-[#4E4D93] px-4'
              />
              <button className='relative left-[-21px] sm:mt-0 sm:ml-2 w-full mx-0 sm:w-[100px] h-[48px] bg-white text-[#2A254B]'>
                Sign up
              </button>
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
</body>

  </>





  );
}
