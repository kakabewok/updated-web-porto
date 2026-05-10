import { ArrowDown, Database, Server } from "lucide-react";
import { profileData, socialLinks } from "../data/data";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative bg-bg-primary overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] animate-pulse" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-border-strong/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-32 mt-16 md:mt-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-secondary border border-border-strong mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="text-xs font-medium tracking-wide text-text-secondary uppercase">
                Software Developer
              </p>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-text-primary tracking-tight leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
              {profileData.name}
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed mb-10 max-w-xl animate-fade-in-up animation-delay-200">
              {profileData.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-16 animate-fade-in-up animation-delay-300">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-text-primary text-text-inverse text-sm font-medium tracking-wide hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-border-strong bg-bg-primary/50 backdrop-blur-sm text-text-primary text-sm font-medium tracking-wide hover:border-text-primary hover:bg-bg-secondary transition-all duration-300"
              >
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 animate-fade-in-up animation-delay-400">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={
                    link.label !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-2 rounded-full bg-bg-secondary text-text-muted hover:text-text-primary hover:bg-border-strong transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative hidden lg:block h-[500px] w-full animate-fade-in-up animation-delay-300">
            {/* Main Code Snippet Card */}
            <div className="absolute top-10 right-10 w-[400px] rounded-xl border border-border/50 bg-bg-secondary/80 backdrop-blur-md shadow-2xl p-5 transform rotate-2 hover:rotate-0 transition-transform duration-500 z-20">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 text-center text-xs font-mono text-text-tertiary">
                  developer.ts
                </div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <p className="text-text-secondary"><span className="text-[#3b82f6]">const</span> <span className="text-[#eab308]">developer</span> = {'{'}</p>
                <p className="text-text-primary pl-4">name: <span className="text-[#22c55e]">'{profileData.name}'</span>,</p>
                <p className="text-text-primary pl-4">role: <span className="text-[#22c55e]">'Software Developer'</span>,</p>
                <p className="text-text-primary pl-4">skills: [<span className="text-[#22c55e]">'React'</span>, <span className="text-[#22c55e]">'Next.js'</span>, <span className="text-[#22c55e]">'TypeScript'</span>],</p>
                <p className="text-text-primary pl-4">passion: <span className="text-[#22c55e]">'Building scalable web apps'</span></p>
                <p className="text-text-secondary">{'}'};</p>
              </div>
            </div>

            {/* Floating UI Card - Backend */}
            <div className="absolute top-64 left-0 w-64 rounded-xl border border-border/50 bg-bg-primary/90 backdrop-blur-xl shadow-xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-bg-secondary text-accent">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Backend Systems</p>
                  <p className="text-xs text-text-tertiary">REST APIs & Architecture</p>
                </div>
              </div>
            </div>

            {/* Floating UI Card - Database */}
            <div className="absolute -bottom-10 right-20 w-56 rounded-xl border border-border/50 bg-bg-primary/90 backdrop-blur-xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-500 z-30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-bg-secondary text-[#3b82f6]">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Data Design</p>
                  <p className="text-xs text-text-tertiary">SQL & Optimization</p>
                </div>
              </div>
            </div>
            
            {/* Floating Decorative Element */}
            <div className="absolute top-0 right-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/10 backdrop-blur-md transform rotate-12 -z-10 animate-bounce" style={{animationDuration: '3s'}} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-text-muted hover:text-text-primary transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-accent" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
