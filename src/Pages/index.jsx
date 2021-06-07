import React from "react";
import Connecting from "../Components/Connecting";
import Creating from "../Components/Creating";
import Hero from "../Components/Hero";
import How from "../Components/How";
import Influencing from "../Components/Influencing";
import InfoSection from "../Components/InfoSection";
import Transforming from "../Components/Transforming";
import Why from "../Components/Why";

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <Creating />
      <Connecting />
      <Transforming />
      <Influencing />
      <How />
      <Why />
    </>
  );
};

export default Home;
