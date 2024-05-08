import Link from "next/link";
import BlogCard from "../blogs/BlogCard";
import { AiFillMediumSquare } from "react-icons/ai";

function Blogs({ blogData }) {
  console.log("blog", blogData);

  return (
    <div className="flex flex-col xl:flex-row xl:space-x-10 min-h-screen justify-center xl:justify-around items-start lg:items-center pt-36 lg:pt-0">
      <div className="flex flex-col lg:items-center lg:space-y-10">
        <p className="section-title">Blogs</p>
        <Link
          href="https://medium.com/@azmi6298"
          target="_blank"
          rel="noreferrer"
          className="hidden xl:block"
        >
          <AiFillMediumSquare className="text-[6rem] hover:text-violet-600" />
        </Link>
      </div>
      <div className="flex flex-col">
        {blogData &&
          blogData.map((blog) => {
            return <BlogCard key={blog.guid} data={blog} />;
          })}
      </div>
    </div>
  );
}

export default Blogs;
