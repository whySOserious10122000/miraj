import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faFile, faBookOpen, faSackDollar, faCartShopping, faHome, faCircleArrowLeft, faCircleArrowRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Dashboard from "../components/DashBoard"
import Employees from "../components/Employees"
import MyDocuments from "../components/MyDocuments"
import MyCataLog from "../components/MyCataLog"
import SellingInquiry from "../components/SellingInquiry"
import BuyingInquiry from "../components/BuyingInquiry"
import ChangePassword from './Changepassword';
import Addchemical from './Addchemical';
import profile from "../images/profile.png"
import notification from "../images/notificatoin.png"
import right from "../images/Lock.png"
import talu from "../images/talu.png"
import user from "../images/user.png"
import troli from "../images/troli.png"
import paisa from "../images/paisa.png"
import home from "../images/home.png"
import file from "../images/file.png"
import book from "../images/book.png"
import Myprofile from './Myprofile';

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    const selectedMenu = localStorage.getItem("selectedMenu");
    if (selectedMenu) {
      setSelectedMenu(selectedMenu);
    } else {
      setSelectedMenu(<Dashboard />);
    }
  }, []);

  const handleMenuClick = (component, title) => {
    setSelectedMenu(title);
    localStorage.setItem('selectedMenu', title);
  };

  const Menus = [
    { title: "Dashboard", component: <Dashboard />, icon: home },
    { title: "My Purchase", component: <Employees />, icon: user },
    // { title: "Facility Documents", component: <MyDocuments open={open} />, icon: file },
    // { title: "My Catalog", component: <MyCataLog />, icon: book },
    // { title: "Selling Inquiry", component: <SellingInquiry />, icon: paisa },
    // { title: "Buying Inquiry", component: <BuyingInquiry />, icon: troli },
    // { title: "Profile", component: <Myprofile />, icon: user },
    // { title: "Change Password", component: <ChangePassword />, icon: talu },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  }

  const handleChangePassword = () => {
    setIsOpen(!isOpen);
    setSelectedMenu("Change Password")
  }


  const [isOpen1, setIsOpen1] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
    setIsOpen1(true);
    setModalTitle("Catalog Updated Successfully!")
    setButtonChange("Submit")
  };


  const closeModal = () => {
    setIsOpen1(false);
  };

  return (
    <div className="flex ">
      <div
        className={`md:block hidden ${open ? "w-72" : "w-20"} bg-darkBlue  z-2 p-5  pt-8 relative duration-300 overflow-hidden`}
      >

        {/* <FontAwesomeIcon className='text-white cursor-pointer w-6 h-6' onClick={() => setOpen(!open)}  icon={  open ?  faCircleArrowLeft : faCircleArrowRight}/> */}


        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-semibold text-4xl duration-200 ${!open && "scale-0"
              }`}
          >
            Crops Saver
          </h1>
        </div>
        <ul className="pt-6 h-full">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-7 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
              onClick={() => handleMenuClick(Menu.component, Menu.title)}
            >
              <img src={Menu.icon} alt="" className='h-[20px]' />
              <span className={`${!open && "hidden"} origin-left text-lg text-slate-300 duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}

          {/* <li className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-7 mt-[90%]'>
            <FontAwesomeIcon icon={faRightFromBracket} className='text-slate-300 text-lg' />
            <button onClick={openModal} className='origin-left text-lg text-slate-300 duration-200'>
              Logout
            </button>
          </li> */}
        </ul>

      </div>

      {isOpen1 && (
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md py-4">
                <div class="bg-white py-3">
                  <div class="flex flex-col items-center">
                    <img src={right} alt="" className='h-[80px]' />
                    <h3 className='font-semibold text-2xl mt-4'>Are you sure you want to logout?</h3>
                  </div>
                </div>
                <div class="bg-white mx-8 py-3">
                  <button onClick={closeModal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-3 text-sm font-medium  shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-[100%]">Yes</button>
                  <button onClick={closeModal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-darkBlue px-3 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-[100%]">No</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      <div
        className={`md:hidden block w-20 bg-darkBlue  z-2 p-5  pt-8 relative duration-300`}
      >
        <ul className="pt-6 mt-32">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center  gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
              onClick={() => setSelectedMenu(Menu.component)}
            >
              <FontAwesomeIcon className='h-4 w-4' icon={Menu.icon} />
            </li>
          ))}

          <button className=' mt-6 flex items-center font-medium gap-2 text-white  p-2'>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </ul>
      </div>

      <div className="h-screen overflow-x-hidden w-full flex-1 md:p-4">
        <style>
          {`
            /* Hide the scrollbar */
            /* For WebKit (Chrome, Safari, etc.) */
            ::-webkit-scrollbar {
                display: none;
            }
            /* For Firefox */
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* Internet Explorer 10+ */
        `}
        </style>
        <div className='flex justify-end items-center gap-8'>
          <img src={notification} alt="" className='h-[25px] cursor-pointer' />
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 "
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleMenu}
              >
                <img src={profile} alt="" className='h-[50px] cursor-pointer' />
              </button>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" id="dropdown-menu">
                <div className="py-1" role="none">
                  <a className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0" onClick={handleClose}>Profile</a>
                  <a className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1" onClick={handleChangePassword}>Change Password</a>
                  <a className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-2" onClick={openModal}>Logout</a>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {selectedMenu ? (
          Menus.map((Menu, index) => {
            if (Menu.title === selectedMenu) {
              return Menu.component;
            }
            return null;
          })
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default SideBar;
