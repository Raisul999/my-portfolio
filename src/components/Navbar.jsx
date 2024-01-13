import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 overflow-hidden">
        <div>
          <h1 className="text-4xl font-signature ml-2">Raisul Islam</h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-500 hover:text-gray-300"
            >
              <Link to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="cursor-pointer pr-4 z-30  text-gray-500 md:hidden"
          onClick={() => {
            setNav(!nav);
            window.scroll({ top: 0, left: 0, behavior: "instant" });
          }}
        >
          {nav ? (
            <div className="mx-6">
              {" "}
              <FaTimes size={30} className="fixed" />
            </div>
          ) : (
            <FaBars size={30} />
          )}
        </div>
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-zinc-800 to-gray-600 text-white z-10 md:hidden">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
