import React, { useState } from 'react';
import { faPencil, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chem1 from "../images/chemical-1.jpg"
import Addchemical from './Addchemical';

const MyCataLog = () => {

  const [live, setLive] = useState("")

  const handleNull = () => {
    setLive("")
  }

  const handleButtonClick = (e) => {
    setLive("yes");
  };

  const data = [
    {
      certificateName: 'Driving License',
      certificateNo: '(C17H27N3O4S)',
      cas: '17675-85-9',
      weight: '106.8',
      Appearance: 'Off White Solid',
      category: 'API',
      storage: '2-8 C',
      sub_cat: 'Intermediate Chemical',
      Synonyms: 'Synonyms',
      grade: '200 Kg',
      country: 'India',
      price: '200 - 300',
      capacity: '200Kg',
      purity: '99%',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    },
    {
      certificateName: 'Driving License',
      certificateNo: '(C17H27N3O4S)',
      cas: '17675-85-9',
      weight: '106.8',
      Appearance: 'Off White Solid',
      category: 'API',
      storage: '2-8 C',
      sub_cat: 'Intermediate Chemical',
      Synonyms: 'Synonyms',
      grade: '200 Kg',
      country: 'India',
      price: '200 - 300',
      capacity: '200Kg',
      purity: '99%',
      date: '2024-02-23',
      status: 'Approved',
      documentLink: 'https://example.com/document1',
    }
  ];

  const [activeLink, setActiveLink] = useState('all');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      {live === "yes" ? (
        <Addchemical onhandlechange={handleNull}/>
      ) : (
        <div className="w-full md:p-6 p-2  overflow-x-hidden">
          <div className="flex flex-col p-2">
            <h1 className="md:text-3xl text-xl font-semibold">Catalog Management</h1>

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
                Product Name
                <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>14</span>
              </span>
              <span
                className={`cursor-pointer pb-2 ${activeLink === 'rejected' && 'border-b-2 border-black'}`}
                onClick={() => handleLinkClick('rejected')}
              >
                API
                <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>3</span>
              </span>
              <span
                className={`cursor-pointer pb-2 ${activeLink === 'pending' && 'border-b-2 border-black'}`}
                onClick={() => handleLinkClick('pending')}
              >
                CAS
                <span className=' px-1 bg-slate-200 rounded-full text-xs ms-1'>33</span>
              </span>
            </div>

            <hr className="my-4 border-t-2 border-gray-200" />

            <div className="flex gap-3 items-center relative">
              <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 md:w-[82%] w-[80%] text-gray-800 pl-10 py-2 outline-none rounded-md"
              />
              <button onClick={handleButtonClick} className="bg-darkBlue md:flex hidden items-center justify-center w-[18%] py-2 gap-2 text-white rounded-lg" style={{ fontSize: '14px' }}>
                <FontAwesomeIcon icon={faPlus} /> Add Chemical
              </button>

              <button className="md:hidden bg-darkBlue flex items-center justify-center px-4 py-2 gap-2 text-white rounded-lg" style={{ fontSize: '14px' }}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table style={{ border: "none" }} className="table-auto w-full border-0 mt-6">
                <tbody>
                  {data.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr className={`flex py-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>

                        <td className="px-2 py-2 flex flex-col sm:justify-center justify-start font-semibold">
                          {index + 1}
                        </td>
                        <td className="ps-2 pe-6 py-2 flex flex-col justify-center w-[250px]">
                          <img src={chem1} alt="" />
                        </td>
                        <td className=" pe-6 py-2 flex flex-col justify-center gap-3">
                          <div>
                            <h2 className="font-semibold">Amisulpride</h2>
                            <p className='text-[#0A122A]/[.6] text-sm font-medium tracking-[2%] sm:w-[150px] w-[120px]'>{item.certificateNo}</p>
                          </div>
                          <div>
                            <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">CAS No.</h2>
                            <p className='text-[15px] font-semibold sm:w-[150px] w-[120px]'>{item.cas}</p>
                          </div>
                        </td>
                        <td className="pe-6 py-2 flex flex-col justify-center gap-3">
                          <div>
                            <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Molecular Weight</h2>
                            <p className='text-[15px] font-semibold sm:w-[150px] w-[120px]'>{item.weight}</p>
                          </div>
                          <div>
                            <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Appearance</h2>
                            <p className='text-[15px] font-semibold sm:w-[150px] w-[120px]'>{item.Appearance}</p>
                          </div>
                        </td>
                        <td className="py-2 flex flex-col justify-center gap-3">
                          <div>
                            <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Category</h2>
                            <p className='text-[15px] font-semibold sm:w-[120px] w-[120px]'>{item.category}</p>
                          </div>
                          <div>
                            <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Storage</h2>
                            <p className='text-[15px] font-semibold sm:w-[150px] w-[120px]'>{item.storage}</p>
                          </div>
                        </td>
                        <td className=" py-2 flex flex-col justify-center gap-3">
                          <div>
                            <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Grade</h2>
                            <p className='text-[15px] font-semibold sm:w-[150px] w-[120px]'>{item.grade}</p>
                          </div>
                          <div>
                            <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Country Origin</h2>
                            <p className='text-[15px] font-semibold sm:w-[150px] w-[120px]'>{item.country}</p>
                          </div>
                        </td>
                        <td className="pe-6 py-2 flex flex-col justify-center gap-3">
                          <div>
                            <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Price</h2>
                            <p className='text-[15px] font-semibold sm:w-[150px] w-[120px]'>{item.price}</p>
                          </div>
                          <div>
                            <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Production Capacity</h2>
                            <p className='text-[15px] font-semibold sm:w-[170px] w-[120px]'>{item.capacity}</p>
                          </div>
                        </td>
                        <td className=" py-2 flex flex-col gap-3">
                          <div>
                            <h2 className="text-[#0A122A]/[.6] text-sm font-medium tracking-[2%]">Purity</h2>
                            <p className='text-[15px] font-semibold sm:w-[100px] w-[120px]'>{item.purity}</p>
                          </div>
                          <div className='flex items-center text-blue-500 h-full'>
                            <h2 className="font-semibold underline">COA</h2>
                          </div>
                        </td>
                        <td className="px-4 py-2 flex sm:justify-center justify-start sm:items-center items-start font-semibold gap-3">Edit <FontAwesomeIcon icon={faPencil} /> </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MyCataLog