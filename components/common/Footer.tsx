import React from 'react'

const Footer = () => {
  return (
    <div className="w-screen bg-blue_black text-greenery h-24 md:h-16 flex">
    <div className="w-[100%] max-w-[1080px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-5 sm:px-8 md:px-10">
      <div>
        ©{new Date().getFullYear()} FlipMe | All rights reserved
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <span>Website Design & Developed by </span>
        <a className="font-thin underline sm:ml-2" href="" rel="noreferrer">Sen</a>
      </div>
    </div>
  </div>
  )
}

export default Footer