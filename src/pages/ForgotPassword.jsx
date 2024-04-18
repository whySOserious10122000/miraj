import React, { useState } from 'react'
import 'react-phone-input-2/lib/style.css'
import { Link, useNavigate } from 'react-router-dom'
import headerImage from "../images/signup.png"

// toaster 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPassword = () => {

  const navigate = useNavigate();

  const [mail, setMail] = useState();

  const handleChange = (e) => {
    const lowercaseEmail = e.target.value.toLowerCase();
    setMail(lowercaseEmail);
  }

  const handleSubmit = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!mail || !mail.trim()) {
      toast.error('Please Enter Registered Email Address!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!emailRegex.test(mail.trim())) {
      toast.error('Please Enter Valid Email Address!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    navigate("/verify-otp")
  }

  return (
    <div className='xl:px-40 lg:px-20 md:px-10 md:py-10 bg-gray-100'>

      <div className='md:p-10 p-3 flex md:flex-row flex-col bg-white rounded-2xl'>

        {/* Image */}

        <div className='md:w-[30%] md:p-0 px-10 py-32 md:flex hidden flex-col justify-center items-center login-image rounded-2xl relative'>
          <div className=' flex flex-col justify-center items-center'>
            <h2 className='text-white text-3xl font-semibold text-center'>Don’t have an account yet?</h2>
            <p className='text-white text-sm mt-4 text-center'>Create Your Account to Start Your Digital
              Business Experience with Crops Saver</p>

            <Link to="/signup">
              <button className='bg-darkBlue text-white px-6 py-3 mt-4 border border-gray-200 rounded-md'>Register</button>
            </Link>
          </div>
          <div className='absolute top-[20px]'>
            <div className='flex justify-center'>
              <img src={headerImage} alt="" className='w-[250px]' />
            </div>
          </div>
        </div>

        <ToastContainer />

        {/* Form */}

        <div className='sm:p-10 md:w-[70%] flex flex-col items-center justify-center md:h-[700px] rounded-2xl'>
          <div className='flex flex-col'>
            <h1 className='text-darkBlue text-center sm:text-4xl text-3xl font-semibold'>Forgot Password</h1>

            <p className='text-darkBlue text-center text-sm mt-6 sm:w-[400px]'>Enter email address. we’ll send you a confirmation code to reset your password</p>


            <input type="email" value={mail} onChange={handleChange} placeholder='Email' className='w-full mt-8 py-3 outline-none px-2 border border-gray-200 rounded-md' />

            <div className='flex items-center justify-center'>
              <button onClick={handleSubmit} className='bg-darkBlue mt-8 text-white px-8 py-3 rounded-md font-medium'>Continue</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ForgotPassword