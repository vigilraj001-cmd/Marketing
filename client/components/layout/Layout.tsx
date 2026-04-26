import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-secondary text-secondary-foreground py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Beula Agency</h3>
              <p className="text-sm opacity-80">Your trusted source for quality furniture and home essentials.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">Home</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Products</a></li>
                <li><a href="#" className="hover:opacity-100 transition">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="text-sm space-y-2 opacity-80">
                <li><a href="#" className="hover:opacity-100 transition">Contact</a></li>
                <li><a href="#" className="hover:opacity-100 transition">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100 transition">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm opacity-80">Email: info@beula.com</p>
              <p className="text-sm opacity-80">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-black border-opacity-20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Beula Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
