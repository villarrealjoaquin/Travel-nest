import { Link } from "react-router-dom";
import { Map } from "../..";
import { Button } from "../../../../components";
import { PUBLIC_ROUTES } from "../../../../models/routes";

function ApartmentExplorer() {
  return (
    <>
      <div className='flex justify-center items-center my-3'>
        <Link to={PUBLIC_ROUTES.APARTMENTS}>
          <Button
            className='bg-[#FF385C] flex items-center gap-2 text-white px-5 py-2 rounded-xl hover:text-[#cfcfcf] transition-transform transform hover:scale-105'
          >
            Explorar <Map />
          </Button>
        </Link>
      </div>
    </>
  )
}
export default ApartmentExplorer;