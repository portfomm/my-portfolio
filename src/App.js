import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experiences from "./components/Experiences/Experiences";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import TeachBanner from "./components/common/Banners/TeachBanner";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        <Hero />
        <About />
        <TeachBanner />
        <Experiences />
        <Projects />
        {/* <Contact /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
