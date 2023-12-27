import { Input } from "../../../../components";
import { useApartmentContext } from "../../context/PublishApartment.context";

function ApartmentFeaturesForm() {
  const { handleChange } = useApartmentContext();
  
  return (
    <>
      <article>
        <h2 className="font-bold my-2">Caracteristicas de tu propiedad</h2>
        <div className="flex flex-col gap-3">
          <label>Capacidad</label>
          <Input onChange={handleChange} name="ability" placeholder="Para 2 personas..." />
          <label>Comodidades</label>
          <Input onChange={handleChange} name="services" placeholder="WiFi, estacionamiento, aire acondicionado, calefacción, cocina equipada" />
          <label>Número de Habitaciones y Camas</label>
          <Input onChange={handleChange} name="rooms" placeholder="2 habitaciones y 3 baños" />
          <label>Número de camas</label>
          <Input onChange={handleChange} name="beds" placeholder="ej: 3 camas" />
          <label>Precio por Noche</label>
          <Input onChange={handleChange} name="price" placeholder="10 usd" />
          {/* <label>Cuenta con seguridad?</label>
          <Input placeholder="camaras, microfonos..." /> */}
        </div>
      </article>
    </>
  )
}
export default ApartmentFeaturesForm;