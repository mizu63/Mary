import React from 'react'
import Container1 from '../Layout/Container1'
import JJ from "../assets/jj.png"
import RR from "../assets/rr.png"
import NN from "../assets/nn.png"
import SS from "../assets/ss.png"
const Skills = () => {
  return (
  <section>
    <Container1>
   <div className='pb-32.5'>
    <h1 className='text-[35px] font-bold text-[#181818] text-center mt-32.5'>What I do</h1>
    <p className='text-[18px] font-normal leading-7.5 text-center text-[#757575] pt-7.5'>I have more than 10 years experience building software for clients all over the world. Below is a <br></br> quick overview of my main technical skill sets and technologies i use. Want to find out more about <br></br> my experience? Check out my online resume and project portfolio.</p>
    <div  className='flex gap-[24px] pt-12.5'>
        <div className='bg-[#FFFFFF] rounded-[5px] transition-all shadow-gray-400/50  p-7.5  shadow-xl '>
            <img className='pb-7.5' src={JJ} alt="" />
            <h1 className='pb-5 font-bold text-[20px]'>Vanilla JavaScript</h1>
            <p className='text-[16px] font-normal text-[#757575] leading-7'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
        </div>
         <div className='bg-[#FFFFFF] rounded-[5px] transition-all shadow-gray-400/50  p-7.5  shadow-xl '>
            <img className='pb-7.5' src={RR} alt="" />
            <h1 className='pb-5 font-bold text-[20px]'>React</h1>
            <p className='text-[16px] font-normal text-[#757575] leading-7'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
        </div>
         <div className='bg-[#FFFFFF] rounded-[5px] transition-all shadow-gray-400/50  p-7.5  shadow-xl '>
            <img className='pb-7.5' src={NN} alt="" />
            <h1 className='pb-5 font-bold text-[20px]'>Node.js</h1>
            <p className='text-[16px] font-normal text-[#757575] leading-7'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
        </div>
         <div className='bg-[#FFFFFF] rounded-[5px] transition-all shadow-gray-400/50  p-7.5  shadow-xl '>
            <img className='pb-7.5' src={SS} alt="" />
            <h1 className='pb-5 font-bold text-[20px]'>MongoDB</h1>
            <p className='text-[16px] font-normal text-[#757575] leading-7'>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
        </div>
       
    </div>
   </div>
    </Container1>
  </section>
  )
}

export default Skills
