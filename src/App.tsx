import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Process from './components/Process';
import WhyMe from './components/WhyMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-cream">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Experience />
        <Projects />
        <Process />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
