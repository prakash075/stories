import Head from 'next/head.js';
import React from 'react';
import Story from '../components/scope/slide.js';


const Complete = () => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.cdnfonts.com/css/graphik" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Quicksand:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <Story />
    </div>
  );
}

export default Complete;