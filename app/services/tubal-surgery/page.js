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

export default function TubalSurgeryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Tubal Surgery' },
    { id: 'indications', title: 'Indications for Surgery' },
    { id: 'procedure', title: 'Surgical Procedure' },
    { id: 'benefits', title: 'Benefits of Tubal Surgery' },
    { id: 'recovery', title: 'Recovery & Aftercare' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Consultation' },
  ]

  return (
    <>
      <Head>
        <title>Tubal Surgery | Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Metro IVF Kanpur provides tubal surgery for women with blocked or damaged fallopian tubes using minimally invasive techniques to improve fertility."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tubal Surgery in Kanpur – Restore Fertility with Precision
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF Kanpur offers <strong>tubal surgery</strong> for women with blocked or damaged fallopian tubes, 
              helping improve fertility outcomes using advanced minimally invasive surgical techniques.
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
                  <h3 className="font-semibold text-gray-900 mb-3">Schedule a Consultation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Discuss your tubal surgery options with our expert fertility specialists today.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Section */}
            <main className="lg:col-span-3 prose prose-lg max-w-none">
              
              {/* Overview */}
              <section id="overview" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Tubal Surgery</h2>
                <p className="text-gray-600 mb-6">
                  Tubal surgery is a minimally invasive procedure to repair or unblock fallopian tubes, 
                  which can help women with infertility conceive naturally or improve IVF success rates.
                </p>
                <p className="text-gray-600 mb-6">
                  At Metro IVF Kanpur, we use advanced laparoscopic techniques to ensure precision, minimal pain, and faster recovery for our patients.
                </p>
              </section>

              {/* Indications */}
              <section id="indications" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Indications for Surgery</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Blocked fallopian tubes diagnosed through HSG or laparoscopy</li>
                  <li>Hydrosalpinx or damaged tubes affecting fertility</li>
                  <li>History of pelvic infections or endometriosis</li>
                  <li>Failed fertility treatments due to tubal issues</li>
                </ul>
              </section>

              {/* Procedure */}
              <section id="procedure" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Surgical Procedure</h2>
                <p className="text-gray-600 mb-6">
                  Tubal surgery is performed laparoscopically under anesthesia. The surgeon carefully repairs or removes blockages in the fallopian tubes to restore fertility.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-blue-800">
                    The procedure is minimally invasive with small incisions, allowing quick recovery and minimal discomfort.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Tubal Surgery</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Restores tubal patency for natural conception</li>
                  <li>Improves chances of IVF success if tubes are damaged</li>
                  <li>Minimally invasive with smaller scars</li>
                  <li>Short recovery time and reduced pain</li>
                  <li>Reduces the need for extensive fertility medications</li>
                </ul>
              </section>

              {/* Recovery */}
              <section id="recovery" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Recovery & Aftercare</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Most patients can resume light activities within 1–2 days</li>
                  <li>Mild abdominal discomfort or spotting is normal</li>
                  <li>Follow-up visits ensure proper healing and tubal function</li>
                  <li>Fertility treatments can continue after recovery</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Expert Surgeons', desc: 'Specialists in laparoscopic tubal and fertility surgeries.' },
                    { title: 'Advanced Equipment', desc: 'High-precision laparoscopic instruments for better outcomes.' },
                    { title: 'Minimally Invasive', desc: 'Less pain, faster recovery, and minimal scarring.' },
                    { title: 'Comprehensive Care', desc: 'Complete support from consultation to post-op follow-up.' },
                    { title: 'Personalized Approach', desc: 'Tailored treatment plans based on individual fertility needs.' },
                    { title: 'Transparent Pricing', desc: 'Affordable treatment with no hidden costs.' },
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
                    q: 'Is tubal surgery safe?',
                    a: 'Yes, it is a minimally invasive procedure performed by experienced surgeons at Metro IVF.'
                  },
                  {
                    q: 'How long is the recovery period?',
                    a: 'Most patients resume light activities within 1–2 days; full recovery is usually within a week.'
                  },
                  {
                    q: 'Will tubal surgery improve my chances of conception?',
                    a: 'Yes, restoring tubal patency increases the chances of natural conception and improves IVF success rates.'
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
                <h3 className="text-2xl font-bold mb-3">Book Your Consultation Today</h3>
                <p className="mb-6 text-primary-100">
                  Schedule a consultation with our fertility specialists to discuss tubal surgery options and fertility planning.
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
                      title: "Ovarian Drilling",
                      excerpt: "Minimally invasive procedure for PCOS patients to restore ovulation.",
                      slug: "ovarian-drilling"
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
