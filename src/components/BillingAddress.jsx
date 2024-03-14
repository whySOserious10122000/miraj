import React, { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BillingAddress = () => {

    const [formData, setFormData] = useState({
        Baddress: '',
        Bcountry: '',
        Bstate: '',
        Bcity: '',
        Bpincode: '',
        Saddress: '',
        Scountry: '',
        Sstate: '',
        Scity: '',
        Spincode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {

        const { Baddress, Bcountry, Bstate, Bcity, Bpincode, Saddress, Scountry, Sstate, Scity, Spincode } = formData;

        if (!Baddress.trim() && !Bcountry.trim() && !Bstate.trim() && !Bcity.trim() && !Bpincode.trim() && !Saddress.trim() && !Scountry.trim() && !Sstate.trim() && !Scity.trim() && !Spincode.trim()) {
            toast.error('Please Fill All Fields!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!Baddress.trim()) {
            toast.error('Please Enter Billing Address!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!Bcountry.trim()) {
            toast.error('Please Enter Billing Country!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!Bstate.trim()) {
            toast.error('Please Enter Billing State!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!Bcity.trim()) {
            toast.error('Please Enter Billing City!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!Bpincode) {
            toast.error('Please Enter Billing Pincode!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (Bpincode.length < 6) {
            toast.error('Please Enter Valid Billing Pincode!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!Saddress.trim()) {
            toast.error('Please Enter Shipping Address!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!Scountry.trim()) {
            toast.error('Please Enter Shipping Country!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!Sstate.trim()) {
            toast.error('Please Enter Shipping State!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!Scity.trim()) {
            toast.error('Please Enter Shipping City!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!Spincode) {
            toast.error('Please Enter Shipping Pincode!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (Spincode.length < 6) {
            toast.error('Please Enter Valid Shipping Pincode!', {
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
            Baddress: '',
            Bcountry: '',
            Bstate: '',
            Bcity: '',
            Bpincode: '',
            Saddress: '',
            Scountry: '',
            Sstate: '',
            Scity: '',
            Spincode: '',
        });

    }

    return (
        <div className='my-10 relative'>
            <div className='mb-14'>
                <div>
                    <h3 className='text-xl font-bold mb-4'>Bill To</h3>
                </div>
                <ToastContainer />
                <div className='grid grid-cols-[1fr,2.17fr] gap-16'>
                    <div>
                        <p className='mb-1 text-sm font-medium'>Address</p>
                        <textarea name="Baddress" value={formData.Baddress} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none h-[84%]'></textarea>
                    </div>
                    <div className=''>
                        <div className='grid grid-cols-[1fr,1fr] gap-16 mb-6  '>
                            <div>
                                <p className='mb-1 text-sm font-medium'>Country</p>
                                <select name="Bcountry" value={formData.Bcountry} onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div>
                                <p className='mb-1 text-sm font-medium'>State</p>
                                <select name="Bstate" value={formData.Bstate} onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        <div className='grid grid-cols-[1fr,1fr] gap-16'>
                            <div>
                                <p className='mb-1 text-sm font-medium'>City</p>
                                <select name="Bcity" value={formData.Bcity} onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div>
                                <p className='mb-1 text-sm font-medium'>Pincode</p>
                                <input type="text" name="Bpincode" value={formData.Bpincode} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' onInput={(e) => (e.target.value) = e.target.value.replace(/[^0-9]/g, '')} maxLength={6} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className='mb-4'>
                    <h3 className='text-xl font-bold'>Ship To</h3>
                    <input type="checkbox" id="" /><span className='text-sm ms-2'>Same as Bill to Address</span>
                </div>
                <div className='grid grid-cols-[1fr,2.17fr] gap-16'>
                    <div>
                        <p className='mb-1 text-sm font-medium'>Address</p>
                        <textarea name="Saddress" value={formData.Saddress} onChange={handleChange} className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none h-[84%]'></textarea>
                    </div>
                    <div className=''>
                        <div className='grid grid-cols-[1fr,1fr] gap-16 mb-6  '>
                            <div>
                                <p className='mb-1 text-sm font-medium'>Country</p>
                                <select name="Scountry" value={formData.Scountry} onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div>
                                <p className='mb-1 text-sm font-medium'>State</p>
                                <select name="Sstate" value={formData.Sstate} onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        <div className='grid grid-cols-[1fr,1fr] gap-16'>
                            <div>
                                <p className='mb-1 text-sm font-medium'>City</p>
                                <select name="Scity" value={formData.Scity} onChange={handleChange} id="" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none'>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div>
                                <p className='mb-1 text-sm font-medium'>Pincode</p>
                                <input name="Spincode" value={formData.Spincode} onChange={handleChange} type="text" className='border border-[#0A122A]/[.6] rounded-[4px] py-1 px-3 w-full outline-none' onInput={(e) => (e.target.value) = e.target.value.replace(/[^0-9]/g, '')} maxLength={6} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div onClick={handleSubmit} className='absolute bg-black h-[32px] w-[130px] top-[-20%] right-[0.2%] cursor-pointer opacity-0'>

            </div>
        </div>
    )
}

export default BillingAddress
