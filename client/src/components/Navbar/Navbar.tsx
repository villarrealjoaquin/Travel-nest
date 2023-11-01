import { t } from "i18next"
import { Global, UserDropdown } from "..";
import { Link } from "react-router-dom";
import { ApartmentSearch } from "../../pages";

function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-white z-50">
      <nav className="flex flex-col items-center justify-between px-10 py-5 sm:flex-row">
        <Link to='/'>
          <h2 className="text-[#FF385C] text-[2rem] font-medium sm:text-[2.5rem]">TravelNest</h2>
        </Link>
        {/* <ApartmentSearch /> */}
        <section className="flex items-center justify-center gap-5">
          <article className="flex gap-3">
            <h3 className="text-center text-lg">{t('navbar.post')}</h3>
            <Global />
          </article>
          <UserDropdown />
        </section>
      </nav>
    </header>
  )
}
export default Navbar;