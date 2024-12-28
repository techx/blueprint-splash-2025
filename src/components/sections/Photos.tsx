import Modal from "../Modal";
import "./Photos.css";

const Photos = () => {
  return (
    <div>
      <Modal className="w-[85%]">
        <div className="overflow-x-auto">
          <img
            className="w-[300%] h-auto"
            src="/images/Photos/photo string.svg"
          />
        </div>
      </Modal>

    </div>
  );
};

export default Photos;
