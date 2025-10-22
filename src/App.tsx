import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Process } from "./components/Process";
import { UseCases } from "./components/UseCases";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="why-us">
          <WhyChooseUs />
        </div>
        <div id="process">
          <Process />
        </div>
        <UseCases />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;