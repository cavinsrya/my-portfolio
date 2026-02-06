"use client";

import { useState, useEffect } from "react";

export function Navigation() {
  const [activeNav, setActiveNav] = useState("Home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleSection = navItems.find(
              (item) => item.id === entry.target.id,
            );
            if (visibleSection) {
              setActiveNav(visibleSection.label);
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <div className="flex gap-1 bg-white/30 backdrop-blur-md rounded-full px-2 py-1 shadow-md border border-white/10">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            className={`px-6 py-2 rounded-full text-sm font-medium font-display transition-all cursor-pointer no-underline ${
              activeNav === item.label
                ? "bg-black text-white"
                : "text-gray-200 hover:text-black"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
