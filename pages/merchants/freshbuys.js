import React,{useState} from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import Freshbuys from '../../public/assets/images/freshbuys/freshbuys.png'
import Freshbuys01 from '../../public/assets/images/freshbuys/freshbuys01.png'
import Freshbuys1 from '../../public/assets/images/freshbuys/freshbuys-1.png'
import Link from "next/link";
import { useSpring, animated } from 'react-spring'
import Home from '../../public/assets/images/home.svg'

import Router from 'next/router'

const FreshbuysPage = () =>{
  
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
            <div className="w-full pt-8 relative overflow-hidden custom-banner fresh-color">
                <animated.div style={animation} className="custom-imageCocoSize absolute xl:top-24 lg:top-24 top-52 right-0 lg:flex md:flex sm:flex hidden">
                    <Image
                        src={Freshbuys}
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
                    <Link href="/merchants/freshbuys" >  
                        <a className="cursor-pointer"  >
                            Freshbuys
                        </a>
                    </Link>
                </div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left lg:pl-24 pl-12 z-10 relative">
                        <h1 className="lg:text-5xl text-4xl font-bold xl:text-left lg:text-left text-center pr-4">Buy fresh goods from</h1>
                        <h1 className="lg:text-5xl text-4xl font-bold mt-4 xl:text-left lg:text-left text-center pr-4">FreshBuys using PayAfter</h1>
                        <div className=" py-8 2xl:hidden xl:hidden lg:hidden xl:opacity-0 lg:opacity-0 md:opacity-0 sm:opacity-0 opacity-1 block md-custom-height">
                            <Image
                                src={Freshbuys01}
                                alt="Logo"
                            />
                        </div>
                        <div className="xl:bg-transparent lg:bg-transparent  bg-white py-8 pr-8 relative md-custom-bg" style={{zIndex:'1'}}>
                            <p className="mt-4">Don’t let those fresh items perish in your cart. Checkout now following these easy steps:</p>
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
                                    <p className="mb-4 pt-1">Go to <Link href="https://www.freshbuys.ph" ><a target="_blank" className="text-blue-500 underline" >www.freshbuys.ph</a></Link> and add to cart your favorite items.</p>
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
                        <h1 className="text-4xl font-bold">About FreshBuys</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">
                        Fresh Buys is an online market site that delivers fresh and organic fruits and vegetables from the mountains of Cordillera to your home. 
                        It is an initiative to help our farmers and SMEs especially in the Cordillera region to bring their products directly to the consumers. 
                        </p>
                        <p className="text-lg mt-8 lg:w-4/6 lg:mx-auto">
                        Plan out your produce with Fresh Buys. We can get the appropriate amount of vegetables to you fresh. Let’s help our farmers and frontliners by being healthy.
                        </p>
                        <div className="grid grid-cols-1 gap-4 mt-12">
                            <div className="shadow-lg flex bg-white relative items-center justify-center justify-self-center rounded-lg lg:mx-0 mx-auto max-w-2xl lg:mb-0 mb-4 transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={Freshbuys1}
                                        alt="Logo"
                                    />
                            </div>
                        
                        </div>
                        <button 
                            onClick={()=> { window.open("https://www.freshbuys.ph").focus()  }}
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
                                Shop now at FreshBuys
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default FreshbuysPage;