import React from 'react'
import RightCardContent from './RightCardContent.jsx'
import RightCardImage from './RightCardImage.jsx'

const RightCard = (props) => {
  return (
    <div className='h-full min-w-[320px] flex shrink-0 rounded-4xl relative overflow-hidden'>
     {/* <div className='h-full w-2/3 p-6 gap-10 flex flex-wrap'> */}
      <RightCardImage img={props.img}/>
      <RightCardContent introduction={props.introduction} tag={props.tag} id={props.id} color={props.color}/>
    </div>
  )
}

export default RightCard
