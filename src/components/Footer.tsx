"use client";
import Link from "next/link";
import {
  Globe,
  Map,
  Share2,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Users,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 border-t border-[#C5A059]/20 relative overflow-hidden">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-[#C5A059]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#C5A059] rounded flex items-center justify-center text-black font-bold shadow-lg shadow-[#C5A059]/20">
                H
              </div>
              <span className="font-heritage text-xl tracking-tight text-white uppercase">
                HERITAGE
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              The world's first AI-powered time travel platform. We turn
              historical sites into living, interactive playgrounds for the
              modern explorer.
            </p>
            <div className="flex gap-4 text-[#C5A059]/60">
              <a
                href="#"
                className="hover:text-[#C5A059] transition-colors"
                title="Explore"
              >
                <Compass size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[#C5A059] transition-colors"
                title="Social"
              >
                <Share2 size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[#C5A059] transition-colors"
                title="Map"
              >
                <Map size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[#C5A059] transition-colors"
                title="Global"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Product Capabilities */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-[10px] mb-6">
              The Technology
            </h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer group">
                <Zap
                  size={14}
                  className="text-[#C5A059] group-hover:scale-110 transition-transform"
                />
                Cinematic VR Rendering
              </li>
              <li className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer group">
                <Zap
                  size={14}
                  className="text-[#C5A059] group-hover:scale-110 transition-transform"
                />
                Real-time GPS Sync
              </li>
              <li className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer group">
                <Zap
                  size={14}
                  className="text-[#C5A059] group-hover:scale-110 transition-transform"
                />
                Conversational AI
              </li>
              <li className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer group">
                <Zap
                  size={14}
                  className="text-[#C5A059] group-hover:scale-110 transition-transform"
                />
                Adaptive Storytelling
              </li>
            </ul>
          </div>

          {/* Community & Growth */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-[10px] mb-6">
              Our Ecosystem
            </h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer group">
                <Users
                  size={14}
                  className="text-[#C5A059] group-hover:scale-110 transition-transform"
                />
                Travel Agencies
              </li>
              <li className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer group">
                <Users
                  size={14}
                  className="text-[#C5A059] group-hover:scale-110 transition-transform"
                />
                Museum Partners
              </li>
              <li className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer group">
                <Users
                  size={14}
                  className="text-[#C5A059] group-hover:scale-110 transition-transform"
                />
                Educational Tours
              </li>
              <li className="flex items-center gap-2 hover:text-[#C5A059] transition-colors cursor-pointer group">
                <Users
                  size={14}
                  className="text-[#C5A059] group-hover:scale-110 transition-transform"
                />
                Enterprise Licenses
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-[10px] mb-6">
              The Company
            </h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link
                  href="/vision"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Safety Standards
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Contact Press
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="flex items-center gap-1 text-[#C5A059] font-bold hover:gap-2 transition-all origin-left"
                >
                  Partner with Us <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Commercial Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30">
          <div className="flex items-center gap-6">
            <p>© {currentYear} Heritage VR Project.</p>
            <div className="flex items-center gap-1 text-[#C5A059]/40">
              <ShieldCheck size={12} />
              <span>Identity Verified</span>
            </div>
          </div>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link
              href="/investors"
              className="hover:text-white transition-colors"
            >
              Relations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
