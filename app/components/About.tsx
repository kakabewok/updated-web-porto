import { Code, Server, Terminal, Zap, CheckCircle2 } from "lucide-react";
import { profileData } from "../data/data";

function About() {
  const highlights = [
    "Clean, maintainable code",
    "Scalable system architecture",
    "Performance optimization",
    "Responsive UI/UX design"
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-primary border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-text-tertiary" />
            <p className="text-xs font-medium tracking-wide text-text-secondary uppercase">
              About Me
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight max-w-3xl">
            A developer who cares about craft, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">clarity</span>, and code quality.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Main Bio Content */}
          <div className="lg:col-span-7">
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed mb-10">
              <p className="text-xl text-text-primary font-medium">{profileData.intro}</p>
              <p>
                Currently working as a Back End Developer at PT. Voltras
                International, handling payment gateway integrations and
                mission-critical financial systems. I thrive in environments 
                where complex business logic meets high-performance requirements.
              </p>
              <p>
                On the side, I build freelance web projects through Calaraya, 
                where I focus on delivering end-to-end solutions with exceptional 
                user experiences and robust backend architectures.
              </p>
            </div>

            {/* Highlights / Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-bg-primary border border-border/50 shadow-sm hover:shadow-md hover:border-border-strong transition-all">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Focus Areas */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-bg-primary border border-border/50 shadow-sm hover:shadow-md transition-all">
                <p className="text-4xl font-bold text-text-primary mb-2">2+</p>
                <p className="text-sm text-text-tertiary font-medium">Years Experience</p>
              </div>
              <div className="p-6 rounded-2xl bg-bg-primary border border-border/50 shadow-sm hover:shadow-md transition-all">
                <p className="text-4xl font-bold text-text-primary mb-2">8+</p>
                <p className="text-sm text-text-tertiary font-medium">Projects Delivered</p>
              </div>
              <div className="col-span-2 p-6 rounded-2xl bg-bg-primary border border-border/50 shadow-sm hover:shadow-md transition-all flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold text-text-primary mb-2">16</p>
                  <p className="text-sm text-text-tertiary font-medium">Professional Certifications</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center">
                  <Zap className="w-6 h-6 text-amber-500" />
                </div>
              </div>
            </div>

            {/* Core Focus Badges */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-bg-primary to-bg-secondary border border-border/50 shadow-sm">
              <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Core Focus</h3>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-secondary border border-border/50 text-sm text-text-secondary">
                  <Server className="w-4 h-4" />
                  Backend Systems
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-secondary border border-border/50 text-sm text-text-secondary">
                  <Code className="w-4 h-4" />
                  API Development
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-secondary border border-border/50 text-sm text-text-secondary">
                  <Terminal className="w-4 h-4" />
                  Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
