import React, { useState } from 'react'
import Image from "../images/Rectangle.png"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import countries from "./CountryStateCity.json"
import headerImage from "../images/signup.png"

// fontawesome icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const CreateAccount = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const [formData, setFormData] = useState({
    companyName: '',
    gstNo: '',
    modeOfBusiness: '',
    contactPersonName: '',
    landlineNumber: '',
    mobileNumber: '',
    email: '',
    address: '',
    country: '', // Default value
    state: '', // Default value
    city: '',
    pinCode: '',
    password: '',
    confirmPassword: ''
  });

  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormData(prevState => ({
          ...prevState,
          modeOfBusiness: [...prevState.modeOfBusiness, value]
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          modeOfBusiness: prevState.modeOfBusiness.filter(mode => mode !== value)
        }));
      }
    } else if (name === 'country') {
      const selectedCountry = countries.find(country => country.name === value);
      setStates(selectedCountry.states);
      setFormData(prevState => ({
        ...prevState,
        [name]: selectedCountry.name,
        state: '',
        city: ''
      }));
    } else if (name === 'state') {
      const selectedState = states.find(state => state.name === value);
      setCities(selectedState.cities)
      setFormData(prevState => ({
        ...prevState,
        [name]: selectedState.name,
        city: ''
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const [check, setCheck] = useState("")
  console.log(check);

  const handleCheck = (e) => {
    setCheck(e.target.value)
  }



  const handleRegister = () => {
    console.log(formData);

    const { companyName, gstNo, modeOfBusiness, contactPersonName, landlineNumber, mobileNumber, email, address, country, state, city, pinCode, password, confirmPassword } = formData;

    const gstCheck = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!companyName.trim() && !gstNo.trim() && !modeOfBusiness.trim() && !contactPersonName.trim() && !landlineNumber.trim() && !mobileNumber.trim() && !email.trim() && !address.trim() && !country.trim() && !state.trim() && !city.trim() && !pinCode.trim() && !password.trim() && !confirmPassword.trim()) {
      toast.error('Please Fill All Fields!', {
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

    if (!gstNo.slice(0, 15).trim()) {
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

    if (!contactPersonName.trim()) {
      toast.error('Please Enter Contact Person Name!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!mobileNumber) {
      toast.error('Please Enter Mobile Number!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (mobileNumber.length < 10) {
      toast.error('Please Enter Valid Mobile Number!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (landlineNumber && landlineNumber.length < 10) {
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
      toast.error('Invalid Email Format!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (modeOfBusiness.length < 1 || !modeOfBusiness) {
      toast.error('Please Select Mode Of Business!', {
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

    if (!pinCode) {
      toast.error('Please Enter Pincode!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (pinCode.length < 6) {
      toast.error('Please Enter Valid Pincode!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!password.trim()) {
      toast.error('Please Enter Password!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!confirmPassword.trim()) {
      toast.error('Please Confirm Your Password!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }


    if (password != confirmPassword) {
      toast.error('Password And Confirm Paswword Not Match!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!check.trim()) {
      toast.error('Please Check T & C and Privacy Policy!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    setTimeout(() => {
      navigate("/login")
      toast.success('Your Registration Successfully Done!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    }, 2000);


  }

  return (
    <div className='my-container'>
      <div className='lg:px-40 md:px-10 md:py-10 bg-gray-100'>

        <div className=' flex md:flex-row flex-col bg-white rounded-2xl'>
          {/* Form */}

          <div className='py-10 sm:ps-10 md:pe-5 px-5 md:w-[70%] flex flex-col items-center justify-center rounded-2xl'>
            <div className='flex flex-col '>
              <h1 className='text-darkBlue sm:text-4xl text-2xl font-semibold text-center'>Create New Account</h1>

              <div className='flex md:flex-row flex-col w-full md:gap-4 gap-2 mt-6'>
                <input name='companyName' onChange={handleChange} type="text" placeholder='Company Name' className='w-full mt-8 outline-none  border border-[#0A122A]/[.5] rounded-md py-3 px-2' />
              </div>


              <input name='gstNo' value={formData.gstNo.slice(0, 15).trim()} onChange={handleChange} type="text" placeholder='GST No. ' className='mt-8 outline-none py-3 px-2 border border-[#0A122A]/[.5] rounded-md' />
              <input name='contactPersonName' onChange={handleChange} type="text" placeholder='Contact Person Name' className='w-full outline-none mt-8 border border-[#0A122A]/[.5] rounded-md py-3 px-2' />


              <div className='flex w-full gap-4'>
                <input
                  type="tel"
                  name='mobileNumber'
                  onChange={handleChange}
                  onInput={(e) => (e.target.value) = e.target.value.replace(/[^0-9]/g, '')}
                  maxLength={10}
                  placeholder='Enter Mobile Number'
                  className='w-full mt-8 py-3 px-2 outline-none border border-[#0A122A]/[.5] rounded-md'
                />
                <input
                  type="tel"
                  name='landlineNumber'
                  onChange={handleChange}
                  onInput={(e) => (e.target.value) = e.target.value.replace(/[^0-9]/g, '')}
                  maxLength={10}
                  placeholder='Enter Landline Number (Optional)'
                  className='w-full mt-8 py-3 px-2 outline-none border border-[#0A122A]/[.5] rounded-md'
                />
              </div>
              <input type="email" name='email' onChange={handleChange} placeholder='Email ' className='mt-8 py-3 outline-none px-2 border border-[#0A122A]/[.5] rounded-md' />
              <div className='w-25 mt-8 mb-2'><h5 className='font-semibold'>Mode Of Business</h5></div>
              <div className='flex '>
                <div className='w-full'>
                  <input type="checkbox" name='modeOfBusiness' value="manufacture" onChange={handleChange} />
                  <label htmlFor="" className='ms-2'>Manufacture</label>
                </div>
                <div className='w-full'>
                  <input type="checkbox" name='modeOfBusiness' value="trader" onChange={handleChange} />
                  <label htmlFor="" className='ms-2'>Trader</label>
                </div>
              </div>

              <textarea name='address' onChange={handleChange} placeholder='Address' className='mt-8 outline-none py-3 px-2 border border-[#0A122A]/[.5] rounded-md'>
              </textarea>

              <ToastContainer />

              <div className='flex w-full gap-4'>

                <div className='mt-8 flex-1'>
                  <select name='country' onChange={handleChange} id="country" className='block outline-none bg-white w-full p-2 mt-2  border border-[#0A122A]/[.5] rounded-md'>
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country.name}>{country.name}</option>
                    ))}
                  </select>
                </div>

                <div className='mt-8 flex-1'>
                  <select name='state' onChange={handleChange} id="country" className='block outline-none bg-white w-full p-2 mt-2  border border-[#0A122A]/[.5] rounded-md' value={formData.state}>
                    <option value="">Select State</option>
                    {states && states.map((state) => (
                      <option value={state.name}>{state.name}</option>
                    ))}
                  </select>
                </div>

              </div>


              <div className='flex md:flex-row flex-col gap-4 w-full'>
                <div className='mt-8 flex-1'>
                  <select name='city' onChange={handleChange} value={formData.city} id="country" className='block bg-white w-full p-2 h-full  border border-[#0A122A]/[.5] rounded-md'>
                    <option value="">Select City</option>
                    {cities && cities.map((city) => (
                      <option value={city.name}>{city.name}</option>
                    ))}
                  </select>
                </div>

                <div className='flex-1 '>
                  <input name='pinCode' onInput={(e) => (e.target.value) = e.target.value.replace(/[^0-9]/g, '')}
                    maxLength={6} onChange={handleChange} type="text" placeholder='Pin Code ' className='mt-8 w-full outline-none py-3 px-2 border border-[#0A122A]/[.5] rounded-md' />
                </div>
              </div>

              <div className='relative mt-8'>
                <input
                  name='password'
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  className='outline-none py-3 px-2 border border-[#0A122A]/[.5] rounded-md w-full'
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className='absolute top-[30%] right-[2%] cursor-pointer'
                  onClick={togglePasswordVisibility}
                />
              </div>

              <div className='relative mt-8'>
                <input
                  name='confirmPassword'
                  onChange={handleChange}
                  type={showPassword1 ? "text" : "password"}
                  placeholder='Confirm Password '
                  className='outline-none py-3 px-2 border border-[#0A122A]/[.5] rounded-md w-full'
                />
                <FontAwesomeIcon
                  icon={showPassword1 ? faEyeSlash : faEye}
                  className='absolute top-[30%] right-[2%] cursor-pointer'
                  onClick={togglePasswordVisibility1}
                />
              </div>

              <div className='flex gap-6 items-start mt-6'>
                <input type="checkbox" className='mt-2' onChange={handleCheck} value="yes" />
                <p className='text-darkBlue font-thin'>By clicking on this, you agree to our <span className='text-[#00AEEF]'>Terms & Conditions</span>, <span className='text-[#00AEEF]'>Terms of use</span>, and <span className='text-[#00AEEF]'>Privacy Policy</span></p>
              </div>

              <div className='flex items-center justify-center'>
                <button className='bg-darkBlue mt-8 text-white px-4 py-3 rounded-md font-medium' onClick={handleRegister}>Register</button>
              </div>
            </div>
          </div>


          {/* Image */}
          <div className='md:w-[30%] h-[1150px]  md:flex hidden flex-col justify-center items-center login-image rounded-2xl relative'>
            <div className=' flex flex-col justify-center items-center'>
              <h2 className='text-white text-[18px] text-center leading-7 font-bold'>Already Have an account?</h2>
              <p className='text-white text-sm mt-4 text-center font-normal leading-6'>Log in to your account to start  your selling or purchasing with company name</p>
              <Link to="/login">
                <button className='bg-darkBlue text-white px-6 py-3 mt-4 border border-[#0A122A]/[.5] rounded-md'>Login</button>
              </Link>
            </div>
            <div className='absolute top-[20px]'>
              <div className='flex justify-center'>
                <img src={headerImage} alt="" className='w-[250px]' />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CreateAccount