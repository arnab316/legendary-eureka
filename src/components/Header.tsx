import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='bg-[#00405A] flex px-6 py-3 items-center'>
      <img src="/wb.png" alt="wblogo" className='h-28 w-24 ml-20' />
      <div className='ml-8'>
        <h1 className='text-white font-bold text-4xl '>Directorate of Factories</h1>
        <p className='text-[#A6EFF5] text-sm font-medium'>Labour Department | Government of West Bengal</p>
      </div>
    </div>
  )
}

export default Header