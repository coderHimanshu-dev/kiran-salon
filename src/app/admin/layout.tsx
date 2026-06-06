"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Calendar, Users, Scissors, Image as ImageIcon, LogOut, Menu, X, ChevronRight } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authStatus = localStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else if (pathname !== "/admin/login") {
      router.push("/admin/login");
    }
    setIsLoading(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    setIsAuthenticated(false);
    router.push("/admin/login");
  };

  if (isLoading) return <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center"><div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin" /></div>;

  if (!isAuthenticated && pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!isAuthenticated) return null;

  const navLinks = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/appointments", label: "Appointments", icon: Calendar },
    { href: "/admin/customers", label: "Customers", icon: Users },
    { href: "/admin/services", label: "Services", icon: Scissors },
    { href: "/admin/gallery", label: "Gallery", icon: ImageIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <aside className={`fixed inset-y-0 left-0 bg-[#0F0F0F] border-r border-white/10 text-white z-40 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} hidden md:flex flex-col`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 shrink-0">
          {isSidebarOpen && (
            <span className="font-heading text-gold font-bold text-lg truncate">Kiran Admin</span>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/5 rounded-md text-white/70 mx-auto">
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} className={`flex items-center px-3 py-3 rounded-md transition-colors ${isActive ? 'bg-gold/10 text-gold' : 'text-white/60 hover:text-white hover:bg-white/5'} ${!isSidebarOpen && 'justify-center'}`}>
                    <Icon className="w-5 h-5 shrink-0" />
                    {isSidebarOpen && <span className="ml-3 font-medium text-sm">{link.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout} className={`flex items-center w-full px-3 py-3 rounded-md text-red-400 hover:bg-white/5 transition-colors ${!isSidebarOpen && 'justify-center'}`}>
            <LogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && <span className="ml-3 font-medium text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Sidebar - Mobile */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsSidebarOpen(true)} />
        )}
      </AnimatePresence>
      <aside className={`fixed inset-y-0 left-0 bg-[#0F0F0F] border-r border-white/10 text-white z-50 w-64 transform transition-transform duration-300 md:hidden flex flex-col ${!isSidebarOpen ? '-translate-x-full' : 'translate-x-0'}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 shrink-0">
          <span className="font-heading text-gold font-bold text-lg">Kiran Admin</span>
          <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-white/70">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setIsSidebarOpen(false)} className={`flex items-center px-3 py-3 rounded-md transition-colors ${isActive ? 'bg-gold/10 text-gold' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="ml-3 font-medium text-sm">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout} className="flex items-center w-full px-3 py-3 rounded-md text-red-400 hover:bg-white/5 transition-colors">
            <LogOut className="w-5 h-5 shrink-0" />
            <span className="ml-3 font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 md:px-6 z-10 shrink-0 sticky top-0 justify-between md:justify-end">
           <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold text-gray-900">Admin User</span>
              <span className="text-xs text-gray-500">Administrator</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gold text-[#0F0F0F] flex items-center justify-center font-bold font-heading">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
