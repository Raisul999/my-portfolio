import { useEffect } from "react";
import MyPic from "../assets/me.jpg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Home = () => {
  useEffect(() => {
    AOS.init({
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1500,
    });
  }, []);
  const socials = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/raisul-islam-416b88119/",
      icon: <FaLinkedinIn className="border-2 rounded-md px-1 " size={35} />,
      tipId: "tool-tip1",
      name: (
        <ReactTooltip anchorId="tool-tip1" place="bottom" content="LinkedIn" />
      ),
    },
    {
      id: 2,
      href: "https://github.com/Raisul999",
      icon: <FaGithub size={35} />,
      tipId: "tool-tip2",
      name: (
        <ReactTooltip anchorId="tool-tip2" place="bottom" content="GitHub" />
      ),
    },
    {
      id: 3,
      href: "mailto:rislam.arnob@gmail.com",
      icon: <HiOutlineMail className="border-2 rounded-md px-1 " size={35} />,
      tipId: "tool-tip3",
      name: <ReactTooltip anchorId="tool-tip3" place="bottom" content="Mail" />,
    },
    {
      id: 4,
      href: "/Raisul_Islam.pdf",
      icon: (
        <BsFillPersonLinesFill
          className="border-2 rounded-md px-1 "
          size={35}
        />
      ),
      download: true,
      tipId: "tool-tip4",
      name: (
        <ReactTooltip anchorId="tool-tip4" place="bottom" content="Resume" />
      ),
    },
  ];
  return (
    <div name="home" className="w-full bg-zinc-700 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full py-10 px-4 md:flex-row">
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
            <TypeAnimation
              sequence={[
                "Resilient Dev 💻",
                1000,
                "Frontend Developer",
                1000,
                "MERN Stack Developer",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-200 text-xl py-4 max-w-md">
            Enthusiastic developer, who loves to work with cutting-edge
            technologies. I like to push myself to the core and be challenged
            with new problems and retrieve solutions.
          </p>
          <div className="mb-4">
            <Link to="portfolio" smooth={true} duration={500}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-200">
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            src={MyPic}
            alt="my_pic"
            className="rounded-2xl mx-auto w-3/3 md:w-2/3 mb-4"
          />
        </div>
        <div className="flex flex-row md:flex-col lg:hidden">
          {socials.map(({ id, href, icon, download, name, tipId }) => (
            <a
              key={id}
              id={tipId}
              href={href}
              download={download}
              target="_blank"
            >
              <span className="flex justify-between items-center py-8 px-2 text-white mt-[-20px] cursor-pointer hover:scale-110 duration-200">
                {icon}
              </span>
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
