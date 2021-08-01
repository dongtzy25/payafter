import React , { useEffect, useState }  from 'react'
import Layout from '../layout/layout';
import Image from 'next/image';
import Logo from '../public/assets/images/PayAfter-Logo.svg';
import { Modal } from '../component/modal';

const Merchant = () =>{
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
        document.querySelector("body").style.overflow = "hidden";
    };
    return (
        <Layout>
            <Modal showModal={showModal} setShowModal={setShowModal} />
             <div className="w-full py-12">
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between">
                <div className="lg:hidden block  lg:w-6/12 w-full text-center lg:px-0 px-20 ">
                    <Image
                        src={Logo}
                        alt="Logo"
                    />
                </div>
                <div className="lg:w-6/12 w-full lg:px-20 px-12 lg:mt-0 mt-12">
                    <h1 className="lg:text-6xl text-4xl font-bold">Now in stores</h1>
                    <p className="lg:text-xl text-lg mt-8 lg:pr-6">Shop on installment for up to 5 months from your favourite stores  - stress free. No credit card required. No hidden fees.</p>
                </div>
                <div className="lg:block hidden lg:w-6/12 w-full text-center lg:px-0 px-20 lg:mt-0 mt-12">
                    <Image
                        src={Logo}
                        alt="Logo"
                    />
                </div>
                </div>
            </div> 
            <div className="w-full bg-gray-50 py-12">
                <div className="container mx-auto">
                    <div className="block">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Beauty</h1>
                        <div className="lg:flex flex-row justify-start lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-8">Merchant 1</div>
                            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-8">Merchant 2</div>
                        </div>
                    </div>
                    <div className="block mt-12">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Electronics</h1>
                        <div className="lg:flex flex-row justify-start lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-8">Merchant 1</div>
                            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-8">Merchant 2</div>
                            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-8">Merchant 3</div>
                        </div>
                    </div>
                    <div className="block mt-12">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Food</h1>
                        <div className="lg:flex flex-row justify-start lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-8">Merchant 1</div>
                            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-8">Merchant 2</div>
                        </div>
                    </div>
                    <div className="block mt-12">
                        <h1 className="text-4xl font-bold lg:text-left text-center">Hotels and resorts</h1>
                        <div className="lg:flex flex-row justify-start lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-8">Merchant 1</div>
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