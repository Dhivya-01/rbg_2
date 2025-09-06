function Component() {
  const timeline = [
    {
      year: 2024,
      milestone: "MLloOps Launch",
      resources: 23,
      work_locations: 4,
    },
    {
      year: 2023,
      milestone: "Early Clients",
      resources: 20,
      work_locations: 3,
    },
    {
      year: 2022,
      milestone: "MLstack Launch",
      resources: 15,
      work_locations: 2,
    },
    {
      year: 2021,
      milestone: "Incorporated",
      resources: 6,
      work_locations: 1,
    },
    {
      year: 2020,
      milestone: "Stealth Mode",
      resources: 2,
    },
  ];

  return (
    <div className="font-Poppins space-x-2 mx-auto max-w-7xl flex flex-col md:flex-row ">
      <ol className="border-l mt-4 border-zinc-300 ml-10  md:ml-0 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
        {timeline.reverse().map((item, index) => (
          <li key={index}>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-zinc-500 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                {item.year}
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h4 className="mb-1.5 text-xl font-semibold">{item.milestone}</h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                 {item.resources} resources
                {item.work_locations
                  ? " and " + item.work_locations + " work locations"
                  : ""}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <h1 className="text-3xl text-left font-Inter font-semibold ">Growing</h1>
    </div>
  );
}
export default Component;
