import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

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
        <section>
          <h1 className="text-center font-montserrat font-bold text-4xl m-16">
            Services
          </h1>
          <div className="flex flex-wrap items-start justify-evenly gap-8 m-8">
            <ServiceCard text="Web Development" />
            <ServiceCard text="App Development" />
            <ServiceCard text="Graphic Design" />
            <ServiceCard text="Digital Marketing" />
          </div>
        </section>
      </main>
    </>
  );
}
