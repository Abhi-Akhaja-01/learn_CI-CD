import React from 'react'
import RightCard from './RightCard.jsx'
import "../../index.css"

const RightContent = (props) => {
    console.log(props);
  return (
    <div id="right" className='h-full w-full p-6 flex gap-10 overflow-x-auto overflow-y-hidden scroll-smooth snap-x'>
      {/* <RightCard /> */}
      {
        props.users.map((el,idx) => {
            return <RightCard key={idx} id={idx}  img={el.img} introduction={el.introduction} tag={el.tag} color={el.color}/>
        })
      }
    </div>
  )
}

export default RightContent
