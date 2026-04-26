import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, MapPin, Calendar, CreditCard } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart, setCheckoutData } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('cod');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    deliveryDate: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare checkout data
    const data = {
      ...formData,
      paymentMethod
    };

    // Save to context
    setCheckoutData({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
      deliveryDate: formData.deliveryDate,
      paymentMethod
    });

    // Send WhatsApp message
    const totalAmount = getTotalPrice() + Math.round(getTotalPrice() * 0.05);
    const productList = cartItems
      .map(item => `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString()}`)
      .join('\n');

    const message = `
*New Order from Beula Furniture*

*Customer Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

*Delivery Address:*
${formData.address}
${formData.city}, ${formData.zipCode}

*Delivery Date:* ${formData.deliveryDate}

*Products Ordered:*
${productList}

*Total Amount:* ₹${totalAmount.toLocaleString()}
*Payment Method:* ${paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery'}

Please confirm this order.
    `.trim();

    const whatsappUrl = `https://wa.me/918122687066?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Clear cart and navigate to thank you page
    setTimeout(() => {
      clearCart();
      navigate("/thank-you");
      setIsLoading(false);
    }, 1000);
  };

  const totalAmount = getTotalPrice() + Math.round(getTotalPrice() * 0.05);

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
          <button
            onClick={() => navigate("/shop")}
            className="bg-gradient-to-r from-primary to-cyan-500 text-white px-8 py-3 rounded-lg font-bold"
          >
            Go to Shop
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BackButton label="Back to Cart" href="/cart" />

        <h1 className="text-4xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <div className="bg-white border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Phone size={16} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin size={24} />
                Delivery Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="House no., street name"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="City"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Zip Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      placeholder="Postal code"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Date */}
            <div className="bg-white border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar size={24} />
                Preferred Delivery Date
              </h2>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-sm text-muted-foreground mt-2">Select your preferred delivery date</p>
            </div>

            {/* Payment Method */}
            <div className="bg-white border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CreditCard size={24} />
                Payment Method
              </h2>
              <div className="space-y-4">
                <label className="flex items-center p-4 border border-input rounded-lg cursor-pointer hover:bg-gray-50" style={{ borderColor: paymentMethod === 'cod' ? 'rgb(6, 182, 212)' : undefined }}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'cod')}
                    className="w-4 h-4 text-primary"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">Cash on Delivery (COD)</p>
                    <p className="text-sm text-muted-foreground">Pay when your order arrives</p>
                  </div>
                </label>

                <label className="flex items-center p-4 border border-input rounded-lg cursor-pointer hover:bg-gray-50" style={{ borderColor: paymentMethod === 'online' ? 'rgb(6, 182, 212)' : undefined }}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={paymentMethod === 'online'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'online')}
                    className="w-4 h-4 text-primary"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">Online Payment</p>
                    <p className="text-sm text-muted-foreground">Pay now via UPI, Card, or Bank Transfer</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition disabled:opacity-50"
            >
              {isLoading ? "Processing..." : "Place Order"}
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-white border border-border rounded-lg p-8 h-fit sticky top-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-border max-h-96 overflow-y-auto">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-foreground">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 pb-6 border-b border-border">
              <div className="flex justify-between text-foreground">
                <span>Subtotal</span>
                <span className="font-semibold">₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Delivery</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Tax (5%)</span>
                <span className="font-semibold">₹{Math.round(getTotalPrice() * 0.05).toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold text-foreground mb-6">
              <span>Total Amount</span>
              <span className="text-primary">₹{totalAmount.toLocaleString()}</span>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
              ✓ Order will be confirmed via WhatsApp after clicking "Place Order"
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
