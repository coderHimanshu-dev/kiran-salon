"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Lightbulb,
  Users,
  Sparkles,
  Heart,
  ChevronRight,
  Phone,
  Calendar,
  Star,
} from "lucide-react";
import { siteConfig, teamMembers } from "@/lib/data";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";

const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue the highest standards in every treatment, every detail, and every client interaction — because you deserve nothing less.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Transparency and honesty guide everything we do, from product recommendations to pricing. Your trust is our most valued asset.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of beauty trends by continuously training, adopting new techniques, and investing in cutting-edge technology.",
  },
  {
    icon: Users,
    title: "Client-First",
    description:
      "Your comfort, satisfaction, and confidence are at the heart of every decision we make. We listen, understand, and deliver.",
  },
  {
    icon: Sparkles,
    title: "Hygiene",
    description:
      "We maintain hospital-grade sanitation standards with sterilized tools, single-use products, and a spotless environment — always.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Beauty is not just our profession — it's our calling. Our passion for the art of beauty shines through in every transformation.",
  },
];

export default function AboutPage() {
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
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary/80" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative z-10 text-center px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/50 mb-6 sm:mb-8"
          >
            <Link
              href="/"
              className="hover:text-gold transition-colors duration-300"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gold">About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6"
          >
            About{" "}
            <span className="text-gradient-gold">Kiran Beauty Salon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-2xl mx-auto text-white/50 text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            Where tradition meets modern luxury — discover the story, passion,
            and people behind Rajasthan&apos;s premier beauty destination.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="luxury-divider mt-6 sm:mt-8"
          />
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                    alt="Kiran Beauty Salon interior — luxury salon ambiance"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Decorative gold border offset */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
                {/* Experience badge */}
                <div className="absolute -bottom-6 -left-6 bg-gold text-primary px-4 sm:px-6 py-3 sm:py-4 shadow-2xl rounded-2xl">
                  <p className="text-2xl sm:text-3xl font-heading font-bold">10+</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Text Column */}
            <div>
              <FadeIn>
                <p className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 font-medium text-center lg:text-left">
                  Our Story
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-salon-text mb-4 sm:mb-6 leading-tight text-center lg:text-left">
                  A Journey Born from{" "}
                  <span className="text-gradient-gold">Passion</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="mx-auto lg:mx-0 w-16 h-[2px] bg-gradient-to-r from-gold to-gold/30 lg:from-gold lg:to-transparent my-6" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-salon-muted text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 text-center lg:text-left">
                  Kiran Beauty Salon was founded over a decade ago by Kiran
                  Sharma, a visionary makeup artist whose love for beauty began
                  in the vibrant heart of Rajasthan. Growing up surrounded by
                  the rich traditions of Rajasthani bridal artistry — the
                  intricate mehndi, the bold eyes, the timeless elegance — Kiran
                  knows from a young age that beauty was her calling.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-salon-muted text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 text-center lg:text-left">
                  What started as a small, intimate setup with just two chairs
                  and a dream has blossomed into one of Rajasthan&apos;s most
                  celebrated beauty destinations. In those early days, Kiran
                  personally attended to every client, pouring her heart into
                  each bridal look and taking every feedback as an opportunity to
                  grow. Word spread quickly — brides travelled from neighbouring
                  cities, families returned generation after generation, and the
                  little salon soon outgrew its humble beginnings.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-salon-muted text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 text-center lg:text-left">
                  Today, Kiran Beauty Salon is a full-service luxury beauty
                  haven, home to a team of highly trained artists and
                  specialists. We combine the rich heritage of Indian beauty
                  traditions with contemporary global techniques, offering
                  everything from bridal transformations and HD makeup to
                  advanced skincare and hair artistry.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p className="text-salon-muted text-sm sm:text-base leading-relaxed text-center lg:text-left">
                  But one thing has never changed — the personal touch, the
                  attention to detail, and the unwavering commitment to making
                  every woman who walks through our doors feel extraordinary.
                  That is the Kiran promise, and it always will be.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="section-padding bg-beige">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="What Drives Us"
            title="Mission & Vision"
            description="The guiding principles that shape every experience at Kiran Beauty Salon."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 mt-4">
            {/* Mission Card */}
            <FadeIn direction="left">
              <div className="relative bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-sm group hover:shadow-xl transition-shadow duration-500 h-full flex flex-col items-center md:items-start text-center md:text-left">
                {/* Top gold accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-t-2xl" />
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shrink-0">
                  <Star className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-salon-text mb-3 sm:mb-4">
                  Our Mission
                </h3>
                <div className="mx-auto md:ml-0 w-16 h-[2px] bg-gradient-to-r from-gold to-gold/30 md:from-gold md:to-transparent my-4" />
                <p className="text-salon-muted leading-relaxed text-sm sm:text-base lg:text-lg">
                  To provide world-class beauty experiences that empower every
                  woman to feel confident and radiant. We believe beauty is not
                  about conforming to standards — it&apos;s about celebrating
                  your unique identity with expert care and premium artistry.
                </p>
              </div>
            </FadeIn>

            {/* Vision Card */}
            <FadeIn direction="right">
              <div className="relative bg-primary p-6 sm:p-8 lg:p-12 rounded-2xl shadow-sm group hover:shadow-xl transition-shadow duration-500 h-full flex flex-col items-center md:items-start text-center md:text-left">
                {/* Top gold accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold rounded-t-2xl" />
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shrink-0">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Our Vision
                </h3>
                <div className="mx-auto md:ml-0 w-16 h-[2px] bg-gradient-to-r from-gold to-gold/30 md:from-gold md:to-transparent my-4" />
                <p className="text-white/60 leading-relaxed text-sm sm:text-base lg:text-lg">
                  To be Rajasthan&apos;s most trusted and celebrated beauty
                  destination, setting new standards in luxury beauty care. We
                  aspire to be the place where every woman&apos;s beauty story
                  begins — a sanctuary of confidence, transformation, and joy.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="What We Stand For"
            title="Our Core Values"
            description="These values are the foundation of everything we do — guiding our team, shaping our culture, and defining your experience."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-beige-light p-6 sm:p-8 rounded-2xl group hover:bg-primary transition-colors duration-500 h-full flex flex-col items-center sm:items-start text-center sm:text-left"
                  >
                    {/* Number watermark */}
                    <span className="absolute top-4 right-6 text-5xl sm:text-6xl font-heading font-bold text-primary/5 group-hover:text-white/5 transition-colors duration-500 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 group-hover:bg-gold/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-500 shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-salon-text group-hover:text-white mb-2 sm:mb-3 transition-colors duration-500">
                      {value.title}
                    </h3>
                    <p className="text-salon-muted group-hover:text-white/60 text-xs sm:text-sm leading-relaxed transition-colors duration-500">
                      {value.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Meet Our Team ─── */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="The Artists Behind Your Glow"
            title="Meet Our Team"
            description="A handpicked team of certified beauty professionals, each bringing years of expertise and a shared passion for making you look extraordinary."
            light
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="group"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4 sm:mb-6">
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role} at Kiran Beauty Salon`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Specialties on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="text-[10px] tracking-wider uppercase px-2 sm:px-2.5 py-1 bg-gold/20 text-gold border border-gold/30 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Gold corner accent */}
                    <div className="absolute top-0 right-0 w-12 h-12">
                      <div className="absolute top-0 right-0 w-full h-px bg-gold/50" />
                      <div className="absolute top-0 right-0 h-full w-px bg-gold/50" />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1 text-center lg:text-left">
                    {member.name}
                  </h3>
                  <p className="text-gold text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 text-center lg:text-left">
                    {member.role}
                  </p>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed text-center lg:text-left">
                    {member.bio}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative section-padding bg-beige overflow-hidden">
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScaleIn>
            <p className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 font-medium">
              Begin Your Beauty Journey
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-salon-text mb-4 sm:mb-6 leading-tight">
              Ready to Experience the{" "}
              <span className="text-gradient-gold">Kiran Difference</span>?
            </h2>
            <div className="luxury-divider" />
            <p className="max-w-2xl mx-auto text-salon-muted text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10">
              Whether it&apos;s your wedding day, a special celebration, or
              simply a day to pamper yourself — our team is ready to make you
              feel absolutely extraordinary.
            </p>
          </ScaleIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href="/book" className="btn-luxury inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                <Calendar className="w-4 h-4" />
                Book Your Appointment
              </Link>
              <Link
                href="/contact"
                className="btn-luxury-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="mt-6 sm:mt-8 text-salon-muted text-xs sm:text-sm">
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
