import React from 'react'
import Section1 from './Components/Section1/Section1.jsx'

const App = () => {
    const users=[
        {
            img:"https://images.unsplash.com/photo-1588847219172-e771aad60926?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            introduction: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta fuga velit repudiandae consequatur error inventore autem provident doloremque nobis totam maxime, facilis facere veniam asperiores dignissimos, fugiat obcaecati praesentium.",
            tag:"Satisfied",
            color:"red"
        },
          {
            img:"https://images.unsplash.com/photo-1588847219172-e771aad60926?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            introduction: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta fuga velit repudiandae consequatur error inventore autem provident doloremque nobis totam maxime, facilis facere veniam asperiores dignissimos, fugiat obcaecati praesentium.",
            tag:"Satisfied",
            color:"blue"
        },
          {
            img:"https://images.unsplash.com/photo-1588847219172-e771aad60926?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            introduction: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta fuga velit repudiandae consequatur error inventore autem provident doloremque nobis totam maxime, facilis facere veniam asperiores dignissimos, fugiat obcaecati praesentium.",
            tag:"Satisfied",
            color:"yellow"
        },
          {
            img:"https://images.unsplash.com/photo-1588847219172-e771aad60926?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            introduction: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta fuga velit repudiandae consequatur error inventore autem provident doloremque nobis totam maxime, facilis facere veniam asperiores dignissimos, fugiat obcaecati praesentium.",
            tag:"Satisfied",
            color:"orange"
        }
    ];
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App
