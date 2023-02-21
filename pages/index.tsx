import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Euphonia Tech</title>
        <meta name="description" content="The Euphonia Tech website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Services />
      </main>
    </>
  );
}
