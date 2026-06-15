import { GraduationCap, Search } from "lucide-react";
import { educationData } from "../data/data";

function Education() {
  return (
    <section id="education" className="py-20 bg-bg-primary border-t border-border-subtle">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        {/* SERP Style Header / "Search" info */}
        <div className="flex items-center gap-3 text-sm text-text-secondary mb-10 pb-6 border-b border-border-subtle">
          <Search className="w-4 h-4" />
          <p>Showing results for "<span className="font-semibold text-text-primary">education</span>"</p>
        </div>

        {/* Education Results List */}
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="group">
              
              {/* Breadcrumb & Favicon */}
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-7 h-7 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center overflow-hidden flex-shrink-0">
                  <GraduationCap className="w-3.5 h-3.5 text-text-secondary" />
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <span className="truncate max-w-[200px] sm:max-w-none text-text-primary">
                    {edu.institution}
                  </span>
                  <span className="mx-1.5 text-text-tertiary">›</span>
                  <span className="text-text-tertiary">{edu.period}</span>
                </div>
              </div>

              {/* Title Link */}
              <h3 className="text-xl sm:text-[22px] text-accent-blue font-medium mb-1 tracking-tight cursor-default">
                {edu.degree}
              </h3>

              {/* Snippet */}
              <p className="text-[15px] text-text-secondary leading-relaxed max-w-2xl mt-1">
                <span className="text-text-tertiary">{edu.location} — </span>
                Studied {edu.field} at {edu.institution}.
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
