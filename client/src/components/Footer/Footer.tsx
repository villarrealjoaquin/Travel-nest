import { Link } from "react-router-dom";
import { ParticlesBackground } from "..";

function Footer() {
  return (
    <footer className="relative w-full">
      <section className="flex flex-col gap-5 text-[#FF385C] absolute left-1/2 top-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 ">
        <h2 className="text-6xl font-bold">TravelNest</h2>
        <article className="flex justify-center gap-3">
          <Link to="https://github.com/villarrealjoaquin" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="cursor-pointer"
              width={40}
              height={40}
              alt="github Icon"
            />
          </Link>
          <Link to="https://github.com/SantiagoMuscolo" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              className="cursor-pointer"
              width={40}
              height={40}
              alt="github Icon"
            />
          </Link>
        </article>
        <div>
          <p>Designed by Joaquin Villarreal & Santiago muscolo</p>
          <p>All rights reserved 2023™</p>
        </div>
      </section>
      <ParticlesBackground />
    </footer>
  )
}
export default Footer;