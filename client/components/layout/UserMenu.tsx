import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Home, Mail, Star, ShoppingCart, Package, User, Info } from "lucide-react";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { label: "Home", icon: Home, to: "/" },
    { label: "Shop", icon: Package, to: "/shop" },
    { label: "About", icon: Info, to: "/about" },
    { label: "Contact", icon: Mail, to: "/contact" },
    { label: "App Rating", icon: Star, to: "/rating" },
    { label: "Cart", icon: ShoppingCart, to: "/cart" },
    { label: "Buy Products", icon: Package, to: "/buy-products" },
    { label: "Account", icon: User, to: "/account" },
  ];

  return (
    <div className="relative" ref={menuRef}>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted transition border border-border"
        aria-label="Menu"
        aria-expanded={isOpen}
        aria-controls="menu-dropdown"
      >
        <span className="hidden sm:inline text-foreground font-medium">Menu</span>
        <ChevronDown
          size={20}
          className={`text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="menu-dropdown"
          className="absolute right-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2"
        >
          <nav className="py-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted transition ${
                    index !== menuItems.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <Icon size={18} className="text-primary flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Overlay when menu is open (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default UserMenu;
