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
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.seputarkrecek.com" />
        <meta property="og:title" content="Seputar Krecek" />
        <meta
          property="og:description"
          content="Destinasi kaya budaya di mana tradisi Jawa dan agama Buddha berpadu. Nikmati acara adat unik seperti Kendurian dan Anjangsana. Mari jelajahi kekayaan budaya Dusun Krecek dan rasakan kehangatan komunitas kami!"
        />
        <meta
          property="og:image"
          content="/favicon/android-chrome-512x512.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.seputarkrecek.com" />
        <meta property="twitter:title" content="Seputar Krecek" />
        <meta
          property="twitter:description"
          content="Destinasi kaya budaya di mana tradisi Jawa dan agama Buddha berpadu. Nikmati acara adat unik seperti Kendurian dan Anjangsana. Mari jelajahi kekayaan budaya Dusun Krecek dan rasakan kehangatan komunitas kami!"
        />
        <meta
          property="twitter:image"
          content="/favicon/android-chrome-512x512.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.png"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="bg-[#F6ECE3] text-black min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </main>
    </>
  );
}
