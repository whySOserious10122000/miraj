import React, { useState } from 'react'
import Image from "../images/Rectangle.png"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link, useNavigate } from 'react-router-dom'
import headerImage from "../images/signup.png"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const navigate = useNavigate();



  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (e) => {
    const lowercaseEmail = e.target.value.toLowerCase();
    setEmail(lowercaseEmail);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleNavigate = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      toast.error('Please Enter Email!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!emailRegex.test(email.trim())) {
      toast.error('Invalid Email Format!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!password) {
      toast.error('Please Enter Password!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if(email !== "mirajahir123@gmail.com"){
      toast.error('Please Enter Registered Email Id!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if(password !== "miraj123"){
      toast.error('Please Enter Correct Password!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if(email === "mirajahir123@gmail.com" && password === "miraj123"){
      localStorage.setItem("email" , email )
      localStorage.setItem("name" , "miraj" )
    }

    navigate("/")
  }

  return (
    <div className='xl:px-64 lg:px-20 md:px-10 md:py-10 bg-gray-100'>

      <div className='flex md:flex-row flex-col bg-white rounded-2xl'>

        {/* Image */}

        <div className='md:w-[30%] md:p-0 px-10 py-32 md:flex hidden flex-col justify-center items-center login-image rounded-2xl relative'>
          
        </div>

        <ToastContainer />
        {/* Form */}

        <div className='p-10 md:w-[70%] flex flex-col items-center justify-center md:h-[700px] rounded-2xl'>
          <div className='flex flex-col w-[95%] '>
            <h1 className='text-darkBlue text-center text-4xl font-semibold'>Login to Your Account</h1>



            <input type="email" value={email} onChange={handleEmail} placeholder='Email' className='mt-8 py-3 outline-none px-2 border border-[#0A122A]/[.5] rounded-md rounded-md' />
            <div className='relative mt-8'>
              <input
                name='password'
                onChange={handlePassword}
                type={showPassword1 ? "text" : "password"}
                placeholder='Enter Password '
                className='outline-none py-3 px-2 border border-[#0A122A]/[.5] rounded-md w-full'
              />
              <FontAwesomeIcon
                icon={showPassword1 ? faEyeSlash : faEye}
                className='absolute top-[30%] right-[2%] cursor-pointer'
                onClick={togglePasswordVisibility1}
              />
            </div>

            <span className='text-darkBlue mt-6'><Link >Forgot Password ?</Link> </span>
            <div className='flex items-center justify-center'>
              <button onClick={handleNavigate} className='bg-darkBlue mt-8 text-white px-10 py-3 rounded-md font-medium'>Login</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Login