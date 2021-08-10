import React,{useState,useEffect} from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import CocoTel from '../../public/assets/images/cocotel/cocotel.png'
import CocoTel1 from '../../public/assets/images/cocotel/img_cocotel-01.png'
import CocoTel2 from '../../public/assets/images/cocotel/img_cocotel-02.png'
import CocoTel3 from '../../public/assets/images/cocotel/img_cocotel-03.png'
import Link from "next/link";

import { useSpring, animated } from 'react-spring'
import Router from 'next/router'

const CocotelPage = () =>{
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
            <div className="w-full py-24 relative overflow-hidden custom-banner cocotel-color">
                {/* <animated.div style={animation} className="lg:w-6/12 w-full h-full text-center lg:px-0 px-20 lg:mt-0 mt-12 absolute top-24 -right-64 transform scale-105 z-0 lg:block hidden">
                    <Image
                        src={CocoTel}
                        alt="Logo"
                    />
                </animated.div> */}
                <animated.div style={animation} className="custom-imagepos absolute top-24 transform scale-105 z-0 lg:flex hidden">
                    <Image
                        src={CocoTel}
                        alt="Logo"
                        layout="fill"
                    />
                </animated.div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left lg:pl-24 pl-12 pr-4 z-10">
                        <h1 className="lg:text-5xl text-4xl font-bold">Book an escape at</h1>
                        <h1 className="lg:text-5xl text-4xl font-bold mt-4">Cocotel with PayAfter!</h1>
                        <p className="mt-4">Follow these five easy steps to start your beautiful adventures at Cocotel:</p>
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
                                <p className="mb-4 pt-1">Go to <Link href="https://www.cocotel.com.ph"><a className="text-blue-500 underline"  >www.cocotel.com.ph</a></Link> and select your preferred booking dates.</p>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">3</span>
                                <p className="mb-4 pt-1">Fill in checkout information and follow checkout instructions as needed.</p>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">4</span>
                                <p className="mb-4 pt-1">Choose PayAfter as your payment method.</p>
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
                        <h1 className="text-4xl font-bold">About Cocotel</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">Cocotel is a technology hotel and property management aggregator company aiming to empower tourism in the Philippines by partnering with local hotels and resort owners by offering quality and affordable three-star accommodation at a fraction of a cost. From overnight stays to long weekends, enjoy the scent of salty sea air and the comfort of a cozy beach haven paradise.</p>
                        <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-coco-size transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={CocoTel1}
                                        alt="Logo"
                                        layout="fill"
                                    />
                            </div>
                            <div className="shadow-lg flex items-center relative justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-coco-size transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={CocoTel2}
                                        alt="Logo"
                                        layout="fill"
                                    />
                            </div>
                            <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-coco-size transform transition duration-500 hover:scale-105">
                                <Image
                                    src={CocoTel3}
                                    alt="Logo"
                                    layout="fill"
                                />
                            </div>
                        </div>
                        <button 
                            onClick={()=> { Router.push("https://www.cocotel.com.ph") }}
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
                                Visit Cocotel’s website
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CocotelPage;