import React from "react";
import Layout from "../../layout/layout";
import Image from "next/image";
import Link from "next/link";

import { useSpring, animated } from "react-spring";
import Router from "next/router";

import Acer from "../../public/assets/images/acer/acer.png";
import Acer1 from "../../public/assets/images/acer/acer-01.png";
import Acer2 from "../../public/assets/images/acer/acer-02.png";
import Acer3 from "../../public/assets/images/acer/acer-03.png";

import Home from "../../public/assets/images/home.svg";

const AcerPage = () => {
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
      <div className="w-full xl:py-12 lg:py-8 pt-8 relative overflow-hidden custom-banner acer-color ">
        <animated.div
          style={animation}
          className="xl:max-w-screen-md customize md:max-w-3xl max-w-full max-h-full absolute xl:top-24 lg:top-24 top-52 -right-2 lg:flex md:flex sm:flex hidden"
        >
          <Image src={Acer} alt="Logo" unoptimized={true} />
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
          <Link href="/merchants/acer">
            <a className="cursor-pointer">Acer</a>
          </Link>
        </div>
        <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between ">
          <div className="xl:w-6/12 lg:w-7/12 w-full text-left lg:pl-24 pl-12 z-10 relative">
            <h1 className="lg:text-5xl text-4xl font-bold xl:text-left lg:text-left text-center pr-4">
             Explore beyond limits
            </h1>
            <h1 className="lg:text-5xl text-4xl font-bold mt-4 xl:text-left lg:text-left text-center pr-4">
              with Acer
            </h1>
            <div
              className=" py-8 2xl:hidden xl:hidden lg:hidden xl:opacity-0 lg:opacity-0 md:opacity-0 sm:opacity-0 opacity-1 block 
              md-custom-height -mr-1"
            >
              <Image src={Acer} alt="Logo" unoptimized={true} />
            </div>
            <div
              className="xl:bg-transparent lg:bg-transparent bg-white py-8 pr-8 relative md-custom-bg"
              style={{ zIndex: "1" }}
            >
              <p className="mt-4">
                Purchase any of Acer&apos;s products using PayAfter
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
                    Place your order via Tech Bytes, an authorized distributor
                    of Acer, by clicking this&nbsp;
                    <Link href="https://form.jotform.com/212332814555452">
                      <a target="_blank" className="text-blue-500 underline">
                        link
                      </a>
                    </Link>
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
                    Once your order has been confirmed, Chuwi Global will send
                    to you the PayAfter link.
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
            <h1 className="text-4xl font-bold">About Acer</h1>
            <p className="text-lg mt-4 lg:w-4/6 lg:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              aliquam quos unde veniam alias ullam sequi quidem beatae, earum
              soluta accusamus in iste nihil, praesentium cupiditate nam? Fuga,
              natus harum.
            </p>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
              <div
                className="shadow-lg flex bg-white relative  justify-self-end max-w-xs  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105
                            "
              >
                <Image src={Acer1} alt="Logo" />
              </div>
              <div className="shadow-lg flex items-center relative justify-self-center max-w-xs  justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4  transform transition duration-500 hover:scale-105">
                <Image src={Acer2} alt="Logo" />
              </div>
              <div className="shadow-lg flex bg-white relative  justify-self-start max-w-xs  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 transform transition duration-500 hover:scale-105">
                <Image src={Acer3} alt="Logo" />
              </div>
            </div>
            <button
              onClick={() => {
                Router.push("https://form.jotform.com/212332814555452");
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

export default AcerPage;
