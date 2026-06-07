"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Get In Touch" title="Contact Us" description="We'd love to hear from you. Reach out to us for any queries." />
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mt-10 sm:mt-12 lg:mt-16">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <StaggerItem className="glass p-5 sm:p-8 border border-gray-100 shadow-soft text-center hover:border-gold transition-colors rounded-2xl hover-lift">
              <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-gold mx-auto mb-3 sm:mb-4" />
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-1 sm:mb-2">Phone</h3>
              <p className="text-salon-muted text-sm sm:text-base">{siteConfig.phone}</p>
            </StaggerItem>
            <StaggerItem className="glass p-5 sm:p-8 border border-gray-100 shadow-soft text-center hover:border-gold transition-colors rounded-2xl hover-lift">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-gold mx-auto mb-3 sm:mb-4" />
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-1 sm:mb-2">Email</h3>
              <p className="text-salon-muted text-sm sm:text-base">{siteConfig.email}</p>
            </StaggerItem>
            <StaggerItem className="glass p-5 sm:p-8 border border-gray-100 shadow-soft text-center hover:border-gold transition-colors rounded-2xl hover-lift">
              <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-gold mx-auto mb-3 sm:mb-4" />
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-1 sm:mb-2">Address</h3>
              <p className="text-salon-muted text-sm sm:text-base">{siteConfig.address}</p>
            </StaggerItem>
            <StaggerItem className="glass p-5 sm:p-8 border border-gray-100 shadow-soft text-center hover:border-gold transition-colors rounded-2xl hover-lift">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-gold mx-auto mb-3 sm:mb-4" />
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-1 sm:mb-2">Hours</h3>
              <p className="text-salon-muted text-sm sm:text-base">{siteConfig.hours.days}<br/>{siteConfig.hours.time}</p>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn direction="left">
            <div className="card-premium p-6 sm:p-8 lg:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-10" />
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h3>
              
              {status === "success" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center text-center py-8 sm:py-12 text-green-600">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" />
                  <h4 className="text-lg sm:text-xl font-heading font-bold mb-2">Message Sent!</h4>
                  <p className="text-salon-muted text-sm sm:text-base">We will get back to you shortly.</p>
                  <button onClick={() => setStatus("idle")} className="mt-6 sm:mt-8 btn-luxury-outline">Send Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="form-label">Name</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" />
                    </div>
                    <div className="space-y-2">
                      <label className="form-label">Phone</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="form-label">Email</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
                  </div>
                  <div className="space-y-2">
                    <label className="form-label">Subject</label>
                    <select required name="subject" value={formData.subject} onChange={handleChange} className="form-input text-salon-text">
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bridal Query">Bridal Query</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="form-label">Message</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="form-input resize-none" />
                  </div>
                  <button type="submit" disabled={status === "loading"} className="btn-luxury w-full flex items-center justify-center gap-2">
                    {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4" /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Map Embed */}
      <div className="w-full h-72 sm:h-80 lg:h-96 mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
        <iframe src={siteConfig.mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-2xl" />
      </div>
    </div>
  );
}
