import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import IllustrationAlert from '../public/assets/images/Illustration-Alert.svg'

import Image from 'next/image';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 300;
  top: 0;
`;

const ModalWrapperAlert = styled.div`
  min-width: 80%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: fles;
  position: relative;
  z-index: 10;
  padding: 3rem 0;
  border-radius:10px;
  margin: auto;
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

export const Alert = ({ isAlert, setIsAlert, message ,title,great }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 300
    },
    opacity: isAlert ? 1 : 0,
    transform: isAlert ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    document.querySelector("body").style.overflow = "auto";
    if (modalRef.current === e.target) {
        setIsAlert(false)
    }
  };

  const keyPress = useCallback(
    e => {
      document.querySelector("body").style.overflow = "auto";
      if (e.key === 'Escape' && isAlert) {
        setIsAlert(false);
      }
    },
    [setIsAlert, isAlert]
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
      {isAlert ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
                <div className="ModalWrapperAlert" isAlert={isAlert}>
                  <ModalContent>
                    <div className="w-full text-center">
                      <Image
                          src={IllustrationAlert}
                          alt="Logo"
                      />
                    </div>
                    <h1 className="text-4xl font-bold mt-8">{title}</h1>
                     <p className="w-9/12 text-center mt-8">
                      {message}
                     </p>
                      <button 
                          onClick={() => setIsAlert(prev => !prev)}
                          className="block 
                          px-8 
                          py-2
                          bg-red-500
                          rounded 
                          text-white
                          lg:mx-0 mx-auto
                      ">
                         {great} 
                      </button>
                  </ModalContent>
                </div>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};