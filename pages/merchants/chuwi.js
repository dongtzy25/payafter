import React,{useState} from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import Chuwi from '../../public/assets/images/chuwi/chuwi.png'
import Chuwi1 from '../../public/assets/images/chuwi/chuwi-01.png'
import Chuwi2 from '../../public/assets/images/chuwi/chuwi-02.png'
import Chuwi3 from '../../public/assets/images/chuwi/chuwi-03.png'
import Link from "next/link";

import { Modal } from '../../component/modal'
import { useSpring, animated } from 'react-spring'


const ChuwiPage = () =>{
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
        document.querySelector("body").style.overflow = "hidden";
    };

    const animation = useSpring({
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },
        config: {
            duration: 300,
            tension: 500, friction: 80
        },
      });
    return (
        <Layout>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <div className="w-full py-24 relative overflow-hidden custom-banner chuwi-color">
                 <animated.div style={animation} className="custom-imagepos absolute top-24 transform scale-105 z-0 lg:flex hidden">
                    <Image
                        src={Chuwi}
                        alt="Logo"
                        layout="fill"
                    />
                </animated.div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left pl-12 pr-4 z-10">
                        <h1 className="lg:text-5xl text-4xl font-bold"> Kickstart productivity</h1>
                        <h1 className="lg:text-5xl text-4xl font-bold mt-4">with Chuwi</h1>
                        <p className="mt-4">Purchase any of Chuwi’s products using PayAfter</p>
                        <div className="relative block lg:w-9/12 md:w-9/12 border-solid">
                            <div className="relative pl-12 mt-4">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">1</span>
                                <p className="mb-4 pt-1">Activate your PayAfter membership.</p>
                                <div className=" p-4 bg-gray-100 rounded shadow-sm">
                                    <div>To enjoy perks and benefits, make sure your company is in partnership with PayAfter.</div>
                                </div>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">2</span>
                                <p className="mb-4 pt-1">Visit Chuwi Global’s Facebook page  <Link href="https://www.facebook.com/chuwidotcom/"><a className="text-blue-500 underline"  >@chuwidotcom</a></Link></p>
                            </div> 
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">3</span>
                                <p className="mb-4 pt-1">Send them a direct message via Facebook Messenger that contains your order details. Don’t forget to indicate PayAfter as your payment method.</p>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">4</span>
                                <p className="mb-4 pt-1">Once your order has been confirmed, Chuwi Global will send to you the PayAfter link.</p>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">5</span>
                                <p className="mb-4 pt-1">Login with PayAfter to complete the transaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="w-full bg-gray-50 py-12 ">
                <div className="container mx-auto  text-center">
                    <div className="w-4/5 mx-auto">
                        <h1 className="text-4xl font-bold">About Chuwi</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">Chuwi was founded in 2004 with the purpose of creating superior digital technology in a brand new way, and every day we get closer to our dreams. From the beginning we have strived to make a difference in people’s lives and accompany them on their path to success. We make products that help people reach and exceed their goals.</p>
                        <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-ohcrop-size transform transition duration-500 hover:scale-105
                            ">
                                    <Image
                                        src={Chuwi1}
                                        alt="Logo"
                                        layout="fill"
                                    />
                            </div>
                            <div className="shadow-lg flex items-center relative justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-ohcrop-size transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={Chuwi2}
                                        alt="Logo"
                                        layout="fill"
                                    />
                            </div>
                            <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-ohcrop-size transform transition duration-500 hover:scale-105">
                                <Image
                                    src={Chuwi3}
                                    alt="Logo"
                                    layout="fill"
                                />
                            </div>
                        </div>
                        <button 
                            onClick={() =>openModal()}
                            className="
                                inline-block 
                                px-4 
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
                                Visit Chuwi’s website
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default ChuwiPage;