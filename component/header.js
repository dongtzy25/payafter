import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/images/PayAfter-Logo.svg'

const Header  = () => {
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
            pt-4
            p-2
            mx-auto
            flex flex-wrap flex-row
            items-center
            justify-between
            "
        >
            <div className="relative">
                <ul className="list-none flex items-center space-x-8">
                    <li className="inline-block">
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
                    <li className="inline-block"><Link href="/merchant">Merchant</Link></li>
                    <li className="inline-block"><Link href="/contactus">Contact Us</Link></li>
                    <li className="inline-block"><Link href="/terms">Terms</Link></li>
                    <li className="inline-block"><Link href="/privacy">Privacy</Link></li>
                </ul>
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
      </>
    )
}

export default Header;