"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FileText, Share2, Download, Award } from "lucide-react";

export default function SessionReporting() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".report-preview", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".content-reveal", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        x: -30,
        opacity: 0,
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
      className="py-24 bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Persuasive Messaging */}
          <div className="space-y-8 content-reveal">
            <div className="flex items-center gap-3 text-[#C5A059] font-bold uppercase tracking-[0.2em] text-xs">
              <FileText size={18} />
              Personalized Chronicles
            </div>

            <h2 className="text-4xl md:text-6xl font-heritage leading-tight text-white">
              A Journey Worth{" "}
              <span className="text-[#C5A059] italic">Remembering.</span>
            </h2>

            <p className="text-lg text-white/50 leading-relaxed font-light">
              Every step you take through history is preserved. Our platform
              automatically transforms your physical exploration into a
              personalized digital timeline, ensuring your discoveries remain
              vivid long after you leave.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex gap-4 group">
                <div className="text-[#C5A059] mt-1 group-hover:scale-110 transition-transform">
                  <Award size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-white text-sm uppercase tracking-wider">
                    Experience Verified
                  </h4>
                  <p className="text-xs text-white/40 leading-relaxed">
                    Get an authenticated record of the historical insights
                    uncovered during your unique journey.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="text-[#C5A059] mt-1 group-hover:scale-110 transition-transform">
                  <Share2 size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-white text-sm uppercase tracking-wider">
                    Instant Sharing
                  </h4>
                  <p className="text-xs text-white/40 leading-relaxed">
                    Export your time-travel highlights directly to social
                    platforms to show the world your discoveries.
                  </p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-3 px-10 py-5 border border-[#C5A059]/30 text-[#C5A059] font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-[#C5A059] hover:text-black transition-all group shadow-lg shadow-[#C5A059]/5">
              View Sample Report{" "}
              <Download
                size={16}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
          </div>

          {/* Right: The "Digital Report" UI Mockup */}
          <div className="report-preview relative flex justify-center lg:justify-end">
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-10 text-white border border-white/10 shadow-2xl transform lg:rotate-2 transition-all hover:rotate-0 hover:scale-[1.02] duration-700 max-w-md">
              <div className="flex justify-between items-start mb-10 border-b pb-6 border-white/10">
                <div>
                  <h3 className="font-heritage text-3xl text-white">
                    Session Summary
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mt-2">
                    Explorer ID: #26-SRI-LANKA
                  </p>
                </div>
                <div className="bg-[#C5A059]/10 px-4 py-1.5 rounded-full text-[9px] font-bold text-[#C5A059] border border-[#C5A059]/20">
                  AUTHENTICATED
                </div>
              </div>

              <div className="space-y-8">
                <div className="relative pl-8 border-l border-[#C5A059]/30">
                  <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-[#C5A059] shadow-[0_0_10px_#C5A059]" />
                  <p className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                    10:15 AM • Galle Fort
                  </p>
                  <p className="text-sm font-light text-white/80 mt-2 leading-relaxed italic">
                    "Entered the Main Bastion. Visualized the transformation of
                    maritime defenses through three centuries."
                  </p>
                </div>

                <div className="relative pl-8 border-l border-[#C5A059]/30">
                  <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-[#C5A059] shadow-[0_0_10px_#C5A059]" />
                  <p className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                    10:45 AM • Interaction
                  </p>
                  <p className="text-sm font-light text-white/80 mt-2 leading-relaxed italic">
                    "Engaged with the 17th Century Merchant. Discussed the spice
                    trade dynamics and cultural evolution."
                  </p>
                </div>

                <div className="mt-10 p-5 bg-[#C5A059]/5 rounded-[1.5rem] border border-[#C5A059]/10">
                  <p className="text-xs italic text-white/50 leading-relaxed font-light">
                    "Your journey focused on colonial trade routes. We've
                    attached supplementary archival imagery of the harbor
                    activity from 1650 for your collection."
                  </p>
                </div>
              </div>
            </div>

            {/* Abstract "Timeline" decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[1px] bg-[#C5A059]/10 rotate-[15deg] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
