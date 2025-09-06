import Card from "./Card";

/* eslint-disable react/prop-types */
export default function Section({ item }) {
  return item ? (
    <div className="lg:min-h-[80vh] max-w-7xl mx-auto mb-10 flex justify-center flex-col items-center  text-zinc-700 w-full font-Poppins text-center p-10">
      <h1 className="text-3xl md:text-5xl mb-10 font-bold text-zinc-700">
        {item && item.title ? item.title : ""}
      </h1>
      <h2 className="text-lg md:text-2xl mb-10 text-zinc-600">{item.heading}</h2>
      {item.content.map((item, index) => (
        <p className=" text-zinc-500 mb-5" key={index}>
          {item}
        </p>
      ))}

      <div className="grid grid-cols-1  md:grid-cols-2  gap-10  justify-center items-center">
        {item.subcontent.map((content, index) => (
          <Card key={index} content={content} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
}
