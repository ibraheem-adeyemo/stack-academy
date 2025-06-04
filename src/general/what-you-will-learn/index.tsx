import { CheckIcon } from '@/components/svg-icons/menu-icon';
import React from 'react'

const WhatYouWillLearn = ({ whatYouLearn }: {whatYouLearn: string[]}) => {
  return (
    <div className='my-20'>
      <h4 className='text-center font-bold text-3xl text-active-blue-700'>What you'll learn</h4>
      <div className='grid grid-cols-1 lg:grid-cols-2 bg-active-blue-100 p-4 rounded-2xl mt-15'>
        {
            whatYouLearn.map((item, i) => (
                <div className='flex items-center my-4'>
                    <CheckIcon className='w-7 mr-2' />
                    <p>{item}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default WhatYouWillLearn;
