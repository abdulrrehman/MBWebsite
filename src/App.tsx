import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Collections from "./components/Collections";
import Craftsmanship from "./components/Craftsmanship";
import Process from "./components/Process";
import Lookbook from "./components/Lookbook";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Collections />
        <Craftsmanship />
        <Process />
        <Lookbook />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
