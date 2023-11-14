import {
  ApartmentFeaturesForm,
  ApartmentImageUploader,
  PublishApartmentMap,
  ResidentialCategoryPicker
} from ".";
import { Navbar, Textarea } from "../../components";

function PublishApartment() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-[80%] m-auto">
        <h2 className="font-bold text-lg bg-[#FF385C] py-5 px-2 rounded-sm text-white">Publica tu Propiedad</h2>
        <section className="flex gap-3 mb-10">
          <div className="w-1/2">
            <ResidentialCategoryPicker />
            <ApartmentFeaturesForm />
          </div>
          <div className="w-1/2">
            <ApartmentImageUploader />
            <PublishApartmentMap />
            <article className="my-2">
              <h2 className="font-bold my-2">Desea agregar algo una descripcion</h2>
              <Textarea placeholder="Te falto agregar alguna caracteristica" />
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
export default PublishApartment;