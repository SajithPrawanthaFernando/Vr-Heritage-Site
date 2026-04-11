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
      "A UNESCO World Heritage site, the fort's past era reconstruction highlights the original Dutch gate architecture and the massive bastions before the modern urban developments altered the skyline.",
  },
];

export default function TemporalGallery() {
  const [activeLoc, setActiveLoc] = useState(LOCATIONS[0]);
  const [showPast, setShowPast] = useState(false);

  return (
    <section
      className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden"
      id="vr-experience"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-h-gold font-bold uppercase tracking-widest text-sm mb-4">
              <History size={16} />
              Temporal Comparison
            </div>
            <h2 className="text-4xl md:text-5xl font-heritage leading-tight text-slate-900 dark:text-white">
              One World. <span className="italic text-h-gold">Two Eras.</span>
            </h2>
          </div>

          {/* Location Switcher */}
          <div className="flex gap-4 p-2 bg-black dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-sm">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  setActiveLoc(loc);
                  setShowPast(false);
                }}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 relative ${
                  activeLoc.id === loc.id
                    ? "text-white dark:text-h-slate"
                    : "text-slate-500 dark:text-white/60 hover:text-h-gold"
                }`}
              >
                {activeLoc.id === loc.id && (
                  <motion.div
                    layoutId="activeLocBg"
                    className="absolute inset-0 bg-h-gold rounded-full -z-10 shadow-lg"
                  />
                )}
                {loc.title}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 relative group">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeLoc.id}-${showPast}`}
                  src={
                    showPast ? activeLoc.pastImg.src : activeLoc.presentImg.src
                  }
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Status Indicator */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      showPast ? "bg-h-gold animate-pulse" : "bg-blue-400"
                    }`}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    {showPast
                      ? "Historical Reconstruction"
                      : "Modern Environment"}
                  </span>
                </div>
              </div>

              {/* Toggle Switch */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="relative flex rounded-full border border-white/20 bg-black/80 p-1.5 backdrop-blur-xl shadow-2xl">
                  <motion.div
                    layout
                    animate={{ x: showPast ? "100%" : "0%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] rounded-full bg-white"
                  />
                  <button
                    onClick={() => setShowPast(false)}
                    className={`relative z-10 min-w-[100px] sm:min-w-[140px] px-6 sm:px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
                      !showPast
                        ? "text-black"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Present
                  </button>
                  <button
                    onClick={() => setShowPast(true)}
                    className={`relative z-10 min-w-[100px] sm:min-w-[140px] px-6 sm:px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${
                      showPast ? "text-black" : "text-white/60 hover:text-white"
                    }`}
                  >
                    Past
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Context Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-h-gold font-medium text-sm">
                <MapPin size={16} /> {activeLoc.coords}
              </div>
              <h3 className="text-4xl font-heritage text-slate-900 dark:text-white">
                {activeLoc.title}
              </h3>
              <p className="text-slate-600 dark:text-white leading-relaxed font-light">
                {activeLoc.description}
              </p>
            </div>

            <motion.div
              key={activeLoc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-slate-50 dark:bg-white/[0.03] rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <ScrollText className="text-h-gold" size={20} />
                <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sm">
                  Historical Context
                </h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-white leading-relaxed font-light">
                {activeLoc.details}
              </p>
            </motion.div>

            <button className="flex items-center gap-3 px-8 py-4 bg-transparent border border-h-gold/30 rounded-full text-h-gold font-bold uppercase tracking-widest text-xs hover:bg-h-gold hover:text-white dark:hover:text-h-slate transition-all duration-500 group">
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
