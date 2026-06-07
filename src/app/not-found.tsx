"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center relative overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gold rounded-full mix-blend-screen filter blur-[100px] sm:blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gold/50 rounded-full mix-blend-screen filter blur-[100px] sm:blur-[128px]" />
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-7xl sm:text-8xl md:text-9xl font-bold text-gradient-gold mb-4"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/60 mb-8 sm:mb-10 max-w-md mx-auto text-sm sm:text-base leading-relaxed"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/" className="btn-luxury">
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
