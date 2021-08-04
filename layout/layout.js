import Footer from "../component/footer";
import Header from "../component/header"
import Head from 'next/head'

const Layout = ({ children }) => {
 return (
     <>
    <Head>
      <title>PayAfter</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Cebuanna Lhuillier PayAfter"/>
      <meta property="og:title" content="Cebuanna Lhuillier PayAfter"/>
      <meta property="og:description" content="Cebuanna Lhuillier PayAfter"/>
      <meta property="og:url" content="https://dev.payafter.ph/"/>
      <meta property="og:type" content="website"/>
    </Head>
     <Header></Header>
        <main className="xl:mt-24 lg:mt-32 mt-28">{children}</main>
     <Footer></Footer>
     </>
 )
}

export default Layout;