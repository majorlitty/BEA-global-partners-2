"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe, Share2, CheckCircle2, AlertTriangle, TrendingUp, X, Menu } from "lucide-react";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterTouched, setNewsletterTouched] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

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

  const services = [
    {
      id: "strategy",
      title: "Strategy & Management Consulting",
      overview: "Organizations operate in increasingly competitive and dynamic markets. BEA Global Partners works with leadership teams to clarify strategic direction, strengthen competitive positioning, and support long-term value creation.",
      image: "https://picsum.photos/seed/strategyconsulting1/800/1000",
      capabilities: [
        "Corporate & Business Unit Strategy",
        "Operating Model Design",
        "M&A and Divestitures",
        "Transformation & Change Management"
      ],
      challenges: [
        "Navigating disruptive market forces",
        "Overcoming growth stagnation",
        "Integrating complex acquisitions",
        "Aligning operations with strategic goals"
      ],
      outcomes: [
        "Strengthened competitive advantage",
        "Accelerated revenue growth",
        "Realized deal synergies",
        "Agile and efficient operating models"
      ],
      caseStudies: [
        {
          title: "Global Tech Merger Integration",
          challenge: "Merging two distinct corporate cultures and redundant operational systems post-acquisition.",
          solution: "Designed a comprehensive 100-day integration plan focusing on synergy realization and change management.",
          result: "Achieved $150M in cost synergies within year one, retaining 95% of key talent."
        }
      ],
      testimonials: [
        {
          quote: "BEA Global Partners provided the clarity and rigorous framework we needed during our most critical transition phase.",
          author: "CEO",
          role: "Fortune 500 Tech Firm"
        }
      ]
    },
    {
      id: "risk",
      title: "Enterprise & Financial Risk Management",
      overview: "Effective risk management is central to organizational resilience. The firm helps clients build risk frameworks that anticipate emerging threats while enabling confident decision-making.",
      image: "https://picsum.photos/seed/riskmanagement2/800/1000",
      capabilities: [
        "Enterprise Risk Frameworks",
        "Financial Risk Modeling",
        "Operational Resilience",
        "Crisis Management & Recovery"
      ],
      challenges: [
        "Managing unpredictable market volatility",
        "Mitigating supply chain vulnerabilities",
        "Addressing inadequate risk visibility",
        "Optimizing capital allocation"
      ],
      outcomes: [
        "Robust and proactive risk governance",
        "Optimized capital efficiency",
        "Minimized operational disruptions",
        "Enhanced stakeholder and board confidence"
      ],
      caseStudies: [
        {
          title: "Supply Chain Resilience Framework",
          challenge: "Severe disruptions in raw material sourcing due to geopolitical instability.",
          solution: "Developed a dynamic risk-weighting model and diversified supplier matrix.",
          result: "Reduced supply chain value-at-risk by 40% and improved lead time reliability."
        }
      ],
      testimonials: [
        {
          quote: "Their proactive approach to risk management transformed our vulnerabilities into a competitive advantage.",
          author: "Chief Risk Officer",
          role: "Global Manufacturing"
        }
      ]
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      overview: "Operating across jurisdictions requires sophisticated compliance capabilities. BEA Global Partners helps organizations design and implement governance and compliance systems aligned with regulatory expectations.",
      image: "https://picsum.photos/seed/regulatorycompliance3/800/1000",
      capabilities: [
        "Regulatory Strategy & Mapping",
        "Compliance Program Design",
        "Anti-Financial Crime (AML/KYC)",
        "Data Privacy & Governance"
      ],
      challenges: [
        "Adapting to rapid cross-border policy changes",
        "Remediating compliance program failures",
        "Managing intense regulatory scrutiny",
        "Balancing compliance costs with agility"
      ],
      outcomes: [
        "Seamless regulatory alignment",
        "Reduced exposure to penalties",
        "Strengthened institutional integrity",
        "Embedded proactive compliance culture"
      ],
      caseStudies: [
        {
          title: "Cross-Border Data Privacy Overhaul",
          challenge: "Navigating conflicting data localization laws across EU and APAC regions.",
          solution: "Implemented a unified global data governance architecture with localized compliance nodes.",
          result: "Zero regulatory penalties and a 30% reduction in compliance overhead."
        }
      ],
      testimonials: [
        {
          quote: "BEA's ability to translate complex regulatory requirements into actionable operational strategies is unmatched.",
          author: "General Counsel",
          role: "Multinational Bank"
        }
      ]
    },
    {
      id: "market-entry",
      title: "Business Development & Market Entry",
      overview: "International growth requires strategic clarity and local insight. The firm supports clients entering new markets, building strategic partnerships, and developing sustainable growth strategies.",
      image: "https://picsum.photos/seed/marketentry4/800/1000",
      capabilities: [
        "Market Feasibility & Sizing",
        "Partner Identification & Diligence",
        "Go-to-Market Strategy",
        "Cross-Border Joint Ventures"
      ],
      challenges: [
        "Overcoming lack of local market intelligence",
        "Navigating cultural barriers in negotiations",
        "Structuring aligned partnerships",
        "Addressing localized regulatory hurdles"
      ],
      outcomes: [
        "Successful and de-risked market penetration",
        "High-value strategic alliances",
        "Accelerated revenue generation in new geographies",
        "Sustainable local presence"
      ],
      caseStudies: [
        {
          title: "APAC Market Expansion Strategy",
          challenge: "Entering a highly saturated Asian market with entrenched local competitors.",
          solution: "Conducted deep-dive market feasibility and identified a niche joint-venture partner.",
          result: "Captured 5% market share within 18 months, exceeding initial revenue targets by 20%."
        }
      ],
      testimonials: [
        {
          quote: "We couldn't have navigated the local nuances and partnership negotiations without their expert guidance.",
          author: "VP of International Growth",
          role: "Consumer Goods"
        }
      ]
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
            <Link href="/about" className="text-secondary hover:text-tertiary-container transition-all duration-300 text-[10px] lg:text-xs tracking-wide uppercase">
              About Us
            </Link>
            <Link href="/services" className="text-tertiary-container font-semibold border-b-2 border-tertiary-container pb-1 text-[10px] lg:text-xs tracking-wide uppercase">
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
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-primary font-serif text-xl border-b border-outline-variant/10 pb-4">About Us</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-tertiary-container font-serif text-xl border-b border-outline-variant/10 pb-4">Services</Link>
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
      <section className="relative min-h-[60svh] md:min-h-[70svh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/serviceshero/1920/1080"
            alt="Global Services"
            fill
            className="object-cover grayscale brightness-[0.35]"
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
            Our Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
          >
            Specialized Advisory for a Defined Future
          </motion.h1>
        </div>
      </section>

      {/* Services List */}
      <div className="bg-surface pb-24 md:pb-32">
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-20 md:py-32 ${index % 2 !== 0 ? 'bg-surface-container-lowest' : 'bg-surface'}`}>
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                
                {/* Image Column */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-4 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-8 flex flex-col justify-between ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  {/* Header & Overview */}
                  <div className="mb-12">
                    <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight mb-6">
                      {service.title}
                    </h2>
                    <div className="h-px w-24 bg-tertiary/30 mb-6"></div>
                    <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
                      {service.overview}
                    </p>
                    
                    {/* Modal Trigger Button */}
                    <div className="pt-8">
                      <button 
                        onClick={() => setActiveModal(service.id)}
                        className="group flex items-center gap-3 text-primary font-serif text-lg hover:text-tertiary-container transition-colors"
                      >
                        <span className="border-b border-transparent group-hover:border-tertiary-container transition-colors pb-0.5">
                          View Case Studies & Testimonials
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* 3 Cards Grid */}
                  <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
                    
                    {/* Capabilities */}
                    <div className="bg-surface-container-low p-6 rounded-2xl flex flex-col shadow-sm border border-outline-variant/20 min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center">
                      <h3 className="flex items-center gap-2 font-serif text-lg text-primary mb-4">
                        <CheckCircle2 className="w-4 h-4 text-tertiary-container" />
                        Capabilities
                      </h3>
                      <ul className="space-y-3 flex-grow">
                        {service.capabilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-tertiary-container mt-2 flex-shrink-0"></div>
                            <span className="text-secondary text-sm font-light leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div className="bg-surface-container-low p-6 rounded-2xl flex flex-col shadow-sm border border-outline-variant/20 min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center">
                      <h3 className="flex items-center gap-2 font-serif text-lg text-primary mb-4">
                        <AlertTriangle className="w-4 h-4 text-orange-700/70" />
                        Client Challenges
                      </h3>
                      <ul className="space-y-3 flex-grow">
                        {service.challenges.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-outline mt-2 flex-shrink-0"></div>
                            <span className="text-on-surface-variant text-sm font-light leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="bg-primary text-white p-6 rounded-2xl flex flex-col shadow-md min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center">
                      <h3 className="flex items-center gap-2 font-serif text-lg text-white mb-4">
                        <TrendingUp className="w-4 h-4 text-tertiary-fixed" />
                        Outcomes Delivered
                      </h3>
                      <ul className="space-y-3 flex-grow">
                        {service.outcomes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-tertiary-fixed mt-2 flex-shrink-0"></div>
                            <span className="text-white/90 text-sm font-light leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-surface rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-outline-variant/20 bg-surface z-10">
              <h2 className="font-serif text-2xl md:text-3xl text-primary">
                {services.find(s => s.id === activeModal)?.title}
              </h2>
              <button 
                onClick={() => setActiveModal(null)} 
                className="p-2 rounded-full hover:bg-surface-container transition-colors"
              >
                <X className="w-6 h-6 text-on-surface-variant" />
              </button>
            </div>
            
            <div className="p-6 md:p-10 overflow-y-auto space-y-12 bg-surface">
              {/* Case Studies */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-primary mb-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-tertiary-container"></div>
                  Featured Case Studies
                </h3>
                <div className="grid grid-cols-1 gap-8">
                  {services.find(s => s.id === activeModal)?.caseStudies.map((cs, i) => (
                    <div key={i} className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
                      <h4 className="font-bold text-lg md:text-xl text-primary mb-6">{cs.title}</h4>
                      <div className="space-y-5 text-sm md:text-base text-on-surface-variant font-light">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                          <strong className="text-secondary font-semibold sm:w-24 shrink-0">Challenge:</strong> 
                          <p>{cs.challenge}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                          <strong className="text-secondary font-semibold sm:w-24 shrink-0">Solution:</strong> 
                          <p>{cs.solution}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                          <strong className="text-secondary font-semibold sm:w-24 shrink-0">Result:</strong> 
                          <p className="text-primary font-medium">{cs.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-primary mb-8 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-tertiary-container"></div>
                  Client Testimonials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.find(s => s.id === activeModal)?.testimonials.map((t, i) => (
                    <div key={i} className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden">
                      <div className="absolute top-4 right-4 text-white/10 font-serif text-8xl leading-none">&quot;</div>
                      <p className="italic font-light mb-8 relative z-10 text-white/90 leading-relaxed">&quot;{t.quote}&quot;</p>
                      <div className="relative z-10">
                        <p className="font-bold text-sm tracking-wide">{t.author}</p>
                        <p className="text-tertiary-fixed text-xs mt-1">{t.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

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
