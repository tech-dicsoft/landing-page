import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function App(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <WhyUs />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}
