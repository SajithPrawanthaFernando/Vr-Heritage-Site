"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FileText,
  Presentation,
  TrendingUp,
  Flag,
  Award,
  Calendar,
  Percent,
} from "lucide-react";

const MILESTONES = [
  {
    id: 1,
    title: "Project Proposal",
    date: "March 2025",
    marks: "10%",
    description:
      "Initial documentation and presentation defining the project scope, objectives, research gaps, and methodology.",
    icon: FileText,
  },
  {
    id: 2,
    title: "Progress Presentation-1",
    date: "June 2025",
    marks: "15%",
    description:
      "First major review of the project's progress, focusing on UI/UX design, initial environment modeling, and early AI integration.",
    icon: Presentation,
  },
  {
    id: 3,
    title: "Progress Presentation-2",
    date: "September 2025",
    marks: "15%",
    description:
      "Second review showcasing core functionalities, spatial synchronization, and seamless transitions between modern and historical VR scenes.",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Final Assessment",
    date: "November 2025",
    marks: "40%",
    description:
      "Comprehensive evaluation of the final product, including the completed dual-scene VR pipelines and final thesis document.",
    icon: Flag,
  },
  {
    id: 5,
    title: "Viva",
    date: "December 2025",
    marks: "20%",
    description:
      "Final oral examination and project defense evaluating individual contributions and technical understanding.",
    icon: Award,
  },
];

export default function Milestones() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // 1. Single animation for the line
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 20%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        },
      );

      // 2. Animation for cards
      const nodes = gsap.utils.toArray<HTMLElement>(".timeline-node");
      nodes.forEach((node, index) => {
        const isLeft = index % 2 === 0;
        gsap.from(node, {
          scrollTrigger: {
            trigger: node,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          x: isLeft ? -50 : 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="pb-24 pt-40 bg-[#0a0a0a] relative overflow-hidden"
      id="milestones"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#C5A059] font-bold uppercase tracking-widest text-sm">
            <Flag size={18} />
            <span>Project Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heritage text-white">
            The Journey to{" "}
            <span className="italic text-[#C5A059]">Completion.</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative max-w-5xl mx-auto">
          {/* THE LINE: Removed 'hidden sm:block' and fixed positioning */}
          <div className="timeline-line absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C5A059] to-transparent -translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-24">
            {MILESTONES.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`timeline-node relative flex flex-col md:flex-row items-center justify-between w-full z-10 ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="hidden md:block w-5/12" />

                  {/* Center Icon */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-12 h-12 rounded-full bg-black border-2 border-[#C5A059] flex items-center justify-center z-20 shadow-[0_0_15px_rgba(197,160,89,0.5)]">
                    <Icon size={20} className="text-[#C5A059]" />
                  </div>

                  {/* Card */}
                  <div className="w-full pl-20 md:pl-0 md:w-5/12">
                    <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md hover:border-[#C5A059]/50 transition-all duration-500 shadow-xl">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-white/70 font-light text-sm mb-6">
                        {milestone.description}
                      </p>
                      <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                        <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase">
                          <Calendar size={14} /> {milestone.date}
                        </div>
                        <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase">
                          <Percent size={14} /> {milestone.marks}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
