import { useState } from "react";

const buttons = [
  {
    name: "Cualquiera"
  },
  {
    name: "1"
  },
  {
    name: "2"
  },
  {
    name: "3"
  },
  {
    name: "4"
  },
  {
    name: "5"
  },
  {
    name: "6"
  },
  {
    name: "7"
  },
  {
    name: "8+"
  }
]

function RoomsAndBeds() {
  const [activeRoomsButton, setActiveRoomsButton] = useState("Cualquiera")
  const [activeBedsButton, setActiveBedsButton] = useState("Cualquiera")
  const [activeBathroomsButton, setActiveBathrromsButton] = useState("Cualquiera")

  return (
    <div className="mt-5 flex flex-col justify-start items-start border-b pb-6">
      <span className='text-[1.4rem] text-[#FF385C] font-semibold '>Habitaciones y camas</span>
      <span className="text-[1.1rem] mt-4">Dormitorios</span>
      <div className="flex space-x-12 mt-4">
        {
          buttons.map((button, index) => (
            <button
              key={index}
              className={`border-2 rounded-xl p-4 transition duration-300 ease-in-out
                                ${activeRoomsButton === button.name ? 'bg-[#FF385C] text-white border-[#FF385C]' : 'border-transparent'}
                            `}
              onClick={() => setActiveRoomsButton(button.name)}
            >
              {button.name}
            </button>
          ))
        }
      </div>
      <span className="text-[1.1rem] mt-8">Camas</span>
      <div className="flex space-x-12 mt-4">
        {
          buttons.map((button, index) => (
            <button
              key={index}
              className={`border-2 rounded-xl p-4 transition duration-300 ease-in-out
                                ${activeBedsButton === button.name ? 'bg-[#FF385C] text-white border-[#FF385C]' : 'border-transparent'}
                            `}
              onClick={() => setActiveBedsButton(button.name)}
            >
              {button.name}
            </button>
          ))
        }
      </div>
      <span className="text-[1.1rem] mt-8">Baños</span>
      <div className="flex space-x-12 mt-4">
        {
          buttons.map((button, index) => (
            <button
              key={index}
              className={`border-2 rounded-xl p-4 transition duration-300 ease-in-out
                                ${activeBathroomsButton === button.name ? 'bg-[#FF385C] text-white border-[#FF385C]' : 'border-transparent'}
                            `}
              onClick={() => setActiveBathrromsButton(button.name)}
            >
              {button.name}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default RoomsAndBeds;