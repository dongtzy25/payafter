import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Illustration from '../public/assets/images/Illustration-modal.svg'
import IllustrationAlert from '../public/assets/images/Illustration-Alert.svg'

import Image from 'next/image';
import { useForm } from "react-hook-form";
import homestyle from '../styles/Home.module.css'

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
  width: 100vw;
  height: 100vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: fles;
  position: relative;
  z-index: 10;
`;

const ModalWrapperAlert = styled.div`
  width: 30vw;
  height: 65vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: fles;
  position: relative;
  z-index: 10;
  border-radius:10px;
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
    transform: showModal ? `translateY(0%)` : `translateY(-50%)`
  });

  const closeModal = e => {
    document.querySelector("body").style.overflow = "auto";
    if (modalRef.current === e.target) {
      setShowModal(false);
     
    }
  };

  const { register,  handleSubmit, formState,formState:{errors}  } = useForm({ mode: 'onChange'});

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
                      <h1 className="lg:text-4xl text-2xl" style={{font:' normal normal 800 48px/66px Nunito Sans'}}>Join us now!</h1>
                      <p className="mt-4 lg:w-1/2 w-full ">Be our partner merchant and gain access to our Cebuana Lhuillier customer base.</p>
                      <div className="w-full text-left lg:px-0 px-12 mt-12">
                      <Image
                          src={Illustration}
                          alt="Logo"
                      />
                  </div>
                  </div>
                  <div className="lg:w-1/2 w-full lg:mt-0 mt-8">
                      <form >
                      <div className="mb-4 w-full">
                          <label htmlFor="name" className="block text-base mb-2">Full Name</label>
                          <input 
                          id="name" 
                          name="name" 
                          type="text"
                          {...register("name", { required: true })}
                          autoComplete="off" 
                          className= {errors.name 
                            ? "w-full rounded px-4 py-3 text-black custom-border-color" 
                            : "w-full rounded px-4 py-3 text-black border"}
                          placeholder="Maria Dela Cruz"
                          required />
                          {errors.name 
                            && errors.name.type === "required" 
                            && <span className="custom-text-color font-semibold">Please enter your full name</span>}
                      </div> 
                      <div className="mb-4 lg:flex flex-row items-start w-full justify-between lg:space-x-4">
                          <div className="lg:w-1/2 w-full">
                          <label htmlFor="email" className="block text-base mb-2">Email address</label>
                          <input 
                          id="email" 
                          name="email" 
                          type="text" 
                          {...register("email", { required: true,pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                          autoComplete="off" 
                          className= {errors.email 
                            ? "w-full rounded px-4 py-3 text-black custom-border-color" 
                            : "w-full rounded px-4 py-3 text-black border"}
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
                          <label htmlFor="number" className="block text-base mb-2">Mobile number</label>
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
                              className= {errors.number 
                                ? "w-full rounded px-4 py-3 text-black custom-border-color" 
                                : "w-full rounded px-4 py-3 text-black border"}
                              placeholder="9xxxxxxxxx"
                              required />
                               {errors.number 
                                  && errors.number.type === "required" 
                                  && <span className="custom-text-color font-semibold">Please enter mobile number</span>}
                                {errors.number 
                                    && errors.number.type === "pattern" 
                                    && <span className="custom-text-color font-semibold">Please enter valid mobile number</span> }
                          </div>
                          </div> 
                      </div>
                      <div className="mb-4 lg:flex flex-row items-start w-full justify-between lg:space-x-4">
                          <div className="lg:w-1/2 w-full">
                              <label htmlFor="company" className="block text-base mb-2">Company</label>
                              <input 
                              {...register("company", { required: true })}
                              id="company" 
                              name="company" 
                              type="text" 
                              autoComplete="off" 
                              className= {errors.company 
                                ? "w-full rounded px-4 py-3 text-black custom-border-color" 
                                : "w-full rounded px-4 py-3 text-black border"}
                              placeholder="Your Company"
                              required />
                              {errors.company 
                                && errors.company.type === "required" 
                                && <span className="custom-text-color font-semibold">Please enter your company name</span>}
                          </div> 
                          <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
                              <label htmlFor="role" className="block text-base mb-2">Role</label>
                              <input 
                              {...register("role", { required: true })}
                              id="role" 
                              name="role" 
                              type="text" 
                              autoComplete="off" 
                              className= {errors.role 
                                ? "w-full rounded px-4 py-3 text-black custom-border-color" 
                                : "w-full rounded px-4 py-3 text-black border"}
                              placeholder="Role"
                              required />
                                {errors.role 
                                && errors.role.type === "required" 
                                && <span className="custom-text-color font-semibold">Please enter your role</span>}
                          </div> 
                      </div>
                      <div className="mb-4 lg:flex flex-row items-start w-full justify-between lg:space-x-4">
                          <div className="lg:w-1/2 w-full">
                              <label htmlFor="website" className="block text-base mb-2">Website</label>
                              <input 
                              {...register("website", { required: true })}
                              id="website" 
                              name="website" 
                              type="text" 
                              autoComplete="off" 
                              className= {errors.website 
                                ? "w-full rounded px-4 py-3 text-black custom-border-color" 
                                : "w-full rounded px-4 py-3 text-black border"}
                              placeholder="www.website.com"
                              required />
                               {errors.website 
                                && errors.website.type === "required" 
                                && <span className="custom-text-color font-semibold">Please enter your role</span>}
                          </div> 
                          <div className="lg:w-1/2 w-full lg:mt-0 mt-4">
                              <label htmlFor="industry" className="block text-base mb-2">Industry</label>
                              <select 
                              {...register("industry", { required: true })}
                              id="industry"
                              name="industry" 
                              type="text" 
                              autoComplete="off" 
                              className= {errors.website 
                                ? "w-full rounded px-4 py-3 text-black custom-select-arrow custom-border-color" 
                                : "w-full rounded px-4 py-3 text-black border custom-select-arrow"}
                              placeholder="Select industry"
                              required>
                                <option value="IT">I.T</option>
                                <option value="Doctors">Doctors</option>
                                <option value="Lawyers">Lawyers</option>
                              </select>
                              {/* <input id="industry" name="industry" type="text" autoComplete="off" 
                              className="w-full rounded px-4 py-3 text-black border"
                              placeholder="Select industry"
                              required /> */}
                               {errors.industry 
                                && errors.industry.type === "required" 
                                && <span className="custom-text-color font-semibold">Please enter your role</span>}
                          </div> 
                      </div>
                      
                      <div className="lg:flex items-center justify-between lg:space-x-4 w-full ">
                          <div className={homestyle.formgroup2}>
                            <input type="checkbox" id="agree"  {...register("check", { required: true })}/>
                            <label htmlFor="agree" className="flex items-center">
                              <span className="ml-4">I agree with <u>PayAfter’s Terms & Conditions</u>  and <u>Privacy Policy</u>.</span>
                            </label>
                          </div>
                          <button 
                              type="submit" 
                              disabled={!formState.isValid}
                              className="block 
                              px-8 
                              py-2
                              bg-red-500
                              rounded 
                              text-white
                              disabled:opacity-75
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
              
                <div className="pt-2 absolute top-4 right-8 z-3" onClick={() => setShowModal(prev => !prev)}>
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