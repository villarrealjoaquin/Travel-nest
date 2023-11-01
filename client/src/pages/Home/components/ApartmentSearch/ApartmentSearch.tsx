import { t } from "i18next";
import { SearchIcon } from "../..";

function ApartmentSearch() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex items-center border border-black rounded-full px-4 gap-2 z-50 bg-white">
        <div className="flex flex-col border-r border-black pl-5 py-3">
          <label className="font-bold text-[0.8rem]">{t('navbar.place')}</label>
          <input
            className="focus:border-transparent focus:outline-none text-[0.8rem]"
            type="text"
            placeholder={t('navbar.explore')}
          />
        </div>
        <div className="flex flex-col border-r border-black py-3 text-[0.8rem]">
          <label className="font-bold">Check in</label>
          <input
            className="focus:border-transparent focus:outline-none text-[0.8rem]"
            type="text"
            placeholder={t('navbar.when')}
          />
        </div>
        <div className="flex flex-col border-r border-black py-3 text-[0.8rem]">
          <label className="font-bold">Check out</label>
          <input
            className="focus:border-transparent focus:outline-none text-[0.8rem]"
            type="text"
            placeholder={t('navbar.when')}
          />
        </div>
        <div className="flex flex-col py-3">
          <label className="font-bold text-[0.8rem]">{t('navbar.travellers')}</label>
          <input
            className="focus:border-transparent focus:outline-none text-[0.8rem]"
            type="text"
            placeholder={t('navbar.howMany')}
          />
        </div>
        <button className="bg-[#FF385C] rounded-3xl p-2"><SearchIcon /></button>
      </form>
    </section>
  )
}
export default ApartmentSearch;