import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    return (
        <div className='flex_col gap-10'>
            <h1 className='text-3xl font-bold text-left'>What people are saying about us</h1>
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </div>
            <div>
                <ul className='flex_row gap-7 text-4xl animated-scroll'>
                    <li>airbnb</li>
                    <li>BINANCE</li>
                    <li>coinbase</li>
                    <li>Dropbox</li>
                    <li>Evernote</li>
                    <li>Apple</li>
                    <li>Uber</li>
                    <li>Lyft</li>
                    <li>Pinterest</li>
                    <li>Snapchat</li>
                    <li>Twitch</li>
                    <li>Reddit</li>
                    <li>Etsy</li>
                    <li>Shopify</li>
                    <li>Zoom</li>
                    <li>Netflix</li>
                    <li>Spotify</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Tesla</li>
                    <li>Amazon</li>
                    <li>Google</li>
                    <li>Facebook</li>
                    <li>Microsoft</li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
