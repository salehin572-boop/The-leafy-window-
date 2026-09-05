import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Instagram, Youtube, HelpCircle, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { PLANT_SYMPTOMS } from '../data/plantData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Window Plant Recommendation',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        topic: 'Window Plant Recommendation',
        message: '',
      });
    }, 900);
  };

  const handleSymptomSelect = (symptomName: string) => {
    setFormData((prev) => ({
      ...prev,
      topic: 'Diagnose Plant Leaf Symptom',
      message: `Hi Care Team! I need help with ${symptomName}. My plant is located near a window and... `,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-[#f9f8f4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50]" />
            <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#c56d44]">
              BOTANICAL CARE CONCIERGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a3c34] tracking-tight">
            Let's Talk Plants.
          </h2>

          <p className="script font-script text-2xl sm:text-3xl text-[#c56d44] font-normal">
            Every green thumb starts with one curious leaf
          </p>

          <p className="text-xs sm:text-sm text-[#1a3c34]/75 max-w-xl mx-auto pt-1 leading-relaxed">
            Whether you need sunlight diagnostics, advice on soil aeration, or a customized plant prescription for your windowsill, our certified greenhouse staff is here.
          </p>
        </div>

        {/* Quick Symptom Diagnostic Triage Bar */}
        <div className="mb-10 p-5 rounded-2xl bg-white border border-[#e9e5db] shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#c56d44]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a3c34]">
                Instant Leaf Symptom Diagnostic
              </h4>
            </div>
            <span className="text-xs text-[#1a3c34]/60">
              Click a common symptom to quickly auto-draft your care consultation:
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {PLANT_SYMPTOMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSymptomSelect(item.symptom)}
                className="p-3 rounded-xl bg-[#f9f8f4] hover:bg-[#edf7ed] border border-[#e9e5db] hover:border-[#4caf50] transition-all duration-200 text-left cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1a3c34] group-hover:text-[#4caf50]">
                    {item.symptom}
                  </span>
                  <span className="text-[10px] text-[#c56d44] font-semibold">Ask Doctor →</span>
                </div>
                <p className="text-[11px] text-[#1a3c34]/70 mt-1 line-clamp-1">
                  Cause: {item.likelyCause}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Friendly Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clean Contact Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-3xl border border-[#e9e5db] shadow-xs">
            <h3 className="font-serif font-bold text-2xl text-[#1a3c34] mb-1">
              Send a Care Dispatch
            </h3>
            <p className="text-xs sm:text-sm text-[#1a3c34]/70 mb-6">
              Fill out the details below and our horticulturists will reply within 24 hours.
            </p>

            {isSuccess ? (
              <div className="p-8 rounded-2xl bg-[#edf7ed] border border-[#4caf50]/30 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#4caf50] text-white flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-[#1a3c34]">Care Note Received!</h4>
                  <p className="text-sm text-[#1a3c34]/80 mt-1 max-w-sm mx-auto">
                    Thank you! Our plant doctors are reviewing your question and window conditions. Check your inbox shortly.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-5 py-2 rounded-full bg-[#1a3c34] text-[#f9f8f4] text-xs font-bold uppercase tracking-wider hover:bg-[#4caf50] transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#1a3c34] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Evergreen"
                      className="w-full px-4 py-3 rounded-xl border border-[#e9e5db] bg-[#f9f8f4] text-sm text-[#1a3c34] placeholder:text-[#1a3c34]/40 focus:outline-hidden focus:ring-2 focus:ring-[#4caf50]/30 focus:border-[#4caf50] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-[#1a3c34] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@windowgarden.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#e9e5db] bg-[#f9f8f4] text-sm text-[#1a3c34] placeholder:text-[#1a3c34]/40 focus:outline-hidden focus:ring-2 focus:ring-[#4caf50]/30 focus:border-[#4caf50] transition-all"
                    />
                  </div>
                </div>

                {/* Consultation Topic */}
                <div>
                  <label htmlFor="contact-topic" className="block text-xs font-bold uppercase tracking-wider text-[#1a3c34] mb-1.5">
                    What can we help you with?
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#e9e5db] bg-[#f9f8f4] text-sm text-[#1a3c34] focus:outline-hidden focus:ring-2 focus:ring-[#4caf50]/30 focus:border-[#4caf50] transition-all cursor-pointer"
                  >
                    <option value="Window Plant Recommendation">Window Plant Recommendation</option>
                    <option value="Diagnose Plant Leaf Symptom">Diagnose Plant Leaf Symptom (Yellow/Brown/Droop)</option>
                    <option value="Vlog Episode Topic Suggestion">Vlog Episode Topic Suggestion</option>
                    <option value="Pottery & Soil Drainage Advice">Pottery & Soil Drainage Advice</option>
                    <option value="Order & Greenhouse Shipping">Order & Greenhouse Shipping Inquiry</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-[#1a3c34] mb-1.5">
                    Your Message / Plant Questions *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your plant, which way your window faces, and what symptoms you notice..."
                    className="w-full px-4 py-3 rounded-xl border border-[#e9e5db] bg-[#f9f8f4] text-sm text-[#1a3c34] placeholder:text-[#1a3c34]/40 focus:outline-hidden focus:ring-2 focus:ring-[#4caf50]/30 focus:border-[#4caf50] transition-all resize-y"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-natural inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending to Care Team...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Side Panel with dummy contact info & requested message */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Friendly Invitation Panel with exact requested quote */}
            <div className="bg-[#1a3c34] text-[#f9f8f4] p-7 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden border border-white/10">
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#66bb6a] text-xs font-bold uppercase tracking-wider">
                  🌱 Care Team Promise
                </div>

                <blockquote className="text-base sm:text-lg font-serif italic leading-relaxed text-[#f9f8f4]">
                  "Struggling with a yellowing leaf? Looking for the perfect window plant? Reach out to our care team!"
                </blockquote>

                <div className="pt-3 border-t border-white/15 text-xs text-[#f9f8f4]/75">
                  <p className="font-semibold text-white">The Leafy Window Care Desk</p>
                  <p>Portland Greenhouse Nursery & Urban Studio</p>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#e9e5db] shadow-xs space-y-4">
              <h4 className="font-serif font-bold text-lg text-[#1a3c34]">
                Greenhouse & Studio Info
              </h4>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#1a3c34]/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#edf7ed] text-[#4caf50] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a3c34]">Greenhouse Headquarters</p>
                    <p className="text-[#1a3c34]/70">482 Botanical Way, Suite 4</p>
                    <p className="text-[#1a3c34]/70">Portland, OR 97201</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#edf7ed] text-[#4caf50] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a3c34]">Care Hotline</p>
                    <a href="tel:5557426800" className="text-[#4caf50] hover:underline font-semibold">
                      (555) 742-6800
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#edf7ed] text-[#4caf50] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a3c34]">Email Support</p>
                    <a href="mailto:hello@theleafywindow.com" className="text-[#4caf50] hover:underline font-semibold">
                      hello@theleafywindow.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#fbeee8] text-[#c56d44] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a3c34]">Greenhouse Visiting Hours</p>
                    <p className="text-[#1a3c34]/70">Tue – Sun: 10:00 AM – 6:00 PM PST</p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="pt-4 border-t border-[#e9e5db]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#1a3c34] mb-2.5">
                  Follow Our Green Windows
                </p>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-xl bg-[#f9f8f4] hover:bg-[#edf7ed] border border-[#e9e5db] hover:border-[#4caf50] text-[#1a3c34] hover:text-[#4caf50] flex items-center justify-center transition-all duration-200"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube Care Vlog"
                    className="w-9 h-9 rounded-xl bg-[#f9f8f4] hover:bg-[#edf7ed] border border-[#e9e5db] hover:border-[#4caf50] text-[#1a3c34] hover:text-[#4caf50] flex items-center justify-center transition-all duration-200"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    aria-label="Community forum"
                    className="w-9 h-9 rounded-xl bg-[#f9f8f4] hover:bg-[#edf7ed] border border-[#e9e5db] hover:border-[#4caf50] text-[#1a3c34] hover:text-[#4caf50] flex items-center justify-center transition-all duration-200"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
