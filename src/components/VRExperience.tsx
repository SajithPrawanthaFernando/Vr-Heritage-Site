"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { View, Zap, Maximize } from "lucide-react";
import { kandy3 } from "../Assets";

export default function VRExperience() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Subtle float animation for the main visual
      gsap.to(".vr-image-container", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Stagger stats and feature cards
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative"
      id="vr-experience"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[#C5A059] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              <View size={18} />
              The Immersive Realm
            </div>
            <h2 className="text-4xl md:text-6xl font-heritage leading-tight">
              Reconstructing{" "}
              <span className="text-[#C5A059] italic">Lost Worlds.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50 text-lg border-l-2 border-[#C5A059]/20 pl-6 font-light">
            We don't just show ruins; we rebuild them. Step into spatially
            synchronized environments that bridge the gap between the modern
            world and a living past.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Visual Feature */}
          <div className="vr-image-container lg:col-span-2 relative h-[550px] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/10">
            <img
              src={kandy3.src}
              alt="Heritage 3D Reconstruction"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-10 text-white ">
              <h3 className="text-4xl font-heritage mb-2">
                Cinematic Fidelity
              </h3>
              <p className="max-w-xs text-sm text-white/70 font-light">
                Experience stunningly detailed environments with professional
                lighting, optimized for high-performance standalone VR.
              </p>
            </div>
          </div>

          {/* Sidebar Performance Features */}
          <div className="flex flex-col gap-6">
            <div className="stat-item flex-1 bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-center hover:border-[#C5A059]/30 transition-colors">
              <Zap className="text-[#C5A059] mb-4" size={40} strokeWidth={1} />
              <h4 className="text-2xl font-heritage mb-2">
                Infinite Performance
              </h4>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Highly optimized rendering ensures 90Hz fluid movement and
                perfect comfort throughout your exploration.
              </p>
            </div>

            <div className="stat-item flex-1 bg-[#C5A059] p-10 rounded-[2.5rem] flex flex-col justify-center text-black">
              <Maximize className="mb-4" size={40} strokeWidth={1.5} />
              <h4 className="text-2xl font-heritage mb-2">Absolute Presence</h4>
              <p className="text-xs text-black font-medium leading-relaxed">
                Maintain your physical sense of place while your surroundings
                seamlessly transform across the centuries.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specs Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16 text-center">
          {[
            { label: "3D", sub: "Immersive Depth" },
            { label: "90Hz", sub: "Fluid Motion" },
            { label: "GPS", sub: "Real-World Sync" },
            { label: "XR", sub: "Spatially Aware" },
          ].map((spec, i) => (
            <div key={i} className="stat-item">
              <span className="block text-[#C5A059] font-bold text-3xl font-heritage mb-2">
                {spec.label}
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                {spec.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
