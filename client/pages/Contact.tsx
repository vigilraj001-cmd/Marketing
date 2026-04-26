import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send WhatsApp message
    const message = `
*Message from ${formData.name}*

Subject: ${formData.subject}

Message: ${formData.message}

Email: ${formData.email}
    `.trim();

    const whatsappUrl = `https://wa.me/918122687066?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Show success message
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <BackButton label="Back to Home" />

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Get In Touch with Beula Furniture</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-white">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground mb-4">Call us during business hours</p>
            <a href="tel:+918122687066" className="text-primary font-semibold hover:text-cyan-600 transition">
              +91 81226 87066
            </a>
          </div>

          <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-white">
              <Mail size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
            <a href="mailto:beulaagency2@gmail.com" className="text-primary font-semibold hover:text-cyan-600 transition">
              beulaagency2@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-white">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">
              123 Furniture Lane<br />
              Home City, HC 12345<br />
              India
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                >
                  <option value="">Select a subject</option>
                  <option value="product_inquiry">Product Inquiry</option>
                  <option value="order_issue">Order Issue</option>
                  <option value="feedback">Feedback</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Business Hours */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-muted rounded-lg overflow-hidden h-80 flex items-center justify-center border border-border">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-primary mb-4" />
                <p className="text-muted-foreground">Map coming soon</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg border border-border p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">Monday - Friday</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">Saturday</span>
                  <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-bold text-foreground mb-3">Message Status</h4>
                <p className="text-sm text-green-600 flex items-center gap-2">
                  ✓ Your message will be received by our team via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
