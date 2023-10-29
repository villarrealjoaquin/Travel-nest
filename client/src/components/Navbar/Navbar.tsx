import { t } from "i18next"
import { Global, UserIcon } from "."

function Navbar() {
  return (
    <>
      <header className="w-full">
        <nav className="flex items-center justify-between px-10 py-5">
          <h2 className="text-[#FF385C] text-[2.5rem] font-medium">TravelNest</h2>
          <section className="flex items-center gap-5">
            <article className="flex gap-3">
              <h3 className="text-lg text-center">{t('navbar.post')}</h3>
              <Global />
            </article>
            <article className="flex items-center border border-black rounded-3xl px-3 py-1 gap-2">
              <article className="cursor-pointer">
                <div className="w-5 h-px bg-black my-1"></div>
                <div className="w-5 h-px bg-black my-1"></div>
                <div className="w-5 h-px bg-black my-1"></div>
              </article>
              <UserIcon />
            </article>
          </section>
        </nav>
      </header>
    </>
  )
}
export default Navbar;