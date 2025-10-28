'use client'
import { useState } from 'react'
import { Play, X, ChevronLeft, ChevronRight, Calendar, Award, Users } from 'lucide-react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    'All',
    'Laboratory',
    'Facilities',
    'Team',
    'Events',
    'Success Moments',
    'Awards'
  ]

  const galleryItems = [
    {
      type: 'image',
      category: 'Laboratory',
      title: 'State-of-the-Art IVF Laboratory',
      description: 'Our advanced embryology lab with cutting-edge equipment',
      thumbnail: '/lab-1.jpg'
    },
    {
      type: 'image',
      category: 'Laboratory', 
      title: 'Embryo Incubation Systems',
      description: 'Time-lapse monitoring systems for optimal embryo development',
      thumbnail: '/lab-2.jpg'
    },
    {
      type: 'image',
      category: 'Laboratory',
      title: 'Cryopreservation Unit',
      description: 'Advanced freezing technology for eggs, sperm, and embryos',
      thumbnail: '/lab-3.jpg'
    },
    {
      type: 'image',
      category: 'Facilities',
      title: 'Reception Area',
      description: 'Comfortable and welcoming patient reception area',
      thumbnail: '/reception.jpg'
    },
    {
      type: 'image',
      category: 'Facilities',
      title: 'Consultation Rooms',
      description: 'Private consultation rooms for patient comfort',
      thumbnail: '/consultation.jpg'
    },
    {
      type: 'image',
      category: 'Facilities',
      title: 'Procedure Room',
      description: 'Modern procedure room equipped for all fertility treatments',
      thumbnail: '/procedure.jpg'
    },
    {
      type: 'image',
      category: 'Team',
      title: 'Dr. Neena Gupta',
      description: 'Senior Fertility Specialist conducting consultation',
      thumbnail: '/doctor-1.jpg'
    },
    {
      type: 'image',
      category: 'Team',
      title: 'Medical Team Meeting',
      description: 'Our expert team discussing patient care protocols',
      thumbnail: '/team-meeting.jpg'
    },
    {
      type: 'image',
      category: 'Team',
      title: 'Embryology Team',
      description: 'Our skilled embryologists at work in the laboratory',
      thumbnail: '/embryology-team.jpg'
    },
    {
      type: 'video',
      category: 'Events',
      title: 'Fertility Awareness Seminar',
      description: 'Dr. Neena Gupta speaking at fertility awareness event',
      thumbnail: '/seminar.jpg',
      duration: '3:45'
    },
    {
      type: 'image',
      category: 'Events',
      title: 'World IVF Day Celebration',
      description: 'Celebrating achievements in fertility medicine',
      thumbnail: '/ivf-day.jpg'
    },
    {
      type: 'image',
      category: 'Success Moments',
      title: 'Happy Parents',
      description: 'Joyful moments with families after successful treatment',
      thumbnail: '/happy-parents-1.jpg'
    },
    {
      type: 'image',
      category: 'Success Moments',
      title: 'Baby\'s First Photo',
      description: 'Precious moments captured after successful IVF',
      thumbnail: '/baby-photo.jpg'
    },
    {
      type: 'image',
      category: 'Success Moments',
      title: 'Family Celebration',
      description: 'Celebrating new life and fulfilled dreams',
      thumbnail: '/family-celebration.jpg'
    },
    {
      type: 'image',
      category: 'Awards',
      title: 'Excellence Award 2024',
      description: 'Recognition for outstanding fertility care services',
      thumbnail: '/award-1.jpg'
    },
    {
      type: 'image',
      category: 'Awards',
      title: 'Medical Conference Recognition',
      description: 'Dr. Neena Gupta receiving research recognition',
      thumbnail: '/award-2.jpg'
    }
  ]

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openLightbox = (item) => {
    setSelectedImage(item)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item === selectedImage)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
  }

  const previousImage = () => {
    const currentIndex = filteredItems.findIndex(item => item === selectedImage)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex])
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual tour of Metro IVF Hospital. Explore our state-of-the-art facilities, 
              meet our expert team, and witness moments of joy from our success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={index}
                onClick={() => openLightbox(item)}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  {/* Placeholder for image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <div className="text-center">
                      {item.type === 'video' ? (
                        <>
                          <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Play className="h-8 w-8 text-white ml-1" />
                          </div>
                          <p className="text-primary-600 font-semibold text-sm">{item.duration}</p>
                        </>
                      ) : (
                        <div className="w-16 h-16 bg-primary-200 rounded-lg mx-auto flex items-center justify-center">
                          <span className="text-primary-600 font-bold text-lg">IMG</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.type === 'video' ? (
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-primary-600 ml-1" />
                        </div>
                      ) : (
                        <div className="text-white text-center">
                          <p className="text-sm font-medium">Click to view</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">A visual representation of our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '5000+', label: 'Procedures Completed' },
              { icon: Award, value: '30+', label: 'Years of Excellence' },
              { icon: Calendar, value: '6000+', label: 'Babies Delivered' },
              { icon: Users, value: '50+', label: 'Expert Team Members' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Take a Virtual Tour</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Experience our facilities from the comfort of your home with our interactive virtual tour.
          </p>
          
          <div className="bg-primary-700 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="aspect-video bg-primary-800 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <p className="text-white">360° Virtual Tour</p>
              </div>
            </div>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full max-h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between text-white mb-4">
              <div>
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
              <button 
                onClick={closeLightbox}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            {/* Image/Video */}
            <div className="relative flex-1 flex items-center justify-center">
              {selectedImage.type === 'video' ? (
                <div className="aspect-video w-full bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                    <p className="text-lg">Video: {selectedImage.title}</p>
                    <p className="text-gray-300">Duration: {selectedImage.duration}</p>
                  </div>
                </div>
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-2xl">IMG</span>
                    </div>
                    <p className="text-gray-600">High Resolution Image</p>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <button 
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-300 mt-4">
              <p className="text-sm">
                {filteredItems.findIndex(item => item === selectedImage) + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}