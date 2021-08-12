import React,{useState} from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import JBL from '../../public/assets/images/jbl/img_jbl/img_jbl@3x.png'
import JBL1 from '../../public/assets/images/jbl/jbl-01.png'
import JBL2 from '../../public/assets/images/jbl/jbl-02.png'
import JBL3 from '../../public/assets/images/jbl/jbl-03.png'
import Link from "next/link";

import Router from 'next/router'
import Home from '../../public/assets/images/home.svg'
import { useSpring, animated } from 'react-spring'


const JBLPage = () =>{
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
            <div className="w-full pt-8 relative overflow-hidden custom-banner jbl-color">
                 <animated.div style={animation} className="custom-imagepos absolute top-24 transform scale-105 z-0 lg:flex hidden">
                    <Image
                        src={JBL}
                        alt="Logo"
                        layout="fill"
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
                    <Link href="/merchants/jbl" >  
                        <a className="cursor-pointer"  >
                            JBL
                        </a>
                    </Link>
                </div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left lg:pl-24 pl-12 z-10 relative">
                        <h1 className="lg:text-5xl text-4xl font-bold xl:text-left lg:text-left md:text-left text-center pr-4">Stay connected.</h1>  
                        <h1 className="lg:text-5xl text-4xl font-bold mt-4 xl:text-left lg:text-left md:text-left text-center pr-4">Stay wireless.</h1>
                        <div className="py-8 xl:hidden lg:hidden md:hidden sm:hidden  block">
                            <Image
                                src={JBL}
                                alt="Logo"
                            />
                        </div>
                        <div className="xl:bg-transparent lg:bg-transparent md:bg-transparent sm:bg-transparent bg-white py-8 pr-8 relative" style={{zIndex:'1'}}>
                            <p className="mt-4">Discover the freedom with JBL. Get yours now with PayAfter!</p>
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
                                    <p className="mb-4 pt-1">Visit JBL Philippines’s Facebook page <Link href="https://www.facebook.com/JBLPhilippines/"><a target="_blank" className="text-blue-500 underline"  > @JBLPhilippines</a></Link></p>
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
            </div> 
            <div className="w-full bg-gray-50 py-12 ">
                <div className="container mx-auto  text-center">
                    <div className="w-4/5 mx-auto">
                        <h1 className="text-4xl font-bold">About JBL</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">JBL has brought music to life in a way people can feel for over 70 years. From iconic concerts to the world’s biggest sporting events, our award-winning sound has powered the world’s most epic musicians, athletes and venues. We unleash the power of music so you can live life to the fullest wherever and whenever.</p>
                        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
                            <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105
                            ">
                                    <Image
                                        src={JBL1}
                                        alt="Logo"
                                        width={352}
                                        height={352}
                                    />
                            </div>
                            <div className="shadow-lg flex items-center relative justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4  transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={JBL2}
                                        alt="Logo"
                                        width={352}
                                        height={352}
                                    />
                            </div>
                            <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4  transform transition duration-500 hover:scale-105">
                                <Image
                                    src={JBL3}
                                    alt="Logo"
                                    width={352}
                                    height={352}
                                />
                            </div>
                        </div>
                        <button 
                            onClick={()=> { window.open("https://www.facebook.com/JBLPhilippines/").focus()  }}
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
                                Visit Tech Bytes IT Solutions on Facebook
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default JBLPage;