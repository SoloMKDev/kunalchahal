import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Tailwind CSS, and Stripe integration.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    bgImage: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=2000&q=80"
  },
  {
    title: "AI Saas Using DeepSeak R1",
    description: "Smart Web app with AI-powered prioritization and scheduling.",
    tech: ["DeepSeak R1", "Node.js", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media management and monitoring.",
    tech: ["Vue.js", "Firebase", "D3.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness tracking application with personalized workout plans.",
    tech: ["React Native", "GraphQL", "MongoDB"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=80"
  }
];

export function Portfolio() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <a href="#" className="text-emerald-400 hover:text-emerald-300 transition flex items-center space-x-2">
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-500"
              style={{
                backgroundImage: `url(${project.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
              <div className="relative z-10 p-8">
                <div className="relative aspect-video mb-6 overflow-hidden rounded-lg transform group-hover:scale-105 transition duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <button className="px-6 py-2 bg-emerald-500/80 hover:bg-emerald-500 rounded-lg backdrop-blur-sm transition-all duration-300">
                    View Project
                  </button>
                  <a href="https://www.youtube.com/" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
