import { t } from "i18next";
import { Global, UserDropdown } from "..";
import { Link } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../models/routes";

function Navbar() {

  return (
    <header className="sticky top-0 z-50">
      <nav className="flex flex-col items-center w-full bg-white justify-between px-10 py-5 sm:flex-row">
        <Link to='/'>
          <h2 className="text-[#FF385C] text-[2rem] font-medium sm:text-[2.5rem]">TravelNest</h2>
        </Link>
        <section className="flex items-center justify-center gap-5">
          <article className="flex gap-3">
            <Link to={PRIVATE_ROUTES.PUBLISH} className="flex items-center gap-2">
              <h3 className="text-center text-lg">{t('navbar.post')}</h3>
              <Global />
            </Link>
          </article>
          <UserDropdown className="cursor-pointer flex items-center border-2 hover:shadow-lg rounded-3xl px-3 py-1 gap-2" />
        </section>
      </nav>
    </header>
  )
}
export default Navbar;