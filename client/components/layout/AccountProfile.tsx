import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, Settings, Heart, MapPin } from "lucide-react";

const AccountProfile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  const profileMenuItems = [
    { label: "Profile", icon: User, to: "/account" },
    { label: "Saved Addresses", icon: MapPin, to: "/account" },
    { label: "Wishlist", icon: Heart, to: "/account" },
    { label: "Settings", icon: Settings, to: "/account" },
  ];

  return (
    <div className="relative" ref={menuRef}>
      {/* Account Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-500 hover:shadow-lg transition-all duration-200 border-2 border-white relative group"
        aria-label="Account"
        aria-expanded={isOpen}
        title={isLoggedIn ? "Logged In" : "Login / Sign Up"}
      >
        {/* Profile Avatar/Icon */}
        <User size={24} className="text-white" />
        
        {/* Online Status Indicator */}
        {isLoggedIn && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-white border border-border rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-cyan-500 text-white p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <User size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">
                  {isLoggedIn ? "User Account" : "Guest"}
                </p>
                <p className="text-xs opacity-90">
                  {isLoggedIn ? "Logged in" : "Not logged in"}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          {isLoggedIn ? (
            <>
              <nav className="py-2">
                {profileMenuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted transition ${
                        index !== profileMenuItems.length - 1 ? "border-b border-muted" : ""
                      }`}
                    >
                      <Icon size={18} className="text-primary flex-shrink-0" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition border-t border-muted font-medium text-sm"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login/Sign Up Buttons */}
              <div className="p-4 space-y-2 border-b border-muted">
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition text-sm"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(false);
                  }}
                  className="w-full bg-muted text-foreground py-2 rounded-lg font-semibold hover:bg-muted/80 transition text-sm">
                  Sign Up
                </button>
              </div>

              {/* Quick Links */}
              <nav className="py-2">
                <Link
                  to="/account"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted transition border-b border-muted"
                >
                  <User size={18} className="text-primary flex-shrink-0" />
                  <span className="font-medium text-sm">Continue as Guest</span>
                </Link>
              </nav>
            </>
          )}
        </div>
      )}

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default AccountProfile;
