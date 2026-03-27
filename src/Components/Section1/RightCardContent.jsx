import React from 'react'
import { MoveRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full  w-full p-8 flex flex-col justify-between text-white'>
        <h2 className='bg-amber-50 rounded-full w-10 h-10 flex justify-center items-center text-black text-2xl font-bold' >{props.id+1}</h2>
        <div>
            <p className='text-lg leading-normal mb-5 font-medium'>{props.introduction}</p>
            <div className='flex justify-between'>
                <button style={{ backgroundColor: props.color }} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                <button style={{ backgroundColor : props.color }} className=' text-white font-medium px-4 py-2 rounded-full '><MoveRight /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
