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

export default function FertilityPreservationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Fertility Preservation' },
    { id: 'who-should-consider', title: 'Who Should Consider Fertility Preservation' },
    { id: 'methods', title: 'Methods of Fertility Preservation' },
    { id: 'benefits', title: 'Benefits of Fertility Preservation' },
    { id: 'timing', title: 'Optimal Timing for Preservation' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Consultation' },
  ]

  return (
    <>
      <Head>
        <title>Fertility Preservation | Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Metro IVF Kanpur provides Fertility Preservation services including egg, sperm, and embryo freezing to safeguard future reproductive options."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fertility Preservation in Kanpur – Safeguard Your Future Parenthood
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF Kanpur offers <strong>Fertility Preservation</strong> services, including egg, sperm, and embryo freezing. 
              Preserve your reproductive options for the future with safe and advanced reproductive technology.
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
                  <h3 className="font-semibold text-gray-900 mb-3">Preserve Your Fertility</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Schedule a consultation with our fertility specialists to discuss fertility preservation options.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Fertility Preservation</h2>
                <p className="text-gray-600 mb-6">
                  Fertility preservation helps individuals safeguard their reproductive potential for the future. 
                  Metro IVF Kanpur provides advanced options such as egg freezing, sperm freezing, and embryo freezing to suit individual needs.
                </p>
                <p className="text-gray-600 mb-6">
                  Our specialists guide you through the preservation process with personalized planning, ensuring safety, effectiveness, and long-term storage.
                </p>
              </section>

              {/* Who Should Consider */}
              <section id="who-should-consider" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Consider Fertility Preservation</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Individuals undergoing medical treatments like chemotherapy or radiation</li>
                  <li>Women delaying pregnancy for personal or professional reasons</li>
                  <li>Men planning to postpone fatherhood</li>
                  <li>Couples wishing to secure reproductive options in advance</li>
                  <li>Individuals with declining fertility markers or genetic risks</li>
                </ul>
              </section>

              {/* Methods */}
              <section id="methods" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Methods of Fertility Preservation</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">For Women</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Egg freezing (Oocyte cryopreservation)</li>
                      <li>Embryo freezing</li>
                      <li>Ovarian tissue preservation (if medically indicated)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">For Men</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Sperm freezing (Semen cryopreservation)</li>
                      <li>Testicular tissue freezing (if required)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Fertility Preservation</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Secures reproductive options for future family planning</li>
                  <li>Provides peace of mind for individuals undergoing medical treatments</li>
                  <li>Preserves fertility potential with minimal risk</li>
                  <li>Enables flexibility in timing for conception</li>
                  <li>Supports assisted reproductive procedures when ready</li>
                </ul>
              </section>

              {/* Optimal Timing */}
              <section id="timing" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimal Timing for Preservation</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Women are encouraged to preserve eggs before age 35 for higher success rates</li>
                  <li>Men can freeze sperm at any age, preferably before fertility decline</li>
                  <li>Prior to medical treatments that may affect fertility</li>
                  <li>After a fertility assessment to determine the best approach</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Advanced Preservation Techniques', desc: 'State-of-the-art egg, sperm, and embryo freezing technology.' },
                    { title: 'Experienced Specialists', desc: 'Led by Dr. Neena Gupta with decades of fertility expertise.' },
                    { title: 'Personalized Counseling', desc: 'Tailored advice for optimal preservation strategies.' },
                    { title: 'Safe & Ethical Practices', desc: 'Ensuring compliance with international standards.' },
                    { title: 'Long-Term Storage', desc: 'Secure cryopreservation and monitoring facilities.' },
                    { title: 'Transparent Costs', desc: 'Affordable packages with no hidden charges.' },
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
                    q: 'Is fertility preservation safe?',
                    a: 'Yes, fertility preservation using modern cryopreservation techniques is safe and effective.'
                  },
                  {
                    q: 'How long can eggs, sperm, or embryos be stored?',
                    a: 'They can be stored for many years with proper monitoring and cryogenic conditions.'
                  },
                  {
                    q: 'Does freezing affect future pregnancy success?',
                    a: 'If done correctly, preserved gametes or embryos have excellent chances of successful conception.'
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
                  Preserve your fertility and plan your future parenthood with expert guidance from Metro IVF Kanpur.
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
                      title: "Egg Freezing",
                      excerpt: "Preserve eggs for future fertility using advanced freezing techniques.",
                      slug: "egg-freezing"
                    },
                    {
                      title: "Sperm Freezing",
                      excerpt: "Store sperm safely for future use in fertility treatments.",
                      slug: "male-infertility"
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
