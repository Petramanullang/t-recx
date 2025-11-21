import {Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Content from "./page/Content";
import Contact from "./page/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/content" element={<Content />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;