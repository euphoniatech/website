import React from "react";
import Image from "next/image";
import SectionDivider from "./SectionDivider";
import HeroImage from "../public/static/images/hero-section-image.svg";

export const Hero = () => {
  return (
    <section className="relative text-white bg-gradient-to-b from-primary to-primary-lighter flex items-center justify-around h-screen w-full">
      <Image src={HeroImage} alt="Hero Image" className="w-[50%]" />
      <div className="w-[25%] text-right mx-12">
        <h1 className="font-montserrat font-bold text-6xl">TITLE</h1>
        <h3 className="font-montserrat font-lighter text-4xl">SUBTITLE</h3>
        <p className="font-montserrat my-[4%] text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          tincidunt nulla sem. Aliquam odio odio, auctor in hendrerit nec,
          vulputate viverra purus. Vivamus tincidunt purus ac nunc ultrices, at
          mollis libero auctor.
        </p>
        <button className="bg-primary font-poppins text-accent text-xl font-bold rounded-lg px-12 py-4">
          CLICK
        </button>
      </div>
      <SectionDivider color="white" />
    </section>
  );
};

export default Hero;
