import React, { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OtherDetails = () => {

    const [formData, setFormData] = useState({
        mobileNo: '',
        email: '',
        websiteUrl: '',
        instagramUrl: '',
        facebookUrl: '',
        twitterUrl: '',
        linkedInUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const { mobileNo, email, websiteUrl, instagramUrl, facebookUrl, twitterUrl, linkedInUrl } = formData;

        if (!mobileNo.trim() && !email.trim() && !websiteUrl.trim() && !instagramUrl.trim() && !facebookUrl.trim() && !twitterUrl.trim() && !linkedInUrl.trim()) {
            toast.error('Please Fill All Fields!', {
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
        if (!websiteUrl.trim()) {
            toast.error('Please Enter Website URL!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!instagramUrl.trim()) {
            toast.error('Please Enter Instagram URL!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!facebookUrl.trim()) {
            toast.error('Please Enter Facebook URL!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!twitterUrl.trim()) {
            toast.error('Please Enter Twitter URL!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!linkedInUrl.trim()) {
            toast.error('Please Enter Linked URL!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }

        toast.success('Submited Successfully!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1000,
        });

        setFormData({
            mobileNo: '',
            email: '',
            websiteUrl: '',
            instagramUrl: '',
            facebookUrl: '',
            twitterUrl: '',
            linkedInUrl: ''
        });
    }

    return (
        <div className='mt-10 relative'>
            <div className='grid grid-cols-[1fr,1fr,1fr] gap-16 mb-6'>
                <div>
                    <p className='mb-1 text-sm font-medium'>Mobile No.</p>
                    <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' onInput={(e) => (e.target.value) = e.target.value.replace(/[^0-9]/g, '')} maxLength={10} />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>Email</p>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>Website URL</p>
                    <input type="text" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
            </div>
            <ToastContainer />
            <div className='grid grid-cols-[1fr,1fr,1fr] gap-16 mb-6'>
                <div>
                    <p className='mb-1 text-sm font-medium'>Instagram URL</p>
                    <input type="text" name="instagramUrl" value={formData.instagramUrl} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>Facebook URL</p>
                    <input type="text" name="facebookUrl" value={formData.facebookUrl} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
                <div>
                    <p className='mb-1 text-sm font-medium'>Twitter URL</p>
                    <input type="text" name="twitterUrl" value={formData.twitterUrl} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
            </div>
            <div className='grid grid-cols-[1fr,1fr,1fr] gap-16 mb-6'>
                <div>
                    <p className='mb-1 text-sm font-medium'>LinkedIn URL</p>
                    <input type="text" name="linkedInUrl" value={formData.linkedInUrl} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' />
                </div>
            </div>
            <div onClick={handleSubmit} className='absolute bg-white h-[32px] w-[145px] top-[-41%] right-[0.2%] cursor-pointer opacity-0'>

            </div>
        </div>
    )
}

export default OtherDetails
