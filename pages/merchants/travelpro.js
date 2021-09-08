import React, { useState } from "react";
import Layout from "../../layout/layout";
import Image from "next/image";
import Travelpro from "../../public/assets/images/travelpro/travelpro.png";
import Travelpro1 from "../../public/assets/images/travelpro/travelpro01.png";
import Travelpro2 from "../../public/assets/images/travelpro/travelpro02.png";
import Travelpro3 from "../../public/assets/images/travelpro/travelpro03.png";
import Link from "next/link";

import Home from "../../public/assets/images/home.svg";
import { useSpring, animated } from "react-spring";

const TravelPro = () => {
  const animation = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0)" },
    config: {
      duration: 300,
      tension: 500,
      friction: 80,
    },
  });
  return (
    <Layout>
      <div className="w-full xl:py-8 lg:py-8 pt-8 relative overflow-hidden custom-banner travelpro-color">
        <animated.div
          style={animation}
          className="absolute xl:top-12 lg:top-12 lg:right-16 right-32 lg:flex hidden custom-right"
        >
          <Image src={Travelpro} alt="Logo" width={475} height={552} />
        </animated.div>
        <div className="container mx-auto mb-8 lg:pl-24 pl-12">
          <Link href="/">
            <a className="cursor-pointer">
              <Image src={Home} alt="Logo" width={15} height={15} />
            </a>
          </Link>
          <span className="px-4">/</span>
          <Link href="/merchant">
            <a className="cursor-pointer">Merchants</a>
          </Link>
          <span className="px-4">/</span>
          <Link href="/merchants/jbl">
            <a className="cursor-pointer">TravelPro</a>
          </Link>
        </div>
        <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
          <div className="xl:w-6/12 lg:w-7/12 w-full text-left z-10 relative ">
            <h1 className="lg:text-5xl text-4xl font-bold xl:text-left lg:text-left text-center  lg:pr-4 xl:pl-24 lg:pl-24">
                Love every ride while
            </h1>
            <h1 className="lg:text-5xl text-4xl font-bold mt-4 xl:text-left lg:text-left text-center lg:pr-4 xl:pl-24 lg:pl-24">
                going extra miles
            </h1>
            <div
              className="py-8 xl:hidden lg:hidden block text-center relative xl:px-0 lg:px-0 px-8"
            >
              <Image src={Travelpro} alt="Logo" width={475} height={552}/>
            </div>
            <div
              className="xl:bg-transparent lg:bg-transparent bg-white py-8 pr-8 relative md-custom-bg xl:pl-24 lg:pl-24 pl-12"
              style={{ zIndex: "1" }}
            >
              <p className="mt-4">
                Enjoy your ride with TravelPro bikes using PayAfter
              </p>
              <div className="relative block w-full border-solid">
                <div className="relative pl-12 mt-4">
                  <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">
                    1
                  </span>
                  <p className="mb-4 pt-1">
                    Activate your PayAfter membership.
                  </p>
                  <div className=" p-4 bg-gray-100 rounded shadow-sm">
                    <div>
                      To enjoy perks and benefits, make sure your company is in
                      partnership with PayAfter.
                    </div>
                  </div>
                </div>
                <div className="relative pl-12 mt-8 ">
                  <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">
                    2
                  </span>
                  <p className="mb-4 pt-1">
                    Place your order via Tech Bytes, an authorized distributor of TravelPro, by clicking this&nbsp; 
                    <Link href="https://form.jotform.com/212332560100436">
                      <a target="_blank" className="text-blue-500 underline">
                        link
                      </a>
                    </Link>
                    .
                  </p>
                </div>
                <div className="relative pl-12 mt-8 ">
                  <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">
                    3
                  </span>
                  <p className="mb-4 pt-1">
                    Login with PayAfter to complete the transaction.

                    {/* Send them a direct message via Facebook Messenger that
                    contains your order details. Don’t forget to indicate
                    PayAfter as your payment method. */}
                  </p>
                </div>
                {/* <div className="relative pl-12 mt-8 ">
                  <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">
                    4
                  </span>
                  <p className="mb-4 pt-1">
                    Once your order has been confirmed, JBL Philippines will
                    send to you the PayAfter link.
                  </p>
                </div>
                <div className="relative pl-12 mt-8 ">
                  <span className="absolute top-0 left-0 rounded-full w-8 h-8 text-white flex items-center justify-center bg-gray-700">
                    5
                  </span>
                  <p className="mb-4 pt-1">
                    Login with PayAfter to complete the transaction.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-12 ">
        <div className="container mx-auto  text-center">
          <div className="w-4/5 mx-auto">
            <h1 className="text-4xl font-bold">About TravelPro</h1>
            <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">
                It’s the details that matter, so that your bike just gets out of the way and lets you enjoy the ride
            </p>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
              <div
                className="shadow-lg flex  relative justify-self-end max-w-xs items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105
                            "
              >
                <Image src={Travelpro1} alt="Logo" />
              </div>
              <div className="shadow-lg flex items-center relative justify-self-center max-w-xs justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4  transform transition duration-500 hover:scale-105">
                <Image src={Travelpro2} alt="Logo" />
              </div>
              <div className="shadow-lg flex relative justify-self-start max-w-xs items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4  transform transition duration-500 hover:scale-105">
                <Image src={Travelpro3} alt="Logo" />
              </div>
            </div>
            <button
              onClick={() => {
                window.open("https://form.jotform.com/212332560100436").focus();
              }}
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
                            "
            >
              Shop now and pay later
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TravelPro;
