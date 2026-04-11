"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Sparkles, BrainCircuit, Heart } from "lucide-react";

export default function CustomCharacters() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".char-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: 60,
        opacity: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      id="living-legends"
      ref={container}
      className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden relative"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-h-gold/10 dark:bg-h-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Persuasive Messaging */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-h-gold font-bold uppercase tracking-[0.3em] text-sm">
                <Sparkles size={18} />
                Embodied Storytelling
              </div>
              <h2 className="text-5xl md:text-7xl font-heritage leading-[1.1] text-slate-900 dark:text-white">
                Guides with a <span className="text-h-gold italic">Soul.</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-white leading-relaxed max-w-xl font-light">
                Our AI-driven characters are digitally resurrected figures who
                walk, talk, and interact within their historical environments,
                bridging the gap between eras.
              </p>
            </div>

            <div className="space-y-8 pt-4">
              {/* Feature 1 */}
              <div className="flex gap-6 items-start group">
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-h-gold group-hover:bg-h-gold/20 transition-colors">
                  <BrainCircuit size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">
                    Dynamic Presence
                  </h4>
                  <p className="text-base text-slate-500 dark:text-white/50 leading-relaxed">
                    Witness characters moving naturally through reconstructed
                    landscapes, synchronized with real-world landmarks.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 items-start group">
                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-h-gold group-hover:bg-h-gold/20 transition-colors">
                  <Heart size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">
                    Authentic Interaction
                  </h4>
                  <p className="text-base text-slate-500 dark:text-white/50 leading-relaxed">
                    Guides recognize your proximity and greet you with
                    culturally accurate gestures and unscripted wisdom.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Character Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Monk Card */}
            <div className=" bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-6 hover:border-h-gold/50 transition-all duration-500 group">
              <div className="aspect-[3/4] rounded-[1.8rem] overflow-hidden mb-6 shadow-2xl relative">
                <video
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/Vr-Heritage-Site/monk.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="space-y-3">
                <h4 className="font-heritage text-3xl text-h-gold">The Sage</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 dark:text-white/40">
                  Temple of the Tooth
                </p>
                <p className="text-sm text-slate-500 dark:text-white leading-relaxed font-light">
                  A guardian of tradition who leads you through the sacred
                  rituals and spiritual history of the Kandy Royal complex.
                </p>
              </div>
            </div>

            {/* Galle Character Card */}
            <div className="sm:mt-16 bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-6 hover:border-h-gold/50 transition-all duration-500 group">
              <div className="aspect-[3/4] rounded-[1.8rem] overflow-hidden mb-6 shadow-2xl relative">
                <video
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="/Vr-Heritage-Site/galleman.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="space-y-3">
                <h4 className="font-heritage text-3xl text-h-gold">
                  The Guardian
                </h4>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 dark:text-white/40">
                  Galle Fort
                </p>
                <p className="text-sm text-slate-500 dark:text-white leading-relaxed font-light">
                  Explore the colonial fortifications and maritime history
                  guided by a character who has walked these walls for
                  centuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
