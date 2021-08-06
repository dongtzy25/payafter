import React , {  useState }  from 'react'
import Layout from '../layout/layout'
import Image from 'next/image'
import { Modal } from '../component/modal'

import merchant from '../public/assets/images/Illustration-merchant.svg'

import homestyle from '../styles/Home.module.css'

import ohCrop from '../public/assets/images/Merchant Brand Logos/oh-crop-logo.png'
import chuwi from '../public/assets/images/Merchant Brand Logos/Chuwi_logo_2019.png'
import cocologo from '../public/assets/images/Merchant Brand Logos/logo.png'
import omowhite from '../public/assets/images/Merchant Brand Logos/omo white.png'
import Haierlogo from '../public/assets/images/Merchant Brand Logos/Haier logo.png'
import freshbuyers from '../public/assets/images/Merchant Brand Logos/freshbuys-logo.png'
import aiwa from '../public/assets/images/Merchant Brand Logos/download.png'
import rosieposie from '../public/assets/images/Merchant Brand Logos/rosie posie.jpg'

const Merchant = () =>{
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
        document.querySelector("body").style.overflow = "hidden";
    };
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
                        <p className="lg:text-xl text-lg mt-8 lg:pr-6">Shop from your favourite stores across the country and enjoy 0% interest for 5 monthly installment.</p>
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
                <div className="container mx-auto lg:px-20 px-12">
                    <div className="block">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Beauty</h1>
                        <div className="lg:flex md:flex flex-row justify-start lg:space-x-12 mt-12 lg:text-auto text-center ">
                            <div className="shadow-lg flex items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size">
                                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded">
                                    <Image
                                        src={omowhite}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div className="shadow-lg flex items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size">
                                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded">
                                    <Image
                                        src={rosieposie}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block mt-12">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Electronics</h1>
                        <div className="lg:flex md:grid md:grid-rows-2 md:grid-flow-col md:gap-8 lg:gap-0 flex-row justify-start lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="shadow-lg flex bg-white items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size">
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={aiwa}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div className="shadow-lg flex items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size">
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={chuwi}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div className="shadow-lg flex bg-white  items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size">
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={Haierlogo}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block mt-12">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Food</h1>
                        <div className="lg:flex md:flex flex-row justify-start lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="shadow-lg flex items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size" style={{backgroundColor:'#EADDBB'}}>
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={ohCrop}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                            <div className="shadow-lg flex items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size" style={{backgroundColor:'#F6EEDA'}}>
                                <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                                    <Image
                                        src={freshbuyers}
                                        alt="Logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block mt-12">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Hotels and resorts</h1>
                        <div className="lg:flex md:flex flex-row justify-start lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="shadow-lg flex bg-white  items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size" style={{backgroundColor:'#F0F0F0'}}>
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
                        ">
                            Apply as merchant
                    </button>
                </div>
            </div>
        </Layout>
    )
}
export default Merchant