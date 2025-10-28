'use client'
import { useState } from 'react'
import { Heart, Quote, Calendar, Baby, Star, Users } from 'lucide-react'
import AppointmentModal from '@/components/AppointmentModal'

export default function StoriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All Stories')

  const categories = ['All Stories', 'IVF Success', 'IUI Success', 'Male Factor', 'PCOS', 'Age 35+']

  const successStories = [
    {
      title: "After 7 Years of Waiting, Our Miracle Arrived",
      couple: "Priya & Raj Sharma",
      location: "Kanpur",
      treatment: "IVF",
      duration: "7 years trying, 2 IVF cycles",
      category: "IVF Success",
      story: "After 7 years of unsuccessful attempts to conceive naturally, we were losing hope. Multiple doctors had told us our case was complex due to blocked tubes and low sperm count. When we met Dr. Neena Gupta at Metro IVF, she gave us hope again. Her detailed explanation of our condition and the personalized IVF protocol made us confident. After two cycles, we were blessed with our beautiful daughter. Today, she's 2 years old and brings joy to our entire family.",
      outcome: "Healthy baby girl born",
      testimonial: "Dr. Neena Gupta didn't just treat us medically; she understood our emotional journey. The entire team at Metro IVF became our family during those challenging months.",
      date: "Success in 2023"
    },
    {
      title: "PCOS Couldn't Stop Our Dreams",
      couple: "Anjali & Vikash Singh",
      location: "Lucknow",
      treatment: "IVF",
      duration: "5 years with PCOS",
      category: "PCOS",
      story: "I was diagnosed with PCOS at 23, and doctors told me conception would be difficult. After 5 years of trying various treatments, we came to Metro IVF Hospital. Dr. Neena Gupta carefully managed my PCOS with lifestyle changes and medications before starting IVF. The team's approach was holistic - they didn't just focus on the medical aspect but also helped us emotionally.",
      outcome: "Twin boys born healthy",
      testimonial: "The day we held our twin boys was the happiest day of our lives. Metro IVF made the impossible possible.",
      date: "Success in 2024"
    },
    {
      title: "Male Factor Infertility Overcome",
      couple: "Sunita & Ramesh Gupta",
      location: "Allahabad",
      treatment: "ICSI",
      duration: "3 years trying",
      category: "Male Factor",
      story: "My husband had severe male factor infertility with very low sperm count. We were told IVF with ICSI was our only option. Dr. Bhaskar Gupta's expertise in male fertility gave us confidence. The ICSI procedure was successful in the first attempt, and we conceived our son. The care we received was exceptional throughout the process.",
      outcome: "Healthy baby boy",
      testimonial: "Dr. Bhaskar Gupta's knowledge in male fertility is outstanding. He explained everything clearly and made us feel comfortable.",
      date: "Success in 2024"
    },
    {
      title: "Hope After Multiple Miscarriages",
      couple: "Kavitha & Suresh Kumar",
      location: "Kanpur",
      treatment: "IVF with PGT",
      duration: "4 miscarriages over 6 years",
      category: "IVF Success",
      story: "After 4 heartbreaking miscarriages, we were devastated and scared to try again. Dr. Neena Gupta recommended genetic testing of embryos before transfer. Though it was emotionally challenging, the PGT process helped us identify healthy embryos. Our fifth pregnancy through IVF was successful, and we now have a healthy baby girl.",
      outcome: "Healthy baby girl after genetic testing",
      testimonial: "Metro IVF didn't give up on us when everyone else did. Their advanced testing capabilities saved our pregnancy.",
      date: "Success in 2023"
    },
    {
      title: "Success at 42 - Age is Just a Number",
      couple: "Meera & Ashok Agarwal",
      location: "Kanpur",
      treatment: "IVF",
      duration: "Started trying at 38",
      category: "Age 35+",
      story: "At 42, many doctors told me I was too old for IVF. Dr. Neena Gupta evaluated my case thoroughly and said we should try. With donor eggs and careful monitoring, we achieved pregnancy in our second cycle. Our journey taught us that age is just a number when you have the right medical team.",
      outcome: "Healthy pregnancy at 42",
      testimonial: "Dr. Neena Gupta believed in us when others didn't. Her expertise with older mothers is remarkable.",
      date: "Success in 2024"
    },
    {
      title: "IUI Success After Years of Trying",
      couple: "Ritu & Anil Mishra",
      location: "Fatehpur",
      treatment: "IUI",
      duration: "3 years trying naturally",
      category: "IUI Success",
      story: "We tried for 3 years without success. All tests seemed normal, but we just couldn't conceive. Dr. Neena Gupta suggested IUI as a less invasive first step. The third IUI cycle was successful, and we were overjoyed. Sometimes the simpler approach works best, and we're grateful we didn't need more complex treatments.",
      outcome: "Successful conception with IUI",
      testimonial: "The team at Metro IVF helped us understand that every fertility journey is unique. IUI worked perfectly for us.",
      date: "Success in 2024"
    }
  ]

  const filteredStories = selectedCategory === 'All Stories' 
    ? successStories 
    : successStories.filter(story => story.category === selectedCategory)

  const stats = [
    { icon: Heart, value: '5000+', label: 'Happy Families' },
    { icon: Baby, value: '6000+', label: 'Babies Born' },
    { icon: Star, value: '95%', label: 'Patient Satisfaction' },
    { icon: Users, value: '30+', label: 'Years Experience' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              IVF Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real journeys of hope, perseverance, and joy. Read inspiring stories from couples 
              who achieved their dreams of parenthood at Metro IVF Hospital Kanpur.
            </p>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center"
            >
              <Heart className="h-5 w-5 mr-2" />
              Start Your Story
            </button>
          </div>
        </div>
      </section>

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

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-primary-100 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="font-medium">{story.couple}</span>
                        <span className="mx-2">•</span>
                        <span>{story.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {story.date}
                      </div>
                    </div>
                    <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">
                      {story.treatment}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <p className="font-medium text-gray-900">{story.duration}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Outcome:</span>
                        <p className="font-medium text-green-600">{story.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed line-clamp-4">
                      {story.story}
                    </p>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <Quote className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-primary-800 italic">"{story.testimonial}"</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 font-medium">{story.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No stories found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our patients about their journey to parenthood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div key={index} className="bg-gray-200 rounded-xl overflow-hidden aspect-video flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Patient Testimonial {video}</p>
                  <p className="text-sm text-gray-500">Click to play video</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Your Success Story
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Your journey can inspire and give hope to other couples facing fertility challenges. 
            Share your story and help others believe in the possibility of parenthood.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Share Your Story
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Why These Stories Matter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why These Stories Matter
            </h2>
            <p className="text-xl text-gray-600">
              Every success story represents hope, perseverance, and the miracle of life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Hope for Others",
                description: "Each story gives hope to couples who are struggling with their fertility journey and feeling alone."
              },
              {
                icon: Users,
                title: "Real Experiences",
                description: "Authentic experiences from real patients help others understand what to expect during treatment."
              },
              {
                icon: Star,
                title: "Proof of Excellence",
                description: "These stories demonstrate the expertise and care provided by our medical team at Metro IVF."
              },
              {
                icon: Baby,
                title: "Celebrating Life",
                description: "Every baby born through our care represents a dream fulfilled and a family completed."
              },
              {
                icon: Quote,
                title: "Honest Testimonials",
                description: "Genuine feedback helps us continuously improve our services and patient care."
              },
              {
                icon: Calendar,
                title: "Journey Documentation",
                description: "Stories help other couples understand the timeline and process of fertility treatments."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let Metro IVF Hospital help you begin your journey to parenthood. With over 30 years 
            of experience and thousands of success stories, we're here to support you every step of the way.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center"
          >
            <Heart className="h-5 w-5 mr-2" />
            Begin Your Journey Today
          </button>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}