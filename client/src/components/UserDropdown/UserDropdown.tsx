import { Hamburguer, UserIcon } from "..";
import { useShowModal } from "../../Hooks";

function UserDropdown() {
  const { isShowModal, modalRef, handleShowModalClick } = useShowModal();

  return (
    <article
      onClick={handleShowModalClick}
      ref={modalRef}
      className="cursor-pointer flex items-center border-2 hover:shadow-lg rounded-3xl px-3 py-1 gap-2"
    >
      <article>
        <Hamburguer />
        {isShowModal && (
          <ul className='flex flex-col gap-3 fixed right-9 font-medium border bg-white rounded-lg text-sm my-4 z-50 shadow-md'>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Registrate</li>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Iniciar sesión</li>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Publica tu Departamento</li>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Ayuda</li>
          </ul>
        )}
      </article>
      <UserIcon />
    </article>
  )
}
export default UserDropdown;