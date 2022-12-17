import React from 'react'
import { CiCalculator1 } from 'react-icons/ci'
const Footer = () => {
  return (
    <div className="w-full py-8 m-auto border-t-4 bottom-0 ">
      <div className="flex items-center m-auto justify-center">
        <CiCalculator1 size={40} className="text-[var(--primary-dark)] mr-2" />
        <h1 className="text-xl font-bold text-gray-700">
          all rights reserved &copy; TAX CALCULATOR
        </h1>
      </div>
    </div>
  )
}

export default Footer
