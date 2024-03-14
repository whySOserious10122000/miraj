import React, { useState } from 'react';
import { faPencil, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import chem1 from "../images/chemical-main.png"
import right from "../images/right.png"

// toaster 

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addchemical = ({ onhandlechange }) => {

    const [modalTitle, setModalTitle] = useState('');
    const [buttonChange, setButtonChange] = useState('');
    const [isOpen, setIsOpen] = useState(false);



    const closeModal = () => {
        setIsOpen(false);
        onhandlechange();
    };



    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")
    const [grade, setGrade] = useState("")
    const [document, setDocument] = useState("")
    const [origin, setOrigin] = useState("")
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")
    const [capacity, setCapacity] = useState("")
    const [purity, setPurity] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("")
    const [qValue, setQvalue] = useState("")
    const [qNumber, setQnumber] = useState("")

    const openModal = () => {

        if (!category.trim() && !subCategory.trim() && !grade.trim() && !document && !origin.trim() && !min.trim() && !max.trim() && !capacity.trim() && !purity.trim() && !value.trim() && !purity.trim() && !type.trim() && !qValue.trim() && !qNumber.trim()) {
            toast.error('Please Fill All Fields!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }

        if (!category.trim()) {
            toast.error('Please Select Category!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }

        if (!subCategory.trim()) {
            toast.error('Please Select Sub Category!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }

        if (!grade.trim()) {
            toast.error('Please Select Grade!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!document) {
            toast.error('Please Select Document!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!origin) {
            toast.error('Please Select Country Origin!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!min) {
            toast.error('Please Enter Minimum Price!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!max) {
            toast.error('Please Enter Maximum Price!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!capacity) {
            toast.error('Please Enter Production Capacity!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!purity) {
            toast.error('Please Enter Purity!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!qValue) {
            toast.error('Please Enter Quantity Value!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!type) {
            toast.error('Please Enter Quantity Type!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!value) {
            toast.error('Please Enter Price!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }
        if (!qNumber) {
            toast.error('Please Select Quantity!', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 1000,
            });
            return;
        }


        setIsOpen(true);
        setModalTitle("Catalog Updated Successfully!")
        setButtonChange("Submit")
    };

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleSubCategory = (e) => {
        setSubCategory(e.target.value)
    }

    const handleGrade = (e) => {
        setGrade(e.target.value)
    }

    const handleImage = (e) => {
        setDocument(e.target.value)
    }

    const handleOrigin = (e) => {
        setOrigin(e.target.value)
    }

    const handleMin = (e) => {
        setMin(e.target.value)
    }

    const handleMax = (e) => {
        setMax(e.target.value)
    }

    const handleCapacity = (e) => {
        setCapacity(e.target.value)
    }

    const handlePurity = (e) => {
        setPurity(e.target.value)
    }

    const handleValue = (e) => {
        setValue(e.target.value)
    }

    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleQuantityValue = (e) => {
        setQvalue(e.target.value)
    }

    const handleQuantityNumber = (e) => {
        setQnumber(e.target.value)
    }


    return (
        <div className="w-full md:p-6 p-2  overflow-x-hidden">
            <div className="flex flex-col p-2">
                <h1 className="md:text-3xl text-xl font-semibold mb-5">Add New Chemical</h1>

                <div className="flex gap-3 items-center relative">
                    <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-4" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-100 w-full text-gray-800 pl-10 py-2 outline-none rounded-md"
                    />
                </div>

                <div className='mt-10'>
                    <div className='flex bg-white gap-6 border py-4 px-4 rounded-lg shadow-md'>
                        <div className='border h-100% flex items-center rounded-md'>
                            <img src={chem1} alt="" className='w-[500px]' />
                        </div>
                        <div className='w-full'>
                            <h2 className='text-3xl font-semibold w-full pb-3'>Amisulpride</h2>
                            <hr />
                            <div className='py-3'>
                                <ul className='flex justify-between me-3' >
                                    <li className='flex gap-3'>
                                        <p className='text-gray-500'>CAS Number :</p>
                                        <p>71675-85-9</p>
                                    </li>
                                    <li className='flex gap-3'>
                                        <p className='text-gray-500'>Molecular Formula :</p>
                                        <p>C17H27N3O4S</p>
                                    </li>
                                    <li className='flex gap-3'>
                                        <p className='text-gray-500'>Mol Weight :</p>
                                        <p>369.48</p>
                                    </li>
                                </ul>
                            </div>
                            <hr />

                            <div className='mt-3'>
                                <ul className='flex flex-col gap-2' >
                                    <li className='flex gap-3'>
                                        <p className='text-gray-500 w-[200px]'>Synonyms </p>
                                        <p>OCIAN</p>
                                    </li>
                                    <li className='flex gap-3'>
                                        <p className='text-gray-500 w-[245px]'>IUPAC Name </p>
                                        <p>4-amino-N-[(1-ethylpyrrolidin-2-yl)methyl]-5-ethylsulfonyl-2-
                                            methoxybenzamide</p>
                                    </li>
                                    <li className='flex gap-3'>
                                        <p className='text-gray-500 w-[200px]'>Storage </p>
                                        <p>2-8 C</p>
                                    </li>
                                    <li className='flex gap-3'>
                                        <p className='text-gray-500 w-[200px]'>Appearance </p>
                                        <p>Off white solid</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer />

                <div className='mt-10 w-[89%] mx-auto'>
                    <div className='rounded-lg shadow-md bg-white border pt-5 px-3'>
                        <div className='flex justify-between mb-2 px-3'>
                            <h3 className='text-2xl font-medium '>Add Your Details</h3>
                            <button onClick={openModal} className="bg-darkBlue md:flex hidden items-center justify-center px-4 py-2 gap-2 text-white rounded-lg" style={{ fontSize: '14px' }}>
                                Submit
                            </button>
                        </div>
                        <hr />
                        <div className='mt-5 flex flex-col gap-5 '>
                            <div className='grid grid-cols-[1fr,1fr,1fr,2fr] gap-4'>
                                <select onChange={handleCategory} name="" id="" className='w-full bg-transparent border-2 text-slate-500 rounded text-sm py-1 px-3 h-[70%]'>
                                    <option value="1">Category</option>
                                    <option value="1">ABC</option>
                                    <option value="1">XYZ</option>
                                </select>
                                <select onChange={handleSubCategory} name="" id="" className='w-full bg-transparent border-2 text-slate-500 rounded text-sm py-1 px-3 h-[70%]'>
                                    <option value="1">Sub Category</option>
                                    <option value="1">ABC</option>
                                    <option value="1">XYZ</option>
                                </select>
                                <select onChange={handleGrade} name="" id="" className='w-full bg-transparent border-2 text-slate-500 rounded text-sm py-1 px-3 h-[70%]'>
                                    <option value="1">Grade</option>
                                    <option value="1">ABC</option>
                                    <option value="1">XYZ</option>
                                </select>
                                <div className=''>
                                    <input onChange={handleImage} type="file" name="" id="" className='py-1 px-3 bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500' />
                                    <p className='text-xs text-gray-400'>Note: Upload Only PDF File with Size of Max 2 MB</p>
                                </div>
                            </div>
                            <div className='grid grid grid-cols-[1fr,1fr,1fr,1fr,1fr] gap-4'>
                                <input type="text" className='bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500 px-3' onChange={handleMin} placeholder='Minimum Price' />
                                <input type="text" className='bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500 px-3' onChange={handleMax} placeholder='Maximum Price' />
                                <select onChange={handleOrigin} name="" id="" className='w-full bg-transparent border-2 text-slate-500 rounded text-sm py-1 px-3'>
                                    <option value="1">Country Origin</option>
                                    <option value="1">ABC</option>
                                    <option value="1">XYZ</option>
                                </select>
                                <input type="text" className='bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500 px-3' onChange={handleCapacity} placeholder='Production Capacity' />
                                <input type="text" className='bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500 px-3' onChange={handlePurity} placeholder='Purity' />
                            </div>
                            <div></div>
                        </div>
                        <div className='flex justify-between mb-2 px-3 mt-4'>
                            <h3 className='text-2xl font-medium '>Sample Details</h3>
                        </div>
                        <hr />
                        <div className='grid grid grid-cols-[1fr,1fr,1fr,1fr] gap-8 pt-5 pb-8'>
                            <div>
                                <p className='text-sm font-medium mb-1'>One Lot Quantity</p>
                                <div className='flex gap-2'>
                                    <input onChange={handleQuantityValue} type="text" className='bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500 px-3' placeholder='Value' />
                                    <select onChange={handleType} name="" id="" className='w-full bg-transparent border-2 text-slate-500 rounded text-sm py-1 px-3'>
                                        <option value="1">Type</option>
                                        <option value="1">ABC</option>
                                        <option value="1">XYZ</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <p className='text-sm font-medium mb-1 flex items-center'>Price (INR) <input type="checkbox" name="" id="" className='ms-2 me-1' /> <span className='text-slate-400 text-xs'>Check me if free</span></p>
                                <input onChange={handleValue} type="text" className='bg-transparent border-2 w-full rounded text-sm placeholder:text-slate-500 px-3 py-1' placeholder='Value' />
                            </div>
                            <div>
                                <p className='text-sm font-medium mb-1'>Max Lot Quantity</p>
                                <select onChange={handleQuantityNumber} name="" id="" className='w-full bg-transparent border-2 text-slate-500 rounded text-sm py-1 px-3'>
                                    <option value="">Select Quantity</option>
                                    <option value="1">1</option>
                                    <option value="2">1</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md py-4">
                                    <div class="bg-white py-3">
                                        <div class="flex flex-col items-center">
                                            <img src={right} alt="" className='h-[80px]' />
                                            <h3 className='font-semibold text-2xl mt-4'>{modalTitle}</h3>
                                            <p className='text-sm'>Your catalog has been updated successfully</p>
                                        </div>
                                    </div>
                                    <div class="bg-white mx-8 py-3">
                                        <button onClick={closeModal} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-darkBlue px-3 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-[100%]">Back to Catalog</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Addchemical