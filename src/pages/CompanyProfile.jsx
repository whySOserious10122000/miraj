import React from 'react';
import companyProfile from "../images/company-profile.png";
import back from "../images/Back.png";
import companyLogo from "../images/company-logo.png";
import location from "../images/location.png";
import telephone from "../images/telephone.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import earth from "../images/earth.png";
import insta from "../images/insta.png";
import face from "../images/face.png";
import x from "../images/x.png";
import link from "../images/link.png";
import grayRect from "../images/gray-rect.png";
import companyBackground from "../images/companyList-background.png";
import companies from "../images/companies.png";
import Buycard from '../components/Buycard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const CompanyProfile = () => {

    const array = [
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
    ]

    const array1 = [
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
        { name: "yuvraj" },
    ]

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/product-detail")
    }

    return (
        <>
            <section>
                <div className='profile-container'>
                    <div className='mb-20'>
                        <div className='relative'>
                            <img src={companyProfile} alt="" />
                            <img src={back} alt="" className='absolute top-0 h-[100px] left-[-100px] cursor-pointer' onClick={handleNavigate}/>
                        </div>
                        <div className='mt-[-30px] relative'>
                            <div className='flex justify-between'>
                                <div className='flex gap-6 items-end'>
                                    <div>
                                        <img src={companyLogo} alt="" className='h-[170px] mt-[-50px]' />
                                    </div>
                                    <div>
                                        <div className='flex  gap-3 pt-10'>
                                            <h2 className='text-xl font-semibold'>Company Name</h2>
                                            <div className='border-r border-black my-1'></div>
                                            <p className='text-lg font-medium text-slate-500'>Manufacturer</p>
                                        </div>
                                        <div className='mt-3'>
                                            <p className='border-2 border-[#0A122A]/[.3] flex gap-2 rounded-md py-1 px-2 text-[#0A122A99]/[.6] font-semibold text-sm'><img src={location} alt="" className='h-[20px]' /> 22 Cradle, EDII, Gandhinagar - Ahmedabad Rd, next to APOLLO HOSPITAL, GIDC Bhat, Bhat, Ahmedabad, Gujarat 382428</p>
                                            <div className='flex gap-5 mt-4'>
                                                <p className='border-2 border-[#0A122A]/[.3] flex items-center gap-2 rounded-md py-1 px-2 text-[#0A122A99]/[.6] font-semibold text-sm'><img src={telephone} alt="" className='h-[17px]' /> 1112345678</p>
                                                <p className='border-2 border-[#0A122A]/[.3] flex items-center gap-2 rounded-md py-1 px-2 text-[#0A122A99]/[.6] font-semibold text-sm'><img src={phone} alt="" className='h-[17px]' /> 9879879876, 9879879876</p>
                                                <p className='border-2 border-[#0A122A]/[.3] flex items-center gap-2 rounded-md py-1 px-2 text-[#0A122A99]/[.6] font-semibold text-sm'><img src={mail} alt="" className='h-[14px]' /> 123@gmail.com, 123@gmail.com</p>
                                                <p className='border-2 border-[#0A122A]/[.3] flex items-center gap-2 rounded-md py-1 px-2 text-[#0A122A99]/[.6] font-semibold text-sm'><img src={location} alt="" className='h-[20px]' /> Gujrat, India</p>
                                            </div>
                                            <div className='flex gap-5 mt-4 items-center'>
                                                <p className='border-2 border-[#0A122A]/[.3] flex items-center gap-2 rounded-md py-1 px-2 text-[#0A122A99]/[.6] font-semibold text-sm'> Facility Document </p>
                                                :
                                                <p className='border-2 border-[#0A122A]/[.3] flex items-center gap-2 rounded-md py-1 px-2 text-[#0A122A99]/[.6] font-semibold text-sm text-blue-500 underline'> GMP</p>
                                                <p className='border-2 border-[#0A122A]/[.3] flex items-center gap-2 rounded-md py-1 px-2 text-[#0A122A99]/[.6] font-semibold text-sm text-blue-500 underline'> 123@gmail.com, 123@gmail.com</p>
                                                <p className='border-2 border-[#0A122A]/[.3] flex items-center gap-2 rounded-md py-1 px-2 text-[#0A122A99]/[.6] font-semibold text-sm text-blue-500 underline'> Gujrat, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-14'>
                                    <div className='flex justify-end gap-3'>
                                        <img src={earth} alt="" className='h-[30px]' />
                                        <img src={face} alt="" className='h-[30px]' />
                                        <img src={insta} alt="" className='h-[30px]' />
                                        <img src={x} alt="" className='h-[30px]' />
                                        <img src={link} alt="" className='h-[30px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-black/[.026] py-10'>
                    <div className='profile-container'>
                        <div className='flex justify-center mx-20'>
                            <Buycard dataArray={array} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className="profile-container">
                        <img src={grayRect} alt="" />
                    </div>
                </div>
                <div className='my-10 py-10'>
                    <div className="profile-container relative">
                        <img src={companyBackground} alt="" />
                        <div className='absolute h-[100%] top-[25%] w-[100%] flex justify-center '>
                            <div className='w-[85%]'>
                                <Swiper
                                    slidesPerView={7}
                                    spaceBetween={50}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper px-10"
                                >
                                    {array1.map((e) => (
                                        <SwiperSlide><img src={companies} alt="" className='h-[100px]' /></SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyProfile
