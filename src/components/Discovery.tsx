"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Compass, MapPin, History, BookOpenCheck } from "lucide-react";

export default function Discovery() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      id="exploration"
      ref={container}
      className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-[#C5A059] font-bold uppercase tracking-widest text-sm mb-4">
            <Compass size={18} className="animate-pulse" />
            Real-Time Exploration
          </div>
          <h2 className="text-4xl md:text-6xl font-heritage max-w-3xl leading-tight">
            History that finds{" "}
            <span className="italic text-[#C5A059]">you.</span>
          </h2>
        </div>

        {/* Bento Grid Redesign */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[650px]">
          {/* Main Visual: GPS-Based Mapping */}
          <div className="bento-item md:col-span-2 relative rounded-[2.5rem] overflow-hidden group border border-white/10 bg-black">
            <img
              src="https://www.archaeology.lk/wp-content/uploads/2020/11/galle_fort_sri_lanka_aerial_view_buddhika_dilshan.jpg"
              alt="Galle Fort Aerial"
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 p-2">
              <div className="flex items-center gap-2 mb-4 bg-[#C5A059]/20 backdrop-blur-md px-4 py-1.5 rounded-full w-fit border border-[#C5A059]/30">
                <MapPin size={14} className="text-[#C5A059]" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059]">
                  Active Coordinate Detection
                </span>
              </div>
              <h3 className="text-4xl font-heritage mb-3 text-white">
                Discover Hidden Legends
              </h3>
              <p className="max-w-md text-white/70 text-sm font-light leading-relaxed">
                Our platform tracks your movement in real-time, matching your
                physical location with thousands of historically significant
                events for a truly spontaneous journey.
              </p>
            </div>
          </div>

          {/* Feature: Instant Narratives */}
          <div className="bento-item bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 flex flex-col justify-between group hover:border-[#C5A059]/30 transition-colors">
            <div className="rounded-2xl text-[#C5A059] opacity-40 group-hover:opacity-100 transition-opacity">
              <History size={80} strokeWidth={1} />
            </div>
            <div>
              <h4 className="text-2xl font-heritage mb-3 text-white">
                Instant Narratives
              </h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Step away from generic guidebooks. We curate the stories of your
                immediate surroundings, delivering high-impact historical
                context exactly where it matters.
              </p>
            </div>
          </div>

          {/* Feature: Digital Chronicles */}
          <div className="bento-item bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 flex flex-col justify-between group hover:border-[#C5A059]/30 transition-colors">
            <div className="rounded-2xl text-[#C5A059] opacity-40 group-hover:opacity-100 transition-opacity">
              <BookOpenCheck size={80} strokeWidth={1} />
            </div>
            <div>
              <h4 className="text-2xl font-heritage mb-3 text-white">
                Digital Chronicles
              </h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">
                Every landmark you visit and character you meet is automatically
                recorded, creating a personalized digital souvenir of your
                unique adventure.
              </p>
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="bento-item md:col-span-2 bg-gradient-to-r from-[#C5A059] to-[#8d713d] rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-black">
              <h4 className="text-2xl font-heritage mb-1">
                Ready for an Authentic Adventure?
              </h4>
              <p className="text-sm font-medium opacity-70">
                Unlock the secrets of the past today.
              </p>
            </div>
            <button className="whitespace-nowrap px-10 py-5 bg-[#0a0a0a] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl">
              Find Nearby Sites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
