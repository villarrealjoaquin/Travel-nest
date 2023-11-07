import { useEffect, useState } from 'react';
import { apartments, mobileApartments } from '../../../../constants';
import location from '/svgs/location.svg';
import { t } from 'i18next';

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

  const isMobile = window.innerWidth < 500;

  const currentApartment: any = isMobile ? mobileApartments[currentApartmentIndex] : apartments[currentApartmentIndex];

  return (
    <section className='flex flex-col justify-center'>
      <div className="w-full h-[500px] bg-black opacity-40 z-10 xl:h-[700px] lg:h-[700px] md:h-[700px] sm:h-[700px]"></div>
      {isMobile ? mobileApartments.map((apartment: { image: string | undefined, id: number }, index: number) => (
        <img
          key={apartment.id}
          src={apartment.image}
          alt='mobile-apartment-image'
          className={`absolute left-0 w-full h-[500px] transition-opacity duration-500 ${index === currentApartmentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ zIndex: index === currentApartmentIndex ? 1 : 0 }}
        />
      )) : apartments.map((apartment, index) => (
        <img
          key={apartment.id}
          src={apartment.image}
          alt='desktop-apartment-image'
          className={`absolute left-0 w-full h-[700px] transition-opacity duration-500 ${index === currentApartmentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ zIndex: index === currentApartmentIndex ? 1 : 0 }}
        />
      ))}
      {}
      <div className='flex flex-col absolute top-[49%] left-[10px] z-20
      sm:top-[45%] sm:left-[5%]
      md:top-[40%] md:left-[5%]
      lg:top-[40%] lg:left-[5%]
      xl:top-[40%] xl:left-[5%]
      '>
        <span className='text-white text-[2.2rem] max-w-md mb-5 font-bold text-center
        sm:text-[2.6rem] sm:max-w-lg sm:text-start
        md:text-[3rem] md:max-w-2xl md:text-start
        lg:text-[3.4rem] lg:max-w-3xl lg:text-start
        xl:text-[4rem] xl:max-w-4xl xl:text-start
        '>{t('home.homeTitle')}
        </span>
        <div className='items-center hidden xl:flex lg:flex md:flex sm:flex'>
          <img src={location} alt="" className='text-black' width={40} />
          <p className='text-white text-[1rem] xl:text-[1.5rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem]  pl-2'>{currentApartment?.info} <span className='font-bold'>{currentApartment?.highlighted}</span></p>
        </div>
      </div>
    </section>
  )
}
export default ApparmentHero