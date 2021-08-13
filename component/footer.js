import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/images/PayAfter-Logo.svg'
import FooterLogo from '../public/assets/images/logo_cl.png'

import React, {useState} from 'react'
import {Modal} from '../component/modal'

const Footer = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
        document.querySelector("body").style.overflow = "hidden"
    };
    return (
        <>

            <footer>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
                <div className="container mx-auto py-12 lg:px-20 px-4 ">
                    <div className="lg:flex flex-row items-start justify-start lg:space-x-12 lg:text-left text-center">
                        <div className="mr-4 lg:w-1/3 w-full">
                        <Link href="/"> 
                        <a> <Image
                                src={Logo}
                                alt="Logo"
                                width={90}
                                height={90}
                            />
                            </a>
                            </Link>
                            <p className="mt-4">SEC Registration No. CS201820732 </p>
                            <p>Certificate of Authority No. 1228</p>
                        </div>
                        <div className="lg:w-1/3 w-full lg:mt-0 mt-8">
                            <h1 className="font-bold text-xl mb-4">Links</h1>
                            <ul>
                                <li className="mb-4 text-md" onClick={()=>openModal()}><span className="cursor-pointer">Apply as merchant</span></li>
                                <li className="mb-4 text-md"><Link href="/merchant">Merchants</Link></li>
                                <li className="mb-4 text-md"><Link href="/?contact">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="lg:w-1/3 w-full  lg:mt-0 mt-8">
                            <h1 className="font-bold text-xl mb-4">Legal</h1>
                            <ul className="list-none">
                                {/* <li className="mb-2 text-md"><Link href="/privacy">Privacy Policy</Link></li> */}
                                <li className="mb-4 text-md"><Link href="/privacy">Terms & Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto py-8 lg:px-20 px-4 border-t-2">
                    <div className="flex lg:flex-row flex-col items-center justify-between">
                        <div className="lg:px-0 px-4 lg:text-left text-center"><span className="xl:inline-block lg:inline-block  block">Copyright © 2021</span> PayAfter by Cebuana Lhuillier Finance Corp. an SEC Licensed Financing Company</div>
                        <div className="relative lg:mt-0 mt-4">
                            <Image
                                src={FooterLogo}
                                alt="Logo"
                                width={204}
                                height={42}
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;