'use client'
import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Navigation,
  Send,
  MessageCircle,
  Calendar,
  User,
  CheckCircle
} from 'lucide-react'
import AppointmentModal from '@/components/AppointmentModal'

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'phone'
  })

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Contact form submitted:', contactForm)
    alert('Thank you for your message! We will get back to you within 24 hours.')
    
    // Reset form
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      preferredContact: 'phone'
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['094151 34428'],
      description: 'Call us for immediate assistance',
      action: 'tel:09415134428'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['drneenaguptametro@gmail.com'],
      description: 'Send us your queries anytime',
      action: 'mailto:drneenaguptametro@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '10A, GT Rd, near Gurudev Crossing,',
        'Lakhanpur, Khyora, Kanpur,',
        'Uttar Pradesh 208024'
      ],
      description: 'Visit our clinic for consultation',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 6:00 PM',
        'Sunday: 10:00 AM - 4:00 PM'
      ],
      description: 'We are here to help during these hours',
      action: null
    }
  ]

  const faqs = [
    {
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment by calling us at 094151 34428, using our online booking system, or visiting our clinic directly. We recommend calling in advance to ensure your preferred time slot.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'We accept various insurance plans. Please contact our office with your insurance details, and we will verify your coverage and help you understand your benefits.'
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring your identification, insurance cards, any previous medical records related to fertility, list of current medications, and any test results from other doctors.'
    },
    {
      question: 'How long is the initial consultation?',
      answer: 'The initial consultation typically takes 45-60 minutes. This allows our doctors sufficient time to review your medical history, discuss your concerns, and develop a treatment plan.'
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'For medical emergencies related to ongoing fertility treatments, please call our emergency number. For general emergencies, please visit the nearest emergency room.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with Metro IVF Hospital for consultations, appointments, or any questions 
              about fertility treatments. We're here to support you on your journey to parenthood.
            </p>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Quick Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mb-4">{info.description}</p>
                {info.action && (
                  <a 
                    href={info.action}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    {info.title === 'Phone' && 'Call Now'}
                    {info.title === 'Email' && 'Send Email'}
                    {info.title === 'Address' && 'Get Directions'}
                    <Navigation className="h-4 w-4 ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-6 w-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-1" />
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4 inline mr-1" />
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject*
                  </label>
                  <select
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Initial Consultation</option>
                    <option value="ivf">IVF Treatment Inquiry</option>
                    <option value="iui">IUI Treatment Inquiry</option>
                    <option value="male-fertility">Male Fertility Concerns</option>
                    <option value="second-opinion">Second Opinion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={contactForm.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Phone</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={contactForm.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Email</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Tell us about your fertility concerns or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Metro IVF Hospital</h3>
                    <p className="text-gray-600 text-sm">
                      10A, GT Rd, near Gurudev Crossing<br />
                      Lakhanpur, Khyora, Kanpur<br />
                      Uttar Pradesh 208024
                    </p>
                    <button className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      Open in Maps
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Contact Options</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <Phone className="h-8 w-8 text-green-600 mr-4" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Emergency Contact</h4>
                      <p className="text-sm text-gray-600">For urgent fertility-related concerns</p>
                    </div>
                    <a 
                      href="tel:09415134428"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                  
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <Calendar className="h-8 w-8 text-blue-600 mr-4" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Book Appointment</h4>
                      <p className="text-sm text-gray-600">Schedule your consultation online</p>
                    </div>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>

                  <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                    <MessageCircle className="h-8 w-8 text-purple-600 mr-4" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">WhatsApp Support</h4>
                      <p className="text-sm text-gray-600">Quick queries and support</p>
                    </div>
                    <a 
                      href="https://wa.me/919415134428"
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about appointments and our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for?
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
            Ready to Start Your Fertility Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Don't wait to take the first step. Contact Metro IVF Hospital today and let our 
            experienced team guide you toward achieving your dream of parenthood.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule Consultation
            </button>
            <a 
              href="tel:09415134428"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: 094151 34428
            </a>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}