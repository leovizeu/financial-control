"use client"

import React from 'react'
import Image from 'next/image'
import {ImStatsBars} from 'react-icons/im'
import dynamic from "next/dynamic";

const MyHeader = () => {
  return (
      /* User Information*/
    <header className='container max-w-2xl px-6 py-6 mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          {/* Profile image */}
          <div className='h-[40px] w-[40px] rounded-full overflow-hidden'>
            <Image 
            className='object-cover w-full h-full'
            src='/thispersondoesnotexist.jpeg' 
            alt="profile img" 
            height={40} 
            width={40} 
            />
          </div>
          {/* Profile name */}
          <small>Hi, Leo!</small>
        </div>

        {/* Right side of the navigation */}
        <nav className='flex items-center gap-4'>
          <div>
            <ImStatsBars className='text-2xl' />
            </div>
          <div>
            <button className='btn btn-danger'>
              Sign Out
            </button>
            </div>
        </nav>
      </div>
    </header>
  )
}

export default dynamic (() => Promise.resolve(MyHeader), {ssr: false})
