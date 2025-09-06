// import Section from "./Section";
// import Slider from "./Slider";
// import Clients from "./Clients";
// import Header from "../Header";
// import { useContext, useEffect } from "react";
// import { HomeContext } from "../Context/Context";
// export default function Home() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   });
//   const data = {
//     // title: "AI Services",
//     content:
//       "Delivering Human-Machine Loop for Accelerating Data-Driven Machine Learning Workflows",
//     description: "Let's Structure the Unstructured.",
//     button: "Get Started",
//   };
//   const { section } = useContext(HomeContext);
//   return (
//     <>
//       <Header data={data} />
//       <Slider />
//       {section.map((item, index) => (
//         <Section item={item} key={index} index={index} />
//       ))}
//       <Clients />
//     </>
//   );
// }



import Section from "./Section";
import Slider from "./Slider";
import Clients from "./Clients";
import Header from "../Header";
import { useContext, useEffect } from "react";
import { HomeContext } from "../Context/Context";
import Hero from "../Home/Hero"
import AboutUsSection from "@/components/ui/about-us-section.jsx"
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import Timelinedemo from "./Timeline"
import Demo from "./demo"


import { Features } from "@/components/ui/features-7"
import Testimonials from  "./ScrollCard"



export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const data = {
    // title: "AI Services",
    content:
      "Delivering Human-Machine Loop for Accelerating Data-Driven Machine Learning Workflows",
    description: "Let's Structure the Unstructured.",
    button: "Get Started",
  };
  const { section } = useContext(HomeContext);

  




  return (
    <>

  <Hero />


   



     {/* <Features /> */}
     <LandingAccordionItem />
    
    {/* <AboutUsSection/> */}
    <Demo/>
    <Timelinedemo/>
    <Testimonials/>
    
      {/* <Header data={data} />
      <Slider /> */}
      {/* {section.map((item, index) => (
        <Section item={item} key={index} index={index} />
      ))} */}
      <Clients />
    </>
  );
}
