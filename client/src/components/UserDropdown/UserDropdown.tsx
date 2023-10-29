import { UserIcon } from "..";
import useShowModal from "../../Hooks/useShowModal";

function UserDropdown() {
  const { isShowModal, modalRef, handleShowModalClick } = useShowModal();
  
  return (
    <article
      onClick={handleShowModalClick}
      ref={modalRef}
      className="cursor-pointer flex items-center border  border-black rounded-3xl px-3 py-1 gap-2"
    >
      <article>
        <div className="w-5 h-px bg-black my-1"></div>
        <div className="w-5 h-px bg-black my-1"></div>
        <div className="w-5 h-px bg-black my-1"></div>
        {isShowModal && (
          <ul className="flex flex-col gap-3 p-3 fixed right-9 font-medium bg-white rounded-lg text-sm my-4 z-50 shadow-md">
            <li>Registrate</li>
            <li>Iniciar sesión</li>
            <li>Publica tu Departamento</li>
            <li>Ayuda</li>
          </ul>
        )}
      </article>
      <UserIcon />
    </article>
  )
}
export default UserDropdown;