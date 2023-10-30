import { createPortal } from "react-dom";
import { useRef, forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="rounded-md px-14 py-6 shadow-md backdrop:bg-stone-700/70"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
