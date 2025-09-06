import images from "../assests/Gallery";
const Gallery = () => {
  return (
    <>
      <h1 className="text-xl text-center my-10 md:my-20 md:text-5xl mb-10 font-bold text-zinc-700">
        Memorable Moments Showcase
      </h1>
      <div className="lg:max-w-5xl md:max-w-3xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="mx-auto">
            <img
              src={image}
              loading="lazy"
              alt=""
              className="w-[22rem] h-[22rem] object-cover  rounded"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
