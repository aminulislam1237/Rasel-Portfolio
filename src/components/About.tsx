import { motion } from 'motion/react';
import { User, Code, Rocket, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 glass aspect-video lg:aspect-square">
              <img 
                src="https://picsum.photos/seed/coding/800/800" 
                alt="Working" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-flutter-blue/20 to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-flutter-blue/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-flutter-cyan font-mono text-sm mb-4">
              <User size={16} />
              <span>About Me</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">The Story Behind The Code</h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I am a Software Engineering graduate from <span className="text-white font-medium">Daffodil International University (DIU)</span> with a deep passion for mobile app architecture. My journey in development is driven by a simple goal: solving real-world problems through clean, efficient code.
              </p>
              <p>
                Whether it's a complex E-commerce engine or a community service tool like <span className="text-flutter-cyan font-medium">'Mirzagonj Totho Seba,'</span> I focus on delivering quality and scalability. I believe that great software isn't just about functionality; it's about creating an experience that feels intuitive and empowering for the user.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-4 rounded-2xl glass border-white/5">
                <div className="w-10 h-10 bg-flutter-blue/20 rounded-xl flex items-center justify-center text-flutter-cyan mb-3">
                  <Code size={20} />
                </div>
                <h4 className="font-bold mb-1">Clean Code</h4>
                <p className="text-xs text-gray-500">Writing maintainable and scalable architectures.</p>
              </div>
              <div className="p-4 rounded-2xl glass border-white/5">
                <div className="w-10 h-10 bg-flutter-cyan/20 rounded-xl flex items-center justify-center text-flutter-cyan mb-3">
                  <Rocket size={20} />
                </div>
                <h4 className="font-bold mb-1">Performance</h4>
                <p className="text-xs text-gray-500">Optimizing for speed and smooth animations.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
