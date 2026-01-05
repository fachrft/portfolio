import SmoothScroll from "./components/SmoothScroll";
import AOSProvider from "./components/AOSProvider";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function Page() {
  return (
    <>
      <Preloader />
      <AOSProvider>
        <SmoothScroll>
          <Home />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </SmoothScroll>
      </AOSProvider>
    </>
  );
}
