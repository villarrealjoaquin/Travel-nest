import { Button } from "../../../../components";
import { InputFile } from "../../../../components/ui/InputFile";

function ApartmentImageUploader() {
  return (
    <>
      <article className="my-3">
        <h2 className="font-bold my-2">Cargar imagenes de tu propiedad</h2>
        <div className="flex flex-col gap-3 mt-4">
          <InputFile />
          <Button className="bg-[#FF385C] rounded py-2 px-3 mr-auto text-white font-bold">Cargar Archivo</Button>
        </div>
      </article>
    </>
  )
}
export default ApartmentImageUploader;