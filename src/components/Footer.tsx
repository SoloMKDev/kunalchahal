import React from 'react';
import { Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="w-6 h-6 text-emerald-400" />
            <span className="font-semibold">MK.dev</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 MK.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}