import React , { useEffect, useState }  from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/images/PayAfter-Logo.svg'
import { useRouter } from 'next/router'
import { Modal } from '../component/modal';

const Header  = ()  => {

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

    const router = useRouter();
    const [currentPath, setCurrentPath] = React.useState('');
    const [hashtag, sethash] = React.useState('');

    useEffect(() => {
        setCurrentPath(router.pathname)
        const hashId = window.location.search;
        if (hashId) {
            if(hashId == '?terms'){
                setTimeout(()=>{
                    window.scrollTo({ top: window.scrollY + document.querySelector('.terms-page').getBoundingClientRect().top - 120, behavior: 'smooth' })
                },10)
               
            }else{
                setTimeout(()=>{
                    window.scrollTo({ top: window.scrollY + document.querySelector('.contact').getBoundingClientRect().top - 120, behavior: 'smooth' })
                },10)
            }
            sethash(hashId)
        }else{
            sethash("")
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [router]);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
        document.querySelector("body").style.overflow = "hidden";
    };

    return (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <nav
        className="
          fixed
          flex flex-wrap
          items-center
          justify-between
          bg-white
          mb-3
          w-full
          z-20
          top-0
        "
      >
        <div className="
            container
            py-4
            flex flex-wrap flex-row
            items-center
            justify-between
            lg:px-0 md:px-0 px-4
            mx-auto
            "
        >
            <div className="relative lg:flexs flex lg:items-centers items-center ">
                <ul className="list-none flex items-center xl:space-x-6 lg:space-x-4">
                    <li className="inline-block md:mr-3 mr-8">
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
                    <li 
                        className={currentPath === '/merchant' || currentPath.includes('merchants') ? 
                        'lg:inline-block md:inline-block hidden mr-3 text-red-500 font-extrabold border-b-2 border-red-500  transition-colors ease-in duration-500 transition-border ' :
                        'lg:inline-block md:inline-block hidden md:mr-3 mr-8 hover:text-red-500 border-b-2 border-transparent hover:border-red-500 transition-all ease-in-out duration-500'}
                    ><Link href="/merchant" >Merchants</Link></li>
                    <li 
                        className={hashtag === '?contact' ? 
                        'lg:inline-block md:inline-block hidden mr-3 text-red-500 font-extrabold border-b-2 border-red-500  transition-colors ease-in duration-500 transition-border' :
                        'lg:inline-block md:inline-block hidden md:mr-3  mr-8 hover:text-red-500 border-b-2 border-transparent hover:border-red-500 transition-all ease-in duration-300'}
                    ><Link href="/?contact">Contact us</Link></li>
                    <li 
                        className={currentPath === '/news' ? 
                        'lg:inline-block md:inline-block hidden mr-3 text-red-500 font-extrabold border-b-2 border-red-500  transition-colors ease-in duration-500 transition-border' :
                        'lg:inline-block md:inline-block hidden md:mr-3  mr-8 hover:text-red-500 border-b-2 border-transparent hover:border-red-500 transition-all ease-in duration-300'}
                    ><Link href="/news">News</Link></li>
                    <li 
                        className={currentPath === '/privacy' && hashtag !== '?terms'  ? 
                        'lg:inline-block md:inline-block hidden mr-3 text-red-500 font-extrabold border-b-2 border-red-500 transition-colors ease-in duration-500 transition-border' :
                        'lg:inline-block md:inline-block hidden md:mr-3 mr-8 hover:text-red-500 border-b-2 border-transparent hover:border-red-500 transition-all ease-in duration-300'}
                    ><Link href="/privacy">Terms & Policy</Link></li>
                </ul>
             
            </div>
            <div className="lg:space-x-6 space-x-1">
                <button className="lg:hidden  md:hidden inline-block w-10 h-10 text-black p-1" onClick={() => setMobileOpen(true) }>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <Link href="mailto:hello@payafter.ph"><a className="font-extrabold lg:inline-block md:inline-block hidden"  target="_blank">hello@payafter.ph</a></Link>
                <button 
                onClick={() =>openModal()}
                className="
                    px-4 
                    py-2
                    custom-button-color
                    rounded 
                    text-white
                    lg:inline-block md:inline-block hidden
                    hover:bg-red-500
                    hover:shadow-md
                    transition-all
                    duration-300
                ">
                   Apply as merchant
                </button>
            </div> 
        </div>    
      </nav>

      <div className="fixed top-0 left-0 z-50 w-screen flex transition-all ease-in-out duration-500" style={{ "transform": mobileOpen ? "translateY(0)" : "translateY(-100%)","pointerEvents":mobileOpen ? "initial":"none"}}>
        <div className="bg-white p-12 w-full text-center h-screen  transition-all duration-500">
            <ul className="list-none flex items-start justify-center text-center flex-col space-y-8">
                <li className="inline-block lg:mr-8 mr-4 relative mb-4">
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
                <li 
                    className={currentPath === '/merchant' || currentPath.includes('merchants') ? 
                    'inline-block mx-auto text-red-500 border-b-2 font-extrabold border-red-500 transition-colors ease-in duration-500 transition-border' :
                    'inline-block w-full '}
                ><Link href="/merchant">Merchants</Link></li>
                <li
                    onClick={() => setMobileOpen(false) }
                    className={hashtag === '?contact' ? 
                    'inline-block mx-auto text-red-500 border-b-2 font-extrabold border-red-500 transition-colors ease-in duration-500 transition-border' :
                    'inline-block w-full '}
                ><Link href="/?contact">Contact us</Link></li>
                <li
                    className={currentPath === '/news' ? 
                    'inline-block mx-auto text-red-500 border-b-2 font-extrabold border-red-500 transition-colors ease-in duration-500 transition-border' :
                    'inline-block w-full '}
                ><Link href="/news">News</Link></li>
                <li 
                 className={currentPath === '/privacy' ? 
                 'inline-block mx-auto text-red-500 border-b-2 font-extrabold border-red-500 transition-colors ease-in duration-500 transition-border' :
                 'inline-block w-full '}
                ><Link href="/privacy">Terms & Policy</Link></li>
            </ul>
            <button
                className="
                    absolute
                    top-12
                    right-10
                    inline-flex
                    items-center
                    justify-center
                    p-2
                    rounded-md
                    text-black-400
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
            <div className="mt-8 w-full">
                <Link href="mailto:hello@payafter.ph"><a className="font-extrabold"  target="_blank">hello@payafter.ph</a></Link>
                {/* <a className="font-extrabold " href="mailto:hello@payafter.ph">hello@payafter.ph</a> */}
                <button 
                onClick={() =>openModal()}
                className="
                    block 
                    px-4 
                    py-2
                    mt-4
                    custom-button-color
                    rounded 
                    text-white
                    hover:bg-red-500
                    hover:shadow-md
                    transition-all
                    duration-300 
                    mx-auto
                ">
                    Apply as merchant
                </button>
            </div> 
        </div>
        {/* <div className="w-2/12 bg-transaprent h-screen cursor-pointer" onClick={() => setMobileOpen(false) }></div> */}
      </div>
      </>
    )
}

export default Header;