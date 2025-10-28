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

export default function EggFreezingServicePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Egg Freezing' },
    { id: 'process', title: 'How Egg Freezing Works' },
    { id: 'ideal-candidates', title: 'Who Should Consider Egg Freezing' },
    { id: 'benefits', title: 'Benefits of Egg Freezing' },
    { id: 'procedure', title: 'Step-by-Step Process' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Consultation' },
  ]

  return (
    <>
      <Head>
        <title>Egg Freezing in Kanpur | Preserve Your Fertility with Metro IVF</title>
        <meta
          name="description"
          content="Metro IVF Kanpur offers advanced egg freezing services using vitrification technology to help women preserve fertility for future family planning."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Egg Freezing in Kanpur – Secure Your Fertility for the Future
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF offers advanced <strong>Egg Freezing in Kanpur</strong> using cutting-edge vitrification 
              technology. This safe and reliable method allows women to preserve their eggs for future use, 
              ensuring peace of mind and reproductive freedom.
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
                    Book a consultation today and learn if egg freezing is right for you.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Egg Freezing</h2>
                <p className="text-gray-600 mb-6">
                  Egg freezing, or oocyte cryopreservation, is an advanced fertility preservation technique that 
                  allows women to freeze and store their healthy eggs for future use. The frozen eggs can later 
                  be thawed, fertilized, and transferred during IVF when you’re ready to start a family.
                </p>
                <p className="text-gray-600 mb-6">
                  At Metro IVF Kanpur, we use state-of-the-art vitrification methods that ensure the best 
                  survival rates for your eggs during freezing and thawing.
                </p>
              </section>

              {/* Process */}
              <section id="process" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Egg Freezing Works</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Ovarian stimulation to produce multiple mature eggs.</li>
                  <li>Egg retrieval procedure under mild sedation.</li>
                  <li>Freezing of eggs using vitrification (ultra-rapid cooling).</li>
                  <li>Storage in cryogenic tanks for long-term preservation.</li>
                  <li>Thawing and fertilization when you decide to use them.</li>
                </ul>
              </section>

              {/* Ideal Candidates */}
              <section id="ideal-candidates" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Consider Egg Freezing?</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Women who wish to delay pregnancy for personal or career reasons.</li>
                  <li>Those diagnosed with cancer or undergoing medical treatments affecting fertility.</li>
                  <li>Women with a family history of early menopause.</li>
                  <li>Couples not yet ready for conception but want to secure future fertility.</li>
                </ul>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Egg Freezing</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Preserves fertility during your peak reproductive years.</li>
                  <li>Provides flexibility to plan parenthood later in life.</li>
                  <li>Maintains high egg quality for future IVF use.</li>
                  <li>Offers emotional reassurance and peace of mind.</li>
                </ul>
              </section>

              {/* Procedure Steps */}
              <section id="procedure" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Egg Freezing Process</h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>Initial fertility evaluation and consultation.</li>
                  <li>Ovarian stimulation using hormonal medications.</li>
                  <li>Egg retrieval under ultrasound guidance.</li>
                  <li>Vitrification and storage of eggs in liquid nitrogen.</li>
                  <li>Future thawing and fertilization through IVF or ICSI.</li>
                </ol>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Advanced Vitrification', desc: 'Latest freezing technology with excellent survival rates.' },
                    { title: 'Experienced Embryologists', desc: 'Handled by specialists with over 30 years of IVF experience.' },
                    { title: 'Safe & Confidential', desc: 'We ensure complete privacy and safety during every step.' },
                    { title: 'Comprehensive Fertility Care', desc: 'From assessment to preservation and future IVF support.' },
                    { title: 'Affordable Pricing', desc: 'Transparent cost with high-quality medical care.' },
                    { title: 'Trusted by Hundreds', desc: 'Metro IVF has helped countless women preserve fertility successfully.' },
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
                    q: 'How long can my eggs be stored?',
                    a: 'Eggs can be safely stored for many years without losing quality when frozen through vitrification.'
                  },
                  {
                    q: 'Does egg freezing affect future fertility?',
                    a: 'No, the process is safe and does not impact your ability to conceive naturally later.'
                  },
                  {
                    q: 'Is egg retrieval painful?',
                    a: 'The procedure is performed under light sedation and is usually painless.'
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
                <h3 className="text-2xl font-bold mb-3">Book Your Egg Freezing Consultation</h3>
                <p className="mb-6 text-primary-100">
                  Preserve your fertility with Metro IVF Kanpur’s expert care and advanced technology.
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
