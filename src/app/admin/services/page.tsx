"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { services as initialServices } from "@/lib/data";
import Image from "next/image";

export default function AdminServices() {
  const [services, setServices] = useState(initialServices);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading text-gray-900">Services</h1>
          <p className="text-gray-500 text-sm">Manage salon services, pricing, and details.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#0F0F0F] text-gold px-4 py-2 rounded-md hover:bg-[#1a1a1a] text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover" 
                unoptimized
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="w-8 h-8 rounded-full bg-white/90 text-gray-700 flex items-center justify-center hover:bg-gold hover:text-white transition-colors shadow-sm" title="Edit">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/90 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors shadow-sm" title="Delete">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading font-bold text-lg text-gray-900">{service.title}</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
                {service.shortDescription}
              </p>
              <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                <div className="text-sm font-medium text-gray-900">{service.priceRange}</div>
                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{service.duration}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
