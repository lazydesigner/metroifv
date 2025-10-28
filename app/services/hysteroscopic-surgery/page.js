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

export default function HysteroscopicSurgeryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Hysteroscopic Surgery' },
    { id: 'indications', title: 'Indications for Surgery' },
    { id: 'procedure', title: 'Surgical Procedure' },
    { id: 'benefits', title: 'Benefits of Hysteroscopy' },
    { id: 'recovery', title: 'Recovery & Aftercare' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Surgery Consultation' },
  ]

  return (
    <>
      <Head>
        <title>Hysteroscopic Surgery | Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Metro IVF Kanpur offers hysteroscopic surgery for uterine conditions and infertility, using minimally invasive techniques for safe and effective treatment."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hysteroscopic Surgery in Kanpur – Minimally Invasive & Precise
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF Kanpur provides advanced <strong>hysteroscopic surgery</strong> to diagnose and treat uterine conditions affecting fertility. 
              Our minimally invasive procedures ensure accurate treatment with faster recovery and minimal discomfort.
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
                    Discuss your hysteroscopic surgery options with our experienced specialists.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Hysteroscopic Surgery</h2>
                <p className="text-gray-600 mb-6">
                  Hysteroscopic surgery is a minimally invasive procedure that allows direct visualization and treatment of the uterine cavity. 
                  It is commonly used to diagnose and manage conditions like polyps, fibroids, adhesions, or congenital anomalies that affect fertility.
                </p>
                <p className="text-gray-600 mb-6">
                  Metro IVF Kanpur utilizes state-of-the-art hysteroscopes and expert surgical techniques to ensure precision and patient comfort.
                </p>
              </section>

              {/* Indications */}
              <section id="indications" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Indications for Surgery</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Uterine polyps or fibroids</li>
                  <li>Endometrial adhesions (Asherman’s syndrome)</li>
                  <li>Abnormal uterine bleeding</li>
                  <li>Congenital uterine anomalies</li>
                  <li>Investigation of recurrent pregnancy loss</li>
                  <li>Subfertility due to uterine factors</li>
                </ul>
              </section>

              {/* Procedure */}
              <section id="procedure" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Surgical Procedure</h2>
                <p className="text-gray-600 mb-6">
                  The surgery is performed under anesthesia using a thin, lighted instrument called a hysteroscope inserted through the cervix. 
                  This allows direct visualization of the uterine cavity and removal or correction of abnormalities without external incisions.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-blue-800">
                    Hysteroscopic surgery is precise, minimally invasive, and associated with faster recovery and minimal postoperative discomfort.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Hysteroscopy</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Minimally invasive with no external scars</li>
                  <li>Reduced pain and faster recovery</li>
                  <li>Accurate diagnosis and treatment of uterine abnormalities</li>
                  <li>Improves fertility outcomes in subfertile women</li>
                  <li>Short hospital stay with early return to routine activities</li>
                </ul>
              </section>

              {/* Recovery */}
              <section id="recovery" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Recovery & Aftercare</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Most patients resume normal activities within 1–2 days</li>
                  <li>Mild cramping or spotting may occur and is temporary</li>
                  <li>Follow-up visits ensure proper healing and effectiveness</li>
                  <li>Fertility advice or treatment planning may follow surgery</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Expert Surgeons', desc: 'Highly skilled in hysteroscopic procedures for fertility and gynecological care.' },
                    { title: 'Advanced Equipment', desc: 'State-of-the-art hysteroscopes and surgical instruments.' },
                    { title: 'Minimally Invasive', desc: 'Safe procedures with minimal discomfort and rapid recovery.' },
                    { title: 'Comprehensive Care', desc: 'From consultation to post-op follow-up, complete support.' },
                    { title: 'Personalized Approach', desc: 'Customized treatment plans based on individual diagnosis.' },
                    { title: 'Transparent Pricing', desc: 'Affordable and clear costs with no hidden charges.' },
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
                    q: 'Is hysteroscopic surgery safe?',
                    a: 'Yes, it is a minimally invasive procedure performed by experienced surgeons with advanced equipment.'
                  },
                  {
                    q: 'How long does the surgery take?',
                    a: 'Most procedures are completed within 30–60 minutes, depending on complexity.'
                  },
                  {
                    q: 'When can I resume normal activities?',
                    a: 'Light activities can usually resume within a day; full recovery is typically within a few days.'
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
                <h3 className="text-2xl font-bold mb-3">Book Your Surgery Consultation Today</h3>
                <p className="mb-6 text-primary-100">
                  Schedule a consultation with our experts to discuss hysteroscopic surgery options for fertility and uterine health.
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
