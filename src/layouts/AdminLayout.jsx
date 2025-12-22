// src/layouts/AdminLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar for mobile */}
      <div className="lg:hidden">
        {/* The sidebar will handle its own overlay */}
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64">
        <Sidebar />
      </div>

      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <Sidebar 
          isMobileOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="py-6 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;