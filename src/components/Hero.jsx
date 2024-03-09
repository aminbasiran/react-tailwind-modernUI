import React from 'react'
import react from "../assets/react.svg"

const Hero = () => {
    return (
        <div className='flex_col gap-10'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                <section className='flex_col gap-3 span'>
                    <h3 className='text-left text-xs py-2 px-3 rounded-full bg-gradient-to-r from-zinc-300/20 to-transparent w-fit'><span className='font-semibold'>20% </span>DISCOUNT FOR <span className='font-bold'>1 MONTH </span>ACCOUNT</h3>
                    <h1 className='text-5xl font-bold text-left leading-snug'>The Next <br/><span className='text-[#46e8ee]'>Generation</span><br/>Payment Method
                    </h1>
                    <h2 className='text-left text-sm'>Our teams of expert uses a methodology to identify the credit cards most likely to fit your needs. <br/> We examine annual percentage rates, annual fee.</h2>
                </section>
                <section className='flex justify-center items-center'>
                    <img className="w-48 aspect-square animated-spin " src={react} alt="" />
                </section>
            </div>
            <h1 className='text-md sm:text-3xl my-32'><span className='font-bold text-[#46e8ee]'>3800+</span> user active | <span className='font-bold text-[#46e8ee]'>230+</span> trusted by companies | <span className='font-bold text-[#46e8ee]'>$23M+</span> transactions</h1>
        </div>
    )
}

export default Hero