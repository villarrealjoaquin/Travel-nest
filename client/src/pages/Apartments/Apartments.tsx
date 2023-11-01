import { ApartmentCard } from "..";
import { VerticalNavbar } from "../../components";

function Apartments() {
  return (
    <section className="flex items-start pb-5">
      <VerticalNavbar />
      <div className="w-full mt-10">
        <ApartmentCard />
      </div>
    </section>
  );
}

export default Apartments;