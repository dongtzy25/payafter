import React,{useState} from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import JBL from '../../public/assets/images/jbl/jbl.png'
import JBL1 from '../../public/assets/images/jbl/jbl-01.png'
import JBL2 from '../../public/assets/images/jbl/jbl-02.png'
import JBL3 from '../../public/assets/images/jbl/jbl-03.png'
import Link from "next/link";

import { Modal } from '../../component/modal'
import { useSpring, animated } from 'react-spring'


const JBLPage = () =>{
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
            <div className="w-full py-24 relative overflow-hidden custom-banner jbl-color">
                 <animated.div style={animation} className="custom-imagepos custom-height absolute top-24 transform scale-105 z-0 lg:flex hidden">
                    <Image
                        src={JBL}
                        alt="Logo"
                        layout="fill"
                    />
                </animated.div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left pl-12 pr-4 z-10">
                        <h1 className="text-5xl font-bold">Stay connected.</h1>  
                        <h1 className="text-5xl font-bold mt-4">Stay wireless.</h1>
                        <p className="mt-4">Discover the freedom with JBL. Get yours now with PayAfter!</p>
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
                                <p className="mb-4 pt-1">Visit JBL Philippines’s Facebook page <Link href="https://www.facebook.com/JBLPhilippines/"><a className="text-blue-500 underline"  > @JBLPhilippines</a></Link></p>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">3</span>
                                <p className="mb-4 pt-1">Send them a direct message via Facebook Messenger that contains your order details. Don’t forget to indicate PayAfter as your payment method.</p>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">4</span>
                                <p className="mb-4 pt-1">Once your order has been confirmed, JBL Philippines will send to you the PayAfter link.</p>
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
                        <h1 className="text-4xl font-bold">About JBL</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">JBL has brought music to life in a way people can feel for over 70 years. From iconic concerts to the world’s biggest sporting events, our award-winning sound has powered the world’s most epic musicians, athletes and venues. We unleash the power of music so you can live life to the fullest wherever and whenever.</p>
                        <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-ohcrop-size transform transition duration-500 hover:scale-105
                            ">
                                    <Image
                                        src={JBL1}
                                        alt="Logo"
                                        layout="fill"
                                    />
                            </div>
                            <div className="shadow-lg flex items-center relative justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-ohcrop-size transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={JBL2}
                                        alt="Logo"
                                        layout="fill"
                                    />
                            </div>
                            <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-ohcrop-size transform transition duration-500 hover:scale-105">
                                <Image
                                    src={JBL3}
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
                                Visit JBL Ph’s website
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default JBLPage;