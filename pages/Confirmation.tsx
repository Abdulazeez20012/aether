import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Confirmation: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-parchment min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Institutional Border */}
      <div className="absolute inset-0 border-[40px] border-brand-navy z-20 pointer-events-none"></div>

      <div className="max-w-2xl w-full text-center relative z-10 py-24 px-6">
        <div className="mb-16 opacity-0 animate-[scaleUp_0.6s_ease-out_forwards]">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-brand-gold/30 bg-white shadow-xl">
            <svg className="w-10 h-10 text-brand-gold animate-[checkDraw_0.8s_ease-out_0.4s_forwards]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeDasharray="30" strokeDashoffset="30">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex justify-center">
            <div className="w-12 h-px bg-brand-gold/40"></div>
          </div>

          <h1 className="text-4xl md:text-7xl font-serif font-bold text-brand-navy leading-tight opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]">
            Dossier Received.
          </h1>

          <p className="text-xl md:text-2xl text-brand-slate leading-loose font-serif italic max-w-xl mx-auto opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
            "Your application has been logged into the AETHER registry. Our committee reviews each profile with the deliberation it deserves."
          </p>

          <div className="pt-16 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            <Link
              to="/"
              className="text-[11px] font-sans font-semibold tracking-[0.5em] uppercase text-brand-navy hover:text-brand-gold transition-colors border-b border-brand-gold/30 pb-4"
            >
              Return to Archive
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes checkDraw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};

export default Confirmation;