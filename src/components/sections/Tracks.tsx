import Modal from "../Modal";
import {useState} from "react";

const Tracks = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };
  return (
    <div>
      <Modal backgroundColor = "#DABD93" className="w-[85%]">
        <div className="flex space-x-5 flex-row items-center justify-center h-[60vh] p-0">
          <div className="flex flex-col justify-center min-w-[30%] max-w-[30%] max-h-[100%] h-[60vh]">
            <h1 className="text-4xl font-bold mb-6">TRACKS</h1>
            <p className="text-lg leading-relaxed">
              Blueprint offers a variety of workshops that fall into various tracks.
              These workshops are meant to develop skills that may be useful for your
              hackathon project. Explore this year’s tracks by clicking the box to the right!
            </p>
          </div>

          <div
          className="relative w-[60%] h-[100%] flex items-center justify-center rounded-3xl p- mt-8 shadow-lg"
          style={{ backgroundColor: "#F6EBCB" }}
          >
            {!isImageClicked && <img className="h-full w-auto" src="/src/assets/0_closed_box.png" alt="track" onClick={handleImageClick} />}
            {isImageClicked && <div className="h-full w-auto">
              <img className="h-full w-auto z-49" src="/src/assets/1_GIF.gif" alt="track" />
              <div className="relative top-[-74%] left-[23%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 flex items-center justify-center text-wrap text-white" style={{ backgroundColor: 'transparent'}}>Beginner Web Dev</div>
              <div className="relative top-[-98%] left-[52%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 flex items-center justify-center text-wrap text-white" style={{ backgroundColor: 'transparent'}}>Hardware</div>
              <div className="relative top-[-96%] left-[21%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 flex items-center justify-center text-wrap text-white" style={{ backgroundColor: 'transparent'}}>Advanced Web Dev</div>
              <div className="relative top-[-121%] left-[50%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 flex items-center justify-center text-wrap text-white" style={{ backgroundColor: 'transparent'}}> Game Development</div>
            </div>}            
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Tracks;
