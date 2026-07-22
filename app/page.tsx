import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Branches from "./components/Branches";
import Gallery from "./components/gallery/Gallery";
import Stats from "./components/Stats";
import Services from "./components/Services";
import ClassSchedule from "./components/ClassSchedule";
import WhyChoose from "./components/WhyChoose";
import Marquee from "./components/Marquee";
import Coaches from "./components/Coaches";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <main className="bg-black text-white">
        <Navbar />

        <Hero />

        <Reveal>
          <Branches />
        </Reveal>

        <Reveal delay={0.1}>
          <Gallery />
        </Reveal>

        <Reveal delay={0.2}>
          <Stats />
        </Reveal>

        <Reveal delay={0.3}>
          <Services />
        </Reveal>

        <Reveal delay={0.4}>
          <WhyChoose />
        </Reveal>

       <Reveal delay={0.5}>
       <ClassSchedule />
       </Reveal>

        <Reveal delay={0.6}>
          <Marquee />
        </Reveal>

        <Reveal delay={0.7}>
          <Coaches />
        </Reveal>

        <Reveal delay={0.8}>
          <Footer />
        </Reveal>

        <FloatingWhatsApp />

        <BackToTop />
      </main>
    </>
  );
}