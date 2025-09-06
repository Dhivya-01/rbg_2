import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Custom ScrollToTopLink component for products and solutions
const ScrollToTopLink = ({ to, children, className }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default function Footer() {
  const linkedln = "https://in.linkedin.com/company/rbgai";
  const youtube = "https://www.youtube.com/c/RBGAI";
  const github = "https://github.com/rbg-research";

  const products = [
    { name: "MLStack", path: "/MLStack" },
    { name: "MLloOps", path: "/MLloOps" },
  ];
  const solutions = [
    { name: "DHVANI", path: "/Dhvani" },
    { name: "Deed Parser", path: "/DeedParser" },
    { name: "Know Voice", path: "/KnowVoice" },
    { name: "Captcha Solver", path: "/CaptchaSolver" },
    { name: "Form Extractor", path: "/FormExtractor" },
  ];

  return (
    <div className="bg-gray-100">
      <div className="px-5 md:px-20 py-5 mt-10 md:py-10 text-left max-w-7xl w-full mx-auto bg-gray-100 rounded flex flex-col space-y-10 font-Inter text-zinc-600">
        {/* Social Links Section */}
        <div className="flex items-start space-x-5 md:space-x-10 text-left text-lg font-Poppins md:text-2xl">
          <span className="font-semibold text-zinc-800">Follow us on </span>
          <a
            href={github}
            className="cursor-pointer hover:text-green-600 hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>
          <a
            href={linkedln}
            className="cursor-pointer hover:text-blue-700 hover:scale-110 duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href={youtube}
            className="cursor-pointer hover:text-red-600 hover:scale-110 duration-300"
          >
            <FaYoutube />
          </a>
        </div>
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* More About Us Column - Regular Links */}
          <div className="flex flex-col space-y-3">
            <h1 className="text-zinc-800 font-semibold mb-2">More About Us</h1>
            <ScrollToTopLink
              className="hover:text-red-600 hover:scale-105 duration-300"
              to="/"
            >
              Home
            </ScrollToTopLink>
            <ScrollToTopLink
              className="hover:text-red-600 hover:scale-105 duration-300"
              to="research"
            >
              Research
            </ScrollToTopLink>
            <ScrollToTopLink
              className="hover:text-red-600 hover:scale-105 duration-300"
              to="about"
            >
              About us
            </ScrollToTopLink>
            <ScrollToTopLink
              className="hover:text-red-600 hover:scale-105 duration-300"
              to="contact"
            >
              Contact us
            </ScrollToTopLink>
            <ScrollToTopLink
              className="hover:text-red-600 hover:scale-105 duration-300"
              to="gallery"
            >
              Gallery
            </ScrollToTopLink>
          </div>

          {/* Products Column - With Scroll to Top */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Products</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li
                  key={index}
                  className="hover:text-green-600 hover:scale-105 duration-300"
                >
                  <ScrollToTopLink to={product.path} className="">
                    {product.icon}
                    <span>{product.name}</span>
                  </ScrollToTopLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column - With Scroll to Top */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <li
                  key={index}
                  className="hover:text-blue-700 hover:scale-105 duration-300"
                >
                  <ScrollToTopLink to={solution.path} className="">
                    {solution.icon}
                    <span>{solution.name}</span>
                  </ScrollToTopLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        {/* Footer Bottom Section - Regular Links */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex space-x-10">
            <Link
              to="/"
              className="font-semibold hover:text-blue-700 hover:scale-105 duration-300"
            >
              RBG.AI
            </Link>
          </div>
          <div className="flex flex-1 justify-center">
            <p className="text-center">
              © 2021 - 2024 RBG.AI All rights reserved
            </p>
          </div>
          <div className="flex gap-4">
            <ScrollToTopLink
              className="font-medium text-zinc-700 hover:text-blue-700 hover:scale-105 duration-300"
              to="/policy"
            >
              Privacy Policy
            </ScrollToTopLink>
            <ScrollToTopLink
              className="font-medium text-zinc-700 hover:text-blue-700 hover:scale-105 duration-300"
              to="/Terms"
            >
              Terms of Service
            </ScrollToTopLink>
          </div>
        </div>
      </div>
    </div>
  );
}
