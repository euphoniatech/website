import Head from "next/head";
import Navbar from "../components/Navbar";

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
        <section className="xl:bg-[url('../public/static/images/hero-section-background.svg')] bg-contain bg-no-repeat h-screen w-full"></section>
        <section className="text-center font-heading text-4xl m-16">
          <h1>Services</h1>
        </section>
      </main>
    </>
  );
}
