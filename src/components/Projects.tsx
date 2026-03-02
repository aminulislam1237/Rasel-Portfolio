import { motion } from 'motion/react';
import { ExternalLink, Github, ShoppingCart, MapPin, CheckSquare, IdCard } from 'lucide-react';

const projects = [
  {
    title: 'Mirzajong Tothho Seba',
    description: 'A modern, interactive community service app with real-time chat, notifications, and offline support.',
    problem: 'Citizens lacked a unified platform for local services, emergency contacts, and real-time updates.',
    solution: 'Integrated Firebase (Firestore, Remote Config) and OneSignal for a production-ready information hub.',
    features: ['Real-time Chat', 'Push Notifications', 'Offline Usage'],
    tech: ['Flutter', 'Firebase', 'Provider', 'OneSignal'],
    icon: <MapPin className="text-red-400" />,
    image: 'https://images.unsplash.com/photo-1582213726892-25b79945841c?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/aminulislam1237/Mirzajong_online_sheba'
  },
  {
    title: 'E-commerce Application',
    description: 'A complete shopping experience with product catalogs, cart management, and secure authentication.',
    problem: 'Need for a responsive, mobile-adaptable prototype with smooth animations and secure login.',
    solution: 'Built a feature-rich app with shimmer effects, SVG icons, and robust state management.',
    features: ['Product Catalog', 'Cart Management', 'PIN Login'],
    tech: ['Flutter', 'HTTP APIs', 'Provider', 'Shimmer'],
    icon: <ShoppingCart className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/aminulislam1237/rasel_shop'
  },
  {
    title: 'Task Manager',
    description: 'A productivity tool for organization, prioritization, and progress tracking.',
    problem: 'Users needed a simple yet powerful way to manage tasks with offline capabilities.',
    solution: 'Developed a reactive task management system with deadline reminders and collaborative features.',
    features: ['Task Prioritization', 'Progress Tracking', 'Offline Sync'],
    tech: ['Flutter', 'SQLite', 'Provider', 'HTTP APIs'],
    icon: <CheckSquare className="text-emerald-400" />,
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/aminulislam1237/task_manager'
  },
  {
    title: 'Student Card',
    description: 'An offline-first digital identification tool for institutional record management.',
    problem: 'Physical ID management is inefficient and prone to data loss.',
    solution: 'Implemented a lightweight ID system using Hive for fast local storage and QR integration.',
    features: ['QR Integration', 'Offline-First', 'Record Management'],
    tech: ['Flutter', 'Hive', 'Hive TypeAdapter'],
    icon: <IdCard className="text-purple-400" />,
    image: 'https://images.unsplash.com/photo-1523050335392-9ae574d799c6?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/aminulislam1237/student_card'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-xl">
              A selection of my recent work, showcasing a problem-solution approach to software development.
            </p>
          </motion.div>
          <motion.a
            href="https://github.com/aminulislam1237"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-flutter-cyan hover:underline font-medium"
          >
            View more on GitHub <ExternalLink size={18} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 glass mb-6 aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex gap-2 mt-1">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-gray-400">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Problem</p>
                    <p className="text-sm text-gray-400">{project.problem}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Solution</p>
                    <p className="text-sm text-gray-400">{project.solution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors"
                  >
                    <Github size={16} /> Source Code
                  </a>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-flutter-blue/20 hover:bg-flutter-blue/30 text-flutter-cyan text-sm font-medium transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
