import About_Us from "./page/About_Us";
import Sponsors from "./page/Sponsors";
import Contact from "./page/Contact_Us";
import Home from "./page/Home";
import { Routes, Route } from "react-router";
import Events from "./page/Events";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/about" element={<About_Us />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
