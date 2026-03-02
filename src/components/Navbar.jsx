import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "socials", label: "Socials" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur border-b border-navy/10">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-navy flex items-center justify-center text-background font-semibold">
          {/* <img
              src="Pfp.jpg"
              alt="/Users/neeraj/Desktop/Code/Portfolio/Pfp.jpg"
              loading="lazy"
              className="h-8 w-8 rounded-full object-cover"
            /> */}
          </div>
          <span className="text-sm font-semibold tracking-wide text-navy uppercase">
            Prithu Verma
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy
              smooth
              duration={500}
              offset={-80}
              activeClass="text-navy border-b-2 border-navy"
              className="cursor-pointer border-b-2 border-transparent pb-1 text-text/80 transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-text/80 hover:text-navy hover:bg-navy/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-navy/10 bg-background/98 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy
                smooth
                duration={500}
                offset={-80}
                activeClass="text-navy"
                className="cursor-pointer py-2 text-sm font-medium text-text/80 hover:text-navy"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

