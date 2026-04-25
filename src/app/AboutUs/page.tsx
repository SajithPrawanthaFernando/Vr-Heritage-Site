"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Users, Mail, GraduationCap, Cpu, Send } from "lucide-react";

const TEAM = [
  {
    id: "it22152428",
    name: "Fernando A.S.P",
    regNo: "IT22152428",
    role: "Lead Developer (VR)",
    module: "Dual-Scene VR Environment Creation",
    email: "it22152428@my.sliit.lk",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    tags: ["Unity URP", "C#", "Meta Quest 2"],
  },
  {
    id: "it22311986",
    name: "Jayarathna G.W.N.R",
    regNo: "IT22311986",
    role: "Lead Developer (Character)",
    module: "Emotionally Intelligent Character & Speech",
    email: "it22311986@my.sliit.lk",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    tags: ["Blender", "MotionX", "Fish Speech TTS"],
  },
  {
    id: "it22002310",
    name: "Palihakkara V.E",
    regNo: "IT22002310",
    role: "Lead Developer (Geo Engine)",
    module: "Geo-Temporal Personalization & RAG Reporting",
    email: "it22002310@my.sliit.lk",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Scikit-learn", "GPS APIs"],
  },
  {
    id: "it22080394",
    name: "Kahatapitiya K.R.D.M",
    regNo: "IT22080394",
    role: "Lead Developer (AI/NLP)",
    module: "AI-Powered Conversational System",
    email: "it22080394@my.sliit.lk",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    tags: ["TinyLlama", "Mistral-7B", "ChromaDB"],
  },
];

export default function Team() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Header Animation
      gsap.from(".team-header", {
        scrollTrigger: {
          trigger: ".team-header",
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Team Cards Stagger Animation
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
      });

      // Contact Form Animation
      gsap.from(".contact-section", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="pb-24 pt-40 bg-[#0a0a0a] text-white relative overflow-hidden"
      id="about"
    >
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="team-header text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#C5A059] font-bold uppercase tracking-[0.2em] text-sm">
            <Users size={18} />
            <span>Research Team</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heritage leading-tight">
            The Architects of{" "}
            <span className="italic text-[#C5A059]">the Past.</span>
          </h2>
          <p className="text-white/70 font-light leading-relaxed text-lg">
            Under the supervision of Dr. Dinuka Wijendra and Ms. Thilini
            Jayalath at SLIIT, our team combines expertise in XR, Artificial
            Intelligence, and Software Engineering.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className=" group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#C5A059]/50 transition-all duration-500 shadow-xl"
            >
              {/* Photo Area */}
              <div className="relative aspect-square overflow-hidden bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />

                {/* ID Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-2">
                  <GraduationCap size={12} className="text-[#C5A059]" />
                  <span className="text-[10px] font-bold tracking-widest text-white">
                    {member.regNo}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative -mt-10">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-[#C5A059] transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#C5A059] mb-3">
                  {member.role}
                </p>
                <p className="text-[11px] text-white/60 leading-relaxed mb-6 h-10 line-clamp-2">
                  {member.module}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] uppercase tracking-wider text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Social/Contact */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-white/5 hover:bg-[#C5A059] hover:text-black rounded-full transition-colors"
                    title={member.email}
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div
          className="contact-section max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden"
          id="contact"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[80px]" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-heritage text-white">
                Get in <span className="text-[#C5A059]">Touch</span>
              </h3>
              <p className="text-white/60 font-light leading-relaxed text-sm">
                Interested in our AI-Powered VR Platform or heritage tourism
                partnerships? Reach out to us.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                    <Mail size={16} />
                  </div>
                  <span>research@sliit.lk</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                    <Cpu size={16} />
                  </div>
                  <span>Project ID: 25-26J-464</span>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              <textarea
                placeholder="Your Message..."
                rows={4}
                className="w-full px-5 py-3 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
              ></textarea>
              <button
                type="button"
                className="w-full py-4 bg-[#C5A059] text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
