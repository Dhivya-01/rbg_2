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
  CorditeFactory,
  IonIdea,
  opsteq,
  talentXpert,
} from "../../assests/partners/index";
import imagine from "../../assests/images/imagine.jpg";
import intelAllience from "../../assests/images/intelAllience.png";

export default function Clients() {
  return (
    <div className="px-10 py-5">
      <h1 className="text-center font-semibold mb-5 font-Poppins text-2xl md:text-4xl text-zinc-700">
        Clients
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 max-md:space-y-5 space-y-4 md:space-x-0 items-center justify-items-center">
        <img src={BDO} className="w-32" alt="" />
        <img src={mangalam} className="w-32" alt="" />
        <img src={ministry} className="w-32" alt="" />
        <img src={tera} className="w-32" alt="" />
        <img src={technomile} className="w-32" alt="" />
        <img src={imagine} className="w-32" alt="" />
        <img src={CorditeFactory} className="w-32" alt="" />
        <img src={IonIdea} className="w-32" alt="" />
        <img src={opsteq} className="w-32" alt="" />
        <img src={talentXpert} className="w-32" alt="" />
      </div>
      <h1 className="text-center font-semibold my-5  font-Poppins text-2xl md:text-4xl text-zinc-700">
        Accelerators
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-7 max-md:space-y-5 items-center justify-items-center">
        <img src={amrita} className="w-32" alt="" />
        <img src={MicrosoftForStartups} className="w-32" alt="" />
        <img src={aws} className="w-32" alt="" />
        <img src={nvidia} className="w-32" alt="" />
        <img src={cdii} className="w-32" alt="" />
        <img src={spark} className="w-32" alt="" />
        <img src={intelAllience} className="w-32" alt="" />
      </div>
    </div>
  );
}
