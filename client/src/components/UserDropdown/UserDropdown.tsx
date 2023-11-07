import { Hamburguer, UserIcon } from "..";
import { useShowModal } from "../../Hooks";
import { useLocation } from "react-router-dom";

interface Props{
  className: string;
}

function UserDropdown(props: Props) {
  const { isShowModal, modalRef, handleShowModalClick } = useShowModal();
  const location = useLocation();

  return (
    <article
      onClick={handleShowModalClick}
      ref={modalRef}
      className={props?.className}
    >
      {location.pathname === '/' && (
        <article className="flex items-center gap-2">
        <Hamburguer />
        {isShowModal && (
          <ul className='flex flex-col gap-3 fixed right-9  top-16 font-medium border bg-white rounded-lg text-sm my-4 z-50 shadow-md'>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Registrate</li>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Iniciar sesión</li>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Publica tu Departamento</li>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Ayuda</li>
          </ul>
        )}
        <UserIcon />
      </article>
      )}
      {location.pathname === '/apartments' && (
        <article className="flex items-center h-[50px]">
        {isShowModal && (
          <ul className='flex flex-col fixed right-[83%] top-[80%] font-medium border bg-white rounded-lg text-sm my-4 z-50 shadow-md'>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Registrate</li>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Iniciar sesión</li>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Publica tu Departamento</li>
            <li className="hover:bg-[#f1f0f0] py-2 px-4">Ayuda</li>
          </ul>
        )}
        <UserIcon />
      </article>
      )}
    </article>
  )
}
export default UserDropdown;