import { Search, Mail, Link as LinkIcon } from "lucide-react";
import { socialLinks } from "../data/data";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-bg-primary border-t border-border-subtle">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        {/* SERP Style Header / "Search" info */}
        <div className="flex items-center gap-3 text-sm text-text-secondary mb-10 pb-6 border-b border-border-subtle">
          <Search className="w-4 h-4" />
          <p>Showing results for "<span className="font-semibold text-text-primary">contact information</span>"</p>
        </div>

        {/* Contact Results List */}
        <div className="space-y-12">
          {socialLinks.map((link, index) => (
            <div key={index} className="group">

              {/* Breadcrumb & Favicon */}
              <div className="flex items-center gap-3 mb-1.5">
                <div className="w-7 h-7 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center overflow-hidden flex-shrink-0">
                  {link.label === "Email" ? (
                    <Mail className="w-3.5 h-3.5 text-text-secondary" />
                  ) : (
                    <LinkIcon className="w-3.5 h-3.5 text-text-secondary" />
                  )}
                </div>
                <div className="flex items-center text-sm text-text-secondary">
                  <span className="truncate max-w-[200px] sm:max-w-none text-text-primary">
                    {link.label}
                  </span>
                  <span className="mx-1.5 text-text-tertiary">›</span>
                  <span className="text-text-tertiary">Connect</span>
                </div>
              </div>

              {/* Title Link */}
              <a
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="inline-block"
              >
                <h3 className="text-xl sm:text-[22px] text-accent-blue font-medium group-hover:underline mb-1 tracking-tight">
                  {link.label}
                </h3>
              </a>

              {/* Snippet */}
              <p className="text-[15px] text-text-secondary leading-relaxed max-w-2xl mt-1">
                <span className="text-text-tertiary">Direct Link - </span>
                Click the link above to connect with me on {link.label}. I am currently accepting new projects and inquiries.
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
