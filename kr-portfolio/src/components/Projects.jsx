import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';
import stocklensImg from '../images/stocklens.png';
import krflixerImg from '../images/KRFlixer.png';
import n8nImg from '../images/n8n-workflow.jpg';
import webflowCarouselImg from '../images/Webflow.png';
import safetyBagImg from '../images/anti-harrasment.jpg';
import travelBookingImg from '../images/travel-booking-system.jpg';
import doorbellImg from '../images/Face Recognition.png';


const projects = [
  {
    title: 'StockLens',
    description:
      'AI-powered stock sentiment analyzer aggregating news and tweets, visualizing sentiment trends to help retail investors make better decisions.',
    live: 'https://stocklens-jvcrdrxcj7opdbna3kkkzc.streamlit.app/',
    code: 'https://github.com/karthikrajesh10/StockLens',
    tags: ['Python', 'VADER', 'News API', 'Sentiment Analysis'],
    image: stocklensImg, 
  },
  {
    title: 'KRFlixer - Netflix Clone',
    description:
      'A responsive streaming UI inspired by Netflix. Features dynamic content fetching, search, filters, and user-friendly navigation built with React and TMDB API.',
    live: 'https://kr-flixer.vercel.app/',
    code: 'https://github.com/karthikrajesh10/KRFlixer',
    tags: ['React', 'TMDB API', 'Tailwind CSS', 'Responsive'],
    image: krflixerImg,
  },
  {
    title: 'n8n Workflow Automation',
    description:
      'Custom automation pipelines built in n8n to integrate disparate services, perform conditional logic, and route data—reducing manual repetition across tasks.',
    live: 'https://karthikn8n.wordpress.com/',
    code: 'https://github.com/karthikrajesh10',
    tags: ['n8n', 'Automation', 'Webhooks', 'Integrations'],
    image: n8nImg,
  },
  {
    title: 'Webflow Infinite Carousel',
    description:
      'An elegant, seamless infinite-scrolling carousel component for Webflow-powered sites, optimized for performance and smooth UX on desktop and mobile.',
    live: 'https://ionio-task-029c51.webflow.io/',
    code: 'https://github.com/karthikrajesh10',
    tags: ['Webflow', 'UX', 'Animation', 'Performance'],
    image: webflowCarouselImg,
  },
  {
    title: 'Anti-Harassment Safety Bag',
    description:
      'A prototype smart safety device (bag) that detects threats and alerts contacts. Combines embedded systems with real-time notification logic for on-the-go protection.',
    live: 'https://github.com/karthikrajesh10?tab=repositories',
    code: 'https://github.com/karthikrajesh10?tab=repositories',
    tags: ['Embedded', 'IoT', 'Safety', 'Prototype'],
    image: safetyBagImg,
  },
  {
    title: 'Travel Booking System',
    description:
      'Full-stack travel booking platform enabling itinerary creation, availability checks, and user bookings with a clean UI and real-time data validation.',
    live: 'https://kr-mern-frontend.vercel.app/',
    code: 'https://github.com/karthikrajesh10/KR-Mern-Frontend',
    tags: ['Full-stack', 'React', 'Node.js', 'Booking'],
    image: travelBookingImg,
  },
  {
    title: 'Contactless Doorbell System',
    description:
      'A contactless smart doorbell using sensors to detect presence and trigger alerts, designed for hygiene-conscious environments with real-time notification.',
    live: 'https://github.com/karthikrajesh10',
    code: 'https://github.com/karthikrajesh10',
    tags: ['IoT', 'Sensor', 'Real-time', 'Smart Home'],
    image: doorbellImg,
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    className="px-6 md:px-16 py-20 max-w-6xl mx-auto"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.h2
      variants={fadeInUp}
      custom={0}
      className="text-4xl font-bold mb-8 text-royal-blue"
    >
      Projects
    </motion.h2>

    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((p, idx) => (
        <motion.div
          key={p.title}
          variants={fadeInUp}
          custom={0.1 * (idx + 1)}
          className="bg-[#1f1f44] rounded-2xl shadow-lg overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {/* Project image */}
          <div className="h-48 overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-muted-white">
              {p.title}
            </h3>
            <p className="mb-4 text-sm text-muted-white">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gradient-to-r from-[#3f3cbb] to-[#6f4ce1] rounded-full text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wide border border-royal-blue px-3 py-1 rounded-full hover:bg-royal-blue/10 transition font-medium"
              >
                Live
              </a>
              <a
                href={p.code}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wide border border-royal-blue px-3 py-1 rounded-full hover:bg-royal-blue/10 transition font-medium"
              >
                Code
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Projects;
