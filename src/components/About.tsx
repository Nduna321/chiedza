import { Building2, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Muneni Group Development
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              A New Standard of Living in Karoi
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Muneni Group is proud to present Chiedza Gated Community, an exclusive development that redefines modern living in Karoi Town. This prestigious project offers a rare opportunity to own a piece of paradise in a secure, contemporary neighborhood.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nestled in a prime location, Chiedza provides seamless access to Karoi Town's essential amenities, educational institutions, and thriving business centers, all while maintaining a peaceful, secure environment where families and businesses flourish.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Building2 className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Premium</h3>
                <p className="text-sm text-gray-600">Infrastructure</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Quality</h3>
                <p className="text-sm text-gray-600">Development</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Community</h3>
                <p className="text-sm text-gray-600">Focused</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/WhatsApp_Image_2026-02-09_at_16.16.05.jpeg"
                  alt="Construction progress"
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
                <img
                  src="/WhatsApp_Image_2026-02-09_at_16.16.04.jpeg"
                  alt="Community development"
                  className="w-full h-48 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/WhatsApp_Image_2026-02-09_at_16.16.06.jpeg"
                  alt="Perimeter wall"
                  className="w-full h-48 object-cover rounded-2xl shadow-xl"
                />
                <img
                  src="/WhatsApp_Image_2026-02-09_at_16.16.27_(1).jpeg"
                  alt="Site development"
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-amber-600 text-white p-8 rounded-2xl shadow-2xl max-w-xs z-10">
              <p className="text-4xl font-bold mb-2">2026</p>
              <p className="text-amber-100">Construction in Progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
