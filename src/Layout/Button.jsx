import React from 'react'

const Button = ({item,className}) => {
  return (
   <button className={`bg-[#FD6E0A] text-[20px] font-bold px-8.25 py-4.75  ${className}`}>{item}</button>
  )
}

export default Button
