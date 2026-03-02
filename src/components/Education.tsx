import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, MapPin } from 'lucide-react';

export default function Education() {
  const journey = [
    {
      title: 'B.Sc. in Software Engineering',
      institution: 'Daffodil International University (DIU)',
      period: 'January 2022 – 2025',
      focus: 'Software Architecture, Algorithm Design, Mobile Computing.',
      location: 'Dhaka, Bangladesh',
      icon: <GraduationCap size={20} />
    },
    {
      title: 'Higher Secondary Certificate (HSC), Science',
      institution: 'BCIC College',
      period: 'July 2018 – 2020',
      focus: 'Science Background',
      location: 'Dhaka, Bangladesh',
      icon: <BookOpen size={20} />
    },
    {
      title: 'Secondary School Certificate (SSC), Science',
      institution: 'Subidkhali R I Pilot High School',
      period: 'January 2016 – 2018',
      focus: 'Science Background',
      location: 'Patuakhali, Bangladesh',
      icon: <Award size={20} />
    }
  ];

  return (
    <section id="education" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-flutter-cyan font-mono text-sm mb-4">
              <GraduationCap size={16} />
              <span>Education</span>
            </div>
            <h2 className="text-4xl font-bold mb-8">Academic Foundation</h2>
            
            <div className="relative pl-8 border-l border-white/10 space-y-12">
              {journey.map((item, i) => (
                <div key={item.title} className="relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-flutter-blue border-4 border-[#0A0A0A]" />
                  <div className="mb-2">
                    <span className="px-3 py-1 rounded-full bg-flutter-blue/10 text-flutter-cyan text-xs font-bold">{item.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-flutter-cyan font-medium mb-2">{item.institution}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 glass p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold">Certifications</h3>
                <div className="w-12 h-12 bg-flutter-blue/20 rounded-2xl flex items-center justify-center text-flutter-cyan">
                  <Award size={24} />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs font-bold text-flutter-cyan uppercase tracking-widest mb-1">Flutter Development</p>
                  <p className="text-sm font-bold">App Development with Flutter (Ostad)</p>
                  <p className="text-xs text-gray-500 mt-1">Intensive training on Flutter, Dart, and state management.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs font-bold text-flutter-cyan uppercase tracking-widest mb-1">Data Science</p>
                  <p className="text-sm font-bold">Data Science Fundamentals</p>
                  <p className="text-xs text-gray-500 mt-1">Basics of data analysis and machine learning concepts.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs font-bold text-flutter-cyan uppercase tracking-widest mb-1">Product Management</p>
                  <p className="text-sm font-bold">ChatGPT for Product Management</p>
                  <p className="text-xs text-gray-500 mt-1">Leveraging AI for product innovation and management.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
