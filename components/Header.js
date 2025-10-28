'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Calendar, ChevronDown } from 'lucide-react'
import AppointmentModal from './AppointmentModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/services' },
    { name: 'Fertility Experts', href: '/doctors' },
    { name: 'Blog', href: '/blog' },
    { name: 'IVF Stories', href: '/stories' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' }
  ]

  const services = [
    'Tubal Surgery',
    'Surrogacy Services',
    'Recurrent Pregnancy Loss',
    'Ovarian Drilling',
    'Nutritional Guidance',
    'Male Infertility',
    'Laparoscopic Surgery',
    'IVF Treatment',
    'IUI Treatment',
    'Hysteroscopic Surgery',
    'Fertility Preservation',
    'Fertility Counseling',
    'Fertility Assessment',
    'Egg Freezing',
    'Donor Sperm Program',
    'Donor Egg Program'
  ]

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  <a href="tel:09415134428" className="hover:text-primary-200">
                    094151 34428
                  </a>
                </div>
                <div className="hidden md:block">
                  <a href="mailto:drneenaguptametro@gmail.com" className="hover:text-primary-200">
                    drneenaguptametro@gmail.com
                  </a>
                </div>
              </div>
              <div className="text-xs">
                10A, GT Rd, Lakhanpur, Kanpur
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center">
                    <img src='/images/logo.png'/>
                  </div>
                  <div className="ml-3">
                    <h1 className="text-xl font-bold text-[#DC0000]">Metro IVF</h1>
                    <p className="text-xs text-[#DC0000]">Hospital</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-4 relative">
              {navigation.map((item) => {
                if (item.name === 'Our Services') {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link href='/services'>
                      <button className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                        {item.name}
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button></Link>
                      {isServicesOpen && (
                        <div className="absolute left-0  w-[500px] bg-white shadow-lg border rounded-lg p-4 grid grid-cols-2 gap-4 z-50">
                          {services.map((service) => (
                            <Link
                              key={service}
                              href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-gray-700 hover:text-primary-600 text-sm block"
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                } else {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )
                }
              })}
            </nav>

            {/* Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
              </button>

              {/* Mobile menu toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-primary-600 focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
{isMenuOpen && (
  <div className="md:hidden bg-white border-t">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navigation.map((item) => {
        if (item.name === 'Our Services') {
          return (
            <div key={item.name} className="space-y-1">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex justify-between items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium"
              >
                {item.name}
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 grid grid-cols-1 gap-1">
                  {services.map((service) => (
                    <Link
                      key={service}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-700 hover:text-primary-600 block px-3 py-1 text-sm"
                      onClick={() => {
                        setIsMenuOpen(false)     // close main menu
                        setIsServicesOpen(false) // close services dropdown
                      }}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        } else {
          return (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsMenuOpen(false)} // close menu
            >
              {item.name}
            </Link>
          )
        }
      })}
    </div>
  </div>
)}

      </header>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
