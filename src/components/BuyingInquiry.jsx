import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus, faSearch, faCloudArrowDown, faPrint, faShareNodes, faComment, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Image from '../images/chemical.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// photos 
import message from "../images/message.png"
import print from "../images/print.png"
import share from "../images/share.png"
import download from "../images/download.png"

const BuyingInquiry = () => {

  const data = [
    {
      image: Image,
      title: "CMH- ACID",
      description: "CAS: 181289-15-6",
      pharma: "Naptune Pharma",
      quantity: "Inquiry Quantity: 15kg",
    },

    {
      image: Image,
      title: "CMH- ACID",
      description: "CAS: 181289-15-6",
      pharma: "Naptune Pharma",
      quantity: "Inquiry Quantity: 15kg",
    },

    {
      image: Image,
      title: "CMH- ACID",
      description: "CAS: 181289-15-6",
      pharma: "Naptune Pharma",
      quantity: "Inquiry Quantity: 15kg",
    },

    {
      image: Image,
      title: "CMH- ACID",
      description: "CAS: 181289-15-6",
      pharma: "Naptune Pharma",
      quantity: "Inquiry Quantity: 15kg",
    },

    {
      image: Image,
      title: "CMH- ACID",
      description: "CAS: 181289-15-6",
      pharma: "Naptune Pharma",
      quantity: "Inquiry Quantity: 15kg",
    },

    {
      image: Image,
      title: "CMH- ACID",
      description: "CAS: 181289-15-6",
      pharma: "Naptune Pharma",
      quantity: "Inquiry Quantity: 15kg",
    },
  ];

  const [activeLink, setActiveLink] = useState('all');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef(null); // Create a ref for DatePicker

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="w-full md:p-6 p-2 overflow-x-hidden">
      <div className="flex flex-col p-2">
        <h1 className="md:text-3xl text-xl font-semibold">Buying Enquiry</h1>

        <div className="flex gap-7 mt-7">
          <span
            className={`cursor-pointer  pb-2 ${activeLink === 'all' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('all')}
          >
            All
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>3</span>
          </span>
          <span
            className={`cursor-pointer  pb-2 ${activeLink === 'approved' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('approved')}
          >
            Approved
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>3</span>
          </span>
          <span
            className={`cursor-pointer  pb-2 ${activeLink === 'rejected' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('rejected')}
          >
            Rejected
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>3</span>
          </span>
          <span
            className={`cursor-pointer  pb-2 ${activeLink === 'pending' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('pending')}
          >
            Pending
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>3</span>
          </span>
          <div className='ms-auto'>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              ref={datePickerRef} // Assign the ref to DatePicker
              popperPlacement="top-end"
              onClickOutside={() => datePickerRef.current.onInputClick()}
            />
            <FontAwesomeIcon icon={faCalendarDays} onClick={() => datePickerRef.current.setFocus()} />
          </div>
        </div>
        <hr className="my-4 border-t-2 border-gray-200" />

        <div className="flex gap-3 items-center relative">
          <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-4" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 w-[100%]  text-gray-800 pl-10 py-2 outline-none rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">



          {
            data.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-xl" >

                <div className='flex sm:mb-0 mb-2'>
                  <div className="w-50 h-40 mr-4">
                    <img src={item.image} alt="" className="h-[150px]" />
                  </div>
                  <div>
                    <h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
                    <p className='text-gray-500 mb-1'>{item.description}</p>
                    <p className='text-gray-500 mb-1'>{item.pharma}</p>
                    <p className='text-gray-500'>{item.quantity}</p>
                    <button className="bg-darkBlue rounded-lg text-white text-sm px-3 py-1 mt-2">Pending</button>
                  </div>
                </div>

                <hr />
                <div className='flex mt-3 items-center justify-evenly '>
                  <img src={download} className='h-[17px] text-gray-600 border-r-2 border-slate-500 pe-4' />
                  <img src={print} className='h-[17px] text-gray-600 border-r-2 border-slate-500 pe-4' />
                  <img src={share} className='h-[15px] text-gray-600 border-r-2 border-slate-500 pe-4' />
                  <img src={message} className='h-[17px] text-gray-600' />
                  <p>2023-02-02</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default BuyingInquiry;
