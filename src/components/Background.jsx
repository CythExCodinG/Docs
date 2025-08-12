import React from 'react'

const Background = () => {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen bg-gray-700'>
        <div className='absolute flex items-center justify-center top-[5%] p-5 w-full text-amber-300 text-lg font-semibold z-10'>Documents</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] tracking-tight leading-none font-semibold text-gray-900 z-0'>Docs.</h1>
      </div>
    </>
  )
}

export default Background