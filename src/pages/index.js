import Head from 'next/head'
import HomeSection from '../component/HomeSections';
import BrandCollaps1 from '../component/BrandCollaps';
import CleientsLogo from '../component/CleientsLogo';
import Webprojects1 from '../component/Webprojects';
import CalltoAction1 from '../component/CalltoAction'
// import CalltoActionthree from '../component/CalltoActionthree';
// import Slider2 from '../component/Slider2'
import Faqs from '../component/Faqs';

export default function Home() {
    return (
        <>
          <Head>
            <title>clay global</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="images/icons/favicon.png" />
          </Head>
    
            <HomeSection></HomeSection>
            <BrandCollaps1></BrandCollaps1>
            <CleientsLogo></CleientsLogo>
            <Webprojects1></Webprojects1>
            <CalltoAction1></CalltoAction1>
          
            {/* <Slider></Slider> */}
            <Faqs></Faqs>
            {/* <CalltoActionthree></CalltoActionthree> */}
          </>
  )
}
