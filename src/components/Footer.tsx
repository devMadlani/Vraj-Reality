import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Vraj Realty</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect property. We deliver
              exceptional service and expertise in real estate.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <Facebook size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/vraj_realty99"
                target="_blank"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <img src="/images/insta.svg" alt="insta" />
              </a>
              <a
                href="https://www.linkedin.com/in/vraj-realty-0336163b5"
                target="_blank"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <img src="/images/linkedin.svg" alt="Linkedin" />
              </a>
            </div>
          </div>

          {/* <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  Buy Property
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  Sell Property
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  Rent Property
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  Property Management
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-emerald-500 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  204, Unity Corner, NR. V4U Circle, NR. H P Petrol Pump, TP 10
                  Main Road, L.P.Savani Circle TO Gaurav Path Road, Pal Gam,
                  Surat - 395009, Gujarat - India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400">+91 7203007569</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-500 flex-shrink-0" />
                <span className="text-gray-400 break-all">
                  yourspace.vrajrealty99@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h4 className="text-lg font-semibold text-white mb-4">Find Us</h4>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.8925039303824!2d72.77431054203613!3d21.200697900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dc93851f1c5%3A0xc39c14d82cf28856!2sUNITY%20CORNER!5e0!3m2!1sen!2sin!4v1772119235914!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vraj Realty Location"
            ></iframe>

            {/* Get Directions Button Overlay */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=6Q2G+7CF,+TP+10+Main+Rd,+Pal+Gam,+Surat,+Gujarat+394510,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group-hover:scale-105 transform"
              >
                <MapPin size={18} className="animate-pulse" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Vraj Realty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
