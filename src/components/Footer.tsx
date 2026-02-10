import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Chiedza</h3>
                <p className="text-xs text-gray-400">Gated Community</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your gateway to secure, modern living in the heart of Karoi Town. A proud development by Muneni Group.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#opportunities" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Opportunities
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+263778455410" className="text-gray-400 hover:text-amber-500 transition-colors">
                  +263 77 845 5410
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@muneniestates.co.zw" className="text-gray-400 hover:text-amber-500 transition-colors">
                  info@muneniestates.co.zw
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Chiedza Location, Karoi<br />Mashonaland West Province
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Monday - Friday</li>
              <li className="text-white">8:00 AM - 5:00 PM</li>
              <li className="mt-3">Saturday</li>
              <li className="text-white">9:00 AM - 1:00 PM</li>
              <li className="mt-3">Sunday</li>
              <li className="text-white">Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {new Date().getFullYear()} Chiedza Gated Community. Developed by Muneni Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
