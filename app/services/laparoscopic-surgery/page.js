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

export default function LaparoscopicSurgeryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Laparoscopic Surgery' },
    { id: 'indications', title: 'Indications for Surgery' },
    { id: 'procedure', title: 'Surgical Procedure' },
    { id: 'benefits', title: 'Benefits of Laparoscopy' },
    { id: 'recovery', title: 'Recovery & Aftercare' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Surgery Consultation' },
  ]

  return (
    <>
      <Head>
        <title>Laparoscopic Surgery | Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Metro IVF Kanpur offers minimally invasive laparoscopic surgery for infertility and gynecological conditions with expert care and advanced technology."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Laparoscopic Surgery in Kanpur – Minimally Invasive & Safe
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF Kanpur provides advanced <strong>laparoscopic surgery</strong> for infertility and gynecological conditions. 
              Our minimally invasive procedures ensure faster recovery and optimal outcomes.
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
                    Discuss your laparoscopic surgery options with our experienced specialists.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Laparoscopic Surgery</h2>
                <p className="text-gray-600 mb-6">
                  Laparoscopic surgery is a minimally invasive technique used to diagnose and treat gynecological and infertility-related conditions. 
                  Small incisions and specialized instruments allow precise treatment with minimal pain and faster recovery.
                </p>
                <p className="text-gray-600 mb-6">
                  Metro IVF Kanpur employs advanced laparoscopic technology and experienced surgeons to ensure safe, effective, and comfortable procedures.
                </p>
              </section>

              {/* Indications */}
              <section id="indications" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Indications for Surgery</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Endometriosis treatment</li>
                  <li>Ovarian cyst removal</li>
                  <li>Fallopian tube blockage repair</li>
                  <li>Uterine fibroid removal</li>
                  <li>Diagnosis of infertility causes</li>
                  <li>Adhesion removal for better fertility outcomes</li>
                </ul>
              </section>

              {/* Procedure */}
              <section id="procedure" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Surgical Procedure</h2>
                <p className="text-gray-600 mb-6">
                  The procedure is performed under general anesthesia. A small incision is made near the navel for the laparoscope, 
                  and additional tiny incisions are made for surgical instruments. High-definition cameras allow precise visualization 
                  and treatment of reproductive organs.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-blue-800">
                    The minimally invasive nature of laparoscopy reduces postoperative pain, shortens hospital stay, and accelerates return to daily activities.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Laparoscopy</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Minimally invasive with small incisions</li>
                  <li>Reduced pain and bleeding</li>
                  <li>Shorter hospital stay and faster recovery</li>
                  <li>Better fertility outcomes for reproductive procedures</li>
                  <li>High precision with advanced surgical tools</li>
                </ul>
              </section>

              {/* Recovery */}
              <section id="recovery" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Recovery & Aftercare</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Most patients return to normal activities within 1–2 weeks</li>
                  <li>Pain and discomfort are managed with medication</li>
                  <li>Follow-up consultations are provided to monitor healing</li>
                  <li>Lifestyle modifications and fertility guidance may be advised</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Expert Surgeons', desc: 'Led by highly experienced laparoscopic specialists.' },
                    { title: 'Advanced Technology', desc: 'High-definition laparoscopic equipment for precise procedures.' },
                    { title: 'Minimally Invasive', desc: 'Small incisions reduce pain and speed recovery.' },
                    { title: 'Comprehensive Care', desc: 'From pre-surgery consultation to post-op follow-ups.' },
                    { title: 'Personalized Approach', desc: 'Tailored surgical plans based on individual conditions.' },
                    { title: 'Transparent Costs', desc: 'Affordable and clear pricing with no hidden charges.' },
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
                    q: 'Is laparoscopic surgery safe?',
                    a: 'Yes, it is a minimally invasive procedure performed by experienced surgeons with advanced equipment.'
                  },
                  {
                    q: 'How long is the hospital stay?',
                    a: 'Most patients are discharged within 1–2 days depending on the procedure.'
                  },
                  {
                    q: 'When can I resume normal activities?',
                    a: 'Light activities can usually be resumed within a few days; full recovery is typically 1–2 weeks.'
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
                  Schedule a consultation with our experts to discuss laparoscopic surgery options for infertility and gynecological conditions.
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
                      excerpt: "Comprehensive fertility evaluation for couples facing infertility.",
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
