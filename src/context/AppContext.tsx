import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Department, Article } from '../types';
import { initialDepartments, initialArticles } from '../data/mockData';

interface AppContextType {
  departments: Department[];
  articles: Article[];
  updateDepartment: (id: string, updates: Partial<Department>) => void;
  addArticle: (article: Article) => void;
  deleteArticle: (id: string) => void;
  toggleFavorite: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [departments, setDepartments] = useState<Department[]>(initialDepartments);
  const [articles, setArticles] = useState<Article[]>(initialArticles);

  const updateDepartment = (id: string, updates: Partial<Department>) => {
    setDepartments(prev => prev.map(dept => 
      dept.id === id ? { ...dept, ...updates } : dept
    ));
  };

  const addArticle = (article: Article) => {
    setArticles(prev => [article, ...prev]);
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => prev.filter(a => a.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setArticles(prev => prev.map(a => 
      a.id === id ? { ...a, isFavorite: !a.isFavorite } : a
    ));
  };

  return (
    <AppContext.Provider value={{ departments, articles, updateDepartment, addArticle, deleteArticle, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};