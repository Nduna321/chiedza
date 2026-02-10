import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Chiedza</h1>
              <p className="text-xs text-gray-600">by Muneni Group</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Features
            </a>
            <a href="#opportunities" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Opportunities
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Gallery
            </a>
            <a
              href="#contact"
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
                href="#features"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#opportunities"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Opportunities
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
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
