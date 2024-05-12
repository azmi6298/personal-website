import Link from "next/link";

interface BlogCardProps {
  data: Blog;
}

function formatDate(date) {
  return new Date(date).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
