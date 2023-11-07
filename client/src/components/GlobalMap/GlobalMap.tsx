import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { MapOptions, MapStyle } from "../../models/map.model";

function GlobalMap({ styles, options }: { styles: MapStyle, options: MapOptions }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <GoogleMap
        zoom={15}
        center={{ lat: 39.739235, lng: -104.99025 }}
        mapContainerStyle={styles}
        options={options}
      >
        <MarkerF
          position={{ lat: 39.739235, lng: -104.99025 }}
          zIndex={100}
        />
      </GoogleMap>
    </>
  )
}
export default GlobalMap;