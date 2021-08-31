import React from "react";
import Link from "next/link";
import Image from "next/image";

import Layout from "../../layout/layout";
import Home from "../../public/assets/images/home.svg";
import Banner from "../../public/assets/images/banner-news.png";
import bannerimage from "../../public/assets/images/sampleIMG.png";
import Payafterwhite from "../../public/assets/images/logo_payafter.svg";
import CLFC from "../../public/assets/images/logo_clfc.png";
import arrowRight from "../../public/assets/images/arrow_right.svg";

import FB from "../../public/assets/images/social/Facebook.svg";
import TW from "../../public/assets/images/social/Twitter.svg";
import LK from "../../public/assets/images/social/Linkedin.svg";

const NewsPage = () => {
  return (
    <Layout>
      <div className="w-full relative pt-8">
        <div className="container mx-auto mb-8 xl:pl-24 lg:pl-0 pl-12">
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
          <Link href="/newsdetails">
            <a className="cursor-pointer">
              Cebuana Lhuillier unveils “PayAfter”
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full bg-white relative">
        {/* <div className="absolute top-2.5 right-20 z-10  flex-col items-center justify-center gap-4 xl:flex lg:flex hidden">
          <Image src={FB} alt="Logo" />
          <Image src={TW} alt="Logo" />
          <Image src={LK} alt="Logo" />
        </div> */}

        <div className="container mx-auto flex lg:flex-row flex-col items-start justify-center mb-12">
          <div className="xl:w-9/12 xl:mx-auto xl:px-0 lg:px-0 px-8">
            <h1 className="lg:text-6xl text-3xl font-bold">
              Cebuana Lhuillier unveils “PayAfter”
            </h1>
            <p className=" xl:pr-12 lg:pr-12 mt-1 text-gray-600 text-justify">
              New service under “Buy Now, Pay Later” to provide Filipinos easy,
              more convenient, and more flexible payment option plans
            </p>
            <div className="py-4 hidden">
              <Image src={Banner} alt="Logo" />
            </div>
            <p className="mt-8 xl:pr-12 lg:pr-12 text-justify">
              Cebuana Lhuillier Finance Corporation (CLFC), the lending arm of
              microfinancial services giant Cebuana Lhuillier, has recently
              launched “PayAfter,” its new product under “Buy Now, Pay Later.”
              The product will allow clients to purchase products and services
              from any of CLFC’s merchant partners via installment.
            </p>
            <p className="mt-8 xl:pr-12 lg:pr-12 text-justify">
              The pandemic and the subsequent lockdown that followed have
              significantly changed the buying habits of many Filipinos, with a
              growing number preferring to buy products or procure services
              online. Along with it comes the allure of “Buy Now, Pay Later”
              which provided consumers with the capability to make urgent
              purchases through easy and flexible installment plans, with no
              cash-out needed.
            </p>
            <p className="mt-8 xl:pr-12 lg:pr-12 text-justify">
            <span className="italic">“PayAfter is part of Cebuana Lhuillier’s key innovations this year
              and part of our continuing transformation as a “TechBrick”
              company. We recognize that our clients’ needs are constantly
              evolving, and I am proud to say that our organization is evolving
              along with them as well by offering new products and services that
              takes advantage of our very proprietary technology and wide
              network presence. PayAfter provides Ka-Cebuanas with the
              convenience to purchase what they need online, while also giving
              them easy access to credit,” </span> Cebuana Lhuillier President & CEO
              Jean Henri Lhuillier explained.
            </p>
            <p className="mt-8 xl:pr-12 lg:pr-12 text-justify">
              Offering a convenient and easy way to pay, PayAfter allows
              Filipino consumers to pay for purchases without using a credit
              card or shelling out cash right there and then enabling customers
              to make urgent purchases at flexible installment plans.
            </p>
            <p className="mt-8 xl:pr-12 lg:pr-12 text-justify">
              Aside from providing service to its customers, CLFC also aims to
              work with small and medium entrepreneurs (SMEs), which was the
              sector hardest hit by the pandemic. The partnership will provide
              SMEs with more channels to reach more customers, including the
              underbanked and financially underserved.
            </p>
            <p className="mt-8 xl:pr-12 lg:pr-12 text-justify">
              CLFC General Manager Jennie Tarrabago adds, <span className="italic">“The partnership
              between PayAfter and SMEs is expected to boost sales especially
              during these challenging times, by providing their clients with
              more purchasing power at checkout. This is just one of the many
              financing products that are currently in the pipeline this year,
              and we are looking forward to introducing more innovations that
              surely speak to the changing needs of Filipino consumers
              nationwide.”</span>
            </p>
            {/* <p className="mt-8 xl:pr-12 lg:pr-12">
              Cebuana Lhuillier President and CEO Jean Henri D. Lhuillier in
              several media interviews said that the company has been
              transitioning into the new normal to provide wider financial
              access for Filipinos. “We are now shifting into a tech-brick
              company, where our network of branches will take advantage of our
              proprietary technology to step into new grounds by adapting to the
              new normal using our enhanced digital business transformation.”
            </p>
            <div className="py-4 hidden">
              <Image src={bannerimage} alt="Logo" />
            </div>
            <div className="text-gray-400">
              Cebuana Lhuillier President and CEO - Jean Henri D. Lhuillier
            </div>
            <p className="mt-8 xl:pr-12 lg:pr-12">
              Aside from providing service to its customers, CLFC also aims to
              enhance the quality of life for all Filipinos which includes small
              and medium entrepreneurs. Through their strategic partnership,
              these businesses are offered more channels to reach customers who
              are underbanked and marginalized through financial inclusion and
              credit empowerment. throughout uncertain financial times.
            </p>
            <p className="mt-8 xl:pr-12 lg:pr-12">
              “PayAfter will assist retailers in boosting their sales especially
              during these challenging times. We respond to the wants and needs
              of the customers making our products affordable thus, increasing
              their purchasing power. This is just one of the many financing
              products we will be launching soon,” according to CLFC’s General
              Manager, Jennie Tarrobago.
            </p> */}
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-12 hidden ">
        <div className="container mx-auto  text-center xl:px-0 lg:px-0 px-8  relative">
          <div className=" xl:flex lg:flex items-center justify-between w-full">
            <h1 className="text-4xl font-bold">More from the newsroom</h1>
          </div>
          <br />
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8 py-10 place-content-center">
            <div className="block bg-white max-w-md rounded-lg shadow-lg cursor-pointer hover:shadow-sm transition-all duration-500">
              <div className="flex flex-row items-center justify-self-start">
                <div className="custom-bg-color p-12 py-20 flex items-center justify-center justify-self-center  lg:mx-0 mx-auto rounded-tl-lg">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden ">
                    <Image
                      src={Payafterwhite}
                      alt="Logo"
                      width={130}
                      height={110}
                    />
                  </div>
                </div>
                <div className="p-12 py-20 bg-white  flex items-center justify-center justify-self-center  lg:mx-0 mx-auto rounded-tr-lg">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden ">
                    <Image src={CLFC} alt="Logo" width={150} height={110} />
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold py-4 px-4">
                CLFC launches its “Buy Now Pay Later” (BNPL) service, PayAfter
              </h1>
              <div className="flex flex-row items-center justify-between p-4">
                <span className="text-base">Sep. 01, 2021</span>
                <Link href="/newsdetails">
                  <a className="cursor-pointer">
                    <Image src={arrowRight} alt="Logo" width={45} height={45} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="block bg-white max-w-md rounded-lg shadow-lg cursor-pointer hover:shadow-sm transition-all duration-500">
              <div className="flex flex-row items-center justify-self-start">
                <div className="custom-bg-color p-12 py-20 flex items-center justify-center justify-self-center  lg:mx-0 mx-auto rounded-tl-lg">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden ">
                    <Image
                      src={Payafterwhite}
                      alt="Logo"
                      width={130}
                      height={110}
                    />
                  </div>
                </div>
                <div className="p-12 py-20 bg-white  flex items-center justify-center justify-self-center  lg:mx-0 mx-auto rounded-tr-lg">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden ">
                    <Image src={CLFC} alt="Logo" width={150} height={110} />
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold py-4 px-4">
                CLFC launches its “Buy Now Pay Later” (BNPL) service, PayAfter
              </h1>
              <div className="flex flex-row items-center justify-between p-4">
                <span className="text-base">Sep. 01, 2021</span>
                <Link href="/newsdetails">
                  <a className="cursor-pointer">
                    <Image src={arrowRight} alt="Logo" width={45} height={45} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="block bg-white max-w-md rounded-lg shadow-lg cursor-pointer hover:shadow-sm transition-all duration-500">
              <div className="flex flex-row items-center justify-self-start">
                <div className="custom-bg-color p-12 py-20 flex items-center justify-center justify-self-center  lg:mx-0 mx-auto rounded-tl-lg">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden ">
                    <Image
                      src={Payafterwhite}
                      alt="Logo"
                      width={130}
                      height={110}
                    />
                  </div>
                </div>
                <div className="p-12 py-20 bg-white  flex items-center justify-center justify-self-center  lg:mx-0 mx-auto rounded-tr-lg">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden ">
                    <Image src={CLFC} alt="Logo" width={150} height={110} />
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold py-4 px-4">
                CLFC launches its “Buy Now Pay Later” (BNPL) service, PayAfter
              </h1>
              <div className="flex flex-row items-center justify-between p-4">
                <span className="text-base">Sep. 01, 2021</span>
                <Link href="/newsdetails">
                  <a className="cursor-pointer">
                    <Image src={arrowRight} alt="Logo" width={45} height={45} />
                  </a>
                </Link>
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

export default NewsPage;
