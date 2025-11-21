import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export default function Layout({ title, description, children }: { title?: string; description?: string; children: ReactNode }) {
  const pageTitle = title ? `${title} | Jagruti Rehab` : 'Jagruti Rehabilitation Centre';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description ? <meta name="description" content={description} /> : null}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="topbar">
        <div className="container">
          <div>
            <span>Talk to our expert</span>
            <a className="topbar__phone" href="tel:+919822207761">+91 9822207761</a>
          </div>
          <a className="btn btn--whatsapp" href="#">Connect via WhatsApp</a>
        </div>
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
