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

export default function RecurrentPregnancyLossServicePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Recurrent Pregnancy Loss' },
    { id: 'causes', title: 'Causes and Risk Factors' },
    { id: 'diagnosis', title: 'Diagnostic Evaluation' },
    { id: 'treatments', title: 'Treatment Options' },
    { id: 'prevention', title: 'Preventive Measures' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Consultation' },
  ]

  return (
    <>
      <Head>
        <title>Recurrent Pregnancy Loss Treatment | Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Metro IVF Kanpur provides comprehensive diagnosis and treatment for recurrent pregnancy loss, helping couples achieve successful pregnancies through advanced fertility care."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recurrent Pregnancy Loss in Kanpur – Diagnosis & Care
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF provides expert evaluation and treatment for <strong>Recurrent Pregnancy Loss (RPL)</strong>, 
              helping couples understand underlying causes and improve the chances of a successful pregnancy.
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
                  <h3 className="font-semibold text-gray-900 mb-3">Get Expert Guidance</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Schedule a consultation with our specialists for recurrent pregnancy loss today.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Recurrent Pregnancy Loss</h2>
                <p className="text-gray-600 mb-6">
                  Recurrent Pregnancy Loss (RPL) is defined as two or more consecutive pregnancy losses before 20 weeks of gestation. 
                  It can affect both men and women and may have multiple underlying causes including genetic, hormonal, anatomical, 
                  immunological, or lifestyle-related factors.
                </p>
                <p className="text-gray-600 mb-6">
                  Metro IVF Kanpur offers comprehensive evaluation to determine the exact cause and provide personalized treatment plans 
                  to help couples achieve a successful pregnancy.
                </p>
              </section>

              {/* Causes */}
              <section id="causes" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Causes and Risk Factors</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Chromosomal or genetic abnormalities in either partner</li>
                  <li>Hormonal imbalances (thyroid, progesterone deficiency)</li>
                  <li>Uterine abnormalities (fibroids, septum, scar tissue)</li>
                  <li>Autoimmune or clotting disorders</li>
                  <li>Advanced maternal age</li>
                  <li>Lifestyle factors: smoking, alcohol, stress, obesity</li>
                  <li>Male factors: low sperm quality or genetic defects</li>
                </ul>
              </section>

              {/* Diagnostic Evaluation */}
              <section id="diagnosis" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Diagnostic Evaluation</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Detailed medical and pregnancy history review</li>
                  <li>Hormonal testing for both partners</li>
                  <li>Genetic screening and karyotyping</li>
                  <li>Ultrasound or hysteroscopy to evaluate uterine structure</li>
                  <li>Immunological and clotting disorder tests if required</li>
                </ul>
              </section>

              {/* Treatments */}
              <section id="treatments" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Options</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Hormonal therapy and supplementation</li>
                  <li>Surgical correction for uterine abnormalities</li>
                  <li>Immunotherapy or anticoagulants for clotting disorders</li>
                  <li>Assisted reproductive techniques: IUI, IVF, or IVF with preimplantation genetic testing (PGT)</li>
                  <li>Lifestyle modification and counseling support</li>
                </ul>
              </section>

              {/* Preventive Measures */}
              <section id="prevention" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Preventive Measures</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Early fertility evaluation after two pregnancy losses</li>
                  <li>Maintain healthy lifestyle and manage stress</li>
                  <li>Regular medical checkups and hormonal monitoring</li>
                  <li>Follow specialist’s advice for treatment and monitoring during pregnancy</li>
                  <li>Genetic counseling if required</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Comprehensive Evaluation', desc: 'All necessary tests for recurrent pregnancy loss in one center.' },
                    { title: 'Experienced Specialists', desc: 'Led by Dr. Neena Gupta with decades of fertility expertise.' },
                    { title: 'Advanced Lab & Imaging', desc: 'Modern technology ensures accurate diagnosis.' },
                    { title: 'Personalized Treatment', desc: 'Customized plans based on cause and patient needs.' },
                    { title: 'Confidential & Supportive', desc: 'Emotional support and patient privacy are our priority.' },
                    { title: 'Affordable Packages', desc: 'Transparent pricing with no hidden costs.' },
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
                    q: 'What is considered recurrent pregnancy loss?',
                    a: 'Two or more consecutive pregnancy losses before 20 weeks of gestation are considered RPL.'
                  },
                  {
                    q: 'Can recurrent pregnancy loss be treated?',
                    a: 'Yes, with proper diagnosis and personalized treatment, many couples can achieve successful pregnancies.'
                  },
                  {
                    q: 'How long does evaluation take?',
                    a: 'Comprehensive evaluation typically takes 1–2 weeks depending on required tests.'
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
                  Take control of your reproductive health with Metro IVF Kanpur’s expert care.
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
