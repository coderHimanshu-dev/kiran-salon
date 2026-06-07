"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import {
  siteConfig,
  stats,
  services,
  whyChooseUs,
  galleryImages,
  testimonials,
} from "@/lib/data";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Parallax,
} from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";

// Animated Counter Component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-heading font-bold text-gold">
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
            alt="Luxury Salon"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/60 to-[#0F0F0F] z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={0.2}>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-medium">
              Welcome to Kiran Beauty Salon
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
              Luxury Beauty Experiences <br className="hidden md:block" />
              <span className="text-gradient-gold">Designed Around You</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed px-2">
              {siteConfig.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Link href="/book" className="btn-luxury w-full sm:w-auto text-center">
                Book Appointment
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, "").replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto text-center"
              >
                WhatsApp Us
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-luxury-outline w-full sm:w-auto text-center"
              >
                Call Now
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <Icons.ChevronDown className="text-gold w-6 h-6 sm:w-8 sm:h-8 opacity-70" />
        </motion.div>
      </section>

      {/* 2. Trust/Stats Section */}
      <section className="bg-[#0F0F0F] py-12 sm:py-16 md:py-20 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                <p className="text-white/60 mt-2 text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="bg-beige section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 border-2 border-gold rounded-2xl translate-x-4 translate-y-4" />
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
                  alt="Salon Interior"
                  fill
                  className="object-cover relative z-10 rounded-2xl"
                  unoptimized
                />
              </div>
            </FadeIn>
            <div>
              <SectionHeading
                subtitle="Our Story"
                title="The Art of True Beauty"
                align="left"
              />
              <FadeIn delay={0.3}>
                <div className="space-y-4 sm:space-y-6 text-salon-muted text-base sm:text-lg mb-8 text-center lg:text-left">
                  <p>
                    Founded over a decade ago, Kiran Beauty Salon has established
                    itself as the premier destination for luxury beauty
                    experiences in Rajasthan.
                  </p>
                  <p>
                    We believe that true beauty comes from confidence, and our
                    mission is to enhance your natural features using the finest
                    products and most advanced techniques available globally.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Link href="/about" className="btn-luxury-outline text-primary border-primary hover:text-white hover:bg-primary w-full sm:w-auto text-center">
                    Read Our Full Story
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Preview Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Do"
            title="Our Signature Services"
            description="Experience our comprehensive range of premium beauty services tailored specifically for you."
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
            {services.slice(0, 6).map((service) => (
              <StaggerItem key={service.id} className="group cursor-pointer">
                <Link href={`/services#${service.id}`} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden mb-5 sm:mb-6 rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-gold transition-colors text-center sm:text-left">
                    {service.title}
                  </h3>
                  <p className="text-salon-muted mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base text-center sm:text-left">
                    {service.shortDescription}
                  </p>
                  <span className="text-gold uppercase tracking-wider text-xs sm:text-sm font-semibold flex items-center justify-center sm:justify-start gap-2 group-hover:gap-4 transition-all">
                    Explore <Icons.ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-12 sm:mt-16">
            <Link href="/services" className="btn-luxury">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="bg-[#0F0F0F] section-padding text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            subtitle="The Kiran Difference"
            title="Why Choose Us"
            light
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12 mt-10 sm:mt-16">
            {whyChooseUs.map((item, index) => {
              const Icon = Icons[item.icon as keyof typeof Icons] as React.ElementType;
              return (
                <StaggerItem key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gold/30 flex items-center justify-center bg-gold/5 text-gold">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="font-heading text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                      {item.title}
                    </h4>
                    <p className="text-white/60 leading-relaxed text-xs sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Gallery Preview Section */}
      <section className="section-padding bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
            <SectionHeading
              subtitle="Our Work"
              title="A Glimpse of Magic"
              align="left"
            />
            <Link href="/gallery" className="btn-luxury-outline text-primary border-primary hover:bg-primary hover:text-white shrink-0 self-center md:self-auto w-full sm:w-auto md:w-auto text-center">
              View Full Gallery
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.slice(0, 6).map((image, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                className="relative aspect-square group overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4">
                  <p className="text-gold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.category}
                  </p>
                  <h4 className="text-white font-heading text-lg sm:text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {image.title}
                  </h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Testimonials" title="Client Love" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <StaggerItem
                key={index}
                className="testimonial-card relative"
              >
                <Icons.Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
                <div className="flex text-gold mb-4 sm:mb-6 justify-center sm:justify-start">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icons.Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-salon-muted italic mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base text-center sm:text-left">
                  &quot;{testimonial.review}&quot;
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold/30 shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading font-semibold text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gold uppercase tracking-wider">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-10 sm:mt-12">
            <Link href="/testimonials" className="text-primary font-semibold hover:text-gold transition-colors underline underline-offset-4 text-sm sm:text-base">
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[#0F0F0F] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920&q=80"
            alt="CTA Background"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Parallax offset={30}>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 sm:mb-6">
              Ready To Transform Your Look?
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              Book your appointment today and let our expert stylists bring your
              beauty vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Link href="/book" className="btn-luxury w-full sm:w-auto text-center">
                Book Appointment
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, "").replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-outline w-full sm:w-auto text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </Parallax>
        </div>
      </section>
    </div>
  );
}
