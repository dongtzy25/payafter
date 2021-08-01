import Image from 'next/image'
import Logo from '../public/assets/images/PayAfter-Logo.svg'
import eccp from '../public/assets/images/merchants/eccp.png'
import affi from '../public/assets/images/merchants/affi.png'
import fa from '../public/assets/images/merchants/fa.png'


import Mail from '../public/assets/images/mail.svg'
import Layout from '../layout/layout'
import React, {useState} from 'react'
import { Modal } from '../component/modal'

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
      setShowModal(prev => !prev);
      document.querySelector("body").style.overflow = "hidden";
  };
  return (
    <>
      <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="w-full py-12">
        <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between">
        <div className="lg:hidden block  lg:w-6/12 w-full text-center lg:px-0 px-20 ">
            <Image
                src={Logo}
                alt="Logo"
            />
          </div>
          <div className="lg:w-6/12 w-full lg:px-20 px-12 lg:mt-0 mt-12">
            <h1 className="lg:text-6xl text-4xl font-bold">Shop now, pay later with NO interest!</h1>
            <p className="lg:text-xl text-lg mt-8 lg:pr-6">Shop on installment for up to 5 months from your favourite stores  - stress free. No credit card required. No hidden fees.</p>
          </div>
          <div className="lg:block hidden lg:w-6/12 w-full text-center lg:px-0 px-20 lg:mt-0 mt-12">
            <Image
                src={Logo}
                alt="Logo"
            />
          </div>
        </div>
      </div> 

      <div className="w-full custom-bg-color text-white">
        <div className="container mx-auto lg:px-20 px-12 py-8 flex lg:flex-row flex-col justify-between">
          <div className="lg:w-6/12 w-full flex items-center">
            <span className="mr-8 relative lg:w-16 w-8/12 lg:h-full h-12">
            <Image
                src={"https://www.torproject.org/static/fonts/fontawesome/png/white/solid/arrow-down.png"}
                alt="Logo"
                layout="fill"
            />
            </span>
            <span className="lg:w-72"> 
              Building a stronger and more trusted financing industry in the Philippines with the following affiliates
            </span>
          </div>
          <div className="lg:w-6/12 w-full flex lg:flex-row flex-col items-center lg:space-x-12 justify-end relative ">
           
           <div className="lg:w-44 w-10/12 relative lg:h-full h-20 lg:mt-0 mt-8 filter grayscale">
           <Image
                src={eccp}
                alt="Logo"
                layout="fill"
            />
           </div>
           <div className="lg:w-44 w-10/12 relative lg:h-full h-20 lg:mt-0 mt-8 filter grayscale">
           <Image
                src={affi}
                alt="Logo"
                layout="fill"
            />
           </div>
           <div className="lg:w-44 w-10/12 relative lg:h-5/6 h-20 lg:mt-0 mt-8 filter grayscale">
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
          <p className="text-lg mt-4">Shop from your favourite merchants across the country and <br/> enjoy 0% interest for 5 monthly installment.</p>
          <div className="lg:flex flex-row justify-center lg:space-x-12 mt-12 lg:text-auto text-center">
            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-4">Merchant 1</div>
            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-4">Merchant 2</div>
            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-4">Merchant 3</div>
            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-4">Merchant 4</div>
          </div>
          <div className="lg:flex flex-row justify-center lg:space-x-12 mt-12">
            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-4">Merchant 5</div>
            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-4">Merchant 6</div>
            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-4 ">Merchant 7</div>
            <div className="w-60 h-40 shadow-lg flex items-center justify-center bg-gray-100 rounded lg:mx-0 mx-auto lg:mb-0 mb-4">Merchant 8</div>
          </div>
          <button 
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

      <div className="w-full custom-bg-color text-white">
        <div className="container mx-auto lg:px-20 px-12 py-20 lg:flex flex-row justify-between items-start">
          <div className="lg:w-6/12 w-full">
            <h1 className="text-4xl">We’re always <br/> happy to help!</h1>
            <p className="mt-8">Your concerns are important to us. Complete the <br/> form and we will get back to you as soon as possible.</p>
            <p className="mt-8">Or send us a direct email at</p>
            <div className="mt-4 flex items-center space-x-2">
            <Image
                src={Mail}
                alt="Logo"
                width={30}
                height={20}
            />
               <p>help@payafter.ph</p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full lg:mt-0 mt-8">
            <form >
              <div className="mb-4 w-full">
                <label htmlFor="name" className="block text-xl mb-2">Full Name</label>
                <input id="name" name="name" type="text" autoComplete="off" 
                className="w-full rounded px-4 py-3 text-black"
                placeholder="Maria Dela Cruz"
                required />
              </div> 
              <div className="mb-4 lg:flex flex-row items-center w-full justify-between">
                <div className="lg:w-1/2 w-full">
                  <label htmlFor="email" className="block text-xl mb-2">Email address</label>
                  <input id="email" name="email" type="text" autoComplete="off" 
                  className="w-full rounded px-4 py-3 text-black"
                  placeholder="your@email.com"
                  required />
                </div> 
                <div className="lg:mt-0 mt-4">
                  <label htmlFor="number" className="block text-xl mb-2">Mobile number</label>
                  <div className="flex items-center justify-between relative">
                    <span className="bg-gray-100 absolute top-0 left-0 h-full rounded text-black px-2 text-center
                    flex items-center
                    ">+63</span>
                    <input id="number" name="number" type="text" autoComplete="off" 
                    className="lg:w-60 w-full rounded py-3 pl-14 text-black"
                    placeholder="your@email.com"
                    required />
                  </div>
                </div> 
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="subject" className="block text-xl mb-2">Subject</label>
                <input id="subject" name="subject" type="text" autoComplete="off" 
                className="w-full rounded px-4 py-3 text-black"
                placeholder="What’s the subject of your concern?"
                required />
              </div> 
              <div className="mb-4 w-full">
                <label htmlFor="message" className="block text-xl mb-2">How can we help you?</label>
                <textarea id="message" name="message" type="text" autoComplete="off" 
                className="w-full h-40 rounded px-4 py-4 text-black"
                placeholder="Let us know the details of your concern"
                required />
              </div> 
              <div className="lg:flex items-center justify-between lg:space-x-4 w-full ">
                <label className="flex items-center">
                <input className="mr-4 h-8 w-8" type="checkbox"/>
                <span className="text-md">
                    I agree with <u>PayAfter’s Terms & Conditions</u>  and <u>Privacy Policy</u>.
                  </span>
                </label>
                <button type="submit" className="block 
              px-8 
              py-2
              custom-button-color
              rounded 
              text-white
              opacity-75
              lg:mx-0 mx-auto
              lg:mt-0 mt-4
              ">Submit</button>
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
