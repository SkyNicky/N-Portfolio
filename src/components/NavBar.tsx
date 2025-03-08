import React from 'react'; 
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Título com movimento suave */}
          <motion.div
            className="text-xl font-bold text-gray-900 dark:text-white"
            animate={{ x: [0, 10, 0] }}  // Movimento suave horizontal
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            Nycholas Rocha
          </motion.div>

          {/* Div para os botões de redes sociais, centralizados */}
          <div className="flex space-x-6 mx-auto">
            <motion.a 
              href="https://github.com/SkyNicky" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/nycholas-ferreira-de-freitas-rocha-3b302325b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="mailto:nycholasrocha@gmail.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Botão de troca de tema */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: darkMode ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
