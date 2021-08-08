import React,{useState} from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import Freshbuys from '../../public/assets/images/freshbuys/freshbuys.png'
import CocoTel1 from '../../public/assets/images/cocotel/img_cocotel-01.png'
import Link from "next/link";
import { useSpring, animated } from 'react-spring'
import { Modal } from '../../component/modal'


const Freshbuys = () =>{
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
            <div className="w-full py-24 relative overflow-hidden custom-banner fresh-color">
                <animated.div style={animation} className="lg:w-6/12 w-full h-full text-center lg:px-0 px-20 lg:mt-0 mt-12 absolute top-24 -right-64 transform scale-105 z-0 lg:block hidden">
                    <Image
                        src={Freshbuys}
                        alt="Logo"
                    />
                </animated.div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 w-full text-left xl:pl-28 md:pl-20 pl-12 pr-4 z-10">
                        <h1 className="text-5xl font-bold">Buy fresh goods from</h1>
                        <h1 className="text-5xl font-bold mt-4">FreshBuys using PayAfter</h1>
                        <p className="mt-4">Don’t let those fresh items perish in your cart. Checkout now following these easy steps:</p>
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
                                <p className="mb-4 pt-1">Go to <Link href="https://www.freshbuys.ph" ><a className="text-blue-500 underline" >www.freshbuys.ph</a></Link> and add to cart your favorite items.</p>
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
                        <h1 className="text-4xl font-bold">About FreshBuys</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">
                        Fresh Buys is an online market site that delivers fresh and organic fruits and vegetables from the mountains of Cordillera to your home. 
                        It is an initiative to help our farmers and SMEs especially in the Cordillera region to bring their products directly to the consumers. 
                        </p>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">
                        Plan out your produce with Fresh Buys. We can get the appropriate amount of vegetables to you fresh. Let’s help our farmers and frontliners by being healthy.
                        </p>
                        <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-12 mt-12 lg:text-auto text-center">
                            <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-coco-size transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={CocoTel1}
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
                                Shop now at FreshBuys
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Freshbuys;