import profilePic from "../assets/Headshot.jpg"
function Home() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Profile Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300">
            <img
              src={profilePic}
              alt="Your Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 mb-6">
            Hi! My name is Matthew Arenas, a senior at Brooklyn College pursuing a degree in Computer Science
            with a minor in Data Science. I am passionate about software development, data science, and finding
            innovative ways to solve real-world problems. In addition to my studies, I am currently a fellow with
            CUNY Tech Prep, working on impactful web development projects and enhancing my skills in industry tools
            and practices.
          </p>
          <p className="text-gray-700 mb-6">
            Throughout my academic journey, I have gained expertise in various programming languages like Java, 
            Python, JavaScript, and SQL, and have worked with technologies such as React, Node.js, and PostgreSQL.
            My goal is to build scalable, efficient applications while continuously learning and contributing to the
            tech community.
          </p>

          <p className="text-gray-700 mb-6">
            I also had the privilege of participating in the Project Basta Google Software Engineering Program (G-SWEP),
            where I developed critical problem-solving and technical interview skills. These experiences have shaped my
            passion for coding and driven me to pursue opportunities that allow me to create innovative solutions in tech.
          </p>

          {/* Skills Section */}
          <h3 className="text-xl font-semibold mt-8">Skills</h3>
          <ul className="list-disc list-inside mt-4 text-left">
            <li><strong>Programming Languages:</strong> HTML, CSS, JavaScript, Java, SQL, Python</li>
            <li><strong>Frameworks:</strong> Node.js, Express, React, Tailwind CSS, Bootstrap</li>
            <li><strong>Tools and Technologies:</strong> PostgreSQL, Git, GitHub, GitHub Pages, Project Management Board (GitHub Projects), REST APIs, Postman, Figma, NPM, Maven, Subversion, Chrome DevTools</li>
            <li><strong>Techniques and Protocols:</strong> Agile, HTTP, Responsive Design</li>
            <li><strong>Natural Languages:</strong> English (Fluent), Spanish (Fluent)</li>
            <li><strong>Certification:</strong> Codepath iOS Mobile Application Development Course</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
