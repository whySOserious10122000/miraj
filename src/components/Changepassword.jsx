import React, { useState } from 'react';
import { faPencil, faPlus, faSearch, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chem1 from "../images/chemical-1.jpg"
import right from "../images/right.png"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {


    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        setModalTitle("Catalog Updated Successfully!")
        setButtonChange("Submit")
    };


    const closeModal = () => {
        setIsOpen(false);
    };


    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = () => {
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!oldPassword && !newPassword && !confirmPassword) {
        toast.error('Please Fill All Fields!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }
      if (!oldPassword) {
        toast.error('Please Enter Old Password!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }
      if (!newPassword) {
        toast.error('Please Enter New Password!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }
      if (!confirmPassword) {
        toast.error('Please Enter Confirm Password!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }
      if (newPassword != confirmPassword) {
        toast.error('New Password And Confirm Password Not Matched!', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
        return;
      }
  
      toast.success('Password Changed Successfully Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')
  
    }


    return (
        <div className="w-full md:p-6 p-2  overflow-x-hidden">
            <h1 className="md:text-3xl text-xl font-semibold mb-5">Change Password</h1>
            <p className='mb-2'>'Stay Secure, Stay Strong: Change Your Password Today!'</p>
            <hr />
            <ToastContainer/>
            <div>
                <div className='flex justify-center mt-28'>
                    <div className='bg-white h-[500px] w-[500px] shadow-lg'>
                        <h1 className='text-center'><FontAwesomeIcon icon={faLock} className='bg-slate-200 px-6 py-5 rounded-full text-4xl' /></h1>
                        <h2 className='text-center text-4xl font-semibold mt-3'>Change Password</h2>
                        <p className='text-center mt-5 font-medium'>To change your password please fill in the fields below.</p>
                        <div className='px-20 mt-10'>
                            <div className='relative mb-7'>
                                <input type="text" onChange={(e) => setOldPassword(e.target.value)} placeholder='Old Password' className='border-2 border-gray-200 rounded w-full py-1 ps-8' />
                                <FontAwesomeIcon icon={faEye} className='absolute right-0 top-[25%] mr-3 text-slate-400' />
                                <FontAwesomeIcon icon={faLock} className='absolute left-0 top-[25%] ml-2 text-slate-400' />
                            </div>
                            <div className='relative mb-7'>
                                <input type="text" onChange={(e) => setNewPassword(e.target.value)} placeholder='New Password' className='border-2 border-gray-200 rounded w-full py-1 ps-8' />
                                <FontAwesomeIcon icon={faEye} className='absolute right-0 top-[25%] mr-3 text-slate-400' />
                                <FontAwesomeIcon icon={faLock} className='absolute left-0 top-[25%] ml-2 text-slate-400' />
                            </div>
                            <div className='relative'>
                                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='border-2 border-gray-200 rounded w-full py-1 ps-8' />
                                <FontAwesomeIcon icon={faEye} className='absolute right-0 top-[25%] mr-3 text-slate-400' />
                                <FontAwesomeIcon icon={faLock} className='absolute left-0 top-[25%] ml-2 text-slate-400' />
                            </div>
                        </div>
                        <div className='mx-20'>
                            <button onClick={openModal} className='bg-darkBlue mt-8 text-white  py-3 rounded-md font-medium w-full '>Change Password</button>
                        </div>
                    </div>


                    {isOpen && (
                        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md py-4">
                                        <div class="bg-white py-3">
                                            <div class="flex flex-col items-center">
                                                <img src={right} alt="" className='h-[80px]' />
                                                <h3 className='font-semibold text-2xl mt-4'>Password Changed!</h3>
                                                <p className='text-sm'>Your password has been changed successfully.</p>
                                            </div>
                                        </div>
                                        <div class="bg-white mx-8 py-3">
                                            <button onClick={closeModal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-darkBlue px-3 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-[100%]">Back to Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}

export default ChangePassword