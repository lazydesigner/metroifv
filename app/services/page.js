'use client'
import { useState } from 'react'
import { 
  Heart, 
  Microscope, 
  Users, 
  Shield, 
  CheckCircle, 
  Calendar,
  Clock,
  Award,
  Target,
  Apple,
  MessageCircle,
  Link as LinkIcon,
  Droplet,
  Activity,
  Scissors,
  Snowflake,
  Baby,  
} from 'lucide-react'
import AppointmentModal from '@/components/AppointmentModal' 
import Link from 'next/link'

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      icon: Heart,
      title: 'IVF Treatment',
      description: 'In Vitro Fertilization with the latest technology and highest success rates',
      features: [
        'Personalized stimulation protocols',
        'Advanced embryo culture systems',
        'Preimplantation genetic testing',
        'Single embryo transfer',
        'Frozen embryo transfer',
        'Blastocyst culture'
      ],
      successRate: '65-70%',
      duration: '4-6 weeks',
      url : '/services/ivf-treatment'
    },
    {
      icon: Target,
      title: 'IUI Treatment',
      description: 'Intrauterine Insemination - a less invasive fertility treatment option',
      features: [
        'Ovulation induction',
        'Sperm preparation and washing',
        'Timed insemination',
        'Multiple cycle options',
        'Monitoring and support',
        'Cost-effective approach'
      ],
      successRate: '15-20%',
      duration: '2 weeks',
      url : '/services/iui-treatment'
    },
    {
      icon: Microscope,
      title: 'Fertility Assessment',
      description: 'Comprehensive evaluation to identify and address fertility challenges',
      features: [
        'Hormonal analysis',
        'Ovarian reserve testing',
        'Semen analysis',
        'Hysterosalpingography',
        'Ultrasound monitoring',
        'Genetic counseling'
      ],
      successRate: '100%',
      duration: '1-2 weeks',
      url : '/services/fertility-assessment'
    },
    {
      icon: Shield,
      title: 'Egg Freezing',
      description: 'Preserve your fertility for the future with advanced cryopreservation',
      features: [
        'Ovarian stimulation',
        'Egg retrieval procedure',
        'Vitrification technique',
        'Long-term storage',
        'Future thawing and use',
        'Quality assessment'
      ],
      successRate: '90%+',
      duration: '3-4 weeks',
      url : '/services/egg-freezing'
    },
    {
      icon: Users,
      title: 'Male Infertility',
      description: 'Specialized treatments for male fertility issues and reproductive health',
      features: [
        'Detailed semen analysis',
        'Hormonal evaluation',
        'ICSI procedure',
        'Sperm retrieval techniques',
        'Lifestyle counseling',
        'Surgical interventions'
      ],
      successRate: '60-65%',
      duration: 'Varies',
      url : '/services/male-infertility'
    },
    {
      icon: Award,
      title: 'Recurrent Pregnancy Loss',
      description: 'Specialized care for couples experiencing repeated pregnancy losses',
      features: [
        'Comprehensive testing',
        'Immunological assessment',
        'Genetic evaluation',
        'Uterine assessment',
        'Treatment protocols',
        'Emotional support'
      ],
      successRate: '70-75%',
      duration: 'Ongoing',
      url : '/services/recurrent-pregnancy-loss'
    },  
  {
    icon: Users,
    title: 'Donor Egg Program',
    description: 'High-quality donor egg program to help achieve pregnancy when using own eggs isn’t possible.',
    features: [
      'Extensive donor database',
      'Comprehensive donor screening',
      'Legal and ethical transparency',
      'Anonymous or known donor options',
      'Personalized matching process'
    ],
    successRate: '70-75%',
    duration: '4-8 weeks',
    url : '/services/donor-egg-program'
  },
  {
    icon: Users,
    title: 'Donor Sperm Program',
    description: 'Safe and confidential donor sperm program for single women and couples with male infertility.',
    features: [
      'Wide sperm donor selection',
      'Genetic and medical screening',
      'Frozen sperm storage',
      'Anonymous or open donor choices',
      'High-quality semen preparation'
    ],
    successRate: '60-70%',
    duration: '2-4 weeks',
    url : '/services/donor-sperm-program'
  },
  {
    icon: Baby,
    title: 'Surrogacy Services',
    description: 'Comprehensive surrogacy support with medical, legal, and emotional guidance.',
    features: [
      'Gestational surrogacy programs',
      'Thorough surrogate screening',
      'Legal contract assistance',
      'Continuous medical monitoring',
      'Counseling and support for both parties'
    ],
    successRate: '75-80%',
    duration: '9-12 months',
    url : '/services/surrogacy-services'
  },
  {
    icon: Snowflake,
    title: 'Fertility Preservation',
    description: 'Preserve your fertility through advanced egg, sperm, and embryo freezing techniques.',
    features: [
      'Egg freezing (oocyte cryopreservation)',
      'Sperm freezing',
      'Embryo cryopreservation',
      'Long-term storage facilities',
      'Ideal for cancer patients or career planning'
    ],
    successRate: 'Depends on age and method',
    duration: '2-3 weeks',
    url : '/services/fertility-preservation'
  },
  {
    icon: Scissors,
    title: 'Laparoscopic Surgery',
    description: 'Minimally invasive surgical treatment for reproductive health conditions.',
    features: [
      'Ovarian cyst removal',
      'Endometriosis treatment',
      'Fibroid removal (myomectomy)',
      'Adhesion removal',
      'Faster recovery and minimal scarring'
    ],
    successRate: 'Varies by procedure',
    duration: '1-2 weeks (recovery)',
    url : '/services/laparoscopic-surgery'
  },
  {
    icon: Activity,
    title: 'Hysteroscopic Surgery',
    description: 'Daycare procedure to diagnose and treat uterine abnormalities affecting fertility.',
    features: [
      'Polyp and fibroid removal',
      'Uterine septum correction',
      'Adhesion removal (Asherman’s syndrome)',
      'Diagnostic hysteroscopy',
      'Quick recovery time'
    ],
    successRate: 'High for uterine correction',
    duration: '1 week (recovery)',
    url : '/services/hysteroscopic-surgery'
  },
  {
    icon: Droplet,
    title: 'Ovarian Drilling',
    description: 'A surgical treatment for women with PCOS to help restore ovulation naturally.',
    features: [
      'Laparoscopic minimally invasive method',
      'Improves natural ovulation',
      'Reduces male hormone levels',
      'Enhances response to fertility medication',
      'Short recovery time'
    ],
    successRate: '50-60%',
    duration: '1-2 weeks (recovery)',
    url : '/services/ovarian-drilling'
  },
  {
    icon: LinkIcon,
    title: 'Tubal Surgery',
    description: 'Surgical correction for blocked or damaged fallopian tubes to restore fertility.',
    features: [
      'Tubal recanalization',
      'Microsurgical repair techniques',
      'Removal of adhesions',
      'Alternative to IVF in certain cases',
      'Short hospital stay'
    ],
    successRate: '40-60%',
    duration: '2-3 weeks (including recovery)',
    url : '/services/tubal-surgery'
  },
  {
    icon: MessageCircle,
    title: 'Fertility Counseling',
    description: 'Professional counseling to support emotional well-being throughout fertility treatment.',
    features: [
      'One-on-one emotional support',
      'Coping with treatment stress',
      'Couples therapy sessions',
      'Guidance on treatment options',
      'Holistic fertility approach'
    ],
    successRate: 'Improves treatment outcomes',
    duration: 'As per session plan',
    url : '/services/fertility-counseling'
  },
  {
    icon: Apple,
    title: 'Nutritional Guidance',
    description: 'Customized fertility nutrition plans to enhance reproductive health and IVF success.',
    features: [
      'Diet plans for men and women',
      'Nutrient optimization for conception',
      'Weight and hormone balance',
      'Supplements guidance',
      'PCOS and endometriosis diet support'
    ],
    successRate: 'Boosts fertility health naturally',
    duration: 'Ongoing support',
    url : '/services/nutritional-guidance'
  } 

  ]

  const additionalServices = [
    'Donor Egg Program',
    'Donor Sperm Program',
    'Surrogacy Services',
    'Fertility Preservation',
    'Laparoscopic Surgery',
    'Hysteroscopic Surgery',
    'Ovarian Drilling',
    'Tubal Surgery',
    'Fertility Counseling',
    'Nutritional Guidance'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Fertility Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fertility treatments designed to help you achieve your dream of parenthood. 
              Our advanced techniques and personalized care ensure the best possible outcomes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-primary-100 rounded-lg p-3 mr-4">
                    <service.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600 mb-1">Success Rate</div>
                    <div className="text-lg font-semibold text-green-600">{service.successRate}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-600 mb-1">Duration</div>
                    <div className="text-lg font-semibold text-blue-600">{service.duration}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 items-center">

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                >
                  Consult for {service.title}
                </button>

                <Link href={`${service.url}`} className="w-full bg-[#DC0000] text-white rounded-lg font-medium hover:bg-[#8a0202] transition-colors duration-200"><button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#DC0000] text-white py-3 rounded-lg font-medium hover:bg-[#8a0202] transition-colors duration-200"
                >
                  Consult for {service.title}
                </button></Link>

                </div>

                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              We offer a complete range of fertility and reproductive health services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-sm font-medium text-gray-900">{service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h2>
            <p className="text-xl text-gray-600">
              A step-by-step approach to your fertility journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description: 'Comprehensive evaluation and discussion of your fertility history and goals',
                icon: Users
              },
              {
                step: '2',
                title: 'Diagnostic Testing',
                description: 'Detailed fertility assessment including hormonal and physical evaluations',
                icon: Microscope
              },
              {
                step: '3',
                title: 'Treatment Planning',
                description: 'Personalized treatment protocol designed specifically for your needs',
                icon: Target
              },
              {
                step: '4',
                title: 'Treatment & Support',
                description: 'Implementation of treatment plan with continuous monitoring and support',
                icon: Heart
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Metro IVF Hospital?
            </h2>
            <p className="text-xl text-primary-100">
              Leading fertility care in Kanpur with international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: '30+ Years Experience',
                description: 'Decades of expertise in reproductive medicine and fertility treatments'
              },
              {
                icon: Microscope,
                title: 'Advanced Technology',
                description: 'State-of-the-art laboratory and equipment for best outcomes'
              },
              {
                icon: Heart,
                title: 'Personalized Care',
                description: 'Individualized treatment plans tailored to your unique needs'
              },
              {
                icon: Shield,
                title: 'High Success Rates',
                description: 'Success rates comparable to international fertility centers'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Highly qualified fertility specialists and support staff'
              },
              {
                icon: Clock,
                title: 'Timely Treatment',
                description: 'Efficient processes with minimal waiting times'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-primary-100">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}