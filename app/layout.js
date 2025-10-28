import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Metro IVF Hospital Kanpur - Best IVF Treatment Center',
    template: '%s | Metro IVF Hospital Kanpur'
  },
  description: 'Metro IVF Hospital in Kanpur offers advanced IVF treatments with 30+ years of experience. Led by Dr. Neena Gupta, we provide personalized fertility care near Gurudev Crossing.',
  keywords: [
    'IVF in Kanpur',
    'fertility treatment',
    'Metro IVF Hospital',
    'Dr. Neena Gupta',
    'infertility treatment',
    'test tube baby',
    'IUI treatment',
    'male infertility',
    'PCOS treatment',
    'egg freezing',
    'reproductive medicine Kanpur',
    'fertility clinic Kanpur',
    'Gurudev Crossing',
    'Lakhanpur'
  ].join(', '),
  authors: [
    { name: 'Metro IVF Hospital' },
    { name: 'Dr. Neena Gupta' },
    { name: 'Dr. Bhaskar Gupta' }
  ],
  creator: 'Metro IVF Hospital',
  publisher: 'Metro IVF Hospital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://metroivfhospital.com',
    title: 'Metro IVF Hospital Kanpur - Best IVF Treatment Center',
    description: 'Advanced IVF treatments with 30+ years of experience in Kanpur. Led by Dr. Neena Gupta with internationally comparable success rates.',
    siteName: 'Metro IVF Hospital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Metro IVF Hospital Kanpur - Leading Fertility Center',
      },
      {
        url: '/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'Metro IVF Hospital - Dr. Neena Gupta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metro IVF Hospital Kanpur - Best IVF Treatment Center',
    description: 'Advanced IVF treatments with 30+ years of experience in Kanpur',
    creator: '@metroivfkanpur',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://metroivfhospital.com',
    languages: {
      'en-IN': 'https://metroivfhospital.com',
      'hi-IN': 'https://metroivfhospital.com/hi',
    },
  },
  category: 'healthcare',
  classification: 'medical',
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Kanpur',
    'geo.position': '26.4499;80.3319',
    'ICBM': '26.4499, 80.3319',
    'business:contact_data:locality': 'Kanpur',
    'business:contact_data:region': 'Uttar Pradesh',
    'business:contact_data:postal_code': '208024',
    'business:contact_data:country_name': 'India',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0284c7' },
  ],
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Metro IVF Hospital',
  alternateName: 'Metro IVF Hospital Kanpur',
  description: 'Leading fertility treatment center in Kanpur providing IVF, IUI, and comprehensive reproductive medicine services.',
  url: 'https://metroivfhospital.com',
  logo: 'https://metroivfhospital.com/logo.png',
  image: 'https://metroivfhospital.com/hospital-building.jpg',
  telephone: '+91-94151-34428',
  email: 'drneenaguptametro@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10A, GT Rd, near Gurudev Crossing, Lakhanpur, Khyora',
    addressLocality: 'Kanpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '208024',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.4499,
    longitude: 80.3319
  },
  openingHours: [
    'Mo-Sa 09:00-18:00',
    'Su 10:00-16:00'
  ],
  medicalSpecialty: [
    'Reproductive Endocrinology',
    'Fertility Medicine',
    'IVF Treatment',
    'IUI Treatment',
    'Male Infertility',
    'Gynecology'
  ],
  foundingDate: '1990',
  founder: {
    '@type': 'Person',
    name: 'Dr. Neena Gupta'
  },
  employee: [
    {
      '@type': 'Physician',
      name: 'Dr. Neena Gupta',
      jobTitle: 'Senior Fertility Specialist & Director',
      worksFor: {
        '@type': 'MedicalOrganization',
        name: 'Metro IVF Hospital'
      },
      medicalSpecialty: 'Reproductive Endocrinology',
      alumniOf: 'Medical College',
      yearsOfExperience: '30+'
    },
    {
      '@type': 'Physician', 
      name: 'Dr. Bhaskar Gupta',
      jobTitle: 'Reproductive Endocrinologist & Andrologist',
      worksFor: {
        '@type': 'MedicalOrganization',
        name: 'Metro IVF Hospital'
      },
      medicalSpecialty: 'Andrology',
      yearsOfExperience: '25+'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fertility Treatments',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'IVF Treatment',
          description: 'In Vitro Fertilization with advanced laboratory techniques'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'IUI Treatment', 
          description: 'Intrauterine Insemination for fertility enhancement'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Fertility Assessment',
          description: 'Comprehensive fertility evaluation and testing'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.9,
    reviewCount: 1250,
    bestRating: 5,
    worstRating: 1
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5
      },
      author: {
        '@type': 'Person',
        name: 'Priya Sharma'
      },
      reviewBody: 'Excellent care and successful IVF treatment. Dr. Neena Gupta is highly experienced and compassionate.'
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Metro IVF Hospital" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Google Analytics - Replace with your tracking ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}