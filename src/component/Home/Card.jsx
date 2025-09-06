/* eslint-disable react/prop-types */
export default function Card({ content }) {
  return content ? (
    <div className="shadow  h-full  rounded p-5">

      {content.img}
      <h1 className="text-xl font-semibold mb-2 text-zinc-800">
        {content.title}
      </h1>
      <p className="text-lg font-Inter text-zinc-500">{content.content}</p>
    </div>
  ) : (
    <></>
  );
}
