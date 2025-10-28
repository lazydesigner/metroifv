'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Heart,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react'
import AppointmentModal from '@/components/AppointmentModal'

export default function IVFGuideBlogPost() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction to IVF' },
    { id: 'what-is-ivf', title: 'What is IVF?' },
    { id: 'who-needs-ivf', title: 'Who Needs IVF?' },
    { id: 'ivf-process', title: 'Step-by-step IVF Process' },
    { id: 'why-choose-metro', title: 'Why Choose Metro IVF?' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
    { id: 'conclusion', title: 'Conclusion' }
  ]

  return (
    <>
      {/* Article Header */}
      <article className="bg-white">
        <header className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                September 20, 2025
                <Clock className="h-4 w-4 ml-6 mr-2" />
                8 min read
                <User className="h-4 w-4 ml-6 mr-2" />
                Dr. Neena Gupta
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Understanding IVF: A Beginner's Guide
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Learn everything about IVF in Kanpur with Metro IVF Hospital. Expert fertility care 
                by Dr. Neena Gupta with 30+ years of experience in reproductive medicine.
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                <Heart className="h-4 w-4 mr-2" />
                Save Article
              </button>
              <button className="flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Table of Contents - Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                  <nav>
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
                  </nav>
                </div>

                {/* CTA in Sidebar */}
                <div className="mt-8 bg-primary-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Ready to Start Your Journey?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Book a free consultation with our IVF experts in Kanpur.
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

            {/* Main Content */}
            <main className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction to IVF in Kanpur</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    In Vitro Fertilization, commonly known as IVF, has revolutionized fertility treatment worldwide. 
                    For couples in Kanpur struggling with infertility, IVF offers hope and a proven path to parenthood. 
                    At Metro IVF Hospital, we've been pioneering <strong>IVF in Kanpur</strong> for over three decades, 
                    helping thousands of families achieve their dreams.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    This comprehensive guide will walk you through everything you need to know about IVF treatment. 
                    Whether you're just beginning to explore fertility options or considering IVF as your next step, 
                    our expert insights will help you make informed decisions about your reproductive health.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                    <p className="text-blue-800">
                      <strong>Did you know?</strong> Metro IVF Hospital has achieved success rates comparable to 
                      international standards, with over 5,000 successful IVF procedures performed by Dr. Neena Gupta 
                      and our expert team.
                    </p>
                  </div>
                </section>

                {/* What is IVF */}
                <section id="what-is-ivf" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is IVF Treatment?</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    <strong>IVF in Kanpur</strong> involves a series of medical procedures designed to help couples 
                    conceive when natural conception is challenging. The process involves retrieving eggs from the 
                    woman's ovaries and fertilizing them with sperm in our state-of-the-art laboratory.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    During IVF treatment, multiple eggs are typically retrieved to increase the chances of successful 
                    fertilization. Once fertilized, the resulting embryos are carefully monitored in our advanced 
                    incubation systems. The healthiest embryo is then transferred back to the woman's uterus, 
                    where it can implant and develop naturally.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Components of IVF</h3>
                  <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                    <li><strong>Ovarian Stimulation:</strong> Medications help produce multiple eggs</li>
                    <li><strong>Egg Retrieval:</strong> Minor procedure to collect mature eggs</li>
                    <li><strong>Fertilization:</strong> Eggs and sperm combined in laboratory conditions</li>
                    <li><strong>Embryo Culture:</strong> Embryos develop for 3-5 days in optimal conditions</li>
                    <li><strong>Embryo Transfer:</strong> Selected embryo placed in the uterus</li>
                    <li><strong>Pregnancy Test:</strong> Results confirmed approximately two weeks later</li>
                  </ul>
                  
                  <p className="text-gray-600 leading-relaxed">
                    At Metro IVF Hospital, our <strong>IVF in Kanpur</strong> program utilizes the latest technology 
                    and personalized protocols. Dr. Neena Gupta's expertise ensures that each couple receives 
                    treatment tailored to their specific needs and circumstances.
                  </p>
                </section>

                {/* Who Needs IVF */}
                <section id="who-needs-ivf" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Needs IVF Treatment?</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Many couples wonder whether IVF is the right choice for them. Our fertility specialists at 
                    Metro IVF Hospital evaluate each case individually to determine the most appropriate treatment. 
                    <strong>IVF in Kanpur</strong> may be recommended for various fertility challenges.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Indications for IVF</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Female Factors</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Blocked or damaged fallopian tubes</li>
                        <li>• Severe endometriosis</li>
                        <li>• Ovulation disorders</li>
                        <li>• Diminished ovarian reserve</li>
                        <li>• Uterine fibroids</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Male Factors</h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        <li>• Low sperm count</li>
                        <li>• Poor sperm motility</li>
                        <li>• Abnormal sperm shape</li>
                        <li>• Previous vasectomy</li>
                        <li>• Genetic disorders</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Additionally, <strong>IVF in Kanpur</strong> is often recommended for couples who have 
                    experienced unexplained infertility or have not succeeded with other fertility treatments 
                    such as IUI (Intrauterine Insemination). Age is another important factor, as women over 
                    35 may benefit from IVF to optimize their chances of conception.
                  </p>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                    <p className="text-green-800">
                      <strong>Remember:</strong> Every fertility journey is unique. Our team at Metro IVF Hospital 
                      conducts comprehensive evaluations to determine the best treatment approach for each couple 
                      seeking <strong>IVF in Kanpur</strong>.
                    </p>
                  </div>
                </section>

                {/* IVF Process */}
                <section id="ivf-process" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step IVF Process</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Understanding the IVF process helps couples prepare mentally and physically for treatment. 
                    Our <strong>IVF in Kanpur</strong> program follows internationally recognized protocols while 
                    maintaining personalized care for each patient.
                  </p>
                  
                  <div className="space-y-8">
                    {[
                      {
                        step: 1,
                        title: "Initial Consultation and Testing",
                        description: "Comprehensive fertility evaluation including medical history, physical examination, and diagnostic tests. Our team assesses both partners to create a personalized treatment plan.",
                        duration: "1-2 weeks"
                      },
                      {
                        step: 2,
                        title: "Ovarian Stimulation",
                        description: "Daily hormone injections help stimulate the ovaries to produce multiple eggs. Regular monitoring through ultrasounds and blood tests ensures optimal response.",
                        duration: "10-12 days"
                      },
                      {
                        step: 3,
                        title: "Egg Retrieval",
                        description: "A minor surgical procedure performed under sedation to collect mature eggs from the ovaries. The procedure typically takes 20-30 minutes.",
                        duration: "1 day"
                      },
                      {
                        step: 4,
                        title: "Fertilization and Embryo Culture",
                        description: "Retrieved eggs are fertilized with sperm in our advanced laboratory. Embryos are carefully monitored as they develop over 3-5 days.",
                        duration: "3-5 days"
                      },
                      {
                        step: 5,
                        title: "Embryo Transfer",
                        description: "The best quality embryo is carefully transferred into the uterus using a thin catheter. This is typically a painless procedure requiring no anesthesia.",
                        duration: "1 day"
                      },
                      {
                        step: 6,
                        title: "Pregnancy Test",
                        description: "Blood test performed approximately 10-14 days after embryo transfer to confirm pregnancy. Our team provides ongoing support throughout this waiting period.",
                        duration: "2 weeks"
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0 mr-6">
                          <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 mb-2">{step.description}</p>
                          <p className="text-sm text-primary-600 font-medium">Duration: {step.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mt-8">
                    Throughout the entire <strong>IVF in Kanpur</strong> process, our dedicated team provides 
                    continuous support and guidance. Dr. Neena Gupta personally oversees each case to ensure 
                    the highest standards of care and optimal outcomes.
                  </p>
                </section>

                {/* Why Choose Metro IVF */}
                <section id="why-choose-metro" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Metro IVF Hospital for IVF in Kanpur?</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Choosing the right fertility center is crucial for your IVF success. Metro IVF Hospital 
                    stands out as the premier destination for <strong>IVF in Kanpur</strong>, offering 
                    world-class facilities and unmatched expertise.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {[
                      {
                        title: "30+ Years of Excellence",
                        description: "Dr. Neena Gupta brings over three decades of experience in reproductive medicine, with thousands of successful IVF procedures."
                      },
                      {
                        title: "International Standards",
                        description: "Our laboratory and protocols meet international quality standards, ensuring the highest success rates for IVF in Kanpur."
                      },
                      {
                        title: "State-of-the-Art Facility",
                        description: "Advanced equipment including time-lapse embryo monitoring systems and HEPA-filtered air quality control."
                      },
                      {
                        title: "Personalized Care",
                        description: "Each treatment plan is customized based on individual patient needs, medical history, and specific fertility challenges."
                      },
                      {
                        title: "Transparent Pricing",
                        description: "Clear, upfront pricing with no hidden costs. We believe in making IVF in Kanpur accessible and affordable."
                      },
                      {
                        title: "Comprehensive Support",
                        description: "Our team includes fertility counselors and support staff to help you through every step of your journey."
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-primary-50 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                    <p className="text-yellow-800">
                      <strong>Success Rates:</strong> Metro IVF Hospital maintains success rates of 65-70% for 
                      IVF in Kanpur, comparable to leading international fertility centers. Our commitment to 
                      excellence ensures you receive the best possible care.
                    </p>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About IVF</h2>
                  <div className="space-y-6">
                    {[
                      {
                        question: "How much does IVF cost in Kanpur?",
                        answer: "The cost of IVF in Kanpur at Metro IVF Hospital varies based on individual treatment needs. We offer transparent pricing and various payment options to make treatment accessible. During your consultation, we'll provide detailed cost information specific to your case."
                      },
                      {
                        question: "What are the success rates for IVF in Kanpur?",
                        answer: "Metro IVF Hospital maintains success rates of 65-70% for IVF treatment, which are comparable to international standards. Success rates can vary based on factors such as age, diagnosis, and previous treatment history."
                      },
                      {
                        question: "Is IVF painful?",
                        answer: "Most IVF procedures involve minimal discomfort. The egg retrieval is performed under sedation, and embryo transfer is typically painless. Some patients may experience mild cramping or bloating during ovarian stimulation."
                      },
                      {
                        question: "How long does the IVF process take?",
                        answer: "A complete IVF cycle typically takes 4-6 weeks from the start of medication to pregnancy test. However, the initial consultation and testing phase may require additional time for proper evaluation."
                      },
                      {
                        question: "Can we choose the gender of our baby with IVF?",
                        answer: "Gender selection is regulated by Indian law and is only permitted for medical reasons to prevent genetic disorders. Our team can provide detailed information about preimplantation genetic testing when medically indicated."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: Your Path to Parenthood</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    IVF treatment has helped millions of couples worldwide achieve their dream of parenthood. 
                    For couples in Kanpur, Metro IVF Hospital offers hope, expertise, and world-class care. 
                    Our comprehensive approach to <strong>IVF in Kanpur</strong> ensures that you receive 
                    the best possible treatment tailored to your unique needs.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Remember that every fertility journey is different, and success often requires patience 
                    and persistence. With Dr. Neena Gupta's expertise and our dedicated team's support, 
                    you're not alone in this journey. We're committed to helping you every step of the way 
                    toward achieving your dream of starting or expanding your family.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    If you're considering <strong>IVF in Kanpur</strong>, we encourage you to schedule a 
                    consultation with our fertility specialists. During this appointment, we'll evaluate 
                    your specific situation, answer your questions, and develop a personalized treatment 
                    plan designed to optimize your chances of success.
                  </p>
                  
                  <div className="bg-primary-600 text-white rounded-lg p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Start Your IVF Journey?</h3>
                    <p className="mb-6 text-primary-100">
                      Take the first step toward parenthood with a free consultation at Metro IVF Hospital.
                    </p>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Book Free Consultation
                    </button>
                  </div>
                </section>

                {/* Contact Information */}
                <section className="bg-gray-50 rounded-lg p-8 mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Metro IVF Hospital</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                        <p className="text-gray-600">094151 34428</p>
                        <p className="text-sm text-gray-500">Call for appointment</p>
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
                        <p className="text-gray-600">10A, GT Rd, near Gurudev Crossing, Lakhanpur, Khyora, Kanpur, Uttar Pradesh 208024</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Related Articles */}
                <section className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "IVF Success Rates: What You Need to Know",
                        excerpt: "Understanding factors that influence IVF success rates and how to optimize your chances.",
                        slug: "ivf-success-rates-explained"
                      },
                      {
                        title: "Preparing for Your First IVF Cycle",
                        excerpt: "Essential tips and guidelines to prepare your body and mind for IVF treatment.",
                        slug: "preparing-first-ivf-cycle"
                      }
                    ].map((article, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
                        <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                        <Link 
                          href={`/blog/${article.slug}`}
                          className="text-primary-600 font-medium text-sm flex items-center hover:text-primary-700"
                        >
                          Read Article <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </article>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}