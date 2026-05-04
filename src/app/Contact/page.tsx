"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mail, MapPin, Cpu, Send, Globe } from "lucide-react";

const TEAM_CONTACTS = [
  {
    name: "Fernando A.S.P",
    email: "it22152428@my.sliit.lk",
    role: "Lead Developer (VR)",
    image: "./sajith.jpeg",
  },
  {
    name: "Jayarathna G.W.N.R",
    email: "it22311986@my.sliit.lk",
    role: "Lead Developer (Character)",
    image: "./rashmika.jpeg",
  },
  {
    name: "Palihakkara V.E",
    email: "it22002310@my.sliit.lk",
    role: "Lead Developer (Geo Engine)",
    image: "./vinujicropped.jpeg",
  },
  {
    name: "Kahatapitiya K.R.D.M",
    email: "it22080394@my.sliit.lk",
    role: "Lead Developer (AI/NLP)",
    image: "./disara.jpeg",
  },
];

// All team emails as recipients
const TO_EMAILS = TEAM_CONTACTS.map((m) => m.email).join(";");

export default function ContactPage() {
  const container = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".contact-hero", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".contact-info-card",
          {
            x: -30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .from(
          ".contact-form-reveal",
          {
            x: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8",
        );
    },
    { scope: container },
  );

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`[${inquiry}] Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiry}\n\nMessage:\n${message}`,
    );

    // mailto with semicolon-separated recipients (Outlook supports this)
    window.location.href = `mailto:${TO_EMAILS}?subject=${subject}&body=${body}`;
  };

  return (
    <main
      ref={container}
      className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-24 relative overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="contact-hero text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 text-[#C5A059] font-bold uppercase tracking-[0.3em] text-[10px]">
            <Globe size={14} />
            <span>Connect with the Team</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heritage leading-tight">
            Let's Shape the{" "}
            <span className="italic text-[#C5A059]">Future of the Past.</span>
          </h1>
          <p className="text-white/60 font-light leading-relaxed text-lg">
            Reach out to our specialized module leads for technical inquiries or
            collaborative research opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side: Institutional & Team Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="contact-info-card p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-md">
              <h3 className="text-[#C5A059] font-heritage text-2xl mb-8">
                Institutional Identity
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">
                      Location
                    </p>
                    <p className="text-white/80 font-light">
                      Faculty of Computing, SLIIT
                      <br />
                      New Kandy Road, Malabe.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">
                      Project Code
                    </p>
                    <p className="text-white/80 font-light">25-26J-464</p>
                  </div>
                </div>
              </div>

              {/* Member Emails */}
              <div className="mt-12 pt-8 border-t border-white/10 space-y-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-4">
                  Module Lead Contacts
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {TEAM_CONTACTS.map((member, i) => (
                    <div
                      key={i}
                      className="group p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#C5A059]/30 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-[#C5A059]/50 transition-colors shrink-0">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white/90">
                            {member.name}
                          </p>
                          <a
                            href={`mailto:${member.email}`}
                            className="text-[11px] text-white/40 group-hover:text-white transition-colors"
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 contact-form-reveal">
            <div className="p-10 md:p-12 bg-white/[0.02] border border-white/10 rounded-[3rem] shadow-2xl backdrop-blur-xl">
              <form onSubmit={handleSend} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-sm focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-white/10 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-sm focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1">
                    Inquiry Type
                  </label>
                  <select
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                    className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-sm focus:outline-none focus:border-[#C5A059] transition-colors text-white/60 appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Partnership</option>
                    <option>Research Collaboration</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you explore history?"
                    className="w-full px-6 py-4 bg-black/40 border border-white/10 rounded-2xl text-sm focus:outline-none focus:border-[#C5A059] transition-colors resize-none placeholder:text-white/10 text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-[#C5A059] text-black font-bold uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-white hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#C5A059]/10"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}