import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Mail from "./Mail";

const Layout = ({ children }) => {
  const router = useRouter();
  const toMail = () => {
    router.push(
      "mailto:roziqinkhoeru8@gmail.com?subject=Collaboration%20Request"
    );
  };

  return (
    <>
      <Head>
        <title>Khoeru Roziqin - Personal Portfolio</title>
        <meta
          name='keywords'
          content='website, blog, portfolio, personal-portfolio, khoeru, roziqin, khoeruroziqin, roziqinkhoeru, khoeru roziqin undip'
        />
        <meta name='author' content='Khoeru Roziqin' />
        <meta
          name='description'
          content='Personal Website Portfolio Khoeru Roziqin'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='relative'>
        <Navbar themesSet={"dark"} />
        <main className='w-full h-screen min-h-[42rem] sm:min-h-0 flex items-center justify-center pt-8 sm:pt-12'>
          {children}
        </main>
        <Footer />
        <Mail mailHandling={toMail} />
      </div>
    </>
  );
};

export default Layout;
