// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Header = ({ data }) => {
//   const { content, description, button } = data;
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     switch (button) {
//       case "Get Started":
//         navigate("/MLloOps");
//         break;
//       case "Explore More":
//         window.open("https://github.com/rbg-research", "_blank");
//         break;
//       case "Reach Us":
//         navigate("/contact");
//         break;
//       default:
//         navigate("/");
//     }
//   };

//   const splitIntoWords = (text) => {
//     return text.split(/\s+/).map((word, index, array) => ({
//       word,
//       isLast: index === array.length - 1,
//     }));
//   };

//   return (
//     <div className="relative w-full bg-white overflow-hidden">
//       <div className="min-h-[100svh] flex flex-col lg:flex-row">
//         {/* Left Content */}
//         <div
//           className="w-full lg:w-7/12 xl:w-8/12 px-4 sm:px-6 md:px-8 lg:px-12 
//           pt-16 sm:pt-20 md:pt-24 lg:pt-0 lg:flex lg:items-center"
//         >
//           <div className="w-full max-w-4xl mx-auto lg:mx-0">
//             {/* Background gradient */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
//               <div
//                 className="absolute top-0 left-0 w-full h-full 
//                 bg-gradient-to-br from-red-200 via-transparent to-transparent"
//               ></div>
//             </div>

//             {/* Main heading */}
//             <h1
//               className="relative text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
//               font-normal leading-tight tracking-tight"
//             >
//               {content &&
//                 splitIntoWords(content).map(({ word, isLast }, index) => (
//                   <React.Fragment key={index}>
//                     <span
//                       className={`
//                         inline-block opacity-0
//                         ${
//                           index >= splitIntoWords(content).length - 2
//                             ? "text-red-700"
//                             : "text-zinc-900"
//                         }
//                         animate-[fadeSlideUp_0.7s_ease-out_forwards]
//                         hover:animate-[pulse_1s_ease-in-out]
//                       `}
//                       style={{
//                         animationDelay: `${index * 0.1}s`,
//                       }}
//                     >
//                       {word}
//                     </span>
//                     {!isLast && (
//                       <span className="inline-block w-[0.25em]"> </span>
//                     )}
//                   </React.Fragment>
//                 ))}
//             </h1>

//             {/* Description */}
//             {description && (
//               <p
//                 className="relative text-base xs:text-lg sm:text-xl lg:text-2xl text-zinc-600 
//                 mt-4 sm:mt-5 lg:mt-6 max-w-3xl
//                 opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]"
//                 style={{ animationDelay: "0.7s" }}
//               >
//                 {description}
//               </p>
//             )}

//             {/* CTA Button */}
//             {button && (
//               <div
//                 className="relative mt-6 sm:mt-8 lg:mt-10 
//                 opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]"
//                 style={{ animationDelay: "0.9s" }}
//               >
//                 <button
//                   onClick={handleButtonClick}
//                   className="group w-full sm:w-auto bg-red-500 text-white 
//                     px-6 sm:px-8 py-3.5 sm:py-4 
//                     rounded-full text-base sm:text-lg lg:text-xl 
//                     inline-flex items-center justify-center gap-2
//                     transition-all duration-300 
//                     hover:bg-red-600 hover:shadow-lg active:scale-95 lg:hover:scale-105
//                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                 >
//                   <span
//                     className="inline-block transform group-hover:translate-x-1 
//                     transition-transform duration-300"
//                   >
//                     {button}
//                   </span>
//                   {button === "Explore More" ? (
//                     <svg
//                       className="w-5 h-5 transform group-hover:translate-x-1 
//                         transition-transform duration-300"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                     >
//                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-5 h-5 transform group-hover:translate-x-1 
//                         transition-transform duration-300"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M4 12H20M20 12L14 6M20 12L14 18"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Content - Fixed card size */}
//         <div
//           className="w-full lg:w-5/12 xl:w-4/12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
//           py-8 sm:py-10 md:py-12 lg:py-0 lg:flex lg:items-center 
//           opacity-0 animate-[scaleIn_0.4s_ease-out_forwards]"
//           style={{ animationDelay: "0.5s" }}
//         >
//           {/* Card container with fixed width */}
//           <div className="w-full max-w-md mx-auto lg:mx-0">
//             <div
//               className="bg-gray-50 rounded-2xl p-6 sm:p-8 
//               shadow-lg w-full
//               hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
//                 <div className="w-full sm:flex-1 text-center sm:text-left">
//                   <h3 className="font-medium text-lg sm:text-xl mb-2">
//                     The AI Maker. The Human Checker.
//                   </h3>
//                   <p className="text-base sm:text-lg text-gray-600">
//                     Structure your data with The AI Maker. Ensure perfection
//                     with The Human Checker.
//                   </p>
//                 </div>
//                 {/* Fixed size icon container */}
//                 <div
//                   className="w-16 h-16 
//                   bg-red-100 rounded-xl flex items-center justify-center 
//                   opacity-75 shrink-0 animate-[spin_10s_linear_infinite]"
//                 >
//                   <div
//                     className="w-10 h-10 
//                     animate-[pulse_2s_ease-in-out_infinite]"
//                   >
//                     <svg
//                       viewBox="0 0 40 40"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         cx="20"
//                         cy="20"
//                         r="16"
//                         fill="currentColor"
//                         className="text-red-400 opacity-25"
//                       />
//                       <circle
//                         cx="20"
//                         cy="20"
//                         r="12"
//                         fill="currentColor"
//                         className="text-red-500 opacity-50"
//                       />
//                       <circle
//                         cx="20"
//                         cy="20"
//                         r="8"
//                         fill="currentColor"
//                         className="text-red-600 opacity-75"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const style = document.createElement("style");
// style.textContent = `
//   @keyframes fadeSlideUp {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }

//   @keyframes gradientMove {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
//   }

//   @keyframes float {
//     0%, 100% { transform: translateY(0px); }
//     50% { transform: translateY(-10px); }
//   }

//   @keyframes scaleIn {
//     from {
//       opacity: 0;
//       transform: scale(0.98);
//     }
//     to {
//       opacity: 1;
//       transform: scale(1);
//     }
//   }
// `;
// document.head.appendChild(style);

// export default Header;




import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // Updated to react-helmet-async

const Header = ({ data }) => {
  const { content, description, button } = data;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    switch (button) {
      case "Get Started":
        navigate("/MLloOps");
        break;
      case "Explore More":
        window.open("https://github.com/rbg-research", "_blank", "noopener,noreferrer");
        break;
      case "Reach Us":
        navigate("/contact");
        break;
      default:
        navigate("/");
    }
  };

  const splitIntoWords = (text) => {
    return text.split(/\s+/).map((word, index, array) => ({
      word,
      isLast: index === array.length - 1,
    }));
  };

  return (
    <>
      <Helmet>
        <style>
          {`
            @keyframes fadeSlideUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }

            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.98);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}
        </style>
      </Helmet>

      <div className="relative w-full bg-white overflow-hidden">
        <div className="min-h-screen flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-7/12 xl:w-8/12 px-4 sm:px-6 md:px-8 lg:px-12 pt-16 sm:pt-20 md:pt-24 lg:pt-0 lg:flex lg:items-center">
            <div className="w-full max-w-4xl mx-auto lg:mx-0">
              {/* Background gradient */}
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-200 via-transparent to-transparent"></div>
              </div>

              {/* Main heading */}
              <h1 className="relative text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight">
                {content &&
                  splitIntoWords(content).map(({ word, isLast }, index) => (
                    <React.Fragment key={index}>
                      <span
                        className={`
                          inline-block opacity-0
                          ${index >= splitIntoWords(content).length - 2 ? "text-red-700" : "text-zinc-900"}
                          animate-[fadeSlideUp_0.7s_ease-out_forwards]
                          hover:animate-[pulse_1s_ease-in-out]
                        `}
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        {word}
                      </span>
                      {!isLast && <span className="inline-block w-[0.25em]"> </span>}
                    </React.Fragment>
                  ))}
              </h1>

              {/* Description */}
              {description && (
                <p
                  className="relative text-base xs:text-lg sm:text-xl lg:text-2xl text-zinc-600 mt-4 sm:mt-5 lg:mt-6 max-w-3xl opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]"
                  style={{ animationDelay: "0.7s" }}
                >
                  {description}
                </p>
              )}

              {/* CTA Button */}
              {button && (
                <div
                  className="relative mt-6 sm:mt-8 lg:mt-10 opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]"
                  style={{ animationDelay: "0.9s" }}
                >
                  <button
                    onClick={handleButtonClick}
                    className="group w-full sm:w-auto bg-red-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-red-600 hover:shadow-lg active:scale-95 lg:hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                      {button}
                    </span>
                    {button === "Explore More" ? (
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12H20M20 12L14 6M20 12L14 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Content - Fixed card size */}
          <div className="w-full lg:w-5/12 xl:w-4/12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-0 lg:flex lg:items-center opacity-0 animate-[scaleIn_0.4s_ease-out_forwards]"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Card container with fixed width */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg w-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-full sm:flex-1 text-center sm:text-left">
                    <h3 className="font-medium text-lg sm:text-xl mb-2">
                      The AI Maker. The Human Checker.
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600">
                      Structure your data with The AI Maker. Ensure perfection with The Human Checker.
                    </p>
                  </div>
                  {/* Fixed size icon container */}
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center opacity-75 animate-[spin_10s_linear_infinite]">
                    <div className="w-10 h-10 animate-[pulse_2s_ease-in-out_infinite]">
                      <svg
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="20" cy="20" r="16" fill="currentColor" className="text-red-400 opacity-25" />
                        <circle cx="20" cy="20" r="12" fill="currentColor" className="text-red-500 opacity-50" />
                        <circle cx="20" cy="20" r="8" fill="currentColor" className="text-red-600 opacity-75" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
