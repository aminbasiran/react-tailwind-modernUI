import React , {useState} from 'react'
import { navLinks } from '../constants'
import { RiMenuAddFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [isOpen,  setIsOpen] = useState(false)
    return (
        <div className='flex_row justify-between items-center'>
            <h1 className='text-2xl font-semibold'>mistraBank</h1>
            <div className='relative sm:hidden'>
                <div onClick={()=>{setIsOpen(prev=> !prev)}}>
                    {isOpen ? <IoMdClose /> : <RiMenuAddFill/>}
                </div>
                <nav className={`${isOpen ? "flex_col gap-4 items-end" : "hidden"} absolute right-2 top-10`}>
                    {navLinks.map((link,index)=><h3 key={index} className='text-xs'>{link.title}</h3>)}
            </nav>
            </div>
            <nav className='flex_row gap-5 hidden sm:flex'>
                    {navLinks.map((link,index)=><h3 key={index} className='text-xs'>{link.title}</h3>)}
            </nav>
        </div>
    )
}

export default Navbar
