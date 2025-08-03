// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Skillset from './Skillset';
import { fadeInUp, staggerContainer } from '../lib/animations';

const About = () => {
  return (
    <>
      <motion.section
        id="about"
        className="px-6 md:px-16 py-20 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeInUp}
          custom={0}
          className="text-4xl font-bold mb-6 text-royal-blue"
        >
          About Me
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          custom={0.1}
          className="text-lg leading-relaxed mb-4 text-muted-white"
        >
          I’m a full-stack developer driven by curiosity and a passion for
          building impactful digital solutions in fintech, automation, and
          AI-assisted workflows. I thrive on turning complex problems into
          seamless, user-friendly experiences—whether it’s engineering{' '}
          <strong className="text-royal-blue">StockLens</strong>, an AI-powered
          sentiment analysis tool for retail investors, or designing scalable{' '}
          <strong className="text-royal-blue">n8n pipelines</strong> that
          automate repetitive real-world processes.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          custom={0.2}
          className="text-lg leading-relaxed mb-4 text-muted-white"
        >
          With a strong foundation in <strong className="text-royal-blue">React</strong>,{' '}
          <strong className="text-royal-blue">Python</strong>, and modern
          JavaScript ecosystems, I specialize in <em>end-to-end integrations</em>{' '}
          that bridge data, processes, and people. My approach blends{' '}
          <span className="font-semibold">data-driven decision-making</span> with
          clean, intuitive design—making technology feel effortless and
          empowering.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          custom={0.3}
          className="text-lg leading-relaxed mb-8 text-muted-white"
        >
          Beyond the world of code, I fuel my curiosity through diverse reading that broadens my perspective, maintain balance with a disciplined fitness routine, and draw creativity from traveling to unfamiliar places that ignite fresh ideas. I also take pride in nurturing financial discipline and strategic thinking—actively managing my finances and investing with a long-term, growth-oriented mindset.
        </motion.p>
      </motion.section>

      {/* skillset section */}
      <Skillset />
    </>
  );
};

export default About;
