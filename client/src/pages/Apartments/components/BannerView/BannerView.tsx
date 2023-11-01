import { Apartment, Heart, Share } from "../.."
import { Star } from "../../.."

function BannerView({ apartment }: { apartment: Apartment }) {
  return (
    <>
      <section className="">
        <h2 className="text-xl font-medium mb-1">{apartment.title}</h2>
        <article className="flex justify-between">
          <div className="flex items-center gap-2">
            <Star />
            <p> 4,96 - 25 evaluaciones - <span>Buenos Aires, Argentina</span></p>
          </div>
          <article className="flex gap-2">
            <div className="flex items-center gap-1">
              <Share />
              <p><span>Compartir</span></p>
            </div>
            <div className="flex items-center gap-1">
              <Heart />
              <p> Guardar</p>
            </div>
          </article>
        </article>
        <img
          src={apartment.image}
          className="w-[1100px] h-[600px] mt-2"
          alt={`image of apartment - ${apartment.title}`}
        />
      </section>
    </>
  )
}
export default BannerView