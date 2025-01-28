import Head from 'next/head';

import {PrivacyPolicy} from './PrivacyPolicy';

export default function Page() {
  return (
    <>
      <Head>
        <title>Page</title>
      </Head>
      <PrivacyPolicy />
    </>
  );
}
