import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Calculadora Simples',
    description: 'Uma aplicação web desenvolvida com React e JavaScypt',
    image: 'https://thumbs.dreamstime.com/b/contable-matem%C3%A1tico-web-icon-de-la-calculadora-78276854.jpg',
    tags: ['React', 'JavaScrypt', 'Css'],
    github: 'https://github.com/SkyNicky/Calculadora-Simples',
    demo: 'https://calculadora-simples-three-lime.vercel.app/'
  },
  {
    title: 'Mix Burguer',
    description: 'Site Fictício De Lanchonete',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYlc-Qe8n3uvHPoyBWt8ha4hhGMeAsHFNwBfhkvI0wBVco0zB7kEYLaKIG5QVYwYQnFU&usqp=CAU',
    tags: ['React', 'JavaScrypt', 'Bootstrap'],
    github: 'https://github.com/SkyNicky/Creating',
    demo: 'https://creating-psi.vercel.app/'
  },
  {
    title: 'Projeto 3',
    description: 'Painel web moderno para visualização de dados em tempo real',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    tags: ['Next', 'Node.js', 'MongoDb'],
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 className="section-title">Projetos em Destaque</h2>
      <p className="section-subtitle">
        Aqui estão alguns dos meus projetos recentes que demonstram minhas habilidades técnicas e criatividade
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-purple-900 text-grey-800 dark:text-grey-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <Github className="w-5 h-5 mr-1" />
                  Código
                </a>
                <a
                  href={project.demo}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <ExternalLink className="w-5 h-5 mr-1" />
                  Demonstração
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
