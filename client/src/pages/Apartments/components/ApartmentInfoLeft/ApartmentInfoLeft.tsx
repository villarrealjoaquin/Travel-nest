import { Experiencie, Key, WorkPlace } from "../..";
// import { Textarea } from "../../../../components/ui/textarea";
// import { ButtonUi } from "../../../../components/ui/button";

function ApartmentInfoLeft() {
  return (
    <>
      <section className="w-1/2 flex flex-col mt-3 ">
        <article className="py-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">Vivienda alquilada entero. Anfitrión: Joaquin</h3>
              <p>4 huéspedes - 1 dormitorio - 2 camas - 1 baño</p>
            </div>
            <img
              src="https://a0.muscache.com/im/pictures/user/User-503398483/original/ddd7fe73-3507-42d5-9eeb-574b358d72e6.jpeg?im_w=240"
              className="rounded-[50px] w-12 h-12"
              alt=""
            />
          </div>
        </article>
        <article className="flex flex-col gap-5 py-2 border-t-2 mb-3 pt-3">
          <div className="flex gap-3 items-center">
            <WorkPlace />
            <div>
              <h3 className="font-bold"> Zona de trabajo</h3>
              <p className="text-sm">Una zona común con wifi ideal para trabajar.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Experiencie />
            <div>
              <h3 className="font-bold">Joaquin tiene la categoría de Superanfitrión</h3>
              <p className="text-sm">Los Superanfitriones son anfitriones con experiencia y evaluaciones excelentes.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Key />
            <div>
              <h3 className="font-bold">Fantástico proceso de check-in</h3>
              <p className="text-sm">El 100% de los últimos huéspedes calificaron con 5 estrellas el proceso de check-in.</p>
            </div>
          </div>
        </article>
        <article className="border-t-2 py-6">
          <h3 className="font-bold mb-2">Sobre el departamento: </h3>
          <p className="text-sm w-[550px]">
            Jamás te vas a olvidar de la vista de este hermoso departamento, amaneceres y atardeceres inigualables. Cada espacio pensado para que pases una estadía única y  sientas que en todo momento estamos pensando en vos y tu comodidad.
          </p>
        </article>
        {/* <article className="flex flex-col gap-3 my-2">
          <label htmlFor="message">Realiza una reseña</label>
          <Textarea placeholder="Que te parecio el departamento" />
          <p className="text-sm text-muted-foreground">
            Your message will be copied to the support team.
          </p>
          <ButtonUi>
            Enviar
          </ButtonUi>
        </article> */}
      </section>
    </>
  )
}
export default ApartmentInfoLeft;