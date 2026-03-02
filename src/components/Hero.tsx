import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const userPhoto = "my photo.jpeg";
  const resumeLink = "aminul_islam_cv (2).pdf";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-flutter-blue/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-flutter-cyan/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flutter-blue/10 border border-flutter-blue/20 text-flutter-cyan text-xs font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flutter-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-flutter-cyan"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Crafting Seamless <br />
            <span className="text-gradient">Mobile Experiences</span> <br />
            with Flutter.
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            Hi, I'm <span className="text-white font-medium">Md. Aminul Islam Rasel</span>. 
            A Software Engineer dedicated to building high-performance, user-centric applications that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Projects <ArrowRight size={18} />
            </a>
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary flex items-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="flex items-center gap-6 text-gray-500">
            <a href="https://github.com/aminulislam1237" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/md-aminul-islam-rasel-a9573938b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:aminul.islam200256@gmail.com" className="hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-white/10 glass">
            <img 
              src={userPhoto} 
              alt="Md. Aminul Islam Rasel" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>
          
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-flutter-blue/20 rounded-xl flex items-center justify-center">
                <img src="https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a5952d1f8941c.png" alt="Flutter" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Expertise</p>
                <p className="text-sm font-bold">Flutter Developer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-500">
                <ArrowRight size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">Projects</p>
                <p className="text-sm font-bold">10+ Completed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
