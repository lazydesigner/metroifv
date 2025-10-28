'use client'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react'

export default function BlogPage() {
  const featuredPost = {
    title: 'Understanding IVF: A Beginner\'s Guide',
    excerpt: 'Learn everything about IVF in Kanpur with Metro IVF Hospital. Expert fertility care by Dr. Neena Gupta with 30+ years of experience.',
    date: 'September 20, 2025',
    readTime: '8 min read',
    author: 'Dr. Neena Gupta',
    slug: 'understanding-ivf-beginners-guide',
    image: '/blog-ivf-guide.jpg',
    featured: true
  }

  const blogPosts = [
    {
      title: 'IVF Success Rates: What You Need to Know',
      excerpt: 'Understanding IVF success rates and factors that influence your chances of conception with expert insights from Metro IVF Hospital.',
      date: 'September 15, 2025',
      readTime: '6 min read',
      author: 'Dr. Bhaskar Gupta',
      slug: 'ivf-success-rates-explained',
      category: 'IVF Treatment'
    },
    {
      title: 'Preparing for Your First IVF Cycle',
      excerpt: 'Essential tips and guidelines to prepare your body and mind for your first IVF cycle at our Kanpur fertility center.',
      date: 'September 10, 2025',
      readTime: '5 min read',
      author: 'Dr. Neena Gupta',
      slug: 'preparing-first-ivf-cycle',
      category: 'IVF Treatment'
    },
    {
      title: 'Male Infertility: Causes and Modern Treatments',
      excerpt: 'Comprehensive guide to male fertility issues, diagnostic approaches, and advanced treatment options available in Kanpur.',
      date: 'September 5, 2025',
      readTime: '7 min read',
      author: 'Dr. Bhaskar Gupta',
      slug: 'male-infertility-causes-treatments',
      category: 'Male Fertility'
    },
    {
      title: 'PCOS and Fertility: Managing Your Reproductive Health',
      excerpt: 'How PCOS affects fertility and effective management strategies to improve your chances of natural conception.',
      date: 'August 30, 2025',
      readTime: '6 min read',
      author: 'Dr. Neena Gupta',
      slug: 'pcos-fertility-management',
      category: 'Women\'s Health'
    },
    {
      title: 'Egg Freezing: Preserving Your Future Fertility',
      excerpt: 'Everything you need to know about egg freezing, including the process, costs, and success rates at Metro IVF Hospital.',
      date: 'August 25, 2025',
      readTime: '5 min read',
      author: 'Dr. Neena Gupta',
      slug: 'egg-freezing-guide',
      category: 'Fertility Preservation'
    },
    {
      title: 'Nutrition and Fertility: Foods That Boost Reproductive Health',
      excerpt: 'Discover the connection between nutrition and fertility, including foods that can enhance your reproductive health.',
      date: 'August 20, 2025',
      readTime: '4 min read',
      author: 'Metro IVF Team',
      slug: 'nutrition-fertility-foods',
      category: 'Lifestyle'
    }
  ]

  const categories = [
    'All Posts',
    'IVF Treatment',
    'Male Fertility',
    'Women\'s Health',
    'Fertility Preservation',
    'Lifestyle'
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fertility Blog & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, treatment guides, and the latest developments in fertility care 
              from the specialists at Metro IVF Hospital Kanpur.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for fertility topics..."
                className="w-full px-6 py-4 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-primary-600"></div>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium mr-3">
                    Featured
                  </span>
                  <Calendar className="h-4 w-4 mr-1" />
                  {featuredPost.date}
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  {featuredPost.readTime}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    By {featuredPost.author}
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 inline-flex items-center"
                  >
                    Read Full Article <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-primary-200 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-2xl">IVF</span>
                  </div>
                  <p className="text-gray-600">Featured Article Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-primary-100 hover:text-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-primary-600 font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-600 text-sm">Blog Post Image</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 font-medium text-sm hover:text-primary-700 flex items-center"
                    >
                      Read More <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                  
                  <div className="text-xs text-gray-400 mt-2 pt-2 border-t">
                    {post.date}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Fertility Insights</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest fertility tips, treatment updates, 
            and success stories from Metro IVF Hospital.
          </p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
          
          <p className="text-primary-200 text-sm mt-4">
            No spam, unsubscribe anytime. Your privacy is important to us.
          </p>
        </div>
      </section>
    </>
  )
}