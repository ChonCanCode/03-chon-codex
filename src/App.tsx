import "./style.css";
import { Routes, Route, Link } from "react-router-dom";
import Rankup from "./Rankup.tsx";
import Fundamental from "./Fundamental.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/rankup" element={<Rankup />} />
        <Route path="/fundamental" element={<Fundamental />} />
      </Routes>
      <div>
        <nav className="m-2 flex space-x-2">
          <Link to="/rankup">Rank Up</Link>
          <Link to="/fundamental">Fundamental</Link>
        </nav>
      </div>
    </>
  );
}

export default App;
