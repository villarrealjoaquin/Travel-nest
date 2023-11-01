import { useParams } from "react-router-dom";
import { Apartment, BannerView, Experiencie, Key, WorkPlace } from ".";
import { Star } from "..";
import { Button } from "../../components";
import { DatePickerWithRange } from "../../components/ui/DatePicketWithRange";
import { apartmentsData } from "../../constants";

function ApartmentDetail() {
  const { id } = useParams();
  const castToNumber = id ? parseInt(id) : 0;
  const apartment: Apartment = apartmentsData[castToNumber];

  return (
    <>
      <main className="w-full grid place-content-center">
        <BannerView apartment={apartment} />
        <div className="flex gap-5 w-full">
          <section className="w-1/2 flex flex-col mt-3 ">
            <article className="py-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-medium">Vivienda alquilada entero. Anfitrión: Joaquin</h3>
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
                  <h3 className="font-medium"> Zona de trabajo</h3>
                  <p className="text-sm">Una zona común con wifi ideal para trabajar.</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Experiencie />
                <div>
                  <h3 className="font-medium">Joaquin tiene la categoría de Superanfitrión</h3>
                  <p className="text-sm">Los Superanfitriones son anfitriones con experiencia y evaluaciones excelentes.</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Key />
                <div>
                  <h3 className="font-medium">Fantástico proceso de check-in</h3>
                  <p className="text-sm">El 100% de los últimos huéspedes calificaron con 5 estrellas el proceso de check-in.</p>
                </div>
              </div>
            </article>
            <article className="border-t-2 py-6">
              <h3 className="font-medium mb-2">Sobre el departamento: </h3>
              <p className="text-sm w-[550px]">
                Jamás te vas a olvidar de la vista de este hermoso departamento, amaneceres y atardeceres inigualables. Cada espacio pensado para que pases una estadía única y  sientas que en todo momento estamos pensando en vos y tu comodidad.
              </p>
            </article>
          </section>
          <section className="w-1/2">
            <article className='flex justify-between items-center my-5'>
              <h2><span className="font-medium">${apartment.price} USD</span> noche</h2>
              <div className="flex items-center gap-3">
                <Star />
                <p> 5,0 · 24 evaluaciones</p>
              </div>
            </article>
            <DatePickerWithRange className="place-items-center" />
            <div className="flex justify-center mt-3">
              <Button className="bg-[#FF385C] flex items-center gap-2 text-white px-10 py-2 rounded-[20px] hover:text-[#cfcfcf] transition-transform transform hover:scale-105">
                Reservar
              </Button>
            </div>
            <article className="flex flex-col gap-3 my-5">
              <div className="flex justify-between text-sm">
                <p>$${apartment.price} USD por 7 noches Mostrar el desglose del precio</p>
                <p>${apartment.price * 7} USD</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Tarifa de limpieza Mostrar el desglose del precio</p>
                <p>${17} USD</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Tarifa por servicio de AirbnbMostrar el desglose del precio</p>
                <p>${10} USD</p>
              </div>
            </article>
            <article>
              <p className="text-center font-thin">La reserva no incluye impuestos</p>
            </article>
          </section>
        </div>
      </main>
    </>
  )
}
export default ApartmentDetail;

