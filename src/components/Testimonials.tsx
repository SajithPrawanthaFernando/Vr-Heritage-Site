"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Quote, Star, CheckCircle, Award } from "lucide-react";

const REVIEWS = [
  {
    name: "Elena Rodriguez",
    role: "Cultural Traveler",
    content:
      "I've visited Galle Fort many times, but seeing the 17th-century fortifications rise around me while speaking to a digital merchant was breathtaking. It's not just a tour; it's a memory.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Dr. Aruna Perera",
    role: "Heritage Historian",
    content:
      "The accuracy of the narrative experience is impressive. It handles complex historical events with a sensitivity and depth that standard guides often miss. A massive leap for modern tourism.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "James Chen",
    role: "Tech Enthusiast",
    content:
      "The transition between the modern world and the reconstructed golden era was seamless. No lag, just pure immersion. The location-based triggers were spot on.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonial-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden"
      id="souvenirs"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
          <div className="flex justify-center gap-1 text-[#C5A059]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <h2 className="text-4xl md:text-6xl font-heritage leading-tight">
            Trusted by{" "}
            <span className="italic text-[#C5A059]">Explorers & Experts.</span>
          </h2>
          <p className="text-white/60 font-light leading-relaxed">
            Join thousands of travelers who have already stepped into the past
            through our immersive time-travel platform.
          </p>
        </div>

        {/* Grid of Reviews */}
        <div className="testimonial-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="testimonial-card bg-white/[0.03] p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between hover:border-[#C5A059]/30 transition-all duration-500 group shadow-2xl backdrop-blur-md"
            >
              <div className="relative">
                <Quote
                  className="text-[#C5A059] opacity-20 group-hover:opacity-40 transition-opacity mb-6"
                  size={40}
                />
                <p className="text-white/80 italic font-light leading-relaxed mb-10 text-lg">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C5A059]/20 group-hover:border-[#C5A059]/50 transition-colors"
                />
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-1 uppercase tracking-wider">
                    {review.name}
                    <CheckCircle size={14} className="text-blue-400 ml-1" />
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Trust Bar */}
        <div className="mt-20 pt-16 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-700">
          <div className="flex items-center gap-3">
            <Award size={20} className="text-[#C5A059]" />
            <span className="font-heritage text-lg uppercase tracking-widest">
              Global Travel Council
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Award size={20} className="text-[#C5A059]" />
            <span className="font-heritage text-lg uppercase tracking-widest">
              Hospitality Tech
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Award size={20} className="text-[#C5A059]" />
            <span className="font-heritage text-lg uppercase tracking-widest">
              Sri Lanka Tourism
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
