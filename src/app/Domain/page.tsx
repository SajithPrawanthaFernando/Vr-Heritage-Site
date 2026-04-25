"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  BookOpen,
  Target,
  Lightbulb,
  Cpu,
  Layers,
  Milestone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DOMAIN_TABS = [
  { id: "lit-survey", label: "Literature Survey", icon: BookOpen },
  { id: "research-gap", label: "Research Gap", icon: Layers },
  { id: "problem", label: "Research Problem", icon: Target },
  { id: "objectives", label: "Objectives", icon: Milestone },
  { id: "methodology", label: "Methodology", icon: Lightbulb },
  { id: "technologies", label: "Technologies Used", icon: Cpu },
];

export default function DomainSection() {
  const container = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(DOMAIN_TABS[0].id);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".domain-header", {
        scrollTrigger: {
          trigger: ".domain-header", // Specific trigger
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="pb-24 pt-40 bg-[#0a0a0a] text-white overflow-hidden relative"
      id="domain"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="domain-header text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#C5A059] font-bold uppercase tracking-[0.2em] text-sm">
            <Layers size={18} />
            <span>Project Domain</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heritage leading-tight text-white">
            The Science Behind{" "}
            <span className="italic text-[#C5A059]">The Magic.</span>
          </h2>
          <p className="text-white/70 font-light leading-relaxed text-lg">
            Discover the academic foundation and robust methodology powering our
            dual-scene VR heritage platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Tab Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {DOMAIN_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-[#C5A059]/10 border-[#C5A059]/30 text-[#C5A059]"
                      : "bg-transparent border-transparent text-white/50 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon
                    size={20}
                    className={isActive ? "text-[#C5A059]" : "opacity-70"}
                  />
                  <span className="font-bold tracking-wide text-sm uppercase">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Content Display */}
          <div className="lg:col-span-8">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 min-h-[450px] relative overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full"
                >
                  <h3 className="text-3xl font-heritage text-[#C5A059] mb-6">
                    {DOMAIN_TABS.find((t) => t.id === activeTab)?.label}
                  </h3>

                  {activeTab === "lit-survey" && (
                    <p className="text-white/80 font-light leading-relaxed">
                      While VR is a powerful tool for cultural engagement, most
                      experiences reconstruct only a single temporal state. Our
                      survey revealed a lack of spatially consistent comparisons
                      across different eras in virtual heritage.
                    </p>
                  )}

                  {activeTab === "research-gap" && (
                    <p className="text-white/80 font-light leading-relaxed">
                      Current solutions lack spatially synchronized environments
                      engineered for standalone hardware. There is a clear
                      absence of multi-resolution scene streaming that maintains
                      immersion without causing cybersickness.
                    </p>
                  )}

                  {activeTab === "problem" && (
                    <p className="text-white/80 font-light leading-relaxed">
                      How can we enable users to experience seamless transitions
                      between modern-day and historical sites while ensuring
                      sub-meter spatial accuracy and high-fidelity rendering on
                      mobile XR chipsets?
                    </p>
                  )}

                  {activeTab === "objectives" && (
                    <ul className="space-y-4 text-white/80 font-light">
                      <li className="flex gap-3">
                        <span className="text-[#C5A059] font-bold">•</span>{" "}
                        Develop a GeoSync engine for spatial anchoring.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#C5A059] font-bold">•</span>{" "}
                        Create emotionally intelligent 3D avatars for narration.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#C5A059] font-bold">•</span>{" "}
                        Implement an AI/NLP-driven historical context engine.
                      </li>
                    </ul>
                  )}

                  {activeTab === "methodology" && (
                    <p className="text-white/80 font-light leading-relaxed">
                      Our approach utilizes a "Dual-Scene" pipeline in Unity
                      URP, leveraging coordinate anchoring for sub-meter
                      accuracy and MotionX for realistic avatar interactions
                      based on SLIIT's research standards.
                    </p>
                  )}

                  {activeTab === "technologies" && (
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Unity 2022 LTS",
                        "Meta Quest 2",
                        "Blender",
                        "C#",
                        "Python",
                        "FastAPI",
                        "ChromaDB",
                        "Mistral-7B",
                        "React",
                        "Tailwind CSS",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-widest text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
