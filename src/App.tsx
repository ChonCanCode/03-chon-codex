import { Routes, Route, Link } from "react-router-dom";
import Rankup from "./pages/challenges/Rankup.tsx";
import Fundamental from "./pages/challenges/Fundamental.tsx";

function App() {
  return (
    <div className="min-h-screen ">
      <nav className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold ">JS Challenge Hub</h1>
        <div className="flex space-x-4">
          <Link to="/rankup" className=" font-medium">
            Rank Up
          </Link>
          <Link to="/fundamental" className=" font-medium">
            Fundamental
          </Link>
        </div>
      </nav>
      <hr />
      <main className="p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">
            Welcome to the JS Challenge Hub
          </h2>
          <p className="">
            Hone your JavaScript skills through a series of fun and challenging
            exercises. Explore the "Fundamental" section for basics and "Rank
            Up" to level up your skills!
          </p>
        </section>

        <Routes>
          <Route path="/rankup" element={<Rankup />} />
          <Route path="/fundamental" element={<Fundamental />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
