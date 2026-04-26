import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";

const Cart = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <BackButton label="Back to Home" />

        <h1 className="text-4xl font-bold text-foreground mb-2">Shopping Cart</h1>
        <p className="text-lg text-muted-foreground mb-8">
          You have items in your cart. Review and proceed to checkout.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              {/* Empty State */}
              <div className="p-12 text-center">
                <ShoppingCart size={48} className="mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Start shopping to add items to your cart
                </p>
                <Link
                  to="/"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-border p-6 sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-4">Order Summary</h3>
              
              <div className="space-y-3 pb-4 border-b border-border mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">₹0</span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-bold text-foreground">Total</span>
                <span className="text-2xl font-bold text-primary">₹0</span>
              </div>

              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                Proceed to Checkout
              </button>

              <button className="w-full mt-3 border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
