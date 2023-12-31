import { Medal } from 'lucide-react';
import { useState } from 'react';

function FirstClassAccommodation() {
  const [activeButton, setActiveButton] = useState(true)
  console.log(activeButton)
  return (
    <div className="mt-5 flex flex-col justify-start items-start border-b pb-6">
      <span className='text-[1.4rem] text-[#FF385C] font-semibold '>Alojamientos de primera</span>
      <button className={`p-4 border transition duration-300 ease-in-out rounded-lg mt-5 w-[50%] hover:border-[#FF385C]
       active:shadow-inner active:scale-95 ${activeButton ? 'border-[#FF385C] border-2' : ''}`} onClick={() => setActiveButton(!activeButton)}>
          <Medal className='w-[50px] h-[50px] mb-2 text-[#FF385C]' />
        <div className='flex flex-col justify-start items-start ml-1'>
          <span className='font-semibold text-[1.1rem] text-[#FF385C]'>Favoritos entre huéspedes</span>
          <span className='text-gray-500 max-w-xs text-start'>Los alojamientos en Travel nest mas encantadores, segun los huéspedes.</span>
        </div>
      </button>
    </div>
  )
}

export default FirstClassAccommodation;