"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  Clock,
  IndianRupee,
  Calendar,
  Phone,
  Crown,
  Sparkles,
  Wind,
  PartyPopper,
  Scissors,
  Palette,
  Flower2,
  Heart,
  PenTool,
  Gem,
  Sparkle,
  Target,
} from "lucide-react";
import { services, siteConfig } from "@/lib/data";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";

/* Map string icon names from data to Lucide components */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Crown,
  Sparkles,
  Wind,
  PartyPopper,
  Scissors,
  Palette,
  Flower2,
  Heart,
  PenTool,
  Gem,
  Sparkle,
  Target,
};

export default function ServicesPage() {
  return (
    <main>
      {/* ─── Page Hero ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-primary overflow-hidden">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary/80" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative z-10 text-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-white/50 mb-8"
          >
            <Link
              href="/"
              className="hover:text-gold transition-colors duration-300"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gold">Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6"
          >
            Our <span className="text-gradient-gold">Premium Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-2xl mx-auto text-white/50 text-base lg:text-lg leading-relaxed"
          >
            From bridal transformations to advanced skincare — discover our
            comprehensive range of luxury beauty services designed to make you
            look and feel extraordinary.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="luxury-divider mt-8"
          />
        </div>
      </section>

      {/* ─── Quick Navigation ─── */}
      <section className="bg-beige-light border-b border-beige-dark">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <FadeIn direction="none">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Sparkles;
                return (
                  <Link
                    key={service.id}
                    href={`#${service.id}`}
                    className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-salon-muted hover:text-gold transition-colors duration-300 px-3 py-2 hover:bg-gold/5"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {service.title}
                  </Link>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Services Detail Sections ─── */}
      <section className="bg-white">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = iconMap[service.icon] || Sparkles;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`section-padding scroll-mt-20 ${
                isEven ? "bg-white" : "bg-beige-light"
              }`}
            >
              <div className="max-w-7xl mx-auto">
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    isEven ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  {/* Image Column */}
                  <FadeIn direction={isEven ? "left" : "right"}>
                    <div
                      className={`relative ${
                        !isEven ? "lg:[direction:ltr]" : ""
                      }`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden group">
                        <Image
                          src={service.image}
                          alt={`${service.title} at Kiran Beauty Salon`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          unoptimized
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      {/* Decorative gold border offset */}
                      <div
                        className={`absolute -bottom-3 ${
                          isEven ? "-right-3" : "-left-3"
                        } w-full h-full border-2 border-gold/20 -z-10`}
                      />

                      {/* Duration badge */}
                      <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span className="text-white text-xs tracking-wider uppercase font-medium">
                          {service.duration}
                        </span>
                      </div>

                      {/* Price badge */}
                      <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm px-4 py-2 flex items-center gap-2">
                        <IndianRupee className="w-3.5 h-3.5 text-primary" />
                        <span className="text-primary text-xs tracking-wider uppercase font-semibold">
                          {service.priceRange}
                        </span>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Content Column */}
                  <div
                    className={`${!isEven ? "lg:[direction:ltr]" : ""}`}
                  >
                    <FadeIn direction={isEven ? "right" : "left"}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
                          {String(index + 1).padStart(2, "0")} — Service
                        </p>
                      </div>
                    </FadeIn>

                    <FadeIn
                      direction={isEven ? "right" : "left"}
                      delay={0.1}
                    >
                      <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-salon-text mb-4 leading-tight">
                        {service.title}
                      </h2>
                    </FadeIn>

                    <FadeIn
                      direction={isEven ? "right" : "left"}
                      delay={0.15}
                    >
                      <div className="luxury-divider-left" />
                    </FadeIn>

                    <FadeIn
                      direction={isEven ? "right" : "left"}
                      delay={0.2}
                    >
                      <p className="text-salon-muted leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </FadeIn>

                    {/* Benefits */}
                    <FadeIn
                      direction={isEven ? "right" : "left"}
                      delay={0.25}
                    >
                      <h4 className="font-heading text-lg font-semibold text-salon-text mb-4">
                        Key Benefits
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {service.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <span className="text-salon-muted text-sm leading-relaxed">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </FadeIn>

                    {/* Process Steps */}
                    <FadeIn
                      direction={isEven ? "right" : "left"}
                      delay={0.3}
                    >
                      <h4 className="font-heading text-lg font-semibold text-salon-text mb-4">
                        Our Process
                      </h4>
                      <ol className="space-y-3 mb-8">
                        {service.process.map((step, stepIndex) => (
                          <li
                            key={step}
                            className="flex items-start gap-3"
                          >
                            <span className="w-7 h-7 bg-gold/10 flex items-center justify-center shrink-0 text-gold text-xs font-bold font-heading">
                              {stepIndex + 1}
                            </span>
                            <span className="text-salon-muted text-sm leading-relaxed pt-1">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </FadeIn>

                    {/* CTA */}
                    <FadeIn
                      direction={isEven ? "right" : "left"}
                      delay={0.35}
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Link
                          href="/book"
                          className="btn-luxury inline-flex items-center gap-2"
                        >
                          <Calendar className="w-4 h-4" />
                          Book Now
                        </Link>
                        <div className="flex items-center gap-2 text-salon-muted text-sm">
                          <Clock className="w-4 h-4 text-gold" />
                          <span>{service.duration}</span>
                          <span className="text-gold mx-1">•</span>
                          <IndianRupee className="w-4 h-4 text-gold" />
                          <span>{service.priceRange}</span>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative section-padding bg-primary overflow-hidden">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScaleIn>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Your Transformation Awaits
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Look Your{" "}
              <span className="text-gradient-gold">Absolute Best</span>?
            </h2>
            <div className="luxury-divider" />
            <p className="max-w-2xl mx-auto text-white/50 text-base lg:text-lg leading-relaxed mb-10">
              Book your appointment today and let our expert team craft a
              personalised beauty experience tailored just for you. Walk in
              feeling wonderful — walk out feeling extraordinary.
            </p>
          </ScaleIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="btn-luxury inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Your Appointment
              </Link>
              <Link
                href="/contact"
                className="btn-luxury-outline inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="mt-8 text-white/40 text-sm">
              Call us directly at{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-gold hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              or WhatsApp us anytime
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
