import { GlobalMap } from "../../../../components";

const mapStyles = {
  width: '100%',
  height: '40vh',
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel:true
};

function LocationApartment() {
  return (
    <div>
      <h2 className="my-2 font-bold">Donde te vas a alojar</h2>
      <GlobalMap styles={mapStyles} options={mapOptions} />
    </div>
  )
}
export default LocationApartment;