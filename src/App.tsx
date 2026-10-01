import { useState, useEffect, useRef } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Mail, ChevronRight, MapPin, Phone, Download, Award, Lightbulb, CheckCircle2, ShieldCheck, Briefcase, MessageCircle, X, Send, Bot, User } from 'lucide-react';
import './App.css';

// Enhanced Typing Effect Component for psychological impact (Primacy Effect)
const TypingEffect = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000); 
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length); 
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 40 : 80, Math.random() * 100)); 

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="font-bold tracking-wide">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

// Chatbot Types
type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
};

function App() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Chatbot States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! Thank you for visiting my website. I am Vijesh's Virtual Assistant. How can I help you today? You can ask me about his experience, skills, or contact details.", sender: 'bot' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Psychological triggers (Authority & Social Proof)
  const skills = [
    "15+ Years Experience in Banking",
    "Expert in Debt Recovery",
    "Team Management & Leadership",
    "RCU Field Investigation",
    "Risk & Credit Operations",
    "Loan Document Verification"
  ];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isChatOpen]);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  // Smart Assistant Logic
  const generateBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("experience") || lowerInput.includes("work") || lowerInput.includes("job") || lowerInput.includes("background")) {
      return "Vijesh has over 15 years of solid experience in Banking and NBFCs. He has proven leadership skills, having worked as a Team Leader at Conneqt Business Solutions and as an Assistant Manager at Manappuram Finance Ltd.";
    }
    if (lowerInput.includes("skill") || lowerInput.includes("expert") || lowerInput.includes("strength")) {
      return "His key expertise includes Debt Recovery, RCU Field Investigation, Team Management, Branch Operations, and Risk & Credit Operations.";
    }
    if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("email") || lowerInput.includes("hire") || lowerInput.includes("number")) {
      return "You can reach Vijesh directly at vijeshvip@gmail.com or call him at +91-9074348257. He is based in Kerala, India and is open to leadership roles.";
    }
    if (lowerInput.includes("resume") || lowerInput.includes("cv") || lowerInput.includes("download")) {
      return "You can download his complete professional resume by clicking the 'Download Resume' button in the top section of this page!";
    }
    if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("hey")) {
      return "Hello there! How can I assist you in learning more about Vijesh's professional profile?";
    }
    
    return "Thank you for your message! For detailed business inquiries or to schedule an interview, please contact Vijesh directly at vijeshvip@gmail.com. You can also ask me about his 'experience', 'skills', or 'contact' info.";
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newUserMessage: Message = { id: Date.now(), text: chatInput, sender: 'user' };
    setMessages((prev) => [...prev, newUserMessage]);
    setChatInput('');

    // Simulate thinking delay for a more natural feel
    setTimeout(() => {
      const botResponse: Message = { id: Date.now() + 1, text: generateBotResponse(newUserMessage.text), sender: 'bot' };
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
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

  // Fixed text colors to bypass browser CSS overrides
  const mainTextColor = isLightOn ? 'text-[#0f172a]' : 'text-white';
  const subTextColor = isLightOn ? 'text-[#334155]' : 'text-slate-300';
  const bgColor = isLightOn ? 'bg-[#f8fafc]' : 'bg-[#0a0f1a]';

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-1000 ${bgColor} ${mainTextColor} selection:bg-blue-500 selection:text-white`}>

      {/* Interactive Spotlight (Cognitive Fluency - making navigation smooth and engaging) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${isLightOn ? 'rgba(255,255,255,0.7)' : 'rgba(59, 130, 246, 0.12)'}, transparent 80%)`,
        }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isLightOn ? 'bg-blue-600/20' : 'bg-white/10'}`}
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.6, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Interactive Light Switch */}
      <div className="fixed top-0 right-8 md:right-16 z-40 flex items-start gap-4">
        <div className={`transform origin-top transition-all duration-1000 flex flex-col items-center ${isLightOn ? 'scale-100 opacity-100' : 'scale-90 opacity-40'}`}>
          <div className="w-1 h-12 bg-slate-700"></div>
          <div className={`p-3 rounded-full transition-all duration-700 ${isLightOn ? 'bg-yellow-200 shadow-[0_0_60px_rgba(250,204,21,1)]' : 'bg-slate-800 border border-slate-700'}`}>
            <Lightbulb size={32} className={`transition-colors duration-700 ${isLightOn ? 'text-yellow-600 fill-yellow-500' : 'text-slate-500'}`} />
          </div>
        </div>

        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.4}
          onDragEnd={(_event, info) => {
            if (info.offset.y > 40) toggleLight();
          }}
          className="flex flex-col items-center cursor-grab active:cursor-grabbing group"
          title="Pull down to switch mode!"
        >
          <div className="w-1 h-24 md:h-32 bg-gradient-to-b from-slate-600 to-slate-400 border-x border-slate-700 rounded-b-full"></div>
          <div className="w-4 h-10 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full shadow-lg border border-amber-900 flex items-end justify-center pb-1 group-hover:scale-110 transition-transform">
            <div className="w-2 h-2 rounded-full bg-amber-900/50"></div>
          </div>
          <span className={`text-[10px] mt-2 font-bold transition-opacity ${isLightOn ? 'text-slate-500' : 'text-slate-400'} opacity-0 group-hover:opacity-100`}>PULL</span>
        </motion.div>
      </div>

      {/* Hero Section (F-Pattern Scanning Optimization) */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-12 z-10">
        <div className={`absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full blur-[120px] transition-opacity duration-1000 ${isLightOn ? 'opacity-0' : 'bg-red-600/10 opacity-100'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full blur-[120px] transition-opacity duration-1000 ${isLightOn ? 'opacity-0' : 'bg-blue-600/10 opacity-100'}`}></div>

        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          
          <div className="md:w-1/2 text-center md:text-left">
            {/* Dynamic Status Badge (Recency Effect - immediate impact) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border mb-8 transition-colors duration-1000 ${isLightOn ? 'bg-white border-blue-200 shadow-xl text-[#0f172a]' : 'bg-slate-800/90 border-slate-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-white'}`}
            >
              <ShieldCheck size={20} className="text-blue-500" />
              <TypingEffect words={skills} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight ${mainTextColor}`}
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
              className={`text-lg md:text-xl mb-10 leading-relaxed font-medium ${subTextColor} max-w-xl mx-auto md:mx-0`}
            >
              Banking and NBFC professional with extensive expertise. Proven track record as an <strong className={mainTextColor}>Assistant Manager</strong> and <strong className={mainTextColor}>Team Leader</strong>, specializing in Debt Collection, Operations, and Team Management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 relative z-20"
            >
              <a href="#experience" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all flex items-center gap-2 transform hover:scale-105 shadow-[0_0_25px_rgba(79,70,229,0.5)] cursor-pointer">
                Explore Experience <ChevronRight size={20} />
              </a>
              <a href="/resume/Vijesh-PR-Resume.pdf" download className={`px-8 py-4 border font-semibold rounded-xl transition-all flex items-center gap-2 transform hover:scale-105 cursor-pointer ${isLightOn ? 'bg-white border-slate-300 text-[#0f172a] hover:bg-slate-50 shadow-md' : 'bg-slate-800 hover:bg-slate-700 border-slate-500 text-white'}`}>
                Download Resume <Download size={20} />
              </a>
            </motion.div>
          </div>

          {/* Profile Photo (Halo Effect - using premium golden/RGB borders) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:w-1/2 flex justify-center z-10"
          >
            <div className="relative w-64 h-64 md:w-[350px] md:h-[350px] rounded-full p-2 flex items-center justify-center group">
              <div className={`absolute inset-0 rounded-full rgb-border-animation ${isLightOn ? 'shadow-[0_0_40px_rgba(59,130,246,0.3)]' : 'shadow-[0_0_40px_rgba(0,255,0,0.3)]'} transition-shadow duration-500 group-hover:scale-105`}></div>
              <img
                src="/images/vijesh-pr.jpg"
                alt="Vijesh PR"
                className={`relative z-10 w-full h-full object-cover rounded-full border-[6px] transition-all duration-1000 ${isLightOn ? 'border-white shadow-2xl' : 'border-[#0a0f1a]'} group-hover:scale-[1.02]`}
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Vijesh+PR&background=0D8ABC&color=fff&size=512";
                }}
              />
              {/* Trust Signal Badge */}
              <div className="absolute bottom-4 right-4 z-20 bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-3 rounded-full shadow-xl border-2 border-white transform hover:scale-110 transition-transform" title="15+ Years of Excellence">
                <Award size={28} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section (Information Hierarchy & Chunking) */}
      <section id="experience" className={`py-24 px-6 relative border-t transition-colors duration-1000 z-10 ${isLightOn ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/50 border-slate-800'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-16"
          >
            <div className={`p-4 rounded-xl border transition-colors duration-1000 ${isLightOn ? 'bg-blue-100 border-blue-300' : 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-blue-500/30'}`}>
              <Briefcase className="text-blue-500" size={32} />
            </div>
            <h2 className={`text-4xl md:text-5xl font-extrabold transition-colors duration-1000 ${mainTextColor}`}>Professional Journey</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {/* Managerial Role 1 */}
            <motion.div variants={fadeInUp} className={`group relative p-8 md:p-10 rounded-2xl border transition-all duration-500 overflow-hidden ${isLightOn ? 'bg-white border-slate-200 hover:border-blue-500 hover:shadow-2xl' : 'bg-slate-800/40 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/60'}`}>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className={`text-2xl font-bold transition-colors ${mainTextColor} group-hover:text-blue-500`}>Team Leader – Debt Collection</h3>
                  <p className="text-blue-500 font-bold text-lg mt-1 flex items-center gap-2">
                    Conneqt Business Solutions <CheckCircle2 size={16} className="text-blue-500" />
                  </p>
                </div>
                <span className={`px-5 py-2 rounded-xl text-sm font-bold border ${isLightOn ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-slate-900 text-blue-400 border-blue-900/50'}`}>Leadership Role</span>
              </div>
              <ul className={`space-y-3 leading-relaxed transition-colors font-medium ${subTextColor}`}>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">▹</span> Managed day-to-day activities of a debt collection team and monitored team performance against targets.</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">▹</span> Allocated collection tasks, reviewed performance, and provided operational guidance.</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">▹</span> Handled escalations, resolved complex customer issues, and prepared MIS reports.</li>
              </ul>
            </motion.div>

            {/* Managerial Role 2 */}
            <motion.div variants={fadeInUp} className={`group relative p-8 md:p-10 rounded-2xl border transition-all duration-500 overflow-hidden ${isLightOn ? 'bg-white border-slate-200 hover:border-green-500 hover:shadow-2xl' : 'bg-slate-800/40 border-slate-700 hover:border-green-500/50 hover:bg-slate-800/60'}`}>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className={`text-2xl font-bold transition-colors ${mainTextColor} group-hover:text-green-500`}>Assistant Manager – Branch Operations</h3>
                  <p className="text-green-500 font-bold text-lg mt-1 flex items-center gap-2">
                    Manappuram Finance Ltd. <CheckCircle2 size={16} className="text-green-500" />
                  </p>
                </div>
                <span className={`px-5 py-2 rounded-xl text-sm font-bold border ${isLightOn ? 'bg-slate-100 text-[#0f172a] border-slate-300' : 'bg-slate-900 text-slate-200 border-slate-700'}`}>Feb 2006 – Feb 2009</span>
              </div>
              <ul className={`space-y-3 leading-relaxed transition-colors font-medium ${subTextColor}`}>
                <li className="flex items-start gap-3"><span className="text-green-500 mt-1">▹</span> Handled day-to-day branch operations and managed customer service activities.</li>
                <li className="flex items-start gap-3"><span className="text-green-500 mt-1">▹</span> Supervised operational processes, handled cash transactions, and supported overall branch management.</li>
                <li className="flex items-start gap-3"><span className="text-green-500 mt-1">▹</span> Maintained strict accuracy in financial and customer-related transactions.</li>
              </ul>
            </motion.div>

            {/* Role 3 */}
            <motion.div variants={fadeInUp} className={`group relative p-8 md:p-10 rounded-2xl border transition-all duration-500 overflow-hidden ${isLightOn ? 'bg-white border-slate-200 hover:border-red-500 hover:shadow-2xl' : 'bg-slate-800/40 border-slate-700 hover:border-red-500/50 hover:bg-slate-800/60'}`}>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className={`text-2xl font-bold transition-colors ${mainTextColor} group-hover:text-red-500`}>Field Collection Associate</h3>
                  <p className="text-red-500 font-bold text-lg mt-1">HDB Financial Services</p>
                </div>
                <span className={`px-5 py-2 rounded-xl text-sm font-bold border ${isLightOn ? 'bg-slate-100 text-[#0f172a] border-slate-300' : 'bg-slate-900 text-slate-200 border-slate-700'}`}>May 2023 – Present</span>
              </div>
              <ul className={`space-y-3 leading-relaxed transition-colors font-medium ${subTextColor}`}>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">▹</span> Execute field-level collection operations for overdue heavy construction equipment finance accounts.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">▹</span> Conduct on-site customer visits, follow up on outstanding payments, and negotiate repayment arrangements.</li>
              </ul>
            </motion.div>

            {/* Role 4 */}
            <motion.div variants={fadeInUp} className={`group relative p-8 md:p-10 rounded-2xl border transition-all duration-500 overflow-hidden ${isLightOn ? 'bg-white border-slate-200 hover:border-indigo-500 hover:shadow-2xl' : 'bg-slate-800/40 border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800/60'}`}>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className={`text-2xl font-bold transition-colors ${mainTextColor} group-hover:text-indigo-500`}>Executive – Field Operations (RCU)</h3>
                  <p className="text-indigo-500 font-bold text-lg mt-1">JRSCA Consulting & Advisory</p>
                </div>
                <span className={`px-5 py-2 rounded-xl text-sm font-bold border ${isLightOn ? 'bg-slate-100 text-[#0f172a] border-slate-300' : 'bg-slate-900 text-slate-200 border-slate-700'}`}>Feb 2015 – Mar 2020</span>
              </div>
              <ul className={`space-y-3 leading-relaxed transition-colors font-medium ${subTextColor}`}>
                <li className="flex items-start gap-3"><span className="text-indigo-500 mt-1">▹</span> Conducted RCU field investigations and verified loan applications across client premises.</li>
                <li className="flex items-start gap-3"><span className="text-indigo-500 mt-1">▹</span> Scrutinized identity proofs, Land Tax documents, RC, and property records.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section (Peak-End Rule - leaving a strong final impression) */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`p-12 md:p-20 rounded-[3rem] border text-center relative shadow-2xl overflow-hidden group transition-colors duration-1000 ${isLightOn ? 'bg-white border-blue-200' : 'bg-slate-800/80 border-slate-700'}`}
          >
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500/30 rounded-[3rem] transition-colors duration-500 pointer-events-none"></div>
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent ${isLightOn ? 'via-blue-500' : 'via-blue-400'} to-transparent opacity-90 rounded-b-full`}></div>

            <h2 className={`text-4xl md:text-6xl font-extrabold mb-6 transition-colors duration-1000 ${mainTextColor}`}>Let's Build Together</h2>
            <p className={`mb-12 text-xl max-w-3xl mx-auto font-semibold transition-colors duration-1000 ${subTextColor}`}>
              Ready to take on leadership roles as a <strong className="text-blue-500">Collection Manager</strong> or <strong className="text-green-500">Team Leader</strong>. Let's discuss how my 15+ years of operational experience can add value to your organization.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-20">
              <a href="mailto:vijeshvip@gmail.com" className={`flex items-center justify-center gap-3 px-8 py-5 border rounded-2xl transition-all w-full md:w-auto group/mail cursor-pointer shadow-lg ${isLightOn ? 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700 hover:shadow-blue-500/30' : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-500 hover:shadow-blue-500/40'}`}>
                <Mail className="text-white" size={24} />
                <span className="font-bold text-lg">vijeshvip@gmail.com</span>
              </a>
              <div className={`flex items-center justify-center gap-3 px-8 py-5 border rounded-2xl w-full md:w-auto transition-colors duration-1000 shadow-sm ${isLightOn ? 'bg-slate-50 border-slate-200 hover:bg-white' : 'bg-slate-900/80 border-slate-700'}`}>
                <Phone className="text-blue-500" size={24} />
                <span className={`font-bold text-lg ${mainTextColor}`}>9074348257</span>
              </div>
              <div className={`flex items-center justify-center gap-3 px-8 py-5 border rounded-2xl w-full md:w-auto transition-colors duration-1000 shadow-sm ${isLightOn ? 'bg-slate-50 border-slate-200 hover:bg-white' : 'bg-slate-900/80 border-slate-700'}`}>
                <MapPin className="text-blue-500" size={24} />
                <span className={`font-bold text-lg ${mainTextColor}`}>Kerala, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className={`py-10 text-center border-t transition-colors duration-1000 relative z-10 ${isLightOn ? 'bg-slate-100 border-slate-200 text-slate-600' : 'bg-[#050810] border-slate-800 text-slate-400'}`}>
        <p className="font-medium">© {new Date().getFullYear()} Vijesh PR. All rights reserved.</p>
      </footer>

      {/* --- SMART AI ASSISTANT CHATBOT UI WITH GLASSMORPHISM --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`mb-4 w-80 sm:w-[400px] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border backdrop-blur-2xl transition-colors duration-500 ${isLightOn ? 'bg-white/70 border-white/60 shadow-blue-900/10' : 'bg-slate-900/70 border-slate-700/50 shadow-black/50'}`}
              style={{ height: '480px' }}
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md p-5 flex items-center justify-between text-white border-b border-white/10 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base tracking-wide">Vijesh's Assistant</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      <p className="text-xs text-blue-50 opacity-90 font-medium">Online & Ready</p>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Chat Messages Body */}
              <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5 bg-transparent custom-scrollbar">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${msg.sender === 'user' ? 'bg-blue-600' : 'bg-indigo-600'}`}>
                      {msg.sender === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-white" />}
                    </div>
                    <div className={`p-3.5 text-sm leading-relaxed shadow-sm font-medium ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm' : isLightOn ? 'bg-white/90 border border-slate-200/50 text-slate-800 rounded-2xl rounded-tl-sm' : 'bg-slate-800/90 border border-slate-600/50 text-slate-100 rounded-2xl rounded-tl-sm'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Stylish Solid Chat Input to fix visibility issue */}
              <form onSubmit={handleSendMessage} className={`p-4 border-t flex gap-3 bg-transparent ${isLightOn ? 'border-slate-200/50' : 'border-slate-700/50'}`}>
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className={`flex-1 px-4 py-3 rounded-full text-sm font-medium outline-none border transition-all duration-300 ${
                    isLightOn 
                      ? 'bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20' 
                      : 'bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40'
                  }`}
                />
                <button 
                  type="submit" 
                  disabled={!chatInput.trim()}
                  className={`w-11 h-11 rounded-full text-white transition-all duration-300 flex items-center justify-center shadow-md flex-shrink-0 ${chatInput.trim() ? 'bg-blue-600 hover:bg-blue-700 hover:scale-105' : 'bg-slate-400/50 cursor-not-allowed opacity-70'}`}
                >
                  <Send size={18} className={chatInput.trim() ? "ml-1" : ""} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Chat Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] ${isChatOpen ? 'rotate-90' : 'rotate-0'}`}
          style={{ transitionDuration: '0.3s' }}
        >
          {isChatOpen ? <X size={30} /> : <MessageCircle size={30} />}
        </motion.button>

      </div>

    </div>
  );
}

export default App;
