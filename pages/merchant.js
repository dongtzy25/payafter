import React, { useState } from "react";
import Layout from "../layout/layout";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "../component/modal";

import merchant from "../public/assets/images/Illustration-merchant.svg";
import soon from "../public/assets/images/coming-soon.png";

import homestyle from "../styles/Home.module.css";
import Router from "next/router";

import ohCrop from "../public/assets/images/Merchant Brand Logos/oh-crop-logo.png";
import chuwi from "../public/assets/images/Merchant Brand Logos/Chuwi_logo_2019.png";
import cocologo from "../public/assets/images/Merchant Brand Logos/logo.png";
import omowhite from "../public/assets/images/Merchant Brand Logos/omo white.png";
import Haierlogo from "../public/assets/images/Merchant Brand Logos/Haier logo.png";
import freshbuyers from "../public/assets/images/Merchant Brand Logos/freshbuys-logo.png";
import aiwa from "../public/assets/images/Merchant Brand Logos/download.png";
import rosieposie from "../public/assets/images/Merchant Brand Logos/rosie posie.jpg";
import itel from "../public/assets/images/Merchant Brand Logos/itel.png";
import jbl from "../public/assets/images/Merchant Brand Logos/jbl.png";
import zonixx from "../public/assets/images/Merchant Brand Logos/zonixx.jpeg";
import travelPro from "../public/assets/images/Merchant Brand Logos/travelPro.jpeg";
import zagana from "../public/assets/images/Merchant Brand Logos/zagana logo.png";
import condoCare from "../public/assets/images/Merchant Brand Logos/condocare logo.png";
import saveLink from "../public/assets/images/Merchant Brand Logos/savelink logo.png";
import CLJ from "../public/assets/images/Merchant Brand Logos/clj logo.png";
import brickWood from "../public/assets/images/Merchant Brand Logos/brickwood logo.png";



const Merchant = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    document.querySelector("body").style.overflow = "hidden";
  };

  const _handleChange = (event) => {
    if (event.target.value != "") {
      //  window.scrollTo({ top: window.scrollY + document.querySelector(`.${event.target.value}`).getBoundingClientRect().top - 120, behavior: 'smooth' })
      const content = document.querySelectorAll(".category");
      if (event.target.value == "all") {
        content.forEach((c) => {
          c.classList.remove("hidden");
          c.classList.add("block");
        });
      } else {
        content.forEach((c) => {
          if (c.classList.value.includes(event.target.value)) {
            c.classList.remove("hidden");
            c.classList.add("block");
          } else {
            c.classList.add("hidden");
          }
        });
      }
    }
  };
  return (
    <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className={homestyle.firstfold}>
        <div className="w-full lg:py-12">
          <div className="container mx-auto flex lg:flex-row flex-col items-start justify-between">
            <div className="lg:hidden block lg:w-6/12 w-11/12 lg:text-left text-center mx-auto">
              <Image src={merchant} alt="Logo" />
            </div>
            <div className="xl:pl-24 flex xl:items-start lg:items-start items-center flex-col mt-8 lg:w-7/12 mx-auto">
              <h1 className="lg:text-6xl lg:pl-12 xl:pl-0 text-4xl font-bold">
                Available stores
              </h1>
              <p className="lg:text-xl text-lg mt-8 xl:w-full w-5/6 lg:text-left text-center mx-auto">
                Shop from your favourite stores across the country and enjoy{" "}
                <br className="xl:block hidden" /> 0% interest{" "}
                <span className="lg:inline sm:block">
                  for 5 monthly installment.
                </span>
              </p>
            </div>
            <div className="lg:block hidden lg:w-6/12 w-full text-center lg:px-0 px-20 lg:mt-0 mt-12">
              <Image src={merchant} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-12 ">
        <div className="container mx-auto  text-center px-4 lg:pl-12  relative">
          <div className="block">
            <div className="lg:w-1/2 w-full lg:mt-0 mt-4 flex lg:flex-row flex-col items-center lg:space-x-4">
              <label
                htmlFor="industry"
                className="lg:w-32 w-full text-base lg:text-left text-center"
              >
                Select category
              </label>
              <select
                id="industry"
                name="industry"
                type="text"
                autoComplete="off"
                className="lg:w-72 md:w-5/12 w-full rounded px-4 py-3 text-black border custom-select-arrow"
                style={{ backgroundColor: "#fff" }}
                onChange={_handleChange}
              >
                <option value="all">All</option>
                <option value="beauty">Beauty</option>
                <option value="electronics">Electronics & gadgets</option>
                <option value="fashion">Fashion</option>
                <option value="food">Groceries</option>
                <option value="health">Health</option>
                <option value="hotelsandresorts">Hotels and resorts</option>
                <option value="restaurant">Restaurants</option>
                <option value="services">Services</option>
                <option value="sports">Transportation</option>
              </select>
            </div>
          </div>
          <div className="block mt-12 beauty category">
            <h1 className="text-4xl font-bold lg:text-left text-center">
              Beauty
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
              <Link href="/merchants/omowhite">
                <a
                  className="shadow-lg flex items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                >
                  <div className="relative  merchant-logo-size  flex items-center justify-center overflow-hidden rounded">
                    <Image src={omowhite} alt="Logo" />
                  </div>
                </a>
              </Link>
              <Link href="/merchants/rosieposie">
                <a
                  className="shadow-lg flex items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                >
                  <div className="relative merchant-logo-size flex items-center justify-center overflow-hidden rounded">
                    <Image src={rosieposie} alt="Logo" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="block mt-12 electronics category">
            <h1 className="text-4xl font-bold lg:text-left text-center">
              Electronics & gadgets
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
              <Link href="/merchants/aiwa">
                <a
                  className="shadow-lg flex bg-white items-center  justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                >
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={aiwa} alt="Logo" />
                  </div>
                </a>
              </Link>
              <Link href="/merchants/chuwi">
                  <a
                    className="shadow-lg flex bg-white items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                  >
                      <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                        <Image src={chuwi} alt="Logo" />
                      </div>
                  </a>
              </Link>
              <Link href="/merchants/haier">
                <a
                  className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                >
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={Haierlogo} alt="Logo" />
                  </div>
                </a>
              </Link>
              <Link href="/merchants/itel">
                <a
                  className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                >
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={itel} alt="Logo" />
                  </div>
                </a>
              </Link>
              <Link href="/merchants/jbl">
                  <a
                    style={{ backgroundColor: "rgb(254,88,42)" }}
                    className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                  >
                      <div className="relative flex items-center justify-center">
                        <Image src={jbl} alt="Logo" width={140} height={75} />
                      </div>
                  </a>
              </Link>
            </div>
          </div>
          <div className="block mt-12 fashion category">
            <h1 className="text-4xl font-bold lg:text-left text-center">
             Fashion
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
              <Link href="/merchants/cljewels">
                <a
                  className="shadow-lg flex bg-white items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                >
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={CLJ} alt="Logo" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="block mt-12 food category">
            <h1 className="text-4xl font-bold lg:text-left text-center">
             Groceries
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
              <Link href="/merchants/freshbuys">
                <a
                  className="shadow-lg flex items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                  style={{ backgroundColor: "#F6EEDA" }}
                >
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={freshbuyers} alt="Logo" />
                  </div>
                </a>
              </Link>
              <Link href="/merchants/ohcrop">
                <a
                  className="shadow-lg flex items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                  style={{ backgroundColor: "#EADDBB" }}
                >
                    <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                      <Image src={ohCrop} alt="Logo" />
                    </div>
                  </a>
                </Link>
                <Link href="/merchants/zagana">
                <a
                  className="shadow-lg flex items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                  style={{ backgroundColor: "#FACC09" }}
                >
                    <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                      <Image src={zagana} alt="Logo" />
                    </div>
                  </a>
                </Link>
            </div>
          </div>
       
          <div className="block mt-12 hotelsandresorts category">
            <h1 className="text-4xl font-bold lg:text-left text-center">
              Hotels and resorts
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
              <Link href="/merchants/cocotel">
              <a
                className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                style={{ backgroundColor: "#F0F0F0" }}
                onClick={() => {
                  Router.push("/merchants/cocotel");
                }}
              >
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={cocologo} alt="Logo" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="block mt-12 health category">
            <h1 className="text-4xl font-bold lg:text-left text-center">
             Health
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
              <Link href="/merchants/savelink">
                <a
                  className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                >
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={saveLink} alt="Logo" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="block mt-12 restaurant category">
            <h1 className="text-4xl font-bold lg:text-left text-center">
            Restaurants
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
              <Link href="/merchants/brickwood">
                <a
                  className="shadow-lg flex bg-white items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                 
                >
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={brickWood} alt="Logo" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="block mt-12 services category">
            <h1 className="text-4xl font-bold lg:text-left text-center">
            Services
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
              <Link href="/merchants/condocare">
                <a
                  className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm"
                >
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={condoCare} alt="Logo" />
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="block mt-12 sports category">
            <h1 className="text-4xl font-bold lg:text-left text-center">
              Transportation
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
            <Link href="/merchants/travelpro">
                <a 
                className="shadow-lg flex bg-white  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm">
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={travelPro} alt="Logo" />
                  </div>
                </a>
              </Link>
              <Link href="/merchants/zonixx">
                <a 
                className="shadow-lg flex bg-black  items-center justify-center rounded-lg lg:mx-0 mx-auto lg:mb-0 mb-4 merchant-logo-size cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-sm">
                  <div className="relative w-4/5 h-4/5 flex items-center justify-center mx-auto">
                    <Image src={zonixx} alt="Logo" />
                  </div>
                </a>
              </Link>
            
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-12 text-black px-12">
        <div className="container mx-auto text-center lg:px-0 px-12 lg:flex flex-row items-start justify-between">
          <div className="flex items-center justify-center text-center relative lg:w-6/12">
            <div className="relative xl:w-6/12  lg:w-9/12 w-7/12">
              <Image src={soon} alt="Logo" />
            </div>
          </div>
          <div className="relative lg:w-6/12">
            <div className="lg:text-left text-center mr-auto lg:pr-24 mt-8">
              <h1 className="text-5xl font-bold">Looking for more stores?</h1>
              <p className="text-lg mt-4">
                Fret not! We are going to launch more merchants soon. So please
                stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full custom-bg-color py-12 text-white">
        <div className="container mx-auto  text-center lg:px-0 px-12">
          <h1 className="text-4xl font-bold">Be our partner merchant</h1>
          <p className="text-lg mt-4">
            Get more customers and increase your sales by signing up now!
          </p>
          <button
            onClick={() => openModal()}
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
                        "
          >
            Apply as merchant
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default Merchant;
