import { ApartmentCard } from "..";
import { useTokenRefresh } from "../../Hooks/useTokenRefresh";
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
  useTokenRefresh();
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