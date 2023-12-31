import SwitchUi from "../../../ui/Swich";

const options = [
  {
    id: 1,
    name: "Reserva inmediata",
    description: "Anuncios que no requieren esperar a que el anfitrión acepte la solicitud de reserva."
  },
  {
    id: 2,
    name: "Check-in autónomo",
    description: "Fácil acceso a la propiedad una vez que llegues."
  },
  {
    id: 3,
    name: "Se admiten mascotas",
    description: "¿Vas a llevar un animal de servicio?"
  }
]

function ReserveOptions() {
  return (
    <div className="mt-5 text-start">
      <span className='text-[1.4rem] text-[#FF385C] font-semibold'>Opciones de reserva</span>
      {
        options?.map((option: any) => (
          <div className="flex flex-row items-center justify-between mt-5">
            <div className="flex flex-col text-start">
              <span className="text-[#FF385C] font-medium">{option?.name}</span>
              <span>{option?.description}</span>
            </div>
            <div>
              <SwitchUi />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ReserveOptions;