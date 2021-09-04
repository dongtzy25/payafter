import React from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import CondoCare from '../../public/assets/images/condocare/condocare.png'
import CondoCare1 from '../../public/assets/images/condocare/img_condocare-01.png'
import CondoCare2 from '../../public/assets/images/condocare/img_condocare-02.png'
import CondoCare3 from '../../public/assets/images/condocare/img_condocare-03.png'
import Home from '../../public/assets/images/home.svg'

import Link from "next/link";

import { useSpring, animated } from 'react-spring'

const CondoCarePage = () =>{
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
            <div className="w-full pt-8 relative overflow-hidden custom-banner condocare-color">
                <animated.div style={animation} className="xl:max-w-screen-md customize md:max-w-3xl max-w-full max-h-full absolute xl:top-24 lg:top-24 top-52 -right-2 lg:flex md:flex sm:flex hidden">
                    <Image
                        src={CondoCare}
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
                    <Link href="/merchants/condocare" >  
                        <a className="cursor-pointer"  >
                        CondoCare
                        </a>
                    </Link>
                </div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left lg:pl-24 pl-12 z-10 relative"> 
                        <h1 className="lg:text-5xl text-4xl font-bold xl:text-left lg:text-left  text-center pr-4">A clean home is a</h1>  
                        <h1 className="lg:text-5xl text-4xl font-bold mt-4 xl:text-left lg:text-left text-center pr-4">safe home</h1>
                        <div className="
                            py-8 2xl:hidden xl:hidden lg:hidden xl:opacity-0 lg:opacity-0 md:opacity-0 sm:opacity-0 opacity-1 block 
                            md-custom-height -mr-2
                        ">
                            <Image
                                src={CondoCare}
                                alt="Logo"
                            />
                        </div>
                        <div className="xl:bg-transparent lg:bg-transparent bg-white py-8 pr-8 relative md-custom-bg" style={{zIndex:'1'}}>
                            <p className="mt-4">Create a safer and healthier environment at the comforts of your own home. Book a service now with PayAfter.</p>
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
                                    <p className="mb-4 pt-1">
                                        Go to <Link href="https://www.condocare.ph"><a target="_blank" className="text-blue-500 underline"  >www.condocare.ph</a></Link> or message them via Facebook Messenger <Link href="https://www.facebook.com/condocareph"><a target="_blank" className="text-blue-500 underline"  >@condocareph</a></Link> that contains your details. Don’t forget to indicate PayAfter as your payment method.</p>
                                </div>
                                <div className="relative pl-12 mt-8 ">
                                    <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">3</span>
                                    <p className="mb-4 pt-1">Once your order has been confirmed, CondoCare will send to you the PayAfter link.</p>
                                </div>
                                <div className="relative pl-12 mt-8 ">
                                    <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">4</span>
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
                        <h1 className="text-4xl font-bold">About CondoCare</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">Condo Care PH is a trusted residential and commercial cleaning and disinfection company with over 1,000 clients. Our team is WHO Certified in Environmental Cleaning and Disinfection and strictly adheres to DOH Sanitation Guidelines. Our cleaning systems are designed to create a safer and healthier environment for our clients.</p>
                        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 mt-10">
                            <div className="shadow-lg flex bg-white justify-self-end max-w-xs relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={CondoCare1}
                                        alt="Logo"
                                    />
                            </div>
                            <div className="shadow-lg flex items-center justify-self-center max-w-xs relative justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={CondoCare2}
                                        alt="Logo"
                                    />
                            </div>
                            <div className="shadow-lg flex bg-white relative justify-self-start max-w-xs items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105">
                                <Image
                                    src={CondoCare3}
                                    alt="Logo"
                                />
                            </div>
                        </div>
                        {/* onClick={()=> { window.open("https://www.cebuanalhuillierjewelry.com").focus()  }} */}
                        <button 
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
                               Book a service now!
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CondoCarePage;