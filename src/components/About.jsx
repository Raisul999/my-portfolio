import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-zinc-700 to-zinc-600 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div data-aos="fade-down">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p data-aos="fade-right" className="text-xl mt-8">
          Detail-oriented Software Engineer, passionate regarding
          well-documented code and system architecture. Confident communicator,
          strategic thinker, and innovative creator to develop software that is
          customized to meet a company’s organizational needs, highlight their
          core competencies, and further their success.
        </p>
      </div>
    </div>
  );
};

export default About;
