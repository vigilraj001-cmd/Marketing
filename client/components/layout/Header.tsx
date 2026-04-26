import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import AccountProfile from "./AccountProfile";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <SearchBar className="w-full" />
          </div>

          {/* User Menu - Top Right */}
          <div className="flex items-center gap-3">
            {/* Account Profile Icon */}
            <AccountProfile />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search and Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="mb-4">
              <SearchBar className="w-full" />
            </div>
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-primary transition font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
