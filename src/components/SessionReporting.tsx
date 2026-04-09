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

      // Slide in the "Report Preview" from the bottom
      gsap.from(".report-preview", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="py-24 bg-h-slate text-h-ivory relative overflow-hidden"
    >
      {/* Decorative radial gradient for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.05)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Persuasive Messaging */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-h-gold font-bold uppercase tracking-widest text-sm">
              <FileText size={18} />
              Personalized Chronicles
            </div>

            <h2 className="text-4xl md:text-6xl font-heritage leading-tight text-white">
              A Journey Worth{" "}
              <span className="text-h-gold italic">Remembering.</span>
            </h2>

            <p className="text-lg text-h-ivory/60 leading-relaxed">
              Every step you take through history is preserved. Our platform
              automatically transforms your physical exploration into a
              personalized digital timeline, ensuring your discoveries remain
              vivid long after you leave.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="text-h-gold mt-1">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-white">
                    Experience Verified
                  </h4>
                  <p className="text-xs opacity-50">
                    Get an authenticated record of the historical insights
                    uncovered during your unique journey.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-h-gold mt-1">
                  <Share2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-white">Instant Sharing</h4>
                  <p className="text-xs opacity-50">
                    Export your time-travel highlights directly to social
                    platforms to show the world your discoveries.
                  </p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-3 px-8 py-4 border border-h-gold text-h-gold font-bold rounded-full hover:bg-h-gold hover:text-h-slate transition-all group shadow-lg">
              View Sample Report{" "}
              <Download
                size={18}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
          </div>

          {/* Right: The "Digital Report" UI Mockup */}
          <div className="report-preview relative">
            <div className="bg-h-ivory rounded-3xl p-8 text-h-slate shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="flex justify-between items-start mb-8 border-b pb-4 border-h-slate/10">
                <div>
                  <h3 className="font-heritage text-2xl">Session Summary</h3>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">
                    Explorer ID: #26-SRI-LANKA
                  </p>
                </div>
                <div className="bg-h-gold/10 px-3 py-1 rounded text-[10px] font-bold text-h-gold">
                  AUTHENTICATED
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-h-gold/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-h-gold border-4 border-h-ivory" />
                  <p className="text-xs font-bold text-h-gold uppercase tracking-tighter">
                    10:15 AM • Galle Fort
                  </p>
                  <p className="text-sm font-medium mt-1">
                    Entered the Main Bastion. Visualized the transformation of
                    maritime defenses through three centuries.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-h-gold/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-h-gold border-4 border-h-ivory" />
                  <p className="text-xs font-bold text-h-gold uppercase tracking-tighter">
                    10:45 AM • Interaction
                  </p>
                  <p className="text-sm font-medium mt-1">
                    Engaged with the 17th Century Merchant. Discussed the spice
                    trade dynamics and the fort's cultural evolution.
                  </p>
                </div>

                <div className="mt-8 p-4 bg-h-gold/5 rounded-xl border border-h-gold/10">
                  <p className="text-xs italic text-h-slate/60 leading-relaxed">
                    "Your journey focused on colonial trade routes. We've
                    attached supplementary archival imagery of the harbor
                    activity from 1650 for your collection."
                  </p>
                </div>
              </div>
            </div>

            {/* Abstract "Timeline" decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-h-gold/20 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
}
