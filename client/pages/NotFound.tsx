import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BackButton from "@/components/common/BackButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BackButton label="Back" />
      </div>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
