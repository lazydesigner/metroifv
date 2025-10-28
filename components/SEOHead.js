import Head from 'next/head'

export default function SEOHead({ 
  title = "Metro IVF Hospital Kanpur - Best IVF Treatment Center",
  description = "Metro IVF Hospital in Kanpur offers advanced IVF treatments with 30+ years of experience. Led by Dr. Neena Gupta, we provide personalized fertility care.",
  keywords = "IVF in Kanpur, fertility treatment, Metro IVF Hospital, Dr. Neena Gupta, infertility treatment",
  canonical = "",
  ogImage = "/og-image.jpg"
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Metro IVF Hospital" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Metro IVF Hospital" />
    </Head>
  )
}