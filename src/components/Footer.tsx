import React from 'react';
import { Link } from 'react-router-dom';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <img 
                  src="/Studio-Project-removebg-preview.png" 
                  alt="Code Vista Global Logo" 
                  className="h-10 w-10 object-contain bg-white rounded-lg p-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold">Code Vista Global</h3>
                <p className="text-sm text-gray-300">Study Abroad Consultancy</p>
              </div>
            </div>
            <p className="text-gray-300 font-opensans">
              Empowering students to achieve their global education dreams. 
              Your trusted partner for international education success with offices in USA and India.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="h-5 w-5 text-gray-300 hover:text-gold cursor-pointer transition-colors" />
              <FaTwitter className="h-5 w-5 text-gray-300 hover:text-gold cursor-pointer transition-colors" />
              <FaInstagram className="h-5 w-5 text-gray-300 hover:text-gold cursor-pointer transition-colors" />
              <FaLinkedin className="h-5 w-5 text-gray-300 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-opensans">
              <li><Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-gold transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 font-opensans text-gray-300">
              <li>University Selection</li>
              <li>Application Processing</li>
              <li>Visa Guidance</li>
              <li>Scholarship Assistance</li>
              <li>Test Preparation</li>
              <li>Pre-Departure Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 font-opensans">
              <div className="flex items-center space-x-3">
                <HiPhone className="h-5 w-5 text-gold" />
                <span className="text-gray-300">+1-571-249-2658</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiMail className="h-5 w-5 text-gold" />
                <span className="text-gray-300">info@codevistaglobal.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="h-5 w-5 text-gold mt-1" />
                <div className="text-gray-300">
                  <p>828 Kinwest Pkwy</p>
                  <p>Irving, Texas 75063</p>
                  <p className="text-sm mt-1">USA Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 font-opensans text-sm">
              <span className='text-gold'>© 2024 Code Vista Global.</span> All rights reserved. | Developed by <a href="https://narendra-kumar.vercel.app/" className="text-gold hover:text-gold/80 transition-colors">Narendra Kumar</a>
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4 text-sm text-gray-300">
              <span className="bg-green-500 w-2 h-2 rounded-full inline-block"></span>
              <span>Operating in USA & India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;