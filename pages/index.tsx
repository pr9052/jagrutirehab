import Layout from '@/components/Layout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Layout description="World-class treatment, facilities and personalised care.">
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <h1>India’s No.1 Rehabilitation Centre</h1>
            <p>We provide world-class treatment, facilities and personalised care with a team dedicated to your well-being & recovery.</p>
            <div className="hero__actions">
              <a href="#appointment" className="btn btn--primary">Book An Appointment</a>
              <a href="#why-us" className="btn btn--ghost">Why Choose Us</a>
            </div>
          </div>
          <div className="hero__media" role="img" aria-label="Healing and care illustration"></div>
        </div>
      </section>

      <section id="why-us" className="section section--muted">
        <div className="container">
          <h2 className="section__title">Why should you choose us?</h2>
          <div className="features">
            <div className="feature">
              <h3>Daily Assistance</h3>
              <p>Care for all daily needs including bathing, medication administration, and mobility.</p>
            </div>
            <div className="feature">
              <h3>Best Living Conditions</h3>
              <p>Comfortable, hygienic, and safe living environments that promote healing.</p>
            </div>
            <div className="feature">
              <h3>24/7 Professional Care</h3>
              <p>Round-the-clock supervision by trained and compassionate staff.</p>
            </div>
            <div className="feature">
              <h3>Experienced Psychiatrist</h3>
              <p>Expert clinical oversight with individualized treatment plans.</p>
            </div>
            <div className="feature">
              <h3>Psychotherapy Unit</h3>
              <p>Evidence-based therapies tailored to patient goals and progress.</p>
            </div>
            <div className="feature">
              <h3>Social Activities</h3>
              <p>Supportive community engagement for holistic recovery.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="centers" className="section">
        <div className="container">
          <h2 className="section__title">Our Locations</h2>
          <ul className="locations">
            <li>Ahmedabad</li><li>Bangalore</li><li>Chennai</li><li>Delhi</li><li>Gurgaon</li><li>Hyderabad</li><li>Mumbai</li><li>Navi Mumbai</li><li>Noida</li><li>Pune</li><li>Surat</li><li>Thane</li>
          </ul>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/centers" className="btn btn--primary">View All Centers</Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section section--muted">
        <div className="container">
          <h2 className="section__title">What our clients say</h2>
          <div className="testimonials">
            <article className="testimonial">
              <p>
                “The staff were professional, knowledgeable, and truly caring. They supported us in every step of recovery.”
              </p>
              <div className="testimonial__author">— Reviewer</div>
            </article>
            <article className="testimonial">
              <p>
                “The environment was welcoming, and therapy sessions were engaging and effective.”
              </p>
              <div className="testimonial__author">— Reviewer</div>
            </article>
            <article className="testimonial">
              <p>
                “Structured plans, compassionate care, and measurable progress made all the difference.”
              </p>
              <div className="testimonial__author">— Reviewer</div>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <h2 className="section__title">FAQs</h2>
          <div className="accordion" data-accordion>
            <div className="accordion__item open">
              <button className="accordion__trigger">What is Jagruti Rehabilitation Centre?</button>
              <div className="accordion__content">
                <p>One of India’s premier healthcare organizations focusing on mental health, neurological disorders, dementia, and rehabilitation with individualized care.</p>
              </div>
            </div>
            <div className="accordion__item">
              <button className="accordion__trigger">What services are offered?</button>
              <div className="accordion__content">
                <p>Mental health therapy, dementia care, de-addiction, neuro-rehabilitation, and residential services for holistic treatment.</p>
              </div>
            </div>
            <div className="accordion__item">
              <button className="accordion__trigger">Who can benefit?</button>
              <div className="accordion__content">
                <p>Individuals with mental health disorders, addictions, or neurological conditions seeking short-term detox or long-term rehabilitation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
