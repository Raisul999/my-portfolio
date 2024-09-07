import "./App.css";
import React, { Suspense } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
// import Home from "./components/Home";
// import SocialLinks from "./components/SocialLinks";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = React.lazy(() => import("./components/Home"));
const SocialLinks = React.lazy(() => import("./components/SocialLinks"));
const About = React.lazy(() => import("./components/About"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Experience = React.lazy(() => import("./components/Experience"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-gradient-to-b from-zinc-700 to-zinc-600">
        <ToastContainer autoClose={5000} />
        <Navbar />
        <Home />
        <SocialLinks />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
