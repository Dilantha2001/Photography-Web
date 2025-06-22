import React from "react";
import Navigation from "../componnets/Navigation";
import Footer from "../componnets/Footer";

import ContainerTow from "./ContainerTow";
import Container from "./container";

function Home() {
  return (
    <>
      <Navigation />
      <Container />
      <ContainerTow />
      <Footer />
    </>
  );
}

export default Home;
