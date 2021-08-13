import React,{useState,useEffect} from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import OhCrop from '../../public/assets/images/ohcrop/ohcrop.png'
import OhCrop1 from '../../public/assets/images/ohcrop/ohcrop-01.png'
import OhCrop2 from '../../public/assets/images/ohcrop/ohcrop-02.png'
import OhCrop3 from '../../public/assets/images/ohcrop/ohcrop-03.png'
import Link from "next/link";
import Router from 'next/router'

import { useSpring, animated } from 'react-spring'
import Home from '../../public/assets/images/home.svg'


const OhcropPage = () =>{
  
    const animation = useSpring({
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)',right: '11%' },
        config: {
            duration: 300,
            tension: 500, friction: 80
        },
      });
    return (
        <Layout>
            <div className="w-full pt-8 relative overflow-hidden custom-banner ohcrop-color">
                {/* <animated.div style={animation,{width: '19%', right: '11%'}} className="text-center lg:px-0 px-20 lg:mt-0 mt-12 absolute top-2/4 transform -translate-y-2/4 scale-105 z-0 lg:flex lg:items-center hidden">
                    <Image
                        src={OhCrop}
                        alt="Logo"
                    />
                </animated.div> */}
                 <animated.div style={animation} className="absolute top-24 lg:flex hidden">
                    <Image
                        src={OhCrop}
                        alt="Logo"
                        width={320}
                        height={630}
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
                    <Link href="/merchants/ohcrop" >  
                        <a className="cursor-pointer"  >
                            Oh Crop!
                        </a>
                    </Link>
                </div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left lg:pl-24 z-10 relative">
                        <h1 className="lg:text-5xl text-4xl font-bold xl:text-left lg:text-left md:text-left text-center pr-4">Make the switch with</h1>
                        <h1 className="lg:text-5xl text-4xl font-bold mt-4 xl:text-left lg:text-left md:text-left text-center pr-4">Oh Crop! and PayAfter</h1>
                        <div className="py-8 xl:hidden lg:hidden md:hidden sm:hidden block text-center">
                            <Image
                                src={OhCrop}
                                alt="Logo"
                                width={230}
                                height={447}
                            />
                        </div>
                        <div className="xl:bg-transparent lg:bg-transparent md:bg-transparent sm:bg-transparent bg-white py-8 pr-8 pl-12 relative" style={{zIndex:'1'}}>
                            <p className="mt-4">Who said being healthy will make you broke? Follow these steps to start your new journey with Oh Crop!:</p>
                            <div className="relative block xl:w-9/12 lg:w-9/12 w-full border-solid">
                                <div className="relative pl-12 mt-4">
                                    <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">1</span>
                                    <p className="mb-4 pt-1">Activate your PayAfter membership.</p>
                                    <div className=" p-4 bg-gray-100 rounded shadow-sm">
                                        <div>To enjoy perks and benefits, make sure your company is in partnership with PayAfter.</div>
                                    </div>
                                </div>
                                <div className="relative pl-12 mt-8 ">
                                    <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">2</span>
                                    <p className="mb-4 pt-1">Visit their Instagram page <Link href="https://www.instagram.com/ohcrop.ph/"><a target="_blank" className="text-blue-500 underline"  >@ohcrop.ph</a></Link></p>
                                </div>
                                <div className="relative pl-12 mt-8 ">
                                    <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">3</span>
                                    <p className="mb-4 pt-1">Send them a direct message that contains your order details. Don’t forget to indicate PayAfter as your payment method.</p>
                                </div>
                                <div className="relative pl-12 mt-8 ">
                                    <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">4</span>
                                    <p className="mb-4 pt-1">Once your order has been confirmed, Oh Crop! will send to you the PayAfter link.</p>
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
                    <div className="block">
                        <div className="w-4/5 mx-auto">

                        <h1 className="text-4xl font-bold">About Oh Crop!</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">Oh Crop! is committed to release recipes and food ventions that are not only aesthetically instagrammable, but are also truly delicious. They are here to debunk the naysayers who make the road to healthy dark and bleak. Oh Crop! will be the light right up your grocery alley and will make sure your palate is satisfied.</p>
                        </div>
                        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 mt-10">
                            <div className="shadow-lg flex bg-white relative justify-self-center items-center merchant-customs-size justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105
                            ">
                                    <Image
                                        src={OhCrop1}
                                        alt="Logo"
                                        
                                    />
                            </div>
                            <div className="shadow-lg flex items-center relative justify-self-center merchant-customs-size justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={OhCrop2}
                                        alt="Logo"
                                        
                                    />
                            </div>
                            <div className="shadow-lg flex bg-white relative justify-self-center merchant-customs-size items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4  transform transition duration-500 hover:scale-105">
                                <Image
                                    src={OhCrop3}
                                    alt="Logo"
                                    
                                />
                            </div>
                        </div>
                        <button 
                            onClick={()=> {  window.open("https://www.instagram.com/omowhiteph/").focus()  }}
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
                                Visit Oh Crop!’s Instagram
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default OhcropPage;