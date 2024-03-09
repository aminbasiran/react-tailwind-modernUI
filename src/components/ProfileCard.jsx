import React from 'react'
import { BsPersonCircle } from "react-icons/bs";


const ProfileCard = () => {
  return (
    <div className='flex_row items-center gap-3 '>
      {/* <img src="" alt="" /> */}
      <BsPersonCircle size={30}/>
      <div className='flex_col place-items-start'>
        <h1>Hermen Jensen</h1>
        <h2>Founder and Leader</h2>
      </div>

    </div>
  )
}

export default ProfileCard
