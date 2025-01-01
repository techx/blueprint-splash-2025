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
    <div className="fixed inset-0 min-h-screen w-full p-4 flex justify-center items-center">
      <div className="relative h-full w-full mx-auto flex items-center justify-center overflow-visible">
        {/* Close button */}
        <a
          href="/"
          className="absolute top-[17%] right-[11%] w-8 h-8 z-30"
          style={{ backgroundColor }}
        >
          <FaTimes className="w-full h-full text-[#D25B6A]" />
        </a>

        {/* Content container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
          <div
            className={`
              relative min-h-[70vh] max-h-[70vh] p-8 mt-8 z-10
              ${className}
            `}
          >
            {children}
          </div>
        </div>

        {/* Background/style container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
          <div
            className={`
              relative min-h-[70vh] w-[80%] rounded-3xl p-8 mt-8
              shadow-lg z-0
            `}
            style={{ backgroundColor }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
