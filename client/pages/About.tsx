import { Truck, RotateCcw, CreditCard, Award, Heart, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Beula Agency</h1>
          <p className="text-lg sm:text-xl opacity-90">
            Your trusted partner for premium furniture and home essentials
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <BackButton label="Back to Home" />

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-4">
                Beula Agency was founded with a simple mission: to bring premium quality furniture and home essentials to everyone at affordable prices.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                With over a decade of experience in the furniture industry, we've built a reputation for excellence, reliability, and customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we serve thousands of satisfied customers across the country, and we're committed to continuing our tradition of quality and service.
              </p>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Award size={64} className="mx-auto text-primary mb-4" />
                <p className="text-muted-foreground">Premium Quality Guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features/Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Free Delivery</h3>
              <p className="text-muted-foreground">
                Enjoy free shipping on all orders above ₹500. We deliver to your doorstep quickly and safely.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <RotateCcw size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Easy Returns</h3>
              <p className="text-muted-foreground">
                Not satisfied? Return your purchase within 30 days. Please contact us for any return questions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Flexible Payment</h3>
              <p className="text-muted-foreground">
                Choose from multiple payment options: Ready Cash, Credit/Debit Card, or EMI plans up to 12 months.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="mb-16 bg-secondary text-secondary-foreground rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg opacity-90">
                To provide high-quality furniture and home essentials at competitive prices while maintaining exceptional customer service and supporting sustainable practices.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="text-lg opacity-90 space-y-3">
                <li>✓ Quality over quantity</li>
                <li>✓ Customer-first approach</li>
                <li>✓ Honest pricing</li>
                <li>✓ Sustainable practices</li>
                <li>✓ Continuous innovation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Return Policy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Return & Exchange Policy</h2>
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border border-red-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">30-Day Return Policy</h3>
                <ul className="text-muted-foreground space-y-3">
                  <li>✓ Return products within 30 days of purchase</li>
                  <li>✓ Product should be in original condition</li>
                  <li>✓ All accessories and packaging must be included</li>
                  <li>✓ Free returns on defective products</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Return Fees</h3>
                <div className="bg-white rounded-lg p-6 border border-red-200">
                  <p className="text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">Note:</span> Additional return shipping fees may apply based on product type and location.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Return shipping fees are typically:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Small items: ₹100 - ₹300</li>
                    <li>• Large items: ₹500 - ₹1500</li>
                    <li>• Furniture: Custom quotes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-red-200">
              <h3 className="text-lg font-bold text-foreground mb-6">Return a Product</h3>
              <p className="text-muted-foreground mb-4">
                Please select the reason for your return to help us improve our service:
              </p>
              <form className="space-y-3 mb-6 bg-white p-4 rounded-lg">
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="returnReason" value="defective" className="w-4 h-4 text-primary" />
                    <span className="ml-3 text-foreground font-medium">Defective Product</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="returnReason" value="damaged" className="w-4 h-4 text-primary" />
                    <span className="ml-3 text-foreground font-medium">Product Damaged During Delivery</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="returnReason" value="wrong" className="w-4 h-4 text-primary" />
                    <span className="ml-3 text-foreground font-medium">Wrong Item Received</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="returnReason" value="quality" className="w-4 h-4 text-primary" />
                    <span className="ml-3 text-foreground font-medium">Poor Quality</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="returnReason" value="not_expected" className="w-4 h-4 text-primary" />
                    <span className="ml-3 text-foreground font-medium">Not As Expected</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="returnReason" value="other" className="w-4 h-4 text-primary" />
                    <span className="ml-3 text-foreground font-medium">Other Reason</span>
                  </label>
                </div>
              </form>

              <h3 className="text-lg font-bold text-foreground mb-4">Contact Us for Returns</h3>
              <p className="text-muted-foreground mb-4">
                After selecting your return reason, please contact our customer support team:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <p className="text-sm font-semibold text-foreground mb-1">📞 Phone</p>
                  <a href="tel:+918122687066" className="text-primary font-semibold hover:text-cyan-600">
                    +91 81226 87066
                  </a>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <p className="text-sm font-semibold text-foreground mb-1">📧 Email</p>
                  <a href="mailto:beulaagency2@gmail.com" className="text-primary font-semibold hover:text-cyan-600">
                    beulaagency2@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg border border-border p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">15K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="bg-white rounded-lg border border-border p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
            <div className="bg-white rounded-lg border border-border p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Product SKUs</p>
            </div>
            <div className="bg-white rounded-lg border border-border p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.6★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Our Customers Love Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-border p-8 text-center hover:shadow-lg transition">
              <Heart size={32} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Quality Products</h3>
              <p className="text-muted-foreground">
                We carefully curate every product to ensure you get the best quality furniture and home essentials.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8 text-center hover:shadow-lg transition">
              <Users size={32} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Expert Support</h3>
              <p className="text-muted-foreground">
                Our dedicated customer support team is available to help you with any questions or concerns.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-border p-8 text-center hover:shadow-lg transition">
              <Award size={32} className="mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Best Price Guarantee</h3>
              <p className="text-muted-foreground">
                We guarantee competitive pricing and regular discounts to give you the best value for your money.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
