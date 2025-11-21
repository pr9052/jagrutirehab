import type { WpPost, WpCategory } from './wp';

export const mockCategories: WpCategory[] = [
  { id: 1, name: 'Addiction Treatment', slug: 'addiction-treatment' },
  { id: 2, name: 'Mental Health', slug: 'mental-health' },
  { id: 3, name: 'Rehabilitation', slug: 'rehabilitation' },
  { id: 4, name: 'Recovery Stories', slug: 'recovery-stories' },
  { id: 5, name: 'Wellness Tips', slug: 'wellness-tips' }
];

export const mockPosts: WpPost[] = [
  {
    id: 1,
    slug: 'mansik-rog-aur-vyasan-ka-sanyukt-ilaj',
    date: '2025-01-15T10:00:00',
    title: { rendered: 'मानसिक रोगों और व्यसन का संयुक्त इलाज' },
    excerpt: { rendered: '<p>मानसिक रोग और व्यसन का संयुक्त इलाज एक व्यापक दृष्टिकोण है जो दोनों स्थितियों को एक साथ संबोधित करता है।</p>' },
    content: {
      rendered: `
        <h2>मानसिक रोग और व्यसन: एक जटिल संबंध</h2>
        <p>मानसिक रोग और व्यसन अक्सर एक साथ होते हैं, जिसे co-occurring disorders कहा जाता है। यह एक जटिल स्थिति है जिसके लिए विशेषज्ञ देखभाल की आवश्यकता होती है।</p>
        <h3>संयुक्त इलाज की आवश्यकता क्यों है?</h3>
        <p>जब मानसिक रोग और व्यसन एक साथ होते हैं, तो केवल एक का इलाज करना पर्याप्त नहीं है। दोनों को समन्वित तरीके से संबोधित करना आवश्यक है।</p>
        <h3>मानसिक रोग उपचार के मुख्य घटक</h3>
        <ul>
          <li>मनोचिकित्सा और परामर्श</li>
          <li>दवा प्रबंधन</li>
          <li>समूह चिकित्सा</li>
          <li>परिवार सहायता</li>
        </ul>
        <h3>मानसिक रोग और नशा सही इलाज केंद्र कैसे चुनें?</h3>
        <p>एक अच्छा इलाज केंद्र वह है जो दोनों स्थितियों के लिए अनुभवी चिकित्सकों और व्यापक उपचार योजनाओं की पेशकश करता है।</p>
      `
    },
    author: 1,
    categories: [1, 2],
    _embedded: {
      author: [{ id: 1, name: 'Dr. Amar Shinde', slug: 'dr-amar-shinde' }],
      'wp:featuredmedia': [{ source_url: 'https://via.placeholder.com/800x400?text=Blog+Image' }],
      'wp:term': [[{ id: 1, name: 'Addiction Treatment', slug: 'addiction-treatment' }, { id: 2, name: 'Mental Health', slug: 'mental-health' }]]
    }
  },
  {
    id: 2,
    slug: 'top-10-nasha-mukti-kendra-in-noida',
    date: '2025-01-10T10:00:00',
    title: { rendered: 'Top 10 Nasha Mukti Kendra in Noida (2025 Rankings)' },
    excerpt: { rendered: '<p>Discover the best rehabilitation centers in Noida for addiction treatment and recovery support.</p>' },
    content: {
      rendered: `
        <h2>Best Rehabilitation Centers in Noida</h2>
        <p>Noida is home to several excellent rehabilitation centers that provide comprehensive addiction treatment services.</p>
        <h3>What to Look for in a Rehabilitation Center</h3>
        <ul>
          <li>Licensed and certified facilities</li>
          <li>Experienced medical professionals</li>
          <li>Comprehensive treatment programs</li>
          <li>Aftercare support</li>
        </ul>
      `
    },
    author: 1,
    categories: [1, 3],
    _embedded: {
      author: [{ id: 1, name: 'Dr. Amar Shinde', slug: 'dr-amar-shinde' }],
      'wp:featuredmedia': [{ source_url: 'https://via.placeholder.com/800x400?text=Noida+Rehab' }],
      'wp:term': [[{ id: 1, name: 'Addiction Treatment', slug: 'addiction-treatment' }, { id: 3, name: 'Rehabilitation', slug: 'rehabilitation' }]]
    }
  },
  {
    id: 3,
    slug: 'signs-need-nasha-mukti-kendra-gurgaon',
    date: '2025-01-08T10:00:00',
    title: { rendered: 'Top 7 Signs You or a Loved One Needs a Nasha Mukti Kendra in Gurgaon' },
    excerpt: { rendered: '<p>Recognizing the warning signs that indicate the need for professional addiction treatment.</p>' },
    content: {
      rendered: `
        <h2>Warning Signs of Addiction</h2>
        <p>Early recognition of addiction signs can lead to timely intervention and better recovery outcomes.</p>
        <h3>Key Warning Signs</h3>
        <ol>
          <li>Increased tolerance to substances</li>
          <li>Withdrawal symptoms</li>
          <li>Neglecting responsibilities</li>
          <li>Relationship problems</li>
          <li>Financial difficulties</li>
          <li>Health issues</li>
          <li>Loss of interest in activities</li>
        </ol>
      `
    },
    author: 1,
    categories: [1],
    _embedded: {
      author: [{ id: 1, name: 'Dr. Amar Shinde', slug: 'dr-amar-shinde' }],
      'wp:featuredmedia': [{ source_url: 'https://via.placeholder.com/800x400?text=Warning+Signs' }],
      'wp:term': [[{ id: 1, name: 'Addiction Treatment', slug: 'addiction-treatment' }]]
    }
  },
  {
    id: 4,
    slug: 'difference-between-ganja-and-bhang',
    date: '2025-01-13T10:00:00',
    title: { rendered: "What's the Difference Between Ganja and Bhang?" },
    excerpt: { rendered: '<p>Understanding the key differences between ganja and bhang, their effects, and legal status in India.</p>' },
    content: {
      rendered: `
        <h2>Ganja vs Bhang: Key Differences</h2>
        <p>While both ganja and bhang come from the cannabis plant, they have distinct characteristics and uses.</p>
        <h3>What is Ganja?</h3>
        <p>Ganja refers to the dried flowers and leaves of the cannabis plant, typically smoked or consumed.</p>
        <h3>What is Bhang?</h3>
        <p>Bhang is a traditional preparation made from cannabis leaves and flowers, often consumed as a drink or edible.</p>
      `
    },
    author: 1,
    categories: [1, 5],
    _embedded: {
      author: [{ id: 1, name: 'Dr. Amar Shinde', slug: 'dr-amar-shinde' }],
      'wp:featuredmedia': [{ source_url: 'https://via.placeholder.com/800x400?text=Ganja+vs+Bhang' }],
      'wp:term': [[{ id: 1, name: 'Addiction Treatment', slug: 'addiction-treatment' }, { id: 5, name: 'Wellness Tips', slug: 'wellness-tips' }]]
    }
  },
  {
    id: 5,
    slug: 'best-mental-hospital-bangalore',
    date: '2025-01-05T10:00:00',
    title: { rendered: 'How to Choose the Best Mental Hospital in Bangalore' },
    excerpt: { rendered: '<p>A comprehensive guide to selecting the right mental health facility in Bangalore for yourself or a loved one.</p>' },
    content: {
      rendered: `
        <h2>Choosing a Mental Health Facility</h2>
        <p>Selecting the right mental health hospital is crucial for effective treatment and recovery.</p>
        <h3>Factors to Consider</h3>
        <ul>
          <li>Accreditation and licensing</li>
          <li>Specialized treatment programs</li>
          <li>Qualified medical staff</li>
          <li>Facility amenities</li>
          <li>Location and accessibility</li>
        </ul>
      `
    },
    author: 1,
    categories: [2, 3],
    _embedded: {
      author: [{ id: 1, name: 'Dr. Amar Shinde', slug: 'dr-amar-shinde' }],
      'wp:featuredmedia': [{ source_url: 'https://via.placeholder.com/800x400?text=Mental+Hospital' }],
      'wp:term': [[{ id: 2, name: 'Mental Health', slug: 'mental-health' }, { id: 3, name: 'Rehabilitation', slug: 'rehabilitation' }]]
    }
  }
];

export function getMockPostBySlug(slug: string): WpPost | null {
  return mockPosts.find(p => p.slug === slug) || null;
}

export function getMockPosts(params: { perPage?: number; page?: number; categoryId?: number } = {}) {
  let filtered = [...mockPosts];
  if (params.categoryId) {
    filtered = filtered.filter(p => p.categories?.includes(params.categoryId!));
  }
  const perPage = params.perPage ?? 12;
  const page = params.page ?? 1;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const posts = filtered.slice(start, end);
  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage);
  return { posts, total, totalPages };
}

export function getMockRelatedPosts(currentSlug: string, limit = 3): WpPost[] {
  const current = mockPosts.find(p => p.slug === currentSlug);
  if (!current) return mockPosts.slice(0, limit);
  const related = mockPosts.filter(p => 
    p.slug !== currentSlug && 
    p.categories?.some(cat => current.categories?.includes(cat))
  );
  return related.slice(0, limit);
}

export function getMockTrendingPosts(limit = 1): WpPost[] {
  return mockPosts.slice(0, limit);
}

export function getMockFeaturedPosts(limit = 3): WpPost[] {
  return mockPosts.slice(1, 1 + limit);
}

