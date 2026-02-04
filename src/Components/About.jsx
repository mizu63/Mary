import React from 'react'
import Container1 from '../Layout/Container1'

const About = () => {
  return (
    <section >
      <Container1>
        <div className='bg-[#FFF8F3] mt-32.75'>
          <h1 className='text-[35px] font-bold text-center pt-32.75'>About Me</h1>
          <p className='text-[18px] pt-7.5 font-normal text-[#757575] text-center text-clip pl-39 pr-39 leading-7.5'>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
       <div className='flex  justify-center pt-7.5 pb-32.75'>
           <div className='flex items-center text-center gap-12.5'>
            <div>
              <h1 className='text-[20px] font-normal text-[#757575]'>Name:</h1>
              <h2 className='text-[20px] font-bold text-[#757575]'>Mary Hardy</h2>
            </div>
            <div>
              <h1 className='text-[20px] font-normal text-[#757575]'>Email:</h1>
              <h2 className='text-[20px] font-bold text-[#757575]'>info@gmail.com</h2>
            </div>
            <div>
              <h1 className='text-[20px] font-normal text-[#757575]'>Date of birth:
</h1>
              <h2 className='text-[20px] font-bold text-[#757575]'>11 November 1987</h2>
            </div>
            <div>
              <h1 className='text-[20px] font-normal text-[#757575]'>From:</h1>
              <h2 className='text-[20px] font-bold text-[#757575]'>Los Angeles, USA</h2>
            </div>
          </div>
       </div>
        </div>

      </Container1>
    </section>
  )
}

export default About
