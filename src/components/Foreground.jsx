import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {

  const ref = useRef();

  const dataCard = [{
    desc: "This is me hello from the outside i think you gotthing aah",
    tag: {
      isOpen: true,
      title: "Download",
      color: "bg-green-500"
    },
    download: true,
    size: "0.5mb"
  }, {
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit",
    tag: {
      isOpen: false,
      title: "Download",
      color: "bg-blue-500"
    },
    download: false,
    size: "0.6mb"
  }, {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptatibus!",
    tag: {
      isOpen: true,
      title: "Upload",
      color: "bg-blue-500"
    },
    download: true,
    size: "4mb"
  }
  ]
  return (
    <div ref={ref} className='flex justify-evenly fixed z-[3] w-full h-screen bg-transparent p-5'>
      {
        dataCard.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))
      }
    </div>
  )
}

export default Foreground