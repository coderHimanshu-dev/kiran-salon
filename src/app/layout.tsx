import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiranbeautysalon.com"),
  title: {
    default: "Kiran Beauty Salon | Luxury Beauty Salon in Rajasthan, India",
    template: "%s | Kiran Beauty Salon",
  },
  description:
    "Rajasthan's premier luxury beauty salon offering bridal makeup, hair styling, skin care, and personalized beauty solutions. 10+ years of excellence with 5000+ happy clients. Book your appointment today.",
  keywords: [
    "beauty salon Rajasthan",
    "bridal makeup",
    "luxury salon India",
    "Kiran Beauty Salon",
    "hair styling",
    "skin care",
    "mehndi design",
    "nail art",
    "HD makeup",
    "airbrush makeup",
    "party makeup",
    "best salon Rajasthan",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kiranbeautysalon.com",
    siteName: "Kiran Beauty Salon",
    title: "Kiran Beauty Salon | Luxury Beauty Experiences Designed Around You",
    description:
      "Rajasthan's premier luxury beauty salon. 10+ years experience, 5000+ happy clients, 1000+ bridal transformations. Book your appointment today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kiran Beauty Salon - Luxury Beauty Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Beauty Salon | Luxury Beauty Experiences",
    description:
      "Rajasthan's premier luxury beauty salon. Experience the art of beauty at Kiran Beauty Salon.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F0F0F" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Kiran Beauty Salon",
              description:
                "Rajasthan's premier luxury beauty salon offering bridal makeup, hair styling, skin care, and personalized beauty solutions.",
              url: "https://kiranbeautysalon.com",
              telephone: "+91 XXXXX XXXXX",
              email: "contact@kiranbeautysalon.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Main Road",
                addressLocality: "Rajasthan",
                addressCountry: "IN",
              },
              openingHours: "Mo-Su 09:00-20:00",
              priceRange: "₹₹₹",
              image: "https://kiranbeautysalon.com/og-image.jpg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.9",
                longitude: "75.7",
              },
              sameAs: [
                "https://instagram.com/kiranbeautysalon",
                "https://facebook.com/kiranbeautysalon",
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
