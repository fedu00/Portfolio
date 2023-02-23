import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar/Navbar';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Projects from './routes/Projects/Projects';
import MainTemplate from 'components/mainTemplate/MainTemplate';
import {GloballStyle} from 'assetes/styles/GloballStyles';
import { theme } from 'assetes/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from 'App.styles';

function App() {
  const location = useLocation();
  return (
    <div>
      {/* <Navbar /> */}
      <AnimatePresence exitBeforeEnter>
        <ThemeProvider theme={theme} >
        <GloballStyle />
        <MainTemplate>
          <Wrapper>
        <Routes location={location} key={location.pathname}>
          <Route path="/wojtekfedak.portfolio/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </Wrapper>
        </MainTemplate>
        </ThemeProvider>
      </AnimatePresence>
    </div>
  );
}

export default App;
