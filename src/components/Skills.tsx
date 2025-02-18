import React from 'react';
import { Star, Briefcase } from 'lucide-react';

const technicalSkills = [
  {
    category: "Frontend",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "GraphQL"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  }
];

const workExperience = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description: "Leading development of enterprise web applications and mentoring junior developers.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
  },
  {
    role: "Frontend Developer",
    company: "Creative Solutions Ltd.",
    period: "2018 - 2020",
    description: "Developed responsive web applications using modern JavaScript frameworks.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
  }
];

export function Skills() {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Skills & Experience</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <Star className="w-5 h-5 text-emerald-400" />
              <span>Technical Skills</span>
            </h3>
            <div className="space-y-8">
              {technicalSkills.map((group, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl bg-white/5 p-6">
                  <div className="absolute inset-0 opacity-10">
                    <img 
                      src={group.image}
                      alt={group.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-lg font-medium mb-4 text-emerald-400">{group.category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill, i) => (
                        <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm backdrop-blur-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <span>Work Experience</span>
            </h3>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl bg-white/5 p-6">
                  <div className="absolute inset-0 opacity-10">
                    <img 
                      src={job.image}
                      alt={job.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold">{job.role}</h4>
                    <p className="text-emerald-400 text-sm mb-2">{job.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{job.period}</p>
                    <p className="text-gray-400">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}