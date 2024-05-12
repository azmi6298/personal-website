export default function formatDate(date) {
  return new Date(date).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
