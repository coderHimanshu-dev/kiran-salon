// Site-wide constants and data
export const siteConfig = {
  name: "Kiran Beauty Salon",
  tagline: "Luxury Beauty Experiences Designed Around You",
  description:
    "Rajasthan's premier luxury beauty salon offering bridal makeup, hair styling, skin care, and personalized beauty solutions. Experience the art of beauty at Kiran Beauty Salon.",
  url: "https://kiranbeautysalon.com",
  phone: "+91 XXXXX XXXXX",
  whatsapp: "+91 XXXXX XXXXX",
  email: "contact@kiranbeautysalon.com",
  address: "Main Road, Rajasthan, India",
  mapUrl:
    "https://www.google.com/maps/place/Kiran+Beauty+Salon/",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0!2d75.7!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKiran+Beauty+Salon!5e0!3m2!1sen!2sin!4v1",
  hours: {
    days: "Monday – Sunday",
    time: "9:00 AM – 8:00 PM",
  },
  social: {
    instagram: "https://instagram.com/kiranbeautysalon",
    facebook: "https://facebook.com/kiranbeautysalon",
    youtube: "https://youtube.com/@kiranbeautysalon",
    pinterest: "https://pinterest.com/kiranbeautysalon",
  },
};

export const stats = [
  { number: 10, suffix: "+", label: "Years Experience" },
  { number: 5000, suffix: "+", label: "Happy Clients" },
  { number: 1000, suffix: "+", label: "Bridal Transformations" },
  { number: 4.9, suffix: "★", label: "Star Rating" },
];

export const services = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    shortDescription:
      "Transform into the most radiant bride with our signature bridal artistry, blending timeless elegance with contemporary glamour.",
    description:
      "Our bridal makeup service is the crown jewel of Kiran Beauty Salon. We understand that your wedding day is one of the most important days of your life, and our expert artists ensure you look absolutely stunning. From traditional Rajasthani bridal looks to modern HD and airbrush techniques, we create a personalized bridal look that complements your outfit, jewelry, and personality.",
    benefits: [
      "Long-lasting makeup that stays flawless for 12+ hours",
      "Customized look tailored to your outfit and jewelry",
      "Pre-bridal skin prep and consultation included",
      "Touch-up kit provided for the ceremony",
      "Trial session available before the big day",
    ],
    process: [
      "Initial consultation and skin analysis",
      "Trial makeup session (2 weeks before wedding)",
      "Pre-bridal skincare routine guidance",
      "Wedding day preparation and makeup application",
      "Final touches and touch-up kit handover",
    ],
    duration: "3-4 hours",
    priceRange: "₹15,000 – ₹50,000",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    icon: "Crown",
  },
  {
    id: "hd-makeup",
    title: "HD Makeup",
    shortDescription:
      "Camera-ready perfection with high-definition techniques that look flawless in every photograph and video.",
    description:
      "Our HD Makeup service uses advanced high-definition techniques and premium products that create a flawless, natural-looking finish. Perfect for special occasions, photoshoots, and events where you'll be photographed extensively. The ultra-fine formulas ensure your skin looks smooth and radiant from every angle.",
    benefits: [
      "Flawless finish in photos and videos",
      "Lightweight yet full-coverage formula",
      "Suitable for all skin types",
      "Sweat and humidity resistant",
      "Natural, luminous finish",
    ],
    process: [
      "Skin preparation and priming",
      "Color matching and foundation application",
      "Contouring and highlighting",
      "Eye makeup and lip color",
      "Setting spray for long-lasting finish",
    ],
    duration: "1.5-2 hours",
    priceRange: "₹5,000 – ₹15,000",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    icon: "Sparkles",
  },
  {
    id: "airbrush-makeup",
    title: "Airbrush Makeup",
    shortDescription:
      "Ultra-smooth, poreless finish using professional airbrush technology for that ethereal, photo-ready glow.",
    description:
      "Experience the pinnacle of makeup artistry with our airbrush technique. Using specialized equipment, we apply makeup in ultra-fine layers that create an incredibly smooth, even, and natural finish. Airbrush makeup is renowned for its longevity and flawless appearance, making it the top choice for brides and celebrities.",
    benefits: [
      "Perfectly even, poreless finish",
      "Extremely long-lasting (16+ hours)",
      "Water and transfer resistant",
      "Lightweight and breathable",
      "Buildable coverage",
    ],
    process: [
      "Skin cleansing and preparation",
      "Airbrush foundation application in layers",
      "Detailed contouring and highlighting",
      "Eye and lip artistry",
      "Final setting and inspection",
    ],
    duration: "2-2.5 hours",
    priceRange: "₹8,000 – ₹25,000",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    icon: "Wind",
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    shortDescription:
      "Dazzling looks for every celebration — from cocktail soirées to grand receptions, we make you the star.",
    description:
      "Whether it's a birthday bash, anniversary dinner, engagement party, or any special celebration, our party makeup service ensures you stand out. Our artists create stunning, eye-catching looks that match the occasion and your personal style, using premium products that last throughout the event.",
    benefits: [
      "Customized look for any occasion",
      "Glamorous yet wearable styles",
      "Quick application time",
      "Long-lasting formula",
      "Includes hairstyling consultation",
    ],
    process: [
      "Style consultation and mood board review",
      "Skin prep and primer application",
      "Full face makeup application",
      "Hairstyling (if selected)",
      "Final touch-ups and tips for the evening",
    ],
    duration: "1-1.5 hours",
    priceRange: "₹3,000 – ₹10,000",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    icon: "PartyPopper",
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    shortDescription:
      "From elegant updos to flowing waves, our stylists craft the perfect hairstyle for every occasion.",
    description:
      "Our expert hair stylists bring your hair vision to life with cutting-edge techniques and premium products. Whether you desire intricate bridal updos, glamorous Hollywood waves, sleek straight styles, or trendy braids, we have the expertise to create the perfect look for any occasion.",
    benefits: [
      "Expert stylists with international training",
      "Premium heat protection products",
      "Styles that hold all day/night",
      "Wide range of styling options",
      "Hair accessories available",
    ],
    process: [
      "Hair consultation and style selection",
      "Hair washing and conditioning",
      "Heat protection application",
      "Styling and shaping",
      "Setting spray and final adjustments",
    ],
    duration: "1-2 hours",
    priceRange: "₹2,000 – ₹8,000",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    icon: "Scissors",
  },
  {
    id: "hair-coloring",
    title: "Hair Coloring",
    shortDescription:
      "Express your personality with stunning hair color — from subtle balayage to bold fashion shades.",
    description:
      "Transform your look with our professional hair coloring services. Our colorists are trained in the latest techniques including balayage, highlights, ombré, global color, and fashion colors. We use only premium, ammonia-free products that protect your hair while delivering vibrant, long-lasting results.",
    benefits: [
      "Ammonia-free premium products",
      "Damage protection technology",
      "Expert color matching",
      "Vibrant, long-lasting results",
      "Aftercare guidance included",
    ],
    process: [
      "Color consultation and patch test",
      "Hair analysis and strand test",
      "Color application and processing",
      "Rinsing and conditioning treatment",
      "Styling and aftercare instructions",
    ],
    duration: "2-4 hours",
    priceRange: "₹3,000 – ₹15,000",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    icon: "Palette",
  },
  {
    id: "facial-treatments",
    title: "Facial Treatments",
    shortDescription:
      "Revitalize your skin with our luxurious facial treatments tailored to your unique skin needs.",
    description:
      "Our facial treatments are designed to rejuvenate, nourish, and transform your skin. Using premium skincare products and advanced techniques, our estheticians address your specific skin concerns — from anti-aging and hydration to acne treatment and brightening. Experience the ultimate in skin pampering.",
    benefits: [
      "Customized for your skin type",
      "Premium skincare products",
      "Deep cleansing and exfoliation",
      "Visible results from first session",
      "Relaxing, spa-like experience",
    ],
    process: [
      "Skin analysis and consultation",
      "Deep cleansing and steaming",
      "Exfoliation and extraction",
      "Mask and serum application",
      "Moisturizing and sun protection",
    ],
    duration: "45-90 minutes",
    priceRange: "₹1,500 – ₹8,000",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    icon: "Flower2",
  },
  {
    id: "skin-care",
    title: "Skin Care",
    shortDescription:
      "Comprehensive skin care programs designed to achieve and maintain your healthiest, most radiant skin.",
    description:
      "Our comprehensive skin care services go beyond basic facials to provide targeted treatments for specific skin concerns. From advanced anti-aging treatments to acne solutions and skin brightening programs, our expert estheticians use clinical-grade products and cutting-edge techniques to deliver transformative results.",
    benefits: [
      "Clinical-grade products and equipment",
      "Personalized skincare regimen",
      "Advanced anti-aging treatments",
      "Acne and pigmentation solutions",
      "Long-term skin health focus",
    ],
    process: [
      "Comprehensive skin assessment",
      "Treatment plan creation",
      "Targeted treatment application",
      "Post-treatment care",
      "Follow-up and maintenance plan",
    ],
    duration: "60-120 minutes",
    priceRange: "₹2,000 – ₹10,000",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    icon: "Heart",
  },
  {
    id: "mehndi-design",
    title: "Mehndi Design",
    shortDescription:
      "Intricate, hand-crafted mehndi artistry that celebrates tradition with a contemporary artistic flair.",
    description:
      "Our mehndi artists are masters of this ancient art form, creating intricate and stunning designs for weddings, festivals, and special occasions. From traditional Rajasthani patterns to modern Arabic and fusion designs, every creation is a unique masterpiece that tells your story through beautiful henna artistry.",
    benefits: [
      "Expert mehndi artists with 10+ years experience",
      "Premium quality natural henna",
      "Rich, dark stain guaranteed",
      "Custom designs tailored to you",
      "Both traditional and modern patterns",
    ],
    process: [
      "Design consultation and pattern selection",
      "Skin preparation",
      "Mehndi application",
      "Drying and setting time",
      "Aftercare instructions for best color",
    ],
    duration: "2-6 hours",
    priceRange: "₹2,000 – ₹20,000",
    image:
      "https://images.unsplash.com/photo-1595171424836-e89241f5d606?w=800&q=80",
    icon: "PenTool",
  },
  {
    id: "nail-art",
    title: "Nail Art",
    shortDescription:
      "Express your creativity through stunning nail designs — from minimalist elegance to bold, artistic statements.",
    description:
      "Our nail art studio offers a complete range of nail services from classic manicures and pedicures to intricate nail art, gel extensions, and acrylic nails. Our skilled nail technicians use premium products and the latest trends to create stunning nail designs that complement your personal style.",
    benefits: [
      "Premium gel and acrylic products",
      "Hygienic, sterilized tools",
      "Long-lasting results (2-3 weeks)",
      "Trendy designs updated regularly",
      "Relaxing spa manicure/pedicure",
    ],
    process: [
      "Nail shape and design consultation",
      "Cuticle care and nail preparation",
      "Base coat and color application",
      "Art and embellishment",
      "Top coat and curing",
    ],
    duration: "1-2 hours",
    priceRange: "₹500 – ₹5,000",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    icon: "Gem",
  },
  {
    id: "waxing",
    title: "Waxing",
    shortDescription:
      "Smooth, silky skin with our gentle, premium waxing services designed for maximum comfort.",
    description:
      "Our waxing services use premium, hypoallergenic wax formulas that effectively remove hair while being gentle on the skin. Our experienced technicians ensure a comfortable experience with minimal discomfort, leaving your skin smooth, soft, and radiant. We follow strict hygiene protocols for your safety.",
    benefits: [
      "Premium hypoallergenic wax",
      "Minimal discomfort techniques",
      "Long-lasting results (3-6 weeks)",
      "Post-wax soothing treatment",
      "Strict hygiene standards",
    ],
    process: [
      "Skin preparation and cleansing",
      "Wax temperature check",
      "Professional wax application",
      "Gentle removal",
      "Post-wax soothing and moisturizing",
    ],
    duration: "30-90 minutes",
    priceRange: "₹200 – ₹3,000",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
    icon: "Sparkle",
  },
  {
    id: "threading",
    title: "Threading",
    shortDescription:
      "Precision threading for perfectly shaped brows and a clean, polished look.",
    description:
      "Our threading services provide precise hair removal for the face and eyebrows using the traditional threading technique. Our experienced beauticians create perfectly shaped eyebrows that frame your face beautifully, along with clean upper lip, chin, and forehead threading for a polished, refined look.",
    benefits: [
      "Precise hair removal",
      "Natural, chemical-free method",
      "Suitable for sensitive skin",
      "Quick and effective",
      "Perfect brow shaping",
    ],
    process: [
      "Brow analysis and shaping consultation",
      "Skin preparation",
      "Precision threading",
      "Soothing gel application",
      "Brow tinting (optional)",
    ],
    duration: "15-30 minutes",
    priceRange: "₹50 – ₹500",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    icon: "Target",
  },
];

export const whyChooseUs = [
  {
    title: "Certified Beauty Experts",
    description:
      "Our team consists of professionally certified beauty artists with extensive training from renowned institutions.",
    icon: "Award",
  },
  {
    title: "Premium Products",
    description:
      "We exclusively use internationally acclaimed beauty brands to ensure the finest quality and results for our clients.",
    icon: "Diamond",
  },
  {
    title: "Hygienic Environment",
    description:
      "Our salon maintains the highest standards of cleanliness and hygiene with regularly sterilized equipment and tools.",
    icon: "ShieldCheck",
  },
  {
    title: "Personalized Solutions",
    description:
      "Every treatment is customized to your unique skin type, preferences, and desired outcome for optimal results.",
    icon: "User",
  },
  {
    title: "Bridal Specialists",
    description:
      "With 1000+ bridal transformations, we are Rajasthan's trusted bridal beauty experts for your special day.",
    icon: "Heart",
  },
  {
    title: "Modern Techniques",
    description:
      "We stay ahead of industry trends, employing the latest techniques and technologies in beauty and skincare.",
    icon: "Zap",
  },
];

export const teamMembers = [
  {
    name: "Kiran Sharma",
    role: "Founder & Lead Makeup Artist",
    bio: "With over 15 years of experience in the beauty industry, Kiran founded the salon with a vision to bring luxury beauty services to Rajasthan. Her expertise in bridal makeup has made her one of the most sought-after makeup artists in the region.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    specialties: ["Bridal Makeup", "HD Makeup", "Airbrush Techniques"],
  },
  {
    name: "Priya Patel",
    role: "Senior Makeup Artist",
    bio: "Priya brings 8 years of professional makeup artistry to our team. Trained in both Indian and Western makeup techniques, she excels at creating glamorous party looks and editorial makeup.",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31239f85?w=400&q=80",
    specialties: ["Party Makeup", "Editorial Looks", "Special Effects"],
  },
  {
    name: "Meera Joshi",
    role: "Hair Specialist",
    bio: "Meera is our resident hair expert with over 10 years of experience in hair styling, coloring, and treatments. She has trained with international hairstylists and brings global trends to our salon.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    specialties: ["Hair Styling", "Balayage", "Bridal Hair"],
  },
  {
    name: "Anjali Verma",
    role: "Skin Care Expert",
    bio: "Anjali is a certified esthetician with specialized training in advanced skin treatments. Her holistic approach to skincare combines modern dermatology with traditional Ayurvedic principles.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80",
    specialties: ["Facials", "Anti-Aging", "Skin Brightening"],
  },
];

export const testimonials = [
  {
    name: "Ananya Rajput",
    rating: 5,
    review:
      "My bridal makeup was absolutely stunning! Kiran ma'am understood exactly what I wanted and made me look like a dream on my wedding day. The makeup lasted throughout the entire ceremony and reception. Highly recommend!",
    service: "Bridal Makeup",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Ritu Agarwal",
    rating: 5,
    review:
      "Best salon experience in Rajasthan! The ambiance is so luxurious and the staff is incredibly professional. My hair coloring turned out even better than I imagined. The balayage was perfect!",
    service: "Hair Coloring",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Sneha Mehra",
    rating: 5,
    review:
      "I got my party makeup done here for my engagement ceremony and received so many compliments! The artist really understood my skin tone and created a look that was glamorous yet natural. Will definitely come back!",
    service: "Party Makeup",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
  },
  {
    name: "Pooja Sharma",
    rating: 5,
    review:
      "The facial treatment here is amazing! My skin was glowing for days after. They used premium products and the esthetician was very knowledgeable about my skin concerns. A truly luxurious experience.",
    service: "Facial Treatment",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
  },
  {
    name: "Kavita Jain",
    rating: 5,
    review:
      "Got my mehndi done for my sister's wedding and it was absolutely breathtaking! The designs were intricate and the color came out so dark and beautiful. The artists are incredibly talented.",
    service: "Mehndi Design",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80",
  },
  {
    name: "Deepika Singh",
    rating: 5,
    review:
      "Kiran Beauty Salon is my go-to for all beauty needs. The airbrush makeup they did for my reception was flawless — it looked incredible in all photos. The team is so warm and welcoming!",
    service: "Airbrush Makeup",
    image:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=100&q=80",
  },
  {
    name: "Nisha Gupta",
    rating: 4,
    review:
      "Wonderful experience! The nail art designs were beautiful and creative. The salon is immaculately clean and the staff is very friendly. My gel nails lasted for three weeks without chipping!",
    service: "Nail Art",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
  {
    name: "Sunita Rathore",
    rating: 5,
    review:
      "I've been coming to Kiran Beauty Salon for over 3 years now and they never disappoint. The hair styling for my daughter's wedding was perfection. Every family member looked gorgeous!",
    service: "Hair Styling",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
  },
  {
    name: "Meenakshi Sharma",
    rating: 5,
    review:
      "The best bridal package in the city! From the trial session to the actual wedding day, everything was planned perfectly. My makeup was flawless and my hair stayed perfect throughout the long ceremony.",
    service: "Bridal Makeup",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=100&q=80",
  },
  {
    name: "Ishita Choudhary",
    rating: 5,
    review:
      "Amazing salon with a truly premium feel. The skin care treatment transformed my complexion — I could see visible results after just one session. The products they use are top-notch.",
    service: "Skin Care",
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&q=80",
  },
  {
    name: "Lakshmi Devi",
    rating: 5,
    review:
      "I had the most relaxing spa-like experience. The facial was so soothing and my skin felt rejuvenated. The ambiance is serene and the attention to hygiene is impressive. A hidden gem!",
    service: "Facial Treatment",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80",
  },
  {
    name: "Prerna Agarwal",
    rating: 5,
    review:
      "Got my HD makeup done for a photoshoot and the results were incredible. Every photo turned out magazine-worthy! The artist was patient and really took time to get every detail right.",
    service: "HD Makeup",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
  },
  {
    name: "Jyoti Kumari",
    rating: 4,
    review:
      "Very professional service. The waxing was done quickly and with minimal discomfort. They use premium wax and the post-care was excellent. My skin felt smooth and soft afterwards.",
    service: "Waxing",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=100&q=80",
  },
  {
    name: "Sapna Chauhan",
    rating: 5,
    review:
      "The threading here is the best I've ever had! My eyebrows were shaped perfectly and the beautician was very gentle. I've finally found my go-to place for brow grooming.",
    service: "Threading",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80",
  },
  {
    name: "Aarti Maheshwari",
    rating: 5,
    review:
      "Kiran Beauty Salon has set the benchmark for beauty services in Rajasthan. The entire team is talented and passionate about their work. My engagement look was show-stopping! Thank you!",
    service: "Party Makeup",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80",
  },
  {
    name: "Divya Mathur",
    rating: 5,
    review:
      "Absolutely love this salon! The hair color Meera did for me was exactly what I showed her from Pinterest. She even improved on the reference! The salon's products are clearly premium quality.",
    service: "Hair Coloring",
    image:
      "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=100&q=80",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    category: "Bridal Makeup",
    title: "Traditional Bridal Look",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    category: "Bridal Makeup",
    title: "Modern Bride",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    category: "Party Makeup",
    title: "Glamorous Evening Look",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    category: "Party Makeup",
    title: "Cocktail Party Glam",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    category: "Hair Styling",
    title: "Elegant Updo",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    category: "Hair Coloring",
    title: "Balayage Highlights",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    category: "Hair Styling",
    title: "Bridal Hair",
  },
  {
    src: "https://images.unsplash.com/photo-1595171424836-e89241f5d606?w=600&q=80",
    category: "Mehndi",
    title: "Bridal Mehndi Design",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    category: "Nail Art",
    title: "Elegant Nail Design",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    category: "Hair Coloring",
    title: "Rich Auburn Color",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    category: "Bridal Makeup",
    title: "South Asian Bridal",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80",
    category: "Nail Art",
    title: "French Manicure Art",
  },
  {
    src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80",
    category: "Mehndi",
    title: "Arabic Mehndi Pattern",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    category: "Party Makeup",
    title: "Red Carpet Ready",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7b35e70663f9?w=600&q=80",
    category: "Hair Styling",
    title: "Glamorous Waves",
  },
  {
    src: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    category: "Hair Coloring",
    title: "Blonde Transformation",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Now" },
];
