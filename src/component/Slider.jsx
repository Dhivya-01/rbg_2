import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ContinuousCardSlider = ({ data }) => {
  if (!data || !data.length) return null;

  const [cards, setCards] = useState([...data, ...data]);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get dynamic card width based on screen size
  const getCardWidth = () => {
    if (typeof window === "undefined") return 320;
    const width = window.innerWidth;
    if (width < 380) return 260; // smaller phones
    if (width < 640) return 280; // regular phones
    if (width < 768) return 300; // larger phones/small tablets
    return 320; // desktop
  };

  // Automatic scrolling for desktop only
  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer || isPaused || isMobile) return;

    const animate = () => {
      const scrollAmount = 1;
      scrollContainer.scrollLeft += scrollAmount;

      // Reset scroll position when reaching end
      if (
        scrollContainer.scrollLeft >=
        (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2
      ) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(animate, 20);
    return () => clearInterval(intervalId);
  }, [isPaused, isMobile]);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className={`flex gap-4 md:gap-6 overflow-x-auto scroll-smooth
          ${isMobile ? "snap-x snap-mandatory" : "overflow-x-hidden"}
          ${isMobile ? "px-4 -mx-4" : ""} // Add padding on mobile for better UX
          scrollbar-hide`} // Hide scrollbar but keep functionality
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          WebkitOverflowScrolling: "touch", // iOS smooth scrolling
        }}
        onMouseEnter={() => !isMobile && setIsPaused(true)}
        onMouseLeave={() => !isMobile && setIsPaused(false)}
      >
        {cards.map((item, index) => (
          <div
            key={`${item.venue}-${index}`}
            className={`flex-shrink-0 transition-all duration-300 
              ${isMobile ? "snap-center" : ""}`}
            style={{ width: `${getCardWidth()}px` }}
          >
            <div
              className={`h-full bg-white rounded-xl p-4 md:p-6 transform transition-all duration-300 
              ${
                !isMobile
                  ? "hover:shadow-xl hover:-translate-y-2"
                  : "active:scale-95"
              }
              border border-gray-200`}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-3 md:space-y-4">
                  <div>
                    <h3 className="text-gray-600 text-sm sm:text-base mb-1">
                      Venue
                    </h3>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base whitespace-normal break-words leading-relaxed">
                      {item.venue}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-600 text-sm sm:text-base mb-1">
                      Date
                    </h3>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                      {item.Date}
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center py-6 md:py-8">
                  <img
                    src={item.img}
                    alt={item.venue}
                    className="w-3/4 max-h-[120px] md:max-h-[150px] object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="mt-3 md:mt-4">
                  <Link to={item.link} className="block w-full">
                    <button
                      disabled={item.disable}
                      className="w-full bg-red-500 px-4 md:px-6 py-2.5 md:py-3 rounded-lg text-white font-medium
                        transform transition-all duration-300
                        active:bg-red-600 md:hover:bg-red-600 
                        active:scale-95 md:hover:shadow-lg
                        disabled:opacity-50 disabled:cursor-not-allowed
                        text-sm sm:text-base"
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add scroll indicators for mobile */}
      {isMobile && (
        <div className="flex justify-center gap-1 mt-4">
          {data.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContinuousCardSlider;
