import type { Metadata } from "next";
import { Inter, Fira_Code, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: 'Hunny Jain | Senior Python Developer & AI Engineer from Gujarat',
  description: 'Hunny Jain is a Senior Python Developer with 3+ years of experience in Django, FastAPI, and AI technologies. Based in Gujarat, India. Expert in backend development, AI solutions, and cloud services.',
  keywords: 'Hunny Jain, Hunny Jain Developer, Python Developer Gujarat, Senior Python Developer India, Django Expert, AI Engineer Gujarat, Backend Developer India, Hunny Jain Portfolio, Software Engineer Gujarat, Python Consultant India, AI Solutions Expert, Full Stack Developer Gujarat',
  authors: [{ name: 'Hunny Jain', url: 'https://hunnyjain.vercel.app' }],
  creator: 'Hunny Jain',
  publisher: 'Hunny Jain',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hunnyjain.vercel.app'),
  openGraph: {
    title: 'Hunny Jain - Python Developer & AI Enthusiast',
    description: 'Software Engineer with 3+ years of experience in Python development. Expert in Django, Flask, FastAPI, and AI technologies.',
    url: 'https://hunnyjain.vercel.app',
    siteName: 'Hunny Jain Portfolio',
    images: [
      {
        url: '/hunny-profile.jpg',
        width: 800,
        height: 600,
        alt: SITE_CONFIG.TITLE,
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: SITE_CONFIG.LOCATION.COUNTRY,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hunny Jain - Python Developer & AI Enthusiast',
    description: 'Software Engineer with 3+ years of experience in Python development. Expert in Django, Flask, FastAPI, and AI technologies.',
    creator: '@hunnyjain5',
    images: ['/hunny-profile.jpg'],
    site: '@hunnyjain5',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      noimageindex: false
    },
  },
  alternates: {
    canonical: 'https://hunnyjain.vercel.app',
    languages: {
      'en-US': SITE_CONFIG.FULL_DOMAIN,
    },
  },
  verification: {
    google: 'xvlPbtDp-598AXY_lrM7N_W5ytpSW_NwkrDhVK5sPgw',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#1e1e1e" />
        <meta name="google-site-verification" content="xvlPbtDp-598AXY_lrM7N_W5ytpSW_NwkrDhVK5sPgw" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "${SITE_CONFIG.AUTHOR}",
              "givenName": "Hunny",
              "familyName": "Jain",
              "alternateName": ["Hunny", "Mr. Hunny Jain"],
              "jobTitle": "Senior Python Developer & AI Engineer",
              "description": "Senior Python Developer & AI Engineer with expertise in Django, FastAPI, and Cloud Services. Specializing in enterprise-level backend development and AI/ML solutions.",
              "image": "/hunny-profile.jpg",
              "url": "${SITE_CONFIG.FULL_DOMAIN}",
              "sameAs": [
                "${SITE_CONFIG.GITHUB_URL}",
                "${SITE_CONFIG.LINKEDIN_URL}",
                "${SITE_CONFIG.TWITTER_URL}",
                "${SITE_CONFIG.LEETCODE_URL}"
              ],
              "email": "${SITE_CONFIG.EMAIL}",
              "telephone": "${SITE_CONFIG.PHONE}",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "${SITE_CONFIG.LOCATION.REGION}",
                "addressCountry": "${SITE_CONFIG.LOCATION.COUNTRY}"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Gujarat Technological University",
                "location": {
                  "@type": "Place",
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "${SITE_CONFIG.LOCATION.REGION}",
                    "addressCountry": "${SITE_CONFIG.LOCATION.COUNTRY}"
                  }
                }
              },
              "knowsAbout": [
                "Python Development",
                "Django Framework",
                "FastAPI",
                "Artificial Intelligence",
                "Machine Learning",
                "Backend Development",
                "Cloud Services (AWS, GCP)",
                "Full Stack Development",
                "API Development",
                "Database Management",
                "Enterprise Software Development",
                "Microservices Architecture",
                "DevOps",
                "System Design"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Senior Python Developer",
                "occupationLocation": {
                  "@type": "City",
                  "name": "${SITE_CONFIG.LOCATION.REGION}"
                },
                "skills": [
                  "Python",
                  "Django",
                  "AI/ML",
                  "Cloud Services",
                  "Backend Development",
                  "System Architecture",
                  "Technical Leadership"
                ],
                "description": "Experienced Python Developer specializing in backend development and AI solutions"
              },
              "workLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "${SITE_CONFIG.LOCATION.REGION}",
                  "addressCountry": "${SITE_CONFIG.LOCATION.COUNTRY}"
                }
              },
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Python Development Services",
                  "description": "Professional Python development services including backend development, AI solutions, and enterprise applications"
                }
              }
            }
          `}
        </script>
      </head>
      <body className={`${inter.variable} ${firaCode.variable} ${jetbrainsMono.variable} font-sans bg-[#1e1e1e] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
