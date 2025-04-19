import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-white flex flex-col items-center justify-center px-6 text-gray-800 overflow-hidden relative">

      {/* Decorative Floating Circles (Optional Aesthetic) */}
      <div className="absolute w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-40 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-ping"></div>

      {/* Glowing 404 */}
      <motion.h1
        className="text-[8rem] md:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        className="text-lg md:text-xl text-center text-gray-600 max-w-md mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Oops! This page doesn't exist or might have been moved.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all text-white rounded-full text-lg shadow-xl"
        >
          🔙 Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
