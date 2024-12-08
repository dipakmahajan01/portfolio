import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { ThemeProvider } from './ThemeContext';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider> {/* Wrap your app with the ThemeProvider */}
      <div>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
