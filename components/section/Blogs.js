import BlogCard from "../blogs/BlogCard";
import { AiFillMediumSquare } from "react-icons/ai";

function Blogs({ blogData }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen justify-center lg:justify-around items-start lg:items-center">
      <div className="flex flex-col lg:items-center lg:space-y-10">
        <p className="text-4xl lg:text-[4rem] font-bold">Blogs</p>
        <a href="https://medium.com/@azmi6298" target="_blank" rel="noreferrer">
          <AiFillMediumSquare className="text-[6rem] invisible lg:visible" />
        </a>
      </div>
      <div className="flex flex-col">
        {blogData.map((blog) => {
          return <BlogCard key={blog.guid} data={blog} />;
        })}
      </div>
    </div>
  );
}

export default Blogs;
