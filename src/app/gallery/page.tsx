"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { galleryImages } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  "All",
  "Bridal Makeup",
  "Party Makeup",
  "Hair Styling",
  "Hair Coloring",
  "Mehndi",
  "Nail Art",
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev !== null ? (prev === 0 ? filteredImages.length - 1 : prev - 1) : null
    );
  }, [selectedImage, filteredImages.length]);

  const goToNext = useCallback(() => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev !== null ? (prev === filteredImages.length - 1 ? 0 : prev + 1) : null
    );
  }, [selectedImage, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeLightbox, goToPrevious, goToNext]);

  return (
    <main className="min-h-screen">
      {/* ───────── Hero Section ───────── */}
      <section className="relative bg-primary py-24 sm:py-32 lg:py-40 overflow-hidden">
        {/* decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--color-gold)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <nav className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/50 mb-6 sm:mb-8">
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-gold transition-colors"
              >
                <Home size={14} />
                Home
              </Link>
              <span>/</span>
              <span className="text-gold">Gallery</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
              Our{" "}
              <span className="text-gradient-gold">Gallery</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="luxury-divider" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of stunning transformations — a curated showcase
              of beauty artistry at its finest.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───────── Filter Buttons ───────── */}
      <section className="bg-beige-light py-5 sm:py-8 border-b border-beige-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`shrink-0 px-4 sm:px-5 py-2.5 sm:py-2.5 text-xs sm:text-sm font-medium tracking-wide uppercase rounded-full transition-all duration-300 min-h-[44px] ${
                    activeFilter === category
                      ? "bg-gold text-primary shadow-lg shadow-gold/20"
                      : "bg-white text-salon-muted hover:text-salon-text hover:bg-beige border border-beige-dark/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───────── Masonry Gallery Grid ───────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 lg:gap-5 space-y-3 sm:space-y-4 lg:space-y-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${image.title}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image wrapper with aspect ratio variation for masonry effect */}
                  <div
                    className={`gallery-image relative ${
                      index % 3 === 0
                        ? "aspect-[3/4]"
                        : index % 3 === 1
                        ? "aspect-square"
                        : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 rounded-2xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 sm:p-6 rounded-2xl">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-gold text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-1 sm:mb-2 font-medium">
                          {image.category}
                        </p>
                        <h3 className="text-white font-heading text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">
                          {image.title}
                        </h3>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 delay-100">
                        <ZoomIn size={18} className="text-white sm:hidden" />
                        <ZoomIn size={22} className="text-white hidden sm:block" />
                      </div>
                    </div>

                    {/* Gold accent corner */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[3px] border-l-[3px] border-gold opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500 rounded-tl-2xl" />
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[3px] border-r-[3px] border-gold opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500 rounded-br-2xl" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <FadeIn>
              <div className="text-center py-12 sm:py-20">
                <p className="text-salon-muted text-base sm:text-lg">
                  No images found in this category.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ───────── Lightbox Modal ───────── */}
      <AnimatePresence>
        {selectedImage !== null && filteredImages[selectedImage] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-md" />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
              aria-label="Close lightbox"
            >
              <X size={20} className="text-white group-hover:text-gold transition-colors sm:hidden" />
              <X size={24} className="text-white group-hover:text-gold transition-colors hidden sm:block" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center transition-all group"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="text-white group-hover:text-gold transition-colors sm:hidden" />
              <ChevronLeft size={24} className="text-white group-hover:text-gold transition-colors hidden sm:block" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-gold/30 flex items-center justify-center transition-all group"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="text-white group-hover:text-gold transition-colors sm:hidden" />
              <ChevronRight size={24} className="text-white group-hover:text-gold transition-colors hidden sm:block" />
            </button>

            {/* Image container */}
            <motion.div
              className="relative z-10 max-w-5xl w-full mx-3 sm:mx-4 md:mx-8"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden">
                    <Image
                      src={filteredImages[selectedImage].src}
                      alt={filteredImages[selectedImage].title}
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="(max-width: 1280px) 90vw, 1200px"
                    />
                  </div>

                  {/* Image info */}
                  <div className="text-center mt-4 sm:mt-6">
                    <p className="text-gold text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-1 sm:mb-2 font-medium">
                      {filteredImages[selectedImage].category}
                    </p>
                    <h3 className="text-white font-heading text-lg sm:text-xl md:text-2xl font-semibold">
                      {filteredImages[selectedImage].title}
                    </h3>
                    <p className="text-white/40 text-xs sm:text-sm mt-2 sm:mt-3">
                      {selectedImage + 1} / {filteredImages.length}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ───────── CTA Section ───────── */}
      <section className="relative bg-primary py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            subtitle="Ready for Your Transformation?"
            title="Book Your Appointment Today"
            description="Let our expert artists create a look that's uniquely you. Your transformation story begins with a single appointment."
            light
          />

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Link href="/book" className="btn-luxury">
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="btn-luxury-outline"
              >
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
