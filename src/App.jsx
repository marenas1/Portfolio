import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
