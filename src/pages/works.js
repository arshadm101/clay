import Head from 'next/head'
// import ImageHover1 from '../component/ImageHover';
import React, { useEffect, useRef,useState } from 'react';
import next from 'next';
import Portfolio from '../component/portfolio';
import Testimonial from '../component/testimonial';
import Awards from '@/component/awards';
import ImgOver from '@/component/ImgOver';
export default function works() {
    return (
        <>
          <Head>
            <title>clay global</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="images/icons/favicon.png" />
          </Head>

           <Portfolio></Portfolio>
           <ImgOver></ImgOver>
           <Testimonial></Testimonial>
          </>
  )
}
