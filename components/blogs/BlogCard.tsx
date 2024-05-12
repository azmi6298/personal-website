import Link from "next/link";
import formatDate from "../../utils/formatDate";

interface BlogCardProps {
  data: Blog;
}

function BlogCard({ data }: BlogCardProps) {
  return (
    <div className="mb-10">
      <Link
        href={data.link}
        target="_blank"
        rel="noreferrer"
        className="text-xl lg:text-4xl font-semibold hover:text-violet-600"
      >
        {data.title}
      </Link>
      <p className="text-sm lg:text-2xl grayed-text">
        {formatDate(data.publishedDate)}
      </p>
    </div>
  );
}

export default BlogCard;
