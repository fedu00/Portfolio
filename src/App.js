import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import Projects from "./routes/Projects/Projects";
import Footer from "./components/footer/Footer";

import "./styles/appStyles.scss";

function App() {
  const location = useLocation();
  return (
    <div className="websiteContainer">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/wojtekfedak.portfolio/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
