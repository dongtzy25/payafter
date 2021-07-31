import Head from 'next/head'
import Image from 'next/image'
import Footer from '../component/footer'
import Header from '../component/header'
import Logo from '../public/assets/images/PayAfter-Logo.svg'
import Mail from '../public/assets/images/mail.svg'



export default function Home() {
  return (
    <>
    <Head>
      <title>PayAfter</title>
      <meta name="description" content="Cebuanna Lhuillier PayAfter." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header></Header>
    <main className="mt-24">
      <div className="w-full py-12">
        <div className="container mx-auto flex flex-row items-center justify-between">
          <div className="w-6/12 px-20">
            <h1 className="text-6xl font-bold">Shop now, pay later with NO interest!</h1>
            <p className="text-xl mt-8">Shop on installment for up to 5 months from your favourite stores <br/> - stress free. No credit card required. No hidden fees.</p>
          </div>
          <div className="w-6/12 text-center">
            <Image
                src={Logo}
                alt="Logo"
            />
          </div>
        </div>
      </div> 

      <div className="w-full custom-bg-color text-white">
        <div className="container mx-auto px-20 py-8 flex flex-row justify-between">
          <div className="w-6/12 flex items-center">
            <span className="mr-8">
            <Image
                src={"https://www.torproject.org/static/fonts/fontawesome/png/white/solid/arrow-down.png"}
                alt="Logo"
                width={40}
                height={40}
            />
            </span>
            <span className="w-72"> 
              Building a stronger and more trusted financing industry in the Philippines with the following affiliates
            </span>
          </div>
          <div className="w-6/12 flex items-center space-x-12 justify-end relative">
           
           <div className="w-44 relative h-full">
           <Image
                src={"https://www.eccp.com/themes/ds-eccp-2021/assets/images/logo.png"}
                alt="Logo"
                layout="fill"
            />
           </div>
           <div className="w-44 relative h-full">
           <Image
                src={"https://www.eccp.com/themes/ds-eccp-2021/assets/images/logo.png"}
                alt="Logo"
                layout="fill"
            />
           </div>
           <div className="w-44 relative h-full">
           <Image
                src={"https://www.eccp.com/themes/ds-eccp-2021/assets/images/logo.png"}
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
          <div className="flex flex-row justify-center space-x-12 mt-12">
            <div className="w-60 h-40 shadow-md flex items-center justify-center bg-gray-100 rounded">Merchant 1</div>
            <div className="w-60 h-40 shadow-md flex items-center justify-center bg-gray-100 rounded">Merchant 2</div>
            <div className="w-60 h-40 shadow-md flex items-center justify-center bg-gray-100 rounded">Merchant 3</div>
            <div className="w-60 h-40 shadow-md flex items-center justify-center bg-gray-100 rounded">Merchant 4</div>
          </div>
          <div className="flex flex-row justify-center space-x-12 mt-12">
            <div className="w-60 h-40 shadow-md flex items-center justify-center bg-gray-100 rounded">Merchant 5</div>
            <div className="w-60 h-40 shadow-md flex items-center justify-center bg-gray-100 rounded">Merchant 6</div>
            <div className="w-60 h-40 shadow-md flex items-center justify-center bg-gray-100 rounded">Merchant 7</div>
            <div className="w-60 h-40 shadow-md flex items-center justify-center bg-gray-100 rounded">Merchant 8</div>
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
        <div className="container mx-auto px-20 py-20 flex flex-row justify-between items-start">
          <div className="w-6/12">
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
          <div className="w-2/5">
            <form >
              <div className="mb-4 w-full">
                <label htmlFor="name" className="block text-xl mb-2">Full Name</label>
                <input id="name" name="name" type="text" autoComplete="off" 
                className="w-full rounded px-4 py-3 text-black"
                placeholder="Maria Dela Cruz"
                required />
              </div> 
              <div className="mb-4 flex flex-row items-center w-full justify-between">
                <div >
                  <label htmlFor="email" className="block text-xl mb-2">Email address</label>
                  <input id="email" name="email" type="text" autoComplete="off" 
                  className="w-60 rounded px-4 py-3 text-black"
                  placeholder="your@email.com"
                  required />
                </div> 
                <div >
                  <label htmlFor="number" className="block text-xl mb-2">Mobile number</label>
                  <div className="flex items-center justify-between relative">
                    <span className="bg-gray-100 absolute top-0 left-0 h-full rounded text-black px-2 text-center
                    flex items-center
                    ">+63</span>
                    <input id="number" name="number" type="text" autoComplete="off" 
                    className="w-60 rounded py-3 pl-14 text-black"
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
              <div className="flex items-center justify-between space-x-4 w-full">
                <label className="flex items-center">
                <input className="mr-4 h-8 w-8" type="checkbox"/>
                <span className="text-md">
                    I agree with <u>PayAfter’s Terms& Conditions</u> <br/> and <u>Privacy Policy</u>.
                  </span>
                </label>
                <button type="submit" className="block 
              px-8 
              py-2
              custom-button-color
              rounded 
              text-white
              opacity-75
              ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-12 ">
        <div className="container mx-auto  text-center ">
          <h1 className="text-4xl font-bold">Be our partner merchant</h1>
          <p className="text-lg mt-4">Get more customers and increase your sales by signing up now!</p>
          <button 
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
    </main>
    <Footer></Footer>
    </>
  )
}
