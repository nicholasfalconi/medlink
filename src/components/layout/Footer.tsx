import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              The MedLink Project
            </h3>
            <p className="text-gray-500">Supporting Tomorrow's Doctors, Today</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mentors"
                  className="hover:text-gray-900 transition-colors"
                >
                  Mentor Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mentees"
                  className="hover:text-gray-900 transition-colors"
                >
                  Mentee Services
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-gray-900 transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              Contact Us
            </h3>
            <p>themedlinkproject@gmail.com</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2025 The MedLink Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
