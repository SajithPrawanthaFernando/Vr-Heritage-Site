"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FolderOpen,
  FileSignature,
  BookOpen,
  Server,
  GraduationCap,
  Download,
  Lock,
} from "lucide-react";
import Link from "next/link";

const DOCUMENTS = [
  {
    id: "charter",
    title: "Project Charter",
    description:
      "Formal authorization of the project, defining initial scope, stakeholders, and high-level deliverables.",
    status: "Available",
    date: "July 2025",
    icon: FileSignature,
    size: "1.2 MB",
    href: "https://drive.google.com/file/d/1tApnLfpnJiKzL0vQk9PtJwkWyn7TPHqP/view?usp=sharing",
  },
  {
    id: "proposal1",
    title: "Project Proposal - IT22152428",
    description:
      "Proposal focusing on Dual-Scene VR Environment creation, mesh optimization, and Meta Quest 2 deployment.",
    status: "Available",
    date: "Sept 2025",
    icon: BookOpen,
    size: "3.5 MB",
    href: "https://drive.google.com/file/d/1kHTCmkng31__sxJ_wmNHVpBprW9gTod6/view?usp=sharing",
  },
  {
    id: "proposal2",
    title: "Project Proposal - IT22002310",
    description:
      "Proposal detailing Geo-Temporal Personalization, GPS API integration, and RAG-based reporting engines.",
    status: "Available",
    date: "Sept 2025",
    icon: BookOpen,
    size: "3.5 MB",
    href: "https://drive.google.com/file/d/1tvM9vivkax7hbvNxvjzr5A8lcCrKO2xV/view?usp=sharing",
  },
  {
    id: "proposal3",
    title: "Project Proposal - IT22080394",
    description:
      "Proposal covering AI-Powered Conversational Systems using TinyLlama, Mistral-7B, and ChromaDB vector stores.",
    status: "Available",
    date: "Sept 2025",
    icon: BookOpen,
    size: "3.5 MB",
    href: "https://drive.google.com/file/d/1ZHkUSaVQYYsCvbbfx3FilSxLs1Jx5ZK_/view?usp=sharing",
  },
  {
    id: "proposal4",
    title: "Project Proposal - IT22311986",
    description:
      "Proposal on Emotionally Intelligent Characters, MotionX animation pipelines, and Fish Speech TTS integration.",
    status: "Available",
    date: "Sept 2025",
    icon: BookOpen,
    size: "3.5 MB",
    href: "https://drive.google.com/file/d/1yk6Ywi3fSTq5UPwHnUVlFG6nLF5103L2/view?usp=sharing",
  },
  {
    id: "deployment",
    title: "Deployment Report",
    description:
      "Technical document outlining hardware requirements, Unity module deployment, and Meta Quest 2 testing.",
    status: "Available",
    date: "March 2026",
    icon: Server,
    size: "2.8 MB",
    href: "https://drive.google.com/file/d/1ilNgjmYEMqTD4RAnyuiFxP3OElVg7Qn3/view?usp=sharing",
  },
  {
    id: "finalreport1",
    title: "Final Report - IT22152428",
    description:
      "Final thesis on Unity URP pipelines, spatial synchronization, and sub-meter coordinate anchoring accuracy.",
    status: "Available",
    date: "April 2026",
    icon: GraduationCap,
    size: "7.1 MB",
    href: "https://drive.google.com/file/d/1atxbuzlS0IZhs3yXo5VJTUv2h_hK_UL3/view?usp=sharing",
  },
  {
    id: "finalreport2",
    title: "Final Report - IT22002310",
    description:
      "Dissertation on Geo-Temporal Personalization algorithms and automated session chronicle generation.",
    status: "Available",
    date: "April 2026",
    icon: GraduationCap,
    size: "3.1 MB",
    href: "https://drive.google.com/file/d/1gc0Z8GQDX4XMwKRq0Hr1a7Lfk2smhDdJ/view?usp=sharing",
  },
  {
    id: "finalreport3",
    title: "Final Report - IT22080394",
    description:
      "Final evaluation of AI-driven historical context engines and RAG pipeline performance metrics.",
    status: "Available",
    date: "April 2026",
    icon: GraduationCap,
    size: "3.5 MB",
    href: "https://drive.google.com/file/d/1ZSPzYia-uyuoMTMcFz2TQwaMqG5SZJi_/view?usp=sharing",
  },
  {
    id: "finalreport4",
    title: "Final Report - IT22311986",
    description:
      "Thesis on lifelike character animation and emotion-aware speech synthesis in VR heritage sites.",
    status: "Available",
    date: "April 2026",
    icon: GraduationCap,
    size: "3.5 MB",
    href: "https://drive.google.com/file/d/1-MdluA24fI0N_XWJ3yK_0by4iWFDUHMf/view?usp=sharing",
  },
  {
    id: "finalthesis",
    title: "Final Thesis (Group)",
    description:
      "The comprehensive group dissertation synthesizing all research findings and final project architecture.",
    status: "Available",
    date: "April 2026",
    icon: GraduationCap,
    size: "8.1 MB",
    href: "https://drive.google.com/file/d/1tApnLfpnJiKzL0vQk9PtJwkWyn7TPHqP/view?usp=sharing",
  },
];

export default function Documents() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".docs-header", {
        scrollTrigger: {
          trigger: ".docs-header",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".doc-card", {
        scrollTrigger: {
          trigger: ".docs-grid",
          start: "top 85%",
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
      ref={container}
      className="pb-24 pt-40 bg-[#0a0a0a] text-white relative overflow-hidden"
      id="documents"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="docs-header text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#C5A059] font-bold uppercase tracking-[0.2em] text-sm">
            <FolderOpen size={18} />
            <span>Project Repository</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heritage leading-tight text-white">
            Academic{" "}
            <span className="italic text-[#C5A059]">Deliverables.</span>
          </h2>
          <p className="text-white/70 font-light leading-relaxed text-lg">
            Access our comprehensive research documentation, from individual
            member proposals to final thesis reports.
          </p>
        </div>

        <div className="docs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENTS.map((doc) => {
            const Icon = doc.icon;
            const isAvailable = doc.status === "Available";

            return (
              <div
                key={doc.id}
                className=" group flex flex-col justify-between p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:border-[#C5A059]/40 transition-all duration-500 shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`p-4 rounded-2xl ${
                        isAvailable
                          ? "bg-[#C5A059]/10 text-[#C5A059]"
                          : "bg-white/5 text-white/40"
                      } transition-colors`}
                    >
                      <Icon size={24} />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                        isAvailable
                          ? "border-green-500/30 text-green-400 bg-green-500/10"
                          : "border-white/10 text-white/40 bg-white/5"
                      }`}
                    >
                      {doc.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#C5A059] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                    {doc.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 uppercase tracking-wider">
                      {doc.date}
                    </span>
                    <span className="text-xs text-white/40">{doc.size}</span>
                  </div>

                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={isAvailable ? doc.href : "#"}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                      isAvailable
                        ? "bg-[#C5A059] text-black hover:bg-white hover:scale-105"
                        : "bg-white/5 text-white/30 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    {isAvailable ? (
                      <>
                        <Download size={14} />
                        Download
                      </>
                    ) : (
                      <>
                        <Lock size={14} />
                        Locked
                      </>
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
