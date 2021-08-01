import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Logo from '../public/assets/images/PayAfter-Logo.svg'
import Image from 'next/image';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  top: 0;
`;

const ModalWrapper = styled.div`
  width: 70vw;
  height: 70vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: fles;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }

  width:100%
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    document.querySelector("body").style.overflow = "auto";
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      document.querySelector("body").style.overflow = "auto";
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {/* <ModalImg src={require('./modal.jpg')} alt='camera' /> */}
              <ModalContent>
              <div className="w-full text-black overflow-y-auto">
                <div className="container mx-auto lg:px-20 px-8 lg:py-20 py-12 lg:flex flex-row justify-between items-start">
                <div className="lg:w-6/12 w-full lg:text-left text-center">
                    <h1 className="lg:text-4xl text-2xl">Join us now!</h1>
                    <p className="mt-4 lg:w-1/2 w-full">Be our partner merchant and gain access to our Cebuana Lhuillier customer base.</p>
                    <div className="lg:w-6/12 w-full text-center lg:px-0 px-12">
                    <Image
                        src={Logo}
                        alt="Logo"
                    />
                </div>
                </div>
                <div className="lg:w-1/2 w-full lg:mt-0 mt-8">
                    <form >
                    <div className="mb-4 w-full">
                        <label htmlFor="name" className="block text-xl mb-2">Full Name</label>
                        <input id="name" name="name" type="text" autoComplete="off" 
                        className="w-full rounded px-4 py-3 text-black border"
                        placeholder="Maria Dela Cruz"
                        required />
                    </div> 
                    <div className="mb-4 lg:flex flex-row items-center w-full justify-between lg:space-x-4">
                        <div className="lg:w-1/2 w-full">
                        <label htmlFor="email" className="block text-xl mb-2">Email address</label>
                        <input id="email" name="email" type="text" autoComplete="off" 
                        className="w-full rounded px-4 py-3 text-black border"
                        placeholder="your@email.com"
                        required />
                        </div> 
                        <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
                        <label htmlFor="number" className="block text-xl mb-2">Mobile number</label>
                        <div className="flex items-center justify-between relative">
                            <span className="bg-gray-100 absolute top-0 left-0 h-full rounded text-black px-2 text-center
                            flex items-center
                            ">+63</span>
                            <input id="number" name="number" type="text" autoComplete="off" 
                            className="w-full rounded py-3 pl-14 text-black border"
                            placeholder="9xxxxxxxxx"
                            required />
                        </div>
                        </div> 
                    </div>
                    <div className="mb-4 lg:flex flex-row items-center w-full justify-between lg:space-x-4">
                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="company" className="block text-xl mb-2">Company</label>
                            <input id="company" name="company" type="text" autoComplete="off" 
                            className="w-full rounded px-4 py-3 text-black border"
                            placeholder="Your Company"
                            required />
                        </div> 
                        <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
                            <label htmlFor="role" className="block text-xl mb-2">Role</label>
                            <input id="role" name="role" type="text" autoComplete="off" 
                            className="w-full rounded px-4 py-3 text-black border"
                            placeholder="Role"
                            required />
                        </div> 
                    </div>
                    <div className="mb-4 lg:flex flex-row items-center w-full justify-between lg:space-x-4">
                        <div className="lg:w-1/2 w-full">
                            <label htmlFor="website" className="block text-xl mb-2">Website</label>
                            <input id="website" name="website" type="text" autoComplete="off" 
                            className="w-full rounded px-4 py-3 text-black border"
                            placeholder="www.website.com"
                            required />
                        </div> 
                        <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
                            <label htmlFor="industry" className="block text-xl mb-2">Industry</label>
                            <input id="industry" name="industry" type="text" autoComplete="off" 
                            className="w-full rounded px-4 py-3 text-black border"
                            placeholder="Select industry"
                            required />
                        </div> 
                    </div>
                    
                    <div className="lg:flex items-center justify-between lg:space-x-4 w-full ">
                        <label className="flex items-center">
                        <input className="mr-4 h-8 w-8" type="checkbox"/>
                        <span className="text-md">
                            I agree with <u className="text-red-500">PayAfter’s Terms & Conditions</u> 
                             and <u className="text-red-500">Privacy Policy</u>.
                        </span>
                        </label>
                        <button 
                            type="submit" 
                            className="block 
                            px-8 
                            py-2
                            bg-red-500
                            rounded 
                            text-white
                            opacity-75
                            lg:mx-0 mx-auto
                            lg:mt-0 mt-4
                        ">
                            Submit
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
              </ModalContent>
              <div className="pt-2 absolute top-2 right-4 z-3" onClick={() => setShowModal(prev => !prev)}>
                <svg
                    className="w-6 h-6 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                 >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
              </div>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};