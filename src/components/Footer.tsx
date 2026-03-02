import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 bg-flutter-blue rounded-lg flex items-center justify-center text-white font-mono text-sm">
                R
              </div>
              <span>Rasel<span className="text-flutter-cyan">.dev</span></span>
            </div>
            <p className="text-sm text-gray-500">Software Engineer & Flutter Expert</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/aminulislam1237" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/md-aminul-islam-rasel-a9573938b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:aminul.islam200256@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-gray-500 flex items-center gap-1.5">
              Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Rasel
            </p>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
