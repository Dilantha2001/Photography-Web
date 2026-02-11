import ExpereancePage from "./componnets/ExpereancePage";
import Portfolio from "./componnets/Portfolio";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inquire from "./home/Inquire";
import Journal from "./home/Journal";
import ContactForm from "./componnets/ContactForm";
import Containerfirst from "./componnets/Containerfirst";
import Containertwo from "./componnets/Containertwo";
import Navigation from "./componnets/Navigation";
import Footer from "./componnets/Footer";

function PortfolioPage() {
  return (
    <>
      <Navigation />
      <Portfolio />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Containerfirst />} />
        <Route path="/experience" element={<ExpereancePage />} />
        <Route path="/galleries" element={<Containertwo />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
