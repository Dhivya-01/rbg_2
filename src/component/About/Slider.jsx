/* eslint-disable react/prop-types */
import { Carousel } from "flowbite-react";
import { useContext } from "react";
import { AboutContext } from "../Context/Context";
export default function Slider() {
  const { Practitioner } = useContext(AboutContext);
  return Practitioner ? (
    <div className="h-[18rem] w-[18rem] md:h-[25rem] mx-auto md:w-[25rem] text-md text-center font-Poppins text-zinc-100">
      <Carousel color="primary">
        {Practitioner.data.map((item, index) => (
          <div
            key={index}
            className=" font-Poppins text-zinc-700 flex  items-center justify-center flex-col text-center"
          >
            <div className="rounded-full mx-auto w-[12rem] h-[12rem] md:w-[12rem] md:h-[12rem] overflow-hidden">
              <img src={item.img} className="object-fit w-full h-full" alt="" />
            </div>

            <h1 className="text-md md:text-xl font-semibold">{item.name}</h1>
            <p className="text-sm md:text-lg">{item.role}</p>
          </div>
        ))}
      </Carousel>
    </div>
  ) : (
    <></>
  );
}
