import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Program: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-parchment min-h-screen">
      {/* Hero / Overview — Institutional Anchor */}
      <section className="relative pt-48 pb-24 bg-brand-navy px-6 md:px-24 overflow-hidden">
        <div className="absolute inset-0 border-[40px] border-brand-navy z-20 pointer-events-none"></div>
        <div className="max-w-layout mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8 space-y-16 py-12">
              <div className="inline-block">
                <span className="block text-brand-gold text-[11px] font-sans font-semibold tracking-[0.5em] uppercase opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
                  Pedagogy & Structure
                </span>
                <div className="h-px w-16 bg-brand-gold/40 mt-4"></div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold font-serif text-brand-parchment leading-tight opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
                The AETHER <br className="hidden md:block" /> Formation Path.
              </h1>

              <div className="max-w-2xl opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
                <p className="text-xl md:text-2xl text-brand-parchment/80 leading-loose font-serif italic border-l border-brand-gold/30 pl-10 py-2">
                  "A structured two-year formation delivering a synthesis of classical knowledge and technical mastery through a disciplined hybrid model."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline — Museum Layout */}
      <section className="py-24 bg-brand-parchment px-6 md:px-24 relative">
        <div className="max-w-layout mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-[11px] font-sans font-semibold text-brand-green tracking-[0.6em] uppercase mb-8">Sequential Growth</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-brand-navy">The Timeline</h3>
            </div>
            <div className="pb-2">
              <span className="text-[12px] font-sans font-semibold text-brand-slate uppercase tracking-[0.3em]">[ 24 Months Continuous ]</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 border border-brand-stone font-serif">
            {[
              {
                phase: "Phase I",
                title: "Foundations",
                duration: "Months 1–6",
                points: ["Classical Arabic Literacy", "Ethical Worldview", "Logic & Reason", "Digital Fundamentals"],
                accent: "brand-navy"
              },
              {
                phase: "Phase II",
                title: "Technical Mastery",
                duration: "Months 7–15",
                points: ["Intermediate Texts", "Software Craftsmanship", "Applied Systems Design", "Project Apprenticeship"],
                accent: "brand-gold"
              },
              {
                phase: "Phase III",
                title: "Maturity",
                duration: "Months 16–24",
                points: ["Specialized Tracks", "Capstone Defense", "Community Leadership", "Professional Integration"],
                accent: "brand-green"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`p-10 md:p-16 border-b md:border-b-0 border-brand-stone ${index < 2 ? 'lg:border-r' : ''} bg-white hover:bg-brand-parchment/20 transition-all duration-700`}
              >
                <div className="space-y-16">
                  <div className="flex justify-between items-start">
                    <span className="text-[12px] font-sans font-bold text-brand-slate/30 tracking-[0.4em]">0{index + 1}</span>
                    <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-brand-navy">{item.duration}</span>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[11px] font-sans font-semibold text-brand-gold uppercase tracking-[0.5em]">{item.phase}</h4>
                    <h3 className="text-3xl font-serif font-bold text-brand-navy leading-tight">{item.title}</h3>
                  </div>

                  <ul className="space-y-8">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start text-[15px] text-brand-slate leading-relaxed">
                        <span className="w-2 h-px bg-brand-gold mt-3 mr-5 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes — Handbook List */}
      <section className="py-24 px-6 md:px-24 bg-white border-y border-brand-stone">
        <div className="max-w-layout mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-12 lg:mb-24">
              <h2 className="text-[11px] font-sans font-semibold uppercase tracking-[0.6em] text-brand-green mb-10">Finality</h2>
              <h3 className="text-4xl md:text-7xl font-serif font-bold text-brand-navy leading-[1.1] mb-12">Graduate Outcomes.</h3>
              <p className="text-xl md:text-2xl text-brand-slate leading-relaxed font-serif italic border-l border-brand-gold/30 pl-10 max-w-3xl">
                The AETHER graduate is not merely trained in skills, but formed in a synthesis of intellect and integrity.
              </p>
            </div>

            <div className="lg:col-span-12 grid md:grid-cols-2 gap-px bg-brand-stone border border-brand-stone">
              {[
                { title: "Functional Arabic Literacy", desc: "Ability to engage directly with formal Arabic sources and discourse." },
                { title: "Ethical Integrity", desc: "A robust moral framework derived from classical tradition applied to modern life." },
                { title: "Software Mastery", desc: "Demonstrable technical agency in specialized fields of software engineering." },
                { title: "Collective Agency", desc: "Preparedness to lead and contribute to the community with high competence." },
                { title: "Structured Discipline", desc: "Lifelong habits of rigorous thought and consistent moral practice." }
              ].map((outcome, i) => (
                <div key={i} className="bg-white p-12 flex gap-10 items-start group hover:bg-brand-parchment/20 transition-all duration-500">
                  <span className="text-2xl font-serif font-bold text-brand-gold/40 group-hover:text-brand-gold transition-colors">0{i + 1}</span>
                  <div className="space-y-4">
                    <h4 className="text-xl font-serif font-bold text-brand-navy tracking-tight">{outcome.title}</h4>
                    <p className="text-brand-slate/80 text-[15px] leading-relaxed font-serif max-w-sm">{outcome.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — Selective Admissions */}
      <section className="py-32 px-6 md:px-24 bg-brand-navy text-brand-parchment relative overflow-hidden">
        <div className="max-w-layout mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-20">
            <div className="flex justify-center">
              <div className="w-48 h-px bg-brand-gold/30"></div>
            </div>
            <div className="space-y-12">
              <h2 className="text-4xl md:text-[6rem] font-serif font-bold leading-tight">Apply for Pilot Cohort I.</h2>
              <p className="text-xl md:text-2xl text-brand-parchment/60 font-serif max-w-2xl mx-auto leading-loose italic">
                "Selectivity is the foundation of formation. We are seeking committed pioneers for a rigorous two-year commitment."
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/apply"
                className="px-16 py-7 bg-brand-gold text-brand-navy font-sans font-semibold text-[12px] tracking-[0.5em] uppercase hover:bg-white transition-all shadow-2xl"
              >
                Begin Application
              </Link>
            </div>
            <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.6em] text-brand-parchment/30">
              Admissions for September 2026
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

export default Program;