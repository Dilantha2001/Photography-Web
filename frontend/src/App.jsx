import ExpereancePage from "./componnets/ExpereancePage";
import Portfolio from "./componnets/Portfolio";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inquire from "./home/Inquire";
import Journal from "./home/Journal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experence" element={<ExpereancePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/inquary" element={<Inquire />} />
        <Route path="/Journal" element={<Journal />} />
      </Routes>
    </Router>
  );
}

export default App;
