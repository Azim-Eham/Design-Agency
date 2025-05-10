import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-800 text-gray-200'>
        <div className='container mx-auto pt-16 pb-8 px-4 md:px-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                {/*Company Info*/}
                <div>
                    <h3 className='text-2xl font-bold mb-6 text-blue-500'>
                        Azim <span className='text-gray-200'>Studio</span>
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        We create captivating and conversion-oriented digital experiences. Everything we do is motivated by our love of design.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-3">
                    <li>
                        <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</Link>
                    </li>
                    <li>
                        <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Services</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="text-gray-300 hover:text-primary-400 transition-colors">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</Link>
                    </li>
                    </ul>
                </div>
                {/* Services */}
                <div>
                    <h4 className="text-lg font-semibold mb-6">Services</h4>
                    <ul className="space-y-3">
                    <li>
                        <Link to="/services/web-design" className="text-gray-300 hover:text-primary-400 transition-colors">Web Design</Link>
                    </li>
                    <li>
                        <Link to="/services/branding" className="text-gray-300 hover:text-primary-400 transition-colors">Branding</Link>
                    </li>
                    <li>
                        <Link to="/services/ui-ux" className="text-gray-300 hover:text-primary-400 transition-colors">UI/UX Design</Link>
                    </li>
                    <li>
                        <Link to="/services/marketing" className="text-gray-300 hover:text-primary-400 transition-colors">Digital Marketing</Link>
                    </li>
                    </ul>
                </div>
                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4">
                    <li className="flex items-start">
                        <MapPin size={20} className="text-primary-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Azim Villa, Chittagong, Bangladesh</span>
                    </li>
                    <li className="flex items-center">
                        <Phone size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                        <a href="tel:+15551234567" className="text-gray-300 hover:text-primary-400 transition-colors">0123456789</a>
                    </li>
                    <li className="flex items-center">
                        <Mail size={20} className="text-primary-400 mr-3 flex-shrink-0" />
                        <a href="mailto:hello@Azimstudio.com" className="text-gray-300 hover:text-primary-400 transition-colors">xyz@gmai.com</a>
                    </li>
                    </ul>
                </div>

            </div>
            {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 text-center lg:flex lg:items-center lg:justify-between">
          <p className="text-gray-400 text-sm mb-4 lg:mb-0">
            &copy; {currentYear} Azim Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-2 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-primary-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer