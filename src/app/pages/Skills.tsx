import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: "/icon-skills/icons8-javascript.svg" },
    { name: "TypeScript", icon: "/icon-skills/icons8-typescript.svg" },
    { name: "React", icon: "/icon-skills/react.png" },
    { name: "Next.js", icon: "/icon-skills/icons8-next.js.svg" },
    { name: "Node.js", icon: "/icon-skills/nodejs.png" },
    { name: "Express.js", icon: "/icon-skills/expressjs.svg" },
    { name: "Flutter", icon: "/icon-skills/icons8-flutter-logo.svg" },
    { name: "Laravel", icon: "/icon-skills/laravel.png" },
    { name: "PHP", icon: "/icon-skills/php.png" },
    { name: "Inertia.js", icon: "/icon-skills/inertia.png" },
    { name: "MySQL", icon: "/icon-skills/mysql.png" },
    { name: "PostgreSQL", icon: "/icon-skills/postgresql.png" },
    { name: "Supabase", icon: "/icon-skills/supabase.png" },
    { name: "Linux", icon: "/icon-skills/linux.png" },
    { name: "GitHub", icon: "/icon-skills/github.png" },
    { name: "n8n", icon: "/icon-skills/n8n.svg" },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 bg-background overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-foreground/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header - Title on Left, Stats on Right */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
          data-aos="fade-up"
        >
          {/* Left: Title & Description */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-sm text-foreground/50 uppercase tracking-widest mb-3 block">
                What I Work With
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-8xl text-foreground leading-tight">
                MY SKILLS
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-foreground/70 leading-relaxed text-base md:text-xl">
                The skills, tools and technologies I am really good at:
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-wrap gap-8 lg:gap-12">
            <div className="text-left" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-1">
                16+
              </div>
              <div className="text-foreground/50 text-xs uppercase tracking-wider">
                Technologies
              </div>
            </div>
            <div className="text-left" data-aos="fade-up" data-aos-delay="150">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-1">
                3+
              </div>
              <div className="text-foreground/50 text-xs uppercase tracking-wider">
                Years Learning
              </div>
            </div>
            <div className="text-left" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl lg:text-5xl font-bold text-foreground mb-1">
                ∞
              </div>
              <div className="text-foreground/50 text-xs uppercase tracking-wider">
                Always Learning
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
              className="group relative bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 hover:border-foreground/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-foreground/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  width={70}
                  height={70}
                  src={skill.icon}
                  alt={skill.name}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Name */}
              <span className="text-foreground/80 text-sm font-medium text-center group-hover:text-foreground transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
