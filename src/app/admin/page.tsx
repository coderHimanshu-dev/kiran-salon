"use client";

import { motion } from "framer-motion";
import { Calendar, Users, TrendingUp, IndianRupee, ArrowUpRight, Plus, Eye, Download } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Total Appointments", value: "128", icon: Calendar, trend: "+12%", trendUp: true },
  { label: "Today's Appointments", value: "5", icon: Calendar, trend: "Stable", trendUp: true },
  { label: "Total Customers", value: "5,000+", icon: Users, trend: "+2%", trendUp: true },
  { label: "Revenue This Month", value: "₹2,50,000", icon: IndianRupee, trend: "+18%", trendUp: true },
];

const recentAppointments = [
  { id: "APT-1045", name: "Ananya Rajput", service: "Bridal Makeup", date: "Today", time: "10:00 AM", status: "Confirmed" },
  { id: "APT-1046", name: "Priya Patel", service: "Hair Coloring", date: "Today", time: "01:30 PM", status: "Pending" },
  { id: "APT-1047", name: "Meera Joshi", service: "Facial Treatment", date: "Today", time: "03:00 PM", status: "Confirmed" },
  { id: "APT-1048", name: "Sneha Mehra", service: "Party Makeup", date: "Tomorrow", time: "11:00 AM", status: "Confirmed" },
  { id: "APT-1049", name: "Ritu Agarwal", service: "Hair Styling", date: "Tomorrow", time: "02:00 PM", status: "Pending" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm">Welcome back. Here is what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm font-medium transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <Link href="/admin/appointments" className="flex items-center gap-2 bg-[#0F0F0F] text-gold px-4 py-2 rounded-md hover:bg-[#1a1a1a] text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" />
            Add Booking
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${stat.trendUp ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'}`}>
                  {stat.trend}
                  <TrendingUp className="w-3 h-3" />
                </div>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900 font-heading">{stat.value}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Appointments Table */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold font-heading text-gray-900">Recent Appointments</h2>
          <Link href="/admin/appointments" className="text-sm font-medium text-gold hover:text-[#b8941e] flex items-center gap-1">
            View All <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Date & Time</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentAppointments.map((apt, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{apt.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{apt.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{apt.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <span className="block text-gray-900">{apt.date}</span>
                    <span className="text-xs">{apt.time}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      apt.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gold transition-colors p-1" title="View Details">
                      <Eye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
