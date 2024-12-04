import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center text-gray-700">
          I am open to opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="text-center mt-6 space-y-4">
          {/* Email */}
          <div className="flex items-center justify-center space-x-2">
            <HiOutlineMail className="text-red-500 text-2xl" />
            <p>
              Email:{" "}
              <a
                href="mailto:matthewarenas6@gmail.com"
                className="text-blue-500 hover:underline"
              >
                matthewarenas6@gmail.com
              </a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center space-x-2">
            <FaLinkedin className="text-blue-600 text-2xl" />
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/matt-arenas/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/matt-arenas
              </a>
            </p>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-center space-x-2">
            <FaGithub className="text-gray-600 text-2xl" />
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/marenas1"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/marenas1
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
