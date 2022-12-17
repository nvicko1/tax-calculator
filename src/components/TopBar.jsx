import React from 'react'

import { CiCalculator1 } from 'react-icons/ci'

const TopBar = () => {
  return (
    <div className="flex justify-around items-center px-2 py-2">
      <div className="flex items-center mb-10">
        <CiCalculator1 size={40} className="text-[var(--primary-dark)] mr-2" />
        <h1 className="text-xl font-bold text-gray-700">TAX CALCULATOR</h1>
      </div>
    </div>
  )
}

export default TopBar
