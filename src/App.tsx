import React, { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="font-sans">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              © 2025 Nycholas Rocha. Todos os direitos reservados
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
