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
import Head from 'next/head'

export default function IUITreatmentServicePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'overview', title: 'Overview of IUI Treatment' },
    { id: 'how-it-works', title: 'How IUI Works' },
    { id: 'benefits', title: 'Benefits of IUI' },
    { id: 'our-approach', title: 'Our IUI Approach' },
    { id: 'success-rates', title: 'Success Rates & Duration' },
    { id: 'why-choose-us', title: 'Why Choose Metro IVF' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'book-now', title: 'Book Your Consultation' },
  ]

  return (
    <>
      <Head>
        <title>IUI Treatment in Kanpur | Intrauterine Insemination Procedure & Success Rate</title>
        <meta
          name="description"
          content="IUI Treatment in Kanpur — A simple, safe, and affordable fertility treatment that enhances your chances of conception. Learn about the IUI process, benefits, success rates, and treatment duration at Metro IVF Kanpur."
        />
      </Head>

      <article className="bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              IUI Treatment in Kanpur – Intrauterine Insemination
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Discover the effectiveness of <strong>IUI treatment in Kanpur</strong> at Metro IVF Hospital. 
              Led by <strong>Dr. Neena Gupta</strong> (30+ years of expertise), we offer affordable and 
              personalized fertility solutions designed to increase your chances of a successful pregnancy.
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

                {/* Sidebar CTA */}
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Start Your IUI Journey</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Schedule a free consultation with our fertility experts today.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of IUI Treatment</h2>
                <p className="text-gray-600 mb-6">
                  <strong>Intrauterine Insemination (IUI)</strong> is a simple fertility procedure 
                  where healthy sperm is placed directly into the uterus during ovulation. 
                  It increases the number of sperm reaching the fallopian tubes and improves 
                  the chances of natural fertilization.
                </p>
                <p className="text-gray-600 mb-6">
                  At Metro IVF Kanpur, our IUI treatment is safe, effective, and minimally invasive — 
                  providing an ideal first-line fertility solution for couples struggling to conceive.
                </p>
              </section>

              {/* How It Works */}
              <section id="how-it-works" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How IUI Works</h2>
                <p className="text-gray-600 mb-8">
                  The IUI process involves preparing sperm in the lab and inserting it into the uterus at the 
                  optimal time of ovulation. The process is painless and takes only a few minutes.
                </p>
                <div className="space-y-6">
                  {[
                    'Ovulation Monitoring – Ultrasound and hormone tracking determine the best timing.',
                    'Sperm Preparation – Sperm is collected and processed to select the healthiest ones.',
                    'Insemination – Prepared sperm is inserted into the uterus using a thin catheter.',
                    'Rest & Observation – You may rest for 15–30 minutes after the procedure.',
                    'Pregnancy Test – Conducted after 14 days to confirm results.',
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of IUI Treatment</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Minimally invasive and painless procedure</li>
                  <li>Cost-effective compared to IVF or ICSI</li>
                  <li>Suitable for mild male infertility and unexplained infertility</li>
                  <li>No need for anesthesia or surgery</li>
                  <li>Quick recovery and minimal downtime</li>
                </ul>
              </section>

              {/* Our Approach */}
              <section id="our-approach" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our IUI Approach</h2>
                <p className="text-gray-600 mb-6">
                  Our fertility specialists customize every IUI plan according to your cycle, ovulation pattern, 
                  and sperm health. With advanced ovulation tracking, sperm washing, and post-procedure care, 
                  we ensure the best possible results for every couple.
                </p>
              </section>

              {/* Success Rates */}
              <section id="success-rates" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Rates & Duration</h2>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                  <p className="text-green-800">
                    The average success rate for IUI at <strong>Metro IVF Kanpur</strong> ranges between 
                    <strong> 15–20% per cycle</strong>, depending on the patient’s age and fertility condition. 
                    Each cycle typically lasts 2–3 weeks from ovulation tracking to pregnancy confirmation.
                  </p>
                </div>
              </section>

              {/* Why Choose Us */}
              <section id="why-choose-us" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Kanpur?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Personalized Fertility Plans', desc: 'Tailored treatments to suit individual reproductive health.' },
                    { title: 'Advanced Lab Facilities', desc: 'Modern sperm processing and monitoring technology.' },
                    { title: 'Experienced Specialists', desc: 'Led by Dr. Neena Gupta with 30+ years of fertility expertise.' },
                    { title: 'High Success Rates', desc: 'Proven track record with healthy pregnancies.' },
                    { title: 'Affordable Treatment', desc: 'Transparent pricing with no hidden charges.' },
                    { title: 'Comprehensive Support', desc: 'Guidance through every stage of the fertility journey.' },
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
                    q: 'Is IUI painful?',
                    a: 'No, IUI is a painless and quick procedure. You may experience mild cramping that subsides shortly after.'
                  },
                  {
                    q: 'How many IUI cycles are recommended?',
                    a: 'Doctors generally recommend 3–6 cycles of IUI before moving to more advanced treatments like IVF.'
                  },
                  {
                    q: 'When can I take a pregnancy test after IUI?',
                    a: 'A pregnancy test is usually advised 14 days after the IUI procedure.'
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
                <h3 className="text-2xl font-bold mb-3">Ready to Begin Your IUI Journey?</h3>
                <p className="mb-6 text-primary-100">
                  Book a free consultation with Metro IVF’s fertility specialists and take your first step toward parenthood.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book Free Consultation
                </button>
              </section>

              {/* Related Services */}
              <section className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Fertility Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "IVF Treatment",
                      excerpt: "Advanced fertility treatment for couples facing complex infertility challenges.",
                      slug: "ivf-treatment"
                    },
                    {
                      title: "ICSI Treatment",
                      excerpt: "Micro-assisted fertilization technique for male infertility cases.",
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

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
