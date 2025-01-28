import Head from 'next/head';

import {Payments} from './Payments';

export default function Page() {
  return (
    <>
      <Head>
        <title>Page</title>
      </Head>
      <Payments />
    </>
  );
}
