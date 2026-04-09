"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Quote, Star, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".testimonial-card", { opacity: 0, y: 50 });

      ScrollTrigger.batch(".testimonial-card", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            overwrite: true,
          }),
        start: "top 85%",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#F9F6F0] text-[#2C2C2C] relative overflow-hidden"
      id="souvenirs"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center gap-1 text-[#C5A059] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Trusted by{" "}
            <span className="text-[#C5A059]">Explorers & Experts</span>
          </h2>
          <p className="opacity-70">
            Join thousands of travelers who have already stepped into the past
            through our immersive time-travel platform.
          </p>
        </div>

        {/* Grid of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="testimonial-card bg-white p-8 rounded-[2rem] shadow-xl border border-[#C5A059]/10 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-500"
            >
              <div>
                <Quote className="text-[#C5A059]/20 mb-6" size={40} />
                <p className="text-[#2C2C2C]/80 italic leading-relaxed mb-8">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A059]/20"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#2C2C2C] flex items-center gap-1">
                    {review.name}
                    <CheckCircle size={12} className="text-blue-500 ml-1" />
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Trust Bar - Academic references removed */}
        <div className="mt-20 pt-12 border-t border-[#C5A059]/20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="font-serif text-lg md:text-xl font-bold">
            GLOBAL TRAVEL COUNCIL
          </span>
          <span className="font-serif text-lg md:text-xl font-bold">
            HOSPITALITY TECH
          </span>
          <span className="font-serif text-lg md:text-xl font-bold">
            SRI LANKA TOURISM
          </span>
        </div>
      </div>
    </section>
  );
}
