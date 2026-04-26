import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Zap, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import NavigationBar from "@/components/layout/NavigationBar";
import { furnitureItems } from "@/data/furniture";
import { useCart } from "@/context/CartContext";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [addedToCart, setAddedToCart] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const categories = ["All", "Kitchen", "Bed Room", "Daily Products"];

  // Handle category selection from search results
  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state?.selectedCategory]);

  const getCategoryFilter = (category: string) => {
    switch(category) {
      case "Bed Room":
        return "Furniture";
      case "Daily Products":
        return "Appliances";
      default:
        return category;
    }
  };

  const filteredItems = selectedCategory === "All"
    ? furnitureItems
    : furnitureItems.filter(item => item.category === getCategoryFilter(selectedCategory));

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-cyan-500 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Shop Products</h1>
          <p className="text-white/90 mt-2">Discover our collection of premium furniture and home essentials</p>
        </div>
      </section>

      {/* Navigation Bar */}
      <NavigationBar />

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Shop by Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          {selectedCategory === "All" ? "All Products" : selectedCategory}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(`/product/${item.id}`);
                }
              }}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden border-2 border-gray-300 hover:shadow-2xl transition-all duration-300 shadow-md relative text-left cursor-pointer hover:scale-105"
            >
              {/* Black Corner Mark - Top Left */}
              <div className="absolute top-0 left-0 w-8 h-8 bg-black rounded-br-lg z-10"></div>

              {/* Black Corner Mark - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-black rounded-tl-lg z-10"></div>

              {/* Decorative Top Border */}
              <div className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-primary"></div>

              {/* Product Image - Clean White Background */}
              <div className="relative h-64 bg-white overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-5/6 h-5/6 object-contain group-hover:scale-110 transition-transform duration-300"
                />

                {/* Black Info Slide - Bottom with Important Notes */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-black/80 text-white px-3 py-3 text-center">
                  <p className="text-xs font-bold leading-tight mb-1">✓ IMPORTANT NOTES</p>
                  <div className="text-xs leading-tight space-y-0.5">
                    <p>• {item.warranty}</p>
                    <p>• {item.guarantee}</p>
                    <p>• {item.hasEMI ? "✓ EMI Available" : "✓ Cash Payment"}</p>
                  </div>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform -rotate-3 hover:rotate-0 transition">
                  {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                </div>

                {/* Highly Rated Badge */}
                {item.rating >= 4.7 && (
                  <div className="absolute bottom-14 left-3 bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg transform rotate-2">
                    ⭐ {item.rating}
                  </div>
                )}

                {/* EMI Badge */}
                {item.hasEMI && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-primary to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Zap size={14} />
                    EMI
                  </div>
                )}
              </div>

              {/* Decorative Divider */}
              <div className="h-0.5 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300"></div>

              {/* Rating Below Image */}
              <div className="px-3 sm:px-4 py-3 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(item.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : i < item.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-lg font-bold text-foreground">{item.rating}</span>
                <span className="text-xs text-muted-foreground">({item.reviews})</span>
              </div>

              {/* Decorative Divider */}
              <div className="h-0.5 bg-gradient-to-r from-primary via-cyan-500 to-primary"></div>

              {/* Product Info */}
              <div className="px-3 sm:px-4 py-3">
                <h3 className="text-sm font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition h-10">
                  {item.name}
                </h3>

                {/* Pricing */}
                <div className="mb-3 pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold text-primary">₹{item.price.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground line-through">₹{item.originalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-green-600 font-semibold">Save ₹{(item.originalPrice - item.price).toLocaleString()}</p>
                  {item.hasEMI && item.emiPrice && (
                    <p className="text-xs text-muted-foreground mt-1">₹{item.emiPrice}/mo × {item.emiMonths} mo</p>
                  )}
                </div>

                {/* Payment Options */}
                <div className="flex gap-1.5 text-xs mb-2">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium text-xs">Cash</span>
                  {item.hasEMI && (
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium text-xs">EMI</span>
                  )}
                </div>

                {/* Cart and Buy Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image
                      });
                      setAddedToCart(item.id);
                      setTimeout(() => setAddedToCart(null), 2000);
                    }}
                    className="flex-1 bg-gradient-to-r from-primary to-cyan-500 text-white py-2.5 rounded-lg font-bold hover:shadow-lg transition flex items-center justify-center gap-2 text-sm"
                  >
                    {addedToCart === item.id ? (
                      <>
                        <Check size={16} />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={16} />
                        Cart
                      </>
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image
                      });
                      navigate('/checkout');
                    }}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg font-bold hover:shadow-lg transition text-sm"
                  >
                    Buy
                  </button>
                </div>
              </div>

              {/* Decorative Bottom Border */}
              <div className="h-1 bg-gradient-to-r from-primary via-cyan-500 to-primary"></div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}
      </section>

    </Layout>
  );
};

export default Index;
