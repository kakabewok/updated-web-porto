import { User, Search } from "lucide-react";
import { profileData } from "../data/data";

function About() {
  return (
    <section id="about" className="py-20 bg-bg-primary border-t border-border-subtle">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        {/* SERP Style Header / "Search" info */}
        <div className="flex items-center gap-3 text-sm text-text-secondary mb-10 pb-6 border-b border-border-subtle">
          <Search className="w-4 h-4" />
          <p>Showing results for "<span className="font-semibold text-text-primary">about {profileData.name}</span>"</p>
        </div>

        {/* About Result List */}
        <div className="space-y-12">
          
          {/* Main About Block */}
          <div className="group">
            {/* Breadcrumb & Favicon */}
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-7 h-7 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center overflow-hidden flex-shrink-0">
                <User className="w-3.5 h-3.5 text-text-secondary" />
              </div>
              <div className="flex items-center text-sm text-text-secondary">
                <span className="truncate max-w-[200px] sm:max-w-none text-text-primary">
                  noprizal.com
                </span>
                <span className="mx-1.5 text-text-tertiary">›</span>
                <span className="text-text-tertiary">About</span>
              </div>
            </div>

            {/* Title Link */}
            <h3 className="text-xl sm:text-[22px] text-accent-blue font-medium mb-1 tracking-tight cursor-default">
              {profileData.name} — {profileData.role}
            </h3>

            {/* Snippet */}
            <p className="text-[15px] text-text-secondary leading-relaxed max-w-2xl mt-1">
              <span className="text-text-tertiary">Overview — </span>
              {profileData.intro}
            </p>
          </div>

          {/* Core Focus Block */}
          <div className="group">
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-7 h-7 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center overflow-hidden flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
              </div>
              <div className="flex items-center text-sm text-text-secondary">
                <span className="truncate max-w-[200px] sm:max-w-none text-text-primary">
                  noprizal.com
                </span>
                <span className="mx-1.5 text-text-tertiary">›</span>
                <span className="text-text-tertiary">Focus</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-[22px] text-accent-blue font-medium mb-1 tracking-tight cursor-default">
              Core Focus Areas
            </h3>

            <p className="text-[15px] text-text-secondary leading-relaxed max-w-2xl mt-1">
              <span className="text-text-tertiary">Specialties — </span>
              Specializing in Digital Invitations, Event Websites, UI/UX Design, and Modern Web Applications. Always accepting new clients.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
