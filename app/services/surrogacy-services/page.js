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

export default function SurrogacyServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Surrogacy Services' },
    { id: 'who-should-consider', title: 'Who Should Consider Surrogacy' },
    { id: 'process', title: 'Surrogacy Process' },
    { id: 'benefits', title: 'Benefits of Surrogacy' },
    { id: 'eligibility', title: 'Eligibility Criteria' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Consultation' },
  ]

  return (
    <>
      <Head>
        <title>Surrogacy Services | Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Metro IVF Kanpur provides comprehensive Surrogacy Services with expert guidance, ethical practices, and advanced reproductive technology for couples who cannot carry pregnancy."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Surrogacy Services in Kanpur – Your Path to Parenthood
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF Kanpur offers reliable <strong>Surrogacy Services</strong> for couples facing infertility or medical challenges. 
              Our experienced team ensures ethical, safe, and personalized care throughout the surrogacy journey.
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
                  <h3 className="font-semibold text-gray-900 mb-3">Start Your Surrogacy Journey</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Schedule a consultation with our fertility specialists to explore surrogacy options.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Surrogacy Services</h2>
                <p className="text-gray-600 mb-6">
                  Surrogacy is a reproductive option for couples or individuals unable to carry pregnancy due to medical or fertility issues. 
                  Metro IVF Kanpur provides comprehensive surrogacy solutions with a focus on ethical practices, medical safety, and personalized care.
                </p>
                <p className="text-gray-600 mb-6">
                  Our experienced team guides you through every step, from legal formalities and donor/surrogate screening to embryo transfer and post-pregnancy support.
                </p>
              </section>

              {/* Who Should Consider */}
              <section id="who-should-consider" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Consider Surrogacy</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Women with medical conditions preventing pregnancy</li>
                  <li>Couples with recurrent pregnancy loss</li>
                  <li>Men with no viable sperm or severe infertility</li>
                  <li>Single women or same-sex couples desiring a child</li>
                  <li>Previous IVF failures where pregnancy could not be carried</li>
                </ul>
              </section>

              {/* Process */}
              <section id="process" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Surrogacy Process</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Initial consultation and fertility assessment</li>
                  <li>Selection and screening of surrogate candidates</li>
                  <li>Fertility treatment using IVF or donor gametes if required</li>
                  <li>Embryo transfer and monitoring of surrogate pregnancy</li>
                  <li>Birth and postnatal support</li>
                </ul>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Surrogacy</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Enables parenthood for those unable to conceive naturally</li>
                  <li>Access to screened and ethical surrogates</li>
                  <li>High success rates with advanced reproductive technology</li>
                  <li>Personalized care and emotional support throughout the journey</li>
                  <li>Transparent and safe process</li>
                </ul>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Medical reasons preventing natural pregnancy</li>
                  <li>Both partners in good general health</li>
                  <li>Commitment to follow medical guidance and monitoring</li>
                  <li>Single women or same-sex female couples are eligible</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Ethical & Legal Guidance', desc: 'Support with all legal aspects of surrogacy and contracts.' },
                    { title: 'Advanced Technology', desc: 'IVF and reproductive treatments using cutting-edge lab technology.' },
                    { title: 'Experienced Specialists', desc: 'Led by Dr. Neena Gupta with decades of fertility expertise.' },
                    { title: 'Personalized Care', desc: 'Tailored programs for each couple and individual.' },
                    { title: 'Emotional Support', desc: 'Counseling and guidance throughout the surrogacy journey.' },
                    { title: 'Transparent & Affordable', desc: 'Clear pricing and no hidden costs.' },
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
                    q: 'Is surrogacy legal in India?',
                    a: 'Yes, surrogacy is legal in India under the Surrogacy (Regulation) Act, 2021, for eligible couples.'
                  },
                  {
                    q: 'Can single women or same-sex couples opt for surrogacy?',
                    a: 'Yes, surrogacy services are available for single women and same-sex female couples as per regulations.'
                  },
                  {
                    q: 'What support is provided during pregnancy?',
                    a: 'Medical monitoring, emotional counseling, and regular checkups are provided throughout the surrogate’s pregnancy.'
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
                  Begin your journey to parenthood with Metro IVF Kanpur’s Surrogacy Services.
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
                      title: "IVF Treatment",
                      excerpt: "Advanced assisted reproduction technique with high success rates.",
                      slug: "ivf-treatment"
                    },
                    {
                      title: "Donor Egg Program",
                      excerpt: "Use of screened donor eggs to overcome infertility challenges.",
                      slug: "donor-egg-program"
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
