import React from 'react'
import Image from "../src/assets/text.png"
import Image1 from "../src/assets/tt.png"
import Image2 from "../src/assets/mm.png"
import Container from './Layout/Container'

const App = () => {
  return (
    <section className="bg-[#CCC6C2]">
      <Container>
        <div className="relative h-[837px] bg-[url('/src/assets/bg.png')] bg-cover bg-center">


          <img className="px-6 py-9.5" src={Image} alt="" />


          <div className="absolute left-[196px] top-[297px]">
            <h3 className="text-[#FD6F00] text-[45px]">
              Hi, I am
            </h3>
            <h1 className="text-[72px] font-bold text-[#1E1E1E]">
              Mary Hardy
            </h1>
           <p className='text-[16px]'>Shot what able cold new see hold. Friendly as an betrayed formerly <br />
            he. Morning because as to society behaved moments.
          </p>

          </div>

          <img
            className="absolute right-[20px] bottom-0" src={Image2} alt="" />


          <img className="absolute right-0 bottom-0"
            src={Image1} alt="" />

        </div>
      </Container>
    </section>
  )
}

export default App
