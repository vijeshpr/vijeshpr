import { motion, Variants } from 'framer-motion';
import { Briefcase, Mail, ChevronRight, Target, MapPin, Phone, Download, Award } from 'lucide-react';
import './App.css'; // Importing CSS for RGB Animation

function App() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-12">
        
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/90 border border-slate-600 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <Target size={18} className="text-blue-400" />
              <span className="text-sm font-semibold text-slate-200 tracking-wide">Targeting: Collection Manager & Team Leader</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white"
            >
              Hi, I'm <br className="hidden md:block" />
              {/* RGB Text Animation via CSS Class */}
              <span className="rgb-text-animation">
                Vijesh PR
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium"
            >
              Banking and NBFC professional with 15+ years of expertise. Proven track record as an <strong className="text-white">Assistant Manager</strong> and <strong className="text-white">Team Leader</strong>, specializing in Debt Collection, Operations, and Team Management.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a href="#experience" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 transform hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                Explore Experience <ChevronRight size={20} />
              </a>
              <a href="/resume/Vijesh-PR-Resume.pdf" download className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-500 text-white font-semibold rounded-xl transition-all flex items-center gap-2 transform hover:scale-105">
                Download Resume <Download size={20} />
              </a>
            </motion.div>
          </div>

          {/* Profile Photo with Rotating RGB Border */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 flex items-center justify-center">
              {/* Rotating RGB Border via CSS Class */}
              <div className="absolute inset-0 rounded-full rgb-border-animation shadow-[0_0_30px_rgba(0,255,0,0.3)]"></div>
              
              {/* Profile Image */}
              <img 
                src="/images/vijesh-pr.jpg" 
                alt="Vijesh PR" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#0a0f1a]"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Vijesh+PR&background=0D8ABC&color=fff&size=512";
                }}
              />
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-900/50 relative border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-16"
          >
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl border border-blue-500/30">
              <Award className="text-blue-400" size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Leadership & Experience</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            
            {/* Managerial Role 1 */}
            <motion.div variants={fadeInUp} className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">Team Leader – Debt Collection</h3>
                  <p className="text-blue-400 font-medium text-lg">Conneqt Business Solutions</p>
                </div>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-blue-300 border border-blue-900/50">Leadership Role</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4 leading-relaxed">
                <li>Managed day-to-day activities of a debt collection team and monitored team performance against targets.</li>
                <li>Allocated collection tasks, reviewed performance, and provided operational guidance.</li>
                <li>Handled escalations, resolved complex customer issues, and prepared MIS reports.</li>
              </ul>
            </motion.div>

            {/* Managerial Role 2 */}
            <motion.div variants={fadeInUp} className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-green-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors">Assistant Manager – Branch Operations</h3>
                  <p className="text-green-400 font-medium text-lg">Manappuram Finance Ltd.</p>
                </div>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Feb 2006 – Feb 2009</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4 leading-relaxed">
                <li>Handled day-to-day branch operations and managed customer service activities.</li>
                <li>Supervised operational processes, handled cash transactions, and supported overall branch management.</li>
                <li>Maintained strict accuracy in financial and customer-related transactions.</li>
              </ul>
            </motion.div>

            {/* Role 3 */}
            <motion.div variants={fadeInUp} className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-red-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-300 transition-colors">Field Collection Associate</h3>
                  <p className="text-red-400 font-medium text-lg">HDB Financial Services</p>
                </div>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">May 2023 – Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4 leading-relaxed">
                <li>Execute field-level collection operations for overdue heavy construction equipment finance accounts.</li>
                <li>Conduct on-site customer visits, follow up on outstanding payments, and negotiate repayment arrangements.</li>
              </ul>
            </motion.div>

            {/* Role 4 */}
            <motion.div variants={fadeInUp} className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">Executive – Field Operations (RCU)</h3>
                  <p className="text-indigo-400 font-medium text-lg">JRSCA Consulting & Advisory</p>
                </div>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Feb 2015 – Mar 2020</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4 leading-relaxed">
                <li>Conducted RCU field investigations and verified loan applications across client premises.</li>
                <li>Scrutinized identity proofs, Land Tax documents, RC, and property records.</li>
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
            className="bg-slate-800/80 p-12 md:p-16 rounded-[2.5rem] border border-slate-700 text-center relative shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-[2.5rem] transition-colors duration-500 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto font-medium">
              Ready to take on leadership roles as a <strong className="text-blue-400">Collection Manager</strong> or <strong className="text-green-400">Team Leader</strong>. Let's discuss how my 15+ years of operational experience can add value to your team.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a href="mailto:vijeshvip@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-slate-900/80 hover:bg-blue-500/10 border border-slate-700 hover:border-blue-500/50 rounded-2xl transition-all w-full md:w-auto group/mail">
                <Mail className="text-slate-400 group-hover/mail:text-blue-400 transition-colors" />
                <span className="font-medium">vijeshvip@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-900/80 border border-slate-700 rounded-2xl w-full md:w-auto">
                <Phone className="text-slate-400" />
                <span className="font-medium text-slate-200">9074348257</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-900/80 border border-slate-700 rounded-2xl w-full md:w-auto">
                <MapPin className="text-slate-400" />
                <span className="font-medium text-slate-200">Kerala, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800 text-slate-500 bg-slate-950">
        <p>© {new Date().getFullYear()} Vijesh PR. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
