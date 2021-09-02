import Layout from "../layout/layout"
import Image from 'next/image'
import Link from 'next/link'
import news from '../public/assets/images/Illustration-news.svg'
import homestyle from '../styles/Home.module.css'
import Payafterwhite from '../public/assets/images/PayAfter-Logo.svg'
import SecondNews from '../public/assets/images/new2.png'
import arrowRight from '../public/assets/images/arrow_right.svg'
import { useRouter } from "next/router"


const NewsPage = () => {
    const router = useRouter();
    return(
        <Layout>
             <div className={homestyle.firstfold}>
                <div className="w-full lg:py-12">
                    <div className="container mx-auto flex lg:flex-row flex-col items-start justify-between">
                        <div className="lg:hidden block lg:w-6/12 w-11/12 lg:text-left text-center mx-auto">
                            <Image
                                src={news}
                                alt="Logo"
                            />
                        </div>
                        <div className="xl:pl-24 flex xl:items-start lg:items-start items-center flex-col mt-8 lg:w-7/12 mx-auto">
                            <h1 className="lg:text-6xl lg:pl-12 xl:pl-0 text-4xl font-bold">Stay in the loop</h1>
                            <p className="lg:text-xl text-lg mt-8 xl:w-full w-5/6 lg:text-left text-center mx-auto">Fear of missing out? Sign up to our newsroom to make sure you’re   <br className="xl:block hidden"/> always up to date.</p>
                            <div className="mt-12 xl:flex lg:flex items-center justify-center gap-4 lg:space-x-0 space-x-2 lg:text-left text-center">
                                <input 
                                id="name" 
                                name="name" 
                                type="text" 
                                maxLength="64"
                                autoComplete="off" 
                                className="w-72 rounded px-4 py-3 text-black border"
                                placeholder="your@email.com"
                                required />
                                <button 
                                    disabled
                                    className="
                                        inline-block 
                                        px-5 
                                        py-3
                                        lg:mt-0 mt-2
                                        custom-button-color
                                        rounded 
                                        text-white
                                        disabled:opacity-75
                                    ">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="lg:block hidden lg:w-6/12 w-full text-center lg:px-0 px-20 lg:mt-0 mt-12">
                            <Image
                                src={news}
                                alt="Logo"
                            />
                        </div>
                    </div>
                </div> 
            </div>  
            <div className="w-full bg-gray-50 py-12 ">
                <div className="container mx-auto  text-center xl:px-24 lg:px-12 px-8  relative">
                    <div className=" xl:flex lg:flex items-center justify-between w-full">
                        <h1 className="text-5xl font-bold">Newsroom</h1>
                        {/* <div className="lg:mt-0 mt-4 flex xl:flex-row lg:flex-row flex-col items-center lg:space-x-4">
                            <label htmlFor="industry" className="text-base lg:text-left text-center">Sort by</label>
                            <select 
                                id="industry"
                                name="industry" 
                                type="text" 
                                autoComplete="off" 
                                className="lg:w-72 md:w-5/12 w-full rounded px-4 py-3 text-black border custom-select-arrow"
                                style={{backgroundColor: '#fff'}}
                                >
                                <option value="all">Latest release</option>
                            </select>
                        </div>  */}
                    </div>
                    <br/>
                    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8 py-10 place-content-center ">
                        <div 
                        onClick={() => router.push('/news/cebuana-lhuillier-unviels-payafter')}
                        className="flex flex-col justify-between bg-white max-w-md  rounded-lg shadow-lg cursor-pointer hover:shadow-sm transition-all duration-500 "
                        >
                            <div className="flex flex-col items-center justify-self-start ">
                                <div 
                                    className="bg-white shadow-sm p-12 py-20 flex items-center justify-center justify-self-center w-full  lg:mx-0 mx-auto rounded-t-lg">
                                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden ">
                                        <Image
                                            src={Payafterwhite}
                                            alt="Logo"
                                            width={150}
                                            height={110}
                                        />
                                    </div>
                                </div>
                              
                            <h1 className="lg:text-3xl text-2xl font-bold p-4 text-left ">Cebuana Lhuillier unveils “PayAfter”</h1> 
                            </div>
                            <div>
                            <div className="flex flex-row items-center justify-between p-4 pt-0">
                                <span className="text-base">Aug. 31, 2021</span>
                                <Link href="/news/cebuana-lhuillier-unviels-payafter" >  
                                    <a className="cursor-pointer"  >
                                        <Image
                                        src={arrowRight}
                                        alt="Logo"
                                        width={45}
                                        height={45}
                                        />
                                    </a>
                                </Link>
                            </div>
                            </div>
                        </div>

                        <div 
                        onClick={() => router.push('/news/kris-bernal-and-marvin-agustin-have-something-to-say-to-you')}
                        className="flex flex-col justify-between  bg-white max-w-md  rounded-lg shadow-lg cursor-pointer hover:shadow-sm transition-all duration-500 "
                        >
                            <div className="flex flex-col items-center justify-self-start ">
                                <div 
                                    className="bg-white flex items-center shadow-sm justify-center justify-self-center w-full  lg:mx-0 mx-auto rounded-t-lg">
                                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-t-lg">
                                        <Image
                                            src={SecondNews}
                                            alt="Logo"
                                            height={445}
                                        />
                                    </div>
                                </div>
                             
                                <h1 className="lg:text-3xl text-2xl font-bold p-4 text-left ">LOOK: Kris Bernal and Marvin Agustin have something to say to you</h1> 
                            </div>
                            <div>
                                <div className="flex flex-row items-center justify-between p-4 pt-0">
                                    <span className="text-base">Sep. 1, 2021</span>
                                    <Link href="/news/kris-bernal-and-marvin-agustin-have-something-to-say-to-you" >  
                                        <a className="cursor-pointer"  >
                                            <Image
                                            src={arrowRight}
                                            alt="Logo"
                                            width={45}
                                            height={45}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>    
        </Layout>
    )
}

export default NewsPage
