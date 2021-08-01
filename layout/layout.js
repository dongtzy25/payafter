import Footer from "../component/footer";
import Header from "../component/header"
import Head from 'next/head'

const Layout = ({ children }) => {
 return (
     <>
    <Head>
      <title>PayAfter</title>
      <meta name="description" content="Cebuanna Lhuillier PayAfter." />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
     <Header></Header>
        <main className="mt-24">{children}</main>
     <Footer></Footer>
     </>
 )
}

export default Layout;