import Head from "next/head";
import Navbar from "../components/Navbar";
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
        <section className="xl:bg-[url('../public/static/images/hero-section-background.svg')] bg-contain bg-no-repeat flex items-center justify-end h-screen w-full">
          <div className="w-[25%] text-right mx-12">
            <h1 className="font-heading font-bold text-6xl">TITLE</h1>
            <h3 className="font-heading font-light text-4xl">SUBTITLE</h3>
            <p className="font-heading my-[4%] text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt nulla sem. Aliquam odio odio, auctor in hendrerit nec,
              vulputate viverra purus. Vivamus tincidunt purus ac nunc ultrices,
              at mollis libero auctor.
            </p>
            <button className="bg-indigo-900 font-poppins text-yellow-200 text-xl font-bold rounded-lg px-12 py-4">
              CLICK
            </button>
          </div>
        </section>
        <section>
          <h1 className="text-center font-heading font-bold text-4xl m-16">
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
