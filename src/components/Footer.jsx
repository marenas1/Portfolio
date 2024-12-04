import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="flex justify-center space-x-6 mb-4">
        {/* Email */}
        <a
          href="mailto:matthewarenas6@gmail.com"
          className="text-red-500 text-2xl hover:text-red-400"
        >
          <HiOutlineMail />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/matt-arenas/"
          className="text-blue-600 text-2xl hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/marenas1"
          className="text-gray-600 text-2xl hover:text-gray-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <p>&copy; {new Date().getFullYear()} Matthew Arenas. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
