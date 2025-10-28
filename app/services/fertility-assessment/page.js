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

export default function FertilityAssessmentServicePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Fertility Assessment' },
    { id: 'tests', title: 'Types of Fertility Tests' },
    { id: 'importance', title: 'Why Fertility Assessment Matters' },
    { id: 'our-approach', title: 'Our Diagnostic Approach' },
    { id: 'timing', title: 'When to Get Tested' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Fertility Checkup' },
  ]

  return (
    <>
      <Head>
        <title>Fertility Assessment | Comprehensive Fertility Testing at Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Fertility Assessment at Metro IVF Kanpur includes advanced diagnostic tests for both men and women to identify fertility issues and plan effective treatment options."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fertility Assessment in Kanpur – Accurate Testing & Diagnosis
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Understand your fertility health with Metro IVF’s comprehensive 
              <strong> Fertility Assessment in Kanpur</strong>. Our team of fertility experts 
              conducts advanced diagnostic tests to identify the root causes of infertility 
              and design personalized treatment plans.
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
                  <h3 className="font-semibold text-gray-900 mb-3">Check Your Fertility Health</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Schedule a fertility evaluation with our reproductive specialists today.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
                  >
                    Book Assessment
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Section */}
            <main className="lg:col-span-3 prose prose-lg max-w-none">
              
              {/* Overview */}
              <section id="overview" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Fertility Assessment</h2>
                <p className="text-gray-600 mb-6">
                  A fertility assessment helps both men and women understand their reproductive health. 
                  It involves a series of tests and evaluations that provide insights into potential 
                  causes of infertility and guide treatment options like IUI or IVF.
                </p>
                <p className="text-gray-600 mb-6">
                  At Metro IVF Kanpur, our fertility evaluation is personalized to your medical history, 
                  lifestyle, and conception goals. Early diagnosis can help save time, cost, and emotional strain.
                </p>
              </section>

              {/* Types of Tests */}
              <section id="tests" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Fertility Tests</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">For Women</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Hormone evaluation (FSH, LH, AMH, Prolactin)</li>
                      <li>Ultrasound scan to assess ovaries and uterus</li>
                      <li>Ovulation tracking and monitoring</li>
                      <li>Hysterosalpingography (HSG) to check fallopian tubes</li>
                      <li>Thyroid and blood sugar tests</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">For Men</h3>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Semen analysis (count, motility, and morphology)</li>
                      <li>Hormone profiling (FSH, LH, Testosterone)</li>
                      <li>Ultrasound for testicular or prostate evaluation</li>
                      <li>Genetic or infection screening (if required)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Importance */}
              <section id="importance" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Fertility Assessment Matters</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Identifies potential causes of infertility early</li>
                  <li>Helps plan an effective fertility treatment strategy</li>
                  <li>Improves chances of successful conception</li>
                  <li>Prevents unnecessary treatments and costs</li>
                  <li>Provides clarity and emotional reassurance to couples</li>
                </ul>
              </section>

              {/* Our Approach */}
              <section id="our-approach" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Diagnostic Approach</h2>
                <p className="text-gray-600 mb-6">
                  Metro IVF Kanpur follows a step-by-step diagnostic protocol to ensure accuracy and comfort. 
                  We combine clinical evaluation with advanced laboratory testing to get a complete picture of your fertility health.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-blue-800">
                    Our goal is to identify the root cause of infertility and recommend the best course of action — 
                    whether it’s lifestyle modification, medication, IUI, or IVF.
                  </p>
                </div>
              </section>

              {/* When to Test */}
              <section id="timing" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">When Should You Get Tested?</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Couples trying to conceive for more than 12 months (or 6 months if above 35)</li>
                  <li>Irregular menstrual cycles or known PCOS</li>
                  <li>History of miscarriages or failed IUI/IVF</li>
                  <li>Low sperm count or sexual health concerns</li>
                  <li>Previous pelvic infections or surgeries</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Comprehensive Testing', desc: 'All fertility diagnostics under one roof for both men and women.' },
                    { title: 'Experienced Specialists', desc: 'Led by Dr. Neena Gupta with 30+ years of fertility expertise.' },
                    { title: 'Advanced Lab Facilities', desc: 'Modern diagnostic tools ensure high accuracy.' },
                    { title: 'Personalized Reports', desc: 'We provide detailed insights and customized treatment options.' },
                    { title: 'Affordable Packages', desc: 'Transparent pricing with no hidden charges.' },
                    { title: 'Comfort & Privacy', desc: 'We maintain patient confidentiality and a supportive environment.' },
                  ].map((point, index) => (
                    <div key={index} className="bg-primary-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
                      <p className="text-gray-600 text-sm">{point.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section id="faq" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                {[ 
                  {
                    q: 'How long does a fertility assessment take?',
                    a: 'Most fertility evaluations are completed within 1–2 days, depending on the number of tests required.'
                  },
                  {
                    q: 'Is fertility testing painful?',
                    a: 'Most tests are non-invasive or minimally invasive and cause little to no discomfort.'
                  },
                  {
                    q: 'Do both partners need to get tested?',
                    a: 'Yes, fertility issues can affect both men and women, so it’s best for both partners to undergo evaluation.'
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
                <h3 className="text-2xl font-bold mb-3">Book Your Fertility Assessment Today</h3>
                <p className="mb-6 text-primary-100">
                  Take control of your reproductive health. Schedule a detailed fertility evaluation with our specialists.
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
                      title: "IUI Treatment",
                      excerpt: "A gentle fertility procedure to improve sperm reach and fertilization chances.",
                      slug: "iui-treatment"
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
