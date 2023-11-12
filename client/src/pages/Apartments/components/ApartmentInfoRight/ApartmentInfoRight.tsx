import { Apartment, ReportApartment } from "../..";
import { DatePickerWithRange } from "../../../../components/ui/DatePicketWithRange";
import { Button } from "../../../../components";
import { Star } from "../../..";
import { Link } from "react-router-dom";

function ApartmentInfoRight({ apartment }: { apartment: Omit<Apartment, 'id'> }) {
  return (
    <>
      <section className="w-1/2 my-2 flex flex-col justify-between">
        <article className='flex justify-between items-center my-5'>
          <h2><span className="font-bold">${apartment.price} USD</span> noche</h2>
          <div className="flex items-center gap-3">
            <Star />
            <p> <span className="font-bold">5,0</span> - 0 evaluaciones</p>
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
            <p>${apartment.price} USD por 7 noches Mostrar el desglose del precio</p>
            <p className="font-bold">${apartment.price * 7} USD</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Tarifa de limpieza Mostrar el desglose del precio</p>
            <p className="font-bold">${17} USD</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Tarifa por servicio de AirbnbMostrar el desglose del precio</p>
            <p className="font-bold">${10} USD</p>
          </div>
        </article>
        <article>
          <p className="text-center font-thin">La reserva no incluye impuestos</p>
        </article>
        <article className="my-3 border-2 py-2 px-1 rounded-sm">
          <p>Total de reserva: <span className="font-bold">${apartment.price * 17 * 10}</span></p>
        </article>
        <article className="flex items-center gap-2 justify-center">
          <ReportApartment />
          <Link to='/'>
            <p className="hover:text-[#9a9a9a]">Denunciar este anuncio</p>
          </Link>
        </article>
      </section>
    </>
  )
}
export default ApartmentInfoRight;