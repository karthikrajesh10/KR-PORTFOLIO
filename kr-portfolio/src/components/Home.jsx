import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { fadeInUp, staggerContainer } from '../lib/animations';

const TaglineAnimated = () => {
  const phrases = [
    'Software Developer',
    'Fintech Enthusiast',
    'Problem Solver',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden mb-3" style={{ minHeight: '2rem' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4 }}
          className="block text-2xl md:text-3xl uppercase tracking-wide font-semibold text-royal-blue leading-tight"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const driveCVLink =
    'https://drive.google.com/file/d/18PWfKc0i-xD5HEm-d4JaC98tGcHgUYA4/view?usp=sharing';

  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 md:px-16 min-h-[80vh] gap-10">
      <motion.div
        className="max-w-xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Tagline */}
        <motion.div variants={fadeInUp} custom={0.1}>
          <TaglineAnimated />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          custom={0.2}
          className="mt-1 text-2xl md:text-3xl font-bold font-mono leading-snug"
        >
          Hello I'm{' '}
          <span className="text-royal-blue whitespace-nowrap">
            Karthik&nbsp;R&nbsp;S
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          custom={0.3}
          className="mt-5 text-base leading-relaxed text-muted-white"
        >
          I build impactful digital products and workflows — from AI-powered
          tools like StockLens that analyze market sentiment to automation
          pipelines in n8n that extract, process, and route data intelligently.
          Skilled in Python, JavaScript, and modern full-stack stacks, I blend
          technical rigor with a passion for finance, startups, and building
          systems that help people and businesses make better decisions.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={fadeInUp}
          custom={0.4}
          className="mt-6 flex flex-wrap gap-4"
        >
          <a
            href="/CV.pdf"
            download="Karthik_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 border border-royal-blue rounded-full text-sm font-medium hover:bg-royal-blue/10 transition"
          >
            <FaFileDownload /> Download CV
          </a>
          <a
            href={driveCVLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-royal-blue rounded-full text-sm font-medium hover:bg-royal-blue/10 transition"
          >
            View CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={fadeInUp}
          custom={0.5}
          className="mt-8 flex gap-6"
        >
          <a
            href="https://github.com/karthikrajesh10"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group"
          >
            <FaGithub
              size={24}
              className="transition group-hover:text-royal-blue text-muted-white"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/karthik-rs-2004-/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group"
          >
            <FaLinkedin
              size={24}
              className="transition group-hover:text-royal-blue text-muted-white"
            />
          </a>
          <a
            href="https://leetcode.com/u/karthik710/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="group"
          >
            <SiLeetcode
              size={24}
              className="transition group-hover:text-royal-blue text-muted-white"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Right-side placeholder / animation */}
      <div className="hidden lg:flex flex-1 justify-center mt-10 lg:mt-0">
        <motion.div
          className="w-64 h-64 bg-gradient-to-br from-[#4b2b9e] to-[#6f4ce1] rounded-full relative overflow-hidden flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="animate-pulse w-32 h-32 bg-royal-blue rounded-full opacity-25" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
