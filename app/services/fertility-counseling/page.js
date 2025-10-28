'use client'
import { useState } from 'react'
import Link from 'next/link'
import {  
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight 
} from 'lucide-react'
import AppointmentModal from '@/components/AppointmentModal'
import Head from 'next/head'

export default function FertilityCounselingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Fertility Counseling' },
    { id: 'benefits', title: 'Benefits of Counseling' },
    { id: 'approach', title: 'Our Counseling Approach' },
    { id: 'when-to-consult', title: 'When to Seek Fertility Counseling' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Counseling Session' },
  ]

  return (
    <>
      <Head>
        <title>Fertility Counseling | Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Metro IVF Kanpur offers fertility counseling to guide couples through emotional, psychological, and treatment-related aspects of infertility for better outcomes."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fertility Counseling in Kanpur – Emotional & Treatment Support
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF Kanpur provides <strong>fertility counseling</strong> to help couples navigate the emotional, psychological, 
              and medical challenges of infertility, ensuring informed decisions and better outcomes.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                  <ul className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <li key={index}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Schedule Counseling</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Connect with our expert counselors for guidance and emotional support during your fertility journey.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
                  >
                    Book Counseling
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Section */}
            <main className="lg:col-span-3 prose prose-lg max-w-none">
              
              {/* Overview */}
              <section id="overview" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Fertility Counseling</h2>
                <p className="text-gray-600 mb-6">
                  Fertility counseling helps couples manage the emotional stress of infertility and understand the medical options available. 
                  Our counselors provide a safe, supportive environment to discuss concerns and guide decision-making.
                </p>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Fertility Counseling</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Reduces stress and anxiety associated with infertility</li>
                  <li>Provides guidance on treatment options and decisions</li>
                  <li>Improves communication and emotional support for couples</li>
                  <li>Increases confidence and adherence to fertility treatments</li>
                  <li>Helps cope with unsuccessful cycles or IVF failures</li>
                </ul>
              </section>

              {/* Counseling Approach */}
              <section id="approach" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Counseling Approach</h2>
                <p className="text-gray-600 mb-6">
                  Metro IVF Kanpur combines professional psychological counseling with practical guidance on fertility treatments. 
                  Each session is personalized to the couple's needs and emotional state.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-blue-800">
                    Our goal is to empower couples to make informed choices while maintaining emotional well-being throughout their fertility journey.
                  </p>
                </div>
              </section>

              {/* When to Consult */}
              <section id="when-to-consult" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Seek Fertility Counseling</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Before starting fertility treatments</li>
                  <li>After multiple failed conception attempts</li>
                  <li>Experiencing stress, anxiety, or emotional distress related to infertility</li>
                  <li>Couples needing guidance for treatment decisions or coping strategies</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Experienced Counselors', desc: 'Trained psychologists and fertility counselors to support emotional well-being.' },
                    { title: 'Personalized Sessions', desc: 'Tailored guidance according to your medical and emotional needs.' },
                    { title: 'Integrated Approach', desc: 'Combination of counseling and treatment planning for better outcomes.' },
                    { title: 'Confidential & Supportive', desc: 'A safe environment to openly discuss sensitive issues.' },
                    { title: 'Evidence-Based Guidance', desc: 'Counseling based on scientific research and clinical experience.' },
                    { title: 'Affordable Sessions', desc: 'Transparent pricing for accessible support.' },
                  ].map((item, index) => (
                    <div key={index} className="bg-primary-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section id="faq" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                {[ 
                  {
                    q: 'What is fertility counseling?',
                    a: 'It is professional guidance to help couples cope with emotional, psychological, and treatment-related challenges of infertility.'
                  },
                  {
                    q: 'Who can attend counseling sessions?',
                    a: 'Both partners are encouraged to attend, but individual sessions are also available.'
                  },
                  {
                    q: 'Is counseling confidential?',
                    a: 'Yes, all discussions are confidential and handled professionally.'
                  },
                ].map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-6 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </section>

              {/* CTA */}
              <section id="book-now" className="text-center bg-primary-600 text-white rounded-lg p-10">
                <h3 className="text-2xl font-bold mb-3">Book Your Fertility Counseling Session Today</h3>
                <p className="mb-6 text-primary-100">
                  Receive expert guidance and emotional support from our fertility counselors for a confident journey toward parenthood.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book Free Consultation
                </button>
              </section>

              {/* Contact Info */}
              <section className="bg-gray-50 rounded-lg p-8 mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Metro IVF Hospital</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">094151 34428</p>
                      <p className="text-sm text-gray-500">Call for appointments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">drneenaguptametro@gmail.com</p>
                      <p className="text-sm text-gray-500">Send us your queries</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">10A, GT Rd, near Gurudev Crossing, Lakhanpur, Kanpur, Uttar Pradesh 208024</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Services */}
              <section className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Fertility Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    {
                      title: "Fertility Assessment",
                      excerpt: "Comprehensive fertility evaluation for couples facing infertility.",
                      slug: "fertility-assessment"
                    },
                    {
                      title: "IVF Treatment",
                      excerpt: "Advanced assisted reproduction technique with high success rates.",
                      slug: "ivf-treatment"
                    }
                  ].map((service, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{service.excerpt}</p>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="text-primary-600 font-medium text-sm flex items-center hover:text-primary-700"
                      >
                        View Service <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </article>

      {/* Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
