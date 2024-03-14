import React from 'react';
import buyChemical from "../images/buy-chemical.png"
import { useNavigate } from 'react-router-dom';
import flat from "../images/flat-shade.png"
import flat2 from "../images/dom-shade.png"
import flat3 from "../images/wire-rop.png"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buycard = () => {

    const navigate = useNavigate();

    const handleNavigate = (productName, priceRange) => {
        // Retrieve existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem('productData')) || [];

        // Check if the product is already in the localStorage
        const existingProductIndex = existingData.findIndex(item => item.productName === productName);

        const currentDate = new Date(); // Get the current date

        if (existingProductIndex === -1) {
            // If the product is not in the localStorage, add it
            const newData = { productName, priceRange, date: currentDate, status: 'Processing' };
            existingData.push(newData);
            localStorage.setItem('productData', JSON.stringify(existingData));
        } else {
            // If the product is already in localStorage, update its price range, date, and status
            existingData[existingProductIndex].priceRange = priceRange;
            existingData[existingProductIndex].date = currentDate;
            existingData[existingProductIndex].status = 'Processing';
            localStorage.setItem('productData', JSON.stringify(existingData));
        }

        toast.success(`${productName} odered successfully`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1000,
          });

        // navigate("/product-detail");
    }



    return (
        <>
            <div className='grid grid-cols-[1fr,1fr,1fr] gap-4'>

                <div className='rounded-lg bg-white px-4 py-3 shadow'>
                    <div className=''>
                        <img src={flat} alt="" className='w-full' />
                    </div>
                    <ToastContainer />
                    <div className='py-3'>
                        <h3 className='font-medium text-xl'>Flat Shade Net House</h3>
                        <div className='flex justify-between mt-2 mb-4'>
                            <div>
                                <p className='text-slate-400'>Price </p>
                                <p className='font-medium'>₹200 - ₹250 SQF</p>
                            </div>
                        </div>
                        <button className='bg-darkBlue text-white text-sm  px-4 py-2 rounded-lg w-full' onClick={() => handleNavigate('Flat Shade Net House', '₹200 - ₹250 SQF',)}>Buy Now</button>
                    </div>
                </div>
                <div className='rounded-lg bg-white px-4 py-3 shadow'>
                    <div className=''>
                        <img src={flat2} alt="" className='w-full' />
                    </div>
                    <div className='py-3'>
                        <h3 className='font-medium text-xl'>Dome Shade Net House</h3>
                        <div className='flex justify-between mt-2 mb-4'>
                            <div>
                                <p className='text-slate-400'>Price </p>
                                <p className='font-medium'>₹300 - ₹320 SQF</p>
                            </div>
                        </div>
                        <button className='bg-darkBlue text-white text-sm  px-4 py-2 rounded-lg w-full' onClick={() => handleNavigate('Dome Shade Net House', '₹300 - ₹320 SQF')}>Buy Now</button>
                    </div>
                </div>
                <div className='rounded-lg bg-white px-4 py-3 shadow'>
                    <div className=''>
                        <img src={flat3} alt="" className='w-full' />
                    </div>
                    <div className='py-3'>
                        <h3 className='font-medium text-xl'>Wire Rope Net House</h3>
                        <div className='flex justify-between mt-2 mb-4'>
                            <div>
                                <p className='text-slate-400'>Price </p>
                                <p className='font-medium'>₹120 - ₹140 SQF</p>
                            </div>
                        </div>
                        <button className='bg-darkBlue text-white text-sm  px-4 py-2 rounded-lg w-full' onClick={() => handleNavigate('Wire Ropw Net House', '₹120 - ₹140 SQF')}>Buy Now</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Buycard
