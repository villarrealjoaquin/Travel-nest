import { ApartmentCard } from "..";
import { GlobalMap, VerticalNavbar } from "../../components";

const mapStyles = {
  width: '30%',
  height: '100vh',
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: true,
};

function ApartmentsDirectory() {
  return (
    <>
      <section className="flex items-start pb-5">
        <VerticalNavbar />
        <div className="w-full h-screen overflow-y-auto">
          <ApartmentCard />
        </div>
        <GlobalMap styles={mapStyles} options={mapOptions} />
      </section>
    </>
  );
}
export default ApartmentsDirectory;