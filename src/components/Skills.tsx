import React from 'react';

const skillCategories = [
  {
    title: 'Desenvolvimento Frontend',
    skills: [
      { name: 'React', level: 70 },  // Ajustado para refletir o aprendizado em andamento
      { name: 'JavaScript', level: 75 },  // Considerando que você já tem conhecimento básico e prático
      { name: 'HTML/CSS', level: 85 },  // Você já está confortável com HTML/CSS
    ]
  },
  {
    title: 'Desenvolvimento Backend',
    skills: [
      { name: 'PHP', level: 60 },  // Considerando que você está aprendendo e ainda não tem experiência aprofundada
      { name: 'MySQL', level: 70 },  // Conhecimento básico com bancos de dados e algumas experiências práticas
      { name: 'Node.js', level: 50 },  // Estágio inicial de aprendizado
    ]
  },
  {
    title: 'Automação',
    skills: [
      { name: 'Arduino', level: 45 },  // Experiência prática com Arduino, o que é mais avançado
      { name: 'PLC', level: 70 },  // Experiência adquirida no SENAI, mas ainda em aprendizado
      { name: 'BI com Python', level: 65 },  // Experiência com automação, mas aprendendo mais
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Habilidades Técnicas</h2>
      <p className="section-subtitle">
        Minha experiência técnica abrange desenvolvimento web, sistemas backend e automação industrial
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
