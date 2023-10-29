import { useEffect, useRef, useState } from "react";

function useShowModal(initialState = false) {
  const [isShowModal, setIsShowModal] = useState(initialState);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleShowModalClick = () => {
    setIsShowModal(!isShowModal);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsShowModal(false);
    }
  };

  useEffect(() => {
    if (isShowModal) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShowModal]);

  return { isShowModal, modalRef, handleShowModalClick };
}
export default useShowModal;