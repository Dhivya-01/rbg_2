import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../assests/images/rbg.jpeg";
import { CiMenuBurger } from "react-icons/ci";
import { FaWindowClose } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { useState, useEffect } from "react";
import { FileInput, Bot, Image } from "lucide-react";

// Custom hook to handle scrolling to top
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
};

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggleButton, setButton] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const solutionPaths = [
    "/Dhvani",
    "/DeedParser",
    "/KnowVoice",
    "/CaptchaSolver",
    "/FormExtractor",
  ];
  const isActiveSolution = solutionPaths.includes(location.pathname);
  const productsPaths = ["/MLStack", "/MLloOps"];
  const isActiveProducts = productsPaths.includes(location.pathname);

  useScrollToTop();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (toggleButton) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggleButton]);

  const handleToggle = () => {
    setButton((state) => !state);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleNavigate = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setButton(false);
  };

  const handleLinkClick = () => {
    setButton(false);
    setActiveDropdown(null);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const MicrophoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
      />
    </svg>
  );

  const DocumentIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 9h6M9 13h6M9 17h4"
      />
    </svg>
  );

  // Icon components for products
  const StackIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    </svg>
  );

  const RefreshIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );

  const solutions = [
    {
      path: "/Dhvani",
      title: "DHVANI",
      description: "AI Based Voice Recognition System to Combat Cyberfrauds",
      icon: <MicrophoneIcon />,
    },
    {
      path: "/DeedParser",
      title: "Deed Parser",
      description: "GenAI Based Parser for Legal Deeds",
      icon: <DocumentIcon />,
    },
    {
      path: "/KnowVoice",
      title: "Know Voice",
      description: "Post Call Analytics and Insights",
      icon: <MicrophoneIcon />,
    },
    {
      path: "/CaptchaSolver",
      title: "Captcha Solver",
      description: "Ethical Bot for Bypassing Captcha",
      icon: <Image className="h-6 w-6" />,
    },
    {
      path: "/FormExtractor",
      title: "Form Extractor",
      description: "Complex Table and Layout to JSON",
      icon: <DocumentIcon className="h-6 w-6" />,
    },
  ];

  const products = [
    {
      path: "/MLStack",
      title: "MLStack",
      description:
        "Stack of Machine Learned APIs for Structuring the Unstructured Data",
      icon: <StackIcon />,
    },
    {
      path: "/MLloOps",
      title: "MLloOps",
      description:
        "Human Machine Loop for Accelerated Machine Learning Workflows",
      icon: <RefreshIcon />,
    },
  ];

  // Custom Link component that scrolls to top
  const ScrollToTopLink = ({ to, children, className }) => {
    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      handleLinkClick();
    };

    return (
      <Link to={to} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden bg-white z-10 sticky top-0 left-0 max-w-7xl mx-auto rounded-full shadow-lg m-2 md:flex space-x-8 items-center font-Poppins py-4 px-4 md:px-6 lg:px-8">
        <div
          onClick={handleNavigate}
          className="text-2xl cursor-pointer font-bold"
        >
          <img src={logo} alt="" className="rounded w-14" />
        </div>
        <ul className="flex flex-1 justify-center space-x-2 md:space-x-8">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-500" : ""
            }
            onClick={handleLinkClick}
            to={"/"}
          >
            Home
          </NavLink>

          <div className="relative group">
            <button
              className={`flex items-center space-x-1 group-hover:text-blue-600 pb-2 ${
                isActiveProducts ? "border-b-2 border-red-500" : ""
              }`}
            >
              <span>Products</span>
              {/* <IoChevronDown className="h-4 w-4" /> */}
            </button>

            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-6 rounded-lg w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="space-y-4">
                {products.map((product) => (
                  <li key={product.path} className="group/item">
                    <ScrollToTopLink
                      to={product.path}
                      className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <span className="text-gray-400 mt-1">{product.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900 group-hover/item:text-blue-600">
                          {product.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.description}
                        </div>
                      </div>
                    </ScrollToTopLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button
              className={`flex items-center space-x-1 group-hover:text-blue-600 pb-2 ${
                isActiveSolution ? "border-b-2 border-green-500" : ""
              }`}
            >
              <span>Solutions</span>
              {/* <IoChevronDown className="h-4 w-4" /> */}
            </button>
            <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-6 rounded-lg w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="space-y-4">
                {solutions.map((solution) => (
                  <li key={solution.path} className="group/item">
                    <ScrollToTopLink
                      to={solution.path}
                      className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                      <span className="text-gray-400 mt-1">
                        {solution.icon}
                      </span>
                      <div>
                        <div className="font-medium text-gray-900 group-hover/item:text-blue-600">
                          {solution.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {solution.description}
                        </div>
                      </div>
                    </ScrollToTopLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-500" : ""
            }
            onClick={handleLinkClick}
            to={"/research"}
          >
            Research
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-green-500" : ""
            }
            to={"/about"}
            onClick={handleLinkClick}
          >
            About us
          </NavLink>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white z-50 sticky top-0 left-0 max-w-7xl mx-auto rounded-full shadow-lg m-2">
        <div className="flex justify-between items-center p-4">
          <div onClick={handleNavigate} className="cursor-pointer">
            <img src={logo} alt="" className="rounded w-14" />
          </div>
          <button
            onClick={handleToggle}
            className="text-gray-600 hover:text-gray-900"
          >
            <CiMenuBurger className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {toggleButton && (
          <div className="fixed inset-0 bg-white z-50">
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <img src={logo} alt="" className="rounded w-14" />
                <button
                  onClick={handleToggle}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaWindowClose className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block text-lg ${
                      isActive ? "text-blue-600 font-medium" : "text-gray-900"
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>

                {/* Mobile Products Dropdown */}
                <div>
                  <button
                    onClick={() => handleDropdownToggle("products")}
                    className="flex items-center justify-between w-full text-lg text-gray-900"
                  >
                    <span>Products</span>
                    <IoChevronDown
                      className={`w-5 h-5 transform transition-transform ${
                        activeDropdown === "products" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "products" && (
                    <div className="mt-4 pl-4 space-y-4">
                      {products.map((product) => (
                        <ScrollToTopLink
                          key={product.path}
                          to={product.path}
                          className="block py-2 text-gray-600 hover:text-blue-600"
                        >
                          {product.title}
                        </ScrollToTopLink>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Solutions Dropdown */}
                <div>
                  <button
                    onClick={() => handleDropdownToggle("solutions")}
                    className="flex items-center justify-between w-full text-lg text-gray-900"
                  >
                    <span>Solutions</span>
                    <IoChevronDown
                      className={`w-5 h-5 transform transition-transform ${
                        activeDropdown === "solutions" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "solutions" && (
                    <div className="mt-4 pl-4 space-y-4">
                      {solutions.map((solution) => (
                        <ScrollToTopLink
                          key={solution.path}
                          to={solution.path}
                          className="block py-2 text-gray-600 hover:text-blue-600"
                        >
                          {solution.title}
                        </ScrollToTopLink>
                      ))}
                    </div>
                  )}
                </div>

                <NavLink
                  to="/research"
                  className={({ isActive }) =>
                    `block text-lg ${
                      isActive ? "text-red-600 font-medium" : "text-gray-900"
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  Research
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block text-lg ${
                      isActive ? "text-green-600 font-medium" : "text-gray-900"
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  About us
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
