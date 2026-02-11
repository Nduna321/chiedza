import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Ready to Secure Your Future?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Don't miss this opportunity to be part of Karoi's most exciting development. Contact us today to reserve your stand or schedule a site visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                Our team is ready to assist you with any questions and guide you through the process of securing your ideal property at Chiedza Gated Community.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <a
                href="tel:+263778455410"
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="bg-amber-600 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Phone</h4>
                  <p className="text-gray-300 text-sm sm:text-base break-all">+263 77 845 5410</p>
                </div>
              </a>

              <a
                href="mailto:info@muneniestates.co.zw"
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="bg-amber-600 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Email</h4>
                  <p className="text-gray-300 text-sm sm:text-base break-all">info@muneniestates.co.zw</p>
                </div>
              </a>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10">
                <div className="bg-amber-600 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Location</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Chiedza Location, Karoi<br />Mashonaland West Province</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10">
                <div className="bg-amber-600 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Business Hours</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-lg sm:rounded-2xl border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Request Information</h3>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400 text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400 text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400 text-sm"
                  placeholder="+263"
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-xs sm:text-sm font-medium mb-2">I'm interested in</label>
                <select
                  id="interest"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white text-sm"
                >
                  <option value="">Select an option</option>
                  <option value="residential">Residential Stand</option>
                  <option value="commercial">Commercial Stand</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="information">General Information</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400 text-sm"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
