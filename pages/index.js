import Image from 'next/image'
import eccp from '../public/assets/images/merchants/eccp.png'
import affi from '../public/assets/images/merchants/affi.png'
import fa from '../public/assets/images/merchants/fa.png'

import arrowDown from '../public/assets/images/arrow-down.svg'
import Illustration from '../public/assets/images/Illustration-home.svg'

import Mail from '../public/assets/images/mail.svg'
import Layout from '../layout/layout'
import React, {useState,useEffect} from 'react'
import { Modal } from '../component/modal'
import { useForm } from "react-hook-form"
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios';

import homestyle from '../styles/Home.module.css'

import ohCrop from '../public/assets/images/Merchant Brand Logos/oh-crop-logo.png'
import chuwi from '../public/assets/images/Merchant Brand Logos/Chuwi_logo_2019.png'
import cocologo from '../public/assets/images/Merchant Brand Logos/logo.png'
import omowhite from '../public/assets/images/Merchant Brand Logos/omo white.png'
import Haierlogo from '../public/assets/images/Merchant Brand Logos/Haier logo.png'
import freshbuyers from '../public/assets/images/Merchant Brand Logos/freshbuys-logo.png'
import aiwa from '../public/assets/images/Merchant Brand Logos/download.png'
import rosieposie from '../public/assets/images/Merchant Brand Logos/rosie posie.jpg'
import { Alert } from '../component/alert'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isAlert, setisAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register,  handleSubmit, formState ,reset ,formState:{errors}  } = useForm({ mode: 'onChange'});
  const onSubmit = async (data) => {
    setLoading(true);
    const messageData = `
          <h1 style="text-transform:capitalize"><b>${data.subject}</b></h1>
          <p>Name: ${data.name}</p>
          <p>From: ${data.email}</p>
          <p>Mobile Number: ${data.number}</p>
          <br/>
          <p>${data.message}</p>
          <br/>
          <br/>
          <span>Sent using PayAfter webiste.</span>
    `;

    const payload = {
      message: messageData,
      subject: data.subject
    }
    const result = await axios.post("/api/email", payload);
    if(result.status === 200){
      openAlert();
      document.querySelector("body").style.overflow = "hidden"
      reset()
      setLoading(false)
    }else{
      setLoading(false)
      return false
    }
  };
  const openModal = () => {
      setShowModal(prev => !prev);
      document.querySelector("body").style.overflow = "hidden"
  };

  const openAlert = () => {
    setisAlert(prev => !prev);
    document.querySelector("body").style.overflow = "hidden"
  };
  return (
    <>
      <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <Alert isAlert={isAlert} setIsAlert={setisAlert} title={'Message sent!'} great={'Okay, thanks!'}  message={'Thank you for reaching out to us. We will get back to your concern as soon as possible.'}/>

      <div className="h-full bg-red flex flex-col justify-between ">
        <div className="w-full text-black 2xl:py-0 xl:py-16 lg:py-8 py-4 lg:px-6">
          <div className="container mx-auto py-8 flex lg:flex-row flex-col items-center justify-around">

          <div className="md:w-7/12 w-10/12 xl:hidden lg:hidden flex">
              <div className="xl:pr-24 lg:pl-8 h-full mx-auto flex  relative">
                <div className="lg:mt-0 mt-8 " >
                  <Image
                      src={Illustration}
                      alt="Logo"
                      width={472}
                      height={442}
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:mt-8">
             <div className="xl:pl-24 flex xl:items-start lg:items-start items-center flex-col">
              <h1 className="lg:text-6xl text-4xl font-bold">Shop now, pay later</h1>
              <h1 className="lg:text-6xl text-4xl font-bold">with NO interest!</h1>
                <div className="xl:block lg:block hidden lg:text-xl text-lg mt-8 pr-20 lg:pr-4">
                Shop on installment for up to 5 months from your favourite stores <br className="xl:block hidden"/>- stress free. No credit card required. No hidden fees.
                </div>
                <div className="xl:hidden lg:hidden block md:w-1/2 w-10/12 text-center">
                  <p className="lg:text-xl text-lg mt-8 lg:pr-6 ">
                    Shop on installment for up to 5 months from your favourite stores - stress free.
                  </p>
                  <p className="lg:text-xl text-lg lg:pr-6 block">
                    No credit card required. No hidden fees.
                  </p>
                </div>

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
            </div>

            <div className="xl:w-8/12 lg:w-9/12 w-full xl:block lg:block hidden">
              <div className="xl:pr-24 lg:pl-8 h-full mx-auto flex  relative">
                <div className="lg:mt-0 mt-8 " >
                  <Image
                      src={Illustration}
                      alt="Logo"
                      width={472}
                      height={442}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full custom-bg-color text-white px-4 lg:px-8">
          <div className="container mx-auto py-8 flex lg:flex-row flex-col justify-around">
            <div className="w-full">
             <div className="xl:pl-24  mx-auto flex items-center xl:justify-start lg:justify-start justify-center flex-row">
              <span className="mr-4 lg:mr-8 relative filter grayscale opacity-75 lg:mb-0 mb-4">
              <Image
                  src={arrowDown}
                  alt="Logo"
                  width={25}
                  height={36}
              />
              </span>
              <span className="w-72 opacity-75 lg:text-left text-center text-base"> 
                Building a stronger and more trusted financing industry in the Philippines with the following affiliates
              </span>
              </div>
            </div>
            <div className="w-full">
              <div className="xl:pr-24 h-full mx-auto flex lg:flex-row md:flex-row flex-col items-center lg:space-x-12 md:space-x-4 lg:justify-end md:justify-center relative">
                <div className="lg:mt-0 mt-8 filter grayscale opacity-75" >
                <Image
                      src={eccp}
                      alt="Logo"
                      width={137}
                      height={55}
                  />
                </div>
                <div className="lg:mt-0 mt-8 filter grayscale opacity-75">
                <Image
                      src={affi}
                      alt="Logo"
                      width={160}
                      height={55}
                  />
                </div>
                <div className="lg:mt-0 mt-8 filter grayscale opacity-75">
                <Image
                      src={fa}
                      alt="Logo"
                      width={160}
                      height={55}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-gray-50 py-12">
        <div className="container mx-auto  text-center px-4 xl:mt-8 lg:mt-12">
          <h1 className="lg:text-6xl text-5xl font-bold">Merchants</h1>
          {/* <p className="text-base mt-4 mx-auto xl:w-1/3 lg:w-2/5">Shop from your favourite merchants across the country and enjoy 0% interest <span className="xl:inline-block lg:inline-block  block">for 5 monthly installment.</span></p> */}
          <p className="text-base mt-8 xl:w-1/3 lg:w-2/5 text-center mx-auto">Shop from your favourite stores across the country and <br className="xl:block hidden"/> enjoy  0% interest <span className="lg:inline sm:block">for 5 monthly installment.</span></p>
        
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8 xl:px-16 pt-10 place-content-center">
            <div className="shadow-lg flex items-center justify-self-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size transform transition duration-500 hover:scale-105 hover:shadow-sm" style={{backgroundColor:'#EADDBB'}}>
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={ohCrop}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex items-center justify-self-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size transform transition duration-500 hover:scale-105 hover:shadow-sm">
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={chuwi}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex bg-white  items-center justify-self-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size transform transition duration-500 hover:scale-105 hover:shadow-sm" style={{backgroundColor:'#F0F0F0'}}>
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={cocologo}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex items-center justify-center justify-self-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size transform transition duration-500 hover:scale-105 hover:shadow-sm">
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded">
                <Image
                    src={omowhite}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex bg-white  items-center justify-self-center justify-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size transform transition duration-500 hover:scale-105 hover:shadow-sm">
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={Haierlogo}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex items-center justify-center justify-self-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size transform transition duration-500 hover:scale-105 hover:shadow-sm" style={{backgroundColor:'#F6EEDA'}}>
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={freshbuyers}
                    alt="Logo"
                />
              </div>
            </div>
            <div className=" shadow-lg flex bg-white items-center justify-center justify-self-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size transform transition duration-500 hover:scale-105 hover:shadow-sm">
              <div className="relative w-4/5 h-4/5 flex items-center justify-center">
                <Image
                    src={aiwa}
                    alt="Logo"
                />
              </div>
            </div>
            <div className="shadow-lg flex items-center justify-center justify-self-center rounded lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size transform transition duration-500 hover:scale-105 hover:shadow-sm">
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
                See more merchants
          </button>
        </div>
      </div>

      <div className="w-full custom-bg-color text-white contact">
        <div className="container mx-auto py-20 lg:flex flex-row justify-around items-start">
          <div className="lg:w-6/12 w-full xl:text-left  lg:text-left  text-center mx-auto">
            <div className="lg:pl-16 px-4 mx-auto">
              <h1 className="xl:text-5xl lg:text-5xl md:text-5xl text-4xl font-bold">We’re always</h1>
              <h1 className="xl:text-5xl lg:text-5xl md:text-5xl text-4xl font-bold mt-4"> happy to help!</h1>
              <p className="mt-8 lg:mr-auto xl:px-0 lg:px-0 md:px-0 px-8">
                Your concerns are important to us. 
              <span className="xl:inline lg:inline md:inline block"> Complete the form <br className="xl:block lg:block md:block hidden"/>and we will get back to you as soon as possible.</span></p>
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
          </div>
          <div className="lg:w-5/12 w-full lg:mt-0 mt-8 mx-auto">
          <div className="xl:pr-24 lg:pr-0  px-8 md:w-full mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 w-full">
                <label htmlFor="name" className="block text-md mb-2">Full Name</label>
                <input 
                {...register("name", { required: true })}
                id="name" 
                name="name" 
                type="text" 
                maxLength="64"
                autoComplete="off" 
                className= {errors.name 
                  ? "w-full rounded px-4 py-3 text-black custom-border-color" 
                  : "w-full rounded px-4 py-3 text-black"} 
                placeholder="Maria Dela Cruz"
                required />
                {errors.name 
                  && errors.name.type === "required" 
                  && <span className="custom-text-color font-semibold">Please enter your fullname</span>}
              </div> 
              <div className="mb-4 lg:flex flex-row items-start w-full justify-between lg:space-x-4">
                <div className="lg:w-1/2 w-full">
                  <label htmlFor="email" className="block text-md mb-2">Email address</label>
                  <input 
                  {...register("email", { required: true,pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                  id="email" 
                  name="email" 
                  type="text" 
                  autoComplete="off" 
                  maxLength="64"
                  className= {errors.email 
                    ? "w-full rounded px-4 py-3 text-black custom-border-color" 
                    : "w-full rounded px-4 py-3 text-black"} 
                  placeholder="your@email.com"
                  required />
                   {errors.email 
                     && errors.email.type === "required" 
                     && <span className="custom-text-color font-semibold">Please enter email</span>}
                    {errors.email 
                      && errors.email.type === "pattern" 
                      && <span className="custom-text-color font-semibold">Please enter valid email</span> }
                </div> 
                <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
                  <label htmlFor="number" className="block text-md mb-2">Mobile number</label>
                  <div className="flex items-center justify-between relative">
                    <span 
                      className= "bg-gray-100 block top-0 left-0 h-full text-black  text-center flex items-center pointer-events-none p-3 border border-r-0 rounded-l"
                    >+63</span>
                    <input 
                    {...register("number", { required: true,pattern: /^[789][0-9]{9}$/  })}
                    id="number"
                    name="number" 
                    type="text" 
                    maxLength="10"
                    autoComplete="off" 
                    className= {errors.number 
                      ? "w-full rounded px-4 py-3 text-black custom-border-color " 
                      : "w-full rounded-r px-4 py-3 text-black border"}
                    placeholder="9xxxxxxxxx"
                    required />
                    
                  </div>
                  {errors.number 
                      && errors.number.type === "required" 
                      && <span className="custom-text-color font-semibold">Please enter mobile number</span>}
                     {errors.number 
                        && errors.number.type === "pattern" 
                        && <span className="custom-text-color font-semibold">Please enter valid mobile number</span> }
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
                maxLength="64"
                className= {errors.subject 
                  ? "w-full rounded px-4 py-3 text-black custom-border-color" 
                  : "w-full rounded px-4 py-3 text-black"} 
                placeholder="What’s the subject of your concern?"
                required />
                {errors.subject 
                  && errors.subject.type === "required" 
                  && <span className="custom-text-color font-semibold">Please enter subject</span>}
              </div> 
              <div className="mb-4 w-full">
                <label htmlFor="message" className="block text-md mb-2">How can we help you?</label>
                <textarea 
                {...register("message", { required: true })}
                id="message" 
                name="message" 
                type="text" 
                autoComplete="off" 
                maxLength="300"
                className= {errors.message 
                  ? "w-full rounded px-4 py-3 h-32 text-black custom-border-color" 
                  : "w-full rounded px-4 py-3 h-32 text-black"} 
                placeholder="Let us know the details of your concern"
                required />
                {errors.message 
                  && errors.message.type === "required" 
                  && <span className="custom-text-color font-semibold">Please write your message</span>}
              </div> 
              <div className="lg:flex md:flex items-center justify-between lg:space-x-4 w-full ">
                <div className={homestyle.formgroup}>
                  <input type="checkbox" id="agree"  {...register("check", { required: true })}/>
                  <label htmlFor="agree" className="flex items-center">
                    {/* <span className="ml-4 xl:block lg:block md:block hidden">I agree with PayAfter’s <Link href="/privacy?terms"><u>Terms & Conditions</u></Link>  and <Link href="/privacy"><u>Privacy Policy</u></Link></span> */}
                    <span className="ml-4 ">I agree with PayAfter’s <Link href="/privacy?terms"><u>Terms & Policy</u></Link></span>
                  </label>
                </div>
                <button 
                  type="submit" 
                  disabled={!formState.isValid || loading}
                  className="block 
                  px-12 
                  py-3
                  custom-button-color
                  rounded 
                  text-white
                  disabled:opacity-75
                  lg:mx-0 md:mx-0 mx-auto
                  lg:mt-0 md:mt-0 mt-12
                  hover:bg-red-500
                  hover:shadow-md
                  transition-all
                  duration-300
                  "> 
                 {loading ? "Sending....": "Submit"}
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-12 ">
        <div className="container mx-auto  text-center">
        <div className="w-4/5 mx-auto">
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
                hover:bg-red-500
                hover:shadow-md
                transition-all
                duration-300
            ">
                Apply as merchant
          </button>
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default Home;
