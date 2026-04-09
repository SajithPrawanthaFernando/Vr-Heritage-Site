"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Menu, X, Globe, User } from "lucide-react";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(headerRef.current, {
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(197, 160, 89, 0.3)",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        scrollTrigger: {
          trigger: "body",
          start: "top -1250",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: headerRef },
  );

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = headerRef.current?.offsetHeight || 80;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const navItems = [
    "Exploration",
    "VR Experience",
    "Living Legends",
    "Souvenirs",
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 lg:px-12 lg:py-6 text-white transition-all duration-300"
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4">
          {/* Branding */}
          <div className="shrink-0">
            <span className="block font-heritage text-lg leading-none tracking-tight text-white sm:text-xl">
              HERITAGE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 2xl:gap-10 whitespace-nowrap">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, "-");

              return (
                <button
                  key={item}
                  onClick={() => handleScroll(id)}
                  className="relative text-xs font-bold uppercase tracking-widest text-white/90 transition-colors hover:text-h-gold"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-h-gold transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
            <button className="hidden md:flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:border-white/40 hover:bg-white/10 lg:px-5 lg:py-2.5">
              <Globe size={14} />
              EN
            </button>

            <button className="rounded-full bg-h-gold p-2.5 text-white shadow-lg shadow-h-gold/20 transition-transform hover:scale-110">
              <User size={18} />
            </button>

            <button
              className="xl:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex xl:hidden flex-col items-center justify-center gap-8 bg-black/95 transition-transform duration-500 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navItems.map((item) => {
          const id = item.toLowerCase().replace(/\s+/g, "-");

          return (
            <button
              key={item}
              onClick={() => {
                handleScroll(id);
                setIsMenuOpen(false);
              }}
              className="text-2xl font-heritage text-white transition-colors hover:text-h-gold"
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}
