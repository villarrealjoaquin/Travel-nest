import { Plane } from '../..';
import styles from './slider.module.css';

const SliderHome = () => {
  return (
    <section className={`${styles['logo-container']} border-b-solid border-2 border-b-red-500  border-t-solid border-t-red-500py-2 lg:py-4 z-10 bg-white`}>
      <article className={`${styles['logo-slide']} ${styles['logo-content']} mx-4 items-center gap-16`}>
        {[...Array(20)].map((_, index) => (
          <>
            <div key={index}>
              <Plane />
            </div>
            <p className="min-w-fit text-2xl tracking-widest text-[#FF385C]">travel everywhere</p>
          </>
        ))}
      </article>
    </section>
  )
}
export default SliderHome;
