import { useEffect, useState } from 'react';
import { apartments } from '../../../../constants';
import location from '/svgs/location.svg';

function ApparmentHero() {
  const [currentApartmentIndex, setCurrentApartmentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentApartmentIndex((prevIndex) => (prevIndex + 1) % apartments.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentApartment = apartments[currentApartmentIndex];

  return (
    <div className='flex flex-col justify-center'>
      <div className="w-full h-[700px] bg-black opacity-40 z-10"></div>
      {apartments.map((apartment, index) => (
        <img
          key={apartment.id}
          src={apartment.image}
          alt=''
          className={`absolute top-[175px] left-0 w-full h-[700px] transition-opacity duration-500 ${index === currentApartmentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ zIndex: index === currentApartmentIndex ? 1 : 0 }}
        />
      ))}
      <div className='flex flex-col absolute top-[50%] left-[5%] z-20'>
        <span className='text-white text-[4rem] max-w-4xl mb-5 font-bold'>tu hogar en cualquier lugar, descubre, conecta, vive.</span>
        <div className='flex items-center'>
          <img src={location} alt="" className='text-black' width={40} />
          <p className='text-white text-[1.4rem]  pl-2'>{currentApartment.info} <span className='font-bold'>{currentApartment.highlighted}</span></p>
        </div>
      </div>
    </div>
  )
}
export default ApparmentHero