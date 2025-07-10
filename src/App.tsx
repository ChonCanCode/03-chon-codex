import { Routes, Route } from "react-router-dom";
import Rankup from "./pages/challenges/Rankup.tsx";
import Fundamental from "./pages/challenges/Fundamental.tsx";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import "./styles/style.css";
import ZeroFiveReactMovieApp from "./pages/projects/05-react-movie-app.tsx";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rankup" element={<Rankup />} />
          <Route path="/fundamental" element={<Fundamental />} />
          <Route
            path="/05-react-movie-app"
            element={<ZeroFiveReactMovieApp />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
