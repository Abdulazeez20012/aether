import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-parchment min-h-screen">
      {/* Hero Section — The Foundation */}
      <section className="relative min-h-screen bg-brand-navy flex items-center pt-24 overflow-hidden">
        <div className="max-w-layout mx-auto px-6 md:px-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 z-10 py-24 lg:py-32">
            <div className="inline-block mb-12">
              <span className="block text-brand-gold text-[11px] font-sans font-semibold tracking-[0.5em] uppercase opacity-0 animate-[slideUp_0.8s_ease-out_forwards]">
                The Future of Formation
              </span>
              <div className="h-px w-12 bg-brand-gold/40 mt-4"></div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tight font-serif text-brand-parchment mb-16 leading-[0.8] opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
              AETHER
            </h1>

            <div className="max-w-xl">
              <p className="text-2xl md:text-4xl font-serif text-brand-parchment/90 mb-12 leading-relaxed italic opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                Build the Mind. <br className="hidden md:block" /> Shape the Character.
              </p>

              <p className="text-lg md:text-xl text-brand-parchment/60 mb-16 leading-loose opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards] font-serif">
                A structured two-year formation program delivering a synthesis of <span className="text-brand-gold font-medium">classical knowledge</span> and <span className="text-brand-parchment font-bold">technical mastery</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
              <Link
                to="/apply"
                className="px-12 py-5 bg-brand-gold text-brand-navy text-[11px] font-sans font-semibold tracking-[0.4em] uppercase transition-all hover:bg-white shadow-2xl"
              >
                Apply for the Pilot Cohort
              </Link>
              <Link
                to="/program"
                className="px-12 py-5 border border-brand-parchment/20 text-brand-parchment text-[11px] font-sans font-semibold tracking-[0.4em] uppercase hover:bg-brand-parchment/10 transition-all text-center"
              >
                View Curriculum
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards]">
            <div className="aspect-[4/5] bg-brand-parchment/5 border border-brand-parchment/10 relative overflow-hidden rounded-[4px]">
              <div className="absolute inset-0 bg-brand-navy/60 z-10"></div>
              <img
                src="/pic.jpeg"
                alt="Institutional Discipline"
                className="w-full h-full object-cover scale-110 grayscale"
              />
              <div className="absolute inset-0 border-[40px] border-brand-navy z-20"></div>

              {/* Institutional Seal Style Badge */}
              <div className="absolute bottom-16 right-16 z-30">
                <div className="w-48 h-48 rounded-full border border-brand-gold/20 flex items-center justify-center p-2">
                  <div className="w-full h-full rounded-full border border-brand-gold/10 flex flex-col items-center justify-center text-center bg-brand-navy/60 backdrop-blur-sm">
                    <span className="text-xl font-serif font-bold text-brand-gold tracking-widest">AETHER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement — The Divide */}
      <section className="py-24 bg-brand-parchment px-6 md:px-24">
        <div className="max-w-layout mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[11px] font-sans font-semibold uppercase tracking-[0.6em] text-brand-green mb-12">The Divide</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-brand-navy leading-[1.1]">
                A Choice That <br /> Shouldn't Exist.
              </h3>
            </div>
            <div className="lg:col-span-7 space-y-16">
              <p className="text-2xl md:text-3xl font-serif text-brand-slate leading-relaxed">
                Young people are often forced to choose between <span className="text-brand-navy font-bold">principled values</span> and <span className="text-brand-navy font-bold">modern competence</span>.
              </p>
              <div className="h-px w-24 bg-brand-gold/30"></div>
              <p className="text-lg md:text-xl text-brand-slate/80 leading-loose font-serif">
                Graduates are emerging technically capable but ethically unanchored, or deeply grounded but lacking the tools to impact the modern world. This fragmentation hinders institutional progress and individual development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution — The Anchor */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-layout mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-block w-px h-24 bg-brand-gold/30 mb-8"></div>
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-brand-navy mb-12 leading-tight">
              Unified formation for those who seek to bridge this gap.
            </h2>
          </div>

          <div className="p-16 md:p-24 bg-brand-navy text-brand-parchment rounded-[4px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 border border-brand-gold/5 -translate-y-1/2 translate-x-1/2 rotate-45"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-4xl font-serif italic leading-[1.6] mb-12">
                "AETHER removes the false choice. Our curriculum integrates classical discipline with technical mastery into a single path."
              </p>
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.5em] text-brand-gold">The Institutional Mandate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars — The Structure */}
      <section className="py-24 bg-brand-parchment px-6 md:px-24 border-y border-brand-stone">
        <div className="max-w-layout mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-end mb-24">
            <div className="lg:col-span-8">
              <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.6em] text-brand-green mb-8">Pedagogical Core</h4>
              <h2 className="text-4xl md:text-8xl font-serif font-bold text-brand-navy leading-none">The Three Pillars</h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-brand-slate text-sm font-sans font-semibold uppercase tracking-[0.3em] leading-loose">
                A holistic curriculum designed for intellectual and moral longevity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-brand-stone font-serif">
            {[
              { title: 'Arabic & Literacy', key: 'Classical', desc: 'Functional Arabic literacy focused on comprehension and enduring fluency in traditional texts.', accent: 'brand-navy' },
              { title: 'Ethics & Character', key: 'Formation', desc: 'The synthesis of moral discipline and ethical reasoning applied to modern leadership and complexity.', accent: 'brand-green' },
              { title: 'Technical Mastery', key: 'Agency', desc: 'Software development and systems thinking taught through the lens of craftsmanship and real utility.', accent: 'brand-gold' }
            ].map((pillar, idx) => (
              <div key={idx} className={`p-12 md:p-16 border-b md:border-b-0 border-brand-stone ${idx < 2 ? 'md:border-r' : ''} group transition-all duration-700 hover:bg-white`}>
                <div className="space-y-16">
                  <div className="flex justify-between items-start">
                    <span className="text-[12px] font-sans font-bold text-brand-slate/30 tracking-[0.4em]">0{idx + 1}</span>
                    <span className={`text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-${pillar.accent}`}>[ {pillar.key} ]</span>
                  </div>
                  <div className="space-y-8">
                    <h3 className="text-3xl font-serif font-bold text-brand-navy group-hover:text-brand-gold transition-colors">{pillar.title}</h3>
                    <p className="text-brand-slate text-lg leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-8 flex items-center gap-6 text-brand-navy group-hover:gap-10 transition-all cursor-pointer">
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.3em]">Explore Pillar</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Collective Journey */}
      <section className="py-32 px-6 md:px-24 bg-brand-navy text-brand-parchment relative">
        <div className="max-w-layout mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-20">
            <div className="flex justify-center">
              <div className="w-48 h-px bg-brand-gold/30"></div>
            </div>
            <div className="space-y-12">
              <h2 className="text-5xl md:text-8xl font-serif font-bold leading-tight">Begin the <br /> Formation.</h2>
              <p className="text-xl md:text-2xl text-brand-parchment/60 font-serif italic max-w-2xl mx-auto leading-loose">
                We are seeking individuals committed to excellence, discipline, and the long-term pursuit of meaningful impact.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/apply" className="px-16 py-6 bg-brand-gold text-brand-navy font-sans font-semibold text-[12px] tracking-[0.5em] uppercase hover:bg-white transition-all shadow-2xl">
                Submit Application
              </Link>
            </div>
            <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.6em] text-brand-parchment/30">
              Admissions for Pilot Cohort I
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

export default Home;