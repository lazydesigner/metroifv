'use client'
import { useState, useEffect } from 'react'
import { Calendar, CheckCircle, Phone, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import AppointmentModal from './AppointmentModal'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Hero background images with overlay content
  const heroSlides = [
    {
      id: 1,
      title: "Your Journey to",
      subtitle: "Parenthood",
      highlight: "Starts Here",
      description: "Experience world-class fertility treatments at Metro IVF Hospital Kanpur. Led by Dr. Neena Gupta with over 30 years of expertise.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Modern IVF Laboratory"
    },
    {
      id: 2,
      title: "Advanced IVF",
      subtitle: "Technology",
      highlight: "International Standards",
      description: "State-of-the-art laboratory facilities with success rates comparable to leading international fertility centers.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Medical Equipment"
    },
    {
      id: 3,
      title: "30+ Years of",
      subtitle: "Excellence",
      highlight: "Trusted Expertise", 
      description: "Dr. Neena Gupta's proven track record with over 5,000 successful procedures and countless happy families.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      alt: "Happy Family"
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <>
      <section className="relative md:min-h-[640px] h-auto md:py-12 py-5 overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transform transition-transform duration-[6000ms] ease-out hover:scale-105"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                {/* Secondary Overlay for better text readability */}
                <div className="absolute inset-0 bg-primary-900/20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white shadow-lg scale-110'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Hero Text */}
              <div className="text-white">
                <div className={`transform transition-all duration-700 delay-300 ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="block animate-fade-in-up text-gray-100">
                      {currentSlideData.title}
                    </span>
                    <span className="block text-secondary-400 animate-fade-in-up animation-delay-200">
                      {currentSlideData.subtitle}
                    </span>
                    <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 animate-fade-in-up animation-delay-400 text-gray-100">
                      {currentSlideData.highlight}
                    </span>
                  </h1>
                </div>
                
                <div className={`transform transition-all duration-700 delay-500 ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                    {currentSlideData.description}
                  </p>
                </div>
                
                <div className={`transform transition-all duration-700 delay-700 ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-xl"
                    >
                      <Calendar className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Book Free Consultation
                    </button>
                    <a 
                      href="tel:09415134428"
                      className="group border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center flex items-center justify-center hover:scale-105"
                    >
                      <Phone className="h-5 w-5 mr-2 group-hover:ring-2 group-hover:ring-primary-600 group-hover:rounded-full group-hover:p-1 transition-all duration-300" />
                      Call Now
                    </a>
                  </div>
                </div>

                <div className={`transform transition-all duration-700 delay-900 ${
                  !isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-300">
                    <div className="flex items-center group hover:text-white transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      Free Initial Consultation
                    </div>
                    <div className="flex items-center group hover:text-white transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      30+ Years Experience
                    </div>
                    <div className="flex items-center group hover:text-white transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      International Standards
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Card */}
              <div className={`transform transition-all duration-700 delay-1000 ${
                !isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-center group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                      <div className="bg-primary-100 p-3 rounded-full mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                        <Phone className="h-6 w-6 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Call Now</p>
                        <a href="tel:09415134428" className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300">
                          094151 34428
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                      <div className="bg-primary-100 p-3 rounded-full mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                        <MapPin className="h-6 w-6 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Visit Us</p>
                        <p className="text-gray-600 text-sm">Near Gurudev Crossing, Lakhanpur, Kanpur</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                      <div className="bg-primary-100 p-3 rounded-full mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                        <Clock className="h-6 w-6 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Clinic Hours</p>
                        <p className="text-gray-600 text-sm">Mon-Sat: 9AM-6PM | Sun: 10AM-4PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mt-6 bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary-400/40 rounded-full animate-bounce animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> 
    </>
  )
}