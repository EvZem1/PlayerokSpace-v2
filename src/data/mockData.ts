import { 
  ShieldCheck, 
  Users, 
  Crown, 
  ShoppingBag, 
  Handshake, 
  Activity, 
  Headphones, 
  Settings, 
  Gavel 
} from 'lucide-react';
import { Department, User, Article } from '../types';

export const currentUser: User = {
  name: "Евгений",
  title: "Ведущий дизайнер / Методист",
  avatarUrl: "https://picsum.photos/200",
  isAdmin: true
};

export const departments: Department[] = [
  {
    id: "quality-control",
    title: "Контроль качества",
    description: "Стандарты и проверки",
    icon: ShieldCheck,
    articleCount: 12,
    color: "from-blue-500 to-cyan-400",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    id: "hr",
    title: "HR",
    description: "Люди и культура",
    icon: Users,
    articleCount: 8,
    color: "from-pink-500 to-rose-400",
    colSpan: "col-span-1"
  },
  {
    id: "premium-support",
    title: "Премиум-поддержка",
    description: "Элитный сервис",
    icon: Crown,
    articleCount: 5,
    color: "volturi", // Special handler
    isVip: true,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
  },
  {
    id: "sales",
    title: "Продавцы",
    description: "Коммерция и рост",
    icon: ShoppingBag,
    articleCount: 24,
    color: "from-green-500 to-emerald-400",
    colSpan: "col-span-1"
  },
  {
    id: "deals",
    title: "Сделки",
    description: "Управление контрактами",
    icon: Handshake,
    articleCount: 15,
    color: "from-orange-500 to-amber-400",
    colSpan: "col-span-1"
  },
  {
    id: "monitoring",
    title: "Мониторинг",
    description: "Аналитика 24/7",
    icon: Activity,
    articleCount: 42,
    color: "from-indigo-500 to-purple-400",
    colSpan: "col-span-1 md:col-span-2"
  },
  {
    id: "support",
    title: "Поддержка",
    description: "Помощь пользователям",
    icon: Headphones,
    articleCount: 156,
    color: "from-sky-500 to-blue-400",
    colSpan: "col-span-1"
  },
  {
    id: "operations",
    title: "Операционка",
    description: "Процессы и флоу",
    icon: Settings,
    articleCount: 9,
    color: "from-gray-600 to-slate-500",
    colSpan: "col-span-1"
  },
  {
    id: "moderation",
    title: "Модерация",
    description: "Чистота платформы",
    icon: Gavel,
    articleCount: 33,
    color: "from-red-500 to-red-400",
    colSpan: "col-span-1"
  }
];

export const mockArticles: Article[] = [
  {
    id: "art-1",
    departmentId: "premium-support",
    title: "Золотой стандарт обслуживания",
    excerpt: "Основные принципы коммуникации с VIP-клиентами и работа с возражениями высокого уровня.",
    content: "Здесь полный текст статьи о том, как правильно обслуживать VIP клиентов...",
    author: "Евгений",
    date: "2023-10-24",
    isFavorite: true,
    tags: ["VIP", "Service"]
  },
  {
    id: "art-2",
    departmentId: "hr",
    title: "Процесс онбординга 2024",
    excerpt: "Обновленный гайд для новых сотрудников. Шаги 1-10.",
    content: "Детали онбординга...",
    author: "Анна HR",
    date: "2023-11-01",
    isFavorite: false,
    tags: ["Onboarding", "HR"]
  }
];