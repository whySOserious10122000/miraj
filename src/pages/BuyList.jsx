import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import search from "../images/search-icon.png"
import sidescreen from "../images/sidescreen.png"
import Buycard from '../components/Buycard';
import flat from "../images/flat-shade.png"
import flat2 from "../images/dom-shade.png"
import flat3 from "../images/wire-rop.png"

const BuyList = () => {


    return (
        <>
            <div className='bg-black/[.02]'>
                <div className="ms-20 pt-10 me-10">
                    <div className='grid grid-cols-[4fr,1fr] gap-10'>
                        <div>
                            {/* <div className='flex justify-center mb-10'>
                                <div className='relative w-[60%]'>
                                    <input type="text" className='bg-transparent border border-black rounded-lg w-full py-2 ps-6 focus-visible:outline-none' placeholder='Search by Chemical Name / API No. / CAS No...' />
                                    <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className='absolute right-0 top-[15%] sm:mr-3 mr-4 text-white bg-gray-800 rounded sm:py-2 sm:px-3 py-1 px-1 sm:text-md text-sm'
                                />
                                    <img src={search} alt="" className='absolute right-0 top-[14%] mr-2 h-[30px]' />
                                </div>
                            </div> */}
                            <div>
                                <Buycard />
                            </div>
                        </div>
                        <div>
                            <img src={sidescreen} alt="" className='mb-7' />
                            <img src={sidescreen} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyList
