import Modal from "../Modal";
import { useState } from "react";

const Tracks = () => {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [hoverDonutImage, setHoverDonutImage] = useState(0);
  const [track, setTrack] = useState(0);

  const handleImageClick = () => {
    setIsImageClicked(true);
  };
  return (
    <div>
      <Modal backgroundColor="#DABD93" className="w-[85%]">
        <div className="flex space-x-5 flex-row items-center justify-center h-[60vh] p-0">
          <div className="flex flex-col justify-center min-w-[30%] max-w-[30%] max-h-[100%] h-[60vh]">
            <h1 className="text-4xl font-bold mb-6">TRACKS</h1>
            <p className="text-lg leading-relaxed">
              Blueprint offers a variety of workshops that fall into various
              tracks. These workshops are meant to develop skills that may be
              useful for your hackathon project. Explore this year’s tracks by
              clicking the box to the right!
            </p>
          </div>

          <div
            className="relative w-[60%] h-[100%] flex items-center justify-center rounded-3xl p- mt-8 shadow-lg"
            style={{ backgroundColor: "#F6EBCB" }}
          >
            {!isImageClicked && (
              <img
                className="h-full w-auto"
                src="/src/assets/0_closed_box.png"
                alt="track"
                onClick={handleImageClick}
              />
            )}
            {isImageClicked && (
              <div className="h-full w-auto">
                {videoFinished ? (
                  hoverDonutImage ? (
                    <img
                      className="h-full w-auto z-49"
                      src={`/src/assets/selected/donut${hoverDonutImage}.png`}
                      alt="track"
                    />
                  ) : (
                    <img
                      className="h-full w-auto z-49"
                      src={`/src/assets/full_box.png`}
                      alt="Full Box"
                    />
                  )
                ) : (
                  <video
                    className="h-full w-auto z-49 bg-transparent"
                    src={"/src/assets/1_MP4.mp4"}
                    onEnded={() => setVideoFinished(true)}
                    autoPlay
                    muted
                  />
                )}
                {videoFinished && (
                  <>
                    <div
                      className="relative top-[-74%] left-[23%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 transition ease-linear flex items-center justify-center text-wrap text-white"
                      style={{
                        backgroundColor: "transparent",
                      }}
                      onClick={() => setTrack(1)}
                      onMouseEnter={() => setHoverDonutImage(1)}
                      onMouseLeave={() => setHoverDonutImage(0)}
                    >
                      Beginner Web Dev
                    </div>
                    <div
                      className="relative top-[-98%] left-[52%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 transition ease-linear flex items-center justify-center text-wrap text-white"
                      style={{
                        backgroundColor: "transparent",
                      }}
                      onClick={() => setTrack(4)}
                      onMouseEnter={() => setHoverDonutImage(4)}
                      onMouseLeave={() => setHoverDonutImage(0)}
                    >
                      Hardware
                    </div>
                    <div
                      className="relative top-[-96%] left-[21%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 transition ease-linear flex items-center justify-center text-wrap text-white"
                      style={{
                        backgroundColor: "transparent",
                      }}
                      onClick={() => setTrack(2)}
                      onMouseEnter={() => setHoverDonutImage(2)}
                      onMouseLeave={() => setHoverDonutImage(0)}
                    >
                      Advanced Web Dev
                    </div>
                    <div
                      className="relative top-[-121%] left-[50%] h-[24%] w-[28%] z-50 opacity-0 hover:opacity-100 transition ease-linear flex items-center justify-center text-wrap text-white"
                      style={{
                        backgroundColor: "transparent",
                      }}
                      onClick={() => setTrack(3)}
                      onMouseEnter={() => setHoverDonutImage(3)}
                      onMouseLeave={() => setHoverDonutImage(0)}
                    >
                      Game Development
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </Modal>
      {track && <TrackModal track={track} />}
    </div>
  );
};

export default Tracks;

function TrackModal({ track }: { track: number }) {
  return (
    <Modal backgroundColor="#DABD93" className="w-[85%]">
      <div className="relative w-full flex flex-row items-center justify-center h-[60vh] p-0">
        <img
          className="h-auto w-[20vw] -top-20 left-12 absolute"
          src={`/src/assets/opened/donut${track}.png`}
          alt="track"
        />
        <div className="w-full flex flex-col gap-8 text-3xl justify-end pb-16 min-w-[30%] max-w-[30%] max-h-[100%] h-[60vh]">
          <div className="bg-grass p-4 text-black rounded-l-3xl shadow-lg">
            Description
          </div>
          <div className="bg-grass p-4 text-black rounded-l-3xl shadow-lg">
            Guiding Questions
          </div>
          <div className="bg-grass p-4 text-black rounded-l-3xl shadow-lg">
            Resources
          </div>
        </div>

        <div
          className="relative w-[60%] h-[100%] flex items-center justify-center rounded-3xl mt-8 shadow-lg"
          style={{ backgroundColor: "#F6EBCB" }}
        >
          <img
            className="h-auto w-[30vw] -bottom-8 -right-[20%] absolute"
            src={`/src/assets/opened/foxdonut${track}.png`}
            alt="track"
          />
        </div>
      </div>
    </Modal>
  );
}
