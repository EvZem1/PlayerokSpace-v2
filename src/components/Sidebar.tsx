import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutGrid, Star, History, LogOut, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { User } from '../types';

interface SidebarProps {
  user: User;
}

export const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const location = useLocation();

  const toggleMobile = () => setIsOpen(!isOpen);
  const toggleDesktop = () => setIsDesktopCollapsed(!isDesktopCollapsed);

  const NavItem = ({ to, icon: Icon, label }: { to: string; icon: any; label: string }) => {
    const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
    
    return (
      <NavLink
        to={to}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) => clsx(
          "flex items-center gap-4 px-6 py-3.5 rounded-xl transition-all duration-200 group relative overflow-hidden", // Increased px and gap
          isActive 
            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
        )}
      >
        <Icon className={clsx("w-5 h-5 shrink-0 transition-transform duration-300", !isActive && "group-hover:scale-110")} />
        
        {/* Mobile: Always show label. Desktop: Show if not collapsed */}
        <span className={clsx(
          "font-medium whitespace-nowrap transition-all duration-300",
          "md:block", 
          isDesktopCollapsed ? "md:opacity-0 md:w-0 md:hidden" : "md:opacity-100 md:w-auto"
        )}>
          {label}
        </span>

        {isActive && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-blue-600 -z-10 rounded-xl"
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </NavLink>
    );
  };

  return (
    <>
      {/* Mobile Trigger */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button 
          onClick={toggleMobile}
          className="p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 dark:border-white/10"
        >
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobile}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 bg-white/90 dark:bg-[#121214]/90 backdrop-blur-xl border-r border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-300",
          isDesktopCollapsed ? "w-24" : "w-80", // Increased width
          // Mobile positioning
          "md:translate-x-0",
          isOpen ? "translate-x-0 w-[85vw]" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-4 md:p-6">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-10 px-2">
            <div className={clsx("flex items-center gap-3 overflow-hidden", isDesktopCollapsed && "justify-center w-full")}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-lg tracking-tighter">PL</span>
              </div>
              <span className={clsx(
                  "font-bold text-xl tracking-tight text-gray-900 dark:text-white whitespace-nowrap transition-opacity", 
                  isDesktopCollapsed ? "hidden" : "block"
              )}>
                PlayerokSpace
              </span>
            </div>
            
            {/* Collapse Button (Desktop) */}
            <button 
              onClick={toggleDesktop}
              className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 transition-colors"
            >
              <ChevronRight className={clsx("w-5 h-5 transition-transform", isDesktopCollapsed ? "" : "rotate-180")} />
            </button>
            
            {/* Close Button (Mobile) */}
            <button onClick={toggleMobile} className="md:hidden p-1">
               <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Nav */}
          <nav className="space-y-2 flex-1">
            <NavItem to="/" icon={LayoutGrid} label="Пространства" />
            <NavItem to="/favorites" icon={Star} label="Избранное" />
            <NavItem to="/recent" icon={History} label="Недавнее" />
          </nav>

          {/* User Profile Footer */}
          <div className="mt-auto pt-6 border-t border-gray-200 dark:border-white/10">
            <div className={clsx("flex items-center gap-3 p-2 rounded-xl transition-colors hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer", isDesktopCollapsed && "justify-center")}>
              <img 
                src={user.avatarUrl} 
                alt={user.name} 
                className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-700 shadow-sm shrink-0"
              />
              <div className={clsx("overflow-hidden transition-all", isDesktopCollapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100")}>
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[140px]">{user.title}</p>
              </div>
              <LogOut className={clsx("w-5 h-5 text-gray-400 ml-auto hover:text-red-500", isDesktopCollapsed && "hidden")} />
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};