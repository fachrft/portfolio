export default function Services() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Building modern, responsive, and high-performance websites and web applications using cutting-edge technologies like React, Next.js, and Laravel.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Modern UI/UX",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      title: "Mobile Apps",
      description:
        "Creating beautiful cross-platform mobile applications with Flutter that work seamlessly on both iOS and Android devices.",
      features: [
        "Cross-Platform",
        "Native Performance",
        "Beautiful UI",
        "Offline Support",
      ],
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
      title: "Automation",
      description:
        "Streamlining workflows and processes with automation tools like n8n, custom scripts, and API integrations to boost productivity.",
      features: [
        "Workflow Automation",
        "API Integration",
        "Custom Scripts",
        "Time Saving",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-foreground/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-foreground/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div
          className="flex flex-col items-start gap-4 mb-16"
          data-aos="fade-up"
        >
          <span className="text-sm text-foreground/50 uppercase tracking-widest">
            What I Offer
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-8xl text-foreground leading-tight">
            MY SERVICES
          </h2>
          <p
            className="text-foreground/70 leading-relaxed text-base md:text-xl max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I offer a range of services to help bring your ideas to life with
            modern technologies and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              className="group relative bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 hover:border-foreground/20 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-foreground/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-foreground/10 text-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground/80"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-foreground/50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
