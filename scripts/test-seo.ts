import axios from 'axios';
import { Parser } from 'xml2js';

interface SitemapUrl {
  loc: string[];
  priority: string[];
}

interface SitemapData {
  urlset: {
    url: SitemapUrl[];
  };
}

// Replace error: any with proper type
interface ApiError {
  message: string;
}

async function testSEO(): Promise<void> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hunnyjain.vercel.app';
  const parser = new Parser();
  
  console.log('🔍 Starting SEO Tests...\n');

  // Test 1: Check sitemap.xml
  try {
    console.log('📋 Testing sitemap.xml...');
    const sitemapResponse = await axios.get(`${baseUrl}/sitemap.xml`);
    const sitemapData = await parser.parseStringPromise(sitemapResponse.data) as SitemapData;
    const urls = sitemapData.urlset.url;
    
    console.log(`✅ Sitemap is accessible and contains ${urls.length} URLs`);
    console.log('📊 URL Priorities:');
    urls.forEach((url) => {
      console.log(`   - ${url.loc[0]}: Priority ${url.priority[0]}`);
    });
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'message' in error) {
      console.error('❌ Error accessing sitemap.xml:', error.message);
    } else {
      console.error('❌ Error accessing sitemap.xml:', 'Unknown error occurred');
    }
  }

  // Test 2: Check robots.txt
  try {
    console.log('\n🤖 Testing robots.txt...');
    const robotsResponse = await axios.get(`${baseUrl}/robots.txt`);
    console.log('✅ robots.txt is accessible');
    console.log('📄 Content:');
    console.log(robotsResponse.data);
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'message' in error) {
      console.error('❌ Error accessing robots.txt:', error.message);
    } else {
      console.error('❌ Error accessing robots.txt:', 'Unknown error occurred');
    }
  }

  // Test 3: Check meta tags
  try {
    console.log('\n🔑 Testing meta tags...');
    const htmlResponse = await axios.get(baseUrl);
    const html = htmlResponse.data as string;
    
    const hasTitle = html.includes('<title>');
    const hasDescription = html.includes('meta name="description"');
    const hasOpenGraph = html.includes('og:title');
    const hasTwitterCard = html.includes('twitter:card');
    
    console.log('Meta Tags Status:');
    console.log(`   - Title Tag: ${hasTitle ? '✅' : '❌'}`);
    console.log(`   - Description: ${hasDescription ? '✅' : '❌'}`);
    console.log(`   - Open Graph: ${hasOpenGraph ? '✅' : '❌'}`);
    console.log(`   - Twitter Card: ${hasTwitterCard ? '✅' : '❌'}`);
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'message' in error) {
      console.error('❌ Error checking meta tags:', error.message);
    } else {
      console.error('❌ Error checking meta tags:', 'Unknown error occurred');
    }
  }

  // Test 4: Check structured data
  try {
    console.log('\n📊 Testing structured data...');
    const htmlResponse = await axios.get(baseUrl);
    const html = htmlResponse.data as string;
    
    const hasJsonLd = html.includes('application/ld+json');
    console.log(`   - JSON-LD: ${hasJsonLd ? '✅' : '❌'}`);
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'message' in error) {
      console.error('❌ Error checking structured data:', error.message);
    } else {
      console.error('❌ Error checking structured data:', 'Unknown error occurred');
    }
  }
}

testSEO().catch(console.error); 