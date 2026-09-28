import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, ChevronRight, Target, MapPin, Phone, Download, Award, Lightbulb } from 'lucide-react';
import './App.css';

function App() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

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
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-1000 ${isLightOn ? 'bg-[#f8fafc] text-slate-900 selection:bg-pink-500 selection:text-white' : 'bg-[#0a0f1a] text-slate-100 selection:bg-blue-500 selection:text-white'}`}>

      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${isLightOn ? 'rgba(255,255,255,0.6)' : 'rgba(59, 130, 246, 0.12)'}, transparent 80%)`,
        }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isLightOn ? 'bg-blue-400/20' : 'bg-white/10'}`}
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.8, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="fixed top-0 right-8 md:right-16 z-50 flex items-start gap-4">
        <div className={`transform origin-top transition-all duration-1000 flex flex-col items-center ${isLightOn ? 'scale-100 opacity-100' : 'scale-90 opacity-40'}`}>
          <div className="w-1 h-12 bg-slate-700"></div>
          <div className={`p-3 rounded-full transition-all duration-700 ${isLightOn ? 'bg-yellow-100 shadow-[0_0_60px_rgba(253,224,71,1)]' : 'bg-slate-800 border border-slate-700'}`}>
            <Lightbulb size={32} className={`transition-colors duration-700 ${isLightOn ? 'text-yellow-500 fill-yellow-500' : 'text-slate-500'}`} />
          </div>
        </div>

        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.4}
          onDragEnd={(_e, info) => {
            if (info.offset.y > 40) toggleLight();
          }}
          className="flex flex-col items-center cursor-grab active:cursor-grabbing group"
          title="Pull down to switch light!"
        >
          <div className="w-1 h-24 md:h-32 bg-gradient-to-b from-slate-600 to-slate-400 border-x border-slate-700 rounded-b-full"></div>
          <div className="w-4 h-10 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full shadow-lg border border-amber-900 flex items-end justify-center pb-1 group-hover:scale-110 transition-transform">
            <div className="w-2 h-2 rounded-full bg-amber-900/50"></div>
          </div>
          <span className={`text-[10px] mt-2 font-bold transition-opacity ${isLightOn ? 'text-slate-500' : 'text-slate-400'} opacity-0 group-hover:opacity-100`}>PULL</span>
        </motion.div>
      </div>

      <section className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-12 z-10">
        <div className={`absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full blur-[120px] transition-opacity duration-1000 ${isLightOn ? 'opacity-0' : 'bg-red-600/10 opacity-100'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full blur-[120px] transition-opacity duration-1000 ${isLightOn ? 'opacity-0' : 'bg-blue-600/10 opacity-100'}`}></div>

        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 transition-colors duration-1000 ${isLightOn ? 'bg-white border-blue-200 shadow-lg' : 'bg-slate-800/90 border-slate-600 shadow-[0_0_15px_rgba(59,130,246,0.3)]'}`}
            >
              <Target size={18} className="text-blue-500" />
              <span className={`text-sm font-semibold tracking-wide ${isLightOn ? 'text-slate-700' : 'text-slate-200'}`}>Targeting: Collection Manager & Team Leader</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight transition-colors duration-1000 ${isLightOn ? 'text-slate-900' : 'text-white'}`}
            >
              Hi, I'm <br className="hidden md:block" />
              <span className="rgb-text-animation">
                Vijesh PR
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-lg md:text-xl mb-10 leading-relaxed font-medium transition-colors duration-1000 ${isLightOn ? 'text-slate-600' : 'text-slate-300'}`}
            >
              Banking and NBFC professional with 15+ years of expertise. Proven track record as an <strong className={isLightOn ? 'text-slate-900' : 'text-white'}>Assistant Manager</strong> and <strong className={isLightOn ? 'text-slate-900' : 'text-white'}>Team Leader</strong>, specializing in Debt Collection, Operations, and Team Management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 relative z-20"
            >
              <a href="#experience" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 transform hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.4)] cursor-pointer">
                Explore Experience <ChevronRight size={20} />
              </a>
              <a href="/resume/Vijesh-PR-Resume.pdf" download className={`px-6 py-3 border font-semibold rounded-xl transition-all flex items-center gap-2 transform hover:scale-105 cursor-pointer ${isLightOn ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700 border-slate-500 text-white'}`}>
                Download Resume <Download size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:w-1/2 flex justify-center z-10"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full rgb-border-animation shadow-[0_0_30px_rgba(0,255,0,0.3)]"></div>
              <img
                src="/images/vijesh-pr.jpg"
                alt="Vijesh PR"
                className={`relative z-10 w-full h-full object-cover rounded-full border-4 transition-colors duration-1000 ${isLightOn ? 'border-white' : 'border-[#0a0f1a]'}`}
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Vijesh+PR&background=0D8ABC&color=fff&size=512";
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className={`py-24 px-6 relative border-t transition-colors duration-1000 z-10 ${isLightOn ? 'bg-white/50 border-slate-200' : 'bg-slate-900/50 border-slate-800'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-16"
          >
            <div className={`p-4 rounded-xl border transition-colors duration-1000 ${isLightOn ? 'bg-blue-50 border-blue-200' : 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-blue-500/30'}`}>
              <Award className="text-blue-500" size={32} />
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold transition-colors duration-1000 ${isLightOn ? 'text-slate-800' : 'text-white'}`}>Leadership & Experience</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className={`group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${isLightOn ? 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl' : 'bg-slate-800/40 border-slate-700 hover:border-blue-500/50'}`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className={`text-2xl font-bold transition-colors ${isLightOn ? 'text-slate-800 group-hover:text-blue-600' : 'text-white group-hover:text-blue-300'}`}>Team Leader – Debt Collection</h3>
                  <p className="text-blue-500 font-medium text-lg mt-1">Conneqt Business Solutions</p>
                </div>
                <span className={`px-4 py-2 rounded-lg text-sm font-medium border ${isLightOn ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-slate-900 text-blue-300 border-blue-900/50'}`}>Leadership Role</span>
              </div>
              <ul className={`list-disc list-inside space-y-2 mt-4 leading-relaxed transition-colors ${isLightOn ? 'text-slate-600' : 'text-slate-300'}`}>
                <li>Managed day-to-day activities of a debt collection team and monitored team performance against targets.</li>
                <li>Allocated collection tasks, reviewed performance, and provided operational guidance.</li>
                <li>Handled escalations, resolved complex customer issues, and prepared MIS reports.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className={`group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${isLightOn ? 'bg-white border-slate-200 hover:border-green-400 hover:shadow-xl' : 'bg-slate-800/40 border-slate-700 hover:border-green-500/50'}`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className={`text-2xl font-bold transition-colors ${isLightOn ? 'text-slate-800 group-hover:text-green-600' : 'text-white group-hover:text-green-300'}`}>Assistant Manager – Branch Operations</h3>
                  <p className="text-green-500 font-medium text-lg mt-1">Manappuram Finance Ltd.</p>
                </div>
                <span className={`px-4 py-2 rounded-lg text-sm font-medium border ${isLightOn ? 'bg-slate-100 text-slate-600 border-slate-300' : 'bg-slate-900 text-slate-300 border-slate-700'}`}>Feb 2006 – Feb 2009</span>
              </div>
              <ul className={`list-disc list-inside space-y-2 mt-4 leading-relaxed transition-colors ${isLightOn ? 'text-slate-600' : 'text-slate-300'}`}>
                <li>Handled day-to-day branch operations and managed customer service activities.</li>
                <li>Supervised operational processes, handled cash transactions, and supported overall branch management.</li>
                <li>Maintained strict accuracy in financial and customer-related transactions.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className={`group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${isLightOn ? 'bg-white border-slate-200 hover:border-red-400 hover:shadow-xl' : 'bg-slate-800/40 border-slate-700 hover:border-red-500/50'}`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className={`text-2xl font-bold transition-colors ${isLightOn ? 'text-slate-800 group-hover:text-red-600' : 'text-white group-hover:text-red-300'}`}>Field Collection Associate</h3>
                  <p className="text-red-500 font-medium text-lg mt-1">HDB Financial Services</p>
                </div>
                <span className={`px-4 py-2 rounded-lg text-sm font-medium border ${isLightOn ? 'bg-slate-100 text-slate-600 border-slate-300' : 'bg-slate-900 text-slate-300 border-slate-700'}`}>May 2023 – Present</span>
              </div>
              <ul className={`list-disc list-inside space-y-2 mt-4 leading-relaxed transition-colors ${isLightOn ? 'text-slate-600' : 'text-slate-300'}`}>
                <li>Execute field-level collection operations for overdue heavy construction equipment finance accounts.</li>
                <li>Conduct on-site customer visits, follow up on outstanding payments, and negotiate repayment arrangements.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className={`group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${isLightOn ? 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-xl' : 'bg-slate-800/40 border-slate-700 hover:border-indigo-500/50'}`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className={`text-2xl font-bold transition-colors ${isLightOn ? 'text-slate-800 group-hover:text-indigo-600' : 'text-white group-hover:text-indigo-300'}`}>Executive – Field Operations (RCU)</h3>
                  <p className="text-indigo-500 font-medium text-lg mt-1">JRSCA Consulting & Advisory</p>
                </div>
                <span className={`px-4 py-2 rounded-lg text-sm font-medium border ${isLightOn ? 'bg-slate-100 text-slate-600 border-slate-300' : 'bg-slate-900 text-slate-300 border-slate-700'}`}>Feb 2015 – Mar 2020</span>
              </div>
              <ul className={`list-disc list-inside space-y-2 mt-4 leading-relaxed transition-colors ${isLightOn ? 'text-slate-600' : 'text-slate-300'}`}>
                <li>Conducted RCU field investigations and verified loan applications across client premises.</li>
                <li>Scrutinized identity proofs, Land Tax documents, RC, and property records.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`p-12 md:p-16 rounded-[2.5rem] border text-center relative shadow-2xl overflow-hidden group transition-colors duration-1000 ${isLightOn ? 'bg-white border-slate-200' : 'bg-slate-800/80 border-slate-700'}`}
          >
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-[2.5rem] transition-colors duration-500 pointer-events-none"></div>
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent ${isLightOn ? 'via-blue-400' : 'via-blue-500'} to-transparent opacity-70`}></div>

            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-1000 ${isLightOn ? 'text-slate-900' : 'text-white'}`}>Let's Connect</h2>
            <p className={`mb-10 text-lg max-w-2xl mx-auto font-medium transition-colors duration-1000 ${isLightOn ? 'text-slate-600' : 'text-slate-300'}`}>
              Ready to take on leadership roles as a <strong className="text-blue-500">Collection Manager</strong> or <strong className="text-green-500">Team Leader</strong>. Let's discuss how my 15+ years of operational experience can add value to your team.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-20">
              <a href="mailto:vijeshvip@gmail.com" className={`flex items-center gap-3 px-6 py-4 border rounded-2xl transition-all w-full md:w-auto group/mail cursor-pointer ${isLightOn ? 'bg-slate-50 border-slate-200 hover:border-blue-300 hover:bg-blue-50' : 'bg-slate-900/80 hover:bg-blue-500/10 border-slate-700 hover:border-blue-500/50'}`}>
                <Mail className={`transition-colors ${isLightOn ? 'text-slate-500 group-hover/mail:text-blue-500' : 'text-slate-400 group-hover/mail:text-blue-400'}`} />
                <span className={`font-medium ${isLightOn ? 'text-slate-700' : 'text-slate-200'}`}>vijeshvip@gmail.com</span>
              </a>
              <div className={`flex items-center gap-3 px-6 py-4 border rounded-2xl w-full md:w-auto transition-colors duration-1000 ${isLightOn ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-700'}`}>
                <Phone className={isLightOn ? 'text-slate-500' : 'text-slate-400'} />
                <span className={`font-medium ${isLightOn ? 'text-slate-700' : 'text-slate-200'}`}>9074348257</span>
              </div>
              <div className={`flex items-center gap-3 px-6 py-4 border rounded-2xl w-full md:w-auto transition-colors duration-1000 ${isLightOn ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/80 border-slate-700'}`}>
                <MapPin className={isLightOn ? 'text-slate-500' : 'text-slate-400'} />
                <span className={`font-medium ${isLightOn ? 'text-slate-700' : 'text-slate-200'}`}>Kerala, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className={`py-8 text-center border-t transition-colors duration-1000 relative z-10 ${isLightOn ? 'bg-slate-100 border-slate-200 text-slate-500' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
        <p>© {new Date().getFullYear()} Vijesh PR. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
