import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Assets/Data/Data.json";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = data.find((p) => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  if (!project)
    return <div className="text-center py-20 text-red-500">Project not found 😢</div>;

  const openModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // disable scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // enable scroll
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 bg-white">
      {/* Project Info */}
      <div className="flex flex-col sm:flex-row gap-10 items-center">
        {/* Cover Image */}
        <motion.div
          className="w-full sm:w-1/2 h-80 sm:h-96 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "fallback-image-url.jpg";
            }}
          />
        </motion.div>

        {/* Text Info */}
        <motion.div
          className="space-y-6 sm:w-1/2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold text-black">{project.title}</h1>
          <h2 className="text-xl font-semibold text-gray-600">{project.subtitle}</h2>
          <p className="text-gray-500 mt-4">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gallery */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-3xl font-semibold text-black mb-6">Project Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {project.gallery.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => openModal(i)}
            >
              <img
                src={img}
                alt={`Gallery Image ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center   p-4">
          <motion.div
            className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto p-4 bg-white/5 backdrop-blur-2xl rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/70 hover:bg-black/90 rounded-full p-1 z-10"
            >
              ✖
            </button>

            {/* Modal Image */}
            <img
              src={project.gallery[modalImageIndex]}
              alt={`Modal Image ${modalImageIndex + 1}`}
              className="max-h-[80vh] max-w-full object-contain rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
