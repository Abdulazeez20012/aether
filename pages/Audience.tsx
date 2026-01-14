import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Audience: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-parchment min-h-screen">
      {/* Hero — Selective Mandate */}
      <section className="pt-48 pb-24 bg-brand-navy px-6 md:px-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 border-[40px] border-brand-navy z-20 pointer-events-none"></div>
        <div className="max-w-layout mx-auto relative z-10">
          <div className="inline-block mb-12">
            <span className="text-[11px] font-sans font-semibold text-brand-gold tracking-[0.6em] uppercase opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
              Candidate Profile
            </span>
            <div className="h-px w-12 bg-brand-gold/40 mx-auto mt-4"></div>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-serif mb-16 text-brand-parchment opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards] leading-[1.1]">
            Selective. Focused. <br className="hidden md:block" /> Intentional.
          </h1>
          <p className="text-xl md:text-2xl text-brand-parchment/70 font-serif italic max-w-3xl mx-auto opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards] leading-loose">
            "AETHER is a rigorous formation program designed for those willing to commit to excellence. Selection is based on character, capability, and long-term vision."
          </p>
        </div>
      </section>

      {/* Main Grid — Defined Entities */}
      <section className="py-24 px-6 md:px-24 bg-brand-parchment">
        <div className="max-w-layout mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-gray/30 border border-brand-gray/30 font-serif">
            {/* Students Card */}
            <div className="group bg-white p-12 md:p-16 transition-all duration-700 hover:bg-brand-parchment/20">
              <div className="space-y-16">
                <div className="flex justify-between items-start">
                  <span className="text-[12px] font-sans font-bold text-brand-slate/30 tracking-[0.4em]">01</span>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-brand-navy">[ The Student ]</span>
                </div>

                <div className="space-y-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors">For the Seeker.</h3>
                  <p className="text-brand-slate text-lg leading-relaxed">
                    Designed for young individuals who seek to go beyond the minimum. Those who want to build skills that matter and a character that lasts.
                  </p>
                </div>

                <ul className="space-y-8 pt-4">
                  {[
                    "Ages 16–22 Preferred",
                    "15-Hour Weekly Minimum Commitment",
                    "Aptitude for Logical Reasoning",
                    "Dedication to Moral Discipline"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[15px] text-brand-slate leading-relaxed">
                      <span className="w-2 h-px bg-brand-gold mt-3 mr-5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Parents Card */}
            <div className="group bg-white p-12 md:p-16 transition-all duration-700 hover:bg-brand-parchment/20">
              <div className="space-y-16">
                <div className="flex justify-between items-start">
                  <span className="text-[12px] font-sans font-bold text-brand-slate/30 tracking-[0.4em]">02</span>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-brand-green">[ The Guardian ]</span>
                </div>

                <div className="space-y-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors">For the Family.</h3>
                  <p className="text-brand-slate text-lg leading-relaxed">
                    For parents who seek a safe, values-aligned environment where their children can gain elite competence without compromising their identity.
                  </p>
                </div>

                <ul className="space-y-8 pt-4">
                  {[
                    "Values-Aligned Technical Cohorts",
                    "Transparent Pedagogical Model",
                    "Outcome-Based Progression",
                    "Inter-generational Mentorship"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-[15px] text-brand-slate leading-relaxed">
                      <span className="w-2 h-px bg-brand-gold mt-3 mr-5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Commitment — Institutional Pact */}
      <section className="py-32 px-6 md:px-24 bg-brand-navy text-brand-parchment relative">
        <div className="max-w-layout mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-20">
            <div className="flex justify-center">
              <div className="w-48 h-px bg-brand-gold/30"></div>
            </div>
            <div className="space-y-12">
              <h2 className="text-4xl md:text-[5rem] font-serif font-bold leading-tight">A Shared Commitment.</h2>
              <p className="text-xl md:text-2xl text-brand-parchment/60 font-serif italic max-w-3xl mx-auto leading-loose border-l border-brand-gold/30 pl-10 text-left">
                "Success at AETHER requires absolute alignment. We provide the institutional framework; you provide the consistent moral and intellectual effort."
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/apply"
                className="px-16 py-7 bg-brand-gold text-brand-navy font-sans font-semibold text-[12px] tracking-[0.5em] uppercase hover:bg-white transition-all shadow-2xl"
              >
                Apply for Consideration
              </Link>
            </div>
            <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.6em] text-brand-parchment/30">
              Official Enrollment Process
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Audience;