'use client'
import { useState } from 'react'
import { 
  Award, 
  BookOpen, 
  Users, 
  Star,
  Calendar,
  GraduationCap,
  Activity ,
  CheckCircle
} from 'lucide-react'
import AppointmentModal from '@/components/AppointmentModal'

export default function DoctorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const doctors = [
    {
      name: 'Dr. Neena Gupta',
      title: 'Senior Fertility Specialist & Director',
      image: '/doctor-female.jpg', // You'll need to add actual images
      experience: '30+ Years',
      specializations: [
        'In Vitro Fertilization (IVF)',
        'Ovulation Induction',
        'Fertility Assessment',
        'Recurrent Pregnancy Loss',
        'PCOS Management',
        'Endometriosis Treatment'
      ],
      qualifications: [
        'MBBS, MD (Obstetrics & Gynecology)',
        'Fellowship in Reproductive Medicine',
        'International Training in IVF',
        'Member of Indian Society for Assisted Reproduction'
      ],
      achievements: [
        'Over 5000 successful IVF procedures',
        'Published researcher in fertility journals',
        'Invited speaker at international conferences',
        'Pioneer in IVF treatments in Kanpur region'
      ],
      bio: 'Dr. Neena Gupta is a renowned fertility specialist with over three decades of experience in reproductive medicine. She has been instrumental in bringing advanced IVF technologies to Kanpur and has helped thousands of couples achieve their dream of parenthood. Her compassionate approach combined with clinical excellence has made her one of the most trusted fertility experts in the region.',
      availability: 'Mon-Sat: 9:00 AM - 6:00 PM'
    },
    {
      name: 'Dr. Bhaskar Gupta',
      title: 'Reproductive Endocrinologist & Andrologist',
      image: '/doctor-male.jpg', // You'll need to add actual images
      experience: '25+ Years',
      specializations: [
        'Male Infertility Treatment',
        'Hormonal Disorders',
        'ICSI Procedures',
        'Sperm Retrieval Techniques',
        'Varicocele Treatment',
        'Erectile Dysfunction'
      ],
      qualifications: [
        'MBBS, MD (Medicine)',
        'DM (Reproductive Endocrinology)',
        'Fellowship in Andrology',
        'Certified IVF Specialist'
      ],
      achievements: [
        'Expert in male fertility disorders',
        'Advanced training in microsurgery',
        'Research publications in andrology',
        'Successfully treated complex male infertility cases'
      ],
      bio: 'Dr. Bhaskar Gupta specializes in reproductive endocrinology with a particular focus on male infertility. His expertise in hormonal disorders and advanced sperm retrieval techniques has helped numerous couples overcome male factor infertility. He is known for his meticulous approach and innovative treatment strategies.',
      availability: 'Mon-Fri: 10:00 AM - 5:00 PM'
    }
  ]

  const teamMembers = [
    {
      name: 'Dr. Priya Sharma',
      title: 'Assistant Fertility Specialist',
      specialization: 'IUI & Ovulation Monitoring'
    },
    {
      name: 'Ms. Ritu Agarwal',
      title: 'Senior Embryologist',
      specialization: 'Embryo Culture & Assessment'
    },
    {
      name: 'Ms. Sunita Verma',
      title: 'Fertility Counselor',
      specialization: 'Patient Support & Counseling'
    },
    {
      name: 'Mr. Rajesh Kumar',
      title: 'Lab Technician',
      specialization: 'Laboratory Operations'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Fertility Experts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced team of fertility specialists dedicated to helping you 
              achieve your dream of parenthood with personalized care and advanced treatments.
            </p>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Main Doctors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-16 w-16 text-primary-600" />
                      </div>
                      <p className="text-gray-600 text-sm">Professional Photo</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="flex items-center mb-4">
                    <h2 className="text-3xl font-bold text-gray-900 mr-4">{doctor.name}</h2>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xl text-primary-600 font-semibold mb-2">{doctor.title}</p>
                  
                  <div className="flex items-center text-gray-600 mb-6">
                    <Award className="h-5 w-5 mr-2" />
                    <span>{doctor.experience} Experience</span>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">{doctor.bio}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-primary-600" />
                        Qualifications
                      </h3>
                      <ul className="space-y-2">
                        {doctor.qualifications.map((qual, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Activity  className="h-5 w-5 mr-2 text-primary-600" />
                        Specializations
                      </h3>
                      <ul className="space-y-2">
                        {doctor.specializations.slice(0, 4).map((spec, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary-600" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {doctor.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <Star className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book with {doctor.name.split(' ')[1]}
                    </button>
                    <div className="flex items-center text-sm text-gray-600 bg-gray-100 px-4 py-3 rounded-lg">
                      <Users className="h-4 w-4 mr-2" />
                      Available: {doctor.availability}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Support Team
            </h2>
            <p className="text-xl text-gray-600">
              A dedicated team of professionals supporting your fertility journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.title}</p>
                <p className="text-sm text-gray-600">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Experts?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference that expertise and compassion make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Expertise',
                description: 'Decades of combined experience in reproductive medicine with thousands of successful cases'
              },
              {
                icon: BookOpen,
                title: 'Continuous Learning',
                description: 'Our doctors stay updated with the latest advances in fertility treatments and technologies'
              },
              {
                icon: Users,
                title: 'Patient-Centered Care',
                description: 'Personalized treatment plans and compassionate support throughout your journey'
              },
              {
                icon: Activity ,
                title: 'Advanced Training',
                description: 'International training and certifications from leading fertility centers worldwide'
              },
              {
                icon: Star,
                title: 'High Success Rates',
                description: 'Consistently achieving success rates comparable to international standards'
              },
              {
                icon: CheckCircle,
                title: 'Holistic Approach',
                description: 'Comprehensive care addressing physical, emotional, and psychological aspects'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 text-center">
                <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">
            Ready to Meet Our Experts?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Schedule a consultation with our fertility specialists and take the first step 
            towards achieving your dream of parenthood.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Your Consultation Today
          </button>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}