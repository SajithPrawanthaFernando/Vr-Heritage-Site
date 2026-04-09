"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(revealRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
      })
        .to(
          ".bg-image",
          {
            scale: 1.05,
            ease: "none",
          },
          0,
        )
        .to(
          ".scroll-hint",
          {
            opacity: 0,
            y: 20,
          },
          0,
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full overflow-hidden bg-h-slate"
    >
      {/* LAYER 1: The Modern World (The Present) */}
      <div className="bg-image absolute inset-0 bg-[url('https://cdn.britannica.com/19/118219-050-8BA0B67E/Dalada-Maligava-tooth-Buddha-Sri-Lanka-Kandy.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* LAYER 2: The Golden Age (The Past - Revealed via Scroll) */}
      <div
        ref={revealRef}
        className="bg-image absolute inset-0 z-10 bg-[url('https://www.archaeology.lk/wp-content/uploads/2020/11/galle_fort_sri_lanka_aerial_view_buddhika_dilshan.jpg')] bg-cover bg-center"
        style={{ clipPath: "inset(0% 100% 0% 0%)" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
      </div>

      {/* CONTENT LAYER: Focused on high-end tourism value */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-5xl w-full text-center space-y-6">
          <h1 className="font-heritage text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] drop-shadow-2xl">
            Don't Just Visit.
            <br />
            <span className="italic text-h-gold">Travel Through Time.</span>
          </h1>

          <div className="mx-auto max-w-2xl p-4 rounded-xl border border-white/10 backdrop-blur-[2px]">
            <p className="text-base md:text-lg font-light text-white leading-relaxed">
              Step into the island's legends exactly where they unfolded. Our
              intelligent VR platform transforms your surroundings, bringing
              forgotten eras to life through immersive, location-aware
              exploration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-h-gold text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] shadow-lg">
              Begin Your Journey
            </button>
            <button className="px-8 py-4 border border-white/60 text-white font-semibold rounded-full backdrop-blur-md hover:bg-white/10 transition-all">
              Watch the Experience
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-hint absolute bottom-8 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">
            Scroll to Unveil the Past
          </span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-h-gold to-transparent" />
        </div>
      </div>

      {/* Subtle UI Accents: Real-time Location Intelligence */}
      <div className="absolute bottom-6 left-8 z-30 hidden lg:block">
        <div className="flex items-center gap-3 text-white/60">
          <div className="w-2 h-2 rounded-full bg-h-gold animate-pulse shadow-[0_0_8px_rgba(197,160,89,1)]" />
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium">
            Active GPS Tracking: 6.0331° N, 80.2149° E
          </p>
        </div>
      </div>
    </section>
  );
}
