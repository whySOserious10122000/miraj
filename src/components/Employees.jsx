import React, { useEffect, useState } from 'react';
import { faPlus, faSearch, faPencil, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Employees = () => {
  const data = [
    {
      employeeWorker: 'Saathi Rathod',
      email: '123@gmail.com',
      mobile: '+919879879876',
      password: "*******",
      status: 'Approved',
    },

  ];

  const [activeLink, setActiveLink] = useState('all');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [modalTitle, setModalTitle] = useState('');
  const [buttonChange, setButtonChange] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setModalTitle("Add New Employee")
    setButtonChange("Submit")
  };

  const handleEdit = () => {
    setIsOpen(true);
    setModalTitle("Edit Employee")
    setButtonChange("Save Changes")
  };

  const closeModal = () => {
    setIsOpen(false);
  };



  const [employeeName, setEmployeeName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleDeactivate = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!employeeName.trim() && !designation.trim() && !email.trim() && !mobileNo && !password.trim()) {
      toast.error('Please Fill All Fields!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }
    if (!employeeName.trim()) {
      toast.error('Please Enter Employee Name!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }
    if (!designation.trim()) {
      toast.error('Please Enter Designation!', {
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
      toast.error('Please Enter Valid Email Address!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }
    if (!mobileNo) {
      toast.error('Please Enter Mobile Nubmer!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }
    if (mobileNo < 10) {
      toast.error('Please Enter Valid Mobile Nubmer!', {
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


    closeModal();
    toast.success('Employee Added Successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000,
    });

    setEmployeeName('')
    setDesignation('')
    setEmail('')
    setMobileNo('')
    setPassword('')

  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const [daata, setD] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("productData"));
    if (data) {
      setD(data);
    }
  }, []);

  return (
    <div className="w-full md:p-6 p-2 overflow-x-hidden">
      <div className="flex flex-col p-2">
        <h1 className="md:text-3xl text-xl font-semibold ">Purchase History</h1>

        <hr className="my-4 border-t-2 border-gray-200" />

        <div className="flex gap-3 items-center relative">
          <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-4" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 w-full text-gray-800 pl-10 py-2 outline-none rounded-md"
          />

          <button className="md:hidden bg-darkBlue flex items-center justify-center px-4 py-2 gap-2 text-white rounded-lg" style={{ fontSize: '14px' }}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <ToastContainer />

        {/* Table */}
        <div className="overflow-x-auto max-h-screen">
          <table style={{ border: "none" }} className="table-auto w-full border-0 mt-6">
            <tbody>
              {daata && daata.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className={`flex py-2 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>

                    <td className=" px-4 py-2 flex flex-col sm:justify-center justify-start  font-semibold">
                      {index + 1}
                    </td>
                    <td className=" pe-20 py-2 flex flex-col w-[30%]">
                      <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Product Name</h2>
                      <p className='font-semibold text-[18px]'>{item.productName}</p>
                    </td>
                    <td className="pe-20 py-2 flex flex-col">
                      <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Price</h2>
                      <p className='font-semibold text-[18px]'>{item.priceRange}</p>
                    </td>
                    <td className="pe-20 py-2 flex flex-col">
                      <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Date</h2>
                      <p className='font-semibold text-[18px]'>{item.date.slice(0, 10)}</p>
                    </td>
                    <td className="pe-20 py-2 flex flex-col">
                      <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Status</h2>
                      <p className='font-semibold text-[18px]'>{item.status}</p>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
