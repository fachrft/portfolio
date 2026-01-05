export default function About() {
  const highlights = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Built" },
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 lg:py-40 bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-foreground/2 -z-10 hidden md:block" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-foreground/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header - Mobile Optimized */}
        <div className="mb-10 md:mb-0" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-foreground leading-tight md:leading-[0.9] tracking-tight lg:hidden">
            A LITTLE <span className="font-medium">ABOUT</span>{" "}
            <span className="text-foreground/40">MYSELF</span>
          </h2>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          {/* Left Column - Large Title (Desktop Only) */}
          <div className="lg:col-span-5 hidden lg:block" data-aos="fade-right">
            <span className="text-sm text-foreground/50 uppercase tracking-widest mb-4 block">
              ( About )
            </span>

            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-[0.9] tracking-tight">
              A LITTLE
              <br />
              <span className="font-medium">ABOUT</span>
              <br />
              <span className="text-foreground/40">MYSELF</span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center gap-4 mt-10">
              <div className="w-20 h-px bg-foreground/30" />
              <span className="text-foreground/50 text-sm">01</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12">
            {/* Intro Text */}
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-foreground leading-snug">
                Hello, I&apos;m{" "}
                <span className="font-medium">Fachrifat Zhafran Triyadi</span> —
                a passionate Software Engineer from Jakarta, Indonesia.
              </p>
            </div>

            {/* Description Paragraphs */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="space-y-3 md:space-y-4">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/60 text-xs md:text-sm">
                  01
                </div>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                  Currently a student at SMKN 26 Jakarta, majoring in System
                  Informatics, Network, and Applications. I have a deep passion
                  for technology, specifically in Software Development, with 3+
                  years of hands-on experience.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/60 text-xs md:text-sm">
                  02
                </div>
                <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                  Throughout my journey, I have successfully developed or
                  contributed to 10+ websites and mobile apps, ensuring
                  functional, scalable, and clean code. I thrive in both team
                  and individual projects.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div
              className="flex flex-wrap gap-6 md:gap-8 pt-6 md:pt-8 border-t border-foreground/10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {highlights.map((item) => (
                <div key={item.label} className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold md:text-4xl lg:text-5xl text-foreground">
                    {item.number}
                  </span>
                  <span className="text-foreground/50 text-xs md:text-sm uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#contact"
                className="group flex items-center gap-3 text-foreground font-medium hover:text-foreground/70 transition-colors"
              >
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
                <span className="text-sm md:text-base">Let&apos;s Connect</span>
              </a>

              <div className="h-8 w-px bg-foreground/20 hidden sm:block" />

              <p className="text-foreground/50 text-xs md:text-sm max-w-xs">
                Always open to new opportunities and collaborations. Feel free
                to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee Text - Full Width */}
      <div
        className="mt-16 md:mt-24 overflow-hidden w-full"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="flex items-center gap-4 md:gap-8 text-foreground/10 text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold uppercase tracking-tight whitespace-nowrap animate-marquee">
          <span>Developer</span>
          <span className="text-foreground/20">•</span>
          <span>Creator</span>
          <span className="text-foreground/20">•</span>
          <span>Problem Solver</span>
          <span className="text-foreground/20">•</span>
          <span>Developer</span>
          <span className="text-foreground/20">•</span>
          <span>Creator</span>
          <span className="text-foreground/20">•</span>
          <span>Problem Solver</span>
          <span className="text-foreground/20">•</span>
        </div>
      </div>
    </section>
  );
}
