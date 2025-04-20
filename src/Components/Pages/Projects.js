import { useNavigate } from "react-router-dom";
import data from "../Assets/Data/Data.json";
import { motion } from "framer-motion";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center font-sans tracking-tight">
        Featured Projects 🚀
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((project, i) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            {/* Image Section */}
            <motion.img
              src={project.cover}
              alt={project.title}
              className="w-full h-56 object-cover rounded-t-xl transition-transform duration-500 ease-in-out hover:scale-110"
            />

            {/* Text Section */}
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold font-sans">{project.title}</h2>
              <p className="text-lg text-gray-700 line-clamp-3">
                {project.description}
              </p>
              
              {/* Read More Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-all duration-300"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                Read More &rarr;
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
