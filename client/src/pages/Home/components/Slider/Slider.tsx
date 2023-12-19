import { Plane } from '../..'
import styles from './slider.module.css'

const SliderHome = () => {
  return (
    <section
      className={`${styles['logo-container']} border-b-solid border-2 border-b-red-500  border-t-solid border-t-red-500 py-2 lg:py-4 z-10 bg-white  `}
    >
      <div className={`${styles['logo-slide']} ${styles['logo-content']} mx-4 items-center gap-44`}>
        {[...Array(20)].map((_, index) => (
          <div key={index} className='flex items-center w-[500px] gap-24'>
            <div>
              <Plane />
            </div>
            <p className="min-w-fit text-2xl tracking-widest text-[#FF385C] uppercase">Travel Everywhere</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default SliderHome;
