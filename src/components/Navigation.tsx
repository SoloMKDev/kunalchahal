import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll'; // Import react-scroll
import { Code, Github } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const location = useLocation(); // Get current page URL
  const navigate = useNavigate(); // For programmatic navigation

  const handleScroll = (section: string) => {
    if (location.pathname !== '/') {
      // If not on the home page, navigate to `/` first
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(section, { smooth: true, duration: 500 });
      }, 100); // Delay scrolling slightly to allow the page to load
    } else {
      // If already on `/`, scroll smoothly
      scroller.scrollTo(section, { smooth: true, duration: 500 });
    }
  };

  return (
    <nav className="fixed w-full bg-black/30 dark:bg-black/30 bg-white/70 backdrop-blur-lg border-b border-white/10 dark:border-white/10 border-black/10 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Code className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
              MK.Dev
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {/* Scroll to Home Sections (Works on any page) */}
            {[ 
              { name: 'Home', section: 'hero' },
              { name: 'Projects', section: 'projects' },
              { name: 'Skills', section: 'skills' },
              { name: 'Contact', section: 'contact' }
            ].map(({ name, section }) => (
              <button
                key={name}
                onClick={() => handleScroll(section)}
                className="cursor-pointer relative px-3 py-2 transition group text-gray-800 dark:text-white hover:text-emerald-400"
              >
                {name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
              </button>
            ))}

            {/* Blog Link */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `relative px-3 py-2 transition group ${
                  isActive ? 'text-emerald-400' : 'text-gray-800 dark:text-white hover:text-emerald-400'
                }`
              }
            >
              Blog
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
            </NavLink>

            {/* Portfolio Link */}
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `relative px-3 py-2 transition group ${
                  isActive ? 'text-emerald-400' : 'text-gray-800 dark:text-white hover:text-emerald-400'
                }`
              }
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
            </NavLink>
          </div>

          {/* Theme Toggle + GitHub Link */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-blue-600 transition shadow-lg flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
