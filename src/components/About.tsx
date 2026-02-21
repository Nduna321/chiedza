import { Award, Building2, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block bg-amber-100 text-amber-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              Muneni Group Development
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              A New Standard of Living in Karoi
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Muneni Group is proud to present Muneni Gated Community, an exclusive development that redefines modern living in Karoi Town. This prestigious project offers a rare opportunity to own a piece of paradise in a secure, contemporary neighborhood.
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Nestled in a prime location, Muneni provides seamless access to Karoi Town's essential amenities, educational institutions, and thriving business centers, all while maintaining a peaceful, secure environment where families and businesses flourish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-4 sm:p-5 bg-gray-50 rounded-lg sm:rounded-xl">
                <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Premium</h3>
                <p className="text-xs sm:text-sm text-gray-600">Infrastructure</p>
              </div>
              <div className="text-center p-4 sm:p-5 bg-gray-50 rounded-lg sm:rounded-xl">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Quality</h3>
                <p className="text-xs sm:text-sm text-gray-600">Development</p>
              </div>
              <div className="text-center p-4 sm:p-5 bg-gray-50 rounded-lg sm:rounded-xl">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600 mx-auto mb-2 sm:mb-3" />
                <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Community</h3>
                <p className="text-xs sm:text-sm text-gray-600">Focused</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="space-y-2 sm:space-y-4">
                <img
                  src="/m2.jpeg"
                  alt="Construction progress"
                  className="w-full h-40 sm:h-64 object-cover rounded-lg sm:rounded-2xl shadow-md sm:shadow-xl"
                />
                <img
                  src="/m3.jpeg"
                  alt="Community development"
                  className="w-full h-32 sm:h-48 object-cover rounded-lg sm:rounded-2xl shadow-md sm:shadow-xl"
                />
              </div>
              <div className="space-y-2 sm:space-y-4 pt-4 sm:pt-8">
                <img
                  src="/m4.jpeg"
                  alt="Perimeter wall"
                  className="w-full h-32 sm:h-48 object-cover rounded-lg sm:rounded-2xl shadow-md sm:shadow-xl"
                />
                <img
                  src="/m5.jpeg"
                  alt="Site development"
                  className="w-full h-40 sm:h-64 object-cover rounded-lg sm:rounded-2xl shadow-md sm:shadow-xl"
                />
              </div>
            </div>

            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-amber-600 text-white p-4 sm:p-8 rounded-lg sm:rounded-2xl shadow-lg sm:shadow-2xl max-w-xs z-10">
              <p className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">2026</p>
              <p className="text-xs sm:text-base text-amber-100">Construction in Progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
