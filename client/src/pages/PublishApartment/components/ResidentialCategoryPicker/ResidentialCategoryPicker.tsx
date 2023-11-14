import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../../../components/ui/select";

function ResidentialCategoryPicker() {
  return (
    <>
      <article>
        <h2 className="font-bold my-2">Que propiedad quieres publicar?</h2>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecciona propiedad" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Propiedades</SelectLabel>
              <SelectItem value="casa">casa</SelectItem>
              <SelectItem value="departamento">Departamento Urbano</SelectItem>
              <SelectItem value="condominio">Condominio de Lujo</SelectItem>
              <SelectItem value="chalet">Chalet Acogedor</SelectItem>
              <SelectItem value="cabaña">Cabaña en la Naturaleza</SelectItem>
              <SelectItem value="loft">Loft Moderno</SelectItem>
              <SelectItem value="villa">Villa de Playa</SelectItem>
              <SelectItem value="apartotel">Apartotel con Servicios</SelectItem>
              <SelectItem value="estudio">Estudio Compacto</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </article>
    </>
  )
}
export default ResidentialCategoryPicker;