import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ThemeToggle } from './components/ThemeToggle';
import { Dashboard } from './pages/Dashboard';
import { DepartmentView } from './pages/DepartmentView';
import { currentUser } from './data/mockData';
import { AppProvider } from './context/AppContext';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#09090b] transition-colors duration-300">
      <Sidebar user={currentUser} />
      
      <div className="flex-1 md:ml-24 lg:ml-24 transition-all duration-300 min-w-0 flex flex-col">
        {/* Top Bar for Theme Toggle */}
        <div className="sticky top-0 z-30 flex justify-end p-4 pointer-events-none">
            <div className="pointer-events-auto">
                <ThemeToggle />
            </div>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="department/:id" element={<DepartmentView />} />
            <Route path="*" element={<div className="p-10 text-center text-gray-500">Страница в разработке</div>} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;