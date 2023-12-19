import {
  ApartmentFeaturesForm,
  ApartmentImageUploader,
  PublishApartmentMap,
  ResidentialCategoryPicker
} from ".";
import { useTokenRefresh } from "../../Hooks/useTokenRefresh";
import { ButtonUi, Checkbox, Navbar, Textarea } from "../../components";

function PublishApartment() {
  useTokenRefresh();
  return (
    <>
      <Navbar />
      <main className="flex justify-center flex-col w-[90%] m-auto h-[750px]">
        <h2 className="font-bold text-lg bg-[#FF385C] py-5 px-2 rounded-sm text-white">Publica tu Propiedad</h2>
        <section className="flex justify-center gap-3 mt-5">
          <div className="w-1/2">
            <ResidentialCategoryPicker />
            <ApartmentFeaturesForm />
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-3 mt-2">
              <label className="font-bold">Se permiten animales?</label>
              <div className="items-top flex items-center space-x-2">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Marcar si la respuesta es afirmativa
                  </label>
                </div>
              </div>
              <ApartmentImageUploader />
            </div>
            <PublishApartmentMap />
            <article className="my-2">
              <h2 className="font-bold my-2">Desea agregar algo una descripcion</h2>
              <Textarea placeholder="Te falto agregar alguna caracteristica" />
            </article>
            <ButtonUi className="bg-[#FF385C] font-bold">
              Publicar alojamiento
            </ButtonUi>
          </div>
        </section>
      </main>
    </>
  )
}
export default PublishApartment;