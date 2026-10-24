import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Research from './components/Research.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Informatics from './components/Informatics.jsx';
import Sustainability from './components/Sustainability.jsx';
import FutureDirection from './components/FutureDirection.jsx';
import Hobbies from './components/Hobbies.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  return (
    // ADDED overflow-x-hidden HERE TO PREVENT SIDEWAYS SCROLLING
    <div className="min-h-screen bg-ink-950 text-ink-100 relative overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Research />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Informatics />
        <Sustainability />
        <FutureDirection />
        <Hobbies />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}