import { motion, Variants } from 'framer-motion';
import { Briefcase, Mail, ChevronRight, ShieldCheck, MapPin, Phone, Download, Target, Award } from 'lucide-react';

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

  // RGB Text Animation setup
  const rgbAnimation = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 5, ease: "linear", repeat: Infinity }
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-12">
        
        {/* RGB Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/90 border border-slate-600 mb-6 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
            >
              <Target size={18} className="text-pink-400" />
              <span className="text-sm font-semibold text-slate-200 tracking-wide">Targeting: Collection Manager & Team Leader Roles</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white"
            >
              Hi, I'm <br className="hidden md:block" />
              {/* Animated RGB Text */}
              <motion.span 
                variants={rgbAnimation}
                animate="animate"
                style={{ backgroundSize: '200% auto' }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
              >
                Vijesh PR
              </motion.span>
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
              <a href="#experience" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 transform hover:scale-105 shadow-[0_0_20px_rgba(219,39,119,0.4)]">
                Explore Experience <ChevronRight size={20} />
              </a>
              <a href="/resume/Vijesh-PR-Resume.pdf" download className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-500 text-white font-semibold rounded-xl transition-all flex items-center gap-2 transform hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                Download Resume <Download size={20} />
              </a>
            </motion.div>
          </div>

          {/* Profile Photo with RGB Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Animated RGB Glow Background */}
              <motion.div 
                variants={rgbAnimation}
                animate="animate"
                style={{ backgroundSize: '200% auto' }}
                className="absolute inset-[-15px] bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              ></motion.div>
              
              {/* Rotating RGB Border */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-spin" style={{ animationDuration: '3s' }}></div>
              
              {/* Profile Image */}
              <div className="relative bg-slate-900 rounded-full p-[4px]">
                <img 
                  src="/images/vijesh-pr.jpg" 
                  alt="Vijesh PR" 
                  className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-[6px] border-slate-900 shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Vijesh+PR&background=0D8ABC&color=fff&size=512";
                  }}
                />
              </div>
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
            <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Award className="text-purple-400" size={32} />
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
            <motion.div variants={fadeInUp} className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-pink-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">Team Leader – Debt Collection</h3>
                  <p className="text-purple-400 font-medium text-lg">Conneqt Business Solutions</p>
                </div>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-pink-300 border border-pink-900/50 shadow-[0_0_10px_rgba(236,72,153,0.1)]">Leadership Role</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4 leading-relaxed">
                <li>Managed day-to-day activities of a debt collection team and monitored team performance against targets[cite: 19].</li>
                <li>Allocated collection tasks, reviewed performance, and provided operational guidance[cite: 19].</li>
                <li>Handled escalations, resolved complex customer issues, and prepared MIS reports[cite: 19].</li>
              </ul>
            </motion.div>

            {/* Managerial Role 2 */}
            <motion.div variants={fadeInUp} className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">Assistant Manager – Branch Operations</h3>
                  <p className="text-cyan-400 font-medium text-lg">Manappuram Finance Ltd.</p>
                </div>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Feb 2006 – Feb 2009</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4 leading-relaxed">
                <li>Handled day-to-day branch operations and managed customer service activities[cite: 19].</li>
                <li>Supervised operational processes, handled cash transactions, and supported overall branch management[cite: 19].</li>
                <li>Maintained strict accuracy in financial and customer-related transactions[cite: 19].</li>
              </ul>
            </motion.div>

            {/* Role 3 */}
            <motion.div variants={fadeInUp} className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">Field Collection Associate</h3>
                  <p className="text-cyan-400 font-medium text-lg">HDB Financial Services</p>
                </div>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">May 2023 – Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4 leading-relaxed">
                <li>Execute field-level collection operations for overdue heavy construction equipment finance accounts[cite: 19].</li>
                <li>Conduct on-site customer visits, follow up on outstanding payments, and negotiate repayment arrangements[cite: 19].</li>
              </ul>
            </motion.div>

            {/* Role 4 */}
            <motion.div variants={fadeInUp} className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-teal-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-500 to-emerald-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">Executive – Field Operations (RCU)</h3>
                  <p className="text-teal-400 font-medium text-lg">JRSCA Consulting & Advisory</p>
                </div>
                <span className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">Feb 2015 – Mar 2020</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4 leading-relaxed">
                <li>Conducted RCU field investigations and verified loan applications across client premises[cite: 19].</li>
                <li>Scrutinized identity proofs, Land Tax documents, RC, and property records[cite: 19].</li>
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
            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500/50 rounded-[2.5rem] transition-colors duration-500 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto font-medium">
              Ready to take on leadership roles as a <strong className="text-pink-400">Collection Manager</strong> or <strong className="text-purple-400">Team Leader</strong>. Let's discuss how my 15+ years of operational experience can add value to your team.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a href="mailto:vijeshvip@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-slate-900/80 hover:bg-pink-500/10 border border-slate-700 hover:border-pink-500/50 rounded-2xl transition-all w-full md:w-auto group/mail">
                <Mail className="text-slate-400 group-hover/mail:text-pink-400 transition-colors" />
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
