'use client';

import { useEffect, useRef } from 'react';
import data from '@/content/data.json';

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          {data.about.title}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {data.about.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.about.skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              tabIndex={0}
            >
              <span className="text-gray-800 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

