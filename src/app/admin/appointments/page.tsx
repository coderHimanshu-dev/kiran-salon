"use client";

import { useState } from "react";
import { Search, Filter, Eye, CheckCircle, XCircle } from "lucide-react";

const initialAppointments = [
  { id: "APT-1045", name: "Ananya Rajput", service: "Bridal Makeup", date: "2026-06-10", time: "10:00 AM", phone: "+91 98765 43210", status: "Confirmed" },
  { id: "APT-1046", name: "Priya Patel", service: "Hair Coloring", date: "2026-06-10", time: "01:30 PM", phone: "+91 98765 43211", status: "Pending" },
  { id: "APT-1047", name: "Meera Joshi", service: "Facial Treatment", date: "2026-06-10", time: "03:00 PM", phone: "+91 98765 43212", status: "Confirmed" },
  { id: "APT-1048", name: "Sneha Mehra", service: "Party Makeup", date: "2026-06-11", time: "11:00 AM", phone: "+91 98765 43213", status: "Completed" },
  { id: "APT-1049", name: "Ritu Agarwal", service: "Hair Styling", date: "2026-06-11", time: "02:00 PM", phone: "+91 98765 43214", status: "Pending" },
  { id: "APT-1050", name: "Kavita Jain", service: "Nail Art", date: "2026-06-12", time: "12:00 PM", phone: "+91 98765 43215", status: "Cancelled" },
  { id: "APT-1051", name: "Deepika Singh", service: "HD Makeup", date: "2026-06-12", time: "04:00 PM", phone: "+91 98765 43216", status: "Confirmed" },
  { id: "APT-1052", name: "Nisha Gupta", service: "Waxing", date: "2026-06-13", time: "10:30 AM", phone: "+91 98765 43217", status: "Completed" },
  { id: "APT-1053", name: "Sunita Rathore", service: "Airbrush Makeup", date: "2026-06-13", time: "02:30 PM", phone: "+91 98765 43218", status: "Pending" },
  { id: "APT-1054", name: "Meenakshi Sharma", service: "Bridal Makeup", date: "2026-06-15", time: "09:00 AM", phone: "+91 98765 43219", status: "Confirmed" },
];

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = appointments.filter(apt => 
    apt.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    apt.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    setAppointments(appointments.map(apt => apt.id === id ? { ...apt, status: newStatus } : apt));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading text-gray-900">Appointments</h1>
          <p className="text-gray-500 text-sm">Manage all salon bookings here.</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by ID, Name or Service..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 w-full sm:w-auto">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-6 py-4 font-medium">ID & Customer</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Date & Time</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredAppointments.map((apt) => (
                <tr key={apt.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{apt.name}</div>
                    <div className="text-xs text-gray-500">{apt.id}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{apt.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="font-medium">{apt.date}</div>
                    <div className="text-gray-500 text-xs">{apt.time}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{apt.phone}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadge(apt.status)}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      {apt.status === 'Pending' && (
                        <button onClick={() => handleStatusChange(apt.id, 'Confirmed')} className="p-1 text-green-600 hover:bg-green-50 rounded" title="Confirm">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                      )}
                      {(apt.status === 'Pending' || apt.status === 'Confirmed') && (
                        <button onClick={() => handleStatusChange(apt.id, 'Cancelled')} className="p-1 text-red-600 hover:bg-red-50 rounded" title="Cancel">
                          <XCircle className="w-5 h-5" />
                        </button>
                      )}
                      <button className="p-1 text-gray-400 hover:text-gold hover:bg-gold/10 rounded" title="View Details">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredAppointments.length === 0 && (
            <div className="p-8 text-center text-gray-500">No appointments found matching your search.</div>
          )}
        </div>
      </div>
    </div>
  );
}
