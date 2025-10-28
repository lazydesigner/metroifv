'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Heart, 
  Share2, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight 
} from 'lucide-react'
import AppointmentModal from '@/components/AppointmentModal'

export default function IVFTreatmentServicePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of IVF Treatment' },
    { id: 'how-it-works', title: 'How IVF Works' },
    { id: 'benefits', title: 'Benefits of IVF' },
    { id: 'our-approach', title: 'Our IVF Approach' },
    { id: 'success-rates', title: 'Success Rates & Technology' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Consultation' },
  ]

  return (
    <>
      {/* Header Section */}
      <article className="bg-white">
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> 

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              IVF Treatment in Kanpur – Advanced Fertility Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Experience world-class <strong>IVF treatment in Kanpur</strong> with Metro IVF Hospital. 
              Led by <strong>Dr. Neena Gupta</strong> (30+ years of experience), we provide 
              comprehensive fertility care using advanced reproductive technologies.
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
                        <a href={`#${item.id}`} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar CTA */}
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Start Your IVF Journey</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Schedule a free consultation with our fertility specialists today.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of IVF Treatment</h2>
                <p className="text-gray-600 mb-6">
                  <strong>In Vitro Fertilization (IVF)</strong> is one of the most advanced and successful assisted reproductive technologies available today. 
                  At Metro IVF Kanpur, our IVF program helps couples overcome infertility challenges by combining expert medical care with modern technology.
                </p>
                <p className="text-gray-600 mb-6">
                  We take pride in being Kanpur’s most trusted fertility center, offering compassionate guidance, transparent treatment, 
                  and a success-driven approach to help you achieve parenthood.
                </p>
              </section>

              {/* How It Works */}
              <section id="how-it-works" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How IVF Works</h2>
                <p className="text-gray-600 mb-8">
                  The IVF process involves fertilizing a woman’s egg with her partner’s sperm in a specialized lab. 
                  The resulting embryo is carefully nurtured and then transferred into the uterus for implantation.
                </p>

                <div className="space-y-6">
                  {[
                    'Ovarian Stimulation – Hormones are used to produce multiple eggs.',
                    'Egg Retrieval – Eggs are collected using a painless minor procedure.',
                    'Fertilization – Eggs and sperm are combined in our advanced lab.',
                    'Embryo Culture – Fertilized embryos are monitored for healthy growth.',
                    'Embryo Transfer – The best embryo is placed into the uterus.',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 font-semibold">
                        {i + 1}
                      </div>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of IVF Treatment</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Helps couples with blocked fallopian tubes or male infertility</li>
                  <li>Enables use of donor eggs, sperm, or embryos if needed</li>
                  <li>Allows genetic screening to prevent inherited disorders</li>
                  <li>Gives hope after failed natural conception or IUI</li>
                  <li>High success rates with modern lab techniques</li>
                </ul>
              </section>

              {/* Our Approach */}
              <section id="our-approach" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our IVF Approach</h2>
                <p className="text-gray-600 mb-6">
                  At Metro IVF, we personalize every treatment plan to each patient’s unique condition. 
                  Our protocols are designed by <strong>Dr. Neena Gupta</strong> to maximize comfort, 
                  minimize medication load, and optimize outcomes.
                </p>
                <p className="text-gray-600 mb-6">
                  We also provide emotional and psychological support through counseling sessions to make your IVF journey stress-free.
                </p>
              </section>

              {/* Success Rates */}
              <section id="success-rates" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Rates & Technology</h2>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                  <p className="text-green-800">
                    <strong>Metro IVF Hospital</strong> maintains IVF success rates of <strong>65–70%</strong>, 
                    matching international standards. Our lab uses HEPA-filtered air systems, advanced incubators, 
                    and real-time embryo monitoring.
                  </p>
                </div>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: '30+ Years of Experience', desc: 'Led by Dr. Neena Gupta, a pioneer in reproductive medicine.' },
                    { title: 'High Success Rates', desc: 'Consistent IVF results that match international benchmarks.' },
                    { title: 'Advanced Lab Facilities', desc: 'Equipped with state-of-the-art embryology and culture systems.' },
                    { title: 'Personalized Care', desc: 'Each couple receives a tailored fertility plan.' },
                    { title: 'Transparent Pricing', desc: 'No hidden costs. Clear treatment packages for IVF in Kanpur.' },
                    { title: 'Comprehensive Support', desc: 'Our team guides you from consultation to pregnancy and beyond.' },
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
                    q: 'What is the cost of IVF in Kanpur?',
                    a: 'IVF costs depend on the complexity of the case and additional procedures. Metro IVF offers affordable packages with complete transparency.'
                  },
                  {
                    q: 'Is IVF safe?',
                    a: 'Yes, IVF is a safe and proven fertility treatment. Our experienced specialists monitor every stage closely to ensure comfort and safety.'
                  },
                  {
                    q: 'How long does IVF take?',
                    a: 'A full IVF cycle usually takes 4–6 weeks, including stimulation, egg retrieval, fertilization, and embryo transfer.'
                  },
                ].map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-6 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </section>

              {/* Book Consultation */}
              <section id="book-now" className="text-center bg-primary-600 text-white rounded-lg p-10">
                <h3 className="text-2xl font-bold mb-3">Start Your IVF Journey Today</h3>
                <p className="mb-6 text-primary-100">
                  Book a free consultation with Metro IVF’s fertility experts and take the first step toward parenthood.
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
                      excerpt: "A less invasive fertility treatment that increases your chances of conception.",
                      slug: "iui-treatment"
                    },
                    {
                      title: "ICSI Treatment",
                      excerpt: "Advanced fertilization technique for couples with severe male infertility.",
                      slug: "icsi-treatment"
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
