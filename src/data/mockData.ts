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

export const initialDepartments: Department[] = [
  {
    id: "quality-control",
    title: "Контроль качества",
    description: "Стандарты и проверки",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-400",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    id: "hr",
    title: "HR",
    description: "Люди и культура",
    icon: Users,
    color: "from-pink-500 to-rose-400",
    colSpan: "col-span-1"
  },
  {
    id: "premium-support",
    title: "Премиум-поддержка",
    description: "Элитный сервис",
    icon: Crown,
    color: "volturi", // Special handler
    isVip: true,
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
  },
  {
    id: "sales",
    title: "Продавцы",
    description: "Коммерция и рост",
    icon: ShoppingBag,
    color: "from-green-500 to-emerald-400",
    colSpan: "col-span-1"
  },
  {
    id: "deals",
    title: "Сделки",
    description: "Управление контрактами",
    icon: Handshake,
    color: "from-orange-500 to-amber-400",
    colSpan: "col-span-1"
  },
  {
    id: "monitoring",
    title: "Мониторинг",
    description: "Аналитика 24/7",
    icon: Activity,
    color: "from-indigo-500 to-purple-400",
    colSpan: "col-span-1 md:col-span-2"
  },
  {
    id: "support",
    title: "Поддержка",
    description: "Помощь пользователям",
    icon: Headphones,
    color: "from-sky-500 to-blue-400",
    colSpan: "col-span-1"
  },
  {
    id: "operations",
    title: "Операционка",
    description: "Процессы и флоу",
    icon: Settings,
    color: "from-gray-600 to-slate-500",
    colSpan: "col-span-1"
  },
  {
    id: "moderation",
    title: "Модерация",
    description: "Чистота платформы",
    icon: Gavel,
    color: "from-red-500 to-red-400",
    colSpan: "col-span-1"
  }
];

const hrPolicyContent = `
<div class="space-y-6 text-gray-800 dark:text-gray-200">
  <p>Данный документ содержит ключевые положения, касающиеся процедуры прекращения сотрудничества для позиций: <strong>Агент (Junior / Middle / Senior), Старший смены, Наставник, Заместитель руководителя</strong>.</p>
  
  <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
    <h3 class="font-bold text-lg mb-2 flex items-center gap-2">
      📄 Основные положения
    </h3>
    <p>Политика компании в вопросе прекращения сотрудничества такова, что это является <strong>крайней мерой</strong>. Мы стремимся к открытой коммуникации.</p>
    <p class="mt-2">При нарушении NDA применяются штрафные санкции:</p>
    <ul class="list-disc pl-5 mt-1 font-medium">
      <li>1.500.000 руб. для операционных специалистов</li>
      <li>5.000.000 руб. для точечных специалистов</li>
    </ul>
  </div>

  <h3 class="text-xl font-bold mt-6 text-amber-600 dark:text-amber-400">⚠️ Система нарушений</h3>
  <p>Каждому зафиксированному нарушению присваивается определенное количество баллов. Критерии описаны на платформе Teamly.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    <a href="#" class="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
      <span class="text-blue-500">📄</span>
      <span>Регламент Поддержки</span>
    </a>
    <a href="#" class="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
      <span class="text-blue-500">⚖️</span>
      <span>Штрафные баллы Сделки</span>
    </a>
    <a href="#" class="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
      <span class="text-blue-500">🛡️</span>
      <span>Инструкция "Модератор"</span>
    </a>
    <a href="#" class="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
      <span class="text-blue-500">💼</span>
      <span>Регламент Продавцов</span>
    </a>
  </div>

  <h3 class="text-xl font-bold mt-6">Система баллов и выговоров</h3>
  <ul class="space-y-3">
    <li class="flex items-start gap-3">
      <div class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-bold min-w-[80px] text-center">5 баллов</div>
      <span>= 1 пометка.</span>
    </li>
    <li class="flex items-start gap-3">
      <div class="bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-2 py-1 rounded text-sm font-bold min-w-[80px] text-center">10 баллов</div>
      <span>(2 пометки) — Предупреждение о риске увольнения.</span>
    </li>
    <li class="flex items-start gap-3">
      <div class="bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 px-2 py-1 rounded text-sm font-bold min-w-[80px] text-center">15 баллов</div>
      <span>(3 пометки) — Прекращение сотрудничества.</span>
    </li>
  </ul>

  <div class="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
    <h4 class="font-bold mb-2">Типы выговоров:</h4>
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-left">
        <thead class="text-xs uppercase bg-gray-50 dark:bg-white/5">
          <tr>
            <th class="px-4 py-2 rounded-l-lg">Тип</th>
            <th class="px-4 py-2">Описание</th>
            <th class="px-4 py-2 rounded-r-lg">Баллы</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 dark:divide-gray-800">
          <tr>
            <td class="px-4 py-3 font-medium">Выговор</td>
            <td class="px-4 py-3">Нарушения средней тяжести (грубость, игнорирование).</td>
            <td class="px-4 py-3 font-bold">2</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-medium text-red-500">Строгий выговор</td>
            <td class="px-4 py-3">Тяжелые нарушения (оскорбления, дискриминация, буллинг).</td>
            <td class="px-4 py-3 font-bold">3</td>
          </tr>
           <tr>
            <td class="px-4 py-3 font-medium text-red-600">Разрыв</td>
            <td class="px-4 py-3">Нарушение NDA, саботаж, действия против имиджа проекта.</td>
            <td class="px-4 py-3 font-bold">15 (3 пометки)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
    * В конце каждого квартала баллы, не приведшие к пометке (до 4), списываются.
  </div>
</div>
`;

export const initialArticles: Article[] = [
  {
    id: "hr-policy-termination",
    departmentId: "hr",
    title: "Политика прекращения сотрудничества",
    excerpt: "Ключевые положения процедуры, система нарушений, баллы и последствия для операционных специалистов.",
    content: hrPolicyContent,
    author: "HR Lead",
    date: "2024-05-20",
    isFavorite: false,
    tags: ["Policy", "HR", "Important"]
  }
];