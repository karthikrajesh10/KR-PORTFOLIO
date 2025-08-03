// src/components/Skillset.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiTailwindcss,
  SiVite,
  SiGithub,
  SiExpress,
  SiWordpress,
  SiVercel,
} from 'react-icons/si';
import { AiOutlineSync } from 'react-icons/ai';
import { FaAws } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../lib/animations';

const primarySkills = [
  { name: 'C++', icon: <SiCplusplus size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'Python', icon: <SiPython size={40} /> },
  {
    name: 'Java',
    icon: (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2a1f6f] text-sm font-semibold text-white">
        Java
      </div>
    ),
  },
  { name: 'React', icon: <SiReact size={40} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={40} /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} /> },
  { name: 'MySQL', icon: <SiMysql size={40} /> },
  { name: 'AWS', icon: <FaAws size={40} /> },
  { name: 'n8n', icon: <AiOutlineSync size={40} /> },
  { name: 'Workflow Automation', icon: <AiOutlineSync size={40} /> },
  {
    name: '100+ WPM Typing',
    icon: (
      <div className="text-3xl" style={{ lineHeight: 1 }}>
        ⌨️
      </div>
    ),
  },
];

const tools = [
  { name: 'GitHub', icon: <SiGithub size={32} /> },
  { name: 'Docker', icon: <SiDocker size={32} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} /> },
  { name: 'Vite', icon: <SiVite size={32} /> },
  { name: 'Express.js', icon: <SiExpress size={32} /> },
  { name: 'WordPress', icon: <SiWordpress size={32} /> },
  { name: 'Vercel', icon: <SiVercel size={32} /> },
];

const Skillset = () => {
  return (
    <div>
      {/* Primary Skills */}
      <motion.section
        id="skills"
        className="px-6 md:px-16 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeInUp}
          custom={0}
          className="text-4xl font-bold text-center mb-12 text-royal-blue"
        >
          Professional Skillset
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {primarySkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              custom={index * 0.05}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative flex flex-col items-center justify-center border border-royal-blue rounded-xl p-5 bg-[#1f1f44] text-center"
            >
              <div className="z-10 flex flex-col items-center gap-2">
                {skill.icon}
                <p className="mt-1 text-sm text-muted-white font-medium">
                  {skill.name}
                </p>
              </div>
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                whileHover={{
                  boxShadow:
                    '0 0 25px rgba(65,105,225,0.6), 0 0 40px rgba(111,76,225,0.4)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tools & Frameworks */}
      <motion.section
        className="px-6 md:px-16 pb-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3
          variants={fadeInUp}
          custom={0}
          className="text-3xl font-semibold mb-8 text-center text-royal-blue"
        >
          Tools & Frameworks
        </motion.h3>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              custom={i * 0.07}
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 180, damping: 15 }}
            >
              <div className="p-3 bg-[#1f1f44] rounded-full border border-royal-blue">
                {t.icon}
              </div>
              <p className="text-sm text-muted-white font-medium">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Skillset;
