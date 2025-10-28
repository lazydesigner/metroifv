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

export default function MaleInfertilityServicePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Male Infertility' },
    { id: 'causes', title: 'Common Causes' },
    { id: 'diagnosis', title: 'Diagnostic Tests' },
    { id: 'treatments', title: 'Treatment Options' },
    { id: 'prevention', title: 'Preventive Measures' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Consultation' },
  ]

  return (
    <>
      <Head>
        <title>Male Infertility Treatment in Kanpur | Metro IVF</title>
        <meta
          name="description"
          content="Metro IVF Kanpur provides comprehensive male infertility diagnosis and treatment options including semen analysis, hormone evaluation, and advanced reproductive therapies."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Male Infertility in Kanpur – Diagnosis & Treatment
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF offers expert evaluation and treatment for <strong>Male Infertility</strong>, 
              helping couples improve their chances of conception. Our advanced diagnostic tests identify 
              root causes and guide personalized treatment plans.
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
                  <h3 className="font-semibold text-gray-900 mb-3">Improve Your Fertility</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Schedule a consultation with our male fertility specialists today.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Male Infertility</h2>
                <p className="text-gray-600 mb-6">
                  Male infertility refers to a man’s inability to contribute to conception. It can result 
                  from low sperm count, poor sperm motility, abnormal morphology, hormonal imbalances, 
                  or genetic conditions. Early diagnosis is key to successful treatment.
                </p>
                <p className="text-gray-600 mb-6">
                  Metro IVF Kanpur provides comprehensive male fertility evaluation, helping identify underlying 
                  causes and recommend targeted treatment options for effective results.
                </p>
              </section>

              {/* Causes */}
              <section id="causes" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Causes of Male Infertility</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Low sperm count or poor motility</li>
                  <li>Hormonal imbalances (FSH, LH, Testosterone)</li>
                  <li>Varicocele or testicular issues</li>
                  <li>Genetic abnormalities</li>
                  <li>Sexual or ejaculation problems</li>
                  <li>Lifestyle factors (smoking, alcohol, stress)</li>
                  <li>Previous infections or surgeries affecting fertility</li>
                </ul>
              </section>

              {/* Diagnostic Tests */}
              <section id="diagnosis" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Diagnostic Tests</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Semen analysis (count, motility, morphology)</li>
                  <li>Hormone profiling (FSH, LH, Testosterone, Prolactin)</li>
                  <li>Scrotal and testicular ultrasound</li>
                  <li>Genetic screening if required</li>
                  <li>Infection screening and advanced sperm function tests</li>
                </ul>
              </section>

              {/* Treatments */}
              <section id="treatments" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Options</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Lifestyle modifications and nutritional guidance</li>
                  <li>Medication for hormonal or sperm production issues</li>
                  <li>Surgical correction of varicocele or obstruction</li>
                  <li>Assisted reproduction: IUI or IVF/ICSI</li>
                  <li>Advanced sperm retrieval techniques for severe cases</li>
                </ul>
              </section>

              {/* Prevention */}
              <section id="prevention" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Preventive Measures</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Maintain a healthy lifestyle and diet</li>
                  <li>Avoid smoking, excessive alcohol, and recreational drugs</li>
                  <li>Manage stress and maintain regular exercise</li>
                  <li>Avoid exposure to environmental toxins</li>
                  <li>Seek early evaluation if fertility concerns arise</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Comprehensive Evaluation', desc: 'All male fertility diagnostics under one roof.' },
                    { title: 'Expert Specialists', desc: 'Led by Dr. Neena Gupta with 30+ years of experience.' },
                    { title: 'Advanced Lab Testing', desc: 'High-accuracy semen and hormonal analyses.' },
                    { title: 'Personalized Treatment', desc: 'Tailored plans based on your diagnosis and needs.' },
                    { title: 'Affordable & Transparent', desc: 'Clear pricing with no hidden costs.' },
                    { title: 'Confidential & Supportive', desc: 'Patient privacy and emotional support ensured.' },
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
                    q: 'Can male infertility be treated?',
                    a: 'Yes, most male infertility cases can be effectively managed with lifestyle changes, medications, surgery, or assisted reproductive technologies.'
                  },
                  {
                    q: 'How long does diagnosis take?',
                    a: 'Initial evaluation and tests typically take 1–2 visits depending on the complexity.'
                  },
                  {
                    q: 'Does age affect male fertility?',
                    a: 'Yes, sperm quality and count can decline with age, but treatments can still be effective.'
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
                <h3 className="text-2xl font-bold mb-3">Book Your Male Fertility Consultation</h3>
                <p className="mb-6 text-primary-100">
                  Take charge of your reproductive health with Metro IVF Kanpur’s expert care.
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
                      excerpt: "Comprehensive fertility checkups to identify reproductive health issues.",
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
