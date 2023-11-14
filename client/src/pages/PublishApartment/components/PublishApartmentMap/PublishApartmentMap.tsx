import { GlobalMap } from "../../../../components";

const mapStyles = {
  width: '100%',
  height: '20vh',
};

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: true
};

function PublishApartmentMap() {
  return (
    <>
      <article>
        <h2 className="font-bold my-2">Donde esta ubicada?</h2>
        <GlobalMap styles={mapStyles} options={mapOptions} />
      </article>
    </>
  )
}
export default PublishApartmentMap;