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

export default function NutritionalGuidancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of Nutritional Guidance' },
    { id: 'benefits', title: 'Benefits of Fertility Nutrition' },
    { id: 'our-approach', title: 'Our Nutritional Approach' },
    { id: 'when-to-consult', title: 'When to Seek Guidance' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF Kanpur' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Nutrition Consultation' },
  ]

  return (
    <>
      <Head>
        <title>Nutritional Guidance | Metro IVF Kanpur</title>
        <meta
          name="description"
          content="Metro IVF Kanpur provides personalized nutritional guidance to improve fertility outcomes for both men and women, supporting reproductive health naturally."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nutritional Guidance for Fertility in Kanpur
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Metro IVF Kanpur offers <strong>personalized nutritional guidance</strong> to support reproductive health, optimize fertility, 
              and improve the success rates of fertility treatments for both men and women.
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
                  <h3 className="font-semibold text-gray-900 mb-3">Schedule Nutrition Consultation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Meet our fertility nutrition experts to create a personalized diet plan for better reproductive health.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Nutritional Guidance</h2>
                <p className="text-gray-600 mb-6">
                  Proper nutrition plays a crucial role in fertility for both men and women. Our experts analyze your diet, lifestyle, 
                  and health status to provide a tailored nutritional plan that can enhance reproductive health and increase chances of conception.
                </p>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Fertility Nutrition</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Supports hormonal balance and ovulation</li>
                  <li>Improves sperm quality and motility</li>
                  <li>Optimizes body weight for conception</li>
                  <li>Enhances energy, immunity, and overall health</li>
                  <li>Supports success of fertility treatments like IVF and IUI</li>
                </ul>
              </section>

              {/* Our Approach */}
              <section id="our-approach" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Nutritional Approach</h2>
                <p className="text-gray-600 mb-6">
                  Our fertility nutritionists provide personalized diet plans based on your age, health, and fertility needs. 
                  We emphasize natural, nutrient-rich foods and lifestyle changes to maximize reproductive potential.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-blue-800">
                    Our aim is to empower you with knowledge and practical guidance so that nutrition becomes a vital part of your fertility journey.
                  </p>
                </div>
              </section>

              {/* When to Consult */}
              <section id="when-to-consult" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Seek Nutritional Guidance</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Before starting fertility treatments</li>
                  <li>Experiencing hormonal imbalances or PCOS</li>
                  <li>Low sperm count or poor reproductive health</li>
                  <li>Need for weight management or dietary adjustments for conception</li>
                </ul>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[ 
                    { title: 'Expert Nutritionists', desc: 'Certified dieticians specialized in fertility nutrition for men and women.' },
                    { title: 'Personalized Plans', desc: 'Tailored meal plans based on your health and fertility needs.' },
                    { title: 'Evidence-Based Guidance', desc: 'Nutrition strategies backed by clinical research.' },
                    { title: 'Integration with Treatment', desc: 'Diet guidance complements fertility procedures for best outcomes.' },
                    { title: 'Supportive Environment', desc: 'Counseling and guidance in a caring, confidential setting.' },
                    { title: 'Affordable Packages', desc: 'Accessible consultations with transparent pricing.' },
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
                    q: 'Why is nutrition important for fertility?',
                    a: 'Proper nutrition helps balance hormones, improve ovulation, and optimize sperm quality, all of which are essential for conception.'
                  },
                  {
                    q: 'Can diet alone improve fertility?',
                    a: 'While diet cannot guarantee pregnancy, it significantly enhances fertility potential and complements medical treatments.'
                  },
                  {
                    q: 'Do men also need fertility nutrition guidance?',
                    a: 'Yes, male fertility can be improved through dietary changes, supplementation, and healthy lifestyle choices.'
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
                <h3 className="text-2xl font-bold mb-3">Book Your Nutrition Consultation Today</h3>
                <p className="mb-6 text-primary-100">
                  Get expert guidance from fertility nutritionists to improve your reproductive health naturally.
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
                      title: "Fertility Counseling",
                      excerpt: "Emotional and psychological support for couples during their fertility journey.",
                      slug: "fertility-counseling"
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
