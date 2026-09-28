import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Mail, ChevronRight, ShieldCheck, MapPin, Phone } from 'lucide-react';

function App() {
  // Animation settings
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
        {/* Background Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 mb-8"
          >
            <ShieldCheck size={18} className="text-teal-400" />
            <span className="text-sm font-medium text-slate-300">RCU & Risk Operations Professional</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Vijesh PR</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Banking and NBFC professional with 15+ years of experience across RCU field investigation, loan document verification, and team management.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#experience" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-xl transition-all flex items-center gap-2 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]">
              Explore Experience <ChevronRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-semibold rounded-xl transition-all flex items-center gap-2 transform hover:scale-105">
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-900/50 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-16"
          >
            <div className="p-3 bg-teal-500/10 rounded-xl">
              <Briefcase className="text-teal-400" size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Professional Journey</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {/* Job 1 */}
            <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">Field Collection Associate</h3>
                  <p className="text-teal-400 font-medium text-lg">HDB Financial Services</p>
                </div>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-400 border border-slate-700">May 2023 – Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-400 space-y-2 mt-4 leading-relaxed">
                <li>Execute field-level collection operations for overdue heavy construction equipment finance accounts.</li>
                <li>Conduct on-site customer visits and negotiate repayment arrangements.</li>
                <li>Coordinate with internal departments to provide accurate field-level updates.</li>
              </ul>
            </motion.div>

            {/* Job 2 */}
            <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">Team Leader – Debt Collection</h3>
                  <p className="text-teal-400 font-medium text-lg">Conneqt Business Solutions</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-400 space-y-2 mt-4 leading-relaxed">
                <li>Directed daily activities and monitored performance metrics for a dedicated debt collection team.</li>
                <li>Allocated collection tasks and provided strategic operational guidance.</li>
                <li>Resolved complex customer escalations and generated daily MIS reports.</li>
              </ul>
            </motion.div>

            {/* Job 3 */}
            <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">Executive – Field Operations (RCU)</h3>
                  <p className="text-teal-400 font-medium text-lg">JRSCA Consulting & Advisory</p>
                </div>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-400 border border-slate-700">Feb 2015 – Mar 2020</span>
              </div>
              <ul className="list-disc list-inside text-slate-400 space-y-2 mt-4 leading-relaxed">
                <li>Executed comprehensive RCU field investigations and verified loan applications across client premises.</li>
                <li>Scrutinized identity proofs, Land Tax documents, RC, and property records.</li>
                <li>Identified and reported discrepancies, inconsistencies, and potential risks.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 md:p-16 rounded-[2.5rem] border border-slate-700/50 text-center relative shadow-2xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto">
              Looking to leverage extensive field and operational experience into risk, credit, and operational roles.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a href="mailto:vijeshvip@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-slate-800/80 hover:bg-teal-500/10 hover:text-teal-400 border border-slate-700 hover:border-teal-500/50 rounded-2xl transition-all w-full md:w-auto group">
                <Mail className="text-slate-400 group-hover:text-teal-400 transition-colors" />
                <span className="font-medium">vijeshvip@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/80 border border-slate-700 rounded-2xl w-full md:w-auto">
                <Phone className="text-slate-400" />
                <span className="font-medium text-slate-300">9074348257</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-800/80 border border-slate-700 rounded-2xl w-full md:w-auto">
                <MapPin className="text-slate-400" />
                <span className="font-medium text-slate-300">Kerala, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800 text-slate-500">
        <p>© {new Date().getFullYear()} Vijesh PR. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
