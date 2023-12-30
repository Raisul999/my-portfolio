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
          I prioritize well-documented code and meticulously crafted system
          architecture. My confident communication skills enable me to
          collaborate effectively and clearly explain technical concepts. As a
          strategic thinker and innovative problem-solver, I design bespoke
          software solutions that precisely align with a company's
          organizational objectives, highlighting its core competencies and
          driving its continued success.
        </p>
      </div>
    </div>
  );
};

export default About;
