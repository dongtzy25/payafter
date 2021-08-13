import React,{useState,useEffect} from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import CocoTel from '../../public/assets/images/cocotel/img_cocotel/img_cocotel@2x.png'
import CocoTel1 from '../../public/assets/images/cocotel/img_cocotel-01.png'
import CocoTel2 from '../../public/assets/images/cocotel/img_cocotel-02.png'
import CocoTel3 from '../../public/assets/images/cocotel/img_cocotel-03.png'
import Home from '../../public/assets/images/home.svg'

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
            <div className="w-full pt-8 relative overflow-hidden custom-banner cocotel-color">
                <animated.div style={animation} className="custom-imageCocoSize absolute top-24 right-0 lg:flex hidden">
                    <Image
                        src={CocoTel}
                        alt="Logo"
                    />
                </animated.div>
                <div className="container mx-auto mb-8 lg:pl-24 pl-12">
                    <Link href="/" >  
                        <a className="cursor-pointer"  >
                            <Image
                            src={Home}
                            alt="Logo"
                            width={15}
                            height={15}
                            />
                        </a>
                    </Link>
                    <span className="px-4">/</span>
                    <Link href="/merchant" >  
                        <a className="cursor-pointer"  >
                            Merchants
                        </a>
                    </Link>
                    <span className="px-4">/</span>
                    <Link href="/merchants/cocotel" >  
                        <a className="cursor-pointer"  >
                            Cocotel
                        </a>
                    </Link>
                </div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left lg:pl-24 pl-12 z-10 relative">
                        <h1 className="lg:text-5xl text-4xl font-bold xl:text-left lg:text-left md:text-left text-center pr-4">Book an escape at</h1>
                        <h1 className="lg:text-5xl text-4xl font-bold mt-4 xl:text-left lg:text-left md:text-left text-center pr-4">Cocotel with PayAfter!</h1>
                        <div className="py-8 xl:hidden lg:hidden md:hidden sm:hidden  block">
                            <Image
                                src={CocoTel}
                                alt="Logo"
                            />
                        </div>
                        <div className="xl:bg-transparent lg:bg-transparent md:bg-transparent sm:bg-transparent bg-white py-8 pr-8 relative" style={{zIndex:'1'}}>
                            <p className="mt-4">Follow these five easy steps to start your beautiful adventures at Cocotel:</p>
                            <div className="relative block w-full border-solid">
                                <div className="relative pl-12 mt-4">
                                    <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">1</span>
                                    <p className="mb-4 pt-1">Activate your PayAfter membership.</p>
                                    <div className=" p-4 bg-gray-100 rounded shadow-sm">
                                        <div>To enjoy perks and benefits, make sure your company is in partnership with PayAfter.</div>
                                    </div>
                                </div>
                                <div className="relative pl-12 mt-8 ">
                                    <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">2</span>
                                    <p className="mb-4 pt-1">Go to <Link href="https://www.cocotel.com.ph"><a target="_blank" className="text-blue-500 underline"  >www.cocotel.com.ph</a></Link> and select your preferred booking dates.</p>
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
            </div> 
            <div className="w-full bg-gray-50 py-12 ">
                <div className="container mx-auto  text-center">
                    <div className="w-4/5 mx-auto">
                        <h1 className="text-4xl font-bold">About Cocotel</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">Cocotel is a technology hotel and property management aggregator company aiming to empower tourism in the Philippines by partnering with local hotels and resort owners by offering quality and affordable three-star accommodation at a fraction of a cost. From overnight stays to long weekends, enjoy the scent of salty sea air and the comfort of a cozy beach haven paradise.</p>
                        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
                            <div className="shadow-lg flex bg-white justify-self-center merchant-coco-size relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={CocoTel1}
                                        alt="Logo"
                                    />
                            </div>
                            <div className="shadow-lg flex items-center justify-self-center merchant-coco-size relative justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={CocoTel2}
                                        alt="Logo"
                                    />
                            </div>
                            <div className="shadow-lg flex bg-white relative justify-self-center merchant-coco-size items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105">
                                <Image
                                    src={CocoTel3}
                                    alt="Logo"

                                />
                            </div>
                        </div>
                        <button 
                            onClick={()=> { window.open("https://www.cocotel.com.ph").focus()  }}
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