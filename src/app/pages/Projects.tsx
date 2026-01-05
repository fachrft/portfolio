import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "FoodIQ",
      category: "Web Application",
      year: "2024",
      description:
        "Your personal health assistant tailored for smart eating. FoodIQ allows users to track food calories, discover healthy recipes with detailed nutritional breakdowns, and follow step-by-step cooking instructions. Features include food analysis, calorie calculation, and BMI assessments to promote a balanced lifestyle.",
      images: [
        "/projects/foodiq-dashboard.png",
        "/projects/foodiq-mobile-1.png",
        "/projects/foodiq-mobile-2.png",
      ],
      tech: [
        "Express JS",
        "Node JS",
        "Javascript",
        "Fatsecret API",
        "React JS",
        "Tailwind CSS",
      ],
      link: "https://food-iq.vercel.app",
    },
    {
      id: 2,
      title: "Teachback AI",
      category: "Web Application",
      year: "2024",
      description:
        "An innovative interactive learning platform where students learn by explaining concepts back to an AI Coach. Features a dual-role system for Teachers (to grade and monitor) and Students (to complete tasks via chat-based assessments), promoting active recall and deeper understanding through the Feynman Technique.",
      images: [
        "/projects/teachback-landing-laptop.png",
        "/projects/teachback-mobile-1.png",
        "/projects/teachback-mobile-2.png",
      ],
      tech: ["TypeScript", "Supabase", "Next JS", "Tailwind CSS", "PostgreSQL"],
      link: "https://teachback-chi.vercel.app",
    },
    // {
    //   id: 3,
    //   title: "Portfolio Website",
    //   category: "Web Design",
    //   year: "2023",
    //   description:
    //     "Modern portfolio website with smooth animations and responsive design for creative professionals.",
    //   image: "/projects/project-3.png",
    //   tech: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
    //   link: "#",
    // },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 right-20 w-96 h-96 bg-foreground/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-foreground/5 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20"
          data-aos="fade-up"
        >
          <div>
            <span className="text-sm text-foreground/50 uppercase tracking-widest mb-4 block">
              ( Selected Work )
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-[0.9] tracking-tight">
              FEATURED
              <br />
              <span className="font-medium">PROJECTS</span>
            </h2>
          </div>

          <p
            className="text-foreground/60 text-lg max-w-md lg:text-right"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A collection of projects that showcase my skills in building modern,
            scalable, and user-friendly applications.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Card */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Link
                    href={project.link}
                    className="block relative group/image"
                  >
                    {/* Check if project has multiple images (FoodIQ / Teachback) */}
                    <div className="relative aspect-16/10 rounded-2xl bg-foreground/5 border border-foreground/10 p-4 md:p-8 flex items-center justify-center overflow-hidden">
                      {/* 3 Images Layout (FoodIQ / Teachback) */}
                      {/* Laptop Image (Center Back) */}
                      <div className="relative w-[90%] md:w-[85%] h-auto z-10 shadow-2xl rounded-lg transition-transform duration-700 group-hover/image:scale-[1.02]">
                        <Image
                          src={project.images[0]}
                          alt={`${project.title} Desktop`}
                          width={1200}
                          height={800}
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>

                      {/* Mobile 1 (Left Front) */}
                      <div className="absolute bottom-[-10%] md:bottom-[-5%] left-[2%] md:left-[5%] w-[25%] md:w-[22%] z-20 shadow-2xl rounded-4xl border-4 border-gray-900 transition-transform duration-700 group-hover/image:translate-y-[-10px] group-hover/image:rotate-[-5deg]">
                        <Image
                          src={project.images[1]}
                          alt={`${project.title} Mobile 1`}
                          width={300}
                          height={600}
                          className="w-full h-auto rounded-[1.7rem] object-cover"
                        />
                      </div>

                      {/* Mobile 2 (Right Front) */}
                      <div className="absolute bottom-[-10%] md:bottom-[-5%] right-[2%] md:right-[5%] w-[25%] md:w-[22%] z-20 shadow-2xl rounded-4xl border-4 border-gray-900 transition-transform duration-700 group-hover/image:translate-y-[-10px] group-hover/image:rotate-[5deg]">
                        <Image
                          src={project.images[2]}
                          alt={`${project.title} Mobile 2`}
                          width={300}
                          height={600}
                          className="w-full h-auto rounded-[1.7rem] object-cover"
                        />
                      </div>

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-center justify-center z-30">
                        <div className="w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center transform scale-0 group-hover/image:scale-100 transition-transform duration-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-foreground/40 text-sm font-mono">
                      0{project.id}
                    </span>
                    <div className="w-12 h-px bg-foreground/20" />
                    <span className="text-foreground/60 text-sm">
                      {project.category}
                    </span>
                    <span className="text-foreground/40 text-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/60 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-xs font-medium rounded-full bg-foreground/5 border border-foreground/10 text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-3 text-foreground font-medium group/link rounded-full border border-foreground/20 px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    <span className="">
                      View Project
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className="mt-32 flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <p className="text-foreground/50 text-lg mb-8">
            Want to see more of my work?
          </p>
          <Link
            href="https://github.com/fachrft"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
