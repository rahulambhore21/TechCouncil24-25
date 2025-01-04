import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Events from "./components/Events";
import EventsCards from "./components/EventsCards";

function App() {
  return (
    
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <EventsCards/>
      <Events/>
      <Footer />
    </main>
  );
}

export default App;
