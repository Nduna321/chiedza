import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields (Name, Email, Phone)');
      return;
    }

    // Create email content
    const subject = `New Inquiry from ${formData.name} - Muneni Gated Community`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested In: ${formData.interest}\n\nMessage:\n${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:sales@muneniestates.co.zw?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the mailto link
    window.location.href = mailtoLink;
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
    }, 500);
  };

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
                Our team is ready to assist you with any questions and guide you through the process of securing your ideal property at Muneni Gated Community.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <a
                href="tel:+263789820527"
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="bg-amber-600 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Calls</h4>
                  <p className="text-gray-300 text-sm sm:text-base break-all">+263 78 982 0527</p>
                </div>
              </a>

              <a
                href="https://wa.me/263789220150?text=Hello%20Muneni%20Gated%20Community"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="bg-green-600 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">WhatsApp</h4>
                  <p className="text-gray-300 text-sm sm:text-base break-all">+263 78 922 0150</p>
                </div>
              </a>

              <a
                href="mailto:sales@muneniestates.co.zw"
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="bg-amber-600 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Email</h4>
                  <p className="text-gray-300 text-sm sm:text-base break-all">sales@muneniestates.co.zw</p>
                </div>
              </a>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10">
                <div className="bg-amber-600 w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Location</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Muneni Location, Karoi<br />Mashonaland West Province</p>
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
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400 text-sm"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400 text-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400 text-sm"
                  placeholder="+263"
                  required
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-xs sm:text-sm font-medium mb-2">I'm interested in</label>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white text-sm appearance-none cursor-pointer"
                  style={{
                    colorScheme: 'dark'
                  }}
                >
                  <option value="" className="bg-gray-800 text-white">Select an option</option>
                  <option value="residential" className="bg-gray-800 text-white">Residential Stand</option>
                  <option value="commercial" className="bg-gray-800 text-white">Commercial Stand</option>
                  <option value="investment" className="bg-gray-800 text-white">Investment Opportunity</option>
                  <option value="information" className="bg-gray-800 text-white">General Information</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
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
