export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 bg-background border-t border-foreground/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-foreground tracking-tight">
              FZT
            </span>
            <span className="text-foreground/30 text-sm">•</span>
            <span className="text-foreground/50 text-sm">
              Software Engineer
            </span>
          </div>

          {/* Copyright */}
          <p className="text-foreground/40 text-sm text-center">
            © {currentYear} Fachrifat Zhafran Triyadi. All rights reserved.
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors duration-300 text-sm"
          >
            <span>Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
