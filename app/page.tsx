import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Marquee from "./components/Marquee";
import Coaches from "./components/Coaches";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";
export default function Home() {
  return (
    <>
      <LoadingScreen />

      <main className="bg-black text-white">
        <Navbar />

        <Hero />

        <Gallery />

        <Stats />

        <Services />

        <WhyChoose />

        {/* الشريط المتحرك */}
        <Marquee />

        <Coaches />

        <Footer />

        <FloatingWhatsApp />

        <BackToTop />
      </main>
    </>
  );
}