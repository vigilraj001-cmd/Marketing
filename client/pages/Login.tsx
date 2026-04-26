import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Smartphone, Chrome, Facebook, MapPin, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  location?: string;
  city?: string;
  country?: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [location, setLocation] = useState<{ latitude: number; longitude: number; city: string } | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    agreeTerms: false,
    otp: ""
  });

  // Auto-detect location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude, city: "Detecting..." });
          
          // Get city from coordinates using reverse geocoding (optional - can use free API)
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setLocation({ 
              latitude, 
              longitude, 
              city: data.address?.city || data.address?.town || "Current Location" 
            });
          } catch (error) {
            setLocation({ latitude, longitude, city: "Current Location" });
          }
        },
        (error) => {
          console.log("Location access denied", error);
        }
      );
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleOtpRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone) {
      // Send OTP to WhatsApp
      const message = `Your Beula Agency OTP is: ${Math.floor(100000 + Math.random() * 900000)}. Do not share with anyone.`;
      const whatsappUrl = `https://wa.me/${formData.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setOtpSent(true);
    }
  };

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      setOtpVerified(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save user data to localStorage
    const userProfile: UserProfile = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      location: location?.city,
      city: location?.city,
      country: "India"
    };
    
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    navigate("/account");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-cyan-500/5 to-blue-600/5 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-primary to-cyan-500 text-white p-8 text-center">
              <h1 className="text-3xl font-bold mb-2">
                {isSignUp ? "Create Account" : "Welcome to Beula"}
              </h1>
              <p className="text-white/90">
                {isSignUp 
                  ? "Join our community today" 
                  : "Sign in to your account"}
              </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Login Method Toggle (only for login) */}
              {!isSignUp && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      setLoginMethod('email');
                      setOtpSent(false);
                      setOtpVerified(false);
                    }}
                    className={`py-2 rounded-lg font-semibold text-sm transition ${
                      loginMethod === 'email'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <Mail size={16} className="inline mr-1" />
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginMethod('phone');
                      setOtpSent(false);
                      setOtpVerified(false);
                    }}
                    className={`py-2 rounded-lg font-semibold text-sm transition ${
                      loginMethod === 'phone'
                        ? 'bg-primary text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <Smartphone size={16} className="inline mr-1" />
                    Phone
                  </button>
                </div>
              )}

              {/* Full Name (SignUp only) */}
              {isSignUp && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                    required
                  />
                </div>
              )}

              {/* Email Login Method */}
              {loginMethod === 'email' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-semibold text-foreground">
                        Password
                      </label>
                      {!isSignUp && (
                        <Link
                          to="#"
                          className="text-xs font-medium text-primary hover:text-cyan-600 transition"
                        >
                          Forgot?
                        </Link>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-12 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Phone OTP Method */}
              {loginMethod === 'phone' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition disabled:bg-gray-100"
                        disabled={otpSent}
                        required
                      />
                    </div>
                  </div>

                  {/* OTP Flow */}
                  {otpSent && !otpVerified && (
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Enter 6-Digit OTP
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                        placeholder="000000"
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition text-center text-2xl tracking-widest"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        OTP sent to {formData.phone}
                      </p>
                    </div>
                  )}

                  {otpVerified && (
                    <div className="p-3 bg-green-50 rounded-lg flex items-center gap-2">
                      <CheckCircle size={20} className="text-green-600" />
                      <span className="text-green-700 font-semibold">OTP Verified</span>
                    </div>
                  )}
                </>
              )}

              {/* Location Display */}
              {location && (
                <div className="p-3 bg-blue-50 rounded-lg flex items-center gap-2 text-sm">
                  <MapPin size={18} className="text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Location Detected</p>
                    <p className="text-muted-foreground">{location.city}</p>
                  </div>
                </div>
              )}

              {/* Phone Number (SignUp only) */}
              {isSignUp && loginMethod === 'email' && (
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Terms checkbox (only for signup) */}
              {isSignUp && (
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mt-1 rounded border-input cursor-pointer"
                    required
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-muted-foreground cursor-pointer">
                    I agree to the <a href="#" className="text-primary hover:text-cyan-600 font-medium">Terms & Conditions</a> and <a href="#" className="text-primary hover:text-cyan-600 font-medium">Privacy Policy</a>
                  </label>
                </div>
              )}

              {/* Action Buttons */}
              {loginMethod === 'phone' && !otpSent ? (
                <button
                  type="button"
                  onClick={handleOtpRequest}
                  className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send OTP via WhatsApp
                </button>
              ) : loginMethod === 'phone' && otpSent && !otpVerified ? (
                <button
                  type="button"
                  onClick={handleOtpVerify}
                  disabled={otp.length !== 6}
                  className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  Verify OTP
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {isSignUp ? "Create Account" : "Sign In"}
                </button>
              )}

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-muted-foreground">Or continue with</span>
                </div>
              </div>

              {/* Social Login Options */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-input rounded-lg hover:bg-muted transition font-semibold text-sm"
                >
                  <Chrome size={18} className="text-red-500" />
                  <span className="hidden sm:inline">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-input rounded-lg hover:bg-muted transition font-semibold text-sm"
                >
                  <Facebook size={18} className="text-blue-600" />
                  <span className="hidden sm:inline">Facebook</span>
                </button>
              </div>

              {/* Continue as Guest */}
              <button
                type="button"
                onClick={() => navigate("/shop")}
                className="w-full text-foreground font-semibold hover:text-primary transition text-sm"
              >
                Continue as Guest
              </button>
            </form>

            {/* Footer */}
            <div className="bg-muted px-8 py-4 text-center border-t border-border">
              <p className="text-sm text-muted-foreground">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-primary hover:text-cyan-600 font-bold transition"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <p className="font-bold text-foreground">10+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="font-bold text-foreground">50K+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="font-bold text-foreground">4.8★</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
