import React from 'react'

const MainSection = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <h1 className='border border-gray-400 p-3 rounded-s-md w-1/5 bg-gray-200'>MainSection</h1>
    </div>
  )
}

export default MainSection
