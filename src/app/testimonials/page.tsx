"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Quote, Home, Award, Users, ThumbsUp } from "lucide-react";
import { testimonials } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";

const statsData = [
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    sublabel: "Based on client reviews",
  },
  {
    icon: Users,
    value: "500+",
    label: "Reviews",
    sublabel: "From happy clients",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Satisfaction",
    sublabel: "Client satisfaction rate",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "text-gold fill-gold"
              : "text-beige-dark fill-beige-dark"
          }
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      {/* ───────── Hero Section ───────── */}
      <section className="relative bg-primary py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--color-gold)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <nav className="flex items-center justify-center gap-2 text-sm text-white/50 mb-8">
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-gold transition-colors"
              >
                <Home size={14} />
                Home
              </Link>
              <span>/</span>
              <span className="text-gold">Testimonials</span>
            </nav>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
              What Our Clients{" "}
              <span className="text-gradient-gold">Say</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="luxury-divider" />
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover why hundreds of women trust Kiran Beauty Salon for their
              most important beauty moments.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───────── Stats Bar ───────── */}
      <section className="bg-beige-light border-b border-beige-dark/40">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-beige-dark/40">
            {statsData.map((stat) => (
              <StaggerItem key={stat.label} className="flex items-center justify-center gap-4 px-6">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <stat.icon size={24} className="text-gold" />
                </div>
                <div>
                  <p className="font-heading text-3xl lg:text-4xl font-bold text-salon-text">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-salon-text tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-xs text-salon-muted">{stat.sublabel}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ───────── Testimonials Grid ───────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Client Testimonials"
            title="Stories of Beautiful Transformations"
            description="Every review reflects our commitment to excellence. Here's what our cherished clients have to say about their experience at Kiran Beauty Salon."
          />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4"
            staggerDelay={0.06}
          >
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="group h-full bg-white border border-beige-dark/30 p-6 relative overflow-hidden hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1 transition-all duration-500">
                  {/* Gold accent top border */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Quote icon */}
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Quote size={18} className="text-gold" />
                    </div>
                  </div>

                  {/* Review text */}
                  <p className="text-salon-muted text-sm leading-relaxed mb-5 line-clamp-5">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>

                  {/* Star rating */}
                  <div className="mb-5">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-beige-dark/30 mb-5" />

                  {/* Client info */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-gold/30 shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading text-sm font-semibold text-salon-text truncate">
                        {testimonial.name}
                      </p>
                      <span className="inline-block mt-1 text-[11px] font-medium tracking-wide uppercase text-gold bg-gold/10 px-2.5 py-0.5">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ───────── Trust Badges ───────── */}
      <section className="bg-beige py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award size={28} className="text-gold" />
              <h3 className="font-heading text-2xl font-bold text-salon-text">
                Rajasthan&apos;s Most Trusted Beauty Salon
              </h3>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-salon-muted text-base max-w-2xl mx-auto leading-relaxed">
              With over 10 years of experience and 5,000+ happy clients, Kiran Beauty
              Salon continues to set the benchmark for luxury beauty services in
              Rajasthan.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───────── CTA Section ───────── */}
      <section className="relative bg-primary py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <SectionHeading
            subtitle="Join Our Happy Clients"
            title="Experience the Kiran Difference"
            description="Ready to experience the luxury, artistry, and care that our clients rave about? Book your appointment today and let us create your perfect look."
            light
          />

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/book" className="btn-luxury">
                Book Appointment
              </Link>
              <Link href="/gallery" className="btn-luxury-outline">
                View Our Gallery
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
