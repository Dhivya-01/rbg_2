import { Carousel, Flowbite } from "flowbite-react";
export default function Slider() {
  const customTheme = {
    svg: {
      color: {
        primary: "#333",
      },
    },
  };

  return (
    <div className="bg-gray-50 h-72 md:h-96 font-Poppins md:font-Inter text-lg md:text-3xl lg:text-4xl  text-center  text-zinc-800">
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel color="primary">
          <div className="flex h-full items-center p-8 md:p-24  justify-center ">
            Focused to Span AI Solutions across Enterprises to Structure the
            Unstructured Data
          </div>
          <div className="flex h-full items-center p-8 md:p-24  justify-center  ">
            Leverage our collaborative development platforms with automated and
            accelerated Machine Learning workflows to Structure the Unstructured
            data
          </div>
          <div className="flex h-full items-center p-8 md:p-24 justify-center ">
            We provide services to structure the unstructured data through
            conventional ML and Deep Learning powered Generative AI algorithms
          </div>
        </Carousel>
      </Flowbite>
    </div>
  );
}
