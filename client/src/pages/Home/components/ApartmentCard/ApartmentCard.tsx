import { Link } from 'react-router-dom';
import { Button } from '../../../../components/index.ts';
import { apartmentsData } from '../../../../constants/index.ts';
import { useLocation } from 'react-router-dom';
import { Star } from '../Icons/Icons.tsx';
import { PUBLIC_ROUTES } from '../../../../models/routes.ts';

function ApartmentCard() {
  const location = useLocation()

  return (
    <section className='flex flex-col justify-center items-center'>
      {location.pathname === '/' && <h2 className='text-[#FF385C] text-center my-7 text-3xl'>Asi que... cual elegiras?</h2>}
      <ul className='grid w-full grid-cols-[repeat(auto-fit,minmax(400px,1fr))] place-items-center'>
        {location.pathname === '/' && apartmentsData.slice(0, 8).map((apartment, i) => (
          <Link to={`${PUBLIC_ROUTES.APARTMENTS}/${apartment?.id}`} key={`${apartment.title} - ${i}`}>
            <li
              className='flex flex-col justify-around h-[500px]'
            >
              <img
                src={apartment.image}
                className='object-contain'
                alt={`image of apartment ${apartment.title}`}
              />
              <div className='flex justify-between items-center'>
                <h3 className='font-bold'>{apartment.title}</h3>
                <div className='flex items-center gap-2'>
                  <Star /> 4.93
                </div>
              </div>
              <p className='w-[350px] text-sm'>{apartment.description}</p>
              <p><span className='font-bold h-[100px]'>${apartment.price}</span> noche</p>
            </li>
          </Link>
        ))}
        {location.pathname === '/apartments' && apartmentsData.map((apartment, i) => (
          <Link to={`${PUBLIC_ROUTES.APARTMENTS}/${apartment?.id}`} key={`${apartment.title} - ${i}`}>
            <li
              className='flex flex-col justify-around h-[500px]'
            >
              <img
                src={apartment.image}
                className='object-contain'
                alt={`image of apartment ${apartment.title}`}
              />
              <div className='flex justify-between items-center'>
                <h3 className='font-bold'>{apartment.title}</h3>
                <div className='flex items-center gap-2'>
                  <Star /> 4.93
                </div>
              </div>
              <p className='w-[350px] text-sm'>{apartment.description}</p>
              <p><span className='font-bold h-[100px]'>${apartment.price}</span> noche</p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  )
}
export default ApartmentCard;

