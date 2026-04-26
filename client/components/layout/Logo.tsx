import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group no-underline">
      {/* Logo Mark - Stylized Furniture Icon */}
      <div className="relative w-12 h-12 flex-shrink-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"></div>

        {/* Inner circle overlay */}
        <div className="absolute inset-0.5 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full opacity-90"></div>
        
        {/* SVG Icon - Stylized Furniture Concept */}
        <svg
          className="w-full h-full p-2.5 text-white drop-shadow-lg"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top surface - Table/Furniture top */}
          <rect x="6" y="8" width="36" height="5" fill="currentColor" rx="2" opacity="0.9" />
          
          {/* Left leg */}
          <path
            d="M12 13V30C12 32 10 34 8 34H6C5 34 5 33 5 32V14"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Right leg */}
          <path
            d="M36 13V30C36 32 38 34 40 34H42C43 34 43 33 43 32V14"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Decorative accent line */}
          <line x1="16" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        {/* Main brand name with premium font */}
        <div className="flex items-baseline gap-1">
          <span 
            className="text-2xl font-black text-foreground tracking-tighter"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            BEULA
          </span>
          <span className="text-xs font-bold text-primary tracking-widest uppercase mt-1">®</span>
        </div>
        
        {/* Tagline */}
        <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase leading-none">
          Furniture
        </span>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
    </Link>
  );
};

export default Logo;
