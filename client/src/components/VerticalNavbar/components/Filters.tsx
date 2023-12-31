import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import './style.css'
import RoomsAndBeds from './Rooms&Beds/Rooms&Beds';
import FirstClassAccommodation from './FirstClassAccommodation/FirstClassAccomodation';
import HaveProperty from './HaveProperty/HaveProperty';
import Services from './Services/Services';
import ReserveOptions from './ReserveOptions/ReserveOptions';

interface Props {
  setOpen: any;
  open: any;
}

function Filters({ setOpen, open }: Props) {
  const [activeButton, setActiveButton] = useState("any")
  const [priceRange, setPriceRange] = useState({ min: 10, max: 320 });

  const handleRangeChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^\d]/g, '');

    if (numericValue !== '') {
      const numValue = parseInt(numericValue, 10);

      if (name === 'min' && numValue >= 1 && numValue <= priceRange.max) {
        setPriceRange({ ...priceRange, min: numValue});
      } else if (name === 'max' && numValue <= 320 && numValue >= priceRange.min) {
        setPriceRange({ ...priceRange, max: numValue });
      }
    } else {
      if (name === 'min') {
        setPriceRange({ ...priceRange, min: 1 });
      } else if (name === 'max') {
        setPriceRange({ ...priceRange, max: 320 });
      }
    }
  };

  const formatValue = (value: any) => `$${value}`;


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-600"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-y-auto rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all w-[900px] h-[800px]">
                <div>
                  <div className="text-center">
                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-700 border-b pb-2">
                      Filtros
                    </Dialog.Title>
                    <div className="mt-5 border-b pb-6">
                      <div className='flex flex-col justify-start items-start'>
                        <span className='text-[1.4rem] text-[#FF385C] font-semibold '>Tipo de alojamiento</span>
                        <p className='font-medium'>Buscá habitaciones, alojamientos enteros o cualquier otro tipo de espacio.</p>
                      </div>
                      <div className='mt-6'>
                        <button className={`border text-lg font-semibold border-gray rounded-tl-2xl rounded-bl-2xl p-5 w-[30%] transition duration-300 ease-in-out hover:border-[#FF385C] text-[#FF385C] ${activeButton === 'any' ? 'bg-[#FF385C]  text-white' : ''}`} onClick={() => setActiveButton('any')}>Cualquier tipo</button>
                        <button className={`border text-lg font-semibold border-gray p-5 w-[30%] transition duration-300 ease-in-out hover:border-[#FF385C] text-[#FF385C] ${activeButton === 'room' ? 'bg-[#FF385C]  text-white' : ''}`} onClick={() => setActiveButton('room')}>Habitación</button>
                        <button className={`border text-lg font-semibold border-gray rounded-tr-2xl  rounded-br-2xl  p-5 w-[30%] transition duration-300 ease-in-out hover:border-[#FF385C] text-[#FF385C] ${activeButton === 'entire' ? 'bg-[#FF385C]  text-white' : ''}`} onClick={() => setActiveButton('entire')}>Alojamiento entero</button>
                      </div>
                    </div>
                    <div className="mt-5 border-b pb-6 sm:mt-6">
                      <div className="mt-5">
                        <div className='flex flex-col justify-start items-start'>
                        <span className='text-[1.4rem] text-[#FF385C] font-semibold '>Rango de Precios</span>
                        <p className='font-medium'>Precios por noche (impuestos y tarifas no incluidos).</p>
                        </div>
                        
                        <div className="mt-4 h-6 w-full bg-gray-200 rounded-lg">
                          <div
                            className="h-6 bg-[#FF385C] rounded-lg"
                            style={{
                              width: `${((priceRange.max - priceRange.min) / (320 - 10)) * 100}%`,
                              marginLeft: `${((priceRange.min - 10) / (320 - 10)) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <div className="mt-3 flex justify-around">
                          <input
                            type="range"
                            name="min"
                            className="w-full text-[#FF385C]"
                            value={priceRange.min}
                            onChange={handleRangeChange}
                            min="10"
                            max={priceRange.max}
                            step="1"
                          />
                          <input
                            type="range"
                            name="max"
                            className="w-full"
                            value={priceRange.max}
                            onChange={handleRangeChange}
                            min={priceRange.min}
                            max="320"
                            step="1"
                          />
                        </div>
                        <div className="mt-3 flex justify-around">
                          <div className='flex flex-col items-start'>
                            <span>precio minimo</span>
                            <input
                              type="text"
                              name="min"
                              className="border border-gray-300 rounded-md p-2 outline-none"
                              value={formatValue(priceRange.min)}
                              onChange={handleRangeChange}
                              onBlur={() => {
                                if (priceRange.min as any === '') setPriceRange({ ...priceRange, min: 10 });
                              }}
                            />

                          </div>
                          <div className='flex flex-col items-start'>
                            <span>precio maximo</span>
                            <input
                              type="text"
                              name="max"
                              className="border border-gray-300 rounded-md p-2 outline-none"
                              value={formatValue(priceRange.max)}
                              onChange={handleRangeChange}
                              onBlur={() => {
                                if (priceRange.max  as any  === '') setPriceRange({ ...priceRange, max: 320 });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <RoomsAndBeds />
                    <FirstClassAccommodation />
                    <HaveProperty />
                    <Services />
                    <ReserveOptions />
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  {/* <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setOpen(!open)}
                  >
                    Go back to dashboard
                  </button> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Filters;