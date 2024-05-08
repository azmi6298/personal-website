import Hero from "../components/section/Hero";
import About from "../components/section/About";
import { Element } from "react-scroll";
import { parse } from "rss-to-json";

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

export async function getServerSideProps() {
  const res = await parse("https://medium.com/feed/@azmi6298");
  // const data = JSON.stringify(res.items);

  console.log(">>>DATA", typeof res);

  return {
    props: { blogs: res },
  };
}

export default Home;
