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

      gsap.from(".content-reveal", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".char-card", {
        scrollTrigger: {
          trigger: ".char-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
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
      className="py-24 bg-[#0a0a0a] transition-colors duration-300 overflow-hidden relative"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 content-reveal">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#C5A059] font-bold uppercase tracking-[0.3em] text-xs">
                <Sparkles size={18} />
                Embodied Storytelling
              </div>
              <h2 className="text-5xl md:text-7xl font-heritage leading-[1.1] text-white">
                Guides with a{" "}
                <span className="text-[#C5A059] italic">Soul.</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl font-light">
                Our AI-driven characters are digitally resurrected figures who
                walk, talk, and interact within their historical environments.
              </p>
            </div>

            <div className="space-y-8 pt-4">
              <div className="flex gap-6 items-start group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[#C5A059] group-hover:bg-[#C5A059]/20 transition-colors">
                  <BrainCircuit size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">
                    Dynamic Presence
                  </h4>
                  <p className="text-base text-white/50 leading-relaxed font-light">
                    Witness characters moving naturally through reconstructed
                    landscapes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-[#C5A059] group-hover:bg-[#C5A059]/20 transition-colors">
                  <Heart size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">
                    Authentic Interaction
                  </h4>
                  <p className="text-base text-white/50 leading-relaxed font-light">
                    Guides recognize your proximity and greet you with
                    culturally accurate gestures.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className=" bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 hover:border-[#C5A059]/50 transition-all duration-500 group shadow-2xl">
              <div className="aspect-[3/4] rounded-[1.8rem] overflow-hidden mb-6 relative bg-black">
                <video
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/Vr-Heritage-Site/monk.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="space-y-3">
                <h4 className="font-heritage text-3xl text-[#C5A059]">
                  The Sage
                </h4>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
                  Temple of the Tooth
                </p>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  A guardian of tradition who leads you through the sacred
                  rituals.
                </p>
              </div>
            </div>

            <div className="sm:mt-16 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 hover:border-[#C5A059]/50 transition-all duration-500 group shadow-2xl">
              <div className="aspect-[3/4] rounded-[1.8rem] overflow-hidden mb-6 relative bg-black">
                <video
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="space-y-3">
                <h4 className="font-heritage text-3xl text-[#C5A059]">
                  The Guardian
                </h4>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
                  Galle Fort
                </p>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  Explore colonial fortifications guided by a character from the
                  past.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
