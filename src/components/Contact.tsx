import React from 'react';
import { Mail, Coffee } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:contact@example.com" className="flex items-center space-x-2 px-6 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-6 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <Coffee className="w-5 h-5" />
              <span>Schedule a Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}