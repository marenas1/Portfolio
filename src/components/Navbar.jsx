import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Matthew Arenas Portfolio
        </Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-green-400">Home</Link></li>
          <li><Link to="/projects" className="hover:text-green-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

