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

export default function DonorEggProgramServicePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Donor Egg Program' },
    { id: 'who-should-consider', title: 'Who Should Consider Donor Eggs' },
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
        <title>Donor Egg Program | Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Metro IVF Kanpur offers a comprehensive Donor Egg Program to help women with fertility challenges achieve successful pregnancies through expert care and advanced technology."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Donor Egg Program in Kanpur – Helping You Achieve Parenthood
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF Kanpur offers a trusted <strong>Donor Egg Program</strong> for women facing fertility challenges. 
              Our expert team provides personalized care and advanced techniques to maximize your chances of successful conception.
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
                    Consult our specialists to explore the Donor Egg Program and increase your chances of conception.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Donor Egg Program</h2>
                <p className="text-gray-600 mb-6">
                  The Donor Egg Program is designed for women who cannot use their own eggs due to age, ovarian failure, or other fertility issues. 
                  Using healthy donor eggs, the program allows couples and individuals to achieve pregnancy through assisted reproductive techniques.
                </p>
                <p className="text-gray-600 mb-6">
                  At Metro IVF Kanpur, our program ensures full medical evaluation, ethical donor selection, and personalized treatment plans to maximize success.
                </p>
              </section>

              {/* Who Should Consider */}
              <section id="who-should-consider" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Consider Donor Eggs</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Women above 40 years seeking pregnancy</li>
                  <li>Premature ovarian failure or low ovarian reserve</li>
                  <li>Repeated IVF failures due to poor egg quality</li>
                  <li>Genetic disorders or risk of passing on inheritable diseases</li>
                  <li>Other fertility challenges affecting egg quality</li>
                </ul>
              </section>

              {/* Procedure */}
              <section id="procedure" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Procedure</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Initial consultation and fertility evaluation</li>
                  <li>Donor matching based on medical and personal criteria</li>
                  <li>Egg retrieval from the donor under expert supervision</li>
                  <li>Fertilization with partner sperm via IVF</li>
                  <li>Embryo transfer to the recipient uterus</li>
                  <li>Monitoring and support through early pregnancy</li>
                </ul>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of the Program</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Higher chances of pregnancy for women with compromised egg quality</li>
                  <li>Access to screened and healthy egg donors</li>
                  <li>Customized treatment and support for recipient and donor</li>
                  <li>Ethical, confidential, and safe process</li>
                  <li>Expert guidance throughout the journey</li>
                </ul>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Women with low ovarian reserve or poor egg quality</li>
                  <li>Women over 40 years old seeking conception</li>
                  <li>Good general health and uterine environment</li>
                  <li>Commitment to follow medical guidance and monitoring</li>
                  <li>Partner’s sperm should meet fertility requirements</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Ethical Donor Selection', desc: 'Rigorous screening for health, genetics, and compatibility.' },
                    { title: 'Advanced IVF Techniques', desc: 'State-of-the-art laboratory facilities ensure higher success rates.' },
                    { title: 'Personalized Care', desc: 'Tailored programs for every patient’s unique requirements.' },
                    { title: 'Emotional Support', desc: 'Counseling and guidance throughout the process.' },
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
                    q: 'Who can be an egg donor?',
                    a: 'Egg donors are healthy women screened for medical, genetic, and psychological suitability.'
                  },
                  {
                    q: 'Is the process safe for both donor and recipient?',
                    a: 'Yes, with expert care and monitoring, the procedure is safe and ethical.'
                  },
                  {
                    q: 'What is the success rate of the program?',
                    a: 'Success rates vary depending on age, health, and other factors, but using healthy donor eggs significantly improves outcomes.'
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
                  Start your journey to parenthood with Metro IVF Kanpur’s Donor Egg Program.
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
