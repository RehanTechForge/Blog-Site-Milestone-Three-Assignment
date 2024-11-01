import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <nav className="hidden sm:block bg-primary rounded-lg px-8 py-4 shadow-lg">
      <ul className="hidden sm:flex justify-center gap-12 items-center h-[40px]">
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
          { href: "/blogs", label: "Blog" },
        ].map((item) => (
          <li
            key={item.label}
            className="font-semibold transition-transform transform hover:text-secondary hover:scale-105 duration-200 ease-in-out"
          >
            <Link
              href={item.href}
              className="px-3 py-1 rounded-md hover:bg-opacity-75"
              passHref
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
