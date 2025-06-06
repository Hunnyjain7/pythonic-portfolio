import { NextResponse } from 'next/server';

export async function GET(): Promise<Response> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hunnyjain.vercel.app';
  const currentDate = new Date().toISOString();

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 