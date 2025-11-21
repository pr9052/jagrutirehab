import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="logo logo--footer">
            <span className="logo__mark">JR</span>
            <span className="logo__text">Jagruti Rehabilitation Centre</span>
          </div>
          <p>Where Healing Begins</p>
          <ul className="contact">
            <li>Phone: <a href="tel:+919822207761">+91 9822207761</a></li>
            <li>Email: <a href="mailto:info@jagrutirehab.org">info@jagrutirehab.org</a></li>
          </ul>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Treatments</h4>
            <ul>
              <li><Link href="#treatments">ADHD</Link></li>
              <li><Link href="#treatments">Alcohol Addiction</Link></li>
              <li><Link href="#treatments">Bipolar Disorder</Link></li>
              <li><Link href="#treatments">Depression</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Disorders</h4>
            <ul>
              <li><Link href="#disorders">Anxiety</Link></li>
              <li><Link href="#disorders">Dementia Care</Link></li>
              <li><Link href="#disorders">OCD</Link></li>
              <li><Link href="#disorders">Schizophrenia</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Locations</h4>
            <ul>
              <li><Link href="/centers">Mumbai</Link></li>
              <li><Link href="/centers">Pune</Link></li>
              <li><Link href="/centers">Noida</Link></li>
              <li><Link href="/centers">Bangalore</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Other Links</h4>
            <ul>
              <li><Link href="/about">About Jagruti</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="#career">Careers</Link></li>
              <li><Link href="#case-studies">Case Study</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container footer__bar__inner">
          <p>© 2025 Jagruti Rehab Centre. All Rights Reserved.</p>
          <ul className="footer__links">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Sitemap</Link></li>
            <li><Link href="#">Robots</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
