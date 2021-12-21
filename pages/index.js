import Hero from "../components/section/Hero";
import About from "../components/section/About";
import Blogs from "../components/section/Blogs";
import { Element } from "react-scroll";

function Home({ blogs }) {
  return (
    <div className="px-10">
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="blogs">
        <Blogs blogData={blogs.items} />
      </Element>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@azmi6298"
  );
  const data = await res.json();

  return {
    props: { blogs: data },
  };
}

export default Home;
