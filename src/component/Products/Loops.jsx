// import VisualDataGif from "../../assests/images/mlloops.gif";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   CheckCircle,
//   RefreshCw,
//   Zap,
//   Users,
//   Cloud,
//   Settings,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 10,
//     },
//   },
//   hover: {
//     scale: 1.05,
//     transition: {
//       type: "spring",
//       stiffness: 400,
//       damping: 10,
//     },
//   },
// };
// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// const MLloOpsContent = () => {
//   const features = [
//     {
//       icon: <Zap className="w-6 md:w-8 h-6 md:h-8 text-green-600" />,
//       title: "AI as the Maker",
//       description:
//         "Powerful AI processing vast amounts of data with efficiency, precision, and speed. Performs heavy lifting of data extraction and structuring at lightning speed.",
//     },
//     {
//       icon: <Users className="w-6 md:w-8 h-6 md:h-8 text-green-600" />,
//       title: "Human as the Checker",
//       description:
//         "Domain experts review and refine AI outputs, adding accuracy and insight. This human touch enhances AI performance through continuous feedback and learning.",
//     },
//     {
//       icon: <RefreshCw className="w-6 md:w-8 h-6 md:h-8 text-green-600" />,
//       title: "Continuous Learning",
//       description:
//         "Each human correction feeds back into the AI, enabling continuous improvement. The AI becomes more adept at handling complex data while experts focus on strategic insights.",
//     },
//   ];

//   const workflow = [
//     {
//       title: "Client Requirements",
//       description:
//         "Clear understanding of client requirements to ensure outcomes align with business goals.",
//     },
//     {
//       title: "Project Creation",
//       description:
//         "Collaboration with client admins and AI practitioners to set up and scope each project.",
//     },
//     {
//       title: "MLStack API Integration",
//       description:
//         "Deep customization with MLStack APIs for text, voice, and vision data processing.",
//     },
//     {
//       title: "Quality Control",
//       description:
//         "Validation checkers from both client experts and RBG team ensure data accuracy.",
//     },
//     {
//       title: "Data Processing",
//       description:
//         "Automated and manual data ingestion, transforming unstructured data into structured outputs.",
//     },
//     {
//       title: "Validation & Correction",
//       description:
//         "Human checkers validate and refine the structured data for maximum accuracy.",
//     },
//   ];

//   const benefits = [
//     {
//       icon: <CheckCircle className="w-6 h-6 text-green-600" />,
//       title: "Enhanced Efficiency",
//       description:
//         "Combines AI speed with human expertise for higher quality outcomes",
//     },
//     {
//       icon: <RefreshCw className="w-6 h-6 text-green-600" />,
//       title: "Continuous Learning",
//       description:
//         "AI learns from human corrections, constantly improving accuracy",
//     },
//     {
//       icon: <Cloud className="w-6 h-6 text-green-600" />,
//       title: "Flexible Deployment",
//       description: "Deploy in-house, on private cloud, or public cloud",
//     },
//     {
//       icon: <Settings className="w-6 h-6 text-green-600" />,
//       title: "End-to-End Management",
//       description: "Single platform for the complete ML lifecycle",
//     },
//   ];

//   const WaveBackground = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* First wave layer */}
//       <svg
//         className="absolute w-full h-full"
//         viewBox="0 0 1440 400"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,176C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
//           className="animate-wave-slow fill-green-50/30"
//         />
//       </svg>

//       {/* Second wave layer */}
//       <svg
//         className="absolute w-full h-full"
//         viewBox="0 0 1440 400"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,197.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
//           className="animate-wave-medium fill-Primary/20"
//         />
//       </svg>

//       {/* Third wave layer */}
//       <svg
//         className="absolute w-full h-full"
//         viewBox="0 0 1440 400"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,288L60,282.7C120,277,240,267,360,272C480,277,600,299,720,293.3C840,288,960,256,1080,250.7C1200,245,1320,267,1380,277.3L1440,288L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
//           className="animate-wave-fast fill-green-100/40"
//         />
//       </svg>
//     </div>
//   );

//   const FloatingDots = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <div className="absolute h-3 w-3 bg-Primary/30 rounded-full top-20 left-1/4 animate-float-slow"></div>
//       <div className="absolute h-2 w-2 bg-green-200/40 rounded-full top-40 right-1/3 animate-float-medium"></div>
//       <div className="absolute h-4 w-4 bg-Primary/20 rounded-full bottom-40 left-1/3 animate-float-fast"></div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <motion.section
//         className="relative bg-gradient-to-b from-white to-Secondary/30 overflow-hidden py-12 md:py-24 px-4"
//         {...fadeIn}
//       >
//         <WaveBackground />
//         <FloatingDots />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8 md:mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-Poppins">
//               MLloOps
//               <span className="text-xl sm:text-2xl align-super">™</span>
//             </h1>
//             <p className="text-bold md:text-xl text-green-700 mt-4 font-OpenSans">
//               The Future of AI-Human Collaboration for Machine Learning
//               Workflows
//             </p>
//           </div>

//           {/* Content Grid */}
//           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//             {/* Left side - Image */}
//             <div className="order-2 md:order-1 relative z-10 mix-blend-multiply">
//               <img
//                 src={VisualDataGif}
//                 alt="Visual representation of data"
//                 className="w-full h-auto"
//               />
//             </div>

//             {/* Right side - Content */}
           
//             <div className="order-1 md:order-2 space-y-4 md:space-y-6">
//   <div className="order-2 md:order-1 space-y-4 md:space-y-6">
//     <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-Primary/10">
//       <p className="text-base md:text-lg text-gray-700 leading-relaxed font-OpenSans">
//         Imagine a world where AI and humans work hand-in-hand, each
//         enhancing the other's strengths to achieve seamless data
//         extraction and analysis. That's MLloOps™ a platform where{" "}
//         <span className="font-semibold">
//           AI and human expertise come together in perfect harmony
//         </span>{" "}
//         to unlock new possibilities in machine learning workflows.
//       </p>
//       <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4 font-OpenSans">
//         MLloOps™ is a single, integrated platform designed for all
//         stakeholders in AI projects, from data scientists and
//         engineers to business leaders and domain experts. It
//         streamlines and automates critical ML workflows while
//         keeping human expertise at the center, enabling a smooth
//         flow from unstructured data to actionable insights.
//       </p>
      
//       {/* Added button container */}
//       <div className="flex flex-col sm:flex-row gap-4 mt-6">
//       <Link to="/Contact"
         
//           className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-Primary text-white font-semibold hover:bg-Primary/90 transition-colors duration-200"
//         >
//           Request for a Demo
//         </Link>
//         <a
//   href="https://mlloops.rbg.ai/"
//   target="_blank"  // Optional, opens in a new tab
//   rel="noopener noreferrer" // Security feature when opening links in a new tab
//   className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-Primary text-Primary font-semibold hover:bg-Primary/10 transition-colors duration-200"
// >
//   Get Started with MLloOps™
// </a>


//       </div>
//     </div>
//   </div>
// </div>
//           </div>
//         </div>
//       </motion.section>
//       {/* ... existing hero section content ... */}

//       {/* Key Features Section */}
//       <motion.section
//         className="py-12 sm:py-16 md:py-20"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             variants={cardVariants}
//             className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
//           >
//             Key Features
//           </motion.h2>
//           <motion.div
//             variants={containerVariants}
//             className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="bg-white rounded-xl shadow-lg p-6 md:p-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="mb-4">{feature.icon}</div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Workflow Section */}
//       <motion.section
//         className="py-12 sm:py-16 md:py-20 bg-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             variants={cardVariants}
//             className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
//           >
//             MLloOps™ Workflow
//           </motion.h2>
//           <motion.div
//             variants={containerVariants}
//             className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
//           >
//             {workflow.map((step, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="bg-green-50 rounded-xl p-6 border-2 border-green-100"
//                 transition={{ delay: index * 0.2 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex items-center mb-4">
//                   <span className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
//                     {index + 1}
//                   </span>
//                   <h3 className="text-base sm:text-lg font-semibold text-gray-800 ml-3">
//                     {step.title}
//                   </h3>
//                 </div>
//                 <p className="text-sm sm:text-base text-gray-600">
//                   {step.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Benefits Section */}
//       <motion.section
//         className="py-12 sm:py-16 md:py-20"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             variants={cardVariants}
//             className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
//           >
//             Why Choose MLloOps™?
//           </motion.h2>
//           <motion.div
//             variants={containerVariants}
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
//           >
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 className="bg-white rounded-lg shadow-md p-6"
//                 transition={{ delay: index * 0.2 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex items-center mb-4">
//                   {benefit.icon}
//                   <h3 className="text-base sm:text-lg font-semibold text-gray-800 ml-2">
//                     {benefit.title}
//                   </h3>
//                 </div>
//                 <p className="text-xs sm:text-sm text-gray-600">
//                   {benefit.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Final CTA Section */}
//       <motion.section
//         className="py-12 sm:py-16 md:py-20 bg-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.div
//           variants={cardVariants}
//           className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
//         >
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
//             The Perfect Harmony of AI and Human Expertise
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
//             MLloOps™ represents the future of data extraction—a new standard
//             where AI and human intelligence work together, creating results that
//             are greater than the sum of their parts.
//           </p>
//           <Link to="/Contact">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-block bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-700 transition-colors cursor-pointer text-sm sm:text-base"
//             >
//               Get Started with MLloOps™
//             </motion.div>
//           </Link>
//         </motion.div>
//       </motion.section>
//     </div>
//   );
// };

// export default MLloOpsContent;



import VisualDataGif from "../../assests/images/mlloops.gif";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  RefreshCw,
  Zap,
  Users,
  Cloud,
  Settings,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MLloOpsContent = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "AI as the Maker",
      description:
        "Powerful AI processing vast amounts of data with efficiency, precision, and speed. Performs heavy lifting of data extraction and structuring at lightning speed.",
      gradient: "from-yellow-100 to-green-50",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Human as the Checker",
      description:
        "Domain experts review and refine AI outputs, adding accuracy and insight. This human touch enhances AI performance through continuous feedback and learning.",
      gradient: "from-blue-50 to-green-50",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-green-600" />,
      title: "Continuous Learning",
      description:
        "Each human correction feeds back into the AI, enabling continuous improvement. The AI becomes more adept at handling complex data while experts focus on strategic insights.",
      gradient: "from-purple-50 to-green-50",
    },
  ];

  const workflow = [
    {
      title: "Client Requirements",
      description:
        "Clear understanding of client requirements to ensure outcomes align with business goals.",
      icon: <Target className="w-6 h-6 text-Primary" />,
    },
    {
      title: "Project Creation",
      description:
        "Collaboration with client admins and AI practitioners to set up and scope each project.",
      icon: <Users className="w-6 h-6 text-Primary" />,
    },
    {
      title: "MLStack API Integration",
      description:
        "Deep customization with MLStack APIs for text, voice, and vision data processing.",
      icon: <Settings className="w-6 h-6 text-Primary" />,
    },
    {
      title: "Quality Control",
      description:
        "Validation checkers from both client experts and RBG team ensure data accuracy.",
      icon: <CheckCircle className="w-6 h-6 text-Primary" />,
    },
    {
      title: "Data Processing",
      description:
        "Automated and manual data ingestion, transforming unstructured data into structured outputs.",
      icon: <Zap className="w-6 h-6 text-Primary" />,
    },
    {
      title: "Validation & Correction",
      description:
        "Human checkers validate and refine the structured data for maximum accuracy.",
      icon: <RefreshCw className="w-6 h-6 text-Primary" />,
    },
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Enhanced Efficiency",
      description:
        "Combines AI speed with human expertise for higher quality outcomes",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-green-600" />,
      title: "Continuous Learning",
      description:
        "AI learns from human corrections, constantly improving accuracy",
    },
    {
      icon: <Cloud className="w-6 h-6 text-green-600" />,
      title: "Flexible Deployment",
      description: "Deploy in-house, on private cloud, or public cloud",
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600" />,
      title: "End-to-End Management",
      description: "Single platform for the complete ML lifecycle",
    },
  ];

  const stats = [
    { number: "10x", label: "Faster Processing", suffix: "" },
    { number: "95", label: "Accuracy Rate", suffix: "%" },
    { number: "50", label: "Time Saved", suffix: "%" },
    { number: "24/7", label: "Availability", suffix: "" }
  ];

  const WaveBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,176C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          className="animate-pulse fill-green-50/30"
          style={{
            animation: "wave-slow 8s ease-in-out infinite",
          }}
        />
      </svg>

      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,197.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          className="fill-Primary/10"
          style={{
            animation: "wave-medium 6s ease-in-out infinite",
          }}
        />
      </svg>

      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,288L60,282.7C120,277,240,267,360,272C480,277,600,299,720,293.3C840,288,960,256,1080,250.7C1200,245,1320,267,1380,277.3L1440,288L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          className="fill-green-100/40"
          style={{
            animation: "wave-fast 4s ease-in-out infinite",
          }}
        />
      </svg>
    </div>
  );

  const EnhancedFloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6,
          ease: "easeInOut"
        }}
        className="absolute h-4 w-4 bg-Primary/20 rounded-full top-20 left-1/4"
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          delay: 1
        }}
        className="absolute h-6 w-6 border-2 border-green-300/40 rotate-45 top-40 right-1/3"
      />
      
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          delay: 2
        }}
        className="absolute h-3 w-3 bg-gradient-to-br from-Primary to-green-400 rounded-sm bottom-40 left-1/3"
      />

      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 5,
          delay: 3
        }}
        className="absolute h-2 w-2 bg-green-200/60 rounded-full top-60 right-1/4"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-b from-white via-green-50/20 to-green-50/40 overflow-hidden py-12 md:py-24 px-4"
        {...fadeIn}
      >
        <WaveBackground />
        <EnhancedFloatingElements />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 font-Poppins tracking-tight">
                MLlo
                <span className="bg-gradient-to-r from-Primary to-green-600 bg-clip-text text-transparent">
                  Ops
                </span>
                <span className="text-2xl sm:text-3xl align-super text-Primary">™</span>
              </h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-Primary/20 to-green-200/20 blur-xl -z-10 rounded-lg"></div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-2xl text-green-700 mt-6 font-OpenSans max-w-4xl mx-auto leading-relaxed"
            >
              The Future of AI-Human Collaboration for Machine Learning Workflows
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="order-2 md:order-1 relative z-10"
            >
              <div className="relative">
                <img
                  src={VisualDataGif}
                  alt="Visual representation of data"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-Primary/20 to-green-300/20 blur-2xl -z-10 rounded-3xl"></div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="order-1 md:order-2 space-y-6"
            >
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-Primary/10 to-transparent rounded-tr-3xl rounded-bl-full"></div>
                
                <p className="text-lg text-gray-700 leading-relaxed font-OpenSans relative z-10">
                  Imagine a world where AI and humans work hand-in-hand, each
                  enhancing the other's strengths to achieve seamless data
                  extraction and analysis. That's MLloOps™ a platform where{" "}
                  <span className="font-semibold bg-gradient-to-r from-Primary to-green-600 bg-clip-text text-transparent">
                    AI and human expertise come together in perfect harmony
                  </span>{" "}
                  to unlock new possibilities in machine learning workflows.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mt-6 font-OpenSans relative z-10">
                  MLloOps™ is a single, integrated platform designed for all
                  stakeholders in AI projects, from data scientists and
                  engineers to business leaders and domain experts. It
                  streamlines and automates critical ML workflows while
                  keeping human expertise at the center, enabling a smooth
                  flow from unstructured data to actionable insights.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mt-8 relative z-10">
                  <Link to="/Contact"
                    className="group relative inline-flex justify-center items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-Primary to-green-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-Primary/25"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-Primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10 flex items-center gap-3">
                      Request for a Demo
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </Link>
                  
                  <a
                    href="https://mlloops.rbg.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex justify-center items-center px-8 py-4 rounded-2xl border-2 border-Primary text-Primary font-semibold hover:bg-Primary hover:text-white transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-Primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative z-10 flex items-center gap-3">
                      Get Started with MLloOps™
                      <motion.div
                        animate={{ rotate: [0, 180, 360] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="opacity-60 group-hover:opacity-100"
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-Primary/5 to-green-50/50 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-Primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-800 mb-16"
          >
            Transforming ML Workflows Globally
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, type: "spring" }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring", bounce: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold bg-gradient-to-r from-Primary to-green-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
                  >
                    {stat.number}{stat.suffix}
                  </motion.div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={cardVariants}
            className="text-4xl font-bold text-center text-gray-800 mb-16"
          >
            Key Features
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 p-8 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-Primary/20 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-Primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-Primary/10 to-transparent rounded-bl-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Workflow Timeline Section */}
   // Interactive demo showcase
<motion.section className="py-20 bg-gradient-to-r from-Primary/5 to-green-50/50 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
      Experience MLloOps™ Live
    </motion.h2>
    
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Demo Interface */}
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-2xl p-6 text-green-400 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-gray-400">MLloOps Terminal</span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {[
                "$ mlloops start --project demo",
                "✓ Initializing AI engine...",
                "✓ Loading data sources...",
                "✓ Human validators ready...",
                "✓ Processing 1,000 documents...",
                "✓ Accuracy: 98.5% | Speed: 10x faster",
                "$ Ready for production!"
              ].map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.5 }}
                  className="mb-2"
                >
                  {line}
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-Primary to-green-600 text-white font-semibold py-4 rounded-2xl hover:shadow-lg transition-all duration-300">
            Try Interactive Demo
          </button>
        </div>

        {/* Real-time Metrics */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Live Performance Metrics</h3>
          
          {[
            { label: "Documents Processed", value: "1,247", change: "+12%" },
            { label: "Accuracy Rate", value: "98.5%", change: "+2.1%" },
            { label: "Processing Speed", value: "10x", change: "+150%" },
            { label: "Cost Reduction", value: "65%", change: "+15%" }
          ].map((metric, index) => (
            <div key={index} className="bg-white/80 rounded-2xl p-6 border border-green-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                  <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
                </div>
                <div className="text-green-600 font-semibold">
                  {metric.change}
                </div>
              </div>
              <div className="mt-2 bg-green-100 rounded-full h-2">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "85%" }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  className="bg-gradient-to-r from-Primary to-green-600 h-2 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</motion.section>

<motion.section className="py-20 bg-gradient-to-b from-white to-green-50/30 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
      See the Transformation in Action
    </motion.h2>
    
    <div className="grid md:grid-cols-3 gap-8 items-center">
      {/* Before */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-center"
      >
        <div className="bg-red-50 rounded-3xl p-8 border border-red-200">
          <h3 className="text-2xl font-bold text-red-700 mb-6">Before MLloOps™</h3>
          <div className="space-y-4">
            {['Messy Unstructured Data', 'Manual Processing', 'Error-Prone Results', 'Slow Turnaround', 'High Costs'].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-red-600">
                <X className="w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Transformation Arrow */}
      <div className="flex justify-center">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-16 h-16 bg-gradient-to-r from-Primary to-green-600 rounded-full flex items-center justify-center text-white shadow-lg"
        >
          <ArrowRight className="w-8 h-8" />
        </motion.div>
      </div>

      {/* After */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-center"
      >
        <div className="bg-green-50 rounded-3xl p-8 border border-green-200">
          <h3 className="text-2xl font-bold text-green-700 mb-6">With MLloOps™</h3>
          <div className="space-y-4">
            {['Clean Structured Data', 'AI-Powered Processing', 'High Accuracy Results', 'Rapid Delivery', 'Cost Effective'].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={cardVariants}
            className="text-4xl font-bold text-center text-gray-800 mb-16"
          >
            Why Choose MLloOps™?
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 border border-green-100/30 group"
                transition={{ delay: index * 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-Primary/20 to-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-Primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-Primary/10 via-green-50/50 to-Primary/10 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-Primary/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          variants={cardVariants}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              The Perfect Harmony of AI and Human Expertise
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              MLloOps™ represents the future of data extraction—a new standard
              where AI and human intelligence work together, creating results that
              are greater than the sum of their parts.
            </p>
            <Link to="/Contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-gradient-to-r from-Primary to-green-600 text-white font-bold px-10 py-5 rounded-full hover:shadow-2xl hover:shadow-Primary/25 transition-all duration-300 cursor-pointer text-lg group"
              >
                Get Started with MLloOps™
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="group-hover:animate-pulse"
                >
                  <TrendingUp className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default MLloOpsContent;
