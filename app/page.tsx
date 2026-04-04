"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Mail, ArrowUpRight, Globe, Share2 } from "lucide-react";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function Page() {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    organization: "",
    message: ""
  });
  const [contactErrors, setContactErrors] = useState({
    fullName: "",
    email: "",
    organization: ""
  });
  const [contactTouched, setContactTouched] = useState({
    fullName: false,
    email: false,
    organization: false
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterTouched, setNewsletterTouched] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateContactField = (field: string, value: string) => {
    let error = "";
    if (field === "fullName") {
      if (!value.trim()) error = "Full Name is required";
      else if (value.trim().length < 2) error = "Must be at least 2 characters";
    } else if (field === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!validateEmail(value)) error = "Please enter a valid email address";
    } else if (field === "organization") {
      if (!value.trim()) error = "Organization is required";
      else if (value.trim().length < 2) error = "Must be at least 2 characters";
    }
    setContactErrors(prev => ({ ...prev, [field]: error }));
    return error;
  };

  const handleContactChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
    if (contactTouched[field as keyof typeof contactTouched]) {
      validateContactField(field, value);
    }
  };

  const handleContactBlur = (field: string) => {
    setContactTouched(prev => ({ ...prev, [field]: true }));
    validateContactField(field, contactForm[field as keyof typeof contactForm]);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactTouched({ fullName: true, email: true, organization: true });
    
    const nameErr = validateContactField("fullName", contactForm.fullName);
    const emailErr = validateContactField("email", contactForm.email);
    const orgErr = validateContactField("organization", contactForm.organization);
    
    if (!nameErr && !emailErr && !orgErr) {
      // Proceed with form submission
      console.log("Form submitted", contactForm);
      // Reset form or show success message
    }
  };

  const validateNewsletter = (email: string) => {
    let error = "";
    if (!email.trim()) {
      error = "Email is required";
    } else if (!validateEmail(email)) {
      error = "Please enter a valid email address";
    }
    setNewsletterError(error);
    return error;
  };

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewsletterEmail(value);
    if (newsletterTouched) {
      validateNewsletter(value);
    }
  };

  const handleNewsletterBlur = () => {
    setNewsletterTouched(true);
    validateNewsletter(newsletterEmail);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterTouched(true);
    const error = validateNewsletter(newsletterEmail);
    if (!error) {
      console.log("Newsletter signup", newsletterEmail);
      // Proceed with signup
    }
  };

  return (
    <main className="min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-[0px_20px_40px_rgba(27,38,59,0.06)]">
        <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-5 max-w-screen-2xl mx-auto">
          <div className="text-base md:text-lg font-serif font-bold text-primary tracking-tight">
            BEA Global Partners
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <a href="#" className="text-tertiary-container font-semibold border-b-2 border-tertiary-container pb-1 text-[10px] lg:text-xs tracking-wide uppercase">
              Services
            </a>
            <a href="#" className="text-secondary hover:text-tertiary-container transition-all duration-300 text-[10px] lg:text-xs tracking-wide uppercase">
              Insights
            </a>
            <a href="#" className="text-secondary hover:text-tertiary-container transition-all duration-300 text-[10px] lg:text-xs tracking-wide uppercase">
              Contact
            </a>
          </div>
          <button className="bg-primary text-on-primary px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-medium text-xs md:text-sm hover:opacity-90 active:scale-95 transition-all">
            Inquire Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-32 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB95TTJAz11jlu0EBMnWQ1ZYCcuPxkkVmldnzvBtCQmM2kLatfMwsVF0xoiwvhR_vUf1jcCIJRLcLvKPj0H9O81ehf4EmNaS5AzHkIQoIDV-3TJ_6qCe4IBMAsZgutUmxL4NrCXPl97y2HaaGDNfxQi5ligs6bIsISkVAK2PTfut21powNlxfXDUCjo0m6uR-LFngYzutaF-aQ0tmMGIfh8bcb9PHCMauJGnoBdGaadjhKYkERaGY_d6l11G0NTEPi7cB87Og6xaYs"
            alt="BEA Global Hero"
            fill
            className="object-cover grayscale brightness-[0.3]"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 py-1 md:px-4 md:py-1 mb-4 md:mb-6 text-tertiary-fixed font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] md:text-xs border-l-2 border-tertiary">
              Strategic Advisory Excellence
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Navigating the <span className="italic text-tertiary-fixed-dim">Complexity</span> of Global Markets.
            </h1>
            <p className="text-on-primary-container text-sm sm:text-base md:text-lg max-w-2xl mb-8 md:mb-12 font-light leading-relaxed">
              We provide bespoke strategic clarity for institutional leaders facing high-stakes regulatory landscapes and global growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button className="bg-tertiary-container text-on-tertiary-container px-6 py-3 md:px-10 md:py-4 rounded-lg font-semibold tracking-wide flex items-center justify-center gap-3 hover:brightness-110 transition-all text-sm md:text-base">
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-6 py-3 md:px-10 md:py-4 rounded-lg font-semibold tracking-wide hover:bg-white/10 transition-all text-sm md:text-base">
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authority Positioning Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface-container-low border-y border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/5 order-2 lg:order-1"
            >
              <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl text-primary leading-[1.15] tracking-tight mb-6 md:mb-8">
                Strategic Insight for Complex Business Environments
              </h2>
              <div className="space-y-6 md:space-y-8">
                <p className="text-on-surface-variant text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-tight">
                  Organizations today face increasingly complex regulatory landscapes, evolving risk environments, and rapidly shifting global markets.
                </p>
                <div className="h-px w-16 md:w-24 bg-tertiary/30"></div>
                <p className="text-on-surface-variant/80 text-sm md:text-base lg:text-lg font-light leading-relaxed">
                  BEA Global Partners provides senior-level advisory services that help leaders navigate these challenges with clarity and confidence. Our work combines strategic insight, rigorous analysis, and practical implementation to support sustainable growth and resilient organizations.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/5 order-1 lg:order-2 relative w-full max-w-md lg:max-w-none mx-auto"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0px_20px_40px_rgba(27,38,59,0.1)] aspect-[4/5] lg:aspect-square">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0XIWnUISLX4Tat_HQgxwn_6Rul4jSdxE5onz__tzdwET5Pd12o3Pqbx3DxDLnxHkE96UhzrwQcnfgCxFXhV5sp0YSTQM0OSo6ErH21tVuV6H0aR87dTm2Vx1OoCviCl5wE3SNfjwBwG33y-B7muyvw-PWIzTJwnS6E9F6IRtvRQMJI08Oiv97hkhqqPqfQkWdMHv6saYjO1w36XcLU7BM_2yj7FgqV8Md8P6VttBTdmR__b5ZXK0tdsfbeBYGOlXW_YT-5AYXwgI"
                  alt="Global Strategic Advisory"
                  fill
                  className="object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-tertiary-container rounded-full flex items-center justify-center shadow-lg z-10">
                <div className="text-center px-2 md:px-4">
                  <span className="block text-on-tertiary-container font-serif text-xs md:text-sm italic font-bold">Global Reach</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-24 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary leading-tight mb-4 md:mb-6">Expertise for a Defined Future</h2>
            <p className="text-secondary text-sm md:text-base font-light leading-relaxed">
              BEA Global Partners delivers specialized advisory services designed to mitigate risk and unlock strategic value in highly regulated environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group h-[350px] md:h-[450px] overflow-hidden rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] md:col-span-2"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB95TTJAz11jlu0EBMnWQ1ZYCcuPxkkVmldnzvBtCQmM2kLatfMwsVF0xoiwvhR_vUf1jcCIJRLcLvKPj0H9O81ehf4EmNaS5AzHkIQoIDV-3TJ_6qCe4IBMAsZgutUmxL4NrCXPl97y2HaaGDNfxQi5ligs6bIsISkVAK2PTfut21powNlxfXDUCjo0m6uR-LFngYzutaF-aQ0tmMGIfh8bcb9PHCMauJGnoBdGaadjhKYkERaGY_d6l11G0NTEPi7cB87Og6xaYs"
                alt="Strategy & Management"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"></div>
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
                <h3 className="text-white font-serif text-xl md:text-3xl lg:text-4xl leading-snug max-w-lg">
                  Strategy &<br/>Management Consulting
                </h3>
                <div className="flex justify-end">
                  <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group h-[350px] md:h-[450px] overflow-hidden rounded-[2rem] bg-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtbEatnheJ8jyMmPws1Q_huLp1Xn2XPxrlryfSomrUvnwzCpY9CndbWG_FCXz0-g4uiyLmk8TVuupBxmGx0yJ8gbJpB7RHKcaZI86FnDUFzJlzsGpXbn7pnDCc0mbiCHbSKYeX8u3D3dMwLORDsmojhmZr8Y7jd0GcrooMKTOLC0KkyvG1EdTzqnjMsZFXITZe5xj28oe_lZy2WJfAyJrB1WgMDYmMRdJIvgodvWnksWpmVNDJs1fz_yzLl0-dCxJLr_83u5Eo5lE"
                  alt="Risk Management"
                  fill
                  className="object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-between">
                <h3 className="text-white font-serif text-xl md:text-2xl leading-snug">
                  Enterprise & Financial Risk<br/>management
                </h3>
                <div className="flex justify-end">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group h-[350px] md:h-[450px] overflow-hidden rounded-[2rem] bg-[#D4E4F6] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
              <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-between">
                <h3 className="text-primary font-serif text-xl md:text-2xl leading-snug">
                  Business Development & Market Entry
                </h3>
                <div className="flex justify-end">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group h-[350px] md:h-[450px] overflow-hidden rounded-[2rem] bg-[#A8B5A2] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] lg:col-span-2"
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-between">
                <h3 className="text-white font-serif text-xl md:text-2xl leading-snug">
                  Regulatory<br/>Compliance
                </h3>
                <div className="flex justify-end">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why BEA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-1 lg:col-span-5 relative z-10"
            >
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-8 md:mb-12">The Curated Approach to Advisory</h2>
              <div className="space-y-8 md:space-y-12">
                <div>
                  <h4 className="text-tertiary-fixed font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-3">Global Expertise</h4>
                  <p className="text-primary-fixed-dim font-light text-sm md:text-base">Our network spans 45 countries, providing local intelligence with a global perspective.</p>
                </div>
                <div>
                  <h4 className="text-tertiary-fixed font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-3">Bespoke Strategies</h4>
                  <p className="text-primary-fixed-dim font-light text-sm md:text-base">No templates. Every engagement is a high-touch, partner-led initiative designed for your specific challenge.</p>
                </div>
                <div>
                  <h4 className="text-tertiary-fixed font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-3">Institutional Trust</h4>
                  <p className="text-primary-fixed-dim font-light text-sm md:text-base">Discretion and integrity are the foundations of our partnership with the world&apos;s leading firms.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-1 lg:col-span-7 relative mt-8 lg:mt-0"
            >
              <div className="aspect-[4/5] md:aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtbEatnheJ8jyMmPws1Q_huLp1Xn2XPxrlryfSomrUvnwzCpY9CndbWG_FCXz0-g4uiyLmk8TVuupBxmGx0yJ8gbJpB7RHKcaZI86FnDUFzJlzsGpXbn7pnDCc0mbiCHbSKYeX8u3D3dMwLORDsmojhmZr8Y7jd0GcrooMKTOLC0KkyvG1EdTzqnjMsZFXITZe5xj28oe_lZy2WJfAyJrB1WgMDYmMRdJIvgodvWnksWpmVNDJs1fz_yzLl0-dCxJLr_83u5Eo5lE"
                  alt="Expertise"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-6 -left-4 md:-bottom-12 md:-left-12 bg-tertiary-container p-6 md:p-12 rounded-lg max-w-[280px] md:max-w-xs shadow-2xl">
                <p className="text-on-tertiary-container font-serif text-base md:text-xl italic leading-tight">
                  &quot;In global markets, the most significant risks are often the ones left unsaid.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-0"
          >
            <div>
              <span className="text-tertiary text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-2 md:mb-4">Perspective</span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary">Strategic Insights</h2>
            </div>
            <a href="#" className="pb-1 md:pb-2 border-b border-primary text-xs md:text-sm font-semibold hover:text-tertiary hover:border-tertiary transition-all">
              View All Publications
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex overflow-x-auto pb-8 md:pb-12 gap-4 md:gap-8 no-scrollbar snap-x"
          >
            {/* Insight Card 1 */}
            <div className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[480px] snap-start group cursor-pointer">
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-4 md:mb-8 bg-surface-container-highest">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWpHqgXNPQ3U05uSxRsz_CvJUhxuLDy3IA9AIIYmcLJpAcut4bH_l5bEpQKQTfXgf3jsvVK9Lvp7NZ5j86hQ5ggwp1YZ6DMwGgrFKL2OnZU3W5EYjGKT4QH1viXTRCr2taAEJKVsY9fQYJIfFUXvdSGqkqsYJXxMaqirbHq4n7qAH9pEP8mNmffSNIT48sczBt7Rjzw84ZhiQs2O37UQRMIYlSC7GZHeyJZeQ1jdlzOAgazo-lXFbIwQ63EfXGtWAx65M60NhTApM"
                  alt="Whitepaper 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-tertiary uppercase tracking-widest mb-2 md:mb-4 block">Whitepaper — Oct 2024</span>
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-primary mb-2 md:mb-4 group-hover:underline underline-offset-8 leading-tight">The Future of ASEAN Regulatory Frameworks</h3>
              <p className="text-secondary font-light text-xs md:text-sm">An in-depth analysis of emerging cross-border compliance trends in Southeast Asia.</p>
            </div>

            {/* Insight Card 2 */}
            <div className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[480px] snap-start group cursor-pointer">
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-4 md:mb-8 bg-surface-container-highest">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGwk47jCSD3XDfLR9n65VBuWTiq2HdWpcENXY3lwt3lPOIn4TpIspmYWbG5ZB3cIYCnJzLdo8sWTEJhXU04fmgo73Z5RP352KRyJV7Xr_svSN91o8Qg7tN8DasskyunnDup1ZMItPruhyy0QgOjbZsD4sH-PlZFzZ_e_i6BPvPA-sfrAEyV8g48zxNPXpXQRtIRsr42nLk--M_3oy781t72-ZCyeTZvzfk8Xri8LzKrLqZ3Mp3O1M7-9NYtbBVy_zedGpgsKiV6QE"
                  alt="Whitepaper 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-tertiary uppercase tracking-widest mb-2 md:mb-4 block">Market Update — Sept 2024</span>
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-primary mb-2 md:mb-4 group-hover:underline underline-offset-8 leading-tight">Geopolitical Resilience in Global Supply Chains</h3>
              <p className="text-secondary font-light text-xs md:text-sm">Strategies for institutional investors to navigate logistical disruptions through proactive risk modeling.</p>
            </div>

            {/* Insight Card 3 */}
            <div className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[480px] snap-start group cursor-pointer">
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-4 md:mb-8 bg-surface-container-highest">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYThbsn_wIGHlKK_J4R8YRc9rySr4TuXnc7q8uARAcBKlFAGvmkTCMcRS1zMegS7EJk8FBTEwwsWGOc2iYTDU3PmAm8xF13VXqgQvQzdXI3IDq5OHKHq5Qcoqs5dwRj89iQpuVoGm6aO6zmLgrBXf5I2HCRkOhGIVKafEVWkdKLwBhmaVVB9y35EA9tNWynnZgPJz8CFknTUsVBu-HT4rzNSjjjFYg7Isl100-3HLDRqoIHwaLPK3WNMj2Fs61AJWntkKwmq50Qys"
                  alt="Whitepaper 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-tertiary uppercase tracking-widest mb-2 md:mb-4 block">Executive Brief — Aug 2024</span>
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-primary mb-2 md:mb-4 group-hover:underline underline-offset-8 leading-tight">ESG 2.0: Beyond Compliance</h3>
              <p className="text-secondary font-light text-xs md:text-sm">Moving from regulatory checkboxes to strategic value creation through sustainable governance.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary mb-6 md:mb-8">Begin the Consultation</h2>
              <p className="text-secondary text-sm md:text-base font-light mb-8 md:mb-12">
                Contact our global headquarters to discuss your strategic objectives. Our advisory team is available for private briefings and institutional inquiries.
              </p>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start md:items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-low flex items-center justify-center rounded-lg shrink-0 mt-1 md:mt-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-tertiary" />
                  </div>
                  <div>
                    <h5 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-1">Global Headquarters</h5>
                    <p className="text-secondary text-xs md:text-sm">One Mayfair Place, London W1J 8AJ, UK</p>
                  </div>
                </div>
                <div className="flex items-start md:items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container-low flex items-center justify-center rounded-lg shrink-0 mt-1 md:mt-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-tertiary" />
                  </div>
                  <div>
                    <h5 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-1">Email</h5>
                    <p className="text-secondary text-xs md:text-sm">inquiry@beaglobal.partners</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-surface-container-low p-6 md:p-12 rounded-[2rem]"
            >
              <form className="space-y-6 md:space-y-8" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      value={contactForm.fullName}
                      onChange={(e) => handleContactChange("fullName", e.target.value)}
                      onBlur={() => handleContactBlur("fullName")}
                      className={`w-full bg-transparent border-0 border-b-2 py-3 md:py-4 focus:outline-none transition-colors placeholder:text-outline text-primary text-sm md:text-base ${contactErrors.fullName ? 'border-red-500 focus:border-red-500' : 'border-outline-variant focus:border-tertiary'}`}
                    />
                    {contactErrors.fullName && (
                      <p className="absolute -bottom-5 left-0 text-red-500 text-[10px]">{contactErrors.fullName}</p>
                    )}
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Professional Email" 
                      value={contactForm.email}
                      onChange={(e) => handleContactChange("email", e.target.value)}
                      onBlur={() => handleContactBlur("email")}
                      className={`w-full bg-transparent border-0 border-b-2 py-3 md:py-4 focus:outline-none transition-colors placeholder:text-outline text-primary text-sm md:text-base ${contactErrors.email ? 'border-red-500 focus:border-red-500' : 'border-outline-variant focus:border-tertiary'}`}
                    />
                    {contactErrors.email && (
                      <p className="absolute -bottom-5 left-0 text-red-500 text-[10px]">{contactErrors.email}</p>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Organization" 
                    value={contactForm.organization}
                    onChange={(e) => handleContactChange("organization", e.target.value)}
                    onBlur={() => handleContactBlur("organization")}
                    className={`w-full bg-transparent border-0 border-b-2 py-3 md:py-4 focus:outline-none transition-colors placeholder:text-outline text-primary text-sm md:text-base ${contactErrors.organization ? 'border-red-500 focus:border-red-500' : 'border-outline-variant focus:border-tertiary'}`}
                  />
                  {contactErrors.organization && (
                    <p className="absolute -bottom-5 left-0 text-red-500 text-[10px]">{contactErrors.organization}</p>
                  )}
                </div>
                <div className="relative">
                  <textarea 
                    placeholder="How can we assist you?" 
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => handleContactChange("message", e.target.value)}
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3 md:py-4 focus:outline-none focus:border-tertiary transition-colors placeholder:text-outline text-primary resize-none text-sm md:text-base"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-4 md:py-5 rounded-lg font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm hover:bg-primary-container transition-all"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-highest w-full relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 px-6 md:px-12 py-12 md:py-16 max-w-screen-2xl mx-auto"
        >
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-sm md:text-base font-serif text-primary mb-4 md:mb-6 font-bold">BEA Global Partners</div>
            <p className="text-secondary font-sans text-[10px] tracking-wider leading-relaxed max-w-sm">
              Dedicated to providing the intelligence and strategic direction required to lead in a complex world.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm md:text-base text-primary mb-4 md:mb-6">Global Hubs</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-secondary font-sans text-[10px] tracking-wider hover:text-primary underline-offset-4 hover:underline transition-all">London</a></li>
              <li><a href="#" className="text-secondary font-sans text-[10px] tracking-wider hover:text-primary underline-offset-4 hover:underline transition-all">New York</a></li>
              <li><a href="#" className="text-secondary font-sans text-[10px] tracking-wider hover:text-primary underline-offset-4 hover:underline transition-all">Singapore</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-sm md:text-base text-primary mb-4 md:mb-6">Legal</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-secondary font-sans text-[10px] tracking-wider hover:text-primary underline-offset-4 hover:underline transition-all">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary font-sans text-[10px] tracking-wider hover:text-primary underline-offset-4 hover:underline transition-all">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-sm md:text-base text-primary mb-4 md:mb-6">Intelligence</h4>
            <a href="#" className="text-tertiary-container font-sans text-[10px] tracking-wider block mb-3 md:mb-4 hover:underline">Newsletter Signup</a>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <div className={`flex items-center border-b pb-2 ${newsletterError ? 'border-red-500' : 'border-outline-variant'}`}>
                <input 
                  type="email" 
                  placeholder="email@address.com" 
                  value={newsletterEmail}
                  onChange={handleNewsletterChange}
                  onBlur={handleNewsletterBlur}
                  className="bg-transparent border-0 text-xs w-full focus:outline-none placeholder:text-outline text-primary"
                />
                <button type="submit" className="hover:text-tertiary-container transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-outline" />
                </button>
              </div>
              {newsletterError && (
                <p className="absolute -bottom-5 left-0 text-red-500 text-[10px]">{newsletterError}</p>
              )}
            </form>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-screen-2xl mx-auto px-6 md:px-12 py-6 md:py-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <p className="text-secondary font-sans text-[10px] tracking-widest uppercase">
            © 2024 BEA Global Partners. Strategic Advisory Excellence.
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <Globe className="w-4 h-4 md:w-5 md:h-5 text-outline hover:text-tertiary-container cursor-pointer transition-colors" />
            <Share2 className="w-4 h-4 md:w-5 md:h-5 text-outline hover:text-tertiary-container cursor-pointer transition-colors" />
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
