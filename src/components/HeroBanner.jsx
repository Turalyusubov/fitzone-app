import React from 'react'
import HeroBannerImage from './../assets/images/HeroBannerImage.jpg'

export default function HeroBanner() {
    return (
        <div className='flex justify-between p-12'>
            <div className="hero-left">
                <p className='text-orange-600 font-bold text-xl mb-4'>FitZone</p>
                <h2 className='font-bold text-4xl mb-6'>
                    Sweat, smile <br />
                    and repeat
                </h2>
                <p className='mb-4'>Check out the most effective exercises</p>
                <button className='rounded bg-orange-600 text-yellow-50 px-4 py-2 uppercase'>Explore exercises</button>
            </div>
            <div className="hero-right w-5/12 absolute top-0 right-12">
                <img className='w-full' src={HeroBannerImage} alt="HeroBanner image" />
            </div>
        </div>
    )
}
