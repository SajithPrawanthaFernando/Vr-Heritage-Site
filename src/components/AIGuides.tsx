"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Mic,
  MessageSquareQuote,
  Heart,
  Languages,
  Sparkles,
} from "lucide-react";

export default function AIGuides() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Fade in elements with an "ethereal" feel
      gsap.from(".guide-animate", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
      });

      // Animate the floating "AI Pulse" behind the character
      gsap.to(".glow-effect", {
        opacity: 0.4,
        scale: 1.3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="glow-effect absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: The AI Avatar Showcase */}
          <div className="w-full lg:w-1/2 relative guide-animate">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] bg-black">
              <img
                src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=800"
                alt="Living Legend AI"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Overlay: Interactive Dialogue UI */}
              <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-[#C5A059]/30 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse shadow-[0_0_10px_#C5A059]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059]">
                    System Active: Voice Recognition
                  </span>
                </div>
                <p className="text-white/90 text-sm italic font-light leading-relaxed">
                  "Greetings, explorer. I have witnessed the rising and falling
                  of empires upon this soil. What secrets of the past do you
                  wish to uncover?"
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="guide-animate">
              <div className="flex items-center gap-3 text-[#C5A059] font-bold uppercase tracking-[0.2em] text-xs mb-6">
                <Mic size={18} />
                Conversational Wisdom
              </div>

              <h2 className="text-4xl md:text-6xl font-heritage text-white mb-8 leading-tight">
                Meet the{" "}
                <span className="text-[#C5A059] italic">
                  Architects of History.
                </span>
              </h2>

              <p className="text-lg text-white/60 font-light leading-relaxed">
                Our AI storytellers are more than just digital guides. Using
                advanced location-aware intelligence, they engage in natural
                conversations, sensing your curiosity to deliver unscripted,
                historically accurate narratives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 guide-animate">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#C5A059]">
                  <MessageSquareQuote size={20} strokeWidth={1.5} />
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs">
                    Dynamic Dialogue
                  </h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  Break free from pre-recorded tours. Ask any question and
                  receive verified, culturally-rich responses in real-time.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#C5A059]">
                  <Heart size={20} strokeWidth={1.5} />
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs">
                    Personal Connection
                  </h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  Our guides adapt their tone and emotions to match the depth of
                  your historical journey.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#C5A059]">
                  <Languages size={20} strokeWidth={1.5} />
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs">
                    Authentic Nuance
                  </h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  Specifically tailored to Sri Lankan heritage to ensure every
                  encounter feels respectful and traditional.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#C5A059]">
                  <Sparkles size={20} strokeWidth={1.5} />
                  <h4 className="font-bold text-white uppercase tracking-widest text-xs">
                    Breathtaking Presence
                  </h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  High-fidelity avatars with lifelike expressions create a sense
                  of presence that bridges the centuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
