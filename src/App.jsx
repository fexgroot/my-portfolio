import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Library from "./pages/Library";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="mx-24 my-12 flex flex-col gap-20">
      <Router>
        <Layout />
        <Routes>
          <Route path="/library" element={<Library />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
