import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbars";
import Home from "./page/home";
import About from "./page/About";
import Content from "./page/Content";
import Contact from "./page/Contact";
import JenisSampah from "./page/content/JenisSampah";
import Footer from "./components/Footer";
import Organic from "./page/content/Organic";
import Anorganic from "./page/content/Anorganic";
import Gallery from "./page/content/Gallery";
import Vas from "./page/content/Vas";
import Pen from "./page/content/Pen";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/content/galery" element={<Gallery />} />
        <Route path="/content/galery/vas" element={<Vas />} />
        <Route path="/content/galery/pen" element={<Pen />} />
        <Route path="/content/jenis-sampah" element={<JenisSampah />} />
        <Route path="/content/jenis-sampah/organic" element={<Organic />} />
        <Route path="/content/jenis-sampah/anorganic" element={<Anorganic />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
