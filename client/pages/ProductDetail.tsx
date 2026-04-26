import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, CheckCircle, ArrowLeft, ShoppingCart, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { furnitureItems } from "@/data/furniture";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const product = furnitureItems.find(item => item.id === id);
  const images = product?.images || [product?.image || ""];

  if (!product) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-cyan-600 mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Products
          </button>
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Product not found</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <BackButton label="Back to Products" />

          {/* LINE 1: Product Image Carousel */}
          <div className="mb-8">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center" style={{ height: "400px" }}>
              <img
                src={images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Dot Slider */}
            {images.length > 1 && (
              <div className="flex justify-center gap-3 mt-6">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      selectedImageIndex === index
                        ? "bg-primary w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* LINE 2: Product Name */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
          </div>

          {/* LINE 3: Product Rate (Price) */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <p className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground line-through mt-2">₹{product.originalPrice.toLocaleString()}</p>
            <p className="text-sm text-green-600 font-semibold mt-2">Save ₹{(product.originalPrice - product.price).toLocaleString()}</p>
          </div>

          {/* LINE 3.5: Cart and Buy Buttons */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <div className="flex gap-3">
              <button
                onClick={() => {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                  });
                  setAddedToCart(true);
                  setTimeout(() => setAddedToCart(false), 2000);
                }}
                className="flex-1 bg-gradient-to-r from-primary to-cyan-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                {addedToCart ? (
                  <>
                    <Check size={20} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    Add to Cart
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                  });
                  navigate('/checkout');
                }}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* LINE 4: Star Rating */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : i < product.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-xl font-bold text-foreground">{product.rating}/5</span>
            </div>
          </div>

          {/* LINE 5: Product Description */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <p className="text-base text-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* LINE 6: Customer Comments Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Customer Comments</h2>
            
            {/* Existing Comments */}
            <div className="space-y-4 mb-8">
              {product.comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-foreground">{comment.userName}</h4>
                      {comment.verified && (
                        <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                          <CheckCircle size={12} />
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < comment.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{comment.date}</p>
                  <p className="text-foreground text-sm">{comment.comment}</p>
                </div>
              ))}
            </div>

            {/* Add Comment Form */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-4 text-foreground">Add Your Comment</h3>
              <textarea
                placeholder="Write your comment here..."
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-primary min-h-24 text-sm"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">Rate:</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <button key={i} className="p-1">
                        <Star
                          size={18}
                          className="cursor-pointer text-yellow-400 fill-yellow-400 hover:text-yellow-500"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition text-sm">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-12 pt-12 border-t-2 border-gray-200">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {furnitureItems
                .filter(item => item.category === product.category && item.id !== product.id)
                .slice(0, 4)
                .map(item => (
                  <a
                    key={item.id}
                    href={`/product/${item.id}`}
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden border-2 border-gray-300 hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-md relative"
                  >
                    {/* Black Corner Marks */}
                    <div className="absolute top-0 left-0 w-6 h-6 bg-black rounded-br-lg z-10"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-black rounded-tl-lg z-10"></div>

                    {/* Product Image */}
                    <div className="relative h-48 bg-white overflow-hidden flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-5/6 h-5/6 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="px-3 py-2 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < Math.floor(item.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-foreground">{item.rating}</span>
                    </div>

                    {/* Product Info */}
                    <div className="px-3 py-2">
                      <h4 className="text-sm font-bold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition h-9">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-1 mb-2">
                        <span className="text-lg font-bold text-primary">₹{item.price.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground line-through">₹{item.originalPrice.toLocaleString()}</span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white py-2 rounded-lg font-bold text-xs hover:shadow-lg transition flex items-center justify-center gap-1">
                        View
                      </button>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
