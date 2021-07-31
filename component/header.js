import React , { useEffect, useState }  from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/images/PayAfter-Logo.svg'

const Header  = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    // Allow to use the `esc` key
    useEffect(() => {
        function handleEscape(event) {
        if (!mobileOpen) return;

        if (event.key === "Escape") {
            setMobileOpen(false);
        }
        }
        document.addEventListener("keyup", handleEscape);
        document.querySelector("body").style.overflow = !mobileOpen ? "auto" :"hidden";
        return () => document.removeEventListener("keyup", handleEscape);
    }, [mobileOpen]);

    return (
        <>
        <nav
        className="
          fixed
          flex flex-wrap
          items-center
          justify-between
          bg-white
          mb-3
          w-full
          z-10
          top-0
        "
      >
        <div className="
            container
            py-4
            mx-auto
            flex flex-wrap flex-row
            items-center
            justify-between
            lg:px-0 px-4
            "
        >
            <div className="relative lg:flexs flex lg:items-centers items-center">
                <ul className="list-none flex items-center ">
                    <li className="inline-block lg:mr-8 mr-4">
                     <Link href="/"> 
                        <a>
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={65}
                                height={65}
                            />
                        </a>
                     </Link>
                    </li>
                    <li className="lg:inline-block md:inline-block hidden mr-8"><Link href="/merchant">Merchant</Link></li>
                    <li className="lg:inline-block md:inline-block hidden mr-8"><Link href="/contactus">Contact Us</Link></li>
                    <li className="lg:inline-block md:inline-block hidden mr-8"><Link href="/terms">Terms</Link></li>
                    <li className="lg:inline-block md:inline-block hidden mr-8"><Link href="/privacy">Privacy</Link></li>
                </ul>
                <button className="lg:hidden  md:hidden inline-block w-10 h-10 text-gray-600 p-1" onClick={() => setMobileOpen(true) }>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="space-x-6">
                <button 
                className="
                    inline-block 
                    px-4 
                    py-2
                    custom-button-color
                    rounded 
                    text-white
                ">
                    Apply as Merchant
                </button>
            </div> 
        </div>    
      </nav>
      <div className="fixed top-0 left-0 z-10 h-screen flex transition duration-300 ease-in-out" style={{"backgroundColor":"rgba(0,0,0,0.4)", "width": mobileOpen ? "100%" : "0"}}>
        <div className="bg-white p-12 w-10/12 h-screen shadow-2xl" style={{ "display": mobileOpen ? "block" : "none"}}>
            <ul className="list-none flex items-start flex-col space-y-4">
                <li className="inline-block lg:mr-8 mr-4 relative">
                    <div className="relative w-20 h-20">
                        <Link href="/"> 
                        <a >
                            <Image
                                src={Logo}
                                alt="Logo"
                                layout="fill"
                            />
                        </a>
                        </Link>
                        
                    </div>
                    
                </li>
                <li className="inline-block mr-8"><Link href="/merchant">Merchant</Link></li>
                <li className="inline-block mr-8"><Link href="/contactus">Contact Us</Link></li>
                <li className="inline-block mr-8"><Link href="/terms">Terms</Link></li>
                <li className="inline-block mr-8"><Link href="/privacy">Privacy</Link></li>
            </ul>
            <button
                className="
                    absolute
                    top-2
                    right-20
                    inline-flex
                    items-center
                    justify-center
                    p-2
                    rounded-md
                    text-gray-400
                "
                onClick={() => setMobileOpen(false) }
                >
                <svg
                    className="h-8 w-8"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <div className="mt-4">
                <button 
                className="
                    block 
                    px-4 
                    py-2
                    custom-button-color
                    rounded 
                    text-white
                ">
                    Apply as Merchant
                </button>
            </div> 
        </div>
        <div className="w-2/12 bg-transaprent h-screen cursor-pointer" onClick={() => setMobileOpen(false) }></div>
      </div>
      </>
    )
}

export default Header;