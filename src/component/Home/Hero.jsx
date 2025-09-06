// "use client";
// import React from "react";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// // import Image from "next/image";

// export function Hero() {
//   return (
//     <div className="flex flex-col min-h-screen justify-center items-center">
//   <ContainerScroll
//     titleComponent={
//       <>
//         <h1 className="text-4xl font-semibold text-black dark:text-white">
//           Unleash the power of <br />
//           <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//             MLloOps
//           </span>
//         </h1>
//       </>
//     }
//   >
//     <img
//       src={`https://res.cloudinary.com/datwcxi7y/image/upload/v1756899013/gif_eeuzju.gif`}
//       alt="hero"
//       height={720}
//       width={1400}
//       className="mx-auto rounded-2xl object-cover object-left-top max-h-[600px]"
//       draggable={false}
//     />
//   </ContainerScroll>
// </div>

//   );
// }


// export default Hero




// import React, { useState, useEffect } from 'react';
// import { ChevronRight, Play, Users, Zap, Shield, BarChart3, ArrowRight, Check, Menu, X, Star, TrendingUp } from 'lucide-react';

// const MLOpsLanding = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const features = [
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Lightning Fast Processing",
//       description: "Process ML pipelines 10x faster with our optimized infrastructure",
//       gradient: "from-yellow-400 to-orange-500"
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Enterprise Security",
//       description: "Bank-grade security with end-to-end encryption and compliance",
//       gradient: "from-green-400 to-teal-500"
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: "Advanced Analytics",
//       description: "Deep insights into model performance and operational metrics",
//       gradient: "from-red-400 to-pink-500"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Team Collaboration",
//       description: "Seamless collaboration tools for ML teams of any size",
//       gradient: "from-blue-400 to-indigo-500"
//     }
//   ];

//   const stats = [
//     { number: "99.9%", label: "Uptime", icon: <TrendingUp className="w-6 h-6" /> },
//     { number: "10x", label: "Faster Processing", icon: <Zap className="w-6 h-6" /> },
//     { number: "500+", label: "Companies Trust Us", icon: <Users className="w-6 h-6" /> },
//     { number: "24/7", label: "Support", icon: <Star className="w-6 h-6" /> }
//   ];

//   return (
//     <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden relative">
//       {/* Background Decorative Elements */}
    

      
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div 
//               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 border border-red-200 rounded-full mb-8 backdrop-blur-sm"
//               style={{
//                 transform: `translateY(${scrollY * 0.1}px)`,
//               }}
//             >
//               <span className="text-sm text-pred-700 mr-2 font-medium">🚀 Now in Public Beta</span>
//               <ChevronRight className="w-4 h-4 text-red-500" />
//             </div>
            
//             <h1 
//               className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
//               style={{
//                 transform: `translateY(${scrollY * 0.05}px)`,
//               }}
//             >
//               <span className="text-red-600">Unleash the power of</span>
//               <br />
//               <span className="bg-gradient-to-r from-red-600 via-red-400 to-rose-600 bg-clip-text text-transparent">
//                 MLloOps
//               </span>
//             </h1>
            
//             <p 
//               className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
//               style={{
//                 transform: `translateY(${scrollY * 0.03}px)`,
//               }}
//             >
//               Streamline your machine learning workflows with enterprise-grade tools that scale from prototype to production
//             </p>
            
//             <div 
//               className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
//               style={{
//                 transform: `translateY(${scrollY * 0.02}px)`,
//               }}
//             >
//               <button className="group bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center">
//                 Start Free Trial
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="group border-2 border-gray-300 hover:border-red-300 text-gray-700 hover:text-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center backdrop-blur-sm hover:bg-red-50">
//                 <Play className="w-5 h-5 mr-2" />
//                 Watch Demo
//               </button>
//             </div>
//           </div>

//           {/* Dashboard Preview */}
        //   <div 
        //     className="relative max-w-6xl mx-auto"
        //     style={{
        //       transform: `translateY(${scrollY * 0.1}px) scale(${1 - scrollY * 0.0001})`,
        //     }}
        //   >
          //   <div className="relative">
          //     <div className="absolute inset-0 bg-gradient-to-r from-red-200/40 via-pink-200/40 to-rose-200/40 rounded-3xl blur-3xl"></div>
          //     <div className="relative bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-2 shadow-2xl">
          //       <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-1 overflow-hidden">
          //         <img
          //           src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756899013/gif_eeuzju.gif"
          //           alt="MLOps Dashboard"
          //           className="w-full h-auto rounded-xl shadow-lg"
          //         />
          //       </div>
          //     </div>
          //   </div>
          // </div>
        // </div>

//         {/* Floating Elements */}
//         <div className="absolute top-1/2 left-10 w-4 h-4 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur-sm animate-bounce"></div>
//         <div className="absolute top-1/3 right-16 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm animate-bounce delay-1000"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-sm animate-bounce delay-500"></div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gradient-to-r from-red-50 via-pink-50 to-rose-50 border-y border-gray-200/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="flex justify-center mb-3">
//                   <div className="p-3 bg-gradient-to-r from-red-100 to-pink-100 rounded-full group-hover:scale-110 transition-transform">
//                     <div className="text-red-500">
//                       {stat.icon}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-pink-800 bg-clip-text text-transparent mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">
//               <span className="text-gray-800">Why Choose </span>
//               <span className="bg-gradient-to-r from-red-500 to-pink-700 bg-clip-text text-transparent">MLloOps</span>
//               <span className="text-gray-800">?</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               Built for teams who demand reliability, security, and performance at scale
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div 
//                 key={index} 
//                 className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:border-red-200 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
//               >
//                 <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12 shadow-2xl">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
//               Ready to Transform Your <span className="bg-gradient-to-r from-red-600 to-pink-400 bg-clip-text text-transparent">ML Operations</span>?
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               Join thousands of ML teams who trust MLOps for their production workflows
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center">
//                 Get Started with MLloOPs
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </button>
              
//             </div>
//           </div>
//         </div>
//       </section>

     
//     </div>
//   );
// };

// export default MLOpsLanding;



// import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
// import image from "../../assests/Gallery/mini.jpeg"
// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Play, Users, Zap, Shield, BarChart3, ArrowRight, Calendar,Check, Menu, X, Star, TrendingUp, Brain, Cpu, Database, Network, Sparkles, Rocket, Globe, Award } from 'lucide-react';

// const MLOpsLanding = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const statsRef = useRef(null)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const heroRef = useRef(null);
//    const sectionRef = useRef(null)
//     const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
//   const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//    const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   }


//   const features = [
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: "Intelligent Automation",
//       description: "AI-powered workflow automation that learns and adapts to your ML pipelines",
//       gradient: "from-red-500 to-red-600",
//       delay: "delay-0"
//     },
//     {
//       icon: <Cpu className="w-8 h-8" />,
//       title: "High Performance Computing",
//       description: "Distributed computing infrastructure optimized for ML workloads",
//       gradient: "from-blue-500 to-cyan-600",
//       delay: "delay-100"
//     },
//     {
//       icon: <Database className="w-8 h-8" />,
//       title: "Advanced Data Management",
//       description: "Sophisticated data versioning and pipeline management systems",
//       gradient: "from-emerald-500 to-teal-600",
//       delay: "delay-200"
//     },
//     {
//       icon: <Network className="w-8 h-8" />,
//       title: "Seamless Integration",
//       description: "Connect with your existing tools and infrastructure effortlessly",
//       gradient: "from-orange-500 to-red-600",
//       delay: "delay-300"
//     }
//   ];

//   const stats = [
//     { icon: <Award />, value: 150, label: "Projects Completed", suffix: "+" },
//     { icon: <Users />, value: 1200, label: "Happy Clients", suffix: "+" },
//     { icon: <Calendar />, value: 12, label: "Years Experience", suffix: "" },
//     { icon: <TrendingUp />, value: 98, label: "Satisfaction Rate", suffix: "%" },
//   ]
//   const testimonials = [
//     {
//       quote: "MLloOps transformed our AI deployment process. We're now 10x faster.",
//       author: "Sarah Chen",
//       role: "Head of ML, TechCorp",
//       avatar: "SC"
//     },
//     {
//       quote: "The most sophisticated MLOps platform we've used. Incredible results.",
//       author: "Michael Rodriguez",
//       role: "AI Director, DataFlow",
//       avatar: "MR"
//     },
//     {
//       quote: "Revolutionary approach to machine learning operations. Highly recommend.",
//       author: "Dr. Priya Patel",
//       role: "Chief Data Scientist, InnovateLabs",
//       avatar: "PP"
//     }
//   ];


// function StatCounter({
//   icon,
//   value,
//   label,
//   suffix,
//   delay
// }) {
//   const countRef = useRef(null)
//   const isInView = useInView(countRef, { once: false })
//   const [hasAnimated, setHasAnimated] = useState(false)

//   const springValue = useSpring(0, {
//     stiffness: 50,
//     damping: 10,
//   })

//   useEffect(() => {
//     if (isInView && !hasAnimated) {
//       springValue.set(value)
//       setHasAnimated(true)
//     } else if (!isInView && hasAnimated) {
//       springValue.set(0)
//       setHasAnimated(false)
//     }
//   }, [isInView, value, springValue, hasAnimated])

//   const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

//   return (
//     <motion.div
//       className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300"
//       variants={{
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: { duration: 0.6, delay },
//         },
//       }}
//       whileHover={{ y: -5, transition: { duration: 0.2 } }}>
//       <motion.div
//         className="w-14 h-14 rounded-full bg-[#202e44]/5 flex items-center justify-center mb-4 text-[#f06565] group-hover:bg-[#f06565]/10 transition-colors duration-300"
//         whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
//         {icon}
//       </motion.div>
//       <motion.div
//         ref={countRef}
//         className="text-3xl font-bold text-[#202e44] flex items-center">
//         <motion.span>{displayValue}</motion.span>
//         <span>{suffix}</span>
//       </motion.div>
//       <p className="text-[#202e44]/70 text-sm mt-1">{label}</p>
//       <motion.div
//         className="w-10 h-0.5 bg-[#f06565] mt-3 group-hover:w-16 transition-all duration-300" />
//     </motion.div>
//   );
// }


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 overflow-hidden relative">
//       {/* Floating Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-200/25 to-teal-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

//       {/* Navigation */}
//       {/* <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0 flex items-center">
//                 <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-600 rounded-xl flex items-center justify-center mr-3">
//                   <Brain className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
//                   MLloOps
//                 </span>
//               </div>
//             </div>
            
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-8">
//                 <a href="#features" className="text-slate-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">Features</a>
//                 <a href="#about" className="text-slate-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
//                 <a href="#pricing" className="text-slate-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
//                 <a href="#contact" className="text-slate-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
//               </div>
//             </div>

//             <div className="hidden md:flex items-center space-x-4">
//               <button className="text-slate-600 hover:text-red-600 font-medium transition-colors">Sign In</button>
//               <button className="bg-gradient-to-r from-red-600 to-red-600 hover:from-red-700 hover:to-red-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg">
//                 Get Started
//               </button>
//             </div>

//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
//                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav> */}

//       {/* Hero Section */}
//       <section ref={heroRef} className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
//         <div className="max-w-7xl mx-auto w-full">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column - Content */}
//             <div className="space-y-8">
//               <div 
//                 className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-red-100 border border-red-200 rounded-full backdrop-blur-sm"
//                 style={{
//                   transform: `translateY(${scrollY * 0.1}px)`,
//                 }}
//               >
//                 <Sparkles className="w-4 h-4 text-red-600 mr-2" />
//                 <span className="text-sm text-red-700 font-medium">AI-Powered MLOps Platform</span>
//                 <ChevronRight className="w-4 h-4 text-red-500 ml-2" />
//               </div>
              
//               <div className="space-y-6">
//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                   <span className="text-slate-800">Transform Your</span>
//                   <br />
//                   <span className="bg-gradient-to-r from-red-600 via-red-600 to-indigo-600 bg-clip-text text-transparent">
//                     AI Workflows
//                   </span>
//                   <br />
//                   <span className="text-slate-600 text-4xl md:text-5xl">with MLloOps</span>
//                 </h1>
                
//                 <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
//                   Delivering Human-Machine Loop for Accelerating Data-Driven Machine Learning Workflows. 
//                   <span className="font-semibold text-red-600"> Let's Structure the Unstructured.</span>
//                 </p>
//               </div>
              
//               <div className="flex flex-col sm:flex-row items-start gap-4">
//                 <button className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center">
//                   Get Started Today
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="group border-2 border-slate-300 hover:border-red-300 text-slate-700 hover:text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center backdrop-blur-sm hover:bg-red-50">
//                   <Play className="w-5 h-5 mr-2" />
//                   Watch Demo
//                 </button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="pt-8">
//                 <p className="text-sm text-slate-500 mb-4">Trusted by leading AI companies worldwide</p>
//                 <div className="flex items-center space-x-8 opacity-60">
//                   <div className="text-2xl font-bold text-slate-400">TechCorp</div>
//                   <div className="text-2xl font-bold text-slate-400">DataFlow</div>
//                   <div className="text-2xl font-bold text-slate-400">InnovateLabs</div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - 3D Visual Element */}
//             <div className="relative lg:pl-8">
//               <div 
//                 className="relative"
//                 style={{
//                   transform: `translateY(${scrollY * 0.1}px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
//                   transformStyle: 'preserve-3d'
//                 }}
//               >
//                 {/* Main Container */}
//                 <div className="relative bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-2xl">
//                   <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden">
//                     {/* Dashboard Header */}
//                     <div className="bg-gradient-to-r from-red-600 to-red-600 p-4 text-white">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <div className="w-3 h-3 bg-white/30 rounded-full"></div>
//                           <div className="w-3 h-3 bg-white/30 rounded-full"></div>
//                           <div className="w-3 h-3 bg-white/30 rounded-full"></div>
//                         </div>
//                         <div className="text-sm font-medium">MLloOps Dashboard</div>
//                       </div>
//                     </div>

//                     {/* Dashboard Content */}
//                     <img
//                     src={image}
//                     />
//                     {/* <div className="p-6 space-y-6">
                     
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="bg-gradient-to-r from-red-50 to-red-50 p-4 rounded-xl">
//                           <div className="text-2xl font-bold text-red-600">98.5%</div>
//                           <div className="text-sm text-slate-600">Model Accuracy</div>
//                         </div>
//                         <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl">
//                           <div className="text-2xl font-bold text-blue-600">5.2s</div>
//                           <div className="text-sm text-slate-600">Avg Response</div>
//                         </div>
//                       </div>

                   
//                       <div className="space-y-3">
//                         <div>
//                           <div className="flex justify-between text-sm mb-1">
//                             <span className="text-slate-600">Training Progress</span>
//                             <span className="text-red-600">87%</span>
//                           </div>
//                           <div className="w-full bg-slate-200 rounded-full h-2">
//                             <div className="bg-gradient-to-r from-red-500 to-red-500 h-2 rounded-full w-[87%]"></div>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex justify-between text-sm mb-1">
//                             <span className="text-slate-600">Deployment</span>
//                             <span className="text-emerald-600">94%</span>
//                           </div>
//                           <div className="w-full bg-slate-200 rounded-full h-2">
//                             <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-[94%]"></div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <div className="text-sm font-medium text-slate-700">Recent Activity</div>
//                         <div className="space-y-2 text-xs">
//                           <div className="flex items-center space-x-2">
//                             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                             <span className="text-slate-600">Model deployed successfully</span>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                             <span className="text-slate-600">Training pipeline started</span>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                             <span className="text-slate-600">Data validation in progress</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div> */}
//                   </div>
//                 </div>

//                 {/* Floating 3D Elements */}
//                 <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-red-500 to-red-500 rounded-xl shadow-lg flex items-center justify-center animate-bounce">
//                   <Brain className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg flex items-center justify-center animate-bounce delay-500">
//                   <Cpu className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg shadow-lg flex items-center justify-center animate-bounce delay-1000">
//                   <Database className="w-4 h-4 text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//                <motion.div
//           ref={statsRef}
//           className="mt-4 grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           initial="hidden"
//           animate={isStatsInView ? "visible" : "hidden"}
//           variants={containerVariants}>
//           {stats.map((stat, index) => (
//             <StatCounter
//               key={index}
//               icon={stat.icon}
//               value={stat.value}
//               label={stat.label}
//               suffix={stat.suffix}
//               delay={index * 0.1} />
//           ))}
//         </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-white/50 backdrop-blur-sm border-y border-slate-200/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="flex justify-center mb-4">
//                   <div className="p-4 bg-gradient-to-r from-red-100 to-red-100 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
//                     <div className="text-red-600">
//                       {stat.icon}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-slate-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div> */}
//              <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-red-200/40 via-pink-200/40 to-rose-200/40 rounded-3xl blur-3xl"></div>
//               <div className="relative bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-2 shadow-2xl">
//                 <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-1 overflow-hidden">
//                   <img
//                     src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756899013/gif_eeuzju.gif"
//                     alt="MLOps Dashboard"
//                     className="w-full h-auto rounded-xl shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>
          
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="text-slate-800">Powerful Features for </span>
//               <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">Modern AI Teams</span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Built for enterprises who demand reliability, scalability, and performance at every stage of the ML lifecycle
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div 
//                 key={index} 
//                 className={`group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 hover:border-red-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl animate-fade-in-up ${feature.delay}`}
//                 style={{
//                   animationDelay: `${index * 150}ms`
//                 }}
//               >
//                 <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{feature.description}</p>
//                 <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <ArrowRight className="w-5 h-5 text-red-600" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


      

//       {/* CTA Section */}
//      {/* CTA Section */}
//      <section className="relative flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
//   <div className="max-w-3xl w-full bg-gradient-to-br from-rose-50 to-red-100 rounded-3xl shadow-lg p-10 text-center relative overflow-hidden animate-fade-in">
    
//     {/* Decorative Animated Pastel Circles */}
//     <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
//     <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-rose-300 rounded-full opacity-20 blur-3xl animate-bounce-slow"></div>
    
//     {/* Heading */}
//     <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-600">
//       Ready to <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Transform</span> Your AI Operations?
//     </h2>
    
//     {/* Subtext */}
//     <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
//       Join thousands of AI teams who trust <span className="font-semibold text-red-500">MLloOps</span> for their production workflows. 
//       Start your journey to intelligent automation today.
//     </p>
    
//     {/* Buttons */}
//     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//       <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-md hover:shadow-xl flex items-center">
//         Start Free Trial
//         <Rocket className="w-5 h-5 ml-2" />
//       </button>
//       <button className="border-2 border-red-300 hover:border-red-400 text-red-600 hover:bg-red-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center">
//         Schedule Demo
//         <ArrowRight className="w-5 h-5 ml-2" />
//       </button>
//     </div>
    
//     {/* Footnote */}
//     <div className="mt-8 text-gray-500 text-sm">
//       No credit card required • 14-day free trial • Enterprise support available
//     </div>
//   </div>
// </section>


//       {/* Footer */}
//       {/* <footer className="bg-slate-900 text-slate-300 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="col-span-2">
//               <div className="flex items-center mb-4">
//                 <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-600 rounded-xl flex items-center justify-center mr-3">
//                   <Brain className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-2xl font-bold text-white">MLloOps</span>
//               </div>
//               <p className="text-slate-400 mb-6 max-w-md">
//                 Empowering the next generation of AI with intelligent MLOps solutions. 
//                 Transform your machine learning workflows with enterprise-grade reliability.
//               </p>
//               <div className="flex space-x-4">
//                 <div className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
//                   <span className="text-sm">f</span>
//                 </div>
//                 <div className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
//                   <span className="text-sm">t</span>
//                 </div>
//                 <div className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
//                   <span className="text-sm">in</span>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="font-semibold text-white mb-4">Product</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-red-400 transition-colors">Features</a></li>
//                 <li><a href="#" className="hover:text-red-400 transition-colors">Pricing</a></li>
//                 <li><a href="#" className="hover:text-red-400 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="hover:text-red-400 transition-colors">API Reference</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="font-semibold text-white mb-4">Company</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="hover:text-red-400 transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-red-400 transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-red-400 transition-colors">Contact</a></li>
//                 <li><a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
//             <p>&copy; 2025 MLloOps. All rights reserved. Built with ❤️ for AI teams worldwide.</p>
//           </div>
//         </div>
//       </footer> */}

//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MLOpsLanding;



// import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
// import image from "../../assests/Gallery/mini.png"
// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Play, Users, Zap, Shield, BarChart3, ArrowRight, Calendar,Check, Menu, X, Star, TrendingUp, Brain, Cpu, Database, Network, Sparkles, Rocket, Globe, Award } from 'lucide-react';

// const MLOpsLanding = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const statsRef = useRef(null)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const heroRef = useRef(null);
//    const sectionRef = useRef(null)
//     const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
//   const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//    const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   }


//   const features = [
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: "Intelligent Automation",
//       description: "AI-powered workflow automation that learns and adapts to your ML pipelines",
//       gradient: "from-red-500 to-red-600",
//       delay: "delay-0"
//     },
//     {
//       icon: <Cpu className="w-8 h-8" />,
//       title: "High Performance Computing",
//       description: "Distributed computing infrastructure optimized for ML workloads",
//       gradient: "from-blue-500 to-cyan-600",
//       delay: "delay-100"
//     },
//     {
//       icon: <Database className="w-8 h-8" />,
//       title: "Advanced Data Management",
//       description: "Sophisticated data versioning and pipeline management systems",
//       gradient: "from-emerald-500 to-teal-600",
//       delay: "delay-200"
//     },
//     {
//       icon: <Network className="w-8 h-8" />,
//       title: "Seamless Integration",
//       description: "Connect with your existing tools and infrastructure effortlessly",
//       gradient: "from-orange-500 to-red-600",
//       delay: "delay-300"
//     }
//   ];

//   const stats = [
//     { icon: <Award />, value: 150, label: "Projects Completed", suffix: "+" },
//     { icon: <Users />, value: 1200, label: "Happy Clients", suffix: "+" },
//     { icon: <Calendar />, value: 12, label: "Years Experience", suffix: "" },
//     { icon: <TrendingUp />, value: 98, label: "Satisfaction Rate", suffix: "%" },
//   ]
//   const testimonials = [
//     {
//       quote: "MLloOps transformed our AI deployment process. We're now 10x faster.",
//       author: "Sarah Chen",
//       role: "Head of ML, TechCorp",
//       avatar: "SC"
//     },
//     {
//       quote: "The most sophisticated MLOps platform we've used. Incredible results.",
//       author: "Michael Rodriguez",
//       role: "AI Director, DataFlow",
//       avatar: "MR"
//     },
//     {
//       quote: "Revolutionary approach to machine learning operations. Highly recommend.",
//       author: "Dr. Priya Patel",
//       role: "Chief Data Scientist, InnovateLabs",
//       avatar: "PP"
//     }
//   ];


// function StatCounter({
//   icon,
//   value,
//   label,
//   suffix,
//   delay
// }) {
//   const countRef = useRef(null)
//   const isInView = useInView(countRef, { once: false })
//   const [hasAnimated, setHasAnimated] = useState(false)

//   const springValue = useSpring(0, {
//     stiffness: 50,
//     damping: 10,
//   })

//   useEffect(() => {
//     if (isInView && !hasAnimated) {
//       springValue.set(value)
//       setHasAnimated(true)
//     } else if (!isInView && hasAnimated) {
//       springValue.set(0)
//       setHasAnimated(false)
//     }
//   }, [isInView, value, springValue, hasAnimated])

//   const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

//   return (
//     <motion.div
//       className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300"
//       variants={{
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//           opacity: 1,
//           y: 0,
//           transition: { duration: 0.6, delay },
//         },
//       }}
//       whileHover={{ y: -5, transition: { duration: 0.2 } }}>
//       <motion.div
//         className="w-14 h-14 rounded-full bg-[#202e44]/5 flex items-center justify-center mb-4 text-[#f06565] group-hover:bg-[#f06565]/10 transition-colors duration-300"
//         whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
//         {icon}
//       </motion.div>
//       <motion.div
//         ref={countRef}
//         className="text-3xl font-bold text-[#202e44] flex items-center">
//         <motion.span>{displayValue}</motion.span>
//         <span>{suffix}</span>
//       </motion.div>
//       <p className="text-[#202e44]/70 text-sm mt-1">{label}</p>
//       <motion.div
//         className="w-10 h-0.5 bg-[#f06565] mt-3 group-hover:w-16 transition-all duration-300" />
//     </motion.div>
//   );
// }


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 overflow-hidden relative">
//       {/* Floating Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-200/25 to-teal-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
//       </div>

     

//       {/* Hero Section */}
//       <section ref={heroRef} className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
//         <div className="max-w-7xl mx-auto w-full">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column - Content */}
//             <div className="space-y-8">
//               <div 
//                 className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-red-100 border border-red-200 rounded-full backdrop-blur-sm"
//                 style={{
//                   transform: `translateY(${scrollY * 0.1}px)`,
//                 }}
//               >
//                 <Sparkles className="w-4 h-4 text-red-600 mr-2" />
//                 <span className="text-sm text-red-700 font-medium">AI-Powered MLOps Platform</span>
//                 <ChevronRight className="w-4 h-4 text-red-500 ml-2" />
//               </div>
              
//               <div className="space-y-6">
//                 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                   <span className="text-slate-800">Transform Your</span>
//                   <br />
//                   <span className="bg-gradient-to-r from-red-600 via-red-600 to-indigo-600 bg-clip-text text-transparent">
//                     AI Workflows
//                   </span>
//                   <br />
//                   <span className="text-slate-600 text-4xl md:text-5xl">with MLloOps</span>
//                 </h1>
                
//                 <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
//                   Delivering Human-Machine Loop for Accelerating Data-Driven Machine Learning Workflows. 
//                   <span className="font-semibold text-red-600"> Let's Structure the Unstructured.</span>
//                 </p>
//               </div>
              
//               <div className="flex flex-col sm:flex-row items-start gap-4">
//                 <button className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-700 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center">
//                   Get Started Today
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="group border-2 border-slate-300 hover:border-red-300 text-slate-700 hover:text-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center backdrop-blur-sm hover:bg-red-50">
//                   <Play className="w-5 h-5 mr-2" />
//                   Watch Demo
//                 </button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="pt-8">
//                 <p className="text-sm text-slate-500 mb-4">Trusted by leading AI companies worldwide</p>
//                 <div className="flex items-center space-x-8 opacity-60">
//                   <div className="text-2xl font-bold text-slate-400">TechCorp</div>
//                   <div className="text-2xl font-bold text-slate-400">DataFlow</div>
//                   <div className="text-2xl font-bold text-slate-400">InnovateLabs</div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - 3D Visual Element */}
//             <div className="relative lg:pl-8">
//               <div 
//                 className="relative"
//                 style={{
//                   transform: `translateY(${scrollY * 0.1}px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
//                   transformStyle: 'preserve-3d'
//                 }}
//               >
//                 {/* Main Container */}
//                 <div className="relative bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-2xl">
//                   <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl overflow-hidden">
//                     {/* Dashboard Header */}
//                     <div className="bg-gradient-to-r from-red-600 to-red-600 p-4 text-white">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <div className="w-3 h-3 bg-white/30 rounded-full"></div>
//                           <div className="w-3 h-3 bg-white/30 rounded-full"></div>
//                           <div className="w-3 h-3 bg-white/30 rounded-full"></div>
//                         </div>
//                         <div className="text-sm font-medium">MLloOps Dashboard</div>
//                       </div>
//                     </div>

//                     {/* Dashboard Content */}
//                     <img
//                     src={image}
//                     />
                   
//                   </div>
//                 </div>

//                 {/* Floating 3D Elements */}
//                 <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-red-500 to-red-500 rounded-xl shadow-lg flex items-center justify-center animate-bounce">
//                   <Brain className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg flex items-center justify-center animate-bounce delay-500">
//                   <Cpu className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg shadow-lg flex items-center justify-center animate-bounce delay-1000">
//                   <Database className="w-4 h-4 text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
             
//         </div>
        
//       </section>
//   <motion.div
//           ref={statsRef}
//           className="mt-4 grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           initial="hidden"
//           animate={isStatsInView ? "visible" : "hidden"}
//           variants={containerVariants}>
//           {stats.map((stat, index) => (
//             <StatCounter
//               key={index}
//               icon={stat.icon}
//               value={stat.value}
//               label={stat.label}
//               suffix={stat.suffix}
//               delay={index * 0.1} />
//           ))}
//         </motion.div>
//       {/* Stats Section */}
//       <section className="py-20 bg-white/50 backdrop-blur-sm border-y border-slate-200/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//              <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-red-200/40 via-pink-200/40 to-rose-200/40 rounded-3xl blur-3xl"></div>
//               <div className="relative bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-2 shadow-2xl">
//                 <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-1 overflow-hidden">
//                   <img
//                     src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756899013/gif_eeuzju.gif"
//                     alt="MLOps Dashboard"
//                     className="w-full h-auto rounded-xl shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>
          
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="text-slate-800">Powerful Features for </span>
//               <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">Modern AI Teams</span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Built for enterprises who demand reliability, scalability, and performance at every stage of the ML lifecycle
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div 
//                 key={index} 
//                 className={`group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 hover:border-red-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl animate-fade-in-up ${feature.delay}`}
//                 style={{
//                   animationDelay: `${index * 150}ms`
//                 }}
//               >
//                 <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{feature.description}</p>
//                 <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <ArrowRight className="w-5 h-5 text-red-600" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


      

//       {/* CTA Section */}
//      {/* CTA Section */}
//      <section className="relative flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
//   <div className="max-w-3xl w-full bg-gradient-to-br from-rose-50 to-red-100 rounded-3xl shadow-lg p-10 text-center relative overflow-hidden animate-fade-in">
    
//     {/* Decorative Animated Pastel Circles */}
//     <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
//     <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-rose-300 rounded-full opacity-20 blur-3xl animate-bounce-slow"></div>
    
//     {/* Heading */}
//     <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-600">
//       Ready to <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Transform</span> Your AI Operations?
//     </h2>
    
//     {/* Subtext */}
//     <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
//       Join thousands of AI teams who trust <span className="font-semibold text-red-500">MLloOps</span> for their production workflows. 
//       Start your journey to intelligent automation today.
//     </p>
    
//     {/* Buttons */}
//     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//       <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-md hover:shadow-xl flex items-center">
//         Start Free Trial
//         <Rocket className="w-5 h-5 ml-2" />
//       </button>
//       <button className="border-2 border-red-300 hover:border-red-400 text-red-600 hover:bg-red-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center">
//         Schedule Demo
//         <ArrowRight className="w-5 h-5 ml-2" />
//       </button>
//     </div>
    
//     {/* Footnote */}
//     <div className="mt-8 text-gray-500 text-sm">
//       No credit card required • 14-day free trial • Enterprise support available
//     </div>
//   </div>
// </section>


      

//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default MLOpsLanding;

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Stethoscope, Landmark, Scale, ShoppingCart, Factory, Phone } from "lucide-react";
import Data from "./Features"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import image from "../../assests/Gallery/mini.png"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Play, Users, Zap, Shield, BarChart3,Mail, ArrowRight, ExternalLink,Calendar,Check, Menu, X, Star, TrendingUp, Brain, Cpu, Database, Network, Sparkles, Rocket, Globe, Award } from 'lucide-react';
import { useNavigate } from "react-router-dom";


const MLOpsLanding = () => {
   const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const statsRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
   const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between cards
    },
  },
};

// Each card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};


const industries = [
  {
    id: 1,
    name: "Healthcare",
    designation: "Medical records & imaging",
    icon: <Stethoscope className="w-6 h-6 text-white" />,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    name: "Finance",
    designation: "Banking & compliance",
    icon: <Landmark className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Legal",
    designation: "Contracts & case files",
    icon: <Scale className="w-6 h-6 text-white" />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 4,
    name: "Retail",
    designation: "Customer & inventory",
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    name: "Manufacturing",
    designation: "Quality & supply chain",
    icon: <Factory className="w-6 h-6 text-white" />,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    name: "Telecom & IT",
    designation: "Logs & support data",
    icon: <Phone className="w-6 h-6 text-white" />,
    color: "from-yellow-500 to-amber-500",
  },
];


  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligent Automation",
      description: "AI-powered workflow automation that learns and adapts to your ML pipelines",
      gradient: "from-red-500 to-red-600",
      delay: "delay-0"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "High Performance Computing",
      description: "Distributed computing infrastructure optimized for ML workloads",
      gradient: "from-blue-500 to-cyan-600",
      delay: "delay-100"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Advanced Data Management",
      description: "Sophisticated data versioning and pipeline management systems",
      gradient: "from-emerald-500 to-teal-600",
      delay: "delay-200"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Seamless Integration",
      description: "Connect with your existing tools and infrastructure effortlessly",
      gradient: "from-orange-500 to-red-600",
      delay: "delay-300"
    }
  ];

 

  const testimonials = [
    {
      quote: "MLloOps transformed our AI deployment process. We're now 10x faster.",
      author: "Sarah Chen",
      role: "Head of ML, TechCorp",
      avatar: "SC"
    },
    {
      quote: "The most sophisticated MLOps platform we've used. Incredible results.",
      author: "Michael Rodriguez",
      role: "AI Director, DataFlow",
      avatar: "MR"
    },
    {
      quote: "Revolutionary approach to machine learning operations. Highly recommend.",
      author: "Dr. Priya Patel",
      role: "Chief Data Scientist, InnovateLabs",
      avatar: "PP"
    }
  ];


function StatCounter({
  icon,
  value,
  label,
  suffix,
  delay
}) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <motion.div
        className="w-14 h-14 rounded-full bg-[#202e44]/5 flex items-center justify-center mb-4 text-[#f06565] group-hover:bg-[#f06565]/10 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
        {icon}
      </motion.div>
      <motion.div
        ref={countRef}
        className="text-3xl font-bold text-[#202e44] flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-[#202e44]/70 text-sm mt-1">{label}</p>
      <motion.div
        className="w-10 h-0.5 bg-[#f06565] mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 overflow-hidden relative">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-200/25 to-teal-200/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

     

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div 
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-red-100 border border-red-200 rounded-full backdrop-blur-sm"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <Sparkles className="w-4 h-4 text-red-600 mr-2" />
                <span className="text-sm text-red-700 font-medium">AI-Powered MLOps Platform</span>
                <ChevronRight className="w-4 h-4 text-red-500 ml-2" />
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-slate-800">Transform Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-red-600 via-red-600 to-indigo-600 bg-clip-text text-transparent">
                    AI Workflows
                  </span>
                  <br />
                  <span className="text-slate-600 text-4xl md:text-5xl">with MLloOps</span>
                </h1>
                
                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                  Delivering Human-Machine Loop for Accelerating Data-Driven Machine Learning Workflows. 
                  <span className="font-semibold text-red-600"> Let's Structure the Unstructured.</span>
                </p>
              </div>
            <div className="flex flex-col sm:flex-row items-start gap-4">
  {/* Get Started Button */}
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

{/* ✅ People Avatars placed below CTA, left-aligned */}
<div className="mt-6 flex justify-start">
  <AnimatedTooltip items={industries} />
</div>


              {/* Trust Indicators */}
              <div className="pt-8">
                <p className="text-sm text-slate-500 mb-4">Trusted by leading AI companies worldwide</p>
                <div className="flex items-center space-x-8 opacity-60">
                  <div className="text-2xl font-bold text-slate-400">TechCorp</div>
                  <div className="text-2xl font-bold text-slate-400">DataFlow</div>
                  <div className="text-2xl font-bold text-slate-400">InnovateLabs</div>
                </div>
              </div>
            </div>

            {/* <div className="mt-6 flex justify-start">
    <Data />
  </div> */}
   
            {/* Right Column - Animated Image */}
            <div className="relative lg:pl-8 flex justify-center items-center">
              <div className="relative group perspective-1000">
                {/* Main Image with 3D Effects */}
                <motion.div
                  className="relative transform-gpu"
                  initial={{ 
                    scale: 0.8, 
                    opacity: 0, 
                    rotateY: -25,
                    z: -50
                  }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1, 
                    rotateY: 0,
                    z: 0
                  }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeOut",
                    delay: 0.2
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 2,
                    z: 30,
                    transition: { duration: 0.4 }
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
                  }}
                >
                  {/* Glowing backdrop effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-2xl transform scale-110 opacity-60 animate-pulse"></div>
                  
                  {/* Main Image */}
                  <motion.img
                    src={image}
                    alt="MLOps Dashboard"
                    className="relative w-full max-w-2xl h-auto rounded-2xl shadow-2xl transform-gpu"
                    style={{
                      transform: `translateY(${scrollY * 0.05}px) rotateX(${mousePosition.y * 0.008}deg) rotateY(${mousePosition.x * 0.008}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Floating particles/elements around the image */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Brain className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center"
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -180, -360],
                      scale: [1, 0.9, 1]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Cpu className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 -left-10 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg flex items-center justify-center"
                    animate={{
                      x: [0, -15, 0],
                      rotate: [0, 90, 180, 270, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    <Database className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-16 -right-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg flex items-center justify-center"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.3, 1],
                      x: [0, 10, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>

                {/* Interactive light rays */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-1/2 w-1 h-20 bg-gradient-to-b from-yellow-400/60 to-transparent transform -translate-x-1/2 animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-1 bg-gradient-to-l from-blue-400/60 to-transparent animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-0 w-16 h-1 bg-gradient-to-r from-red-400/60 to-transparent transform -translate-y-1/2 animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
          </div>
             
        </div>
        
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
             <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-200/40 via-pink-200/40 to-rose-200/40 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-2 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-1 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/datwcxi7y/image/upload/v1756899013/gif_eeuzju.gif"
                    alt="MLOps Dashboard"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-slate-800">Powerful Features for </span>
              <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">Modern AI Teams</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Built for enterprises who demand reliability, scalability, and performance at every stage of the ML lifecycle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 hover:border-red-300 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl animate-fade-in-up ${feature.delay}`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-red-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      

      {/* CTA Section */}
     {/* CTA Section */}
     <section className="relative flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-3xl w-full bg-gradient-to-br from-rose-50 to-red-100 rounded-3xl shadow-lg p-10 text-center relative overflow-hidden animate-fade-in">
    
    {/* Decorative Animated Pastel Circles */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
    <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-rose-300 rounded-full opacity-20 blur-3xl animate-bounce-slow"></div>
    
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-600">
      Ready to <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Transform</span> Your AI Operations?
    </h2>
    
    {/* Subtext */}
    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
      From upload to final output, AI takes the lead while humans step in only when needed, ensuring data you can trust.

    </p>
    
    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
    
    {/* Footnote */}
    <div className="mt-8 text-gray-500 text-sm">
      No credit card required • 14-day free trial • Enterprise support available
    </div>
  </div>
</section>


      

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default MLOpsLanding;