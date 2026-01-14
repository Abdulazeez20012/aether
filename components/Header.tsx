import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'The Program', path: '/program' },
    { label: 'Who It\'s For', path: '/audience' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
          ? 'bg-brand-navy/80 backdrop-blur-md border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' // Reduced padding
          : 'bg-transparent border-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="group relative z-50">
            <span className={`font-bold tracking-[0.4em] font-serif transition-all duration-500 ease-in-out block ${scrolled
                ? 'text-lg md:text-xl text-brand-parchment' // Smaller logo on scroll
                : 'text-2xl md:text-3xl text-brand-navy'
              } ${isMenuOpen ? '!text-brand-parchment' : ''} group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]`}>
              AETHER
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group py-2"
              >
                <span className={`text-[11px] font-sans font-bold uppercase tracking-[0.25em] transition-all duration-300 ${scrolled
                    ? (isActive(item.path) ? 'text-brand-gold' : 'text-brand-parchment/70 group-hover:text-brand-parchment')
                    : (isActive(item.path) ? 'text-brand-navy' : 'text-brand-navy/60 group-hover:text-brand-navy')
                  }`}>
                  {item.label}
                </span>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand-gold transition-all duration-300 ease-out ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand-gold/50 blur-[2px] transition-all duration-300 ease-out ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </Link>
            ))}
            <Link
              to="/apply"
              className={`relative overflow-hidden group transition-all duration-500 ease-in-out ${scrolled
                  ? 'bg-white/5 hover:bg-white/10 border border-brand-parchment/20 px-6 py-2' // Smaller button on scroll
                  : 'bg-brand-navy hover:bg-brand-navy/90 px-8 py-3'
                }`}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className={`relative text-[11px] font-sans font-bold tracking-[0.25em] uppercase transition-colors ${scrolled ? 'text-brand-parchment' : 'text-brand-parchment'
                }`}>
                Apply to AETHER
              </span>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden relative z-50 p-2 focus:outline-none transition-colors duration-300 ${scrolled || isMenuOpen ? 'text-brand-parchment' : 'text-brand-navy hover:text-brand-gold'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-8 h-5 flex flex-col justify-between">
              <span className={`h-[2px] w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`h-[2px] w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`h-[2px] w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay - Glassmorphism */}
      <div
        className={`fixed inset-0 z-40 bg-brand-navy/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none delay-150'
          }`}
      >
        <div className="flex flex-col h-full items-center justify-center space-y-12 px-6">
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                style={{ transitionDelay: `${150 + idx * 100}ms` }}
                className={`text-xl font-sans font-light uppercase tracking-[0.5em] transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  } ${isActive(item.path) ? 'text-brand-gold' : 'text-brand-parchment hover:text-brand-gold'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div
            style={{ transitionDelay: '400ms' }}
            className={`transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
          >
            <Link
              to="/apply"
              className="group relative px-10 py-4 overflow-hidden border border-brand-gold/30 hover:border-brand-gold/60 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10 text-brand-gold text-sm font-sans font-bold tracking-[0.3em] uppercase">Start Application</span>
              <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-brand-gold/10 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;