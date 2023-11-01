import { useParams } from "react-router-dom";
import {
  Apartment,
  ApartmentInfoLeft,
  ApartmentInfoRight,
  BannerView,
  FeedbackWidget
} from ".";
import { apartmentsData } from "../../constants";

function ApartmentDetail() {
  const { id } = useParams();
  const castToNumber = id ? parseInt(id) : 1;
  const apartment: Apartment = apartmentsData[castToNumber];

  return (
    <>
      <main className="w-full grid place-content-center">
        <BannerView apartment={apartment} />
        <div className="flex gap-5 w-full">
          <ApartmentInfoLeft />
          <ApartmentInfoRight apartment={apartment} />
        </div>
        <FeedbackWidget />
      </main>
    </>
  )
}
export default ApartmentDetail;

