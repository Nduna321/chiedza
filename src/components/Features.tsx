import { Shield, MapPin, Building, Home, TrendingUp, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure & Gated',
    description: 'Round-the-clock security with controlled access ensuring peace of mind for you and your family.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Strategically positioned in the heart of Karoi Town with easy access to all major amenities and services.',
  },
  {
    icon: Building,
    title: 'Modern Infrastructure',
    description: 'Well-planned development with quality roads, utilities, and essential infrastructure in place.',
  },
  {
    icon: Home,
    title: 'Flexible Options',
    description: 'Choose from various stand sizes suitable for residential homes, commercial ventures, or rental properties.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Value',
    description: 'Prime real estate opportunity with excellent potential for capital appreciation in a growing area.',
  },
  {
    icon: CheckCircle,
    title: 'Trusted Developer',
    description: 'Developed by Muneni Group, a reputable name committed to quality and timely project delivery.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Chiedza?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of security, convenience, and modern living in Karoi's most promising gated community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
