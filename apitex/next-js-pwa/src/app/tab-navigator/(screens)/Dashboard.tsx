'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';

import {hooks} from '../../../hooks';
import {URLS} from '../../../config';
import {items} from '../../../items';
import {Routes} from '../../../routes';
import {svg} from '../../../assets/svg';
import {TransactionType} from '../../../types';
import {components} from '../../../components';

const cards = [
  {
    id: 1,
    cardUrl: 'https://george-fx.github.io/APIs/apitex/assets/cards/08.jpg',
  },
  {
    id: 2,
    cardUrl: 'https://george-fx.github.io/APIs/apitex/assets/cards/09.jpg',
  },
];

const operations = [
  {
    id: 1,
    titleLine1: 'Receive',
    titleLine2: 'Payment',
    icon: <svg.ReceiveSvg />,
    route: Routes.CREATE_INVOICE,
  },
  {
    id: 2,
    titleLine1: 'Money',
    titleLine2: 'Transfer',
    icon: <svg.RepeatSvg />,
    route: Routes.FUND_TRANSFER,
  },
  {
    id: 3,
    titleLine1: 'Make a',
    titleLine2: 'Payment',
    icon: <svg.DollarSignSvg />,
    route: Routes.PAYMENTS,
  },
];

export const Dashboard: React.FC = () => {
  const {loading, transactions} = hooks.useGetTransactions();

  const renderCards = () => {
    return (
      <section style={{marginTop: 10, marginBottom: 16}}>
        <Swiper
          slidesPerView={1.3}
          spaceBetween={16}
          style={{padding: '0 20px'}}
        >
          {cards.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    borderRadius: 14,
                  }}
                  href={Routes.CARD_DETAILS}
                >
                  <Image
                    src={item.cardUrl}
                    alt='card'
                    layout='responsive'
                    width={100}
                    height={190}
                    style={{
                      borderRadius: 14,
                      objectFit: 'cover',
                    }}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    );
  };

  const renderOperations = () => {
    return (
      <section
        className='container'
        style={{marginBottom: 30}}
      >
        <ul
          style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16}}
        >
          {operations.map((operation, index) => {
            return (
              <li key={index}>
                <Link
                  key={index}
                  style={{
                    backgroundColor: 'var(--main-dark)',
                    padding: 11,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 7,
                  }}
                  href={operation.route}
                >
                  {operation.icon}
                  <span
                    style={{
                      fontSize: 10,
                      color: '#B4B4C6',
                      fontFamily: 'var(--source-sans-3)',
                      fontWeight: 600,
                    }}
                  >
                    {operation.titleLine1} <br />
                    {operation.titleLine2}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderQuickMoneyTransferTo = () => {};

  const renderLatestTransactions = () => {
    return (
      <section
        className='container'
        style={{width: '100%'}}
      >
        <components.BlockHeading
          title='Latest transactions'
          rightComponent={<svg.SearchSvg />}
          containerStyle={{marginBottom: 14}}
        />
        <ul>
          {transactions.map((transaction, index, array) => {
            const isLast = index === array.length - 1;
            return (
              <items.TransactionItem
                key={index}
                isLast={isLast}
                transaction={transaction}
              />
            );
          })}
        </ul>
      </section>
    );
  };

  const renderContent = () => {
    if (loading) return <components.Loader />;

    return (
      <main
        className='scrollable'
        style={{width: '100%', height: '100%'}}
      >
        {renderCards()}
        {renderOperations()}
        {renderLatestTransactions()}
      </main>
    );
  };

  return <components.Screen>{renderContent()}</components.Screen>;
};
