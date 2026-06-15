import { Award, Search } from "lucide-react";
import { certificatesData } from "../data/data";

function Certificates() {
  const currentCerts = certificatesData.slice(0, 3); // Or all of them
  return (
    <section id="certificates" className="py-20 bg-bg-primary border-t border-border-subtle">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        {/* SERP Style Header / "Search" info */}
        <div className="flex items-center justify-between text-sm text-text-secondary mb-10 pb-6 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <Search className="w-4 h-4" />
            <p>Showing results for "<span className="font-semibold text-text-primary">credentials</span>"</p>
          </div>
          <a href="https://www.linkedin.com/in/noprizal" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
            View all on LinkedIn
          </a>
        </div>

        {/* Certificates Results List */}
        <div className="space-y-12">
          {currentCerts.map((cert) => (
            <div key={cert.id} className="group">
              
              {/* Breadcrumb & Favicon */}
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-7 h-7 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Award className="w-3.5 h-3.5 text-text-secondary" />
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <span className="truncate max-w-[200px] sm:max-w-none text-text-primary">
                    {cert.issuing_organization}
                  </span>
                  <span className="mx-1.5 text-text-tertiary">›</span>
                  <span className="text-text-tertiary">Credential</span>
                </div>
              </div>

              {/* Title Link */}
              <a 
                href={cert.preview_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <h3 className="text-xl sm:text-[22px] text-accent-blue font-medium group-hover:underline mb-1 tracking-tight">
                  {cert.title}
                </h3>
              </a>

              {/* Snippet */}
              <p className="text-[15px] text-text-secondary leading-relaxed max-w-2xl mt-1">
                <span className="text-text-tertiary">Certification — </span>
                Issued by {cert.issuing_organization}. Verify credential and view details via the link above.
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
