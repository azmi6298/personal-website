import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Muhammad Azmi - Web Developer</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
