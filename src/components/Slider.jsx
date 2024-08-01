import React from 'react'
import Razorpay_logo from '../assets/Razorpay_logo.svg'
import Slideroptions from './Slideroptions.jsx'
import { FaHome, FaArrowRight, FaRegFileAlt } from "react-icons/fa";
import { IoIosContact, IoIosMailOpen } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlinePayment, MdReportProblem } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";


function Slide() {

  const newbutton = <button className='bg-green-600 px-[10px] py-1 rounded-lg text-[10px]'>New</button>;

  return (
    <>
    <div className='hidden md:block w-full md:w-1/6 h-full bg-gray-700 fixed z-50'>
      <FiMenu className='text-white mx-2 my-4'/>
        <img src={Razorpay_logo} alt="Razorpay Logo" className='w-[7rem] h-[3rem] mx-auto hidden md:block'/>
        <div className='hidden md:block'>
            <ul className='pl-1 pb-4 border-b-2 border-gray-500'>
                <Slideroptions text='Home' icon={<FaHome />}/>
                <Slideroptions text='Payouts' icon={<FaArrowRight className='-rotate-45'/>} />
                <Slideroptions text='Account Statements' icon={<FaRegFileAlt />}/>
                <Slideroptions text='Contacts' icon={<IoIosContact />}/>
            </ul>
            <ul className='pl-1 pt-4'>
                <Slideroptions text='Loans' icon={<FaIndianRupeeSign />} button={newbutton}/>
                <Slideroptions text='Vendors Payments' icon={<MdOutlinePayment />} button={newbutton}/>
                <Slideroptions text='Tax Payments' icon={<MdOutlinePayment />}/>
                <Slideroptions text='Payout Links' icon={<BsFillSendFill />}/>
                <Slideroptions text='Payroll' icon={<IoIosMailOpen />}/>
                <Slideroptions text='Reports' icon={<MdReportProblem />}/>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Slide
