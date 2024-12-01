import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Profiles from './components/Profiles';
import Explorations from './components/Explorations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Profiles />
        <Explorations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;