import React, { Suspense, lazy } from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./components/ProjectList'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Element name="home">
          <Home />
        </Element>
        
        <Element name="about">
          <About />
        </Element>
        
        <Element name="projects">
          <Projects />
        </Element>
        
        <Element name="contact">
          <Contact />
        </Element>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
