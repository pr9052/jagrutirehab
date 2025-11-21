import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="logo" aria-label="Jagruti Rehabilitation Centre">
          <span className="logo__mark">JR</span>
          <span className="logo__text">Jagruti Rehabilitation Centre</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <ul className="nav__list" style={{ display: open ? 'flex' : undefined, flexDirection: open ? 'column' as const : undefined }}>
            <li className="nav__item"><Link href="/about">About Us</Link></li>
            <li className="nav__item"><Link href="/blog">Blog</Link></li>
            <li className="nav__item"><Link href="/centers">Our Centers</Link></li>
            <li className="nav__item"><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="header__cta">
          <Link href="#appointment" className="btn btn--primary">Book Appointment</Link>
          <button className="hamburger" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
