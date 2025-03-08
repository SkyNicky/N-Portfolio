import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPhp, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaMicrochip, FaCogs } from "react-icons/fa";

const skillCategories = [
  {
    title: "Desenvolvimento Frontend",
    skills: [
      { name: "React", level: 80, icon: <FaReact /> },
      { name: "JavaScript", level: 75, icon: <FaJs /> },
      { name: "HTML/CSS", level: 85, icon: (
        <>
          <FaHtml5 />
        </>
      ) },
    ],
  },
  {
    title: "Desenvolvimento Backend",
    skills: [
      { name: "PHP", level: 60, icon: <FaPhp /> },
      { name: "MySQL", level: 70, icon: <FaDatabase /> },
      { name: "Node.js", level: 50, icon: <FaNodeJs /> },
    ],
  },
  {
    title: "Automação de Processos",
    skills: [
      { name: "Arduino", level: 45, icon: <FaMicrochip /> },
      { name: "PLC", level: 70, icon: <FaCogs /> },
      { name: "Python Data Analysis", level: 65, icon: <FaPython /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container px-6 py-12">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Habilidades Técnicas
      </motion.h2>
      <motion.p
        className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Minha experiência técnica abrange desenvolvimento web, sistemas backend e automação industrial, com especial foco em ferramentas inovadoras.
      </motion.p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + skillIndex * 0.1,
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      {skill.icon && (
                        <span className="text-2xl text-blue-500">{skill.icon}</span>
                      )}
                      <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-lg font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-blue-600 dark:bg-purple-600 h-full rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
