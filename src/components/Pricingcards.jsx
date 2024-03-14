import React from 'react';
import pricing1 from "../images/pricing1.png"

const Pricingcards = () => {

    const cards = [
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" }
    ]

    return (
        <div className='grid lg:grid-cols-[1fr,1fr,1fr,1fr] md:grid-cols-[1fr,1fr,1fr,1fr] gap-12'>
            {cards && cards.map((e) => (
                <>
                    <div className='bg-white border rounded-xl'>
                        <div>
                            <div>
                                <img src={pricing1} alt="" />
                            </div>
                            <div className='flex justify-center pb-10 '>
                                <div className='mt-6'>
                                    <h1 className='text-center font-semibold text-3xl mb-4'>Free Trial</h1>
                                    <ul className=''>
                                        <li className='list-disc mb-3'>Online Subscription</li>
                                        <li className='list-disc mb-3'>No Downloads</li>
                                        <li className='list-disc mb-3'>Certain Info Available</li>
                                        <li className='list-disc mb-3'>Global Coverage</li>
                                        <li className='list-disc mb-3'>One User</li>
                                    </ul>
                                    <div className='flex justify-center items-end gap-2'>
                                        <p className='text-lg'>From</p>
                                        <h2 className='text-3xl font-medium ms-2'>$0</h2>
                                        <p>/ day</p>
                                    </div>
                                    <div className='flex justify-center mt-5'>
                                        <button className='bg-darkBlue text-white text-sm  px-4 py-2 rounded-lg'>Request for Demo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Pricingcards
