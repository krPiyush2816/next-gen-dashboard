'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, BookOpen, Activity, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: BookOpen, label: 'Courses' },
  { icon: Activity, label: 'Activity' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <nav className="fixed bottom-0 w-full md:relative md:w-20 lg:w-64 md:h-screen bg-neutral-950 border-t md:border-t-0 md:border-r border-neutral-800/50 flex md:flex-col items-center lg:items-start py-4 px-4 z-50">
      <div className="hidden lg:block text-emerald-400 font-bold text-xl mb-10 mt-4 px-4">
        NextGen UI
      </div>
      
      <ul className="flex md:flex-col w-full justify-between md:justify-start gap-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.label;
          
          return (
            <li key={item.label} className="w-full">
              <button 
                onClick={() => setActiveTab(item.label)}
                className={`relative flex items-center justify-center lg:justify-start w-full gap-4 p-3 rounded-xl transition-colors duration-200 ${
                  isActive ? 'text-emerald-400' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="sidebar-highlight"
                    className="absolute inset-0 bg-emerald-500/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                
                <item.icon size={24} className="relative z-10" />
                <span className="hidden lg:block font-medium relative z-10">
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}