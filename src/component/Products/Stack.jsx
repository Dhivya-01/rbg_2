import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  MessageCircle,
  Camera,
  Database,
  Cloud,
  Settings,
  Scale,
  Network,
  BarChart,
} from "lucide-react";
import VisualDataGif from "../../assests/images/Stack.gif";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MLStackPage = () => {
  const stacks = [
    {
      title: "TextStack",
      icon: FileText,
      description:
        "Dive into a world of rich textual data analysis. Our APIs empower you to categorize, extract, translate, and summarize text, providing a robust foundation for everything from customer feedback analysis to document intelligence.",
      services: [
        {
          name: "Text Classifier",
          description:
            "Automatically organize and label text based on content, context, or tone.",
        },
        {
          name: "Text Extractor",
          description:
            "Identify and extract key information such as entities, keywords, or specific fields from documents.",
        },
        {
          name: "Text Translator",
          description:
            "Break language barriers with seamless translation across multiple languages.",
        },
        {
          name: "Text Summarizer",
          description:
            "Condense long texts into concise, informative summaries.",
        },
      ],
    },
    {
      title: "VoiceStack",
      icon: MessageCircle,
      description:
        "VoiceStack brings voice data to life with APIs that transcribe, enhance, recognize, and synthesize speech. Tailored for applications in customer support, media, and beyond, VoiceStack makes your voice data accessible and actionable.",
      services: [
        {
          name: "Voice Transcriber",
          description:
            "Convert spoken language into text accurately and efficiently.",
        },
        {
          name: "Voice Enhancer",
          description:
            "Improve voice clarity by reducing background noise and refining audio quality.",
        },
        {
          name: "Voice Recognition",
          description:
            "Identify speakers and understand voice patterns for security, customer profiling, and more.",
        },
        {
          name: "Voice Diarizer",
          description:
            "Distinguish and label individual speakers within conversations.",
        },
        {
          name: "Voice Classifier",
          description:
            "Categorize voice data based on mood, tone, or other acoustic features.",
        },
        {
          name: "Voice Synthesizer",
          description:
            "Generate natural-sounding speech for text-to-speech applications.",
        },
      ],
    },
    {
      title: "VisionStack",
      icon: Camera,
      description:
        "VisionStack leverages computer vision to interpret and organize visual data. From transcribing visual content to detecting objects and segments, VisionStack turns images into structured, usable data.",
      services: [
        {
          name: "Vision Transcriber",
          description:
            "Extract text and information from visual content, enhancing accessibility and archiving.",
        },
        {
          name: "Vision Classifier",
          description:
            "Identify and categorize objects within images for streamlined image recognition.",
        },
        {
          name: "Vision Segmenter",
          description:
            "Divide images into meaningful segments for granular analysis.",
        },
        {
          name: "Vision Detector",
          description:
            "Detect objects, faces, or items in real-time for security, retail, and more.",
        },
        {
          name: "Table Extractor",
          description:
            "Convert tables and structured visual data into usable, digital formats.",
        },
      ],
    },
  ];

  const features = [
    {
      icon: Database,
      title: "Dockerized and Auto-Scalable Microservices",
      description:
        "APIs are delivered as containerized microservices, allowing auto-scaling to handle diverse workloads and complex application orchestration.",
    },
    {
      icon: Cloud,
      title: "Flexible Deployment Options",
      description:
        "Whether your infrastructure is hosted in-house, on private clouds, or public clouds, MLStack provides seamless adaptability to meet your security and compliance requirements.",
    },
    {
      icon: Settings,
      title: "KPI-Driven & Unique Capabilities",
      description:
        "MLStack stands out with its Own Your Model (OYM) approach, giving you full control over model customization and continuous learning capabilities.",
    },
    {
      icon: Network,
      title: "Integration with MLloOps™",
      description:
        "Enabling automated lifecycle management for machine learning operations, ensuring efficient model monitoring, updating, and deployment.",
    },
  ];

  const WaveBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* First wave layer */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,176C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          className="animate-wave-slow fill-green-50/30"
        />
      </svg>

      {/* Second wave layer */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,197.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          className="animate-wave-medium fill-Primary/20"
        />
      </svg>

      {/* Third wave layer */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0,288L60,282.7C120,277,240,267,360,272C480,277,600,299,720,293.3C840,288,960,256,1080,250.7C1200,245,1320,267,1380,277.3L1440,288L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z"
          className="animate-wave-fast fill-green-100/40"
        />
      </svg>
    </div>
  );

  const FloatingDots = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute h-3 w-3 bg-Primary/30 rounded-full top-20 left-1/4 animate-float-slow"></div>
      <div className="absolute h-2 w-2 bg-green-200/40 rounded-full top-40 right-1/3 animate-float-medium"></div>
      <div className="absolute h-4 w-4 bg-Primary/20 rounded-full bottom-40 left-1/3 animate-float-fast"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-b from-white to-Secondary/30 overflow-hidden py-12 md:py-24 px-4"
        {...fadeIn}
      >
        <WaveBackground />
        <FloatingDots />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-Poppins">
              MLStack
            </h1>
            <p className="text-bold md:text-xl text-green-600 mt-4 font-OpenSans">
              Stack of Machine Learned APIs for Structuring the Unstructured
              Data
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 space-y-4 md:space-y-6">
              <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border border-Primary/10">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-OpenSans">
                  In the modern data-driven landscape, unstructured data—whether
                  from text, voice, or images—holds valuable insights but often
                  remains untapped. MLStack is here to bridge that gap. Designed
                  with advanced deep learning capabilities, MLStack transforms
                  unstructured data into actionable, structured formats,
                  enabling seamless integration into your business intelligence,
                  analytics, and automation pipelines.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4 font-OpenSans">
                  The primary tech from the MLstack aid in solving the business
                  challenges of evolving industries across various sectors. We{" "}
                  <span className="font-semibold text-bold">
                    democratize disruptive Generative AI solutions
                  </span>{" "}
                  for sustainable business growth.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-0 mix-blend-multiply">
                  <img
                    src={VisualDataGif}
                    alt="Visual representation of data"
                    className="w-full h-auto object-contain"
                  />
                  {/* Add a subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-Secondary/20 to-transparent mix-blend-overlay rounded-xl"></div>
                </div>
                {/* Add a blob shape behind the image */}
                <div className="absolute inset-0 -z-10">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      fill="#EFF0FF"
                      d="M45.5,-57.1C59.3,-47.3,71.3,-33.5,76.4,-16.8C81.5,-0.1,79.8,19.4,71.2,35.5C62.6,51.6,47.1,64.2,29.5,70.7C11.9,77.2,-7.9,77.5,-27.2,71.9C-46.5,66.3,-65.3,54.7,-76.2,37C-87.1,19.2,-90.1,-4.7,-83.1,-24.9C-76.1,-45,-59,-61.3,-41.3,-69.8C-23.5,-78.3,-4.9,-78.9,11,-73.4C26.9,-67.9,41.1,-56.3,45.5,-57.1Z"
                      transform="translate(100 100)"
                      className="animate-blob"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stack Sections */}
      {stacks.map((stack, index) => (
        <motion.section
          key={stack.title}
          className="py-12 md:py-20 px-4"
          {...fadeIn}
          transition={{ delay: index * 0.2 }}
          whileHover="hover"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8 md:mb-12">
              <stack.icon className="w-8 h-8 md:w-12 md:h-12 text-green-600" />
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
                  {stack.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                  {stack.description}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {stack.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.name}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover="hover"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                    {service.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      ))}

      {/* Features Section */}
      <motion.section className="bg-gray-50 py-12 md:py-20 px-4" {...fadeIn}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover="hover"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              State-of-the-Art Technology
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our MLStack leverages State-of-the-Art (SOTA) Deep Learning
              algorithms to bring unparalleled accuracy and efficiency to
              analytics tasks.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover="hover"
              >
                <feature.icon className="w-8 h-8 md:w-12 md:h-12 text-green-600 mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section {...fadeIn}>
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
              Transform Your Unstructured Data Today
            </h2>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
              Elevate your business intelligence with advanced AI-driven
              structuring capabilities that offer unmatched precision and
              adaptability.
            </p>
            <Link to="/Contact">
              <div className="inline-block bg-green-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-green-700 transition-colors cursor-pointer text-base md:text-lg">
                Get Started with MLStack
              </div>
            </Link>
          </div>
        </section>
      </motion.section>
    </div>
  );
};

export default MLStackPage;
