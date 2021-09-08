import Footer from "../component/footer";
import Header from "../component/header"
import Head from 'next/head'


const Layout = ({ children }) => {
 return (
     <>
    <Head>
      <title>PayAfter</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Cebuana Lhuillier PayAfter"/>
      <meta property="og:title" content="Cebuana Lhuillier PayAfter"/>
      <meta property="og:description" content="Cebuana Lhuillier PayAfter"/>
      <meta property="og:url" content="https://www.payafter.ph/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="/ogimage.png" />
      <meta property="og:image:secure" content="/PayAfter-Original.png" />
      <meta property="fb:app_id" content="215115970434283" />
      <meta property="og:locale" content="en-US" />
    </Head>
     <Header></Header>
        <main className="xl:mt-24 lg:mt-32 mt-24">{children}</main>
     <Footer></Footer>
     </>
 )
}

export default Layout;