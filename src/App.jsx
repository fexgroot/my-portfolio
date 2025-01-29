import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import StructuredData from "./components/SEO";

function App() {
  return (
    <div className="mx-6 my-6 flex h-[92vh] flex-col justify-between gap-12 sm:mx-8 md:mx-10 md:my-12 md:gap-20 lg:mx-24">
      <StructuredData />
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
