import { useState, useEffect, useRef } from "react";
import Modal from "../Modal";

interface ImageData {
  src: string;
  caption: string;
}

const imageData: ImageData[] = [
  {
    src: "/Full Images/Full1.JPG",
    caption:
      "A visitor from Boston Dynamics, Spot, attends a workshop alongside Blueprint ‘24 attendees.",
  },
  {
    src: "/Full Images/Full2.JPG",
    caption:
      "Attendees had the chance to talk with local organizations at the organization fair.",
  },
  {
    src: "/Full Images/Full3.JPG",
    caption: "Blueprint ‘24 attendees at the hardware learnathon workshop!",
  },
  {
    src: "/Full Images/Full4.JPG",
    caption: "Advanced web dev workshop in progress.",
  },
  {
    src: "/Full Images/Full5.JPG",
    caption: "Hackathon day begins!",
  },
  {
    src: "/Full Images/Full6.JPG",
    caption: "Teams are given 8 hours to complete their hackathon project.",
  },
  {
    src: "/Full Images/Full7.JPG",
    caption: "A surprise visit from Tim the Beaver, MIT‘s mascot!",
  },
  {
    src: "/Full Images/Full8.JPG",
    caption:
      "Attendees race to build the tallest cup stacking tower in one of the Blueprint ‘24 mini-events.",
  },
  {
    src: "/Full Images/Full9.JPG",
    caption:
      "The final stretch before the submission deadline on hackathon day.",
  },
  {
    src: "/Full Images/Full10.JPG",
    caption: "The winners of the general category from Blueprint ‘24.",
  },
];

const imageDataCompressed: ImageData[] = [
  {
    src: "Pre1.png",
    caption:
      "A visitor from Boston Dynamics, Spot, attends a workshop alongside Blueprint ‘24 attendees.",
  },
  {
    src: "Pre2.jpg",
    caption:
      "Attendees had the chance to talk with local organizations at the organization fair.",
  },
  {
    src: "Pre3.jpg",
    caption: "Blueprint ‘24 attendees at the hardware learnathon workshop!",
  },
  {
    src: "Pre4.jpg",
    caption: "Advanced web dev workshop in progress.",
  },
  {
    src: "Pre5.jpg",
    caption: "Hackathon day begins!",
  },
  {
    src: "Pre6.jpg",
    caption: "Teams are given 8 hours to complete their hackathon project.",
  },
  {
    src: "Pre7.jpg",
    caption: "A surprise visit from Tim the Beaver, MIT‘s mascot!",
  },
  {
    src: "Pre8.jpg",
    caption:
      "Attendees race to build the tallest cup stacking tower in one of the Blueprint ‘24 mini-events.",
  },
  {
    src: "Pre9.jpg",
    caption:
      "The final stretch before the submission deadline on hackathon day.",
  },
  {
    src: "Pre10.jpg",
    caption: "The winners of the general category from Blueprint ‘24.",
  },
];

const Photos = () => {
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const preloadImage = (src: string) => {
    const img = new Image();
    img.src = `/src/assets/${src}`;
  };

  const openModal = (index: number) => {
    setOpenImageIndex(index);
  };

  const closeModal = () => {
    setOpenImageIndex(null);
  };

  // Close modal if clicked outside the modal container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalContainerRef.current &&
        !modalContainerRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (openImageIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openImageIndex]);

  return (
    <div>
      <Modal>
        <div className="flex flex-col items-center">
          <div className="min-w-[90%] -translate-y-[5%]">
            <div className="relative w-full h-[80vh]">
              <img
                src="/images/Photos/transparent_bg.svg"
                className="absolute top-0 left-0 w-full object-cover"
              />
            </div>
            <h1 className="text-7xl font-bold absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              PHOTOS
            </h1>
          </div>
          <div
            className="absolute top-[76%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-[28vh] overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onWheel={(e) => {
              const container = e.currentTarget;
              e.stopPropagation();
              container.scrollLeft += e.deltaY;
            }}
            onMouseEnter={() => {
              document.body.style.overflow = "hidden";
            }}
            onMouseLeave={() => {
              document.body.style.overflow = "";
            }}
            style={{ touchAction: "none" }}
          >
            <div className="relative">
              <div className="w-[300vh] mx-auto absolute z-40">
                <img
                  src="/images/Photos/photo_string.svg"
                  alt="Photo String"
                  className="w-full z-40"
                />
              </div>

              <div className="flex flex-row justify-between absolute top-3 w-[300vh] pl-[1vh] pr-[5vh] z-10">
                {imageDataCompressed.map((item, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer transition-transform transform hover:scale-110 w-[26vh] h-[26vh] z-10"
                  >
                    <img
                      className="absolute inset-0 w-full h-full z-10"
                      src="/images/Photos/polaroid_bg.svg"
                      alt="Polaroid background"
                    />
                    <div
                      className="absolute top-[16%] left-[8%] w-[84%] h-[60%] overflow-hidden z-20"
                      onMouseEnter={() => preloadImage(imageData[index].src)}
                    >
                      <img
                        className="w-full h-full object-cover z-20"
                        src={`/src/assets/Preview Images/${item.src}`}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => openModal(index)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Large image pop up */}
          {openImageIndex !== null && (
            <div className="fixed inset-0 z-50">
              {/* Backdrop for dimming the rest of the screen */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Modal content */}
              <div className="fixed inset-0 flex items-center justify-center">
                <div
                  ref={modalContainerRef}
                  className="bg-polaroid h-[80vh] w-[60vw] rounded-xl p-8 shadow-2xl overflow-hidden flex flex-col z-60 relative"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={`/src/assets/${imageData[openImageIndex].src}`}
                        alt={`Large View ${openImageIndex + 1}`}
                        className="w-full object-contain"
                      />
                    </div>
                    <p className="mt-6 text-center text-lg min-h-[3rem]">
                      {imageData[openImageIndex].caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Photos;
