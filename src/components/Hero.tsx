import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
  {/* Plano de fundo com gradiente escuro */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-black opacity-50 dark:bg-gray-900 dark:opacity-60"></div>
    <img
      src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
      alt="Plano de Fundo"
      className="w-full h-full object-cover"
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
    className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4, delay: 0.3 }}
  >
    Olá, eu sou <span className="text-blue-600 dark:text-purple-600">Nycholas Rocha</span>
  </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-200 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.5 }}
      >
        Desenvolvedor Full-stack em formação, apaixonado por tecnologia e criação de sites. Buscando aprimorar habilidades e ganhar experiência no mercado.
      </motion.p>

      {/* Botões de ação */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.7 }}
      >
        <a
          href="#projects"
          className="inline-flex items-center px-6 py-3 bg-blue-600  dark:bg-purple-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
        >
          Veja Meu Trabalho
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-200"
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
