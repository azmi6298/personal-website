function formatDate(date) {
  return new Date(date).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogCard({ data }) {
  return (
    <div className="mb-10">
      <a
        href={data.link}
        target="_blank"
        rel="noreferrer"
        className="text-xl lg:text-4xl font-semibold hover:text-violet-600"
      >
        {data.title}
      </a>
      <p className="text-sm lg:text-2xl grayed-text">
        {formatDate(data.pubDate)}
      </p>
    </div>
  );
}

export default BlogCard;
