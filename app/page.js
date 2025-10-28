'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Heart,
  Award,
  Users,
  Star,
  Calendar,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  User
} from 'lucide-react'
import AppointmentModal from '@/components/AppointmentModal'
import HeroSection from '@/components/HeroSection'
import Slider from '@/components/Slider'




export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const serviceSlides = [
    {
      image: '/images/blog23.jpg'
    },
    {
      image: '/images/eggfreezing-698x480.jpg-1-1.jpg'
    },
    {
      image: '/images/hysteroscopic-surgery.jpg'
    },
    {
      image: '/images/laparoscopic-surgery-by-dr.-sunil-tibrewal.jpg'
    },
    {
      image: '/images/tOMtM8XCky0MmyKDCjXHLA5NAQFRzHvkxmS5MAv0.jpg'
    },
    {
      image: '/images/ultrasound-scan.jpg'
    },
    {
      image: '/images/e4f09ccb-b360-44a2-8eaa-36da3eb07c5e.jpg'
    }
  ]

  const blogPosts = [
    {
      title: 'IVF Success Rates: What You Need to Know',
      excerpt: 'Understanding IVF success rates and factors that influence your chances of conception with expert insights from Metro IVF Hospital.',
      date: 'September 15, 2025',
      readTime: '6 min read',
      author: 'Dr. Bhaskar Gupta',
      slug: 'ivf-success-rates-explained',
      category: 'IVF Treatment',
      image:'/images/e4f09ccb-b360-44a2-8eaa-36da3eb07c5e.jpg'
    },
    {
      title: 'PCOS and Fertility: Managing Your Reproductive Health',
      excerpt: 'How PCOS affects fertility and effective management strategies to improve your chances of natural conception.',
      date: 'August 30, 2025',
      readTime: '6 min read',
      author: 'Dr. Neena Gupta',
      slug: 'pcos-fertility-management',
      category: 'Women\'s Health',
      image:'/images/pcos.jpg'
    },
    {
      title: 'Male Infertility: Causes and Modern Treatments',
      excerpt: 'Comprehensive guide to male fertility issues, diagnostic approaches, and advanced treatment options available in Kanpur.',
      date: 'September 5, 2025',
      readTime: '7 min read',
      author: 'Dr. Bhaskar Gupta',
      slug: 'male-infertility-causes-treatments',
      category: 'Male Fertility',
      image:'/images/male-infertility-1.jpg'
    }
  ]

  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Families' },
    { icon: Award, value: '30+', label: 'Years Experience' },
    { icon: Heart, value: '95%', label: 'Success Rate' },
    { icon: Star, value: '4.9/5', label: 'Patient Rating' }
  ]

  const services = [
    {
      title: 'IVF Treatment',
      description: 'Advanced In Vitro Fertilization with cutting-edge technology',
      features: ['Personalized protocols', 'Latest lab equipment', 'High success rates']
    },
    {
      title: 'IUI Treatment',
      description: 'Intrauterine Insemination for couples with specific fertility issues',
      features: ['Less invasive', 'Cost-effective', 'Quick procedure']
    },
    {
      title: 'Fertility Assessment',
      description: 'Comprehensive evaluation to identify fertility challenges',
      features: ['Detailed testing', 'Expert analysis', 'Treatment planning']
    },
    {
      title: 'Fertility Preservation',
      description: 'Comprehensive fertility preservation services for men and women to secure future parenthood options.',
      features: [
        'Egg, sperm, and embryo freezing',
        'Cryopreservation with advanced storage technology',
        'Ideal for cancer patients or delayed parenthood'
      ]
    },
    {
      title: 'Laparoscopic Surgery',
      description: 'Minimally invasive laparoscopic procedures for accurate diagnosis and treatment of reproductive conditions.',
      features: [
        'Smaller incisions and faster recovery',
        'High-precision surgical instruments',
        'Effective for cysts, endometriosis, and fibroids'
      ]
    },
    {
      title: 'Hysteroscopic Surgery',
      description: 'Advanced hysteroscopic procedures for diagnosing and treating intrauterine abnormalities with precision.',
      features: [
        'No external incisions',
        'Quick recovery and minimal discomfort',
        'Effective for polyps, fibroids, and adhesions'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Priya & Raj Sharma',
      text: 'After 5 years of trying, Dr. Neena Gupta made our dream come true. Our baby is now 2 years old and perfectly healthy.',
      rating: 5
    },
    {
      name: 'Anjali & Vikash Singh',
      text: 'The care and support we received was exceptional. Metro IVF gave us hope when we had lost all faith.',
      rating: 5
    },
    {
      name: 'Sunita & Ramesh Gupta',
      text: 'Professional, caring, and results-oriented. We are forever grateful for the team at Metro IVF.',
      rating: 5
    }
  ]

  return (
    <>
      {/* Hero Section */}

      <HeroSection />

      {/* <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Journey to
                <span className="text-primary-600 block">Parenthood</span>
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience world-class fertility treatments at Metro IVF Hospital Kanpur. 
                Led by Dr. Neena Gupta with over 30 years of expertise, we offer personalized 
                care with internationally comparable success rates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Free Consultation
                </button>
                <Link 
                  href="/contact"
                  className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200 text-center"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Free Initial Consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  30+ Years Experience
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  International Standards
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary-600 mr-4" />
                    <div>
                      <p className="font-semibold">Call Now</p>
                      <a href="tel:09415134428" className="text-primary-600">094151 34428</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-primary-600 mr-4" />
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-gray-600 text-sm">Near Gurudev Crossing, Lakhanpur, Kanpur</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-primary-600 mr-4" />
                    <div>
                      <p className="font-semibold">Clinic Hours</p>
                      <p className="text-gray-600 text-sm">Mon-Sat: 9AM-6PM | Sun: 10AM-4PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Fertility Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fertility treatments tailored to your unique needs with
              the latest technology and personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="text-primary-600 font-semibold flex items-center hover:text-primary-700"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center"
            >
              View All Services <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Expert Team
              </h2>
              <p className="text-lg text-gray-600 mb-16">
                Led by Dr. Neena Gupta and Dr. Bhaskar Gupta, our team brings decades
                of experience in reproductive medicine. We combine cutting-edge technology
                with compassionate care to help families achieve their dreams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6 gap-18 mb-8 mt-8">
                {/* Dr. Neena Gupta */}
                <div className="relative bg-primary-50 rounded-xl p-6 pt-14 shadow-md overflow-visible">
                  {/* Image Half Out */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                    <img
                      src="/images/dr-neena-gupta.jpg"
                      alt="Dr. Neena Gupta"
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="text-center md:mt-1 mt-7">
                    <h3 className="font-semibold text-gray-900 mb-2">Dr. Neena Gupta</h3>
                    <p className="text-sm text-gray-600 mb-3">Senior Fertility Specialist</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• 30+ years experience</li>
                      <li>• IVF specialist</li>
                      <li>• International training</li>
                    </ul>
                  </div>
                </div>

                {/* Dr. Bhaskar Gupta */}
                <div className="relative bg-secondary-50 rounded-xl p-6 pt-14 shadow-md overflow-visible">
                  {/* Image Half Out */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                    <img
                      src="/images/dr-bhaskar-gupta.jpg"
                      alt="Dr. Bhaskar Gupta"
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="text-center md:mt-1 mt-7">
                    <h3 className="font-semibold text-gray-900 mb-2">Dr. Bhaskar Gupta</h3>
                    <p className="text-sm text-gray-600 mb-3">Reproductive Endocrinologist</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Male fertility expert</li>
                      <li>• Advanced procedures</li>
                      <li>• Research publications</li>
                    </ul>
                  </div>
                </div>
              </div>


              <Link
                href="/doctors"
                className="text-primary-600 font-semibold flex items-center hover:text-primary-700"
              >
                Meet Our Complete Team <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Choose Metro IVF?</h3>
              <div className="space-y-4">
                {[
                  'State-of-the-art laboratory facilities',
                  'Personalized treatment protocols',
                  'Transparent pricing with no hidden costs',
                  'Emotional support throughout your journey',
                  'High success rates comparable to international standards',
                  'Convenient location in heart of Kanpur'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Slider
            slides={serviceSlides}
            variant="card"
            autoPlay={true}
            autoPlayInterval={4000}
            showNavigation={true}
            showPagination={true}
            className=" w-auto mx-auto"
          />
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/pregnancy-announcement_53876-677881.jpg"
              alt="Our Medical Team"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from the families we've helped create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/stories"
              className="text-primary-600 font-semibold flex items-center justify-center hover:text-primary-700"
            >
              Read More Success Stories <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">
            Ready to Start Your Fertility Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Take the first step towards parenthood with a free consultation at Metro IVF Hospital.
            Our experts are here to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Free Consultation
            </button>
            <a
              href="tel:09415134428"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: 094151 34428
            </a>
          </div>
        </div>
      </section>

      
      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  {/* <div className="text-center">
                    <div className="w-16 h-16 bg-primary-200 rounded-lg mx-auto mb-2 flex items-center justify-center"> */}
                      {/* <span className="text-primary-600 font-bold">{index + 1}</span> */}
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    {/* </div>
                    <p className="text-gray-600 text-sm">Blog Post Image</p>
                  </div> */}
                </div>
                
                <div className="p-6"> 
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 font-medium text-sm hover:text-primary-700 flex items-center"
                    >
                      Read More <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div> 
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Link href='/blog'><button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
              Load More Articles
            </button></Link>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}