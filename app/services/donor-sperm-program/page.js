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

export default function DonorSpermProgramServicePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Donor Sperm Program' },
    { id: 'who-should-consider', title: 'Who Should Consider Donor Sperm' },
    { id: 'procedure', title: 'Program Procedure' },
    { id: 'benefits', title: 'Benefits of the Program' },
    { id: 'eligibility', title: 'Eligibility Criteria' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Consultation' },
  ]

  return (
    <>
      <Head>
        <title>Donor Sperm Program | Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Metro IVF Kanpur offers a comprehensive Donor Sperm Program for couples and individuals facing male infertility, providing expert care and advanced techniques for successful conception."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Donor Sperm Program in Kanpur – Achieve Parenthood with Expert Care
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF Kanpur provides a reliable <strong>Donor Sperm Program</strong> for couples and individuals facing male infertility. 
              Our expert team ensures ethical donor selection and advanced treatment for higher chances of successful conception.
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
                  <h3 className="font-semibold text-gray-900 mb-3">Start Your Journey to Parenthood</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Schedule a consultation with our fertility specialists to explore the Donor Sperm Program.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Donor Sperm Program</h2>
                <p className="text-gray-600 mb-6">
                  The Donor Sperm Program is designed for couples and individuals facing male infertility or genetic concerns. 
                  Using screened donor sperm, the program enables successful conception through assisted reproductive technologies such as IUI or IVF.
                </p>
                <p className="text-gray-600 mb-6">
                  At Metro IVF Kanpur, our program combines ethical donor selection, advanced laboratory techniques, and personalized care to ensure the best outcomes.
                </p>
              </section>

              {/* Who Should Consider */}
              <section id="who-should-consider" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Consider Donor Sperm</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Men with low sperm count or poor sperm quality</li>
                  <li>Genetic disorders or risk of passing hereditary diseases</li>
                  <li>Previous IVF or IUI failures due to male factor infertility</li>
                  <li>Single women or same-sex female couples desiring pregnancy</li>
                </ul>
              </section>

              {/* Procedure */}
              <section id="procedure" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Procedure</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Initial consultation and fertility assessment</li>
                  <li>Screening and selection of compatible donor sperm</li>
                  <li>Fertility treatment through IUI or IVF</li>
                  <li>Embryo transfer (if IVF) and monitoring</li>
                  <li>Support and guidance during early pregnancy</li>
                </ul>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of the Program</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Enables pregnancy in cases of male infertility</li>
                  <li>Access to screened and healthy donor sperm</li>
                  <li>Personalized treatment plans for couples and individuals</li>
                  <li>Ethical, safe, and confidential process</li>
                  <li>Expert guidance throughout conception and early pregnancy</li>
                </ul>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Male factor infertility or genetic concerns</li>
                  <li>Good general health for the female partner</li>
                  <li>Commitment to follow medical guidance and monitoring</li>
                  <li>Single women or same-sex female couples eligible</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Ethical Donor Screening', desc: 'Rigorous health, genetic, and compatibility checks for all donors.' },
                    { title: 'Advanced Fertility Techniques', desc: 'IUI and IVF with donor sperm using state-of-the-art lab technology.' },
                    { title: 'Personalized Care', desc: 'Tailored programs based on patient requirements and medical history.' },
                    { title: 'Emotional Support', desc: 'Counseling and guidance throughout the treatment journey.' },
                    { title: 'Experienced Specialists', desc: 'Led by Dr. Neena Gupta with decades of fertility expertise.' },
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
                    q: 'Who can be a sperm donor?',
                    a: 'Donors are healthy men screened for medical, genetic, and psychological suitability.'
                  },
                  {
                    q: 'Is the process safe for both partners?',
                    a: 'Yes, the process is safe, ethical, and closely monitored by our specialists.'
                  },
                  {
                    q: 'Can single women use donor sperm?',
                    a: 'Yes, single women and same-sex female couples are eligible for the program.'
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
                  Take the first step towards parenthood with Metro IVF Kanpur’s Donor Sperm Program.
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
                      title: "Fertility Assessment",
                      excerpt: "Comprehensive fertility checkups to identify reproductive health issues.",
                      slug: "fertility-assessment"
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
