import React , {useState,useEffect} from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import Rosie from '../../public/assets/images/rosie/rosieposie.png'
import Rosie1 from '../../public/assets/images/rosie/rosieposie-01.png'
import Rosie2 from '../../public/assets/images/rosie/rosieposie-02.png'
import Rosie3 from '../../public/assets/images/rosie/rosieposie-03.png'
import Link from "next/link";
import { useSpring, animated } from 'react-spring'
import Home from '../../public/assets/images/home.svg'



const RoisePage = ({result}) =>{

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
            <div className="w-full xl:py-12 lg:py-8 pt-8  relative overflow-hidden custom-banner rosie-color">
                {/* <animated.div style={animation,{width: '19%', right: '11%'}}  className="text-center lg:px-0 px-20 lg:mt-0 mt-12 absolute top-2/4 transform -translate-y-2/4 scale-105 z-0 lg:flex lg:items-center hidden" >
                    <Image
                        src={Rosie}
                        alt="Logo"
                    />
                </animated.div> */}
                <animated.div style={animation} className="absolute top-12 lg:flex hidden">
                        <Image
                            src={Rosie}
                            alt="Logo"
                            width={320}
                            height={590}
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
                    <Link href="/merchants/rosieposie" >  
                        <a className="cursor-pointer"  >
                        Rosie Posie
                        </a>
                    </Link>
                </div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left  z-10 relative">
                        <h1 className="lg:text-5xl text-4xl font-bold xl:text-left lg:text-left text-center lg:pr-4 xl:pl-24 lg:pl-24">Get your Rosie Posie</h1> 
                        <h1 className="lg:text-5xl text-4xl font-bold mt-4 xl:text-left lg:text-left text-center lg:pr-4 xl:pl-24 lg:pl-24">skincare with PayAfter</h1>
                        <div className="py-8 xl:hidden lg:hidden block text-center relative tablet-mobile-size">
                            <Image
                                src={Rosie}
                                alt="Logo"
                                layout="fill"
                            />
                        </div>
                        <div className="xl:bg-transparent lg:bg-transparent  bg-white py-8 pr-8 relative md-custom-bg  xl:pl-24 lg:pl-24 pl-12" style={{zIndex:'1'}}>
                        <p className="mt-4">Spoil your self and practice self-care by availing Rosie Posie Kit with PayAfter. Make sure to follow these steps:</p>
                        <div className="relative block w-full border-solid">
                            <div className="relative pl-12 mt-4">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">1</span>
                                <p className="mb-4 pt-1">Activate your PayAfter membership.</p>
                                <div className=" p-4 bg-gray-100 rounded">
                                    <div>To enjoy perks and benefits, make sure your company is in partnership with PayAfter.</div>
                                </div>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">2</span>
                                <p className="mb-4 pt-1">Place your orders via RCT5 Global by clicking this <Link href="https://form.jotform.com/210623898940463"><a target="_blank" className="text-blue-500 underline">link</a></Link></p>
                            </div>
                            {/* <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">3</span>
                                <p className="mb-4 pt-1">Send them a direct message that contains your order details. Don’t forget to indicate PayAfter as your payment method.</p>
                            </div>
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">4</span>
                                <p className="mb-4 pt-1">Once your order has been confirmed, Rosie Posie will send to you the PayAfter link.</p>
                            </div> */}
                            <div className="relative pl-12 mt-8 ">
                                <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">3</span>
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
                        <h1 className="text-4xl font-bold">About Rosie Posie</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">Rosie Posie offers a gentle whitening skin set that’s got all the products you need on the daily. Not to mention, Rosie Posie combines all natural ingredients delivering the highest potency of skin whitening without having to use harsh chemicals. Plus, it’s Halal-certified, cruelty-free, non-GMO, and paraben-free.</p>
                        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 auto-rows-auto">
                         
                           <div className="shadow-lg flex relative items-center justify-self-end max-w-xs justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-8 transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={Rosie1}
                                        alt="Logo"
                                    />
                            </div>
                            <div className="shadow-lg flex items-center relative justify-self-center max-w-xs justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-8  transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={Rosie2}
                                        alt="Logo"
                                    />
                            </div>
                            <div className="shadow-lg flex  relative items-center justify-self-start max-w-xs justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-8  transform transition duration-500 hover:scale-105">
                                <Image
                                    src={Rosie3}
                                    alt="Logo"
                                />
                            </div>
                      
                        </div>
                        <button 
                            onClick={()=> { window.open("https://form.jotform.com/210623898940463").focus() }}
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
                                {/* Visit Rosie Posie on Instagram */}
                                Shop now and pay later
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RoisePage;