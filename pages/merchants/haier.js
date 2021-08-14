import React,{useState} from "react"
import Layout from '../../layout/layout'
import Image from 'next/image'
import Haier from '../../public/assets/images/haier/img_haier/img_haier@3x.png'
import Haier1 from '../../public/assets/images/haier/haier-01.png'
import Haier2 from '../../public/assets/images/haier/haier-02.png'
import Haier3 from '../../public/assets/images/haier/haier-03.png'
import Link from "next/link"

import Router from 'next/router'
import { useSpring, animated } from 'react-spring'
import Home from '../../public/assets/images/home.svg'


const HaierPage = () =>{
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
            <div className="w-full pt-8 relative overflow-hidden custom-banner haier-color">
                 <animated.div style={animation} className="custom-imagepos absolute xl:top-24 lg:top-24 top-52 right-0 lg:flex md:flex sm:flex hidden">
                    <Image
                        src={Haier}
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
                    <Link href="/merchants/haier" >  
                        <a className="cursor-pointer"  >
                            Haier
                        </a>
                    </Link>
                </div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left lg:pl-24 pl-12 z-10 relative">
                        <h1 className="lg:text-5xl text-4xl font-bold xl:text-left lg:text-left text-center pr-4">Haier belongs to us,</h1>  
                        <h1 className="lg:text-5xl text-4xl font-bold mt-4 xl:text-left lg:text-left text-center pr-4">and to the world</h1>
                        <div className="py-8 
                            2xl:hidden xl:hidden lg:hidden block
                            xl:opacity-0 lg:opacity-0 md:opacity-0 sm:opacity-0 opacity-1 
                            md-custom-height">
                            <Image
                                src={Haier}
                                alt="Logo"
                            />
                        </div>
                        <div className="xl:bg-transparent lg:bg-transparent bg-white py-8 pr-8 xl:pl-0 lg:pl-0 pl-24 relative md-custom-bg" style={{zIndex:'1'}}>
                        <p className="mt-4">Buy your own Haier with PayAfter with these five easy steps:</p>
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
                                <p className="mb-4 pt-1">Visit Haier Philippines’ Facebook page  <Link href="https://www.facebook.com/Haier.Philippines/"><a target="_blank" className="text-blue-500 underline"  >@Haier.Philippines</a></Link></p>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">3</span>
                                <p className="mb-4 pt-1">Send them a direct message via Facebook Messenger that contains your order details. Don’t forget to indicate PayAfter as your payment method.</p>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">4</span>
                                <p className="mb-4 pt-1">Once your order has been confirmed, Haier Philippines will send to you the PayAfter link.</p>
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
                        <h1 className="text-4xl font-bold">About Haier</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">Today Haier has spread all over Asia, Africa, Europe, North America and the Middle East, and all corners of the world. There are 10 R&D centers, 24 industrial parks, 66 marketing centers and 108 manufacturing plants in the world. New brands continue to join the Haier family, Aqua, Fischer Parker, GEA, Candy, have become a member of Haier. Haier, is crossing the culture, merging the brand, and coming to you quickly!</p>
                        <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
                            <div className="shadow-lg flex bg-white relative  justify-self-end max-w-xs items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105
                            ">
                                    <Image
                                        src={Haier1}
                                        alt="Logo"
                                    />
                            </div>
                            <div className="shadow-lg flex items-center relative  justify-self-center max-w-xs justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={Haier2}
                                        alt="Logo"
                                    />
                            </div>
                            <div className="shadow-lg flex bg-white relative  justify-self-start max-w-xs items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4transform transition duration-500 hover:scale-105">
                                <Image
                                    src={Haier3}
                                    alt="Logo"
                                />
                            </div>
                        </div>
                        <button 
                            onClick={()=> { window.open("https://www.facebook.com/Haier.Philippines/").focus() }}
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
                                Visit JM Appliances and Gadgets on Facebook
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default HaierPage;