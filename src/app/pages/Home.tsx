import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0 bg-background"
    >
      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-5 md:gap-2 max-w-2xl pt-9 text-center md:text-left z-10">
          {/* Tag */}
          <span className="text-sm text-foreground/50 font-medium tracking-wide">
            @fachrftzhafrn_
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl">
            Hi I&apos;m FachrifatTTTTT{" "}
            <span className="inline-block animate-wave origin-bottom-right">
              👋
            </span>
            <br />
            <span className="text-foreground">Software Engineer</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl md:mt-5 text-foreground/70 leading-relaxed max-w-xl mx-auto md:mx-0">
            Software Engineer focused on building clean, scalable, and
            maintainable web applications. Experienced in turning ideas into
            reliable digital solutions.
          </p>

          {/* Info Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
            <div className="flex items-center gap-2 text-foreground/80 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>JAKARTA, INDONESIA</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">
                AVAILABLE FOR NEW PROJECT
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mt-6 w-full sm:w-auto">
            <Link
              href="https://www.linkedin.com/in/fachrifat-zhafran-triyadi-29a44925a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors duration-300"
            >
              {/* LinkedIn Logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              CONNECT ME
            </Link>
            <Link
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-foreground/20 text-foreground font-semibold text-sm hover:bg-foreground/10 transition-colors duration-300"
            >
              VIEW PROJECTS
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px]">
          {/* Decorative Background Shape */}
          <div className="absolute inset-4 md:inset-6 rounded-3xl bg-foreground/5 border border-foreground/10 -z-10" />

          {/* Main Glow Effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-foreground/30 blur-[80px] rounded-full -z-10" />

          {/* Secondary Accent Glow */}
          <div className="absolute top-1/4 right-0 w-32 h-32 bg-amber-500/20 blur-[60px] rounded-full -z-10" />

          {/* Image Container with Gradient Overlay */}
          <div className="relative top-10 w-full h-full overflow-hidden rounded-[40px] bg-foreground/5 border border-foreground/5 group">
            <Image
              src="/ripat.png"
              alt="Fachrifat"
              fill
              className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-background via-background/60 to-transparent" />
          </div>

          {/* Corner Accents */}
          <div className="absolute -right-4 w-16 h-16 border-r-2 border-b-2 border-foreground/20 rounded-br-3xl" />
          <div className="absolute top-7 -left-4 w-16 h-16 border-l-2 border-t-2 border-foreground/20 rounded-tl-3xl" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-foreground/50">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-foreground/50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
