import { useState } from "react";
import { Star, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRating > 0) {
      // Show success message
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSelectedRating(0);
        setFeedback("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <BackButton label="Back to Home" />

        <h1 className="text-4xl font-bold text-foreground mb-4">Rate Our App</h1>
        <p className="text-lg text-muted-foreground mb-12">
          We'd love to hear your feedback! Please rate your experience with Beula Agency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Rating Section */}
          <div className="bg-white rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">How would you rate us?</h2>

            {/* Interactive Star Rating */}
            <div className="flex gap-4 mb-8">
              {[1, 2, 3, 4, 5].map(rating => (
                <button
                  key={rating}
                  onClick={() => setSelectedRating(rating)}
                  onMouseEnter={() => setHoverRating(rating)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="group p-3 rounded-lg hover:bg-yellow-100 transition transform hover:scale-110"
                  title={`Rate ${rating} star${rating !== 1 ? 's' : ''}`}
                >
                  <Star
                    size={48}
                    className={`transition cursor-pointer ${
                      rating <= (hoverRating || selectedRating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Rating Display */}
            {(selectedRating > 0 || hoverRating > 0) && (
              <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-center font-semibold text-foreground">
                  You're rating us {hoverRating || selectedRating} out of 5 stars
                </p>
              </div>
            )}

            {/* Feedback Form - Only shows after a star is clicked */}
            {selectedRating > 0 ? (
              <>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Share your feedback (optional)
                    </label>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Tell us what you think about Beula Agency..."
                      rows={5}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
                  >
                    {submitted ? "✓ Rating Submitted!" : "Submit Rating"}
                  </button>
                </form>

                {/* Success Message */}
                {submitted && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="text-green-600" size={24} />
                    <div>
                      <p className="font-bold text-green-700">Thank you for your feedback!</p>
                      <p className="text-sm text-green-600">Your rating helps us improve.</p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-orange-600 font-medium text-center">
                  ⭐ Please select a rating to share feedback
                </p>
              </div>
            )}
          </div>

          {/* Statistics */}
          <div className="space-y-6">
            {/* Average Rating Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="text-lg font-bold text-foreground mb-4">Overall Rating</h3>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-6xl font-bold text-yellow-500">4.6</span>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < 5 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Based on 1,234+ customer reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Rating Breakdown</h3>
              {[5, 4, 3, 2, 1].map(stars => {
                const percentages = { 5: 65, 4: 20, 3: 10, 2: 3, 1: 2 };
                return (
                  <div key={stars} className="flex items-center gap-3">
                    <div className="flex gap-0.5 w-12">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < stars ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <div className="flex-1 bg-border rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentages[stars as keyof typeof percentages]}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-10 text-right">
                      {percentages[stars as keyof typeof percentages]}%
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Why Rate Us */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-foreground mb-2">📝 Why rate us?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Help us improve our service</li>
                <li>✓ Share your experience</li>
                <li>✓ Help other customers</li>
                <li>✓ Get exclusive offers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rating;
