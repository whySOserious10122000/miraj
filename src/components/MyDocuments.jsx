import React, { useState } from 'react';
import { faPencil, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// toaster 

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyDocuments = () => {

  const data = [
    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23 - 2024-04-03',
      status: 'Approved',
      documentLink: 'Document.pdf',
    },
    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23 - 2024-04-03',
      status: 'Approved',
      documentLink: 'Document.pdf',
    },
    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23 - 2024-04-03',
      status: 'Approved',
      documentLink: 'Document.pdf',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23 - 2024-04-03',
      status: 'Approved',
      documentLink: 'Document.pdf',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23 - 2024-04-03',
      status: 'Approved',
      documentLink: 'Document.pdf',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23 - 2024-04-03',
      status: 'Approved',
      documentLink: 'Document.pdf',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23 - 2024-04-03',
      status: 'Approved',
      documentLink: 'Document.pdf',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23 - 2024-04-03',
      status: 'Approved',
      documentLink: 'Document.pdf',
    },

    {
      certificateName: 'Driving License',
      certificateNo: '123456789',
      date: '2024-02-23 - 2024-04-03',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
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
    setModalTitle("Upload Document")
    setButtonChange("Submit")
  };

  const handleEdit = () => {
    setIsOpen(true);
    setModalTitle("Edit Document")
    setButtonChange("Save Changes")
  };

  const closeModal = () => {
    setIsOpen(false);
  };



  const [certificate, setCertificate] = useState('');
  const [certificateNo, setCertificateNo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [file, setFile] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleCertificateChange = (e) => {
    setCertificate(e.target.value);
  };

  const handleCertificateNoChange = (e) => {
    setCertificateNo(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsVerified(e.target.checked);
  };

  const handleDeactivate = () => {

    if (!certificate.trim() && !certificateNo.trim() && !startDate && !endDate && !file) {
      toast.error('Please Fill All Fields!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!certificate.trim()) {
      toast.error('Please Select Certificate!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!certificateNo.trim()) {
      toast.error('Please Enter Certificate Number!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!startDate) {
      toast.error('Please Select Start Date!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!endDate) {
      toast.error('Please Select End Date!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (!file) {
      toast.error('Please Select Document!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      return;
    }

    if (isVerified) {
      closeModal();
      toast.success('Please Check Our Privacy Policy!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });

      setCertificate('')
      setCertificateNo('')
      setStartDate('')
      setEndDate('')
      setFile('')
      setIsVerified(false)


    } else {
      toast.error('Document Added Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
    }



  };

  return (
    <div className="w-full md:p-6 p-2  overflow-x-hidden">
      <div className="flex flex-col p-2">
        <h1 className="md:text-3xl text-xl font-semibold">Facility Documents Management</h1>

        <div className="flex gap-7 mt-7">
          <span
            className={`cursor-pointer pb-2 ${activeLink === 'all' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('all')}
          >
            All
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>50</span>
          </span>
          <span
            className={`cursor-pointer pb-2 ${activeLink === 'approved' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('approved')}
          >
            Approved
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>14</span>
          </span>
          <span
            className={`cursor-pointer pb-2 ${activeLink === 'rejected' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('rejected')}
          >
            Rejected
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>3</span>
          </span>
          <span
            className={`cursor-pointer pb-2 ${activeLink === 'pending' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('pending')}
          >
            Pending
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>30</span>
          </span>
          <span
            className={`cursor-pointer pb-2 ${activeLink === 'pending' && 'border-b-2 border-black'}`}
            onClick={() => handleLinkClick('pending')}
          >
            Expired
            <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>3</span>
          </span>
        </div>


        <ToastContainer />

        {/*------------------------- modal  --------------------------------*/}

        {isOpen && (
          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white py-3 ps-5">
                    <div class="sm:flex sm:items-start">
                      <h3 className='font-medium text-xl'>{modalTitle}</h3>
                    </div>
                  </div>
                  <div class="bg-gray-100 px-4 py-5 sm:px-6">
                    <div>
                      <div className='flex gap-4 mb-5'>
                        <select
                          value={certificate}
                          onChange={handleCertificateChange}
                          className='w-full bg-transparent border-2 text-slate-500 rounded text-sm py-1 px-3'
                        >
                          <option value="">Select Certificate</option>
                          <option value="ABC">ABC</option>
                          <option value="XYZ">XYZ</option>
                        </select>
                        <input
                          type="text"
                          value={certificateNo}
                          onChange={handleCertificateNoChange}
                          className='bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500 px-3'
                          placeholder='Certificate No.'
                        />
                      </div>
                      <div className='flex gap-4 mb-5'>
                        <input
                          type="date"
                          value={startDate}
                          onChange={handleStartDateChange}
                          className='py-1 px-3 bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500'
                        />
                        <input
                          type="date"
                          value={endDate}
                          onChange={handleEndDateChange}
                          className='px-3 bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500'
                        />
                      </div>
                      <div className='mb-5'>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className='py-1 px-3 bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500'
                        />
                        <p className='text-xs text-gray-400'>Note: Upload Only PDF File with Size of Max 2 MB</p>
                      </div>

                      <div className='flex items-start gap-3 '>
                        <input
                          type="checkbox"
                          checked={isVerified}
                          onChange={handleCheckboxChange}
                          className='mt-1'
                        />
                        <p className='text-xs'>I Verify that uploaded document is real if it was fake then strict action taken on me by privacy policy.</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white flex justify-end mx-8 py-3">
                    <button onClick={closeModal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    <button onClick={handleDeactivate} type="button" class="inline-flex w-full justify-center rounded-md bg-[#0A122A] px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto ml-4">{buttonChange}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}




        <hr className="my-4 border-t-2 border-gray-200" />

        <div className="flex gap-3 items-center relative">
          <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-4" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 md:w-[82%] w-[80%] text-gray-800 pl-10 py-2 outline-none rounded-md"
          />
          <button onClick={openModal} className="bg-darkBlue md:flex hidden items-center justify-center w-[18%] py-2 gap-2 text-white rounded-lg" style={{ fontSize: '14px' }}>
            <FontAwesomeIcon icon={faPlus} /> Add New Document
          </button>

          <button className="md:hidden bg-darkBlue flex items-center justify-center px-4 py-2 gap-2 text-white rounded-lg" style={{ fontSize: '14px' }}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto max-h-screen">
          <table style={{ border: "none" }} className="table-auto w-full border-0 mt-6">
            <tbody>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className={`flex py-2 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>

                    <td className="px-2 py-2 flex flex-col sm:justify-center justify-start font-semibold">
                      {index + 1}
                    </td>
                    <td className="ps-6 pe-12 py-2 flex flex-col">
                      <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Certificate Name</h2>
                      <p className='font-semibold text-[18px] sm:w-auto w-[150px]'>{item.certificateName}</p>
                    </td>
                    <td className=" pe-12 py-2 flex flex-col">
                      <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Certificate No.</h2>
                      <p className='font-semibold text-[18px] sm:w-auto w-[120px]'>{item.certificateNo}</p>
                    </td>
                    <td className="pe-20 py-2 flex flex-col">
                      <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Issue Date - Expiry Data</h2>
                      <p className='font-semibold text-[18px] sm:w-auto w-[100px]'>{item.date}</p>
                    </td>
                    <td className=" pe-12 py-2 flex flex-col">
                      <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Status</h2>
                      <p className='font-semibold text-[14px] bg-[#E1FCEF] text-[#14804A] px-1 py-1'>{item.status}</p>
                    </td>
                    <td className="pe-12 py-2 flex flex-col">
                      <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Link</h2>
                      <a href={item.documentLink} className='underline'>{item.documentLink}</a>
                    </td>
                    <td className="cursor-pointer px-4 py-2 flex sm:justify-center justify-start sm:items-center items-start font-semibold gap-3" onClick={handleEdit}>Edit <FontAwesomeIcon icon={faPencil} /> </td>
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

export default MyDocuments;
