"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          (isScrolled || !isHome)
            ? "bg-[#0F0F0F]/95 backdrop-blur-xl shadow-luxury py-2 sm:py-3"
            : "bg-transparent py-3 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-gold rounded-xl flex items-center justify-center">
                  <span className="font-heading text-gold text-base sm:text-lg md:text-xl font-bold">
                    K
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-white text-base sm:text-lg md:text-xl tracking-wide leading-none">
                  Kiran
                </h1>
                <p className="text-gold text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] uppercase">
                  Beauty Salon
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 xl:px-4 py-2 text-sm tracking-wider uppercase transition-colors duration-300 group",
                    link.href === "/book"
                      ? "btn-luxury ml-3 xl:ml-4 text-xs !py-3 !px-5 xl:!px-6"
                      : "text-white/80 hover:text-gold"
                  )}
                >
                  {link.label}
                  {link.href !== "/book" && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Quick Actions + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="hidden md:flex items-center gap-2 text-white/70 hover:text-gold transition-colors p-2"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, "").replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 text-white/70 hover:text-green-400 transition-colors p-2"
                aria-label="WhatsApp us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2 -mr-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0F0F0F]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-5 sm:gap-6 px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-xl sm:text-2xl font-heading tracking-wider transition-colors duration-300",
                      link.href === "/book"
                        ? "btn-luxury mt-4 text-sm sm:text-base"
                        : "text-white/80 hover:text-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 mt-6 sm:mt-8"
              >
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">Call</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, "").replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
