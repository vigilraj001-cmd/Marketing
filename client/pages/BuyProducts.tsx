import { Link } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { furnitureItems } from "@/data/furniture";

const BuyProducts = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <BackButton label="Back to Home" />

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Browse All Products</h1>
          <p className="text-lg text-muted-foreground">
            Explore our complete collection of quality furniture and home essentials
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {furnitureItems.map(item => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="group bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {(item.originalPrice - item.price) / item.originalPrice > 0.2 && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
                  {item.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(item.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : i < item.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({item.reviews})</span>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">₹{item.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition flex items-center justify-center gap-2 group-hover:shadow-md">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BuyProducts;
