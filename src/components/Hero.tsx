import React from 'react';
import { Github, Linkedin, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

export function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-4 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm font-medium">
                Full Stack Developer
              </span>
              <span className="px-4 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm font-medium">
                UI/UX Designer
              </span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Crafting Digital
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
                {" "}Experiences{" "}
              </span>
              That Matter
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              I'm a passionate full-stack developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="flex space-x-6">
              {/* Use Link from react-scroll to make the button scroll to Projects */}
              <Link
                to="projects" // This should match the id of the Projects section
                smooth={true}
                duration={500}
                className="bg-gradient-to-r from-emerald-500 to-blue-500 px-8 py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-blue-600 transition shadow-lg flex items-center space-x-2 cursor-pointer"
              >
                <span>View Projects</span>
                <ChevronRight className="w-5 h-5" />
              </Link>

              <div className="flex items-center space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/40 to-gray-900/0"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-emerald-500/30 rounded-full filter blur-3xl opacity-70 mix-blend-multiply"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl opacity-70 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
