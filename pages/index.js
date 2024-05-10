import Hero from "../components/section/Hero";
import About from "../components/section/About";
import { Element } from "react-scroll";

function Home() {
  return (
    <div className="px-10">
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
    </div>
  );
}

export default Home;
