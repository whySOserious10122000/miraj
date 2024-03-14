import React from 'react';
import Pricingcards from '../components/Pricingcards';
import pricingBackground from "../images/pricing-background.png"

const Pricing = () => {
    return (
        <>
            <section className='pricing-container'>
                <div className='mt-12 mb-20'>
                    <img src={pricingBackground} alt="" />
                </div>
                <div className='mb-20'>
                    <div className='flex items-center gap-10 mb-12'>
                        <h1 className='text-5xl font-semibold pb-3'>Pricing</h1>
                        <div className='w-full h-0 border-b-2 border-black '></div>
                    </div>
                    <div>
                        <Pricingcards />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
