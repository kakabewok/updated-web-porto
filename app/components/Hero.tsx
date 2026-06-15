"use client";

import { useState, useEffect } from "react";
import { Search, Mic, Camera } from "lucide-react";
import { profileData } from "../data/data";

const searchQueries = [
  "Bespoke digital invitations...",
  "Custom event websites...",
  "UI/UX Design for creatives...",
  "Modern web experiences..."
];

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [queryIndex, setQueryIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayText.length < searchQueries[queryIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(searchQueries[queryIndex].slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000); // pause at end
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setQueryIndex((prev) => (prev + 1) % searchQueries.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, queryIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative bg-bg-primary overflow-hidden px-6"
    >
      {/* Title / Logo replacement */}
      <h1 className="text-5xl md:text-7xl font-semibold text-text-primary mb-8 tracking-tighter">
        <span className="text-accent-blue">N</span>
        <span className="text-accent-red">o</span>
        <span className="text-accent-yellow">p</span>
        <span className="text-accent-blue">r</span>
        <span className="text-accent-green">i</span>
        <span className="text-accent-red">z</span>
        <span className="text-accent-yellow">a</span>
        <span className="text-accent-blue">l</span>
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-2xl flex items-center bg-bg-primary border border-border hover:border-transparent hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)] rounded-full px-5 py-3 md:py-4 transition-all duration-200 group">
        <Search className="w-5 h-5 text-text-muted mr-4" />
        
        <div className="flex-1 flex items-center h-6 md:h-8">
          <span className="text-base md:text-lg text-text-primary">
            {displayText}
          </span>
          <span className="w-[1px] h-5 bg-text-primary ml-0.5 animate-pulse" />
        </div>

        <div className="flex items-center gap-3 ml-4 hidden sm:flex">
          <Mic className="w-5 h-5 text-accent-blue cursor-pointer hover:opacity-80 transition-opacity" />
          <Camera className="w-5 h-5 text-accent-blue cursor-pointer hover:opacity-80 transition-opacity" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
        <a
          href="#projects"
          className="px-6 py-2.5 bg-bg-secondary hover:bg-bg-tertiary text-text-primary text-sm font-medium rounded transition-colors border border-transparent hover:border-border hover:shadow-sm"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          className="px-6 py-2.5 bg-bg-secondary hover:bg-bg-tertiary text-text-primary text-sm font-medium rounded transition-colors border border-transparent hover:border-border hover:shadow-sm"
        >
          I'm Feeling Lucky
        </a>
      </div>

      {/* Subtle Tagline */}
      <p className="mt-12 text-sm text-text-secondary max-w-lg text-center leading-relaxed">
        Designer & Developer based in Indonesia. <br className="hidden sm:block" />
        {profileData.tagline}
      </p>
    </section>
  );
}

export default Hero;
