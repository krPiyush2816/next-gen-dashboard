'use client';

import { motion, Variants } from 'framer-motion';
import { Atom, Binary, Zap, HelpCircle } from 'lucide-react';

const getIcon = (name: string) => {
  switch (name) {
    case 'atom': return <Atom size={24} className="text-emerald-400" />;
    case 'binary': return <Binary size={24} className="text-emerald-400" />;
    case 'zap': return <Zap size={24} className="text-emerald-400" />;
    default: return <HelpCircle size={24} className="text-emerald-400" />;
  }
};

export default function CourseGrid({ courses }: { courses: any[] }) {
  
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 20 } 
    }
  };

  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]"
    >
      <motion.article 
        variants={item}
        className="col-span-1 md:col-span-2 lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
        <h2 className="text-2xl font-semibold z-10">Your Progress</h2>
        <div className="h-24 bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-center text-neutral-500 z-10">
          [Activity Chart Placeholder]
        </div>
      </motion.article>

      {courses?.map((course) => (
        <motion.article 
          key={course.id}
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-colors rounded-3xl p-6 flex flex-col justify-between cursor-pointer"
        >
          <div>
            <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-full flex items-center justify-center mb-4">
              {getIcon(course.icon_name)}
            </div>
            <h3 className="font-semibold text-lg">{course.title}</h3>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-2 text-neutral-400">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full h-2 bg-neutral-950 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="h-full bg-emerald-500" 
              />
            </div>
          </div>
        </motion.article>
      ))}
    </motion.section>
  );
}