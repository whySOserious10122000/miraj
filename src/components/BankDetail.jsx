import React, { useState } from 'react'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BankDetail = () => {

    const [formData, setFormData] = useState({
        bank_name: '',
        ifsc_code: '',
        account_number: '',
        branch_address: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        branch_code: '',
        cancel_check: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const { bank_name, ifsc_code, account_number, branch_address, country, state, city, pincode, branch_code, cancel_check, } = formData;

        if (!bank_name.trim() && !ifsc_code.trim() && !account_number.trim() && !branch_address.trim() && !country.trim() && !state.trim() && !city.trim() && !pincode.trim() && !branch_code.trim() && !cancel_check) {
            toast.error('Please Fill All Fields!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!bank_name.trim()) {
            toast.error('Please Enter Bank Name!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!ifsc_code.trim()) {
            toast.error('Please Enter IFSC Code!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!account_number.trim()) {
            toast.error('Please Enter Account Number!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!branch_address.trim()) {
            toast.error('Please Enter Branch Address!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!country.trim()) {
            toast.error('Please Select Country!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!state.trim()) {
            toast.error('Please Select State!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!city.trim()) {
            toast.error('Please Select City!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!pincode) {
            toast.error('Please Enter Pincode!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (pincode.length < 6) {
            toast.error('Please Enter Valid Pincode!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!branch_code) {
            toast.error('Please Enter Branch Code!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!cancel_check) {
            toast.error('Please Enter Check Photo!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }

    }


    return (
        <div className='my-10 relative'>
            <div className='grid grid-cols-[1fr,1fr,1fr] gap-16 mb-6'>
                <div>
                    <p className='mb-1 text-sm font-medium'>Bank Name</p>
                    <input name="bank_name" value={formData.bank_name} onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>IFSC Code</p>
                    <input name="ifsc_code" value={formData.ifsc_code} onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>Account Number</p>
                    <input name="account_number" value={formData.account_number} onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
            </div>
            <ToastContainer />
            <div className='grid grid-cols-[1fr,2.17fr] gap-16 mb-6'>
                <div>
                    <p className='mb-1 text-sm font-medium'>Branch Address</p>
                    <textarea name="branch_address" value={formData.branch_address} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none h-[84%]'></textarea>
                </div>
                <div className=''>
                    <div className='grid grid-cols-[1fr,1fr] gap-16 mb-6  '>
                        <div>
                            <p className='mb-1 text-sm font-medium'>Country</p>
                            <select name="country" value={formData.country} onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                <option value=""></option>
                            </select>
                        </div>
                        <div>
                            <p className='mb-1 text-sm font-medium'>State</p>
                            <select name="state" value={formData.state} onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-[1fr,1fr] gap-16'>
                        <div>
                            <p className='mb-1 text-sm font-medium'>City</p>
                            <select name="city" value={formData.city} onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                <option value=""></option>
                            </select>
                        </div>
                        <div>
                            <p className='mb-1 text-sm font-medium'>Pincode</p>
                            <input name="pincode" value={formData.pincode} onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                        </div>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-[1fr,1fr,1fr] gap-16 mb-6'>
                <div>
                    <p className='mb-1 text-sm font-medium'>Branch Code</p>
                    <input name="branch_address" value={formData.branch_address} onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>Cancel Cheque <span className='text-xs font-thin'>(png, jpg or jpeg Only)</span></p>
                    <input name="cancel_check" value={formData.cancel_check} onChange={handleChange} type="file" className='file:bg-black file:text-white file:rounded border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
            </div>
            <div onClick={handleSubmit} className='absolute bg-white h-[32px] w-[130px] top-[-29.5%] right-[0.2%] cursor-pointer opacity-0'>

            </div>
        </div>
    )
}

export default BankDetail
