import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  const gradientStyle = {
    background: `-webkit-linear-gradient(left, #7677FF, #00AEEF)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };


  const [email, setEmail] = useState("")

  const handleSubmit = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
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

    toast.success('Message Sent Successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000,
    });
    setEmail('')

  }

  return (
    <div className='my-container'>
      <footer className='sm:px-10 px-0 sm:pt-10 pt-5 pb-2 mt-4 footer text-gray-300'>

        <div className='flex md:flex-row flex-col p-8 items-center justify-between'>
          <div>
            <h1 className='text-2xl font-medium'>Subscribe to our newsletters</h1>
            <p className='text-md text-[#FFFFFF]/50 font-thin mt-2'>Stay up to date with the latest news, announcement, and articles.</p>
          </div>

          {/* Search Bar Section */}

          <div className='sm:p-10'>
            <div className='flex md:mt-0 mt-10 justify-center items-center '>
              <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' style={{ background: "#12214e" }} className='shadow-lg text-white border border-white/[.3]  md:pl-6 pl-2 pr-3 md:w-full sm:w-[250px] w-[180px]  py-2 rounded-md outline-none placeholder:text-[#757575]' />

              <button onClick={handleSubmit} style={{ background: "#00AEEF" }} className='btn text-white font-medium px-4 py-2 rounded-lg duration-500 ml-4'>
                Submit
              </button>

            </div>
          </div>

        </div>
        <ToastContainer />

        <hr />


        <div className='flex md:flex-row flex-col md:p-8 items-center justify-between'>

          <div className='flex-1 p-6'>
            <img src={Logo} alt="" />

            <p className='mt-4 text-[#FFFFFF]/70'>Connecting the world of chemical <br /> commerce together
              to make its members more successful.</p>

            <h3 className='mt-8 text-1/2xl'>
              <Link to='/about' className='font-semibold text-xl'>
                About <br /><span className='text-3xl' style={gradientStyle}>Green Environment</span>
              </Link>
            </h3>
          </div>


          {/* Links here */}
          <div className='flex-1 p-6'>
            <div className="grid md:grid-cols-2 gap-8 grid-cols-1">

              <div>
                <h1 className="font-semibold text-xl">Resources</h1>

                <ul className='mt-4'>

                  <li className='text-[#FFFFFF]/70 mb-2'>
                    <Link>Terms & Conditions</Link>
                  </li>
                  <li className='text-[#FFFFFF]/70 mb-2'>
                    <Link>Privacy Policy</Link>
                  </li>

                  <li className='text-[#FFFFFF]/70 mb-2'>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className='text-[#FFFFFF]/70 mb-2'>
                    <Link>Software License Agreement</Link>
                  </li>

                  <li className='text-[#FFFFFF]/70 mb-2'>
                    <Link>Blog</Link>
                  </li>
                </ul>

              </div>


              <div>
                <h1 className="font-semibold text-xl">Contact</h1>

                <ul className='mt-4'>

                  <li className='text-[#FFFFFF]/70 mb-2'>
                    <Link>support@Chemcart.io</Link>
                  </li>
                  <li className='text-[#FFFFFF]/70 mb-2'>
                    <Link>(512) 686-3450</Link>
                  </li>

                  <li className='text-[#FFFFFF]/70 mb-2'>
                    <Link>5501 Balcones Drive #162A Austin,
                      TX 78731</Link>
                  </li>
                </ul>

              </div>

              <div>

              </div>

            </div>
          </div>


        </div>

        <hr />

        <div className='w-full p-8 flex md:flex-row flex-col gap-6 items-center justify-between'>
          <span className='text-center text-[#FFFFFF]/60'>©2023 Green Environment. All right reserved.</span>

          <p className='text-center text-[#FFFFFF]/60'>Marketplace facilitator notice</p>


          <p className='text-center text-[#FFFFFF]/60'>Electronic communications agreement</p>


          {/* icons */}
          <div className='flex gap-3'>
            <FontAwesomeIcon className='h-4 w-4 cursor-pointer' icon={faLinkedin} />
            <FontAwesomeIcon className='h-4 w-4 cursor-pointer' icon={faInstagram} />
            <FontAwesomeIcon className='h-4 w-4 cursor-pointer' icon={faTwitter} />
          </div>


        </div>

      </footer>
    </div>
  );
};

export default Footer;
