import { Input } from "../../../../components";
import { Checkbox } from "../../../../components/ui/checkbox";

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

        </div>
      </article>
    </>
  )
}
export default ApartmentFeaturesForm