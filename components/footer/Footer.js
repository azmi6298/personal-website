function Footer() {
  return (
    <footer className="flex flex-col min-h-min bg-violet-800 items-center py-2 lg:py-8 bottom-0 z-10 w-full text-white ">
      <p className="lg:text-xl font-bold">
        azmi6298 on{" "}
        <a
          href="https://github.com/azmi6298"
          target="_blank"
          rel="noreferrer"
          className="hover:text-slate-400"
        >
          Github
        </a>
      </p>
      <p className="font-semibold">Built with Next.js</p>
    </footer>
  );
}

export default Footer;
