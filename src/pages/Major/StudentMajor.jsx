import React from "react";
import NavbarMajor from "../../components/Navbar/NavbarMajor";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card";
import ImgStudent2 from "../../assets/images/img-student2.png";
import FooterWhite from "../../components/Footer/FooterWhite";

function StudentMajor() {
  return (
    <>
      <NavbarMajor />
      <Hero title={"Bidang Keahlian"} img={ImgStudent2} />
      <Card />
      <FooterWhite />
    </>
  );
}

export default StudentMajor;
