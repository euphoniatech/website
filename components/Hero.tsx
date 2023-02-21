import React from "react";
import Image from "next/image";
import HeroImage from "../public/static/images/hero-section-image.svg";

export const Hero = () => {
  return (
    <section className="text-white bg-gradient-to-b from-primary to-primary-lighter flex items-center justify-around h-screen w-full">
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
      <div className="custom-shape-divider-bottom-1676987994">
        <style jsx>
          {`
            .custom-shape-divider-bottom-1676987994 {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              overflow: hidden;
              line-height: 0;
            }

            .custom-shape-divider-bottom-1676987994 svg {
              position: relative;
              display: block;
              width: calc(100% + 1.3px);
              height: 100px;
            }

            .custom-shape-divider-bottom-1676987994 .shape-fill {
              fill: #ffffff;
            }
          `}
        </style>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
