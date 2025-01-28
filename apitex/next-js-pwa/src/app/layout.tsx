import type {Metadata, Viewport} from 'next';
import {Source_Sans_3} from 'next/font/google';

import 'swiper/css';
import '../scss/_index.scss';

import {ReduxProvider} from '../store/ReduxProvider';

const APP_NAME = 'PWA App';
const APP_DEFAULT_TITLE = 'My Awesome PWA App';
const APP_TITLE_TEMPLATE = '%s - PWA App';
const APP_DESCRIPTION = 'Best PWA app in the world!';

const sourceSans3 = Source_Sans_3({
  variable: '--source-sans-3',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  // themeColor: '#040325',
  themeColor: '#fff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeColor =
    typeof viewport.themeColor === 'string' ? viewport.themeColor : undefined;
  return (
    <html lang='en'>
      <head>
        <meta
          name='theme-color'
          content={themeColor}
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        />
      </head>
      <body
        className={`${sourceSans3.variable}`}
        id='app'
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
