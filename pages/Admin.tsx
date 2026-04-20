import React, { useState, useEffect } from 'react';

interface Application {
  id: number;
  submittedAt: string;
  fullName: string;
  email: string;
  location: string;
  motivation: string;
  age: string;
}

const Admin: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [key, setKey] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const fetchApplications = async (adminKey: string) => {
    try {
      const response = await fetch(`/api/applications?key=${adminKey}`);
      if (!response.ok) throw new Error('Unauthorized');
      const data = await response.json();
      setApplications(data.sort((a: Application, b: Application) => b.id - a.id));
      setAuthenticated(true);
    } catch (err) {
      setError('Invalid Access Key');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    fetchApplications(key);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-brand-navy flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white p-12 rounded-[4px] shadow-2xl">
          <h1 className="text-2xl font-serif font-bold text-brand-navy mb-8 text-center uppercase tracking-widest">Registry Access</h1>
          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-navy mb-4">Access Key</label>
              <input 
                type="password" 
                value={key} 
                onChange={(e) => setKey(e.target.value)}
                className="w-full bg-brand-parchment/30 border-b border-brand-stone py-3 text-sm focus:border-brand-gold outline-none text-brand-navy transition-all"
                placeholder="Enter password"
              />
            </div>
            {error && <p className="text-red-500 text-xs font-sans font-semibold uppercase tracking-widest">{error}</p>}
            <button 
              type="submit" 
              className="w-full py-4 bg-brand-gold text-brand-navy text-[10px] font-sans font-bold uppercase tracking-[0.4em] hover:bg-brand-navy hover:text-brand-parchment transition-all"
            >
              Verify Credentials
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-parchment pt-32 pb-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-brand-navy/10 pb-8 hover:pb-10 transition-all">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-navy">Admissions Registry</h1>
            <p className="text-brand-gold text-[11px] font-sans font-semibold tracking-[0.5em] uppercase mt-4">Confidential Dossier Archive</p>
          </div>
          <span className="text-[11px] font-sans font-bold text-brand-slate uppercase tracking-[0.3em] bg-white px-4 py-2 border border-brand-stone">
            {applications.length} Entries recorded
          </span>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-32 bg-white border border-brand-stone rounded-[4px]">
            <p className="text-xl font-serif italic text-brand-slate">"The archive is currently empty. Formation awaits its first pioneers."</p>
          </div>
        ) : (
          <div className="space-y-8">
            {applications.map((app) => (
              <div key={app.id} className="bg-white border border-brand-stone p-10 md:p-16 rounded-[4px] hover:shadow-xl transition-all group">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-brand-navy">{app.fullName}</h3>
                    <div className="flex flex-wrap gap-6 items-center">
                      <span className="text-[12px] font-sans font-semibold text-brand-gold uppercase tracking-widest">{app.email}</span>
                      <span className="text-brand-stone">|</span>
                      <span className="text-[12px] font-sans font-semibold text-brand-slate uppercase tracking-widest">{app.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-sans font-bold text-brand-slate/40 uppercase tracking-[0.3em]">
                      Submitted: {new Date(app.submittedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                </div>

                <div className="bg-brand-parchment/30 p-8 border-l-2 border-brand-gold">
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-brand-navy mb-6">Motivation & Intent</h4>
                  <p className="text-brand-navy/80 font-serif leading-relaxed italic">
                    "{app.motivation}"
                  </p>
                </div>
                
                <div className="mt-12 flex justify-end">
                   <button className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-brand-navy hover:text-brand-gold transition-colors flex items-center gap-4">
                     Review Full Dossier
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
