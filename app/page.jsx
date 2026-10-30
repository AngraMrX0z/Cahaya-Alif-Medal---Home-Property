import SiteHeader from '../components/SiteHeader';
import HeroSection from '../components/HeroSection';
import PropertyTypes from '../components/PropertyTypes';
import ContactSection from '../components/ContactSection';
import SiteFooter from '../components/SiteFooter';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import LegacyInteractions from '../components/LegacyInteractions';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PropertyTypes />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <LegacyInteractions />
    </>
  );
}
