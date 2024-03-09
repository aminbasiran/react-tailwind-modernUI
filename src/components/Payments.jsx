import React from 'react'
import Button from './Button'

const Payments = () => {
    return (
        <div className='flex_col justify-center items-center my-8 sm:flex_row gap-10'>
            <section className='flex_col gap-4 relative  '>
                <div className='w-[300px] aspect-video bg-gradient-to-br from-cyan-800/10 to-transparent rounded-md'></div>
                <div className='absolute top-4 left-4 w-[300px] aspect-video bg-gradient-to-br from-cyan-800/10 to-transparent rounded-md'></div>
                <div className='absolute top-8 left-8 w-[300px] cursor-pointer aspect-video bg-gradient-to-br from-cyan-800/10 to-transparent rounded-md flex_col justify-between p-4 hover:-translate-y-16 hover:scale-110 transition-all duration-500 ease-in-out'>
                        
                    <div className='flex_row justify-between'>
                        <div className='font-bold text-xs'>mistraBank</div>
                        <h1 className='font-bold text-xs'>VISA</h1>
                    </div>
            
                    <h2 className='tracking-widest font-semibold text-left text-xs'>1234 5678 9098</h2>
            
                    <div className='flex_row justify-between '>
                        <div>
                            <h1 className='text-left text-xs'>Card holder:</h1>
                            <p className='font-semibold text-left text-xs'>John Doe</p>
                        </div>
                        <div>
                            <h1 className='text-xs'>Expiry date:</h1>
                            <p className='text-xs text-left font-semibold'>11/24</p>
                        </div>
                    </div>

                </div>
            </section>
            <section className='flex_col gap-4 ml-7'>
                <h1 className='font-bold text-3xl text-left'>Find a better card deal <br/> in few easy steps.</h1>
                <h2 className='text-sm text-left '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, sed ducimus? Quos magnam magni veritatis unde? Eligendi, perferendis laudantium saepe nobis omnis assumenda, repudiandae, nulla sapiente officiis maiores reprehenderit hic.</h2>
                <Button style="p-2 bg-[#38E7ED] w-fit rounded-lg text-xs text-black font-semibold">Get started</Button>
            </section>
        </div>
    )
}

export default Payments
