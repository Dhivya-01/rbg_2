// import React, { useState } from 'react';

// // --- Data for the image accordion ---
// const accordionItems = [
//   {
//     id: 1,
//     title: 'Voice Assistant',
//     imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop',
//   },
//   {
//     id: 2,
//     title: 'AI Image Generation',
//     imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
//   },
//   {
//     id: 3,
//     title: 'AI Chatbot + Local RAG',
//     imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
//   },
//   {
//     id: 4,
//     title: 'AI Agent',
//     imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
//   },
//   {
//     id: 5,
//     title: 'Visual Understanding',
//     imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
//   },
// ];

// // --- Accordion Item Component ---
// const AccordionItem = ({ item, isActive, onMouseEnter }) => {
//   return (
//     <div
//       className={`
//         relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
//         transition-all duration-700 ease-in-out
//         ${isActive ? 'w-[400px]' : 'w-[60px]'}
//       `}
//       onMouseEnter={onMouseEnter}>
//       {/* Background Image */}
//       <img
//         src={item.imageUrl}
//         alt={item.title}
//         className="absolute inset-0 w-full h-full object-cover"
//         onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; }} />
//       {/* Dark overlay for better text readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       {/* Caption Text */}
//       <span
//         className={`
//           absolute text-white text-lg font-semibold whitespace-nowrap
//           transition-all duration-300 ease-in-out
//           ${
//             isActive
//               ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
//               // Inactive state: vertical, positioned at the bottom, for all screen sizes
//               : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
//           }
//         `}>
//         {item.title}
//       </span>
//     </div>
//   );
// };


// // --- Main App Component ---
// export function LandingAccordionItem() {
//   const [activeIndex, setActiveIndex] = useState(4);

//   const handleItemHover = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="bg-white font-sans">
//       <section className="container mx-auto px-4 py-12 md:py-24">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
//           {/* Left Side: Text Content */}
//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h1
//               className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter">
//               Accelerate Gen-AI Tasks on Any Device
//             </h1>
//             <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
//               Build high-performance AI apps on-device without the hassle of model compression or edge deployment.
//             </p>
//             <div className="mt-8">
//               <a
//                 href="#contact"
//                 className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300">
//                 Contact Us
//               </a>
//             </div>
//           </div>

//           {/* Right Side: Image Accordion */}
//           <div className="w-full md:w-1/2">
//             {/* Changed flex-col to flex-row to keep the layout consistent */}
//             <div
//               className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
//               {accordionItems.map((item, index) => (
//                 <AccordionItem
//                   key={item.id}
//                   item={item}
//                   isActive={index === activeIndex}
//                   onMouseEnter={() => handleItemHover(index)} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';

// // --- Data for the image accordion ---
// const accordionItems = [
//   {
//     id: 1,
//     title: 'Voice Assistant',
//     subtitle: 'Natural Language Processing',
//     imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop',
//     gradient: 'from-purple-600 via-pink-600 to-red-500'
//   },
//   {
//     id: 2,
//     title: 'AI Image Generation',
//     subtitle: 'Creative Visual AI',
//     imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
//     gradient: 'from-blue-600 via-cyan-500 to-teal-400'
//   },
//   {
//     id: 3,
//     title: 'AI Chatbot + Local RAG',
//     subtitle: 'Intelligent Conversations',
//     imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
//     gradient: 'from-indigo-600 via-purple-600 to-pink-500'
//   },
//   {
//     id: 4,
//     title: 'AI Agent',
//     subtitle: 'Autonomous Intelligence',
//     imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
//     gradient: 'from-emerald-600 via-green-500 to-lime-400'
//   },
//   {
//     id: 5,
//     title: 'Visual Understanding',
//     subtitle: 'Computer Vision AI',
//     imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
//     gradient: 'from-orange-600 via-red-500 to-pink-500'
//   },
// ];

// // --- Enhanced Accordion Item Component ---
// const AccordionItem = ({ item, isActive, onMouseEnter, index }) => {
//   return (
//     <div
//       className={`
//         relative h-[500px] rounded-3xl overflow-hidden cursor-pointer group
//         transition-all duration-1000 ease-out transform-gpu
//         ${isActive ? 'w-[420px] shadow-2xl scale-105' : 'w-[80px] hover:w-[90px] shadow-lg hover:shadow-xl'}
//         backdrop-blur-sm border border-white/20
//       `}
//       onMouseEnter={onMouseEnter}
//       style={{
//         transitionDelay: `${index * 50}ms`
//       }}>
      
//       {/* Background Image with Parallax Effect */}
//       <div className="absolute inset-0 overflow-hidden">
//         <img
//           src={item.imageUrl}
//           alt={item.title}
//           className={`
//             w-full h-full object-cover transition-transform duration-1000 ease-out
//             ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'}
//           `}
//           onError={(e) => { 
//             e.target.onerror = null; 
//             e.target.src = 'https://placehold.co/420x500/2d3748/ffffff?text=Image+Error'; 
//           }} 
//         />
//       </div>

//       {/* Animated Gradient Overlay */}
//       <div className={`
//         absolute inset-0 bg-gradient-to-br ${item.gradient} 
//         transition-all duration-1000 ease-out
//         ${isActive ? 'opacity-20' : 'opacity-40 group-hover:opacity-30'}
//       `}></div>

//       {/* Dark Overlay for Text Readability */}
//       <div className={`
//         absolute inset-0 bg-black transition-opacity duration-1000
//         ${isActive ? 'bg-opacity-30' : 'bg-opacity-50'}
//       `}></div>

//       {/* Animated Border Glow */}
//       <div className={`
//         absolute inset-0 rounded-3xl transition-all duration-1000
//         ${isActive 
//           ? `bg-gradient-to-r ${item.gradient} p-[2px] opacity-60` 
//           : 'bg-white/10 p-[1px] opacity-0 group-hover:opacity-40'
//         }
//       `}>
//         <div className="w-full h-full rounded-3xl bg-transparent"></div>
//       </div>

//       {/* Content Container */}
//       <div className="absolute inset-0 flex flex-col justify-end p-6">
//         {/* Active State Content */}
//         <div className={`
//           transition-all duration-700 ease-out transform
//           ${isActive 
//             ? 'opacity-100 translate-y-0' 
//             : 'opacity-0 translate-y-8 pointer-events-none'
//           }
//         `}>
//           <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
//             <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
//               {item.title}
//             </h3>
//             <p className="text-white/80 text-sm font-medium mb-4">
//               {item.subtitle}
//             </p>
//             <div className="flex items-center space-x-2">
//               <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
//               <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">
//                 Explore
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Inactive State - Vertical Text */}
//         <div className={`
//           absolute bottom-8 left-1/2 -translate-x-1/2
//           transition-all duration-700 ease-out transform
//           ${isActive 
//             ? 'opacity-0 rotate-90 translate-y-8 pointer-events-none' 
//             : 'opacity-100 rotate-90 translate-y-0'
//           }
//         `}>
//           <span className="text-white font-bold text-lg whitespace-nowrap tracking-wide">
//             {item.title}
//           </span>
//         </div>
//       </div>

//       {/* Floating Particles Effect */}
//       {isActive && (
//         <>
//           <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
//           <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
//           <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
//         </>
//       )}
//     </div>
//   );
// };

// // --- Main App Component ---
// export function LandingAccordionItem() {
//   const [activeIndex, setActiveIndex] = useState(2);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const handleItemHover = (index) => {
//     setActiveIndex(index);
//   };

//   // Auto-rotate effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % accordionItems.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Mouse tracking for gradient effect
//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     setMousePosition({
//       x: ((e.clientX - rect.left) / rect.width) * 100,
//       y: ((e.clientY - rect.top) / rect.height) * 100,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-transparent via-white/5 to-transparent rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
//       </div>

//       <section 
//         className="container mx-auto px-6 py-16 md:py-24 relative z-10"
//         onMouseMove={handleMouseMove}
//       >
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
//           {/* Left Side: Enhanced Text Content */}
//           <div className="w-full lg:w-1/2 text-center lg:text-left">
//             <div className="relative">
//               {/* Animated Gradient Text */}
//               <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
//                 <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-pulse">
//                   Accelerate
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
//                   Gen-AI Tasks
//                 </span>
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
//                   on Any Device
//                 </span>
//               </h1>

//               {/* Floating Badge */}
//               <div className="absolute -top-4 -right-4 hidden lg:block">
//                 <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
//                   ✨ NEW
//                 </div>
//               </div>
//             </div>

//             <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
//               Build high-performance AI applications on-device without the complexity of model compression or edge deployment. 
//               <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> Experience the future of AI.</span>
//             </p>

//             {/* Enhanced CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden">
//                 <span className="relative z-10">Get Started</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
//               </button>

//               <button className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
//                 <span className="flex items-center gap-2">
//                   Watch Demo
//                   <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-1a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </span>
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="flex justify-center lg:justify-start gap-8 mt-12">
//               <div className="text-center">
//                 <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">99.9%</div>
//                 <div className="text-gray-400 text-sm">Uptime</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">10x</div>
//                 <div className="text-gray-400 text-sm">Faster</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">24/7</div>
//                 <div className="text-gray-400 text-sm">Support</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Premium Image Accordion */}
//           <div className="w-full lg:w-1/2">
//             <div className="relative">
//               {/* Background Glow */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              
//               <div className="relative flex flex-row items-center justify-center gap-6 overflow-x-auto p-6 scrollbar-hide">
//                 {accordionItems.map((item, index) => (
//                   <AccordionItem
//                     key={item.id}
//                     item={item}
//                     index={index}
//                     isActive={index === activeIndex}
//                     onMouseEnter={() => handleItemHover(index)} 
//                   />
//                 ))}
//               </div>

//               {/* Progress Indicators */}
//               <div className="flex justify-center gap-2 mt-8">
//                 {accordionItems.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`
//                       w-3 h-3 rounded-full transition-all duration-300
//                       ${index === activeIndex 
//                         ? `bg-gradient-to-r ${accordionItems[index].gradient} shadow-lg` 
//                         : 'bg-white/20 hover:bg-white/30'
//                       }
//                     `}
//                     onClick={() => setActiveIndex(index)}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import TextType  from '@/components/ui/TextType';
import TextPressure from '@/components/ui/TextPressure';
// --- Data for the image accordion ---
import { ArrowRight, ExternalLink } from 'lucide-react';



const AnimatedHeading = () => {
  const texts = ["Delivering", "Human-Machine", "Loop"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // change every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl md:text-7xl leading-tight tracking-tighter mb-6">
      <TextPressure
        text={texts[index]}
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#f33d3dff"   // 👈 red text
        strokeColor="#000000"
        minFontSize={30}
      />
    </h1>
  );
};


const accordionItems = [
  {
    id: 1,
    title: 'Voice Assistant',
    subtitle: 'Natural Language Processing',
    imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop',
    gradient: 'from-purple-600 via-pink-600 to-red-500'
  },
  {
    id: 2,
    title: 'AI Image Generation',
    subtitle: 'Creative Visual AI',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-blue-600 via-cyan-500 to-teal-400'
  },
  {
    id: 3,
    title: 'AI Chatbot + Local RAG',
    subtitle: 'Intelligent Conversations',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
    gradient: 'from-indigo-600 via-purple-600 to-pink-500'
  },
  {
    id: 4,
    title: 'AI Agent',
    subtitle: 'Autonomous Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
    gradient: 'from-emerald-600 via-green-500 to-lime-400'
  },
  {
    id: 5,
    title: 'Visual Understanding',
    subtitle: 'Computer Vision AI',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-orange-600 via-red-500 to-pink-500'
  },
];

// --- Enhanced Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter, index }) => {
  return (
    <div
      className={`
        relative h-[500px] rounded-3xl overflow-hidden cursor-pointer group
        transition-all duration-1000 ease-out transform-gpu
        ${isActive ? 'w-[420px] shadow-2xl scale-105' : 'w-[80px] hover:w-[90px] shadow-lg hover:shadow-xl'}
        backdrop-blur-sm border border-gray-200/50
      `}
      onMouseEnter={onMouseEnter}
      style={{
        transitionDelay: `${index * 50}ms`
      }}>
      
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className={`
            w-full h-full object-cover transition-transform duration-1000 ease-out
            ${isActive ? 'scale-110' : 'scale-100 group-hover:scale-105'}
          `}
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = 'https://placehold.co/420x500/2d3748/ffffff?text=Image+Error'; 
          }} 
        />
      </div>

      {/* Animated Gradient Overlay */}
      <div className={`
        absolute inset-0 bg-gradient-to-br ${item.gradient} 
        transition-all duration-1000 ease-out
        ${isActive ? 'opacity-20' : 'opacity-40 group-hover:opacity-30'}
      `}></div>

      {/* Dark Overlay for Text Readability */}
      <div className={`
        absolute inset-0 bg-black transition-opacity duration-1000
        ${isActive ? 'bg-opacity-30' : 'bg-opacity-50'}
      `}></div>

      {/* Animated Border Glow */}
      <div className={`
        absolute inset-0 rounded-3xl transition-all duration-1000
        ${isActive 
          ? `bg-gradient-to-r ${item.gradient} p-[2px] opacity-60` 
          : 'bg-gray-300/20 p-[1px] opacity-0 group-hover:opacity-40'
        }
      `}>
        <div className="w-full h-full rounded-3xl bg-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Active State Content */}
        <div className={`
          transition-all duration-700 ease-out transform
          ${isActive 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8 pointer-events-none'
          }
        `}>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
              {item.title}
            </h3>
            <p className="text-white/80 text-sm font-medium mb-4">
              {item.subtitle}
            </p>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
              <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">
                Explore
              </span>
            </div>
          </div>
        </div>

        {/* Inactive State - Vertical Text */}
        <div className={`
          absolute bottom-8 left-1/2 -translate-x-1/2
          transition-all duration-700 ease-out transform
          ${isActive 
            ? 'opacity-0 rotate-90 translate-y-8 pointer-events-none' 
            : 'opacity-100 rotate-90 translate-y-0'
          }
        `}>
          <span className="text-white font-bold text-lg whitespace-nowrap tracking-wide">
            {item.title}
          </span>
        </div>
      </div>

      {/* Floating Particles Effect */}
      {isActive && (
        <>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
        </>
      )}
    </div>
  );
};

// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemHover = (index) => {
    setActiveIndex(index);
  };

  // Auto-rotate effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % accordionItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-transparent via-gray-50/50 to-transparent rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <section className="container mx-auto px-6 py-16 md:py-24 relative ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side: Product Company Content & CTA */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="relative">
              {/* Company Badge */}
              <div className="inline-flex items-center gap-2 bg-red-100 text-blue px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <div className="w-2 h-2 bg-blue-800 rounded-full animate-pulse"></div>
                MLloOps - Platform
              </div>

{/*             
<h1 className="text-5xl md:text-7xl leading-tight tracking-tighter mb-6">
  <span className="">
    <TextType
      text={[
        "Delivering",
        "Human-Machine",
        "Loop",
      ]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    />
  </span>
</h1> */}
           
<AnimatedHeading/>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 hidden lg:block">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                  🚀 AI-Powered
                </div>
              </div>
            </div>
{/* 
            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Accelerating Data-Driven Machine Learning Workflows for modern enterprises. 
              <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-semibold"> Let's Structure the Unstructured.</span>
            </p> */}
            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
  Accelerating Data-Driven Machine Learning Workflows for modern enterprises. 
  <span className="text-red-600 font-semibold">
    <TextType
      text={[
        "Let's Structure the Unstructured.",
        "Let's Automate the Future.",
        "Let's Build Together."
      ]}
      typingSpeed={75}
      pauseDuration={1500}
      showCursor={true}
      cursorCharacter="|"
    />
  </span>
</p>


           

       <div className="relative group p-[2px] rounded-3xl mb-8 shadow-xl 
  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
  bg-[length:200%_200%] animate-gradient">
  
  {/* Inner card */}
  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-white/10 
    transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl">
    
    <h3 className="text-2xl font-bold text-gray-900 mb-4">
      Ready to Transform Your Workflow?
    </h3>
    <p className="text-gray-600 mb-6">
      Join thousands of companies already using our AI-powered solutions to accelerate their machine learning projects.
    </p>

    <div className="flex flex-col sm:flex-row gap-4">
      {/* Primary Button */}
    <button
    onClick={() => navigate("/MLloOps")}
    className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center"
  >
    Get Started Today
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
  </button>

  {/* Contact Us Button */}
  <a
    href="https://mlloops.rbg.ai/"
    target="_blank"
    rel="noopener noreferrer"
    className="group border-2 border-slate-300 hover:border-red-300 text-slate-700 hover:text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center backdrop-blur-sm hover:bg-red-50"
  >
    <ExternalLink className="w-5 h-5 mr-2" />
    Let’s Start with MLloOps
  </a>
    </div>
  </div>
</div>

            
          </div>

          {/* Right Side: Premium Image Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Subtle Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-blue-100/50 rounded-3xl blur-xl"></div>
              
              <div className="relative flex flex-row items-center justify-center gap-6 overflow-x-auto p-6 scrollbar-hide">
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    index={index}
                    isActive={index === activeIndex}
                    onMouseEnter={() => handleItemHover(index)} 
                  />
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {accordionItems.map((_, index) => (
                  <button
                    key={index}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300
                      ${index === activeIndex 
                        ? `bg-gradient-to-r ${accordionItems[index].gradient} shadow-lg` 
                        : 'bg-gray-300 hover:bg-gray-400'
                      }
                    `}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}