import { t } from "i18next"
import { Global, UserDropdown } from "..";

function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-white z-50">
      <nav className="flex items-center justify-between px-10 py-5">
        <h2 className="text-[#FF385C] text-[2.5rem] font-medium">TravelNest</h2>
        <section className="flex items-center gap-5">
          <article className="flex gap-3">
            <h3 className="text-lg text-center">{t('navbar.post')}</h3>
            <Global />
          </article>
          <UserDropdown />
        </section>
      </nav>
    </header>
)
export default Navbar;