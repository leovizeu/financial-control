import React from 'react'

const Income = () => {
  return (
    <div className='bg-gray-800 grid grid-cols-2 divide-x shadow-md drop-shadow-md rounded w-full py-8'>
        <div className='flex justify-around'>
            <div className='w-full flex-col flex items-center justify-center'>
                <h1 className='uppercase'>Income</h1>
                <p className='text-green-500 font-sans text-xl'>R$ 4000.00</p>
            </div>
            
        </div>
        <div className='flex justify-between'>
            <div className='w-full flex-col flex items-center justify-center'>
                <h1 className='uppercase'>Expences</h1>
                <p className='text-red-500 font-sans text-xl'>R$ 0.00</p>
            </div>
        </div>
    </div>
  )
}

export default Income   