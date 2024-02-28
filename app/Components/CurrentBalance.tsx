import React from 'react'
import {currencyFormatter} from '@/app/Controller/utils'

const CurrentBalance = () => {
  return (
    <>
    <section className='w-full py-5 uppercase'>
        <small>
            Current Balance
        </small>
        <h2 className='text-blue-500 font-sans font-bold text-4xl py-3'>
          {currencyFormatter(10000)}
        </h2>
    </section>
    <section className='flex items-center gap-2 py-3'>
      <button className='btn btn-primary '>+ Income</button>
      <button className='btn btn-primary-outline'>+ Expenses</button>
    </section>
    </>
  )
}

export default CurrentBalance