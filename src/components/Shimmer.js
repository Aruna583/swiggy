import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-row justify-around flex-wrap h-full'>
      {Array(10)
      .fill("")
      .map((e, index) => (
        <div key={index} className='h-96 w-48 p-2 bg-red-200 hover:border hover:border-red-500 hover:shadow-md mt-2 rounded-xl cursor-pointer hover:bg-violet-300 hover:shadow-xl flex flex-col justify-evenly'></div>
      ))}
    </div>
  )
}

export default Shimmer