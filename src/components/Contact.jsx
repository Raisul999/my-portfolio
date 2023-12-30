import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!info.email) {
      toast.error("Email is required");
      return;
    } else if (!info.message) {
      toast.error("Message is required");
      return;
    }
    setLoading(true);
    fetch("https://getform.io/f/679f308b-6d31-46f1-baa1-4a9671e6d07d", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(info),
    })
      .then(function (res) {
        setLoading(false);
        toast.success("Message sent successfully");
        if (res?.ok) {
          setInfo({
            name: "",
            email: "",
            message: "",
          });
        }
      })
      .catch(function (res) {
        setLoading(false);
        toast.error("Something went wrong");
      });
  };
  useEffect(() => {
    AOS.init({
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-zinc-600 to-zinc-700 text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div data-aos="fade-down">
          <p className="text-4xl font-bold border-b-4  border-gray-500 inline">
            Contact
          </p>
          <p className="py-6">Have something in mind? Let's connect </p>
        </div>
        <div data-aos="fade-right" className="flex justify-center items-center">
          <form className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={info.name}
              onChange={(e) =>
                setInfo({
                  ...info,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={info.email}
              onChange={(e) =>
                setInfo({
                  ...info,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={info.message}
              onChange={(e) =>
                setInfo({
                  ...info,
                  [e.target.name]: e.target.value,
                })
              }
            ></textarea>

            <button
              type="button"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              onClick={handleClick}
              disabled={loading}
            >
              {loading && (
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
