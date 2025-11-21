import Layout from '@/components/Layout';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <Layout 
      title="About Us" 
      description="Learn about Jagruti Rehabilitation Centre - India's premier healthcare organization providing world-class mental health and rehabilitation services."
    >
      {/* Hero Banner */}
      <section style={{ position: 'relative', height: 300, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 48, margin: 0, fontWeight: 700 }}>About Us</h1>
          <p style={{ fontSize: 18, marginTop: 12, opacity: 0.9 }}>Committed to excellence in mental health and rehabilitation care</p>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'url(/placeholder.svg) center/cover', opacity: 0.2 }} />
      </section>

      {/* About Jagruti Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 className="section__title">About Jagruti</h2>
          <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
            <p>
              Jagruti Rehabilitation Centre is one of India's premier healthcare organizations specializing in mental health disorders, 
              neurological disorders, dementia care, and comprehensive rehabilitation services. With a commitment to excellence and 
              compassionate care, we have been at the forefront of providing world-class treatment facilities and personalized care 
              to thousands of patients across the country.
            </p>
            <p>
              Our mission is to help individuals regain their independence, improve their quality of life, and achieve lasting recovery 
              through evidence-based treatments, expert medical care, and a supportive environment. We understand that every patient 
              is unique, and we tailor our treatment approaches to meet individual needs and circumstances.
            </p>
            <p>
              At Jagruti, we believe in a holistic approach to rehabilitation that addresses not just the physical and mental aspects 
              of recovery, but also the emotional, social, and spiritual dimensions of healing. Our multidisciplinary team of experienced 
              psychiatrists, psychologists, therapists, and support staff work together to provide comprehensive care that promotes 
              long-term wellness and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section section--muted">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            <div>
              <h2 className="section__title" style={{ fontSize: 32 }}>Our Mission</h2>
              <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
                <p>
                  To provide world-class mental health and rehabilitation services that empower individuals to overcome challenges, 
                  regain independence, and achieve their full potential. We are committed to delivering personalized, evidence-based 
                  care in a compassionate and supportive environment.
                </p>
                <p>
                  Our mission extends beyond treatment to include prevention, education, and community support, ensuring that mental 
                  health and rehabilitation services are accessible to all who need them.
                </p>
              </div>
            </div>
            <div>
              <h2 className="section__title" style={{ fontSize: 32 }}>Our Vision</h2>
              <div style={{ fontSize: 16, lineHeight: 1.8, color: '#374151' }}>
                <p>
                  To be India's leading rehabilitation and mental health care provider, recognized for excellence in clinical outcomes, 
                  innovation in treatment approaches, and unwavering commitment to patient-centered care.
                </p>
                <p>
                  We envision a future where mental health is prioritized, stigma is eliminated, and every individual has access to 
                  quality rehabilitation services that enable them to live fulfilling, independent lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Why Choose Jagruti?</h2>
          <div className="features">
            <div className="feature">
              <h3>Expert Medical Team</h3>
              <p>Our team consists of highly qualified psychiatrists, psychologists, and therapists with years of experience in mental health and rehabilitation.</p>
            </div>
            <div className="feature">
              <h3>Comprehensive Care</h3>
              <p>We offer a full spectrum of services from initial assessment to long-term rehabilitation and aftercare support.</p>
            </div>
            <div className="feature">
              <h3>Personalized Treatment</h3>
              <p>Every treatment plan is customized to meet the unique needs, goals, and circumstances of each patient.</p>
            </div>
            <div className="feature">
              <h3>Modern Facilities</h3>
              <p>State-of-the-art facilities equipped with advanced medical equipment and comfortable living spaces.</p>
            </div>
            <div className="feature">
              <h3>Multiple Locations</h3>
              <p>With centers across major cities in India, we bring quality care closer to you.</p>
            </div>
            <div className="feature">
              <h3>Proven Results</h3>
              <p>Thousands of successful recovery stories and high patient satisfaction rates demonstrate our commitment to excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section section--muted">
        <div className="container">
          <h2 className="section__title" style={{ textAlign: 'center', marginBottom: 48 }}>Our Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: 48, fontWeight: 700, color: '#0b5cff', marginBottom: 8 }}>82,000+</div>
              <div style={{ fontSize: 16, color: '#6b7280' }}>Lives Saved</div>
            </div>
            <div>
              <div style={{ fontSize: 48, fontWeight: 700, color: '#0b5cff', marginBottom: 8 }}>17+</div>
              <div style={{ fontSize: 16, color: '#6b7280' }}>Locations</div>
            </div>
            <div>
              <div style={{ fontSize: 48, fontWeight: 700, color: '#0b5cff', marginBottom: 8 }}>100+</div>
              <div style={{ fontSize: 16, color: '#6b7280' }}>Expert Doctors</div>
            </div>
            <div>
              <div style={{ fontSize: 48, fontWeight: 700, color: '#0b5cff', marginBottom: 8 }}>24/7</div>
              <div style={{ fontSize: 16, color: '#6b7280' }}>Care Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Our Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>Mental Health Treatment</h3>
              <ul style={{ color: '#6b7280', lineHeight: 1.8, paddingLeft: 20 }}>
                <li>Depression & Anxiety</li>
                <li>Bipolar Disorder</li>
                <li>Schizophrenia</li>
                <li>OCD & Phobias</li>
                <li>Personality Disorders</li>
              </ul>
            </div>
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>Addiction Treatment</h3>
              <ul style={{ color: '#6b7280', lineHeight: 1.8, paddingLeft: 20 }}>
                <li>Alcohol Addiction</li>
                <li>Drug Rehabilitation</li>
                <li>Detoxification</li>
                <li>Relapse Prevention</li>
                <li>Aftercare Support</li>
              </ul>
            </div>
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>Rehabilitation Services</h3>
              <ul style={{ color: '#6b7280', lineHeight: 1.8, paddingLeft: 20 }}>
                <li>Neuro-rehabilitation</li>
                <li>Physical Therapy</li>
                <li>Occupational Therapy</li>
                <li>Speech Therapy</li>
                <li>Dementia Care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--muted">
        <div className="container" style={{ textAlign: 'center', maxWidth: 700 }}>
          <h2 className="section__title">Ready to Begin Your Journey to Recovery?</h2>
          <p style={{ fontSize: 18, color: '#6b7280', marginBottom: 24 }}>
            Contact us today to learn more about our services and how we can help you or your loved one.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#appointment" className="btn btn--primary" style={{ fontSize: 16, padding: '12px 24px' }}>
              Book An Appointment
            </a>
            <a href="tel:+919822207761" className="btn btn--ghost" style={{ fontSize: 16, padding: '12px 24px' }}>
              Call Us: +91 9822207761
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

