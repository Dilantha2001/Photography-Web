import ExpereancePage from "./componnets/ExpereancePage";
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experence" element={<ExpereancePage />} />
      </Routes>
    </Router>
  );
}

export default App;
