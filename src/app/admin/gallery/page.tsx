"use client";

import { useState } from "react";
import { Upload, Trash2 } from "lucide-react";
import { galleryImages as initialGallery } from "@/lib/data";
import Image from "next/image";

export default function AdminGallery() {
  const [images, setImages] = useState(initialGallery);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading text-gray-900">Gallery</h1>
          <p className="text-gray-500 text-sm">Manage portfolio images showcased on the website.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#0F0F0F] text-gold px-4 py-2 rounded-md hover:bg-[#1a1a1a] text-sm font-medium transition-colors">
          <Upload className="w-4 h-4" />
          Upload Images
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div key={index} className="group relative aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
            <Image 
              src={img.src} 
              alt={img.title} 
              fill 
              className="object-cover" 
              unoptimized
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
              <span className="text-xs text-gold uppercase tracking-wider mb-1 block">{img.category}</span>
              <span className="text-sm font-medium text-white mb-4 line-clamp-2">{img.title}</span>
              <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors" title="Delete Image">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        
        {/* Upload Placeholder */}
        <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 hover:text-gold hover:border-gold hover:bg-gold/5 transition-colors cursor-pointer bg-white">
          <Upload className="w-8 h-8 mb-2 opacity-50" />
          <span className="text-sm font-medium">Click to Upload</span>
        </div>
      </div>
    </div>
  );
}
