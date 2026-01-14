import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy pt-32 pb-16 relative overflow-hidden">
      {/* Subtle Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-brand-gold/20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-10">
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold tracking-[0.5em] font-serif text-brand-parchment mb-4">
                AETHER
              </h3>
              <div className="h-px w-16 bg-brand-gold"></div>
            </div>
            <p className="text-brand-parchment/80 text-xl leading-relaxed max-w-sm font-serif italic border-l border-brand-gold/30 pl-8">
              "Build the Mind. Shape the Character."
            </p>
            <p className="text-brand-parchment/50 text-sm max-w-sm leading-relaxed font-sans font-medium">
              A structured formation program delivering a synthesis of classical knowledge and modern technical mastery.
            </p>
          </div>

          {/* Links Section — Institutional Structure */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.5em] text-brand-gold mb-12">
              Institutional
            </h4>
            <ul className="space-y-8">
              <li>
                <Link to="/program" className="group text-brand-parchment/60 hover:text-brand-parchment transition-all flex items-center gap-4">
                  <span className="w-2 h-px bg-brand-gold/20 group-hover:bg-brand-gold transition-colors"></span>
                  <span className="text-[12px] font-sans font-semibold tracking-[0.3em] uppercase">The Program</span>
                </Link>
              </li>
              <li>
                <Link to="/audience" className="group text-brand-parchment/60 hover:text-brand-parchment transition-all flex items-center gap-4">
                  <span className="w-2 h-px bg-brand-gold/20 group-hover:bg-brand-gold transition-colors"></span>
                  <span className="text-[12px] font-sans font-semibold tracking-[0.3em] uppercase">Who It's For</span>
                </Link>
              </li>
              <li>
                <Link to="/apply" className="group text-brand-parchment/60 hover:text-brand-parchment transition-all flex items-center gap-4">
                  <span className="w-2 h-px bg-brand-gold/20 group-hover:bg-brand-gold transition-colors"></span>
                  <span className="text-[12px] font-sans font-semibold tracking-[0.3em] uppercase text-brand-gold">Apply Now</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section — Formal Communication */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.5em] text-brand-gold mb-12">
              Contact
            </h4>
            <div className="space-y-10">
              <a
                href="mailto:info@aether.education"
                className="group block space-y-3"
              >
                <span className="block text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-brand-parchment/40">Direct Inquiry</span>
                <span className="block text-xl font-serif text-brand-parchment group-hover:text-brand-gold transition-colors border-b border-brand-parchment/10 pb-3 group-hover:border-brand-gold/30 leading-snug">
                  info@aether.education
                </span>
              </a>
              <div className="pt-4">
                <span className="inline-block px-6 py-3 border border-brand-gold/20 text-brand-gold text-[10px] font-sans font-semibold tracking-[0.4em] uppercase">
                  Global Admissions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section — Registry & Terms */}
        <div className="pt-16 border-t border-brand-parchment/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 text-[10px] text-brand-parchment/30 font-sans font-semibold uppercase tracking-[0.5em]">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} AETHER Institute. Formalized Excellence.
            </p>
            <div className="flex items-center space-x-12">
              <Link to="/" className="hover:text-brand-parchment transition-colors">Privacy</Link>
              <Link to="/" className="hover:text-brand-parchment transition-colors">Transparency</Link>
              <Link to="/" className="hover:text-brand-parchment transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;