import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Menubar.js";
import Footer from "./Footer.js";
import Loader from "./Loader/Loader.js"; // update path if needed

function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Check if current route is 404 (can be handled from route or specific flag later)
  const isNotFound = location.pathname === "/404" || location.pathname === "*" || location.state?.notFound;

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Fake delay for loading, customize as needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Don't show navbar/footer if it's a NotFound route */}
      {!isNotFound && <Navbar />}

      {loading ? (
        <Loader />
      ) : (
        <main className="min-h-screen">
          <Outlet />
        </main>
      )}

      {!isNotFound && <Footer />}
    </>
  );
}

export default Layout;
