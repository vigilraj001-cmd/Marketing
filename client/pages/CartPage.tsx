import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BackButton label="Back to Shop" href="/shop" />
          
          <div className="text-center py-20">
            <ShoppingCart size={64} className="mx-auto text-muted-foreground mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Start adding products to your cart!
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-cyan-500 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BackButton label="Back to Shop" href="/shop" />
        
        <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart ({cartItems.length})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white border border-border rounded-lg p-6 flex gap-6">
                {/* Product Image */}
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">₹{item.price.toLocaleString()}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Quantity:</span>
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className="text-sm text-muted-foreground ml-4">
                      Total: ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition self-start"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white border border-border rounded-lg p-8 h-fit sticky top-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-border">
              <div className="flex justify-between text-foreground">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-semibold">₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Delivery Fee</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Tax (estimated)</span>
                <span className="font-semibold">₹{Math.round(getTotalPrice() * 0.05).toLocaleString()}</span>
              </div>
            </div>

            <div className="mb-6 pb-6 border-b border-border flex justify-between text-xl font-bold text-foreground">
              <span>Total</span>
              <span className="text-primary">₹{(getTotalPrice() + Math.round(getTotalPrice() * 0.05)).toLocaleString()}</span>
            </div>

            <Link
              to="/checkout"
              className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingCart size={20} />
              Proceed to Checkout
            </Link>

            <Link
              to="/shop"
              className="w-full border border-primary text-primary py-3 rounded-lg font-bold hover:bg-gray-50 transition text-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
