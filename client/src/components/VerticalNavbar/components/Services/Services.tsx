import { Checkbox } from "../../..";

const checkBoxes = [
    {
        id: 1,
        name: "wifi"
    },
    {
        id: 2,
        name: "Lavarropas"
    },
    {
        id: 3,
        name: "Aire acondicionado"
    },
    {
        id: 4,
        name: "Cocina"
    },
    {
        id: 5,
        name: "Secadora"
    },
    {
        id: 5,
        name: "Calefacción"
    }
]
function Services(){

    return(
        <div className="flex flex-col items-start mt-5 border-b pb-6">
            <span className='text-[1.4rem] text-[#FF385C] font-semibold '>Servicios</span>
            <span className='text-[1rem] text-black'>Servicios básicos</span>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-6 place-items-start gap-x-48" >
                {
                    checkBoxes?.map((checkbox: any) => (
                        <div key={checkbox.id}  className="pb-4 text-center flex items-center gap-4">
                        <Checkbox className="border-[#FF385C] w-[25px] h-[25px] data-[state=checked]:bg-[#FF385C]"/>
                        <label className="text-lg">{checkbox.name}</label>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services;