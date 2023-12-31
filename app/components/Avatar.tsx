'use client';
import Image from 'next/image';
import React from 'react';

const Avatar = () => {
  return (
    <Image
    src='/images/avatar.jpg'
    className='rounded-full'
    height={30}
    width={30}
    alt='Avatar'
    />
  )
}

export default Avatar;