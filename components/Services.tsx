import React from "react";
import ServiceCard from "../components/ServiceCard";
import SectionDivider from "./SectionDivider";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

const Services = () => {
  return (
    <section className="relative h-screen">
      <h1 className="text-center font-montserrat font-bold text-4xl m-16">
        Services
      </h1>
      <div className="flex flex-wrap items-start justify-evenly gap-8 m-8">
        <ServiceCard text="Web Development" />
        <ServiceCard text="App Development" />
        <ServiceCard text="Graphic Design" />
        <ServiceCard text="Digital Marketing" />
      </div>
      <SectionDivider color={fullConfig.theme.colors.primary.DEFAULT} />
    </section>
  );
};

export default Services;
