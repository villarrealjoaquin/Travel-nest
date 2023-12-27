import { Textarea } from "../../../../components"

function DescriptionSectionApartment() {
  return (
    <>
      <article className="my-2">
        <h2 className="font-bold my-2">Desea agregar algo una descripcion</h2>
        <Textarea placeholder="Te falto agregar alguna caracteristica" />
      </article>
    </>
  )
}
export default DescriptionSectionApartment;