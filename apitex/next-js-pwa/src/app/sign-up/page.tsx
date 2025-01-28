import React from 'react';
import Head from 'next/head';

import {SignUp} from './SignUp';

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Sign Up - Apitex</title>
        <meta
          name='description'
          content='Sign up for a new Apitex account'
        />
        <meta
          name='keywords'
          content='Apitex, sign up, create account'
        />
        <meta
          name='author'
          content='Apitex Team'
        />
        <meta
          name='robots'
          content='index, follow'
        />
        <meta
          property='og:title'
          content='Sign Up - Apitex'
        />
        <meta
          property='og:description'
          content='Sign up for a new Apitex account'
        />
        <meta
          property='og:image'
          content='/path/to/image.jpg'
        />
        <meta
          property='og:url'
          content='https://www.apitex.com/sign-up'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='Sign Up - Apitex'
        />
        <meta
          name='twitter:description'
          content='Sign up for a new Apitex account'
        />
        <meta
          name='twitter:image'
          content='/path/to/image.jpg'
        />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Sign Up - Apitex',
            description: 'Sign up for a new Apitex account',
            url: 'https://www.apitex.com/sign-up',
          })}
        </script>
      </Head>
      <SignUp />
    </>
  );
}
