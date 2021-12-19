import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Transition } from "@headlessui/react";

function Header() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const menus = ["Home", "About", "Blogs"];
  return (
    <header className="sticky top-0 z-10 w-full text-white ">
      <nav className="flex items-center justify-between bg-[#181418] px-8 lg:px-[6rem] py-4">
        <Link
          className="text-[25px] lg:text-[50px] font-bold cursor-pointer hover:text-violet-500"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          im.za
        </Link>
        <button
          type="button"
          className="hover:text-violet-500 text-2xl xl:hidden "
          onClick={() => setIsMenuExpanded(!isMenuExpanded)}
          aria-controls="mobile menu"
          aria-expanded="false"
        >
          <GiHamburgerMenu />
        </button>
        <div className="hidden xl:flex items-center space-x-4 font-semibold text-[25px]">
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
      </nav>
      <Transition
        show={isMenuExpanded}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="xl:hidden id=mobile-menu flex flex-col bg-violet-900 space-y-6 py-6 drop-shadow-2xl"
          >
            {menus.map((menu, index) => (
              <Link
                key={index}
                className="cursor-pointer hover:text-violet-500 text-xl font-semibold px-8 lg:px-[6rem] z-20"
                activeClass="lg:underline lg:decoration-4 lg:decoration-violet-500"
                to={menu.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
              >
                {menu}
              </Link>
            ))}
          </div>
        )}
      </Transition>
    </header>
  );
}

export default Header;
