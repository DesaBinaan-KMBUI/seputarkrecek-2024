import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Analytics } from "@vercel/analytics/react";
import Testimoni from "@/components/Testimoni";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import CTASection from "@/components/CTASection";
import Landmark from "@/components/Landmark";

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
      <main>
        <Navbar />
        <Hero />
        <CTASection />
        <Landmark />
        <Testimoni />
        <Analytics />
        <Component {...pageProps} />
      </main>
    </>
  );
}
