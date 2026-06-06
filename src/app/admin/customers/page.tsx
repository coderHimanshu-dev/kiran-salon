"use client";

import { useState } from "react";
import { Search, Mail, Eye, Download } from "lucide-react";

const initialCustomers = [
  { id: "CUST-001", name: "Ananya Rajput", phone: "+91 98765 43210", email: "ananya.r@example.com", totalVisits: 12, lastVisit: "2026-06-05", totalSpent: "₹1,20,000" },
  { id: "CUST-002", name: "Priya Patel", phone: "+91 98765 43211", email: "priya.p@example.com", totalVisits: 8, lastVisit: "2026-06-01", totalSpent: "₹85,000" },
  { id: "CUST-003", name: "Meera Joshi", phone: "+91 98765 43212", email: "meera.j@example.com", totalVisits: 24, lastVisit: "2026-05-28", totalSpent: "₹2,50,000" },
  { id: "CUST-004", name: "Sneha Mehra", phone: "+91 98765 43213", email: "sneha.m@example.com", totalVisits: 3, lastVisit: "2026-05-20", totalSpent: "₹15,000" },
  { id: "CUST-005", name: "Ritu Agarwal", phone: "+91 98765 43214", email: "ritu.a@example.com", totalVisits: 15, lastVisit: "2026-05-15", totalSpent: "₹1,45,000" },
  { id: "CUST-006", name: "Kavita Jain", phone: "+91 98765 43215", email: "kavita.j@example.com", totalVisits: 1, lastVisit: "2026-05-10", totalSpent: "₹5,000" },
  { id: "CUST-007", name: "Deepika Singh", phone: "+91 98765 43216", email: "deepika.s@example.com", totalVisits: 6, lastVisit: "2026-05-01", totalSpent: "₹65,000" },
  { id: "CUST-008", name: "Nisha Gupta", phone: "+91 98765 43217", email: "nisha.g@example.com", totalVisits: 42, lastVisit: "2026-04-25", totalSpent: "₹4,20,000" },
];

export default function AdminCustomers() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = initialCustomers.filter(cust => 
    cust.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cust.phone.includes(searchTerm) ||
    cust.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading text-gray-900">Customers</h1>
          <p className="text-gray-500 text-sm">View and manage your client database.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm font-medium transition-colors">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by name, phone, or email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-6 py-4 font-medium">Customer Details</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Total Visits</th>
                <th className="px-6 py-4 font-medium">Last Visit</th>
                <th className="px-6 py-4 font-medium text-right">Total Spent</th>
                <th className="px-6 py-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCustomers.map((cust) => (
                <tr key={cust.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-sm shrink-0">
                        {cust.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{cust.name}</div>
                        <div className="text-xs text-gray-500">{cust.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="font-medium">{cust.phone}</div>
                    <div className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                      <Mail className="w-3 h-3" /> {cust.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 text-center">
                    {cust.totalVisits}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {cust.lastVisit}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 text-right">
                    {cust.totalSpent}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-1 text-gray-400 hover:text-gold hover:bg-gold/10 rounded inline-block" title="View Profile">
                      <Eye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredCustomers.length === 0 && (
            <div className="p-8 text-center text-gray-500">No customers found matching your search.</div>
          )}
        </div>
      </div>
    </div>
  );
}
