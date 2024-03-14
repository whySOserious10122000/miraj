import React, { useState } from 'react';

// photos 
import banner from "../images/myprofile.png";
import companyLogo from "../images/company-logo.png";
import PersonalDetails from './PersonalDetails';
import OtherDetails from './OtherDetails';
import BillingAddress from './BillingAddress';
import BankDetail from './BankDetail';
import PackageDetails from './PackageDetails';

const Myprofile = () => {

    const [activeLink, setActiveLink] = useState('details');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const renderDetailComponent = () => {
        switch (activeLink) {
            case 'details':
                return <PersonalDetails />;
            case 'other':
                return <OtherDetails />;
            case 'billing':
                return <BillingAddress />;
            case 'bank':
                return <BankDetail />;
            case 'package':
                return <PackageDetails />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className='mx-5'>
                <div>
                    <div>
                        <img src={banner} alt="" />
                    </div>
                    <div className='mt-[-60px] ml-5 relative'>
                        <div className='flex justify-between'>
                            <div className='flex gap-4'>
                                <div>
                                    <img src={companyLogo} alt="" className='h-[170px]' />
                                </div>
                                <div className='pt-[60px]'>
                                    <div className='flex flex-col pt-3'>
                                        <h2 className='text-3xl font-bold'>Green Environment</h2>
                                        <p className='text-lg font-medium'>Company ID (Company Id Value)</p>
                                        <ul className='ps-5 marker:text-green-700 marker:text-lg'>
                                            <li className='list-disc text-lg'>Active</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className="flex gap-7 mt-7">
                        <span
                            className={`cursor-pointer text-[#0A122A]/[.6] font-semibold  pb-2 ${activeLink === 'details' && 'border-b-2 border-black text-black'}`}
                            onClick={() => handleLinkClick('details')}
                        >
                            Company Details
                        </span>
                        <span
                            className={`cursor-pointer text-[#0A122A]/[.6] font-semibold  pb-2 ${activeLink === 'other' && 'border-b-2 border-black text-black'}`}
                            onClick={() => handleLinkClick('other')}
                        >
                            Other Details
                        </span>

                        <span
                            className={`cursor-pointer text-[#0A122A]/[.6] font-semibold  pb-2 ${activeLink === 'billing' && 'border-b-2 border-black text-black'}`}
                            onClick={() => handleLinkClick('billing')}
                        >
                            Billing Address
                        </span>
                        <span
                            className={`cursor-pointer text-[#0A122A]/[.6] font-semibold  pb-2 ${activeLink === 'bank' && 'border-b-2 border-black text-black'}`}
                            onClick={() => handleLinkClick('bank')}
                        >
                            Bank Details
                        </span>
                        <span
                            className={`cursor-pointer text-[#0A122A]/[.6] font-semibold  pb-2 ${activeLink === 'package' && 'border-b-2 border-black text-black'}`}
                            onClick={() => handleLinkClick('package')}
                        >
                            Package Details
                        </span>
                        <button className='ms-auto bg-darkBlue text-white text-sm font-medium px-4 py-1 rounded-lg'>Save Changes</button>
                    </div>
                </div>
                <div className='border border-t-black '>
                </div>
                <div>
                    {renderDetailComponent()}
                </div>
            </div>
        </>
    )
}

export default Myprofile
