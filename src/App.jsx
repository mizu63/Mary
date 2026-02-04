import React from 'react'
import Image from "../src/assets/text.png"
import Image1 from "../src/assets/tt.png"
import Image2 from "../src/assets/mm.png"
import Container from './Layout/Container'
import Image3 from "../src/assets/oo.png"
import Button from './Layout/Button'

const App = () => {
  return (
    <section className=" bg-[url('/src/assets/bg.png')] bg-cover bg-center">
      <Container>
          <div className='flex justify-between items-center px-44 pt-12'>
             <img src={Image3} alt="" />
             <ul className='flex gap-12 items-center'>
              <li className='text-[20px] font-medium text-[#474747]'>Portfolio</li>
               <li className='text-[20px] font-medium text-[#474747]'>Blog</li>
              <Button item="Hire Me"/>
             </ul>
          </div>
        <div className="relative h-[837px]">

           
          <img className="px-6" src={Image} alt="" />


          <div className="absolute left-[196px] top-[297px]">
            <h3 className="text-[#474747] font-semibold text-[45px]">
              Hi, I am
            </h3>
            <h1 className="text-[85px] font-bold text-[#181818]">
              Mary Hardy
            </h1>
           <p className='text-[18px] font-normal text-[#757575]'>Shot what able cold new see hold. Friendly as an betrayed formerly <br />
            he. Morning because as to society behaved moments.
          </p>

          </div>

          <img
            className="absolute right-5 bottom-0" src={Image2} alt="" />


          <img className="absolute right-0 bottom-0"
            src={Image1} alt="" />
          <div className='flex absolute left-49 top-[597px] gap-3 '>
              <Button className="text-white" item="Download CV"/>
             <Button className="bg-[#CCC6C2] text-white" item="Contact "/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default App
