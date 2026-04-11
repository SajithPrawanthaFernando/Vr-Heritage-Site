"use client";
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
    <footer className="bg-h-slate text-h-ivory pt-20 pb-10 border-t border-h-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-h-gold rounded flex items-center justify-center text-h-slate font-bold shadow-lg shadow-h-gold/20">
                H
              </div>
              <span className="font-heritage text-xl tracking-tight dark:text-white text-black">
                HERITAGE
              </span>
            </div>
            <p className="text-sm text-h-ivory/50 leading-relaxed max-w-xs">
              The world's first AI-powered time travel platform. We turn
              historical sites into living, interactive playgrounds for the
              modern explorer.
            </p>
            <div className="flex gap-4 text-h-gold/60">
              <a
                href="#"
                className="hover:text-h-gold transition-colors"
                title="Explore"
              >
                <Compass size={20} />
              </a>
              <a
                href="#"
                className="hover:text-h-gold transition-colors"
                title="Social"
              >
                <Share2 size={20} />
              </a>
              <a
                href="#"
                className="hover:text-h-gold transition-colors"
                title="Map"
              >
                <Map size={20} />
              </a>
              <a
                href="#"
                className="hover:text-h-gold transition-colors"
                title="Global"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Product Capabilities */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">
              The Technology
            </h4>
            <ul className="space-y-4 text-sm text-h-ivory/50">
              <li className="flex items-center gap-2 hover:text-h-gold transition-colors cursor-pointer">
                <Zap size={14} className="text-h-gold" /> Cinematic VR Rendering
              </li>
              <li className="flex items-center gap-2 hover:text-h-gold transition-colors cursor-pointer">
                <Zap size={14} className="text-h-gold" /> Real-time GPS Sync
              </li>
              <li className="flex items-center gap-2 hover:text-h-gold transition-colors cursor-pointer">
                <Zap size={14} className="text-h-gold" /> Conversational AI
                Guides
              </li>
              <li className="flex items-center gap-2 hover:text-h-gold transition-colors cursor-pointer">
                <Zap size={14} className="text-h-gold" /> Adaptive Storytelling
              </li>
            </ul>
          </div>

          {/* Community & Growth */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">
              Our Ecosystem
            </h4>
            <ul className="space-y-4 text-sm text-h-ivory/50">
              <li className="flex items-center gap-2 hover:text-h-gold transition-colors cursor-pointer">
                <Users size={14} className="text-h-gold" /> Travel Agencies
              </li>
              <li className="flex items-center gap-2 hover:text-h-gold transition-colors cursor-pointer">
                <Users size={14} className="text-h-gold" /> Museum Partners
              </li>
              <li className="flex items-center gap-2 hover:text-h-gold transition-colors cursor-pointer">
                <Users size={14} className="text-h-gold" /> Educational Tours
              </li>
              <li className="flex items-center gap-2 hover:text-h-gold transition-colors cursor-pointer">
                <Users size={14} className="text-h-gold" /> Enterprise Licenses
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">
              The Company
            </h4>
            <ul className="space-y-4 text-sm text-h-ivory/50">
              <li>
                <a href="#" className="hover:text-h-gold transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-h-gold transition-colors">
                  Safety Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-h-gold transition-colors">
                  Contact Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-h-gold font-bold hover:scale-105 transition-transform origin-left"
                >
                  Partner with Us <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Commercial Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-h-ivory/30">
          <div className="flex items-center gap-4">
            <p>© {currentYear} Heritage Time Travel Inc.</p>
            <div className="flex items-center gap-1 text-h-gold/40">
              <ShieldCheck size={12} />
              <span>Identity Verified</span>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-h-ivory transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-h-ivory transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-h-ivory transition-colors">
              Investor Relations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
