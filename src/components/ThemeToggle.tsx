import React, { useEffect, useState } from 'react';
import { Sun, Moon, Clock } from 'lucide-react';
import { ThemeMode } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as ThemeMode) || 'auto';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'auto') {
      const hour = new Date().getHours();
      const isNight = hour >= 20 || hour < 6;
      root.classList.add(isNight ? 'dark' : 'light');
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const cycleTheme = () => {
    const modes: ThemeMode[] = ['light', 'dark', 'auto'];
    const nextIndex = (modes.indexOf(theme) + 1) % modes.length;
    setTheme(modes[nextIndex]);
  };

  const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Clock;

  return (
    <button
      onClick={cycleTheme}
      className="relative p-2 rounded-full bg-white/10 hover:bg-black/5 dark:hover:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/10 transition-all active:scale-95 group"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-amber-400" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-2 py-0.5 rounded pointer-events-none capitalize">
        {theme}
      </div>
    </button>
  );
};