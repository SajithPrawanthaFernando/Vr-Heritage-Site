"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { View, Zap, Maximize, MousePointerClick } from "lucide-react";
import { kandy3 } from "../Assets";

export default function VRExperience() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Parallax effect for the 3D scene preview
      gsap.to(".floating-asset", {
        y: -30,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 0.8,
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 bg-h-ivory text-h-slate overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-h-gold font-bold uppercase tracking-widest text-sm mb-4">
              <View size={18} />
              The Immersive Realm
            </div>
            <h2 className="text-4xl md:text-6xl font-heritage leading-tight">
              Reconstructing{" "}
              <span className="text-h-gold italic">Lost Worlds.</span>
            </h2>
          </div>
          <p className="max-w-md text-h-slate/60 text-lg border-l-2 border-h-gold/20 pl-6">
            We don't just show ruins; we rebuild them. Step into spatially
            synchronized environments that let you bridge the gap between the
            modern world and a glorious, living past.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Visual Feature */}
          <div className="lg:col-span-2 relative h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl">
            <img
              src={kandy3.src}
              alt="Heritage 3D Reconstruction"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-h-slate/80 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-10 text-h-ivory">
              <h3 className="text-3xl font-heritage mb-2">
                Cinematic Fidelity
              </h3>
              <p className="max-w-xs text-sm opacity-80">
                Experience stunningly detailed environments with professional
                lighting and textures, optimized for mobile VR headsets.
              </p>
            </div>
          </div>

          {/* Sidebar Performance Features */}
          <div className="flex flex-col gap-6">
            <div className="stat-item flex-1 bg-h-slate text-h-ivory p-8 rounded-[2rem] flex flex-col justify-center border border-white/5">
              <Zap className="text-h-gold mb-4" size={32} />
              <h4 className="text-2xl font-heritage mb-2">
                Infinite Performance
              </h4>
              <p className="text-xs text-h-ivory/50">
                Highly optimized rendering ensures fluid movement and perfect
                comfort throughout your exploration.
              </p>
            </div>

            <div className="stat-item flex-1 bg-h-gold p-8 rounded-[2rem] flex flex-col justify-center text-h-slate">
              <Maximize className="text-h-slate mb-4" size={32} />
              <h4 className="text-2xl font-heritage mb-2">Absolute Presence</h4>
              <p className="text-xs text-h-slate/70 font-medium">
                Maintain your physical sense of place while your surroundings
                seamlessly transform across the centuries.
              </p>
            </div>
          </div>
        </div>

        {/* Feature List Footer */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-h-gold/10 pt-12 text-center">
          <div>
            <span className="block text-h-gold font-bold text-2xl font-heritage mb-1">
              3D
            </span>
            <p className="text-[10px] uppercase tracking-widest opacity-40">
              Immersive Depth Rendering
            </p>
          </div>
          <div>
            <span className="block text-h-gold font-bold text-2xl font-heritage mb-1">
              90Hz
            </span>
            <p className="text-[10px] uppercase tracking-widest opacity-40">
              Fluid Motion Experience
            </p>
          </div>
          <div>
            <span className="block text-h-gold font-bold text-2xl font-heritage mb-1">
              GPS
            </span>
            <p className="text-[10px] uppercase tracking-widest opacity-40">
              Real-World Sync
            </p>
          </div>
          <div>
            <span className="block text-h-gold font-bold text-2xl font-heritage mb-1">
              XR
            </span>
            <p className="text-[10px] uppercase tracking-widest opacity-40">
              Interactive Presence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
