import { Link } from "react-router-dom";
import { CheckCircle, Phone, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";

const ThankYou = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Success Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <CheckCircle size={64} className="text-white" />
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-4xl font-bold text-foreground mb-4">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your purchase from Beula Furniture
            </p>

            {/* Order Status */}
            <div className="bg-gradient-to-r from-green-50 to-cyan-50 rounded-lg p-8 mb-8">
              <h2 className="text-lg font-bold text-foreground mb-4">Order Status</h2>
              <p className="text-muted-foreground mb-4">
                Your order has been successfully placed and sent to our team. You'll receive a confirmation message shortly via WhatsApp.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Order confirmation sent to WhatsApp</p>
                <p>✓ Our team will contact you within 24 hours</p>
                <p>✓ Delivery scheduled as per your preference</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-2">
                  <Phone size={20} className="text-primary" />
                  <span className="font-semibold text-foreground">Phone Support</span>
                </div>
                <a href="tel:+918122687066" className="text-primary hover:text-cyan-600 font-bold">
                  +91 81226 87066
                </a>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={20} className="text-primary" />
                  <span className="font-semibold text-foreground">Email Support</span>
                </div>
                <a href="mailto:beulaagency2@gmail.com" className="text-primary hover:text-cyan-600 font-bold">
                  beulaagency2@gmail.com
                </a>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-8">
              <h3 className="font-bold text-foreground mb-4">What Happens Next?</h3>
              <div className="space-y-3 text-sm text-muted-foreground text-left max-w-md mx-auto">
                <div className="flex gap-3">
                  <span className="font-bold text-primary">1</span>
                  <span>Order confirmation message sent to your WhatsApp</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">2</span>
                  <span>Our team verifies and prepares your order</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">3</span>
                  <span>Product dispatched on your preferred delivery date</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-primary">4</span>
                  <span>Receive your order with payment as selected</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="flex-1 bg-gradient-to-r from-primary to-cyan-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition"
              >
                Continue Shopping
              </Link>
              <Link
                to="/"
                className="flex-1 border-2 border-primary text-primary py-3 rounded-lg font-bold hover:bg-gray-50 transition"
              >
                Go Home
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-muted-foreground mb-4">
                If you have any questions, feel free to contact us anytime. We're here to help!
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Save your phone number for tracking updates. You'll receive delivery notifications on WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Thank you for choosing <span className="font-bold text-foreground">Beula Furniture</span> - Quality Products, Great Service!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYou;
