"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Main pinning and reveal timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(revealRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
      })
        .to(
          ".bg-image-present",
          {
            scale: 1.1,
            filter: "blur(4px)",
            ease: "none",
          },
          0,
        )
        .to(
          ".hero-content",
          {
            y: -30,
            ease: "power1.out",
          },
          0,
        )
        .to(
          ".scroll-hint",
          {
            opacity: 0,
            y: 20,
            pointerEvents: "none",
          },
          0,
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]"
    >
      <div className="bg-image-present absolute inset-0 bg-[url('https://cdn.britannica.com/19/118219-050-8BA0B67E/Dalada-Maligava-tooth-Buddha-Sri-Lanka-Kandy.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div
        ref={revealRef}
        className="absolute inset-0 z-10 bg-[url('https://www.archaeology.lk/wp-content/uploads/2020/11/galle_fort_sri_lanka_aerial_view_buddhika_dilshan.jpg')] bg-cover bg-center"
        style={{ clipPath: "inset(0% 100% 0% 0%)" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0a0a]" />
      </div>

      {/* CONTENT LAYER */}
      <div className="hero-content relative z-20 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-5xl w-full text-center space-y-8">
          <h1 className="font-heritage text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
            Don't Just Visit.
            <br />
            <span className="italic text-[#C5A059]">Travel Through Time.</span>
          </h1>

          <div className="mx-auto max-w-2xl p-6 rounded-2xl">
            <p className="text-base md:text-lg font-light text-white/90 leading-relaxed">
              Step into the island's legends exactly where they unfolded. Our
              intelligent VR platform transforms your surroundings, bringing
              forgotten eras to life through immersive, location-aware
              exploration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Link
              href="/Domain"
              className="px-10 py-5 bg-[#C5A059] text-black font-bold uppercase tracking-widest text-xs rounded-full transition-all hover:scale-105 hover:bg-white shadow-[0_0_30px_rgba(197,160,89,0.3)]"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/Milestones"
              className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full backdrop-blur-md hover:bg-white/10 transition-all"
            >
              Watch the Experience
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-hint absolute bottom-0 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold">
            Scroll to Unveil the Past
          </span>
          <div className="h-16 w-[1px] bg-gradient-to-b from-[#C5A059] to-transparent" />
        </div>
      </div>

      {/* Location Intelligence UI */}
      <div className="absolute bottom-8 left-10 z-30 hidden lg:block">
        <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-black/20 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse shadow-[0_0_10px_#C5A059]" />
          <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/70">
            GeoSync Active: 6.0331° N, 80.2149° E
          </p>
        </div>
      </div>
    </section>
  );
}
