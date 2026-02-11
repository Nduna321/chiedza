import { Shield, MapPin, Building, Home, TrendingUp, CheckCircle, Zap, Users, Briefcase } from 'lucide-react';
import Footer from '../components/Footer';

const services = [
  {
    icon: Shield,
    title: 'Security Services',
    description: 'Round-the-clock professional security with controlled gate access, CCTV monitoring, and trained security personnel ensuring maximum safety for residents.',
  },
  {
    icon: MapPin,
    title: 'Prime Location Access',
    description: 'Strategic positioning in Karoi Town center with easy access to shops, hospitals, schools, and other essential services and amenities.',
  },
  {
    icon: Building,
    title: 'Infrastructure Development',
    description: 'Well-planned community with quality tar roads, water supply systems, electricity connections, and modern drainage infrastructure.',
  },
  {
    icon: Home,
    title: 'Property Options',
    description: 'Flexible stand sizes available for residential homes, commercial businesses, mixed-use properties, and investment opportunities.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Services',
    description: 'Expert guidance on property investment opportunities with transparent pricing, flexible payment plans, and long-term capital appreciation potential.',
  },
  {
    icon: CheckCircle,
    title: 'Professional Support',
    description: 'Complete support from land registration, legal documentation, surveying services to post-purchase maintenance and community management.',
  },
  {
    icon: Zap,
    title: 'Utility Services',
    description: 'Reliable electricity connections, clean water supply, telecommunications infrastructure, and waste management systems for all residents.',
  },
  {
    icon: Users,
    title: 'Community Management',
    description: 'Active community management committee ensuring proper maintenance, dispute resolution, and implementation of community policies and improvements.',
  },
  {
    icon: Briefcase,
    title: 'Business Support',
    description: 'Ideal commercial spaces for retail shops, offices, and service businesses with excellent foot traffic and visibility in the town center.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to support your investment and lifestyle at Chiedza Gated Community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 sm:p-12 border border-amber-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Quality Living?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl">
              Our dedicated team is ready to assist you with any questions about our services and help you find the perfect property at Chiedza Gated Community.
            </p>
            <a
              href="/contact"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
