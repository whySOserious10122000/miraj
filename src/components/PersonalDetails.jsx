import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalDetails = () => {

    const [formData, setFormData] = useState({
        contactPersonName: '',
        companyName: '',
        gstNo: '',
        mobileNo: '',
        landlineNo: '',
        email: '',
        address: '',
        country: '',
        state: '',
        city: '',
        pincode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = () => {

        const { contactPersonName, companyName, gstNo, mobileNo, landlineNo, email, address, country, state, city, pincode } = formData;

        const gstCheck = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!contactPersonName.trim() && !companyName.trim() && !gstNo.trim() && !mobileNo.trim() && !landlineNo.trim() && !email.trim() && !address.trim() && !country.trim() && !state.trim() && !city.trim() && !pincode.trim()) {
            toast.error('Please Fill All Fields!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!contactPersonName.trim()) {
            toast.error('Please Enter Contact Person Name!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!companyName.trim()) {
            toast.error('Please Enter Company Name!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!gstNo.trim()) {
            toast.error('Please Enter GST Number!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!gstCheck.test(gstNo.trim())) {
            toast.error('Please Enter Valid GST Number!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!mobileNo) {
            toast.error('Please Enter Mobile Number!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (mobileNo.length < 10) {
            toast.error('Please Enter Valid Mobile Number!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (landlineNo && landlineNo.length < 10) {
            toast.error('Please Enter Valid Landline Number!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!email.trim()) {
            toast.error('Please Enter Email Address!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!emailRegex.test(email.trim())) {
            toast.error('Please Enter Valid Email Address!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!address.trim()) {
            toast.error('Please Enter Address!', {
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
            toast.error('Please Select City!', {
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
                    <p className='mb-1 text-sm font-medium'>Contact Person Name</p>
                    <input name='contactPersonName' onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>Company Name</p>
                    <input name='companyName' onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>GST No.</p>
                    <input name='gstNo' onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
            </div>
            <ToastContainer />
            <div className='grid grid-cols-[1fr,1fr,1fr] gap-16 mb-6'>
                <div>
                    <p className='mb-1 text-sm font-medium'>Mobile No.</p>
                    <input name='mobileNo' onChange={handleChange} onInput={(e) => (e.target.value) = e.target.value.replace(/[^0-9]/g, '')} maxLength={10} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>Landline Number</p>
                    <input name='landlineNo' onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>Email</p>
                    <input name='email' onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
            </div>
            <div className='grid grid-cols-[1fr,1fr,1fr,1fr] mb-6'>
                <div>
                    <p className='mb-2 text-sm font-medium'>Mode of Business</p>
                    <div className='flex justify-between'>
                        <div>
                            <input type="checkbox" name="" id="" className='me-2' /><span>Manufacture</span>
                        </div>
                        <div>
                            <input type="checkbox" name="" id="" className='me-2' /><span>Trader</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-[1fr,2.17fr] gap-16'>
                <div>
                    <p className='mb-1 text-sm font-medium'>Address</p>
                    <textarea name='address' onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none h-[84%]'></textarea>
                </div>
                <div className=''>
                    <div className='grid grid-cols-[1fr,1fr] gap-16 mb-6  '>
                        <div>
                            <p className='mb-1 text-sm font-medium'>Country</p>
                            <select name='country' onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                <option value=""></option>
                            </select>
                        </div>
                        <div>
                            <p className='mb-1 text-sm font-medium'>State</p>
                            <select name='state' onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-[1fr,1fr] gap-16'>
                        <div>
                            <p className='mb-1 text-sm font-medium'>City</p>
                            <select name='city' onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                <option value=""></option>
                            </select>
                        </div>
                        <div>
                            <p className='mb-1 text-sm font-medium'>Pincode</p>
                            <input name='pincode' onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' onInput={(e) => (e.target.value) = e.target.value.replace(/[^0-9]/g, '')}
                                maxLength={10} />
                        </div>
                    </div>

                </div>
            </div>
            <div onClick={handleSubmit} className='absolute bg-white h-[32px] cursor-pointer w-[135px] top-[-24%] right-[0.2%] opacity-0 '>

            </div>
        </div>
    )
}

export default PersonalDetails
