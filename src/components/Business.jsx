import React from 'react'
import Button from './Button'
import { IoStar } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsSendFill } from "react-icons/bs";

const billings = [
    {
        icon : <IoStar />,
        title : "Rewards",
        description : "The best credit cards offer some tantalizing combinations of promotions and prices"
    },
    {
        icon : <RiSecurePaymentFill/>,
        title : "100% Secured",
        description : "We take proactive steps to make sure your information and transactions are secure"
    },{
        icon : <BsSendFill/>,
        title : "Balance Transafer",
        description : "a balance transfer credit card can save you a lot of money in interest charges"
    }
]


const Business = () => {
  return (
    <div className='flex_col justify-center items-center my-8 md:flex_row'>
      <section className='flex_col gap-4'>
        <h1 className='font-bold text-3xl text-left'>You do the business, <br/> We'll handle the money.</h1>
        <h2 className='text-sm text-left '>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards in the market.</h2>
        <Button style="p-2 bg-[#38E7ED] w-fit rounded-lg text-xs text-black font-semibold">Get started</Button>
      </section>
      <section className='flex_col gap-3'>
        {billings.map((billing,index)=> <div key={index} className='flex_row items-center gap-5 p-3 rounded-md cursor-pointer transition-all duration-500 hover:bg-cyan-300/10' >
            <div className='rounded-full w-[40px] aspect-square bg-cyan-400/40 grid place-content-center'>
                {billing.icon}
            </div>
            <div className='flex_col items-start'>
                <h2 className='font-bold'>{billing.title}</h2>
                <h3 className='text-left text-xs'>{billing.description}</h3>
            </div>
        </div> )}
        
      </section>
    </div>
  )
}

export default Business
