import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Heart, Award, Users } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Clinic Info - Takes 2 columns on large screens */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12  rounded-lg flex items-center justify-center">
                
                    <img src='/images/logo.png'/>
              </div>
              <div className="ml-3">
                <h2 className="text-2xl text-[#DC0000] font-bold">Metro IVF Hospital</h2>
                <p className="text-gray-300">Leading Fertility Care in Kanpur</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              With over 30 years of experience, Metro IVF Hospital provides comprehensive fertility treatments 
              with world-class care and internationally comparable success rates. Your journey to parenthood starts here.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Visit Our Clinic</p>
                  <p className="text-gray-400 text-sm">
                    10A, GT Rd, near Gurudev Crossing,<br />
                    Lakhanpur, Khyora, Kanpur,<br />
                    Uttar Pradesh 208024
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary-400" />
                <div>
                  <p className="text-gray-300 font-medium">Call Us</p>
                  <a 
                    href="tel:09415134428" 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    094151 34428
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-400" />
                <div>
                  <p className="text-gray-300 font-medium">Email Us</p>
                  <a 
                    href="mailto:drneenaguptametro@gmail.com" 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    drneenaguptametro@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">5000+</div>
                <div className="text-xs text-gray-400">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">30+</div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">95%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Our Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/doctors" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Fertility Experts</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Blog</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/stories" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">IVF Stories</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Gallery</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-gray-300 text-sm flex items-center">
                <Heart className="h-3 w-3 mr-2 text-primary-400" />
                IVF Treatment
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <Heart className="h-3 w-3 mr-2 text-primary-400" />
                IUI Treatment
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <Heart className="h-3 w-3 mr-2 text-primary-400" />
                Fertility Assessment
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <Heart className="h-3 w-3 mr-2 text-primary-400" />
                Egg Freezing
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <Heart className="h-3 w-3 mr-2 text-primary-400" />
                Male Infertility Care
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <Heart className="h-3 w-3 mr-2 text-primary-400" />
                Genetic Counseling
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-white">Clinic Hours</h3>
            <div className="flex items-start mb-4">
              <Clock className="h-5 w-5 mt-1 mr-3 text-primary-400 flex-shrink-0" />
              <div>
                <p className="text-gray-300 text-sm font-medium mb-1">Working Hours</p>
                <div className="text-gray-400 text-sm space-y-1">
                  <p>Monday - Saturday</p>
                  <p className="font-medium text-gray-300">9:00 AM - 6:00 PM</p>
                  <p>Sunday</p>
                  <p className="font-medium text-gray-300">10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-primary-900 bg-opacity-50 rounded-lg p-3 border border-primary-800">
              <p className="text-primary-200 text-xs font-medium mb-1">24/7 Emergency</p>
              <p className="text-white text-sm">For ongoing treatment emergencies</p>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mb-6 lg:mb-0">
              <p className="text-gray-300 text-sm mr-2">Follow Us:</p>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright & Legal */}
            <div className="text-gray-400 text-sm text-center lg:text-right">
              <p className="mb-2">
                &copy; {currentYear} Metro IVF Hospital. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end space-y-1 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/privacy" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <span className="hidden sm:inline">|</span>
                <Link 
                  href="/terms" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <span className="hidden sm:inline">|</span>
                <Link 
                  href="/contact" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="border-t border-gray-800 mt-6 pt-6">
            <div className="text-center">
              <p className="text-gray-500 text-xs mb-2">
                Licensed Fertility Center | Govt. of Uttar Pradesh Registration
              </p>
              <p className="text-gray-500 text-xs">
                Metro IVF Hospital - Your trusted partner in the journey to parenthood.
                <span className="text-primary-400 ml-1">❤️</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}