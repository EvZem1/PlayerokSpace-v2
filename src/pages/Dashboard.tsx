import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { departments, articles } = useAppContext();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Пространства
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
            Управление департаментами и ресурсами
          </p>
        </div>
        <div className="text-sm font-medium text-gray-500 bg-white dark:bg-white/5 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 backdrop-blur-sm">
          {departments.length} активных отделов
        </div>
      </header>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[220px]"
      >
        {departments.map((dept) => {
          const isVip = dept.isVip;
          const articleCount = articles.filter(a => a.departmentId === dept.id).length;

          return (
            <motion.div
              key={dept.id}
              variants={item}
              layoutId={`card-${dept.id}`}
              onClick={() => navigate(`/department/${dept.id}`)}
              className={clsx(
                "group relative rounded-3xl p-6 cursor-pointer overflow-hidden transition-all duration-500",
                dept.colSpan || "col-span-1",
                isVip 
                  ? "bg-gradient-to-br from-slate-950 via-[#1a0b2e] to-black border border-amber-500/30 shadow-2xl shadow-purple-900/20" 
                  : "bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 shadow-xl shadow-gray-200/50 dark:shadow-black/50"
              )}
            >
              {/* Background Accents */}
              {!isVip && (
                <div className={clsx(
                  "absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-opacity duration-500 group-hover:opacity-10",
                  dept.color
                )} />
              )}
              
              {/* VIP Shine Effect */}
              {isVip && (
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
              )}

              <div className="relative h-full flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className={clsx(
                    "flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110",
                    "w-14 h-14", // Fixed uniform size
                    isVip 
                      ? "bg-gradient-to-br from-amber-300 to-amber-600 text-black shadow-lg shadow-amber-500/20" 
                      : `bg-gradient-to-br ${dept.color} text-white shadow-md`
                  )}>
                    <dept.icon className="w-7 h-7" />
                  </div>
                  
                  <div className={clsx(
                    "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300",
                    isVip ? "text-amber-400" : "text-gray-400 dark:text-gray-500"
                  )}>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  {isVip && (
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                      <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">Exclusive</span>
                    </div>
                  )}
                  <h3 className={clsx(
                    "text-xl font-bold mb-1 group-hover:translate-x-1 transition-transform",
                    isVip ? "font-serif text-3xl text-amber-50 italic" : "text-gray-900 dark:text-white"
                  )}>
                    {dept.title}
                  </h3>
                  <p className={clsx(
                    "text-sm line-clamp-2",
                    isVip ? "text-amber-200/60" : "text-gray-500 dark:text-gray-400"
                  )}>
                    {dept.description}
                  </p>
                </div>

                <div className={clsx(
                  "text-xs font-medium px-3 py-1 rounded-full w-fit mt-2",
                  isVip ? "bg-amber-900/30 text-amber-300 border border-amber-500/20" : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400"
                )}>
                  {articleCount} материалов
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};