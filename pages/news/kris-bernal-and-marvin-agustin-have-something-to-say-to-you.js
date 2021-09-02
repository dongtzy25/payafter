import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Modal } from "../../component/modal";

import Layout from "../../layout/layout";
import Home from "../../public/assets/images/home.svg";
import Payafterwhite from '../../public/assets/images/PayAfter-Logo.svg'
import arrowRight from "../../public/assets/images/arrow_right.svg";
import SecondNews from "../../public/assets/images/new2.png";
import { useRouter } from "next/router";

const SecondNewsPage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    document.querySelector("body").style.overflow = "hidden";
  };

  return (
    <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal} />

      <div className="w-full relative pt-8 xl:px-0 px-8">
        <div className="container mx-auto mb-8 xl:pl-24 lg:pl-0 md:pl-0 pl-0">
          <Link href="/">
            <a className="cursor-pointer">
              <Image src={Home} alt="Logo" width={15} height={15} />
            </a>
          </Link>
          <span className="px-4">/</span>
          <Link href="/news">
            <a className="cursor-pointer">News</a>
          </Link>
          <span className="px-4">/</span>
          <Link href="/news/kris-bernal-and-marvin-agustin-have-something-to-say-to-you">
            <a className="cursor-pointer">LOOK: Kris Bern…</a>
          </Link>
        </div>
      </div>
      <div className="w-full bg-white relative xl:px-0 px-8">
        {/* <div className="absolute top-2.5 right-20 z-10  flex-col items-center justify-center gap-4 xl:flex lg:flex hidden">
          <Image src={FB} alt="Logo" />
          <Image src={TW} alt="Logo" />
          <Image src={LK} alt="Logo" />
        </div> */}

        <div className="container mx-auto flex lg:flex-row flex-col items-start justify-center mb-12 ">
          <div className="xl:w-9/12 xl:mx-auto  ">
            <h1 className="lg:text-6xl text-3xl font-bold text-center">
              LOOK: Kris Bernal and Marvin Agustin have something to say to you
            </h1>
            <p className=" xl:pr-12 lg:pr-12 mt-8 text-justify text-gray-600">Manila, September 01, 2021</p>

            <p className=" xl:pr-12 lg:pr-12 mt-4 text-justify">
              Take a look at Kris Bernal for OMO!
              White™, and Marvin Agustin, for Oh Crop! - as they invite you to
              Cebuana Lhuiller’s first ever buy now, pay later service -
              PayAfter’s launch on September 1, 2021.
            </p>
            <div className="py-4 lg:mt-4 mt-0 text-center">
              <video controls className="w-auto mx-auto mb-4">
                <source src="../assets/videos/video1.mp4#t=0.001" type="video/mp4" />
              </video>
              <span className=" text-gray-400 lg:pr-16">
                Kris Bernal for OMO! White™
              </span>
            </div>
            <p className="text-justify">
              OMO! White™ has its finger on the pulse of asian beauty. Embracing
              the spirit of innovation, they bring the best and latest trends in
              skincare. That’s why actress Kris Bernal has been invested on this
              Korean-inspired brand that keeps her skin fresh and glowing all
              the time!
            </p>
            <div className="py-4 lg:mt-4 mt-0 text-center">
              <video controls  className="w-auto mx-auto mb-4">
                <source src="../assets/videos/video2.mp4#t=0.001" type="video/mp4" />
              </video>
              <span className=" text-gray-400 lg:pr-16">
                Marvin Agustin for Oh Crop!
              </span>
            </div>
            <p className="text-justify">
              On the other hand, actor-chef Marvin Agustin’s dedication on
              keeping a healthy lifestyle led him to invest as a co-owner of Oh
              Crop!, a brand that offers Adlai which is considered a super food
              because it is said to have anti-cancer, anti-diabetes and
              anti-allergic benefits. It is also rich in fiber, which improves
              in digestion that could potentially help with weight loss. By
              buying Oh Crop!’s Adlai rice, you’re not only buying a healthier
              option to other sources of carbs but you are also supporting local
              farmers.
            </p>
            <p className="mt-8  font-bold">
              How to use PayAfter in purchasing these products?
            </p>

            <p className="mt-2 ">
              1. Activate your PayAfter membership. Make sure your company is in
              partnership with PayAfter.
            </p>
            <p className="mt-2 ">
              2. Follow{" "}
              <Link href="https://www.instagram.com/omowhiteph/">
                <a target="_blank" className="text-blue-500 ">
                  {" "}
                  OMO! White™{" "}
                </a>
              </Link>{" "}
              and{" "}
              <Link href="https://www.instagram.com/ohcrop.ph/">
                <a target="_blank" className="text-blue-500 ">
                  Oh Crop!’s{" "}
                </a>
              </Link>
              Instagram pages.
            </p>
            <p className="mt-2 ">
              3. To place your orders, send them a direct message containing the
              items that you want and indicate PayAfter as your payment method.
            </p>
            <p className="mt-2">
              4. Once your orders have been confirmed, they will send you the
              PayAfter link.
            </p>
            <p className="mt-2 ">
              5. Login with PayAfter to complete the transaction.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-12">
        <div className="container mx-auto  text-center xl:px-0 lg:px-0 px-8  relative">
          <div className=" xl:flex lg:flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold">More from the newsroom</h1>
          </div>
          <br />
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8 py-10 place-content-center ">
            <div
              onClick={() =>
                router.push("/news/cebuana-lhuillier-unviels-payafter")
              }
              className="flex flex-col justify-between bg-white max-w-md  rounded-lg shadow-lg cursor-pointer hover:shadow-sm transition-all duration-500 "
            >
              <div className="flex flex-col items-center justify-self-start ">
                <div className="bg-white shadow-sm p-12 py-20 flex items-center justify-center justify-self-center w-full  lg:mx-0 mx-auto rounded-t-lg">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden ">
                    <Image
                      src={Payafterwhite}
                      alt="Logo"
                      width={150}
                      height={110}
                    />
                  </div>
                </div>

                <h1 className="lg:text-3xl text-2xl font-bold p-4 text-left ">
                  Cebuana Lhuillier unveils “PayAfter”
                </h1>
              </div>
              <div>
                <div className="flex flex-row items-center justify-between p-4 pt-0">
                  <span className="text-base">Aug. 31, 2021</span>
                  <Link href="/news/cebuana-lhuillier-unviels-payafter">
                    <a className="cursor-pointer">
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
              onClick={() =>
                router.push(
                  "/news/kris-bernal-and-marvin-agustin-have-something-to-say-to-you"
                )
              }
              className="flex flex-col justify-between  bg-white max-w-md  rounded-lg shadow-lg cursor-pointer hover:shadow-sm transition-all duration-500 "
            >
              <div className="flex flex-col items-center justify-self-start ">
                <div className="bg-white flex items-center shadow-sm justify-center justify-self-center w-full  lg:mx-0 mx-auto rounded-t-lg">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-t-lg">
                    <Image src={SecondNews} alt="Logo" height={425} />
                  </div>
                </div>

                <h1 className="lg:text-3xl text-2xl font-bold p-4 text-left ">
                  LOOK: Kris Bernal and Marvin Agustin have something to say to
                  you
                </h1>
              </div>
              <div>
                <div className="flex flex-row items-center justify-between p-4 pt-0">
                  <span className="text-base">Sep. 1, 2021</span>
                  <Link href="/news/kris-bernal-and-marvin-agustin-have-something-to-say-to-you">
                    <a className="cursor-pointer">
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

export default SecondNewsPage;
