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
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Get In Touch" title="Contact Us" description="We'd love to hear from you. Reach out to us for any queries." />
        
        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <StaggerContainer className="grid sm:grid-cols-2 gap-8">
            <StaggerItem className="glass p-8 border border-gray-100 shadow-soft text-center hover:border-gold transition-colors">
              <Phone className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Phone</h3>
              <p className="text-salon-muted">{siteConfig.phone}</p>
            </StaggerItem>
            <StaggerItem className="glass p-8 border border-gray-100 shadow-soft text-center hover:border-gold transition-colors">
              <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Email</h3>
              <p className="text-salon-muted">{siteConfig.email}</p>
            </StaggerItem>
            <StaggerItem className="glass p-8 border border-gray-100 shadow-soft text-center hover:border-gold transition-colors">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Address</h3>
              <p className="text-salon-muted">{siteConfig.address}</p>
            </StaggerItem>
            <StaggerItem className="glass p-8 border border-gray-100 shadow-soft text-center hover:border-gold transition-colors">
              <Clock className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Hours</h3>
              <p className="text-salon-muted">{siteConfig.hours.days}<br/>{siteConfig.hours.time}</p>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn direction="left">
            <div className="bg-white p-8 lg:p-10 shadow-luxury relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-10" />
              <h3 className="font-heading text-2xl font-bold mb-6">Send a Message</h3>
              
              {status === "success" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center text-center py-12 text-green-600">
                  <CheckCircle className="w-16 h-16 mb-4" />
                  <h4 className="text-xl font-heading font-bold mb-2">Message Sent!</h4>
                  <p className="text-salon-muted">We will get back to you shortly.</p>
                  <button onClick={() => setStatus("idle")} className="mt-8 btn-luxury-outline">Send Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <select required name="subject" value={formData.subject} onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors text-salon-text">
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bridal Query">Bridal Query</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors resize-none" />
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
      <div className="w-full h-96 mt-24">
        <iframe src={siteConfig.mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  );
}
