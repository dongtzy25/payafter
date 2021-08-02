import Image from 'next/image'
import eccp from '../public/assets/images/merchants/eccp.png'
import affi from '../public/assets/images/merchants/affi.png'
import fa from '../public/assets/images/merchants/fa.png'

import arrowDown from '../public/assets/images/arrow-down.svg'
import Illustration from '../public/assets/images/Illustration-home.svg'

import Mail from '../public/assets/images/mail.svg'
import Layout from '../layout/layout'
import React, {useState} from 'react'
import { Modal } from '../component/modal'
import { useForm } from "react-hook-form"
import Router from 'next/router'
import Link from 'next/link'

import homestyle from '../styles/Home.module.css'

import ohCrop from '../public/assets/images/Merchant Brand Logos/oh-crop-logo.png'
import chuwi from '../public/assets/images/Merchant Brand Logos/Chuwi_logo_2019.png'
import cocologo from '../public/assets/images/Merchant Brand Logos/logo.png'
import omowhite from '../public/assets/images/Merchant Brand Logos/omo white.png'
import Haierlogo from '../public/assets/images/Merchant Brand Logos/Haier logo.png'
import freshbuyers from '../public/assets/images/Merchant Brand Logos/freshbuys-logo.png'
import aiwa from '../public/assets/images/Merchant Brand Logos/download.png'
import rosieposie from '../public/assets/images/Merchant Brand Logos/rosie posie.jpg'

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const { register,  handleSubmit, formState  } = useForm({ mode: 'onChange'});
  const onSubmit = (data) => {
    console.log(data)
  };
  const openModal = () => {
      setShowModal(prev => !prev);
      document.querySelector("body").style.overflow = "hidden";
  };
  return (
    <>
      <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className={homestyle.firstfold}>
        <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between">
        <div className="lg:hidden block  lg:w-6/12 w-full lg:text-left text-center lg:px-0 px-20 ">
            <Image
                src={Illustration}
                alt="Logo"
            />
          </div>
          <div className="lg:w-6/12 w-full lg:px-20 px-12 lg:mt-0 mt-12 md:text-center lg:text-left text-center">
            <h1 className="lg:text-6xl text-4xl font-bold">Shop now, pay later with NO interest!</h1>
            <p className="lg:text-xl text-lg mt-8 lg:pr-6 ">Shop on installment for up to 5 months from your favourite stores  - stress free. No credit card required. No hidden fees.</p>
            <div className="mt-12 ">
              <button 
                  onClick={() =>openModal()}
                  className="
                      inline-block 
                      px-4 
                      py-2
                      custom-button-color
                      rounded 
                      text-white
                  ">
                      Apply as merchant
                  </button>
            </div>
          </div>
          <div className="lg:block hidden lg:w-6/12 w-full text-center lg:px-0 px-20 lg:mt-0 mt-12">
            <Image
                src={Illustration}
                alt="Logo"
            />
          </div>
        </div>
        </div>

        <div className="w-full custom-bg-color text-white">
          <div className="container mx-auto lg:px-20 px-12 py-8 flex lg:flex-row flex-col justify-between">
            <div className="lg:w-6/12 w-full flex items-center">
              <span className="mr-4 relative lg:w-16 w-8/12 lg:h-5/12 h-12 filter grayscale">
              <Image
                  src={arrowDown}
                  alt="Logo"
                  layout="fill"
              />
              </span>
              <span className="lg:w-72"> 
                Building a stronger and more trusted financing industry in the Philippines with the following affiliates
              </span>
            </div>
            <div className="lg:w-6/12 w-full flex lg:flex-row md:flex-row   flex-col items-center lg:space-x-12 md:space-x-4 justify-end relative ">
            
            <div className="lg:w-40 w-10/12 relative lg:h-5/6 h-20 lg:mt-0 mt-8 filter grayscale" >
            <Image
                  src={eccp}
                  alt="Logo"
                  layout="fill"
              />
            </div>
            <div className="lg:w-40 w-10/12 relative lg:h-5/6 h-20 lg:mt-0 mt-8 filter grayscale">
            <Image
                  src={affi}
                  alt="Logo"
                  layout="fill"
              />
            </div>
            <div className="lg:w-40 w-10/12 relative lg:h-4/6 md:h-16 h-20 lg:mt-0 mt-8 filter grayscale">
            <Image
                  src={fa}
                  alt="Logo"
                  layout="fill"
              />
            </div>
            </div>
          </div>
        </div>
      
      <div className="w-full bg-gray-50 py-12">
        <div className="container mx-auto  text-center ">
          <h1 className="text-4xl font-bold">Merchants</h1>
          <p className="text-base mt-4">Shop from your favourite merchants across the country and <br/> enjoy 0% interest for 5 monthly installment.</p>
          <div className="lg:flex md:grid md:grid-rows-2 md:grid-flow-col md:gap-8  flex-row justify-center lg:space-x-8 mt-12 lg:text-auto text-center">
            <div className="shadow-lg flex items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size" style={{backgroundColor:'#EADDBB'}}>
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={ohCrop}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size">
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={chuwi}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex bg-white  items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size" style={{backgroundColor:'#F0F0F0'}}>
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={cocologo}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size">
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded">
                <Image
                    src={omowhite}
                    alt="Logo"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex flex-row justify-center lg:space-x-8 mt-12 md:grid md:grid-rows-2 md:grid-flow-col md:gap-8">
            <div className="shadow-lg flex bg-white  items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size">
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={Haierlogo}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size" style={{backgroundColor:'#F6EEDA'}}>
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={freshbuyers}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex bg-white items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size">
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={aiwa}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex items-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size">
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded">
                <Image
                    src={rosieposie}
                    alt="Logo"
                />
              </div>
            </div>
          </div>
          <button 
            onClick={()=> { Router.push('/merchant') }}
            className="
                inline-block 
                px-4 
                py-2
                custom-button-color
                rounded 
                text-white
                mt-12
            ">
                See more merchants
          </button>
        </div>
      </div>

      <div className="w-full custom-bg-color text-white" id="contact">
        <div className="container mx-auto lg:px-20 px-12 py-20 lg:flex flex-row justify-between items-start">
          <div className="lg:w-6/12 w-full lg:text-left text-center">
            <h1 className="text-4xl">We’re always <br/> happy to help!</h1>
            <p className="mt-8">Your concerns are important to us. Complete the <br/> form and we will get back to you as soon as possible.</p>
            <p className="mt-8">Or send us a direct email at</p>
            <div className="mt-4 flex items-center space-x-2 lg:justify-start justify-center">
              <a href="mailto:hello@payafter.ph" className="flex items-center ">
              <Image
                  src={Mail}
                  alt="Logo"
                  width={30}
                  height={20}
              />
             &nbsp; hello@payafter.ph</a>
            </div>
          </div>
          <div className="lg:w-2/5 w-full lg:mt-0 mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 w-full">
                <label htmlFor="name" className="block text-md mb-2">Full Name</label>
                <input 
                {...register("name", { required: true })}
                id="name" 
                name="name" 
                type="text" 
                autoComplete="off" 
                className="w-full rounded px-4 py-3 text-black"
                placeholder="Maria Dela Cruz"
                required />
              </div> 
              <div className="mb-4 lg:flex flex-row items-center w-full justify-between lg:space-x-4">
                <div className="lg:w-1/2 w-full">
                  <label htmlFor="email" className="block text-md mb-2">Email address</label>
                  <input 
                  {...register("email", { required: true,pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                  id="email" 
                  name="email" 
                  type="text" 
                  autoComplete="off" 
                  className="w-full rounded px-4 py-3 text-black"
                  placeholder="your@email.com"
                  required />
                </div> 
                <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
                  <label htmlFor="number" className="block text-md mb-2">Mobile number</label>
                  <div className="flex items-center justify-between relative">
                    <span className="bg-gray-100 absolute top-0 left-0 h-full rounded text-black px-2 text-center
                    flex items-center
                    ">+63</span>
                    <input 
                    {...register("number", { required: true,pattern: /^[789][0-9]{9}$/  })}
                    id="number"
                    name="number" 
                    type="text" 
                    autoComplete="off" 
                    className=" w-full rounded py-3 pl-14 text-black"
                    placeholder="9xxxxxxxxx"
                    required />
                  </div>
                </div> 
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="subject" className="block text-md mb-2">Subject</label>
                <input 
                {...register("subject", { required: true })}
                id="subject" 
                name="subject" 
                type="text" 
                autoComplete="off" 
                className="w-full rounded px-4 py-3 text-black"
                placeholder="What’s the subject of your concern?"
                required />
              </div> 
              <div className="mb-4 w-full">
                <label htmlFor="message" className="block text-md mb-2">How can we help you?</label>
                <textarea 
                {...register("message", { required: true })}
                id="message" 
                name="message" 
                type="text" 
                autoComplete="off" 
                className="w-full h-40 rounded px-4 py-4 text-black"
                placeholder="Let us know the details of your concern"
                required />
              </div> 
              <div className="lg:flex md:flex items-center justify-between lg:space-x-4 w-full ">
                <div className={homestyle.formgroup}>
                  <input type="checkbox" id="agree"  {...register("check", { required: true })}/>
                  <label htmlFor="agree" className="flex items-center">
                    <span className="ml-4">I agree with PayAfter’s <u>Terms & Conditions</u>  and <Link href="/privacy"><u>Privacy Policy</u></Link>.</span>
                  </label>
                </div>
                <button 
                  type="submit" 
                  disabled={!formState.isValid}
                  className="block 
                  px-8 
                  py-2
                  custom-button-color
                  rounded 
                  text-white
                  disabled:opacity-75
                  lg:mx-0 mx-auto
                  lg:mt-0 mt-4
                  ">Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-12 ">
        <div className="container mx-auto  text-center lg:px-0 px-12">
          <h1 className="text-4xl font-bold">Be our partner merchant</h1>
          <p className="text-lg mt-4">Get more customers and increase your sales by signing up now!</p>
          <button 
            onClick={() =>openModal()}
            className="
                inline-block 
                px-6 
                py-3
                custom-button-color
                rounded 
                text-white
                mt-12
            ">
                Apply as merchant
          </button>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default Home;
