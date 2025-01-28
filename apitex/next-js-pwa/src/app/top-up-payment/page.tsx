import Head from 'next/head';

import {TopUpPayment} from './TopUpPayment';

export default function Page() {
  return (
    <>
      <Head>
        <title>Page</title>
      </Head>
      <TopUpPayment />
    </>
  );
}
