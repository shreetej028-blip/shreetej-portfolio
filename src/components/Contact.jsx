import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot protection
    const honeypot = e.currentTarget._honey?.value;

    if (honeypot) {
      return;
    }

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // 30-second cooldown between submissions
    const now = Date.now();
    const cooldown = 30000;

    if (now - lastSubmitTime < cooldown) {
      setStatus('cooldown');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/shreetej028@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,

            _subject: `Portfolio Contact: ${formData.subject}`,
            _replyto: formData.email,
            _template: 'table',

            // FormSubmit spam protection
            _captcha: 'true',

            // Spam keyword filtering
            _blacklist:
              'viagra,casino,lottery,crypto giveaway,free money,adult,porn',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setLastSubmitTime(Date.now());
      setStatus('success');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setErrors({});

      setTimeout(() => {
        setStatus('idle');
      }, 6000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    const email = personalData.email || 'shreetej028@gmail.com';

    navigator.clipboard.writeText(email);

    setCopiedEmail(true);

    setTimeout(() => {
      setCopiedEmail(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build Something{' '}
            <span className="text-gradient-cyan">
              Secure & Impactful
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Have a project in mind, internship opportunity, or technical
            inquiry? Send me a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">

              <h3 className="text-xl font-bold text-white tracking-tight">
                Contact Information
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I am open to Android app development projects, full-stack web
                engineering roles, cybersecurity research collaborations, and
                internship positions.
              </p>

              <div className="space-y-4 pt-2">

                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between gap-3">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                      <Mail className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">
                        Email Address
                      </span>

                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {personalData.email || 'shreetej028@gmail.com'}
                      </span>
                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      Location
                    </span>

                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {personalData.location}
                    </span>
                  </div>

                </div>

                {/* Social Profiles */}
                <div className="pt-2 grid grid-cols-2 gap-3">

                  <a
                    href={personalData.github || '#'}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (!personalData.github) {
                        e.preventDefault();
                      }
                    }}
                    className={`p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 transition-colors ${
                      personalData.github
                        ? 'hover:bg-white/10 hover:border-cyan-500/30'
                        : 'opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <GithubIcon className="w-5 h-5 text-white" />

                    <span className="text-xs font-medium text-slate-200">
                      GitHub
                    </span>
                  </a>

                  <a
                    href={personalData.linkedin || '#'}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (!personalData.linkedin) {
                        e.preventDefault();
                      }
                    }}
                    className={`p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 transition-colors ${
                      personalData.linkedin
                        ? 'hover:bg-white/10 hover:border-cyan-500/30'
                        : 'opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <LinkedinIcon className="w-5 h-5 text-blue-400" />

                    <span className="text-xs font-medium text-slate-200">
                      LinkedIn
                    </span>
                  </a>

                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/10"
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
            >

              {/* Honeypot anti-spam field */}
              <input
                type="text"
                name="_honey"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>

              {/* Success */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />

                  <div>
                    <strong className="block font-semibold">
                      Message Sent Successfully!
                    </strong>

                    Your message has been sent. Thank you for reaching out.
                  </div>
                </motion.div>
              )}

              {/* Error */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />

                  <div>
                    <strong className="block font-semibold">
                      Message Could Not Be Sent
                    </strong>

                    Please try again in a moment.
                  </div>
                </motion.div>
              )}

              {/* Cooldown */}
              {status === 'cooldown' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />

                  <div>
                    <strong className="block font-semibold">
                      Please wait a moment
                    </strong>

                    You can send another message after 30 seconds.
                  </div>
                </motion.div>
              )}

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Name */}
                <div className="space-y-1.5">

                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-slate-300"
                  >
                    Your Name *
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    maxLength={80}
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm"
                  />

                  {errors.name && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}

                </div>

                {/* Email */}
                <div className="space-y-1.5">

                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-slate-300"
                  >
                    Your Email *
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    maxLength={120}
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm"
                  />

                  {errors.email && (
                    <span className="text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}

                </div>

              </div>

              {/* Subject */}
              <div className="space-y-1.5">

                <label
                  htmlFor="subject"
                  className="block text-xs font-mono text-slate-300"
                >
                  Subject *
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry regarding Android / Full-Stack Project"
                  maxLength={150}
                  className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm"
                />

                {errors.subject && (
                  <span className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject}
                  </span>
                )}

              </div>

              {/* Message */}
              <div className="space-y-1.5">

                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-slate-300"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Shreetej, I would like to discuss..."
                  maxLength={2000}
                  className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm resize-none"
                />

                {errors.message && (
                  <span className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </span>
                )}

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50"
              >

                {status === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}

              </button>

              {/* Privacy / Anti-spam note */}
              <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                Your information is used only to respond to your inquiry.
                Spam and automated submissions are filtered.
              </p>

            </form>

          </motion.div>
        </div>
      </div>
    </section>
  );
}