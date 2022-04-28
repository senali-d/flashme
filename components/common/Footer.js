import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blue_black text-greenery h-16 flex">
      <div className="w-[100%] max-w-[1080px] mx-auto flex justify-between items-center">
        <div>
          ©{new Date().getFullYear()} FlipMe | All rights reserved
        </div>
        <div className="">
          Website Design & Developed by 
          <a className="font-thin underline" href="https://profile-basd.herokuapp.com/" target="_blank"> Senali Dilumika</a>
        </div>
      </div>
    </div>
  )
}

export default Footer