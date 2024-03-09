import React from 'react'
import ProfileCard from './ProfileCard'

const TestimonialCard = () => {
  return (
    <div className='flex_col place-items-start gap-4 p-4 rounded-md cursor-pointer bg-gradient-to-br from-cyan-800/10 to-transparent transition-all duration-500 hover:bg-cyan-300/10'>
        <h1 className='text-6xl text-left'>"</h1>
        <h2 className='text-left text-sm font-semibold'>Money is only a tool. It will take you wherever you wish, but it will not replace ypu as a driver.</h2>
        <ProfileCard/>
    </div>
  )
}

export default TestimonialCard
