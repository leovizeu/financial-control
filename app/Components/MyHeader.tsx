import React from 'react'
import Image from 'next/image'

const MyHeader = () => {
  return (
    /* User Information*/
    <header>
      <div>
        {/* profile image */}
        <div className='rounded-full'>
          <Image src='/thispersondoesnotexist.jpeg' alt="profile img" height={40} width={40} />
        </div>
        {/* profile name */}
        <small>Hi, Leo!</small>
      </div>
    </header>
  )
}

export default MyHeader