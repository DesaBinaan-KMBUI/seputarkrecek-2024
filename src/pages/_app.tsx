import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DM_Sans } from 'next/font/google';

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: "--font-dm-sans",
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Seputar Krecek</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <main className={`${dmSans.variable}`}>
        <Navbar />
        <Hero />
        <Component {...pageProps} />
      </main>
    </>
  );
}
