import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Application: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    location: '',
    email: '',
    phone: '',
    eduLevel: '',
    arabicLevel: 'None',
    techLevel: 'None',
    motivation: '',
    goals: '',
    commitment: 'Unsure',
    laptop: 'No',
    inPerson: 'No',
    source: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
        // Short pause to show success before redirection
        setTimeout(() => {
          navigate('/confirmation');
        }, 1200);
      } else {
        throw new Error('Institutional processing error');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setIsSubmitting(false);
      alert('We encountered an error processing your dossier. Please try again or contact the registry.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const labelClasses = "block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-navy mb-4";
  const inputClasses = "w-full bg-brand-parchment/30 border-b border-brand-stone py-3 text-sm focus:border-brand-gold outline-none text-brand-navy transition-all placeholder:text-brand-navy/20 disabled:opacity-50";
  const selectClasses = "w-full bg-transparent border-b border-brand-stone py-3 text-sm focus:border-brand-gold outline-none text-brand-navy transition-all cursor-pointer disabled:opacity-50 appearance-none";

  return (
    <div className="bg-brand-parchment min-h-screen">
      {/* Hero — Formal Enrollment */}
      <section className="pt-48 pb-24 bg-brand-navy px-6 md:px-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 border-[40px] border-brand-navy z-20 pointer-events-none"></div>
        <div className="max-w-layout mx-auto relative z-10">
          <div className="inline-block mb-12">
            <span className="text-[11px] font-sans font-semibold text-brand-gold tracking-[0.6em] uppercase opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
              Institutional Admission
            </span>
            <div className="h-px w-12 bg-brand-gold/40 mx-auto mt-4"></div>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-16 text-brand-parchment opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards] leading-tight">
            Application for Consideration
          </h1>
          <p className="text-xl md:text-2xl text-brand-parchment/70 font-serif italic max-w-3xl mx-auto opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards] leading-loose">
            "Selection is a deliberation of potential and commitment. Please provide thorough responses for our evaluation committee."
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-24 bg-brand-parchment">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white border border-brand-gray/30 p-12 md:p-24 rounded-[4px] opacity-0 animate-[slideUp_0.8s_ease-out_0.5s_forwards]">
            <form onSubmit={handleSubmit} className="space-y-24">
              {/* Section 1 */}
              <div className="space-y-16">
                <div className="flex items-center gap-6 border-b border-brand-navy/5 pb-8">
                  <span className="text-[11px] font-sans font-semibold text-brand-gold tracking-[0.5em] uppercase">01 / Personal Records</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 font-serif">
                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Full Name</label>
                    <input required disabled={isSubmitting || isSuccess} name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-brand-parchment/30 border-b border-brand-gray/60 py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all placeholder:text-brand-navy/20 disabled:opacity-50" placeholder="As per official identification" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Age</label>
                    <input required disabled={isSubmitting || isSuccess} name="age" type="number" value={formData.age} onChange={handleInputChange} className="w-full bg-brand-parchment/30 border-b border-brand-gray/60 py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all placeholder:text-brand-navy/20 disabled:opacity-50" placeholder="Current years" />
                  </div>
                </div>
                <div className="font-serif">
                  <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Current Location</label>
                  <input required disabled={isSubmitting || isSuccess} name="location" value={formData.location} onChange={handleInputChange} className="w-full bg-brand-parchment/30 border-b border-brand-gray/60 py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all placeholder:text-brand-navy/20 disabled:opacity-50" placeholder="City, Country" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 font-serif">
                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Email Address</label>
                    <input required disabled={isSubmitting || isSuccess} name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full bg-brand-parchment/30 border-b border-brand-gray/60 py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all placeholder:text-brand-navy/20 disabled:opacity-50" placeholder="Primary contact" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Phone Number</label>
                    <input required disabled={isSubmitting || isSuccess} name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-brand-parchment/30 border-b border-brand-gray/60 py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all placeholder:text-brand-navy/20 disabled:opacity-50" placeholder="Include country code" />
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-16">
                <div className="flex items-center gap-6 border-b border-brand-navy/5 pb-8">
                  <span className="text-[11px] font-sans font-semibold text-brand-gold tracking-[0.5em] uppercase">02 / Intellectual Background</span>
                </div>

                <div className="font-serif">
                  <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Current Education Level</label>
                  <input required disabled={isSubmitting || isSuccess} name="eduLevel" value={formData.eduLevel} onChange={handleInputChange} className="w-full bg-brand-parchment/30 border-b border-brand-gray/60 py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all placeholder:text-brand-navy/20 disabled:opacity-50" placeholder="Degree, year, or equivalent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 font-serif">
                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Arabic Language Exposure</label>
                    <div className="relative border-b border-brand-gray/60">
                      <select disabled={isSubmitting || isSuccess} name="arabicLevel" value={formData.arabicLevel} onChange={handleInputChange} className="w-full bg-transparent py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all cursor-pointer disabled:opacity-50 appearance-none">
                        <option>None</option>
                        <option>Basic Literacy</option>
                        <option>Intermediate Comprehension</option>
                        <option>Advanced/Fluent</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-navy/30">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Technical Proficiency</label>
                    <div className="relative border-b border-brand-gray/60">
                      <select disabled={isSubmitting || isSuccess} name="techLevel" value={formData.techLevel} onChange={handleInputChange} className="w-full bg-transparent py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all cursor-pointer disabled:opacity-50 appearance-none">
                        <option>None</option>
                        <option>Beginner (Logic/Basic code)</option>
                        <option>Intermediate (Web/Apps)</option>
                        <option>Professional Engineering</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-navy/30">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-16">
                <div className="flex items-center gap-6 border-b border-brand-navy/5 pb-8">
                  <span className="text-[11px] font-sans font-semibold text-brand-gold tracking-[0.5em] uppercase">03 / Intent & Commitment</span>
                </div>

                <div className="font-serif">
                  <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Primary Motivation</label>
                  <textarea required disabled={isSubmitting || isSuccess} name="motivation" value={formData.motivation} onChange={handleInputChange} rows={6} className="w-full bg-brand-parchment/30 border-b border-brand-gray/60 py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all placeholder:text-brand-navy/20 disabled:opacity-50 resize-none" placeholder="Why do you seek formation at AETHER?" />
                </div>
                <div className="font-serif">
                  <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Long-term Goals</label>
                  <textarea required disabled={isSubmitting || isSuccess} name="goals" value={formData.goals} onChange={handleInputChange} rows={6} className="w-full bg-brand-parchment/30 border-b border-brand-gray/60 py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all placeholder:text-brand-navy/20 disabled:opacity-50 resize-none" placeholder="What do you hope to contribute to the collective?" />
                </div>
                <div className="font-serif">
                  <label className="block text-[11px] font-sans font-semibold uppercase tracking-[0.4em] text-brand-navy mb-8">Two-Year Commitment Acknowledgment</label>
                  <div className="relative border-b border-brand-gray/60">
                    <select disabled={isSubmitting || isSuccess} name="commitment" value={formData.commitment} onChange={handleInputChange} className="w-full bg-transparent py-4 text-[15px] focus:border-brand-gold outline-none text-brand-navy transition-all cursor-pointer disabled:opacity-50 appearance-none">
                      <option>I commit to the full duration</option>
                      <option>I am partially committed</option>
                      <option>I require more information</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-brand-navy/30">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-16 space-y-16">
                <div className="p-10 bg-brand-parchment border-l-2 border-brand-gold relative overflow-hidden">
                  <p className="text-[14px] text-brand-navy/70 leading-relaxed font-serif italic">
                    Note: The submission of this dossier initiates a formal review process. Information provided will be used solely for admissions evaluation and kept in strict confidence.
                  </p>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full max-w-md py-7 text-[12px] font-sans font-semibold tracking-[0.5em] uppercase transition-all shadow-2xl flex items-center justify-center gap-8 ${isSuccess
                      ? 'bg-brand-green text-white'
                      : 'bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-brand-parchment'
                      } disabled:opacity-50`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting Dossier</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Dossier Received</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <svg className="w-5 h-5 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
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

export default Application;