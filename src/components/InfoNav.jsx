import React from 'react'

function InfoNav() {
  return (
    <div className="sticky top-0 w-full h-8 bg-[#006699] hidden md:flex items-center justify-between z-10">
      <div className="text-sm text-white flex gap-3 px-2">
        <a href="#">IEEE.org</a>
        <a href="#">IEEE Xplore Digital Library</a>
        <a href="#">IEEE Standards</a>
        <a href="#">IEEE Spectrum</a>
        <a href="#">More Sites</a>
      </div>
      <div className="text-white hover:cursor-pointer">Language: English +</div>
    </div>
  )
}

export default InfoNav
