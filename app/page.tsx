import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Coaches from "./components/Coaches";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Stats />
      <Services />
      <Coaches />
      <Footer />
    </main>
  );
}
