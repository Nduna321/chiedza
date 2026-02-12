import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-amber-600 w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">Chiedza</h3>
                <p className="text-xs text-gray-400">Gated Community</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed hidden sm:block">
              Secure modern living in Karoi Town by Muneni Group.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-2 text-amber-400">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="text-gray-400 hover:text-amber-500 transition-colors text-xs">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-amber-500 transition-colors text-xs">
                  Services
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-400 hover:text-amber-500 transition-colors text-xs">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-amber-500 transition-colors text-xs">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-2 text-amber-400">Contact</h4>
            <ul className="space-y-1">
              <li className="flex items-start gap-1.5 text-xs">
                <Phone className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+263778455410" className="text-gray-400 hover:text-amber-500 transition-colors break-all">
                  +263 77 845 5410
                </a>
              </li>
              <li className="flex items-start gap-1.5 text-xs">
                <Mail className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@muneniestates.co.zw" className="text-gray-400 hover:text-amber-500 transition-colors break-all">
                  info@muneniestates.co.zw
                </a>
              </li>
              <li className="flex items-start gap-1.5 text-xs">
                <MapPin className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Karoi, Mashonaland West
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-2 text-amber-400">Hours</h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li><span className="text-white font-semibold">Mon-Fri:</span> 8AM-5PM</li>
              <li><span className="text-white font-semibold">Sat:</span> 9AM-1PM</li>
              <li><span className="text-white font-semibold">Sun:</span> Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-3 sm:pt-4 text-center">
          <p className="text-gray-400 text-xs">
            {new Date().getFullYear()} Chiedza Gated Community. By Muneni Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
