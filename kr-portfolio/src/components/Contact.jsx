import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    setToast('Please fill all fields.');
    setTimeout(() => setToast(null), 4000);
    return;
  }

  setLoading(true);

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error('Failed to send');

    setToast('Thanks for reaching out! I’ll get in touch shortly.');
    setForm({ name: '', email: '', message: '' });
  } catch (err) {
    console.error(err);
    setToast('Something went wrong. Please try again later.');
  } finally {
    setLoading(false);
    setTimeout(() => setToast(null), 4000);
  }
};


  return (
    <>
      <motion.section
        id="contact"
        className="px-6 md:px-16 py-20 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeInUp}
          custom={0}
          className="text-4xl font-bold mb-4 text-royal-blue"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          custom={0.1}
          className="mb-6 text-lg text-muted-white"
        >
          Whether you have a project, collaboration idea, or just want to say hi,
          I’m always open to connecting. Reach out via email or connect on
          LinkedIn.
        </motion.p>

        <motion.div
          className="grid gap-8 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact info */}
          <motion.div variants={fadeInUp} custom={0.2} className="space-y-3">
            <p className="text-sm">
              <strong className="text-royal-blue">Email:</strong>{' '}
              <a
                href="mailto:karthikrajesh9010@gmail.com"
                className="text-muted-white hover:underline"
              >
                karthikrajesh9010@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <strong className="text-royal-blue">LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/karthik-rs-2004-/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-white hover:underline"
              >
                /in/karthik-rs-2004-
              </a>
            </p>
            <p className="text-sm">
              <strong className="text-royal-blue">Location:</strong>{' '}
              <span className="text-muted-white">Kayamkulam, Kerala</span>
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeInUp}
            custom={0.3}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="bg-[#0f0f3a] p-3 rounded-md outline-none text-muted-white"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="bg-[#0f0f3a] p-3 rounded-md outline-none text-muted-white"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="bg-[#0f0f3a] p-3 rounded-md outline-none text-muted-white"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="self-start px-6 py-3 bg-royal-blue rounded-full font-medium text-white hover:brightness-105 transition disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <Toast message={toast} onClose={() => setToast(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

const Toast = ({ message, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="fixed bottom-6 right-6 bg-[#1f1f44] border border-royal-blue text-muted-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3 z-50"
  >
    <div className="text-sm">{message}</div>
    <button onClick={onClose} className="text-xs underline">
      Close
    </button>
  </motion.div>
);

export default Contact;
