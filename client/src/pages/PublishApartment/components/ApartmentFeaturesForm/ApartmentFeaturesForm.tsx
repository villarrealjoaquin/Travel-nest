import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";

function ApartmentFeaturesForm() {
  return (
    <>
      <article>
        <h2 className="font-bold my-2">Caracteristicas de tu propiedad</h2>
        <div className="flex flex-col gap-3">
          <label>Capacidad</label>
          <Input placeholder="Para 2 personas..." />
          <label>Comodidades</label>
          <Input placeholder="WiFi, estacionamiento, aire acondicionado, calefacción, cocina equipada" />
          <label>Número de Habitaciones y Camas</label>
          <Input placeholder="2 habitaciones y 3 baños" />
          <label>Número de Habitaciones y Camas</label>
          <Input placeholder="2 habitaciones y 3 camas" />
          <label>Precio por Noche</label>
          <Input placeholder="10 usd" />
          <label>Cuenta con seguridad?</label>
          <Input placeholder="camaras, microfonos..." />
          <label>Se permiten animales?</label>
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
        </div>
      </article>
    </>
  )
}
export default ApartmentFeaturesForm