function formatDate(date) {
  return new Date(date).toLocaleString("id", {
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
        className="text-2xl lg:text-4xl font-semibold"
      >
        {data.title}
      </a>
      <p className="text-sm lg:text-2xl text-slate-400">
        {formatDate(data.pubDate)}
      </p>
    </div>
  );
}

export default BlogCard;
