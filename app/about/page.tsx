"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe, Share2, Menu, X } from "lucide-react";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterTouched, setNewsletterTouched] = useState(false);

  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email format";
    return "";
  };

  const validateNewsletter = (email: string) => {
    const error = validateEmail(email);
    setNewsletterError(error);
    return error;
  };

  const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterEmail(e.target.value);
    if (newsletterTouched) {
      validateNewsletter(e.target.value);
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

  const leadershipTeam = [
    {
      name: "Eleanor Vance",
      title: "Managing Partner",
      background: "Former Managing Director at a top-tier global investment bank with over 20 years of experience in cross-border M&A and corporate strategy.",
      expertise: "Corporate Strategy, Mergers & Acquisitions, Global Markets",
      experience: "Finance, Technology, Healthcare"
    },
    {
      name: "Marcus Thorne",
      title: "Director of Strategy",
      background: "15+ years advising Fortune 500 companies on market entry and operational restructuring. Previously a partner at a leading management consulting firm.",
      expertise: "Market Entry, Operational Restructuring, Growth Strategy",
      experience: "Manufacturing, Consumer Goods, Energy"
    },
    {
      name: "Sarah Jenkins",
      title: "Director of Risk & Compliance",
      background: "Former Chief Compliance Officer for a multinational financial institution. Expert in navigating complex regulatory environments across North America and Europe.",
      expertise: "Regulatory Compliance, Enterprise Risk Management, Corporate Governance",
      experience: "Financial Services, Pharmaceuticals, Telecommunications"
    },
    {
      name: "David Chen",
      title: "Director of Global Partnerships",
      background: "Extensive background in international trade and diplomacy. Has successfully negotiated joint ventures and strategic alliances in emerging markets.",
      expertise: "Strategic Alliances, Joint Ventures, Emerging Markets",
      experience: "Logistics, Infrastructure, Technology"
    }
  ];

  return (
    <main className="min-h-screen bg-surface">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-[0px_20px_40px_rgba(27,38,59,0.06)]">
        <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-5 max-w-screen-2xl mx-auto">
          <Link href="/">
            <div className="relative h-10 w-40 md:h-12 md:w-48">
              <Image 
                src="https://i.postimg.cc/Bvnw2L9G/Black-and-White-Modern-Creative-Agency-Logo-(11).png" 
                alt="BEA Global Partners" 
                fill 
                className="object-contain object-left" 
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <Link href="/about" className="text-tertiary-container font-semibold border-b-2 border-tertiary-container pb-1 text-[10px] lg:text-xs tracking-wide uppercase">
              About Us
            </Link>
            <Link href="/services" className="text-secondary hover:text-tertiary-container transition-all duration-300 text-[10px] lg:text-xs tracking-wide uppercase">
              Services
            </Link>
            <Link href="/#insights" className="text-secondary hover:text-tertiary-container transition-all duration-300 text-[10px] lg:text-xs tracking-wide uppercase">
              Insights
            </Link>
            <Link href="/#contact" className="text-secondary hover:text-tertiary-container transition-all duration-300 text-[10px] lg:text-xs tracking-wide uppercase">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <button className="hidden sm:block bg-primary text-on-primary px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-medium text-xs md:text-sm hover:opacity-90 active:scale-95 transition-all">
              Inquire Now
            </button>
            <button 
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-outline-variant/20 shadow-xl md:hidden flex flex-col"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-tertiary-container font-serif text-xl border-b border-outline-variant/10 pb-4">About Us</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-primary font-serif text-xl border-b border-outline-variant/10 pb-4">Services</Link>
              <Link href="/#insights" onClick={() => setIsMobileMenuOpen(false)} className="text-primary font-serif text-xl border-b border-outline-variant/10 pb-4">Insights</Link>
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-primary font-serif text-xl border-b border-outline-variant/10 pb-4">Contact</Link>
              <button className="bg-primary text-on-primary px-4 py-3 rounded-lg font-medium text-sm w-full mt-2">
                Inquire Now
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60svh] md:min-h-[80svh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/corporatehq/1920/1080"
            alt="Corporate Headquarters"
            fill
            className="object-cover grayscale brightness-[0.4]"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-transparent to-surface"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-8 w-full text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-tertiary-container font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 block"
          >
            About The Firm
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
          >
            Strategic Advisory Built for Complex Markets
          </motion.h1>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 md:py-32 bg-surface relative">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/boardroom/800/1000"
                  alt="Boardroom Strategy"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
                Navigating the Interconnected World
              </h2>
              <div className="h-px w-24 bg-tertiary/30"></div>
              <div className="space-y-6 text-on-surface-variant text-base md:text-lg lg:text-xl font-light leading-relaxed">
                <p>
                  BEA Global Partners was founded to support organizations navigating complex strategic, regulatory, and operational environments.
                </p>
                <p>
                  The firm provides independent advisory services to clients seeking thoughtful strategy, effective risk management, and sustainable global growth.
                </p>
                <p>
                  By combining strategic expertise with a global perspective, BEA Global Partners helps organizations make informed decisions in an increasingly interconnected world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/abstractmap/1920/1080"
            alt="Abstract Map"
            fill
            className="object-cover opacity-10 mix-blend-overlay grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-tertiary-fixed font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-8 block">
              Our Mission
            </span>
            <p className="text-2xl md:text-4xl lg:text-5xl font-serif text-white italic leading-snug">
              &quot;To help organizations navigate complexity, manage risk, and achieve sustainable global growth.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 md:py-32 bg-surface-container-lowest">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-6">Leadership</h2>
              <p className="text-secondary text-lg font-light leading-relaxed">
                Our team brings decades of experience across global markets, industries, and disciplines. We are united by a commitment to excellence and independent thinking.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              >
                <Image
                  src={`https://picsum.photos/seed/${leader.name.replace(' ', '')}Portrait/600/800`}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-white font-serif text-2xl lg:text-3xl mb-1">{leader.name}</h3>
                  <p className="text-tertiary-container font-semibold text-xs uppercase tracking-widest mb-4">{leader.title}</p>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="h-px w-12 bg-white/20 mb-4"></div>
                    <p className="text-white/90 text-sm font-light leading-relaxed mb-4 line-clamp-4">
                      {leader.background}
                    </p>
                    <div className="space-y-2">
                      <p className="text-white/70 text-[10px] uppercase tracking-wider">
                        <span className="text-tertiary-container font-bold">Expertise:</span> {leader.expertise}
                      </p>
                      <p className="text-white/70 text-[10px] uppercase tracking-wider">
                        <span className="text-tertiary-container font-bold">Industry:</span> {leader.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <div className="relative h-10 w-40 md:h-12 md:w-48 mb-4 md:mb-6">
              <Image 
                src="https://i.postimg.cc/Bvnw2L9G/Black-and-White-Modern-Creative-Agency-Logo-(11).png" 
                alt="BEA Global Partners" 
                fill 
                className="object-contain object-left" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-secondary font-sans text-[10px] tracking-wider leading-relaxed max-w-sm">
              Dedicated to providing the intelligence and strategic direction required to lead in a complex world.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm md:text-base text-primary mb-4 md:mb-6">Global Hubs</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><Link href="#" className="text-secondary font-sans text-[10px] tracking-wider hover:text-primary underline-offset-4 hover:underline transition-all">London</Link></li>
              <li><Link href="#" className="text-secondary font-sans text-[10px] tracking-wider hover:text-primary underline-offset-4 hover:underline transition-all">New York</Link></li>
              <li><Link href="#" className="text-secondary font-sans text-[10px] tracking-wider hover:text-primary underline-offset-4 hover:underline transition-all">Singapore</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-sm md:text-base text-primary mb-4 md:mb-6">Legal</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><Link href="#" className="text-secondary font-sans text-[10px] tracking-wider hover:text-primary underline-offset-4 hover:underline transition-all">Privacy Policy</Link></li>
              <li><Link href="#" className="text-secondary font-sans text-[10px] tracking-wider hover:text-primary underline-offset-4 hover:underline transition-all">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-sm md:text-base text-primary mb-4 md:mb-6">Intelligence</h4>
            <Link href="#" className="text-tertiary-container font-sans text-[10px] tracking-wider block mb-3 md:mb-4 hover:underline">Newsletter Signup</Link>
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
