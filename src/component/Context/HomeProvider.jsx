/* eslint-disable react/prop-types */
import { HomeContext } from "./Context";
import {
  FaEye,
  FaDatabase,
  FaPerson,
  FaPersonArrowUpFromLine,
  FaRobot,
} from "react-icons/fa6";
import {
  BDO,
  mangalam,
  ministry,
  technomile,
  tera,
  amrita,
  aws,
  nvidia,
  cdii,
  spark,
  MicrosoftForStartups,
} from "../../assests/partners/index";
import {
  MdDiversity3,
  MdFoundation,
  MdTextFields,
  MdVoiceChat,
  MdWorkOff,
  MdWorkspaces,
} from "react-icons/md";
import { GiSkills } from "react-icons/gi";
export default function HomeProvider({ children }) {
  const style = { fontSize: "10rem", margin: "auto", color: "#EF9A9A" };
  const client = {
    BDO,
    mangalam,
    ministry,
    technomile,
    tera,
    amrita,
    aws,
    nvidia,
    cdii,
    spark,
    MicrosoftForStartups,
  };
  const section = [
    {
      title: "Solutioning.AI & Consulting.AI",
      heading:
        "Let our Machine Learning Service Stack Accelerate your Business Resilience",
      content: [
        "Our additive Machine Learning service stack (MLStack)  is a continuous learning platform with the collation of plug-and-play microservices. We customize these microservices to support your requirements.",
        "Experience sustainable growth in your business by leveraging our AI Solutions & Consultants with the domain knowledge of your business.",
      ],
      subcontent: [
        {
          title: "Text Analytics",
          content:
            "Includes deep learning models to develop personalized NLP problems and solutions to collate the information from the midst of the text.",
          img: <MdTextFields style={style} />,
        },
        {
          title: "Vision Analytics",
          content:
            "Seeks to deliver computer vision solutions to create AI systems that see, explore, learn, and reason from images and videos.",
          img: <FaEye style={style} />,
        },
        {
          title: "Voice Analytics",
          content:
            "Simplifying the Human Machine Interface by integrating powerful deep learning model-based speech solutions that run on any infrastructure.",
          img: <MdVoiceChat style={style} />,
        },
        {
          title: "Data Analytics",
          content:
            "Offers data-driven solutions and Big data services to enable reliable IoT through explainable descriptive, predictive, and prescriptive models.",
          img: <FaDatabase style={style} />,
        },
      ],
    },
    {
      title: "Resourcing.AI",
      heading: "Unique with Domain Diversity & Multidisciplinary Experience!",
      content: [
        "Our resources have a strong foundation in AI technologies which is applied across various industry sectors. Our continuous learning initiative and programs keep them updated with the latest AI breakthroughs.",
        "The blend of AI research and software engineering eliminates the barriers to migrating AI solutions from POCs to successful products and services.",
      ],
      subcontent: [
        {
          title: "Foundation",
          content:
            "Our resources are highly skilled professionals who hold a minimum qualification as postgraduate or doctorate in AI & practiced expressing mathematics in computer languages.",
          img: <FaPerson style={style} />,
        },
        {
          title: "Diversity",
          content:
            "Varying undergraduate domain (Bio-informatics, Civil, Computer Science, Electrical & Mechanical) & postgraduate in AI makes our resources as best applied engineers.",
          img: <MdDiversity3 style={style} />,
        },
        {
          title: "Skillset",
          content:
            "AI mathematicians who practice software engineering across Text-Speech-Image-Data Analytics in cloud and edge technology.",
          img: <GiSkills style={style} />,
        },
        {
          title: "Experience",
          content:
            "Pioneers who started practicing conventional Machine Learning from 2013, Deep Learning from 2015, and MLDevOps from 2018.",
          img: <FaPersonArrowUpFromLine style={style} />,
        },
      ],
    },
    {
      title: "Training.AI & Research.AI",
      heading: "Lets Make AI for Everyone Possible & Achieve it Together!",
      content: [
        "As Digital transformation becomes the core of business strategies spanning all industry segments and markets, Workforces should prepare to adapt to the change of AI-driven digital transformation.",
        "It’s time to accelerate the workforce through experience-based AI learning to accelerate any business. We aim at upskilling and reskilling workforces to adhere to the new age AI projects.",
      ],
      subcontent: [
        {
          title: "AI4Everyone",
          content:
            "Level 1 program to train your workforce to attain the multidisciplinary expertise in handling Text-Voice-Vision-Numeric Analytics in formulating AI Solutions.",
          img: <MdFoundation style={style} />,
        },
        {
          title: "Less2Practice",
          content:
            "Level 2 program to the teams or groups to Learn-Experiment-Share-Seek practice attaining AI solutions in minimal time.",
          img: <MdWorkOff style={style} />,
        },
        {
          title: "AI4Industry",
          content:
            "AI is the common skill set required by an engineer and will be an essential skill set of the future. We accelerate the workforce through experience-based AI learning.",
          img: <FaRobot style={style} />,
        },
        {
          title: "D5Practice",
          content:
            "Level 3 program for AI practitioners to learn AI-centric Design-Develop-Debug-Deploy-Delivery to bridge the gap between AI Research and Business Requirements.",
          img: <MdWorkspaces style={style} />,
        },
      ],
    },
  ];

  const value = { section, client };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
