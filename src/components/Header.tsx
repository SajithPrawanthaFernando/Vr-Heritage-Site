"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Menu, X, Globe, User } from "lucide-react";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      // Clean up previous triggers on route change
      ScrollTrigger.getAll().forEach((t) => t.kill());

      gsap.to(headerRef.current, {
        backgroundColor: "rgba(10, 10, 10, 0.9)", // Matches #0a0a0a
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(197, 160, 89, 0.2)", // Subtle gold border
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        scrollTrigger: {
          trigger: "body",
          // Deep scroll for Home, immediate for subpages
          start: pathname === "/" ? "top -1250" : "top -50",
          toggleActions: "play none none reverse",
        },
      });
    },
    {
      scope: headerRef,
      dependencies: [pathname],
    },
  );

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Domain", href: "/Domain" },
    { label: "Milestones", href: "/Milestones" },
    { label: "Documents", href: "/Documents" },
    { label: "Presentations", href: "/Presentations" },
    { label: "About Us", href: "/AboutUs" },
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
            <Link
              href="/"
              className="block font-heritage text-lg leading-none tracking-tight text-white sm:text-xl hover:text-[#C5A059] transition-colors"
            >
              HERITAGE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 2xl:gap-10 whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? "text-[#C5A059]"
                      : "text-white/80 hover:text-[#C5A059]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
            <button className="hidden md:flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:border-[#C5A059]/40 hover:bg-white/5 lg:px-5 lg:py-2.5">
              <Globe size={14} />
              EN
            </button>

            <Link
              href="/profile"
              className="rounded-full bg-[#C5A059] p-2.5 text-black shadow-lg shadow-[#C5A059]/20 transition-transform hover:scale-110 active:scale-95"
            >
              <User size={18} />
            </Link>

            <button
              className="xl:hidden p-2 text-white hover:text-[#C5A059] transition-colors"
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
        className={`fixed inset-0 z-40 flex xl:hidden flex-col items-center justify-center gap-8 bg-[#0a0a0a]/98 backdrop-blur-lg transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-heritage tracking-widest transition-colors ${
              pathname === item.href
                ? "text-[#C5A059]"
                : "text-white hover:text-[#C5A059]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
