import React from 'react';
import { BookOpen, Briefcase, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">Sobre Mim</h2>
      <p className="section-subtitle">
        Desenvolvedor em formação, com interesse em tecnologia, automação e criação de soluções digitais.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-blue-600 dark:text-purple-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Habilidades</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Conhecimento em React, JavaScript e Python, além de noções básicas em programação Ladder adquiridas no SENAI.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-purple-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experiência</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Participação em projetos acadêmicos e pessoais, aplicando tecnologia para resolver desafios reais e expandindo habilidades na área.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-purple-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Educação</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Técnico em Informática no IF-Sudeste e formação em desenvolvimento Full-Stack pelo SENAI, com apoio da Energisa.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Minha Jornada</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Meu interesse por programação começou no curso do SENAI, onde tive contato com automação e programação Ladder. Desde então, explorei o desenvolvimento web e ampliei meus conhecimentos, aplicando-os em projetos práticos.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Em um projeto acadêmico, trabalhei com colegas para desenvolver um site fictício de uma lanchonete virtual, onde fomos responsáveis por criar o layout e a funcionalidade de exibição de produtos e promoções. Este foi um excelente exercício para aplicar as tecnologias que estou aprendendo, como React e JavaScript.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Também criei sozinho uma calculadora simples em JavaScript, o que me ajudou a reforçar meus conceitos de lógica de programação e manipulação de dados em tempo real.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Além disso, participei do desenvolvimento de um site de novels traduzidas, utilizando Next para criar uma plataforma simples de leitura, onde os usuários podiam acessar e interagir com diversos capítulos de novels populares. Esse projeto foi uma ótima oportunidade para aprimorar minhas habilidades em desenvolvimento web e design responsivo.
        </p>
      </div>
    </section>
  );
};

export default About;
