"use client";

import { FadeIn } from "./Animations";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  light = false,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {subtitle && (
        <FadeIn>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-body font-medium">
            {subtitle}
          </p>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
            light ? "text-white" : "text-salon-text"
          }`}
        >
          {title}
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div
          className={`luxury-divider ${
            align === "left" ? "!ml-0" : ""
          }`}
        />
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p
            className={`max-w-2xl text-base lg:text-lg leading-relaxed ${
              align === "center" ? "mx-auto" : ""
            } ${light ? "text-white/60" : "text-salon-muted"}`}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
