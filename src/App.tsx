import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import HowItWorks from './components/HowItWorks';
import CustomerSection from './components/CustomerSection';
import RunnerSection from './components/RunnerSection';
import MerchantSection from './components/MerchantSection';
import TrustSafety from './components/TrustSafety';
import RegionalVision from './components/RegionalVision';
import FinalCTA from './components/FinalCTA';
import SocialFollow from './components/SocialFollow';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <HowItWorks />
        <CustomerSection />
        <RunnerSection />
        <MerchantSection />
        <TrustSafety />
        <RegionalVision />
        <FinalCTA />
        <SocialFollow />
      </main>
      <Footer />
    </>
  );
}
