import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/images/PayAfter-Logo.svg'
import FooterLogo from '../public/assets/images/logo_cl.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container mx-auto py-12">
                    <div className="lg:flex flex-row items-start justify-start lg:space-x-12 lg:text-left text-center">
                        <div className="mr-4 lg:w-1/3 w-full">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={90}
                                height={90}
                            />
                            <p className="mt-4">SEC Registration No. CS201820732 </p>
                            <p>Certificate of Authority No. 1228</p>
                        </div>
                        <div className="lg:w-1/3 w-full lg:mt-0 mt-8">
                            <h1 className="font-bold text-xl mb-2">Links</h1>
                            <ul>
                                <li className="mb-2 text-md"><Link href="#">Apply as merchant</Link></li>
                                <li className="mb-2 text-md"><Link href="#">Merchants</Link></li>
                                <li className="mb-2 text-md"><Link href="#">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="lg:w-1/3 w-full  lg:mt-0 mt-8">
                            <h1 className="font-bold text-xl mb-2">Legal</h1>
                            <ul className="list-none">
                                <li className="mb-2 text-md"><Link href="#">Privacy Policy</Link></li>
                                <li className="mb-2 text-md"><Link href="#">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
                <div className="border-t-2">
                    <div className="container mx-auto py-8">
                        <div className="flex lg:flex-row flex-col items-center justify-between">
                            <div className="lg:px-0 px-4 lg:text-left text-center">Copyright © 2021 PayAfter by Cebuana Lhuillier Finance Corp. an SEC Licensed Financing Company</div>
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
                </div>
            </footer>
        </>
    )
}

export default Footer;