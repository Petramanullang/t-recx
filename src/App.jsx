import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./page/home";
import About from "./page/About";
import Content from "./page/Content";
import Contact from "./page/Contact";
import JenisSampah from "./page/content/JenisSampah";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/content" element={<Content />} />
      <Route path="/content/jenis-sampah" element={<JenisSampah />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;