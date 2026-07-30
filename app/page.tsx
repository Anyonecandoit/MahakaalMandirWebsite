import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Packages />
            <WhyChooseUs />
            <Process />
            <Projects />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </>
    );
}