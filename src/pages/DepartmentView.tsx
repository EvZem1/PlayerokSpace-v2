import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { departments, mockArticles, currentUser } from '../data/mockData';
import { ArrowLeft, Edit3, Trash2, Star, Save, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { Article } from '../types';

export const DepartmentView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [articles, setArticles] = useState(mockArticles.filter(a => a.departmentId === id));

  const dept = departments.find(d => d.id === id);

  if (!dept) {
    return <div className="p-10 text-center">Department not found</div>;
  }

  const isVip = dept.isVip;

  return (
    <div className={clsx(
      "min-h-screen transition-colors duration-500",
      isVip 
        ? "bg-volturi-dark text-amber-50 font-serif" 
        : ""
    )}>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={clsx(
          "relative rounded-b-[3rem] px-8 py-16 mb-10 overflow-hidden",
          isVip 
            ? "bg-gradient-to-b from-black via-volturi-purple to-volturi-dark border-b border-amber-500/20" 
            : "bg-white dark:bg-[#1c1c1e] shadow-sm border-b border-gray-100 dark:border-white/5"
        )}
      >
        <div className="absolute top-4 left-4 z-20">
          <button 
            onClick={() => navigate('/')}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:pr-6",
              isVip 
                ? "text-amber-400 hover:bg-amber-900/20" 
                : "text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 dark:text-gray-300"
            )}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-sans font-medium">Назад</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className={clsx(
              "inline-flex p-4 rounded-3xl mb-6",
              isVip 
                ? "bg-gradient-to-br from-amber-300 to-amber-600 shadow-xl shadow-amber-500/30 text-black" 
                : `bg-gradient-to-br ${dept.color} text-white shadow-lg`
            )}
          >
            <dept.icon className="w-12 h-12" />
          </motion.div>
          
          {isEditing ? (
              <input 
                  defaultValue={dept.title}
                  className={clsx("block w-full text-center text-4xl font-bold bg-transparent border-b-2 outline-none mb-4", isVip ? "border-amber-500 text-amber-50" : "border-blue-500 text-gray-900 dark:text-white")}
              />
          ) : (
              <h1 className={clsx(
              "text-4xl md:text-6xl font-bold mb-4 tracking-tight",
              isVip ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 drop-shadow-lg italic" : "text-gray-900 dark:text-white"
              )}>
              {dept.title}
              </h1>
          )}

          <p className={clsx(
            "text-xl max-w-2xl mx-auto",
            isVip ? "text-amber-200/70 font-sans font-light" : "text-gray-500 dark:text-gray-400"
          )}>
            {dept.description}
          </p>

          {currentUser.isAdmin && (
              <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className={clsx(
                      "absolute top-0 right-0 p-3 rounded-full transition-colors",
                      isVip ? "bg-amber-500/10 text-amber-400 hover:bg-amber-500/20" : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300"
                  )}
              >
                  {isEditing ? <Save className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
              </button>
          )}
        </div>

        {/* Decorative Background for VIP */}
        {isVip && (
          <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        )}
      </motion.div>
      
      <main className="max-w-4xl mx-auto px-6 pb-20">
        <div className="flex justify-between items-center mb-8">
            <h2 className={clsx("text-2xl font-bold", isVip ? "text-amber-100" : "text-gray-900 dark:text-white")}>
                База знаний
            </h2>
            {currentUser.isAdmin && (
                <button className={clsx(
                    "flex items-center gap-2 px-4 py-2 rounded-xl transition-transform hover:scale-105 active:scale-95",
                    isVip ? "bg-amber-600 text-black font-sans font-bold" : "bg-blue-600 text-white font-medium"
                )}>
                    <Plus className="w-4 h-4" />
                    <span>Создать статью</span>
                </button>
            )}
        </div>

        <div className="space-y-6">
          {articles.length === 0 ? (
             <div className="text-center py-20 opacity-50">В этом разделе пока нет статей.</div>
          ) : (
             articles.map((article: Article, idx) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={clsx(
                    "group relative p-6 md:p-8 rounded-3xl transition-all hover:scale-[1.01]",
                    isVip 
                      ? "bg-white/5 border border-amber-500/20 hover:border-amber-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]" 
                      : "bg-white dark:bg-[#1c1c1e] border border-gray-100 dark:border-white/5 hover:shadow-xl dark:hover:shadow-black/50"
                  )}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-xs font-medium opacity-60 font-sans">
                        <span className={clsx("px-2 py-1 rounded-md", isVip ? "bg-amber-900/50 text-amber-300" : "bg-gray-100 dark:bg-white/10")}>
                            {article.tags[0]}
                        </span>
                        <span>•</span>
                        <span>{article.date}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10">
                            <Star className={clsx("w-5 h-5", article.isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400")} />
                         </button>
                         {currentUser.isAdmin && (
                            <button className="p-2 rounded-full hover:bg-red-500/10 text-gray-400 hover:text-red-500">
                                <Trash2 className="w-5 h-5" />
                            </button>
                         )}
                    </div>
                  </div>

                  <h3 className={clsx(
                    "text-2xl font-bold mb-3",
                    isVip ? "text-amber-50 font-serif tracking-wide" : "text-gray-900 dark:text-white"
                  )}>
                    {article.title}
                  </h3>
                  
                  <p className={clsx(
                    "mb-6 leading-relaxed font-sans",
                    isVip ? "text-amber-100/70" : "text-gray-600 dark:text-gray-400"
                  )}>
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-dashed pt-4 border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center text-[10px] text-gray-700 font-bold">
                            {article.author.charAt(0)}
                        </div>
                        <span className="text-sm opacity-60 font-sans">{article.author}</span>
                    </div>
                    <button className={clsx(
                        "text-sm font-medium hover:underline font-sans",
                        isVip ? "text-amber-400" : "text-blue-500"
                    )}>
                        Читать далее →
                    </button>
                  </div>
                </motion.div>
             ))
          )}
        </div>
      </main>
    </div>
  );
};