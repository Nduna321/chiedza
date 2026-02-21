import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/20 backdrop-blur-lg shadow-md border-b border-white/20' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.jpeg" alt="Muneni logo" className="w-12 h-12 rounded-lg object-cover shadow-sm" />
            <div>
              <h1 className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-900'}`}>Muneni</h1>
              <p className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-600'}`}>by Muneni Group</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}>
              Home
            </a>
            <a href="/about" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}>
              About
            </a>
            <a href="/services" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}>
              Services
            </a>
            <a href="/gallery" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}>
              Gallery
            </a>
            <a href="/opportunities" className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}>
              Opportunities
            </a>
            <a
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a
                href="/"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/gallery"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="/opportunities"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Opportunities
              </a>
              <a
                href="/contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg font-semibold text-center transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
