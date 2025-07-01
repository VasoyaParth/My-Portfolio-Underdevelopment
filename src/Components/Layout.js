import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Menubar.js";
import Footer from "./Footer.js";
import Loader from "./Loader/Loader.js"; // update path if needed
import Modal from "./Pages/Modal.js"; // Import Modal
import { Analytics } from "@vercel/analytics/react"
function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Check if it's the 404 page
  const isNotFound =
    location.pathname === "/404" || location.pathname === "*" || location.state?.notFound;

  // Manage loading state on route change
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time if needed for loader

    // Show the modal only if it's the user's first time
    if (!localStorage.getItem('modalSeen')) {
      setShowModal(true);
    }

    return () => clearTimeout(timer); // Cleanup on location change
  }, [location.pathname]);

  // Handle closing the modal
  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem('modalSeen', 'true'); // Save that modal was shown
  };

  return (
    <>
     <Analytics />
      {/* Only render Navbar if not on 404 page */}
      {!isNotFound && <Navbar />}

      {/* Loader during route transition */}
      {loading ? (
        <Loader />
      ) : (
        <main className="">
          <Outlet /> {/* Content for the current route will render here */}
        </main>
      )}

      {/* Only render Footer if not on 404 page */}
      {!isNotFound && <Footer />}

      {/* Show the modal if it's the user's first time visiting */}
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
}

export default Layout;
