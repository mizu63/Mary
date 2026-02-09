import React from 'react'
import Container1 from '../Layout/Container1'
import Button from '../Layout/Button'
// import QQ from "../assets/eee.png"
import { FaFacebookF} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <section className='bg-[#FFF8F3] pb-23  pt-23'>
      <Container1>
   <div className='flex gap-20'>
   <div className='w-1/2'>
    <h1 className='text-[35px] font-bold text-[#181818] pb-4'>Lets Connect</h1>
    <p className='text-[16px] font-medium text-[#474747]'>Please fill out the form on this section to contact with me or call between
         9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>
         <div className='flex gap-5 mt-4'>
       
         <FaFacebookF className='text-[30px] text-[#FD6E0A]'/>
         <CiTwitter className='text-[30px] text-[#FD6E0A]' />
         <FaInstagram className='text-[30px] text-[#FD6E0A]'/>
         </div>
   </div>

  <div className='w-1/2'>
  <h1 className='text-[35px] font-bold text-[#181818] pb-6'>Let’s Message me</h1>
  <form className='flex flex-col gap-6'>
      <input className='bg-[#FFFFFF] w-115 p-3 text-[16px] font-medium rounded-[5px] text-[#757575]' type="text" placeholder='Your name' />
       <input className='bg-[#FFFFFF] w-115 p-3 text-[16px] font-medium rounded-[5px] text-[#757575]' type="text" placeholder='Your Email' />
       <textarea  className=" w-115 h-40 bg-white  rounded-[5px] p-3 text-[16px] text-gray-600 placeholder-gray-400 "
  placeholder="Message"></textarea>
  </form>
  <Button className="text-[#FFFFFF] mt-6 rounded-[5px]" item="Submit"/>
  </div>







   </div>
      </Container1>
    </section>
  )
}

export default Footer
