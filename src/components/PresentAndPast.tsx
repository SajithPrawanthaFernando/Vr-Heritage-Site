"use client";
import { useState } from "react";
import { ChevronRight, History, MapPin, ScrollText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galle1, galle2, kandy1, kandy2 } from "../Assets";

const LOCATIONS = [
  {
    id: "temple",
    title: "Temple of the Tooth",
    coords: "7.2936° N, 80.6413° E",
    presentImg: kandy1,
    pastImg: kandy2,
    description:
      "Explore the sacred grounds of Kandy, reconstructed to show the architectural grandeur of the Royal Palace complex.",
    details:
      "Known as Sri Dalada Maligawa, this site was the last capital of the Sri Lankan kings. The digital reconstruction restores the Octagon (Pattirippuwa) and the ancient palace boundary walls to their 18th-century glory.",
  },
  {
    id: "galle",
    title: "Galle Fort",
    coords: "6.0331° N, 80.2149° E",
    presentImg: galle1,
    pastImg: galle2,
    description:
      "Witness the evolution of the Dutch fortifications from modern ruins to a bustling 17th-century colonial hub.",
    details:
      "A UNESCO World Heritage site, the fort's past era reconstruction highlights the original Dutch gate architecture and the massive bastions before modern urban developments altered the skyline.",
  },
];

export default function TemporalGallery() {
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[0]);
  const [showPast, setShowPast] = useState(false);

  return (
    <section
      className="py-24 bg-[#0a0a0a] transition-colors duration-300 overflow-hidden relative"
      id="vr-experience"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 text-[#C5A059] font-bold uppercase tracking-[0.2em] text-xs mb-4">
              <History size={16} />
              Temporal Comparison
            </div>
            <h2 className="text-4xl md:text-5xl font-heritage leading-tight text-white">
              One World.{" "}
              <span className="italic text-[#C5A059]">Two Eras.</span>
            </h2>
          </div>

          {/* Location Switcher */}
          <div className="flex gap-2 p-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  setActiveLoc(loc);
                  setShowPast(false);
                }}
                className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 relative ${
                  activeLoc.id === loc.id
                    ? "text-black"
                    : "text-white/60 hover:text-[#C5A059]"
                }`}
              >
                {activeLoc.id === loc.id && (
                  <motion.div
                    layoutId="activeLocBg"
                    className="absolute inset-0 bg-[#C5A059] rounded-full -z-10 shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                  />
                )}
                {loc.title}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 relative group">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeLoc.id}-${showPast}`}
                  src={
                    showPast ? activeLoc.pastImg.src : activeLoc.presentImg.src
                  }
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Status Indicator */}
              <div className="absolute top-6 left-6 z-10">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      showPast
                        ? "bg-[#C5A059] animate-pulse shadow-[0_0_8px_#C5A059]"
                        : "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                    }`}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                    {showPast
                      ? "Historical Reconstruction"
                      : "Modern Environment"}
                  </span>
                </div>
              </div>

              {/* Toggle Switch */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <div className="relative flex rounded-full border border-white/10 bg-black/80 p-1.5 backdrop-blur-xl shadow-2xl">
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] rounded-full ${
                      showPast
                        ? "left-[calc(50%+0.1875rem)] bg-[#C5A059]"
                        : "left-1.5 bg-white"
                    }`}
                  />
                  <button
                    onClick={() => setShowPast(false)}
                    className={`relative z-10 min-w-[120px] px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                      !showPast
                        ? "text-black"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    Present
                  </button>
                  <button
                    onClick={() => setShowPast(true)}
                    className={`relative z-10 min-w-[120px] px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                      showPast ? "text-black" : "text-white/50 hover:text-white"
                    }`}
                  >
                    Past
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Context Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#C5A059] font-bold tracking-widest text-[10px] uppercase">
                <MapPin size={16} /> {activeLoc.coords}
              </div>
              <h3 className="text-4xl font-heritage text-white">
                {activeLoc.title}
              </h3>
              <p className="text-white/70 leading-relaxed font-light text-lg">
                {activeLoc.description}
              </p>
            </div>

            <motion.div
              key={activeLoc.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 bg-white/[0.03] rounded-[2rem] border border-white/10 space-y-5 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-3">
                <ScrollText className="text-[#C5A059]" size={20} />
                <h4 className="font-bold text-white uppercase tracking-[0.1em] text-xs">
                  Historical Context
                </h4>
              </div>
              <p className="text-sm text-white/60 leading-relaxed font-light italic">
                "{activeLoc.details}"
              </p>
            </motion.div>

            <button className="flex items-center gap-3 px-10 py-5 bg-transparent border border-[#C5A059]/30 rounded-full text-[#C5A059] font-bold uppercase tracking-widest text-[10px] hover:bg-[#C5A059] hover:text-black transition-all duration-500 group shadow-lg shadow-[#C5A059]/5">
              Explore this Site
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
