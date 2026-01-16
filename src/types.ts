import { LucideIcon } from "lucide-react";

export interface User {
  name: string;
  title: string;
  avatarUrl: string;
  isAdmin: boolean;
}

export type ThemeMode = 'light' | 'dark' | 'auto';

export interface Department {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  articleCount: number;
  color: string; // Tailwind gradient or color class
  isVip?: boolean; // For "Volturi" theme
  colSpan?: string; // For Bento Grid layout (e.g., col-span-2)
}

export interface Article {
  id: string;
  departmentId: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  isFavorite: boolean;
  tags: string[];
}