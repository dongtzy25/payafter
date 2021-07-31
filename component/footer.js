import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/images/PayAfter-Logo.svg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container mx-auto pt-12 pb-8">
                    <div className="flex flex-row items-start justify-start space-x-12">
                        <div className="mr-4 w-1/3">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={90}
                                height={90}
                            />
                            <p className="mt-4">SEC Registration No. CS201820732 </p>
                            <p>Certificate of Authority No. 1228</p>
                        </div>
                        <div className="w-1/3">
                            <h1 className="font-bold text-xl mb-2">Links</h1>
                            <ul>
                                <li className="mb-2 text-md"><Link href="#">Apply as merchant</Link></li>
                                <li className="mb-2 text-md"><Link href="#">Merchants</Link></li>
                                <li className="mb-2 text-md"><Link href="#">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="w-1/3">
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
                        <div className="flex flex-row items-center justify-between">
                            <div>Copyright © 2021 PayAfter by Cebuana Lhuillier Finance Corp. an SEC Licensed Financing Company</div>
                            <div className="relative">
                                <Image
                                    src={"https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:d9b88ec9-9b61-421c-b665-725d056ba09b;revision=0?component_id=da3a8d72-6346-405c-b9df-11be769bfad4&api_key=CometServer1&access_token=1627769211_urn%3Aaaid%3Asc%3AUS%3Ad9b88ec9-9b61-421c-b665-725d056ba09b%3Bpublic_47697d60536b966349807188cd9effdca51a26e3"}
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