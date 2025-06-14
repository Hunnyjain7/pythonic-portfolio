import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Inter, Fira_Code, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/constants";
import Script from 'next/script';

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hunny Jain",
  "givenName": "Hunny",
  "familyName": "Jain",
  "alternateName": ["Hunny", "Mr. Hunny Jain"],
  "jobTitle": "Senior Python Developer & AI Engineer",
  "description": "Senior Python Developer & AI Engineer with expertise in Django, FastAPI, and Cloud Services. Specializing in enterprise-level backend development and AI/ML solutions.",
  "image": "/hunny-profile.jpg",
  "url": "https://hunnyjain.vercel.app",
  "sameAs": [
    "https://github.com/Hunnyjain7",
    "https://www.linkedin.com/in/hunnyjain7/",
    "https://x.com/hunnyjain5",
    "https://leetcode.com/hunnyjain711"
  ],
  "email": "hunnyjain711@gmail.com",
  "telephone": "+91 7567707082",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Ahmedabad, Gujarat",
    "addressCountry": "India"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Gujarat Technological University",
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Ahmedabad, Gujarat",
        "addressCountry": "India"
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
      "name": "Ahmedabad, Gujarat"
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
      "addressRegion": "Ahmedabad, Gujarat",
      "addressCountry": "India"
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Meta Tags */}
        <meta name="google-adsense-account" content="ca-pub-2950629050940113" />
      </head>
      <body>
        {children}
        {/* Google AdSense Script */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2950629050940113`}
          crossOrigin="anonymous"
        />
        {/* Test Ad Unit */}
        <div className="ad-container">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2950629050940113"
            data-ad-slot="5784099083"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <Script id="adsbygoogle-init-2">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </div>
      </body>
      <Analytics />
    </html>
  );
}

const handleScroll = (): void => {
  // ... rest of the code
};

const handleSubmit = async (e: React.FormEvent): Promise<void> => {
  // ... existing code
};

// First, define the interface
interface CertificationCardProps {
  title: string;
  institution: string;
  period: string;
  description: string;
  link: string;
}

// Then, add the return statement to the component
const CertificationCard = ({ 
  title, 
  institution, 
  period, 
  description, 
  link 
}: CertificationCardProps): React.JSX.Element => {
  return (  // Add explicit return statement
    <div className="mb-10 ml-8">
      <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
        <div className="flex justify-between flex-col sm:flex-row mb-1">
          <div>
            <span className="font-fira-code font-bold text-blue-400">~ $ </span>
            <span className="font-fira-code text-green-400">sudo apt-get </span>
            <span className="font-fira-code text-white">install </span>
            <span className="font-fira-code text-yellow-400">{title}</span>
          </div>
          <span className="font-fira-code text-gray-400 mt-1 sm:mt-0">{period}</span>
        </div>
        <div className="mb-4 font-fira-code">
          <span className="text-gray-300">$ institution = </span>
          <span className="text-green-300">&quot;{institution}&quot;</span>
        </div>
        <div className="mb-4">
          <span className="text-gray-300">{description}</span>
        </div>
        {link && (
          <div className="flex justify-end">
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              View Certificate
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const _education = [/* ... */];
const _certifications = [/* ... */];
