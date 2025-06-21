import React from "react";
import Navigation from "../componnets/Navigation";
import Footer from "../componnets/Footer";
import Container from "./Container";
import ContainerTow from "./ContainerTow";

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
