import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.05 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
      className='relative w-60 h-72 sm:w-72 sm:h-80 xs:w-[85vw] xs:aspect-square rounded-[30px] bg-zinc-500 opacity-80 py-8 px-4 overflow-hidden'
    >
      <FaFileAlt className='text-white text-lg sm:text-xl' />
      <p className='text-white font-semibold leading-tight text-sm sm:text-base mt-2'>
        {data.desc}
      </p>

      <div className='footer absolute bottom-0 left-0 w-full'>
        <div className='flex items-center justify-between w-full px-6 py-3'>
          <h5 className='text-xs sm:text-sm'>{data.size}</h5>
          {data.download ? (
            <span className='cursor-pointer flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-sky-200'>
              <LuDownload className="text-lg p-[2px]" />
            </span>
          ) : (
            <span className='cursor-pointer flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-sky-200'>
              <IoMdClose className="text-sm" />
            </span>
          )}
        </div>

        {data.tag.isOpen && (
          <div className={`tagContainer p-3 flex items-center justify-center w-full ${data.tag.color}`}>
            <span className='text-xs sm:text-sm'>{data.tag.title}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Card
