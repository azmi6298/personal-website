import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div>
      <a
        className="text-black text-2xl lg:text-4xl cursor-pointer"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
      </a>
    </div>
  );
}

function Header() {
  const menus = ["Home", "About"];
  const mobileMenus = ["About"];
  return (
    <header className="sticky top-0 z-10 min-w-full">
      <nav className="flex items-center justify-between xl:grid xl:grid-cols-3 xl:justify-items-center px-8 lg:px-[6rem] py-4">
        <Link
          className="text-[25px] lg:text-[50px] font-bold cursor-pointer hover:text-violet-600"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          Azmi
        </Link>
        <div className="hidden xl:flex justify-center items-center space-x-8 font-semibold text-[25px]">
          {menus.map((menu, index) => (
            <Link
              key={index}
              className="cursor-pointer hover:text-violet-500"
              activeClass="underline decoration-4 decoration-violet-500"
              to={menu.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
            >
              {menu}
            </Link>
          ))}
        </div>

        {ThemeChanger()}
      </nav>
      <div className="mobile-nav">
        {mobileMenus.map((menu, index) => (
          <Link
            key={index}
            className="cursor-pointer hover:text-violet-500 text-base font-semibold px-8 lg:px-[6rem] z-20"
            activeClass="underline decoration-2 decoration-violet-500"
            to={menu.toLowerCase()}
            spy={true}
            smooth={true}
            duration={500}
          >
            {menu}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
