import Link from "next/link";

function Footer() {
  return (
    <footer>
      <p className="text-sm lg:text-xl font-bold light-text">
        azmi6298 on{" "}
        <Link
          href="https://github.com/azmi6298"
          target="_blank"
          rel="noreferrer"
          className="light-text hover:text-slate-400"
        >
          Github
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
