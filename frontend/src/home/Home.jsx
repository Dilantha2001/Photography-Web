import React from "react";
import Navigation from "../componnets/Navigation";
import Footer from "../componnets/Footer";

import ContainerTow from "./ContainerTow";
import Container from "./container";
import CoverImage from "./CoverImage";
import PhotoContainer from "./PhotoContainer";
import Introduction from "./Introduction";

function Home() {
  return (
    <>
      <Navigation />
      <Container />
      <ContainerTow />
      <CoverImage />
      <PhotoContainer />
      <Introduction />
      <Footer />
    </>
  );
}

export default Home;
