import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
   <section className="relative h-screen flex items-center bg-gradient-to-r from-indigo-800 to-blue-900">
  {/* Plano de fundo com gradiente escuro e imagem de fundo */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-black opacity-70 dark:bg-gray-900 dark:opacity-80"></div>
    <img
      src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWElQzMlQTclQzMlQTNvfGVufDB8fDB8fHww"
      alt="Plano de Fundo"
      className="w-full h-full object-cover transform scale-110 brightness-75"
    />
  </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-6 md:px-12 z-10">
        <motion.div
          className="max-w-3xl text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight transform transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
          >
            Olá, eu sou <span className="text-blue-600 dark:text-purple-600">Nycholas Rocha</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-100 mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
          >
            Desenvolvedor Full-stack em formação, apaixonado por tecnologia e criação de sites. Buscando aprimorar habilidades e ganhar experiência no mercado.
          </motion.p>

          {/* Botões de ação */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.7 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-blue-600 dark:bg-purple-600 hover:bg-blue-700 dark:hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Veja Meu Trabalho
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contate-me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
