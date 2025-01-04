import { FaTimes } from "react-icons/fa";

interface ModalProps {
  backgroundColor?: string;
  children: React.ReactNode;
  className?: string;
}
const Modal = ({
  backgroundColor = "#F5EECB",
  children,
  className = "",
}: ModalProps) => {
  return (
    <div className="fixed inset-0 min-h-screen w-full flex justify-center items-center">
      <div className="relative mx-auto flex items-center justify-center">
        {/* Content container */}
        <div
          className={`
            relative min-h-[70vh] max-h-[70vh] w-[80vw] rounded-3xl mt-8 p-8 z-40 overflow-visible
            ${className}
          `}
        >
          {/* Close button fixed inside the top-right corner of the modal */}
          <a
            href="/"
            className="absolute top-4 right-4 w-8 h-8 z-50 cursor-pointer"
            style={{ backgroundColor }}
          >
            <FaTimes className="w-full h-full text-[#D25B6A]" />
          </a>

          {/* Modal content */}
          {children}
        </div>

        {/* Background/style container */}
        <div
          className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-h-[70vh] w-[80vw] rounded-3xl mt-4 p-8 shadow-lg z-30 overflow-visible
          `}
          style={{ backgroundColor }}
        ></div>
      </div>
    </div>
  );
};

export default Modal;
