import { Link } from "react-router-dom";

const LogoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-cyan-500 to-blue-600 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-300 opacity-3 rounded-full blur-3xl"></div>
      </div>

      {/* Logo Content */}
      <div className="relative text-center z-10 space-y-8">
        {/* Logo Circle */}
        <div className="flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-yellow-200 via-white to-yellow-100 rounded-full shadow-2xl flex items-center justify-center border-4 border-white">
            <span className="text-5xl sm:text-6xl font-black text-primary">B</span>
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-lg">
            BEULA
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-200">
            AGENCY
          </h2>
          <p className="text-lg sm:text-xl text-white/90 font-light tracking-widest">
            Premium Home & Kitchen Essentials
          </p>
        </div>

        {/* Tagline */}
        <div className="pt-4">
          <p className="text-white/80 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            10+ Years of Excellence in Quality Products
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Start Shopping</span>
            <span>→</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 animate-bounce">
          <svg className="w-6 h-6 text-white/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LogoPage;
