import React , {  useState }  from 'react'
import Layout from '../layout/layout'
import Image from 'next/image'
import { Modal } from '../component/modal'

import merchant from '../public/assets/images/Illustration-merchant.svg'

import homestyle from '../styles/Home.module.css'
import Router from 'next/router'

import ohCrop from '../public/assets/images/Merchant Brand Logos/oh-crop-logo.png'
import chuwi from '../public/assets/images/Merchant Brand Logos/Chuwi_logo_2019.png'
import cocologo from '../public/assets/images/Merchant Brand Logos/logo.png'
import omowhite from '../public/assets/images/Merchant Brand Logos/omo white.png'
import Haierlogo from '../public/assets/images/Merchant Brand Logos/Haier logo.png'
import freshbuyers from '../public/assets/images/Merchant Brand Logos/freshbuys-logo.png'
import aiwa from '../public/assets/images/Merchant Brand Logos/download.png'
import rosieposie from '../public/assets/images/Merchant Brand Logos/rosie posie.jpg'
import itel from '../public/assets/images/Merchant Brand Logos/itel.png'
import jbl from '../public/assets/images/Merchant Brand Logos/jbl.png'


const Merchant = () =>{
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
        document.querySelector("body").style.overflow = "hidden";
    };

    const _handleChange = (event) => {
       if(event.target.value != ''){
        //  window.scrollTo({ top: window.scrollY + document.querySelector(`.${event.target.value}`).getBoundingClientRect().top - 120, behavior: 'smooth' })
        const content = document.querySelectorAll('.category');
         if(event.target.value == 'all'){
            content.forEach((c)=>{
                c.classList.remove('hidden')
                c.classList.add('block')
            });
         }else{
            content.forEach((c)=>{
                if(c.classList.value.includes(event.target.value)){
                    c.classList.remove('hidden')
                    c.classList.add('block')
                }else{
                    c.classList.add('hidden')
                }
            });
         }
       }
    }
    return (
        <Layout>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <div className={homestyle.firstfold}>
             <div className="w-full lg:py-12">
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between">
                <div className="lg:hidden block  lg:w-6/12 w-11/12 lg:text-left text-center">
                    <Image
                        src={merchant}
                        alt="Logo"
                    />
                </div>
                <div className="lg:w-6/12 w-full lg:mt-0 mt-8 md:text-center lg:text-left text-center">
                    <div className="w-4/5 mx-auto">
                        <h1 className="lg:text-6xl text-4xl font-bold">Available stores</h1>
                        <p className="lg:text-xl text-lg mt-8 lg:pr-6">Shop from your favourite stores across the country and enjoy 0% interest for <span className="custom-block">5 monthly installment.</span></p>
                    </div>
                </div>
                <div className="lg:block hidden lg:w-6/12 w-full text-center lg:px-0 px-20 lg:mt-0 mt-12">
                    <Image
                        src={merchant}
                        alt="Logo"
                    />
                </div>
                </div>
            </div> 
            </div>
            <div className="w-full bg-gray-50 py-12 ">
                <div className="container mx-auto  text-center px-4 lg:pl-12  relative">
                    <div className="block">
                        <div className="lg:w-1/2 w-full lg:mt-0 mt-4 flex lg:flex-row flex-col items-center lg:space-x-4">
                            <label htmlFor="industry" className="lg:w-20 w-full text-base mb-2 lg:text-left text-center">Filter by</label>
                            <select 
                                id="industry"
                                name="industry" 
                                type="text" 
                                autoComplete="off" 
                                className="lg:w-72 md:w-5/12 w-full rounded px-4 py-3 text-black border custom-select-arrow"
                                style={{backgroundColor: '#fff'}}
                                onChange={_handleChange}
                                >
                                <option value="all">All</option>
                                <option value="beauty">Beauty</option>
                                <option value="electronics">Electronics & gadgets</option>
                                <option value="food">Food</option>
                                <option value="hotelsandresorts">Hotels and resorts</option>
                            </select>
                        </div> 
                    </div>
                    <div className="block mt-12 beauty category">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Beauty</h1>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
                            <div className="shadow-lg flex items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                                onClick={()=> { Router.push('/merchants/omowhite') }}
                            >
                                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded">
                                    <Image
                                        src={omowhite}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div className="shadow-lg flex items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                            onClick={()=> { Router.push('/merchants/rosieposie') }}
                            >
                                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded">
                                    <Image
                                        src={rosieposie}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block mt-12 electronics category">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Electronics & gadgets</h1>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
                            <div 
                            onClick={()=> { Router.push('/merchants/aiwa') }}
                            className="shadow-lg flex bg-white items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm">
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={aiwa}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div 
                            onClick={()=> { Router.push('/merchants/chuwi') }}
                            className="shadow-lg flex bg-white items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm">
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={chuwi}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div 
                            onClick={()=> { Router.push('/merchants/haier') }}
                            className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm">
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={Haierlogo}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div 
                            onClick={()=> { Router.push('/merchants/itel') }}
                            className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm">
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={itel}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div 
                            onClick={()=> { Router.push('/merchants/jbl') }}
                            style={{backgroundColor: 'rgb(254,88,42)'}}
                            className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm">
                            
                                <div className="relative flex items-center justify-center">
                                    <Image
                                        src={jbl}
                                        alt="Logo"
                                        width={140}
                                        height={75}
                                    />
                                </div>
                            </div>
                        </div>
                      
                    </div>
                    <div className="block mt-12 food category">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Food</h1>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
                        <div 
                            onClick={()=> { Router.push('/merchants/freshbuys') }}
                            className="shadow-lg flex items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                            style={{backgroundColor:'#F6EEDA'}}>
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={freshbuyers}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div
                            onClick={()=> { Router.push('/merchants/ohcrop') }}
                            className="shadow-lg flex items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm" 
                            style={{backgroundColor:'#EADDBB'}}>
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={ohCrop}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block mt-12 hotelsandresorts category">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Hotels and resorts</h1>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
                            <div className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm" 
                                style={{backgroundColor:'#F0F0F0'}}
                                onClick={()=> { Router.push('/merchants/cocotel') }}
                            >
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={cocologo}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full custom-bg-color py-12 text-white">
                <div className="container mx-auto  text-center lg:px-0 px-12">
                    <h1 className="text-4xl font-bold">Be our partner merchant</h1>
                    <p className="text-lg mt-4">Get more customers and increase your sales by signing up now!</p>
                    <button 
                        onClick={() =>openModal()}
                        className="
                            inline-block 
                            px-6 
                            py-3
                            custom-button-color
                            rounded 
                            text-white
                            mt-12
                            hover:bg-red-500
                            hover:shadow-md
                            transition-all
                            duration-300
                        ">
                            Apply as merchant
                    </button>
                </div>
            </div>
        </Layout>
    )
}
export default Merchant