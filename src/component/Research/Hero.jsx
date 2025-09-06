import { Link } from "react-router-dom";
import { FaLinode } from "react-icons/fa";
import { ImCogs } from "react-icons/im";
import { FaLanguage } from "react-icons/fa";
import { CgFormatText } from "react-icons/cg";
import { RiMicFill } from 'react-icons/ri';
export default function Hero() {
  const data = [
    {
      title: "Floor-Plan-Detection",
      content: "Floor plan object detection with super resolution",
      link: "https://github.com/rbg-research/Floor-Plan-Detection",
      node: (
        <FaLinode
          style={{ fontSize: "10rem", margin: "auto", color: "#EF9A9A" }}
        />
      ),
    },
    {
      title: "MFR",
      content: "Zero-shot Machining Feature Retrieval",
      link: "https://github.com/rbg-research/Machining-Feature-Retrieval",
      node: (
        <ImCogs style={{ fontSize: "10rem", margin: "auto", color: "#EF9A9A" }} />
      ),
    },
    {
      title: "CoRePooL",
      content: "Corpus for resource poor language",
      link: "https://github.com/rbg-research/CoRePooL",
      node: (
        <FaLanguage
          style={{ fontSize: "10rem", margin: "auto", color: "#EF9A9A" }}
        />
      ),
    },

    {
      title: "OCR Enhancer",
      content:
        "Performing Text Segmentation to Improve OCR on Multi Scene Text",
      link: "https://github.com/rbg-research/OCR-Enhancer",
      node: (
        <CgFormatText
          style={{ fontSize: "10rem", margin: "auto", color: "#EF9A9A" }}
        />
      ),
    },
    {
      title: "EACL",
      content:
        "Evaluating Large Pre-Trained Model for Speech Recognition and Multi-Accented Speech Classification in Low-Resource Languages",
      link: "https://github.com/rbg-research/EACL-2024",
      node: (
        <RiMicFill 
          style={{ fontSize: "10rem", margin: "auto", color: "#EF9A9A" }}
        />
      ),
    },
  ];

  return (
    <div className="py-10 text-center">
      <div className="max-w-7xl mx-auto font-Poppins space-y-5 md:space-y-10">
        <h1 className="text-xl md:text-5xl font-bold text-zinc-700">
          Research Contributions
        </h1>
        <h2 className="text-md md:text-2xl text-zinc-600">
          Structuring the Unstructured
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2  px-5  gap-5">
          {data.map((item, index) => (
            <li
              className=" rounded shadow md:shadow-lg  flex flex-col  p-5 md:p-10"
              key={index}
            >
              {item.node}
              <h1 className="md:text-2xl font-semibold">{item.title}</h1>
              <div className="p-5 flex-1 font-Poppins">{item.content}</div>
              <Link to={item.link}>
                {/* <span className="text-black bg-[#EF9A9A] px-4 py-2 rounded shadow">
                  Know More
                </span> */}
                <button
  className="
    group w-full sm:w-auto bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 
    rounded-full text-base sm:text-lg inline-flex items-center justify-center 
    space-x-2 transition-all duration-300 
    hover:bg-red-600 hover:shadow-lg hover:scale-105
    animate-[bounce_1s_ease-in-out_infinite]
  "
>

                {/* <span className="transform group-hover:translate-x-2 transition-transform duration-300"> */}
                Know More
                {/* </span> */}
                
              </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
