import { useParams } from "react-router-dom";
import {
  Apartment,
  ApartmentContainerInfo,
  ApartmentInfoLeft,
  ApartmentInfoRight,
  BannerView,
  FeedbackWidget,
  LocationApartment
} from ".";
import { apartmentsData } from "../../constants";

function ApartmentDetail() {
  const { id } = useParams();
  const castToNumber = id ? parseInt(id) : 1;
  const apartment: Omit<Apartment, 'id'> = apartmentsData[castToNumber];

  return (
    <main className="w-full grid place-content-center">
      <BannerView apartment={apartment} />
      <ApartmentContainerInfo>
        <ApartmentInfoLeft />
        <ApartmentInfoRight apartment={apartment} />
      </ApartmentContainerInfo>
      <FeedbackWidget />
      <LocationApartment />
    </main>
  )
}
export default ApartmentDetail;

