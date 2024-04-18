import React, { useState } from 'react';
import { CalendarIcon } from "@heroicons/react/24/outline";
import HeroImage1 from "../images/hero1.jpg";
import HeroImage2 from "../images/hero21.jpg";
import HeroImage3 from "../images/hero3.jpg";
import HeroImage4 from "../images/hero4.jpg";
import optionsImage from "../images/options.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMessage, faPhone, faPhoneVolume, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2';
import Accordion from '../components/Accordian';
import CustomerStoriesImage from "../images/customer-stories.png"
import CustomerStoriesImage1 from "../images/slide1.jpg"
import title from "../images/SVG.png"
import leftImage from "../images/greenhouse.webp"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Hero1 from "../images/hero12.png"
import Hero2 from "../images/hero2.png"
import Hero4 from "../images/hero41.png"
import Hero3 from "../images/hero31.png"
import green from "../images/greeen house.jpg"

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';




const AccordianData = [
  {
    title: "Purchasing",
    content: "Enjoy a new simple way to make purchases that saves you time",
  },

  {
    title: "Sourcing",
    content: "Enjoy a new simple way to make purchases that saves you time",
  },

  {
    title: "Negotiations",
    content: "Enjoy a new simple way to make purchases that saves you time",
  },

  {
    title: "Financing",
    content: "Enjoy a new simple way to make purchases that saves you time",
  },

  {
    title: "Fullfilment",
    content: "Enjoy a new simple way to make purchases that saves you time",
  },
]

const gradientStyle = {
  background: `-webkit-linear-gradient(left, #7677FF, #00AEEF)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const HomePage = () => {

  const [formData1, setFormData1] = useState({
    full_name: '',
    email: '',
    number: '',
    message: '',
  });

  console.log(formData1);

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const Message = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const { full_name, email, number, message } = formData1;

    if (!full_name.trim() && !email.trim() && !number && !message.trim()) {
      toast.error('Please Fill All Fields!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!full_name.trim()) {
      toast.error('Please Enter Full Name!', {
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
      toast.error('Please Enter Email Address!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }


    if (!number) {
      toast.error('Please Enter Mobile Number!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (number.length < 12) {
      toast.error('Please Enter Valid Mobile Number!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!message) {
      toast.error('Please Enter Message!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }


    toast.success('Message Sent Successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000,
    });

    setFormData1({
      full_name: '',
      email: '',
      number: '',
      message: '',
    });

  }

  return (
    <div className='my-container'>
      {/* Hero Section */}


      <ToastContainer />

      {/* Sourcing Options Section */}


      <div className='relative'>
        <img src={green} alt="" className='h-[100vh] w-full' />
        <div className='bg-black absolute h-[100vh] w-full top-0 opacity-[0.6]'></div>
        <div className='absolute top-[40%] left-[7%] text-white '>
          <h1 className='text-[70px] font-semibold' >Let's Make Earth</h1>
          <p className='text-[70px] font-semibold' >Green</p>
        </div>
      </div>



      {/* Plans Section */}


      <div className='md:p-10 w-full mt-14 md:mb-0 mb-14 '>
        <div className='flex sm:p-8 p-0 flex-col items-center justify-center'>
          <h1 className='text-center sm:text-4xl text-3xl  font-semibold sm:w-[650px]'>A <span style={gradientStyle}> simple </span>  four-click procurement <span style={gradientStyle}>solution </span>
            to save you time and money
          </h1>
          <div className='md:mt-20 sm:mt-12 mt-10 grid md:gap-16 sm:gap-10 gap-6 md:grid-cols-4 grid-cols-1'>
            <div>
              <h1 className='sm:text-4xl text-2xl text-center font-medium' style={gradientStyle}>$156m+</h1>
              <p className='text-sm mt-2 text-center'>Of live inventory and growing</p>
            </div>

            <div>
              <h1 className='sm:text-4xl text-2xl text-center font-medium' style={gradientStyle}>12k+</h1>
              <p className='text-sm mt-2 text-center'>Integrated financial institutions</p>
            </div>

            <div>
              <h1 className='sm:text-4xl text-2xl text-center font-medium' style={gradientStyle}>200+</h1>
              <p className='text-sm mt-2 text-center'>LTL and FTL carriers</p>
            </div>

            <div>
              <h1 className='sm:text-4xl text-2xl text-center font-medium' style={gradientStyle}>99.3%</h1>
              <p className='text-sm mt-2 text-center'>Order acceptance rate</p>
            </div>

          </div>
        </div>
      </div>


      {/* Contact Section */}


      <div className='lg:p-10 p-0 form-container'>
        <div style={{ background: "#5587FA1A" }} className='sm:p-10 p-0 flex md:flex-row flex-col'>
          <div className="flex-1 p-8">
            <h1 className='text-3xl font-medium text-darkBlue font-semibold'>Buy. Sell. Market on </h1>
            <h1 className='text-3xl font-medium text-darkBlue mt-1 font-semibold'>Crops Saver</h1>
            <p className='mt-8 text-[#363D50] opacity-70 '>Attract and Interact</p>
            <p className='text-[#363D50] opacity-70'>on your Company Profile.</p>
            <p className='text-[#363D50] opacity-70'>Transact on your Buying/Selling Dashboard.</p>
            <button className='bg-darkBlue mt-8 text-white px-4 py-3 rounded-md font-medium'>Register now</button>

            <div className='md:mt-40 mt-10 flex flex-col gap-3'>
              <div className='flex gap-4 items-center'>
                <FontAwesomeIcon className='text-gray-500' icon={faPhoneVolume} />
                <span className='text-gray-500'>+91 999999999</span>
              </div>
              <div className='flex gap-4 items-center'>
                <FontAwesomeIcon className='text-gray-500' icon={faEnvelope} />
                <span className='text-gray-500'>support@Crops Saver.com</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 ">
            {/* <h1 className='text-xl text-gray-500 text-center'>Reach out to us We'll get back to you.</h1> */}
            <p className='mt-8 text-gray-600 px-6 text-[#363D50] opacity-70'>Reach out to us</p>
            <p className='text-gray-600 px-6 text-[#363D50] opacity-70'>We'll get back to you.</p>
            <div className='px-6 pb-6 flex flex-col'>
              <input type="text" name="full_name" value={formData1.full_name} onChange={handleChange1} placeholder='Full Name' className='mt-8 py-3 px-2 border border-black' />
              <input type="text" name="email" value={formData1.email} onChange={handleChange1} placeholder='yourname@company.com' className='mt-8 py-3 px-2 border border-black' />

              <div className='mt-8 p-0'>
                <PhoneInput
                  country={'in'}
                  placeholder='Enter mobile number'
                  value={formData1.number}
                  onChange={(value, country, event) => {
                    setFormData1(prevState => ({
                      ...prevState,
                      number: value
                    }));
                  }}
                  inputStyle={{ width: "100%", margin: "10px", height: "50px" }}
                />
              </div>
              <textarea name="message" value={formData1.message} onChange={handleChange1} className='mt-8 py-3 px-2 border border-black' />
              <button className='bg-darkBlue mt-8 text-white px-4 py-3 rounded-md font-medium'>Send Message</button>
            </div>
          </div>

        </div>
      </div>


      {/* Solution Section */}

      <div className='lg:px-10 md:px-10 lg:py-10 md:pt-10 w-full md:my-0 sm:my-20 md:w-[100%] sm:w-[80%] sm:mx-auto'>
        <div className='flex  md:flex-row flex-col  lg:px-8 md:px-8 lg:py-8 md:py-0'>
          <div className="flex-1 lg:px-8 md:px-2 sm:px-0 p-3">
            {/* <h1 className='md:text-4xl text-3xl font-medium font-semibold'>Find the right </h1>
            <h1 className='md:text-4xl text-3xl font-medium font-semibold'> <span style={{ color: "#7677FF" }}> solution</span> for you</h1> */}
            <div className='mt-20 lg:h-[552px] lg:w-[689px] md:h-[552px] md:w-[500px] relative md:block sm:hidden'>
              <img className='lg:h-[100%] md:h-[] lg:w-[100%] md:w-[700px] md:absolute lg:top-[-73px] md:top-[-15px] lg:left-[-40px] md:left-[-70px]' src={leftImage} alt="" />
            </div>
          </div>
          <div className="flex-1 lg:px-8 md:px-2 md:mb-0 bg-white">
            <p className='text-gray-500 md:mb-20 sm:mb-10'>The BluePallet platform makes it easier for members to buy and sell wholesale net houses.</p>
            {AccordianData.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} />
            ))}
          </div>

        </div>
      </div>

      <div className='w-full sm:mt-10 md:p-20 started-background mb-12'>
        <div className='md:p-20 px-2 sm:py-10 flex flex-col items-center justify-center w-full h-full rounded-lg'>
          <h1 className='text-center sm:text-4xl font-medium text-white sm:w-[450px]'>Let's Make Earth Green Using Net Houses</h1>
          <h3 className='text-center sm:text-xl text-xs sm:mt-6 font-light text-white sm:w-[450px] sm:mb-0 mb-2'>Connect with more Net Houses. More opportunities. More growth.</h3>
          <button className='bg-darkBlue sm:mt-8 text-white sm:px-4 sm:py-3 px-1 py-1 rounded-md font-medium sm:text-lg text-xs'>Get Started</button>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
