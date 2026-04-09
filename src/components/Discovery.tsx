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
          trigger: container.current,
          start: "top 70%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
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
      className="py-24 bg-h-slate text-h-ivory"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 text-h-gold font-bold uppercase tracking-widest text-sm mb-4">
            <Compass size={18} className="animate-pulse" />
            Real-Time Exploration
          </div>
          <h2 className="text-4xl md:text-6xl font-heritage max-w-3xl leading-tight">
            History that finds <span className="italic text-h-gold">you.</span>
          </h2>
        </div>

        {/* Bento Grid Redesign */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {/* Main Visual: GPS-Based Mapping */}
          <div className="bento-item md:col-span-2 relative rounded-3xl overflow-hidden group border border-h-ivory/10">
            <img
              src="https://www.archaeology.lk/wp-content/uploads/2020/11/galle_fort_sri_lanka_aerial_view_buddhika_dilshan.jpg"
              alt="Galle Fort Aerial"
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-h-slate via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 p-2 text-white">
              <div className="flex items-center gap-2 mb-3 bg-h-gold/20 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                <MapPin size={14} className="text-h-gold" />
                <span className="text-[10px] uppercase font-bold tracking-widest">
                  Active Coordinate Detection
                </span>
              </div>
              <h3 className="text-3xl font-heritage mb-2">
                Discover Hidden Legends
              </h3>
              <p className="max-w-md text-h-ivory/70 text-sm">
                Our platform tracks your movement in real-time, matching your
                physical location with thousands of historically significant
                events for a truly spontaneous journey.
              </p>
            </div>
          </div>

          {/* Feature: Intelligent Clusters (The Logic) */}
          <div className="bento-item bg-h-gold/10 rounded-3xl p-8 border border-h-gold/20 flex flex-col justify-between">
            <div className="rounded-2xl bg-h-gold/20 flex items-left justify-start text-h-gold">
              <History size={104} />
            </div>
            <div>
              <h4 className="text-2xl font-heritage mb-3">
                Instant Narratives
              </h4>
              <p className="text-sm text-h-ivory/60 leading-relaxed">
                Step away from generic guidebooks. We curate the stories of your
                immediate surroundings, delivering high-impact historical
                context exactly where it matters.
              </p>
            </div>
          </div>

          {/* Feature: Personalized Session Reporting (The Value) */}
          <div className="bento-item bg-white/5 rounded-3xl p-8 border border-h-ivory/10 flex flex-col justify-between">
            <div className="rounded-2xl bg-h-gold/20 flex items-left justify-start text-h-gold">
              <BookOpenCheck size={104} />
            </div>
            <div>
              <h4 className="text-2xl font-heritage mb-3">
                Digital Chronicles
              </h4>
              <p className="text-sm text-h-ivory/60 leading-relaxed">
                Every landmark you visit and character you meet is automatically
                recorded, creating a personalized digital souvenir of your
                unique adventure.
              </p>
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="bento-item md:col-span-2 bg-gradient-to-r from-h-gold to-[#a8864a] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-h-slate">
              <h4 className="text-xl font-bold mb-1">
                Ready for an Authentic Adventure?
              </h4>
              <p className="text-sm opacity-80 italic">
                Unlock the secrets of the past today.
              </p>
            </div>
            <button className="whitespace-nowrap px-8 py-4 bg-h-slate text-h-ivory rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              Find Nearby Sites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
