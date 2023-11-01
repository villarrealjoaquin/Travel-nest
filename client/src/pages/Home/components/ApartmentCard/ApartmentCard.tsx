import { Link } from 'react-router-dom';
import { apartmentsData } from '../../../../constants/index.ts';
import { Star } from '../Icons/Icons.tsx';
import { PUBLIC_ROUTES } from '../../../../utils/routes.ts';

function ApartmentCard() {
  return (
    <>
      <section className='flex justify-center flex-col'>
        <h2 className='text-[#FF385C] text-center my-7 text-3xl'>Asi que... cual elegiras?</h2>
        <ul className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 w-[90%] m-auto'>
          {apartmentsData.map((apartment, i) => (
            <li key={`${apartment.title} - ${i}`} className='flex flex-col w-[303px] m-auto'>
              <Link to={`${PUBLIC_ROUTES.APARMENTS}/${apartment.id}`} className='flex flex-col justify-evenly h-[358px]'>
                <img
                  src={apartment.image}
                  className='w-full'
                  alt={`image of apartment ${apartment.title}`}
                />
                <div className='flex justify-between'>
                  <h3 className='font-bold'>{apartment.title}</h3>
                  <div className='flex items-center gap-2'>
                    <Star /> 4.93
                  </div>
                </div>
                <p className='text-sm'>{apartment.description}</p>
                <p><span className='font-bold'>${apartment.price}</span> noche</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
export default ApartmentCard;

