import { motion } from 'motion/react';
import { Cpu, Layout, Database, Terminal, GitBranch, Globe, Award, Code } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Terminal size={20} />,
    skills: ['Dart', 'Java', 'Kotlin', 'Python'],
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    title: 'Frameworks',
    icon: <Layout size={20} />,
    skills: ['Flutter (Expert)', 'Android SDK'],
    color: 'from-flutter-blue/20 to-flutter-cyan/20'
  },
  {
    title: 'State Management',
    icon: <Cpu size={20} />,
    skills: ['Bloc', 'Provider', 'GetX'],
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    title: 'Database',
    icon: <Database size={20} />,
    skills: ['Firebase', 'SQLite', 'Hive', 'Hive TypeAdapter'],
    color: 'from-amber-500/20 to-amber-600/20'
  },
  {
    title: 'Technical Skills',
    icon: <Code size={20} />,
    skills: ['Problem Solving', 'Competitive Coding', 'Data Structures', 'Machine Learning'],
    color: 'from-emerald-500/20 to-emerald-600/20'
  },
  {
    title: 'Tools & Others',
    icon: <GitBranch size={20} />,
    skills: ['Git', 'GitHub', 'REST APIs', 'Postman', 'OneSignal'],
    color: 'from-orange-500/20 to-orange-600/20'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skill Set</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My toolkit is built around the Flutter ecosystem, focusing on building high-performance cross-platform applications.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl glass border-white/5 bg-gradient-to-br ${category.color} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/10 text-sm font-medium text-gray-200 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
