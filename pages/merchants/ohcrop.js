import React,{useState,useEffect} from "react";
import Layout from '../../layout/layout'
import Image from 'next/image'
import OhCrop from '../../public/assets/images/ohcrop/ohcrop.png'
import OhCrop1 from '../../public/assets/images/ohcrop/ohcrop-01.png'
import OhCrop2 from '../../public/assets/images/ohcrop/ohcrop-02.png'
import OhCrop3 from '../../public/assets/images/ohcrop/ohcrop-03.png'
import Link from "next/link";

import { Modal } from '../../component/modal'
import { useSpring, animated } from 'react-spring'
import axios from 'axios';


const OhcropPage = () =>{
    const [showModal, setShowModal] = useState(false);
    const [loadedImage, setLoadedImage] = useState([]);
    const loadImaged = [];

    const openModal = () => {
        setShowModal(prev => !prev);
        document.querySelector("body").style.overflow = "hidden";
    };

    const getImageInstagram = async () => {
        const result = await axios.get("/api/getImage",{
            params: {
                id: 43799574922
            }
          });
        if(result.status == 200){
            const { edges } = result.data.data.user.edge_owner_to_timeline_media
            edges.forEach(element => {
                loadImaged.push(element.node.thumbnail_src)
            });
            setLoadedImage(loadImaged)
        }
    };

    useEffect(() => {
        getImageInstagram();
    }, [])

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
            <div className="w-full py-24 relative overflow-hidden custom-banner ohcrop-color">
                {/* <animated.div style={animation,{width: '19%', right: '11%'}} className="text-center lg:px-0 px-20 lg:mt-0 mt-12 absolute top-2/4 transform -translate-y-2/4 scale-105 z-0 lg:flex lg:items-center hidden">
                    <Image
                        src={OhCrop}
                        alt="Logo"
                    />
                </animated.div> */}
                 <animated.div style={animation} className="custom-imagepos custom-right-width absolute top-24 transform scale-105 z-0 lg:flex hidden">
                    <Image
                        src={OhCrop}
                        alt="Logo"
                        layout="fill"
                    />
                </animated.div>
                <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
                    <div className="xl:w-6/12 lg:w-7/12 w-full text-left pl-12 pr-4 z-10">
                        <h1 className="text-5xl font-bold">Make the switch with</h1>
                        <h1 className="text-5xl font-bold mt-4">Oh Crop! and PayAfter</h1>
                        <p className="mt-4">Who said being healthy will make you broke? Follow these steps to start your new journey with Oh Crop!:</p>
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
                                <p className="mb-4 pt-1">Visit their Instagram page <Link href="https://www.instagram.com/ohcrop.ph/"><a className="text-blue-500 underline"  >@ohcrop.ph</a></Link></p>
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
            <div className="w-full bg-gray-50 py-12 ">
                <div className="container mx-auto  text-center">
                    <div className="w-4/5 mx-auto">
                        <h1 className="text-4xl font-bold">About Oh Crop!</h1>
                        <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">Oh Crop! is committed to release recipes and food ventions that are not only aesthetically instagrammable, but are also truly delicious. They are here to debunk the naysayers who make the road to healthy dark and bleak. Oh Crop! will be the light right up your grocery alley and will make sure your palate is satisfied.</p>
                        <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-12 mt-12 lg:text-auto text-center">
                            {/* <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-ohcrop-size transform transition duration-500 hover:scale-105
                            ">
                                    <Image
                                        src={OhCrop1}
                                        alt="Logo"
                                        layout="fill"
                                    />
                            </div>
                            <div className="shadow-lg flex items-center relative justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-ohcrop-size transform transition duration-500 hover:scale-105">
                                    <Image
                                        src={OhCrop2}
                                        alt="Logo"
                                        layout="fill"
                                    />
                            </div>
                            <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-ohcrop-size transform transition duration-500 hover:scale-105">
                                <Image
                                    src={OhCrop3}
                                    alt="Logo"
                                    layout="fill"
                                />
                            </div> */}
                            { loadedImage.map( (item, index) => {
                                return(
                                    <>
                                        <div className="shadow-lg flex bg-white relative items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-ohcrop-size transform transition duration-500 hover:scale-105">
                                            <Image
                                                src={item}
                                                alt="Logo"
                                                layout="fill"
                                                className="rounded-lg"
                                            />
                                         </div>   
                                    </>
                                ) 
                            })}
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
                                Visit Cocotel’s website
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default OhcropPage;