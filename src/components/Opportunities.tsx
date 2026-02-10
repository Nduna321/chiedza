import { Users, Briefcase, Building2, Home } from 'lucide-react';

const opportunities = [
  {
    icon: Users,
    title: 'For Families',
    description: 'Build your dream home in a safe, family-friendly environment with access to quality schools and amenities.',
    highlights: ['Secure neighborhood', 'Family-oriented', 'Quality schools nearby'],
  },
  {
    icon: Briefcase,
    title: 'For Investors',
    description: 'Capitalize on prime commercial and residential stands with excellent returns in a rapidly developing area.',
    highlights: ['High ROI potential', 'Growing market', 'Prime location'],
  },
  {
    icon: Building2,
    title: 'For Developers',
    description: 'Access ready-to-develop stands perfect for residential complexes or mixed-use developments.',
    highlights: ['Flexible zoning', 'Established infrastructure', 'Market demand'],
  },
  {
    icon: Home,
    title: 'For Business Owners',
    description: 'Establish your business in a thriving community with high foot traffic and excellent visibility.',
    highlights: ['Commercial stands', 'Strategic location', 'Growing clientele'],
  },
];

export default function Opportunities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Opportunities for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to build your dream home, grow your investment portfolio, or establish your business, Chiedza has the perfect opportunity for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-amber-500 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="bg-amber-600 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <opportunity.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{opportunity.description}</p>
                  <ul className="space-y-2">
                    {opportunity.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
