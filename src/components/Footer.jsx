import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/learn.png" 
                alt="Learn Miles Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              At LEARN MILES, (PAY ECHO SOLUTIONS PRIVATE LIMITED), we bridge the gap between learning and success by delivering high-quality training programs and strategic career mentorship.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-navy-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-navy-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-navy-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-navy-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Online Courses</li>
              <li className="text-gray-300">Live Webinars</li>
              <li className="text-gray-300">Career Mentoring</li>
              <li className="text-gray-300">Certification</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">support@learnmiles.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">77996 84747</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 leading-relaxed">
                  Flat no: 401, Plot no HIG 115, INTURI CHAMBERS, 6th Phase, 
                  KPHB Colony, Kukatpally, Hyderabad-500085
                </span>
              </div>
            </div>
          </div>
        </div>

          <div className="border-t border-navy-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} LEARN MILES (PAY ECHO SOLUTIONS PRIVATE LIMITED). All rights reserved. |
            <span className="text-amber-400 ml-1">
              Transforming Ambition into Achievement
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

