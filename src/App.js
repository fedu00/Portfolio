import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import "./styles/appStyles.css";

function App() {
  return (
    <div className="websiteContainer">
      <Navbar />
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
