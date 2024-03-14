import React, { useState, useRef } from 'react';
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

const SellingInquiry = () => {

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

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {

  }

  return (
    <div className="w-full md:p-6 p-2 overflow-x-hidden">
      <div className="flex flex-col p-2">
        <h1 className="md:text-3xl text-xl font-semibold">Selling Enquiry</h1>

        <div className="flex gap-7 mt-7">
          <span
            className={`cursor-pointer pb-2 ${activeLink === 'all' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('all')}
          >
            All
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>3</span>
          </span>
          <span
            className={`cursor-pointer pb-2 ${activeLink === 'open' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('open')}
          >
            Open
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>3</span>
          </span>
          <span
            className={`cursor-pointer pb-2 ${activeLink === 'close' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('close')}
          >
            Close
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>3</span>
          </span>
          <span
            className={`cursor-pointer pb-2 ${activeLink === 'pending' && 'border-b-2 border-black'}`}
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
          {data.map((item, index) => (
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
                <img src={print} className='h-[17px] text-gray-600 border-r-2 border-slate-500 pe-4'  />
                <img src={share} className='h-[15px] text-gray-600 border-r-2 border-slate-500 pe-4' />
                <img src={message} className='h-[17px] text-gray-600' />
                <p>2023-02-02</p>
              </div>
            </div>
          ))
          }
        </div>

        {isOpen && (
          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white py-3 ps-5">
                    <div class="sm:flex sm:items-start">
                      <h3 className='font-medium text-xl'>hyyyyy</h3>
                    </div>
                  </div>
                  <div class="bg-white flex justify-end mx-8 py-3">
                    <button onClick={closeModal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Decline</button>
                    <button onClick={closeModal} type="button" class="inline-flex w-full justify-center rounded-md bg-[#0A122A] px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto ml-4">Accept</button>
                    <button onClick={closeModal} type="button" class="inline-flex w-full justify-center rounded-md bg-[#0A122A] px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto ml-4">Negotiate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default SellingInquiry;
