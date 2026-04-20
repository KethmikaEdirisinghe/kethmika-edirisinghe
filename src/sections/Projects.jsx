import { ArrowUpRight} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Logistics Management System",
    description:
      "A C-based logistics management system built for my CSC 1012 assignment, focused on core programming concepts like structured menus, data handling, and basic record management.",
    image: "/projects/logistics-management-system.png",
    tags: ["C", "CLI", "File Handling"],
    github: "https://github.com/KethmikaEdirisinghe/Logistics-Management-System",
  },
  {
    title: "Flood Relief Management System",
    description:
      "A group project, web-based system to support flood relief operations—managing requests and donations with a simple, user-friendly interface backed by PHP and MySQL.",
    image: "/projects/flood-relief-management-system.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Sanduni475/Flood-Relief-Management-System-Group12",
  },
  {
    title: "CineBook – Movie Booking System",
    description:
      "A group project, DBMS-based movie ticket booking web app with movie browsing, showtime selection, seat selection (standard/premium), and booking management built using PHP, JavaScript, HTML/CSS, and MySQL.",
    image: "/projects/cinebook-movie-booking-system.png",
    tags: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    github: "https://github.com/EnuriSandupma/DBMS-Project",
  },
  {
    title: "Snake Game",
    description:
      "A simple interactive Snake game built in C, focusing on game logic, input handling, and real-time updates.",
    image: "/projects/snake-game.png",
    tags: ["C", "Game Logic", "CLI"],
    github: "https://github.com/KethmikaEdirisinghe/Snake-Game",
  },
  {
    title: "Library Management System",
    description:
      "A group project (GitHub Classroom) implementing a basic library system for managing books, members, and lending workflows via a menu-driven program using C.",
    image: "/projects/library-management-system.png",
    tags: ["C", "Group Project", "CLI"],
    github: "https://github.com/CSC1031/librarymanagementsystem-group-b",
  },
  {
    title: "Personal Portfolio (HTML/CSS)",
    description:
      "A responsive personal portfolio website built using HTML and CSS to present my profile, skills, and projects.",
    image: "/projects/personal-portfolio-html-css.png",
    tags: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/KethmikaEdirisinghe/Personal-Portfolio-HTML-CSS-",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links (GitHub only) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="GitHub repository"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};