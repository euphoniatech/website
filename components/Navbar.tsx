import React, { useState, useEffect } from "react";

const useScrollPos = () => {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrollPos;
};

const Navbar = () => {
  const scrollPos = useScrollPos();
  return (
    <nav
      className={(scrollPos == 0 ? "bg-transparent" : "").concat(
        "bg-primary w-full flex items-center justify-between fixed py-8 px-[4%] z-10"
      )}
    >
      <div className="text-white text-3xl font-montserrat font-bold">
        EUPHONIA TECH
      </div>
      <div className="font-poppins flex-grow">
        <ul className="text-accent text-lg flex items-center justify-end gap-[6%]">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
