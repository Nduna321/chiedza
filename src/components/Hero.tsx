import { MapPin, Shield, Home } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/WhatsApp_Image_2026-02-09_at_16.16.30.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 min-h-screen flex items-center">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 backdrop-blur-sm border border-amber-600/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <Shield className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span className="text-amber-500 text-xs sm:text-sm font-medium">Premium Gated Community</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Welcome to<br />
            <span className="text-amber-500">Chiedza</span> Gated Community
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-gray-200 mb-3 sm:mb-4 leading-relaxed max-w-2xl">
            Your gateway to secure, modern living in the heart of Karoi Town
          </p>

          <div className="flex items-center gap-2 text-gray-300 mb-6 sm:mb-8">
            <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span className="text-sm sm:text-base lg:text-lg">Karoi Town, Mashonaland West Province</span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16">
            <a
              href="#contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
            >
              Reserve Your Stand
            </a>
            <a
              href="#features"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 border border-white/20 text-center"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-amber-500 flex-shrink-0" />
                <span className="text-2xl sm:text-3xl font-bold text-white">100%</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Secure & Gated</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <Home className="w-4 sm:w-5 h-4 sm:h-5 text-amber-500 flex-shrink-0" />
                <span className="text-2xl sm:text-3xl font-bold text-white">Prime</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Location</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-amber-500 flex-shrink-0" />
                <span className="text-2xl sm:text-3xl font-bold text-white">Central</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Access</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
}
