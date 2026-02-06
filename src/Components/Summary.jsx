import React from 'react'
import Container1 from '../Layout/Container1'
import Button from '../Layout/Button'
import DD from "../assets/dd.png"
const Summary = () => {
  return (
    <section>
      <Container1>
        <div>
          <h1 className='text-[35px] font-bold text-[#181818] text-center'>A summary of My Resume</h1>
        </div>
        <div className='flex pt-23 gap-7.5'>
          <div className='w-1/2'>
            <h1 className='text-[30px] font-bold text[#474747] pb-6'>My Education</h1>
            <div>
              <div>
                <h1 className='text-[25px] font-bold text-[#474747]'>ff</h1>
                <h2 className='text-[20px] font-semibold text-[#757575] pt-2 '>Harvard University / 2015 - 2017</h2>
                <p className='text-[16px] font-normal text-[#757575] leading-7 pt-2'>List skill/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                <hr className="h-px bg-[#D1D1D1] border-0 mt-4 mb-2" />
              </div>
              <div>
                <h1 className='text-[25px] font-bold text-[#474747]'>Master in Computer Engineering</h1>
                <h2 className='text-[20px] font-semibold text-[#757575] pt-2 '>Harvard University / 2015 - 2017</h2>
                <p className='text-[16px] font-normal text-[#757575] leading-7 pt-2'>List skill/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                <hr className="h-px bg-[#D1D1D1] border-0 mt-4 mb-2" />
              </div>
              <div>
                <h1 className='text-[25px] font-bold text-[#474747]'>Master in Computer Engineering</h1>
                <h2 className='text-[20px] font-semibold text-[#757575] pt-2 '>Harvard University / 2015 - 2017</h2>
                <p className='text-[16px] font-normal text-[#757575] leading-7 pt-2'>List skill/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>

              </div>

            </div>
          </div>
          <div className='w-1/2'>
            <h1 className='text-[30px] font-bold text[#474747] pb-6'>My Experience</h1>
            <div>
              <div>
                <h1 className='text-[25px] font-bold text-[#474747]'>Sr. Font End Developer</h1>
                <h2 className='text-[20px] font-semibold text-[#757575] pt-2 '>Apple Inc / 2020 - Current</h2>
                <p className='text-[16px] font-normal text-[#757575] leading-7 pt-2'>List skill/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                <hr className="h-px bg-[#D1D1D1] border-0 mt-4 mb-2" />
              </div>
              <div>
                <h1 className='text-[25px] font-bold text-[#474747]'>Jr. Font End Developer</h1>
                <h2 className='text-[20px] font-semibold text-[#757575] pt-2 '>Dribbble Inc / 2018 - 2022</h2>
                <p className='text-[16px] font-normal text-[#757575] leading-7 pt-2'>List skill/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
                <hr className="h-px bg-[#D1D1D1] border-0 mt-4 mb-2" />
              </div>
              <div>
                <h1 className='text-[25px] font-bold text-[#474747]'>HTML Developer</h1>
                <h2 className='text-[20px] font-semibold text-[#757575] pt-2 '>Adobe Inc / 2017 - 2018</h2>
                <p className='text-[16px] font-normal text-[#757575] leading-7 pt-2'>List skill/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>

              </div>


            </div>

          </div>

        </div>
        <div className="flex justify-center mt-14 pb-25">
          <Button
            item={
              <span className="flex items-center gap-2 text-[#FFFFFF]">
                <img src={DD} alt="" className="w-5 h-5" />
                Download CV
              </span>
            }
          />
        </div>
      </Container1>

    </section>
  )
}

export default Summary
