import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-row items-start space-y-6 p-5 mt-2 gap-2">
      <Link to="/rankup">Rank Up</Link>
      <Link to="/fundamental">Fundamental</Link>
      <Link to="05-react-movie-app">05-react-movie-app</Link>
    </nav>
  );
}
