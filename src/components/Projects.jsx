const projects = [
  {
    title: "WealthWise Finance Tracker",
    description: "This project is designed to help individuals become more conscious of their spending habits and manage their finances effectively, with a focus on making informed investment decisions. By tracking where their money goes, users can identify spending patterns and explore opportunities to grow their capital, even with small amounts. The app empowers users to take control of their financial future, offering insights into expenses and investment potential.",
    technologies: ["React", "Tailwind CSS", "PostgreSQL", "Plaid (Future)"],
    link: "https://github.com/marenas1/Finance-Tracker",
    live: "",
    video: "portfolio/src/assets/WealthWiseDemo.mp4",
    image: "",
  },
  {
    title: "Martial Arts Gym Attendance Manager",
    description: "A Java-based GUI application designed to manage student attendance, track data, and automate certificate printing for martial arts gyms. This application allows users to add, delete, modify, and sort student data, track attendance for the past week, and automatically fill out and print certificates. It is packaged to run on any Windows machine using a bundled executable, making it easy to use without requiring additional software installations.",
    technologies: ["Java", "JavaFX", "ControlsFX", "Maven"],
    link: "https://github.com/marenas1/attendance-management-system",
    live: "https://github.com/marenas1/attendance-management-system/releases",
    video: "portfolio/src/assets/TKDAppVideoWEffects Compressed.mp4",
    image: "", 
  },
  {
    title: "Taekwondo Website",
    description: "A responsive website built using Bootstrap designed to attract new customers and provide essential information to existing students. The site features an intuitive layout with detailed information about the Taekwondo school, class schedules, instructor bios, and registration options. It includes animated sections and a mobile-friendly design to enhance the user experience. The website successfully increased online traffic by 200%, helping to attract new clients and provide a more engaging experience for students.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "https://github.com/marenas1/Taekwondo-Website",
    live: "https://sykimstkd.com/",
    video: "",
    image: "portfolio/src/assets/WebsiteHomePage.png", 
  },
];


function Projects() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-600 mt-2">{proj.description}</p>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Technologies:</strong> {proj.technologies.join(", ")}
              </p>
              
              {/* Image Section */}
              {proj.image && (
                <div className="mt-4">
                  <img src={proj.image} alt={proj.title} className="w-full h-auto rounded-lg" />
                </div>
              )}

              {/* Video Section */}
              {proj.video && (
                <div className="mt-4">
                  <video
                    width="100%"
                    height="auto"
                    controls
                    muted
                    preload="auto"
                    poster={proj.image}
                    autoPlay
                  >
                    <source src={proj.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              <div className="mt-4 flex space-x-4">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Link
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
