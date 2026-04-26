import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, LogOut, Edit2, ShoppingBag, Heart, Settings, Bell, Lock, CreditCard, FileText, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  location?: string;
  city?: string;
  country?: string;
}

const Account = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'addresses' | 'settings' | 'preferences'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  // Load user data from localStorage
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('userProfile');
    return saved ? JSON.parse(saved) : {
      fullName: "User Profile",
      email: "user@beulafurniture.com",
      phone: "+91 XXXXX XXXXX",
      location: "India",
      city: "Your City",
      country: "India"
    };
  });

  const handleLogout = () => {
    localStorage.removeItem('userProfile');
    navigate('/');
  };

  const handleEditProfile = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <BackButton label="Back to Shop" href="/shop" />

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">My Account</h1>
            <p className="text-lg text-muted-foreground">Manage your profile, addresses, and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Profile Card */}
              <div className="bg-white rounded-lg border border-border p-6 mb-6 shadow-md">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                  <User size={40} />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-1 text-center">{userProfile.fullName}</h2>
                <p className="text-sm text-muted-foreground text-center mb-4">{userProfile.email}</p>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-lg font-semibold hover:bg-red-100 transition border border-red-200"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>

              {/* Navigation Menu */}
              <div className="bg-white rounded-lg border border-border p-4 shadow-md">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium text-sm ${
                      activeTab === 'profile'
                        ? 'bg-primary text-white'
                        : 'text-foreground hover:bg-gray-100'
                    }`}
                  >
                    <User size={18} />
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('addresses')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium text-sm ${
                      activeTab === 'addresses'
                        ? 'bg-primary text-white'
                        : 'text-foreground hover:bg-gray-100'
                    }`}
                  >
                    <MapPin size={18} />
                    Addresses
                  </button>
                  <button
                    onClick={() => setActiveTab('preferences')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium text-sm ${
                      activeTab === 'preferences'
                        ? 'bg-primary text-white'
                        : 'text-foreground hover:bg-gray-100'
                    }`}
                  >
                    <Bell size={18} />
                    Preferences
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium text-sm ${
                      activeTab === 'settings'
                        ? 'bg-primary text-white'
                        : 'text-foreground hover:bg-gray-100'
                    }`}
                  >
                    <Settings size={18} />
                    Settings
                  </button>
                </nav>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 bg-white rounded-lg border border-border p-4 shadow-md">
                <h4 className="font-bold text-foreground mb-4 text-sm">Your Stats</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Orders</span>
                    <span className="font-bold text-foreground">0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Spent</span>
                    <span className="font-bold text-foreground">₹0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Loyalty Points</span>
                    <span className="font-bold text-primary">0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="bg-white rounded-lg border border-border p-8 shadow-md">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-foreground">Personal Information</h3>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center gap-2 text-primary hover:text-cyan-600 transition font-semibold"
                    >
                      <Edit2 size={18} />
                      {isEditing ? 'Cancel' : 'Edit'}
                    </button>
                  </div>

                  {isEditing ? (
                    <form onSubmit={handleEditProfile} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                        <input
                          type="text"
                          value={userProfile.fullName}
                          onChange={(e) => setUserProfile({ ...userProfile, fullName: e.target.value })}
                          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                        <input
                          type="email"
                          value={userProfile.email}
                          onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                        <input
                          type="tel"
                          value={userProfile.phone}
                          onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">City</label>
                        <input
                          type="text"
                          value={userProfile.city || ''}
                          onChange={(e) => setUserProfile({ ...userProfile, city: e.target.value })}
                          className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-cyan-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition"
                      >
                        Save Changes
                      </button>
                    </form>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">Full Name</label>
                        <p className="text-lg font-semibold text-foreground">{userProfile.fullName}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">Email</label>
                        <p className="text-lg font-semibold text-foreground">{userProfile.email}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">Phone</label>
                        <p className="text-lg font-semibold text-foreground">{userProfile.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">City</label>
                        <p className="text-lg font-semibold text-foreground">{userProfile.city || 'Not specified'}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div className="space-y-4">
                  <div className="bg-white rounded-lg border border-border p-8 shadow-md">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-foreground">Saved Addresses</h3>
                      <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition">
                        + Add New Address
                      </button>
                    </div>
                    <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
                      <MapPin size={32} className="mx-auto text-muted-foreground mb-3" />
                      <p className="text-muted-foreground">No addresses saved yet</p>
                      <p className="text-sm text-muted-foreground mt-2">Add your first address for faster checkout</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Preferences Tab */}
              {activeTab === 'preferences' && (
                <div className="bg-white rounded-lg border border-border p-8 shadow-md space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Notification Preferences</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition">
                      <div className="flex items-center gap-3">
                        <Bell size={20} className="text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">Order Updates</p>
                          <p className="text-sm text-muted-foreground">Receive updates on your orders</p>
                        </div>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer" />
                    </div>

                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition">
                      <div className="flex items-center gap-3">
                        <Heart size={20} className="text-red-500" />
                        <div>
                          <p className="font-semibold text-foreground">Wishlist Alerts</p>
                          <p className="text-sm text-muted-foreground">Get notified when wishlist items go on sale</p>
                        </div>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer" />
                    </div>

                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition">
                      <div className="flex items-center gap-3">
                        <Award size={20} className="text-primary" />
                        <div>
                          <p className="font-semibold text-foreground">Promotional Offers</p>
                          <p className="text-sm text-muted-foreground">Receive special deals and promotions</p>
                        </div>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 cursor-pointer" />
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-4">
                  {/* Account Security */}
                  <div className="bg-white rounded-lg border border-border p-8 shadow-md">
                    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Lock size={24} />
                      Account Security
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full p-4 border border-input rounded-lg hover:bg-gray-50 transition text-left flex items-center justify-between">
                        <span className="font-semibold text-foreground">Change Password</span>
                        <span className="text-muted-foreground">→</span>
                      </button>
                      <button className="w-full p-4 border border-input rounded-lg hover:bg-gray-50 transition text-left flex items-center justify-between">
                        <span className="font-semibold text-foreground">Two-Factor Authentication</span>
                        <span className="text-muted-foreground">Not Enabled</span>
                      </button>
                      <button className="w-full p-4 border border-input rounded-lg hover:bg-gray-50 transition text-left flex items-center justify-between">
                        <span className="font-semibold text-foreground">Login Activity</span>
                        <span className="text-muted-foreground">→</span>
                      </button>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="bg-white rounded-lg border border-border p-8 shadow-md">
                    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <CreditCard size={24} />
                      Payment Methods
                    </h3>
                    <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
                      <CreditCard size={32} className="mx-auto text-muted-foreground mb-3" />
                      <p className="text-muted-foreground">No payment methods saved</p>
                      <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition">
                        Add Payment Method
                      </button>
                    </div>
                  </div>

                  {/* Legal Documents */}
                  <div className="bg-white rounded-lg border border-border p-8 shadow-md">
                    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <FileText size={24} />
                      Legal Documents
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full p-4 border border-input rounded-lg hover:bg-gray-50 transition text-left flex items-center justify-between">
                        <span className="font-semibold text-foreground">Terms & Conditions</span>
                        <span className="text-muted-foreground">→</span>
                      </button>
                      <button className="w-full p-4 border border-input rounded-lg hover:bg-gray-50 transition text-left flex items-center justify-between">
                        <span className="font-semibold text-foreground">Privacy Policy</span>
                        <span className="text-muted-foreground">→</span>
                      </button>
                      <button className="w-full p-4 border border-input rounded-lg hover:bg-gray-50 transition text-left flex items-center justify-between">
                        <span className="font-semibold text-foreground">Cookie Policy</span>
                        <span className="text-muted-foreground">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
