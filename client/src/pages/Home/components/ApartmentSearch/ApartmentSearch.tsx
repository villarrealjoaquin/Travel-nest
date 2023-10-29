import { SearchIcon } from "../..";

function ApartmentSearch() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="flex justify-center relative top-10">
        <form onSubmit={handleSubmit} className="flex items-center border border-black rounded-full px-4 gap-2 z-50 bg-white">
          <div className="flex flex-col border-r border-black pl-5 py-3">
            <label className="font-bold">Lugar</label>
            <input
              className="focus:border-transparent focus:outline-none"
              type="text"
              placeholder="Explora destinos"
            />
          </div>
          <div className="flex flex-col border-r border-black py-3">
            <label className="font-bold">Check in</label>
            <input
              className="focus:border-transparent focus:outline-none"
              type="text"
              placeholder="¿Cuándo?"
            />
          </div>
          <div className="flex flex-col border-r border-black py-3">
            <label className="font-bold">Check out</label>
            <input
              className="focus:border-transparent focus:outline-none"
              type="text"
              placeholder="¿Cuándo?"
            />
          </div>
          <div className="flex flex-col py-3">
            <label className="font-bold">Viajeros</label>
            <input
              className="focus:border-transparent focus:outline-none"
              type="text"
              placeholder="¿Cuántos?"
            />
          </div>
          <button className="bg-[#FF385C] rounded-3xl p-2"><SearchIcon /></button>
        </form>
      </section>
    </>
  )
}
export default ApartmentSearch