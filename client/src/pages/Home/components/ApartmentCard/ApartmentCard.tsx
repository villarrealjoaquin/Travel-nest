import { apartmentsData } from '../../../../constants/index.ts';
import { Start } from '../Icons/Icons.tsx';

function ApartmentCard() {
  return (
    <section>
      <h2 className='text-[#FF385C] text-center my-7 text-3xl'>Asi que... cual elegiras?</h2>
      <ul className='grid w-full grid-cols-[repeat(auto-fit,minmax(400px,1fr))] place-items-center'>
        {apartmentsData.map((apartment, i) => (
          <li
            key={`${apartment.title} - ${i}`}
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
                <Start /> 4.93
              </div>
            </div>
            <p className='w-[350px] text-sm'>{apartment.description}</p>
            <p><span className='font-bold h-[100px]'>${apartment.price}</span> noche</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default ApartmentCard;

