import { useEffect } from "react";
import mgx from "../assets/portfolio/mgx.png";
import todo from "../assets/portfolio/todo.png";
import restro from "../assets/portfolio/restro.png";
import pwa from "../assets/portfolio/weather.png";
import word from "../assets/portfolio/word.png";
import bot from "../assets/portfolio/chat-bot.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1500,
      once: true,
    });
  }, []);

  const portfolios = [
    {
      id: 1,
      src: mgx,
      name: "mgX website",
      link: "https://www.mgx.com/bd",
      repo: "",
    },
    {
      id: 2,
      src: todo,
      name: "Todo App",
      link: "https://todo-task-tracker.onrender.com/",
      repo: "https://github.com/Raisul999/Todo-App",
    },
    {
      id: 3,
      src: restro,
      name: "E Restro",
      link: "https://restaurant-website-nine.vercel.app/",
      repo: "https://github.com/Raisul999/Restaurant-Website",
    },
    {
      id: 4,
      src: pwa,
      name: "Weather Forecast PWA",
      link: "https://weather-forecast-vert.vercel.app/",
      repo: "https://github.com/Raisul999/Weather-Forecast",
    },
    {
      id: 5,
      src: bot,
      name: "AI Bot Eliza",
      link: "https://eliza-chat-bot.onrender.com/",
      repo: "https://github.com/Raisul999/gRPC-chat-assistant",
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-zinc-600 to-zinc-700 text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div data-aos="fade-down">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Some of my works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, name, repo }) => (
            <div
              data-aos="fade-right"
              key={id}
              className="shadow-md shadow-black-800 rounded-lg"
            >
              <img
                style={{ height: 140, width: "100%" }}
                src={src}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-row justify-start">
                <p className="px-2 py-1 font-semibold">{name}</p>
              </div>
              <div className="flex flex-row items-center gap-1 justify-center my-1">
                {/* <button
                  onClick={() => window.open(link, "_blank")}
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105"
                >
                  Demo
                </button> */}
                <button
                  onClick={() => window.open(link, "_blank")}
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(repo, "_blank")}
                  type="button"
                  class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  <svg
                    class="w-4 h-4 me-2 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Repo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
