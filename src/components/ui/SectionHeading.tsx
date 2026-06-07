"use client";

import { FadeIn } from "./Animations";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionHeading({ subtitle, title, description, light = false, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 sm:mb-12 lg:mb-16 ${align === "center" ? "text-center" : "text-center lg:text-left"}`}>
      {subtitle && (
        <FadeIn>
          <p className="text-gold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 font-body font-medium">{subtitle}</p>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 ${light ? "text-white" : "text-salon-text"}`}>
          {title}
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className={`luxury-divider ${align === "left" ? "lg:!ml-0" : ""}`} />
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className={`max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed ${align === "center" ? "mx-auto" : "mx-auto lg:mx-0"} ${light ? "text-white/60" : "text-salon-muted"}`}>
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
