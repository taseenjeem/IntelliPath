import Link from "next/link";
import ActiveLink from "./ActiveLink";
import ThemeController from "./ThemeController";

const Navbar = ({ children }) => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full bg-base-300 sticky top-0 z-50">
          <div className="w-full navbar wrapper z-50">
            <div className="flex-1 px-2 mx-2 lg:flex">
              <Link
                href={`/`}
                className="text-xl font-semibold btn btn-ghost uppercase tracking-widest text-primary"
              >
                n a t o
              </Link>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal items-center text-primary">
                {/* Navbar menu content here */}
                <li>
                  <ActiveLink href={`/shop`}>Shop</ActiveLink>
                </li>
                <li>
                  <ActiveLink href={`#`}>About Us</ActiveLink>
                </li>
                <li>
                  <ActiveLink href={`/contact-us`}>Contact Us</ActiveLink>
                </li>
                <li>
                  <ActiveLink href={`#`}>Customer Reviews</ActiveLink>
                </li>
                <li>
                  <ThemeController />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 pt-20 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <ActiveLink href={`/shop`}>Shop</ActiveLink>
          </li>
          <li>
            <ActiveLink href={`#`}>About Us</ActiveLink>
          </li>
          <li>
            <ActiveLink href={`#`}>Contact Us</ActiveLink>
          </li>
          <li>
            <ActiveLink href={`#`}>Customer Reviews</ActiveLink>
          </li>
          <li>
            <ThemeController />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
