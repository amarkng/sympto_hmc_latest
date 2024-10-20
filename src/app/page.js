'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Article from './components/Article';
import ObatVitamin from './components/ObatVitamin';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <section id='artikel'>
        <Article />
      </section>

      <section id='obat'>
        <ObatVitamin />
      </section>

      <section id='kontak'>
        <ContactUs />
      </section>

      <section id='about'>
        <Footer />
      </section>
    </div>
  );
}
