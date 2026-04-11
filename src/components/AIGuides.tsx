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

      // Fade in elements with a "ethereal" feel
      gsap.from(".guide-content", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
      });

      // Animate the floating "AI Pulse" behind the character
      gsap.to(".glow-effect", {
        opacity: 0.6,
        scale: 1.2,
        duration: 3,
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
      className="py-24 bg-h-ivory relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: The AI Avatar Showcase */}
          <div className="w-full lg:w-1/2 relative">
            <div className="glow-effect absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-h-gold/20 rounded-full blur-[100px] opacity-30" />

            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-b-8 border-h-gold aspect-[4/5] bg-h-slate">
              <img
                src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=800"
                alt="Living Legend AI"
                className="w-full h-full object-cover opacity-80"
              />
              {/* Overlay: Interactive Dialogue UI */}
              <div className="absolute bottom-8 left-8 right-8 text-white bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-h-gold">
                    Listening...
                  </span>
                </div>
                <p className="text-h-ivory text-sm italic font-light leading-relaxed">
                  "Greetings, explorer. I have witnessed the rising and falling
                  of empires upon this soil. What secrets of the past do you
                  wish to uncover?"
                </p>
              </div>
            </div>
          </div>

          {/* Right: Persuasive Content */}
          <div className="w-full lg:w-1/2 guide-content">
            <div className="flex items-center gap-3 text-h-gold font-bold uppercase tracking-widest text-sm mb-6">
              <Mic size={18} />
              Conversational Wisdom
            </div>

            <h2 className="text-4xl md:text-6xl font-heritage text-h-slate mb-8 leading-tight">
              Meet the{" "}
              <span className="text-h-gold italic">Architects of History.</span>
            </h2>

            <p className="text-lg text-h-slate/70 mb-10 leading-relaxed">
              Our AI storytellers are more than just digital guides. Using
              advanced location-aware intelligence, they engage in natural
              conversations, sensing your curiosity to deliver unscripted,
              historically accurate narratives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-h-gold">
                  <MessageSquareQuote size={20} />
                  <h4 className="font-bold text-h-slate">Dynamic Dialogue</h4>
                </div>
                <p className="text-xs text-h-slate/60 leading-relaxed">
                  Break free from pre-recorded tours. Ask any question and
                  receive verified, culturally-rich responses in real-time.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-h-gold">
                  <Heart size={20} />
                  <h4 className="font-bold text-h-slate">
                    Personal Connection
                  </h4>
                </div>
                <p className="text-xs text-h-slate/60 leading-relaxed">
                  Every interaction is personal. Our guides adapt their tone and
                  emotions to match the depth of your historical journey.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-h-gold">
                  <Languages size={20} />
                  <h4 className="font-bold text-h-slate">Authentic Nuance</h4>
                </div>
                <p className="text-xs text-h-slate/60 leading-relaxed">
                  Specifically tailored to Sri Lankan heritage to ensure every
                  encounter feels respectful, traditional, and true to the era.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-h-gold">
                  <Sparkles size={20} className="w-5 h-5" />
                  <h4 className="font-bold text-h-slate">
                    Breathtaking Presence
                  </h4>
                </div>
                <p className="text-xs text-h-slate/60 leading-relaxed">
                  High-fidelity avatars with lifelike expressions and gestures
                  create a sense of presence that bridges the centuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
