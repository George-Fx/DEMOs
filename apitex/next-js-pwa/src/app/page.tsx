import React from 'react';
import Head from 'next/head';
// import {StaticImageData} from 'next/image';

import Onboarding from './Onboarding';

export default function Start() {
  return (
    <>
      <Head>
        <title>Onboarding | Apitex</title>
        <meta
          name='description'
          content='Onboarding screen for Apitex bank app.'
        />
      </Head>
      <Onboarding />
    </>
  );
}
