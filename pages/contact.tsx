import Layout from '@/components/Layout';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    appointmentType: 'Offline'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '', appointmentType: 'Offline' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout 
      title="Contact Us" 
      description="Get in touch with Jagruti Rehabilitation Centre. Contact us for appointments, inquiries, or support."
    >
      {/* Hero Banner */}
      <section style={{ position: 'relative', height: 300, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 48, margin: 0, fontWeight: 700 }}>Contact Us</h1>
          <p style={{ fontSize: 18, marginTop: 12, opacity: 0.9 }}>We're here to help you on your journey to recovery</p>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'url(/placeholder.svg) center/cover', opacity: 0.2 }} />
      </section>

      {/* Contact Information & Form Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48 }}>
            {/* Contact Information */}
            <div>
              <h2 className="section__title" style={{ fontSize: 32, marginBottom: 24 }}>Get In Touch</h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: '#374151', marginBottom: 32 }}>
                Have questions or need assistance? Our team is available 24/7 to help you. Reach out to us through any of the following ways.
              </p>

              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, color: '#1f2937' }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 24 }}>📞</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Phone</h4>
                      <a href="tel:+919822207761" style={{ color: '#0b5cff', textDecoration: 'none', fontSize: 16 }}>
                        +91 9822207761
                      </a>
                      <p style={{ color: '#6b7280', fontSize: 14, marginTop: 4 }}>Available 24/7</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 24 }}>✉️</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Email</h4>
                      <a href="mailto:info@jagrutirehab.org" style={{ color: '#0b5cff', textDecoration: 'none', fontSize: 16 }}>
                        info@jagrutirehab.org
                      </a>
                      <p style={{ color: '#6b7280', fontSize: 14, marginTop: 4 }}>We respond within 24 hours</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: 24 }}>💬</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>WhatsApp</h4>
                      <a href="https://wa.me/919822207761" target="_blank" rel="noopener noreferrer" style={{ color: '#0b5cff', textDecoration: 'none', fontSize: 16 }}>
                        Connect via WhatsApp
                      </a>
                      <p style={{ color: '#6b7280', fontSize: 14, marginTop: 4 }}>Quick response guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, color: '#1f2937' }}>Office Hours</h3>
                <div style={{ background: '#f6f7fb', borderRadius: 12, padding: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span style={{ color: '#374151' }}>Monday - Friday</span>
                    <span style={{ fontWeight: 600, color: '#1f2937' }}>9:00 AM - 8:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span style={{ color: '#374151' }}>Saturday</span>
                    <span style={{ fontWeight: 600, color: '#1f2937' }}>9:00 AM - 6:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#374151' }}>Sunday</span>
                    <span style={{ fontWeight: 600, color: '#1f2937' }}>Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section__title" style={{ fontSize: 32, marginBottom: 24 }}>Quick Enquiry</h2>
              <form onSubmit={handleSubmit} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 32 }}>
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="appointmentType" style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#374151' }}>
                    Select Appointment Type
                  </label>
                  <select
                    id="appointmentType"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 16 }}
                  >
                    <option value="Offline">Offline</option>
                    <option value="Online">Online</option>
                  </select>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#374151' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 16 }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#374151' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 16 }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#374151' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 16 }}
                    placeholder="+91 9876543210"
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#374151' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 16 }}
                    placeholder="What is this regarding?"
                  />
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#374151' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 8, fontSize: 16, resize: 'vertical' }}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="btn btn--primary" style={{ width: '100%', fontSize: 16, padding: '14px 24px' }}>
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section section--muted">
        <div className="container">
          <h2 className="section__title" style={{ textAlign: 'center', marginBottom: 48 }}>Our Locations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Mumbai</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 12 }}>
                Multiple locations across Mumbai providing comprehensive rehabilitation services.
              </p>
              <a href="tel:+919822207761" className="btn btn--ghost" style={{ fontSize: 14, padding: '8px 16px' }}>
                Contact Mumbai Center
              </a>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Pune</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 12 }}>
                State-of-the-art facility in Pune offering specialized mental health and addiction treatment.
              </p>
              <a href="tel:+919822207761" className="btn btn--ghost" style={{ fontSize: 14, padding: '8px 16px' }}>
                Contact Pune Center
              </a>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Noida</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 12 }}>
                Modern rehabilitation center in Noida with expert medical professionals and advanced facilities.
              </p>
              <a href="tel:+919822207761" className="btn btn--ghost" style={{ fontSize: 14, padding: '8px 16px' }}>
                Contact Noida Center
              </a>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Bangalore</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 12 }}>
                Comprehensive care facility in Bangalore serving patients across South India.
              </p>
              <a href="tel:+919822207761" className="btn btn--ghost" style={{ fontSize: 14, padding: '8px 16px' }}>
                Contact Bangalore Center
              </a>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Hyderabad</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 12 }}>
                Expert mental health and rehabilitation services in Hyderabad with personalized care.
              </p>
              <a href="tel:+919822207761" className="btn btn--ghost" style={{ fontSize: 14, padding: '8px 16px' }}>
                Contact Hyderabad Center
              </a>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Chennai</h3>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 12 }}>
                Leading rehabilitation center in Chennai providing holistic treatment and recovery support.
              </p>
              <a href="tel:+919822207761" className="btn btn--ghost" style={{ fontSize: 14, padding: '8px 16px' }}>
                Contact Chennai Center
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <h2 className="section__title">Emergency Support</h2>
          <p style={{ fontSize: 18, color: '#6b7280', marginBottom: 24 }}>
            If you or someone you know is in immediate need of help, please contact us immediately. 
            Our emergency support line is available 24/7.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919822207761" className="btn btn--primary" style={{ fontSize: 18, padding: '14px 32px' }}>
              Emergency: +91 9822207761
            </a>
            <a href="https://wa.me/919822207761" target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp" style={{ fontSize: 18, padding: '14px 32px' }}>
              WhatsApp Emergency
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

