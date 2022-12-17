import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App=()=> {
  return (
    <div className='bg-gradient-to-b from-zinc-700 to-zinc-600'>
     <Navbar/>
     <Home/>
     <SocialLinks/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
