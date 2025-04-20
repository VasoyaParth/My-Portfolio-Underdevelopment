function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-600">
        {/* Left Column */}
        <div className="space-y-1 text-center sm:text-left">
          <p>© 2025 Vasoya Parth. All rights reserved.</p>
          <p className="text-gray-400 text-xs">
            Built with{" "}
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              React
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-medium hover:underline"
            >
              TailwindCSS
            </a>
            , and{" "}
            <a
              href="https://preline.co/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-medium hover:underline"
            >
              Preline UI
            </a>
          </p>
        </div>

        {/* Center Column */}
        <div className="text-center">
          <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-500">
            <li>
              <a
                href="/projects"
                className="hover:underline hover:text-blue-600 transition"
              >
                Projects
              </a>
              <span>  |  </span>
              <a
                href="#certificates"
                className="hover:underline hover:text-blue-600 transition"
              >
                Certificates
              </a>
            </li>
           
          </ul>
        </div>

        {/* Right Column */}
        <div className="space-y-1 text-center sm:text-right">
          <div className="flex justify-center sm:justify-end space-x-4 text-gray-500">
            <a
              href="https://www.linkedin.com/in/vasoya-parth-82a69224b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a
              href="https://twitter.com/i_VasoyaPunit_i?t=I1NNGNvLE2Y6kcTp9yTqmw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
              title="Twitter"
            >
              <i className="fab fa-twitter text-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/parth_vasoya_10/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
              title="Instagram"
            >
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a
              href="https://github.com/VasoyaParth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition"
              title="GitHub"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
          </div>
          <p className="text-xs text-gray-400">Built with ❤️ from India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
