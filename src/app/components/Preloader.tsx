"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setIsAnimating(false);
      document.body.style.overflow = "";
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-background transition-transform duration-1000 ease-in-out ${
        !isLoading ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-foreground/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Animated Lines */}
        <div className="overflow-hidden mb-4">
          <p
            className="text-foreground/50 text-sm uppercase tracking-[0.3em] animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to explore?
          </p>
        </div>

        {/* Main Text - Letter by letter animation */}
        <div className="overflow-hidden mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground">
            {"Let's Build".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-letter-up"
                style={{
                  animationDelay: `${0.5 + index * 0.04}s`,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>

        <div className="overflow-hidden mb-8 py-2">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-foreground">
            {"Something".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-letter-up"
                style={{
                  animationDelay: `${1.0 + index * 0.04}s`,
                }}
              >
                {letter}
              </span>
            ))}
            <span
              className="inline-block animate-letter-up"
              style={{ animationDelay: "1.4s" }}
            >
              {"\u00A0"}
            </span>
            {"Amazing".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-letter-up text-foreground/70"
                style={{
                  animationDelay: `${1.5 + index * 0.04}s`,
                }}
              >
                {letter}
              </span>
            ))}
            <span
              className="inline-block animate-letter-up text-foreground/50"
              style={{ animationDelay: "1.8s" }}
            >
              .
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden">
          <p
            className="text-foreground/60 text-lg md:text-xl animate-slide-up"
            style={{ animationDelay: "2s" }}
          >
            Where ideas become reality ✨
          </p>
        </div>

        {/* Loading Bar */}
        <div className="mt-12 w-48 h-[2px] bg-foreground/10 mx-auto rounded-full overflow-hidden">
          <div className="h-full bg-foreground animate-loading-bar" />
        </div>
      </div>

      {/* Bottom Curtain Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/20" />
    </div>
  );
}
