import Head from 'next/head';

import {FundTransfer} from './FundTransfer';

export default function FundTransferPage() {
  return (
    <>
      <Head>
        <title>Fund Transfer</title>
      </Head>
      <FundTransfer />
    </>
  );
}
