import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Seputar Krecek</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-[#F6ECE3] text-black min-h-screen">
        <Navbar />
        <Analytics />
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}
