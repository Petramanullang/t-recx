import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbars";
import Home from "./page/home";
import About from "./page/About";
import Content from "./page/Content";
import Contact from "./page/Contact";
import JenisSampah from "./page/content/JenisSampah";
import Footer from "./components/Footer";
import Organik from "./page/content/jenis-sampah/Organik";
import Anorganik from "./page/content/jenis-sampah/Anorganik";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/content/jenis-sampah" element={<JenisSampah />} />
        <Route path="/contact" element={<Contact />} />

        {/* Sub Page */}
        <Route
          path="/content/jenis-sampah/organik"
          element={<Organik />}
        />
        <Route
          path="/content/jenis-sampah/anorganik"
          element={<Anorganik />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
