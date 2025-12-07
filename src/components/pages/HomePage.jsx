// Home page with all main sections
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import TechTimeline from "../sections/TechTimeline";
import Testimonials from "../sections/Testimonials";
import LiveActivity from "../sections/LiveActivity";
import Contact from "../sections/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <TechTimeline />
      <Testimonials />
      <LiveActivity />
      <Contact />
    </>
  );
};

export default HomePage;
