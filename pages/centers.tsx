import Layout from '@/components/Layout';
import Link from 'next/link';

interface Center {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  services: string[];
  image?: string;
}

const centers: Center[] = [
  {
    id: 'mumbai',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Mumbai',
    address: 'Multiple locations across Mumbai providing comprehensive rehabilitation services',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Neuro-rehabilitation', 'Dementia Care', '24/7 Care']
  },
  {
    id: 'pune',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Pune',
    address: 'Farm, Zhagade Wasti, Near Loni Toll Naka, Solapur - Pune Highway, Pune, Maharashtra',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Physical Therapy', 'Occupational Therapy']
  },
  {
    id: 'noida',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Noida',
    address: 'Modern rehabilitation center in Noida with expert medical professionals',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Detoxification', 'Aftercare Support']
  },
  {
    id: 'bangalore',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Bangalore',
    address: 'Comprehensive care facility in Bangalore serving patients across South India',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Neuro-rehabilitation', 'Family Therapy']
  },
  {
    id: 'hyderabad',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Hyderabad',
    address: 'Expert mental health and rehabilitation services in Hyderabad with personalized care',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Group Therapy', 'Individual Counseling']
  },
  {
    id: 'chennai',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Chennai',
    address: '944, 17th Main Rd, Sector H, Thirumoolar Colony, Anna Nagar, Chennai, Tamil Nadu',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Holistic Therapy', 'Yoga Therapy']
  },
  {
    id: 'navi-mumbai',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Navi Mumbai',
    address: 'Plot no 37, Sector 5, Siddhi Vinayak, Taloja Phase 1, Navi Mumbai, Maharashtra',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Speech Therapy', 'Art Therapy']
  },
  {
    id: 'gurgaon',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Gurgaon',
    address: 'State-of-the-art facility in Gurgaon offering specialized mental health services',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Cognitive Behavioral Therapy', 'Medication Management']
  },
  {
    id: 'ahmedabad',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Ahmedabad',
    address: 'Leading rehabilitation center in Ahmedabad providing comprehensive care',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Rehabilitation Services', 'Support Groups']
  },
  {
    id: 'delhi',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Delhi',
    address: 'Expert mental health and rehabilitation services in Delhi',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Crisis Intervention', 'Outpatient Services']
  },
  {
    id: 'surat',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Surat',
    address: 'Comprehensive rehabilitation services in Surat with modern facilities',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Residential Care', 'Day Care Programs']
  },
  {
    id: 'thane',
    name: 'Jagruti Rehabilitation Centre',
    city: 'Thane',
    address: 'Quality mental health and rehabilitation services in Thane',
    phone: '+91 9822207761',
    email: 'info@jagrutirehab.org',
    services: ['Mental Health Treatment', 'Addiction Treatment', 'Community Integration', 'Vocational Training']
  }
];

export default function CentersPage() {
  return (
    <Layout 
      title="Our Centers" 
      description="Find Jagruti Rehabilitation Centre locations across India. We have 17+ centers providing world-class mental health and rehabilitation services."
    >
      {/* Hero Banner */}
      <section style={{ position: 'relative', height: 300, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 48, margin: 0, fontWeight: 700 }}>Our Centers</h1>
          <p style={{ fontSize: 18, marginTop: 12, opacity: 0.9 }}>17+ locations across India providing world-class care</p>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'url(/placeholder.svg) center/cover', opacity: 0.2 }} />
      </section>

      {/* Centers Grid */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 32, textAlign: 'center' }}>
            <h2 className="section__title">Find a Center Near You</h2>
            <p style={{ fontSize: 16, color: '#6b7280', maxWidth: 700, margin: '0 auto' }}>
              Jagruti Rehabilitation Centre has multiple locations across India, each equipped with modern facilities 
              and expert medical professionals dedicated to your recovery and well-being.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {centers.map((center) => (
              <div 
                key={center.id} 
                style={{ 
                  background: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: 12, 
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ marginBottom: 16 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8, color: '#1f2937' }}>
                    {center.city}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, marginBottom: 16 }}>
                    {center.address}
                  </p>
                </div>

                <div style={{ marginBottom: 16, flex: 1 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: '#374151' }}>Services Offered:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {center.services.map((service, idx) => (
                      <li 
                        key={idx}
                        style={{
                          background: '#f3f4f6',
                          padding: '4px 10px',
                          borderRadius: 6,
                          fontSize: 12,
                          color: '#6b7280'
                        }}
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 16, marginTop: 'auto' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <a 
                      href={`tel:${center.phone}`} 
                      style={{ 
                        color: '#0b5cff', 
                        textDecoration: 'none', 
                        fontSize: 14, 
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8
                      }}
                    >
                      <span>📞</span> {center.phone}
                    </a>
                    <a 
                      href={`mailto:${center.email}`} 
                      style={{ 
                        color: '#0b5cff', 
                        textDecoration: 'none', 
                        fontSize: 14,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8
                      }}
                    >
                      <span>✉️</span> {center.email}
                    </a>
                    <Link 
                      href="/contact" 
                      className="btn btn--primary" 
                      style={{ 
                        marginTop: 8, 
                        fontSize: 14, 
                        padding: '10px 16px',
                        textAlign: 'center'
                      }}
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Centers Section */}
      <section className="section section--muted">
        <div className="container">
          <h2 className="section__title" style={{ textAlign: 'center', marginBottom: 48 }}>Why Choose Our Centers?</h2>
          <div className="features">
            <div className="feature">
              <h3>Expert Medical Team</h3>
              <p>Each center is staffed with highly qualified psychiatrists, psychologists, and therapists with years of experience.</p>
            </div>
            <div className="feature">
              <h3>Modern Facilities</h3>
              <p>State-of-the-art equipment and comfortable living spaces designed to promote healing and recovery.</p>
            </div>
            <div className="feature">
              <h3>24/7 Care</h3>
              <p>Round-the-clock supervision and support from trained and compassionate staff members.</p>
            </div>
            <div className="feature">
              <h3>Personalized Treatment</h3>
              <p>Individualized treatment plans tailored to each patient's unique needs and circumstances.</p>
            </div>
            <div className="feature">
              <h3>Comprehensive Services</h3>
              <p>Full spectrum of services from initial assessment to long-term rehabilitation and aftercare.</p>
            </div>
            <div className="feature">
              <h3>Proven Track Record</h3>
              <p>Thousands of successful recovery stories and high patient satisfaction rates across all centers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
          <h2 className="section__title">Ready to Visit Our Center?</h2>
          <p style={{ fontSize: 18, color: '#6b7280', marginBottom: 24 }}>
            Contact us today to schedule a visit or consultation at any of our centers. Our team is ready to help you.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn--primary" style={{ fontSize: 16, padding: '12px 24px' }}>
              Contact Us
            </Link>
            <a href="tel:+919822207761" className="btn btn--ghost" style={{ fontSize: 16, padding: '12px 24px' }}>
              Call: +91 9822207761
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

