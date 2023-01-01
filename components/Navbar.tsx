const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between fixed my-10 px-[4%]">
      <div className="text-white text-3xl font-montserrat font-bold">
        EUPHONIA TECH
      </div>
      <div className="font-poppins flex-grow">
        <ul className="text-lg flex items-center justify-end gap-[8%]">
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
