import { Link } from "react-router-dom";
import { Home, Info, Mail, Star, ShoppingCart, Package, User } from "lucide-react";

const NavigationBar = () => {
  const navItems = [
    { label: "Shop", icon: Home, to: "/shop" },
    { label: "About", icon: Info, to: "/about" },
    { label: "Contact", icon: Mail, to: "/contact" },
    { label: "Rating", icon: Star, to: "/rating" },
    { label: "Cart", icon: ShoppingCart, to: "/cart" },
    { label: "Products", icon: Package, to: "/buy-products" },
    { label: "Account", icon: User, to: "/account" },
  ];

  return (
    <div className="bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-2 px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-foreground hover:text-primary hover:bg-muted transition whitespace-nowrap border-b-2 border-transparent hover:border-primary"
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.label.substring(0, 1)}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
