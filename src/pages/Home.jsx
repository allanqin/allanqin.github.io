import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

export default function Home() {
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      document.title = `${"Allan Qin"} | Portfolio`;
    },
    [name]
  );

  return (
    <>
      <Hero />
      <main>
        {/* <AboutMe /> */}
        <Skills />
        {/* <Projects /> */}
        <Experience/>
        <Contact />
      </main>
      <BackToTop home={"Home"} />
      {/* <Footer /> */}
    </>
  );
}
