import Hero from "../components/section/Hero";
import About from "../components/section/About";
import { Element } from "react-scroll";
import { parse } from "rss-to-json";
import Blogs from "../components/section/Blogs";
import { InferGetServerSidePropsType } from "next";

function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="px-10">
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="blogs">
        <Blogs blogData={props.blogs} />
      </Element>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await parse("https://medium.com/feed/@azmi6298");
  const blogs: Blog[] = res.items.map((blog) => ({
    id: blog.id,
    link: blog.link,
    title: blog.title,
    publishedDate: blog.published,
  }));

  return {
    props: { blogs },
  };
}

export default Home;
